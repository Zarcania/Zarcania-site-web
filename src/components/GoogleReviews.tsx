import React, { useEffect, useState } from 'react';
import { Star } from 'lucide-react';

type Review = {
  rating: number;
  authorName: string;
  relativeTime: string;
  text?: string;
  source?: 'Google' | 'Manuel';
  createdAtISO?: string; // utilisé pour calculer le badge "NOUVEAU" côté manuel
};

type ReviewsResponse = {
  rating: number | null;
  userRatingCount: number;
  reviews: Review[];
};

const StarRow: React.FC<{ value: number; className?: string }> = ({ value, className }) => (
  <div className={`flex ${className ?? ''}`} aria-label={`${value} étoiles`}>
    {[...Array(5)].map((_, i) => (
      <Star key={i} className={`w-4 h-4 ${i < Math.round(value) ? 'text-yellow-400 fill-yellow-400' : 'text-slate-500'}`} />
    ))}
  </div>
);

const GoogleReviews: React.FC = () => {
  const [data, setData] = useState<ReviewsResponse | null>(null);
  const [loading, setLoading] = useState(true);

  // Avis manuel épinglé (fourni par le client)
  const pinned: Review = {
    authorName: 'Lionel Pro',
    rating: 5,
    relativeTime: 'il y a un jour',
    text: "Je suis ravie d'avoir contacté Mr Corradi. Pour la maquette de mon site internet d'entreprise, je recommande 👍🏼",
    source: 'Manuel',
    createdAtISO: new Date(Date.now() - 24 * 60 * 60 * 1000).toISOString()
  };

  const NEW_WINDOW_DAYS = 7;
  const isNewReview = (r: Review): boolean => {
    // 1) Si l'avis manuel a une date précise
    if (r.source === 'Manuel' && r.createdAtISO) {
      const created = new Date(r.createdAtISO).getTime();
      const diffDays = (Date.now() - created) / (1000 * 60 * 60 * 24);
      return diffDays <= NEW_WINDOW_DAYS;
    }
    // 2) Heuristique sur le texte relatif provenant de Google
    const s = (r.relativeTime || '').toLowerCase();
    if (!s) return false;
    // très récent
    if (/(minute|min|heure|hour)/i.test(s)) return true;
    // "un jour", "1 jour", "1 day"
    if (/(^|\s)(un|1)\s+(jour|day)(s)?/i.test(s)) return true;
    const mDay = s.match(/(\d+)\s*(jour|jours|day|days)/i);
    if (mDay) {
      const d = parseInt(mDay[1], 10);
      return d <= NEW_WINDOW_DAYS;
    }
    const mWeek = s.match(/(\d+)\s*(semaine|semaines|week|weeks)/i);
    if (mWeek) {
      const w = parseInt(mWeek[1], 10);
      return w * 7 <= NEW_WINDOW_DAYS;
    }
    return false;
  };

  useEffect(() => {
    let cancelled = false;
    const run = async () => {
      setLoading(true);
      try {
        const res = await fetch('/.netlify/functions/google-reviews');
        if (!res.ok) throw new Error(`HTTP ${res.status}`);
        const json = (await res.json()) as ReviewsResponse;
        if (!cancelled) setData(json);
      } catch (e: unknown) {
        // En cas d'erreur, on log et on tombera sur le fallback (avis épinglé)
        if (!cancelled) console.error('google-reviews failed', e);
      } finally {
        if (!cancelled) setLoading(false);
      }
    };
    run();
    return () => {
      cancelled = true;
    };
  }, []);

  if (loading) {
    return (
      <div className="bg-slate-800/60 border border-cyan-500/30 rounded-xl p-4 text-gray-300 text-sm">
        Chargement des avis Google…
      </div>
    );
  }

  // Avis supplémentaires saisis manuellement (captures fournies)
  const manualExtras: Review[] = [
    {
      authorName: '死 Zèleph 死',
      rating: 5,
      relativeTime: 'il y a 3 jours',
      text: 'Réactif, rigoureux et à l\'écoute je recommande vivement !',
      source: 'Manuel',
      createdAtISO: new Date(Date.now() - 3 * 24 * 60 * 60 * 1000).toISOString()
    },
    {
      authorName: 'shadow itpla',
      rating: 5,
      relativeTime: 'il y a 2 semaines',
      text: 'J\'ai été prestataire avec l\'entreprise "Zarcania". La communication était parfaite entre nous, très accueillant je conseille vivement !',
      source: 'Manuel',
      createdAtISO: new Date(Date.now() - 14 * 24 * 60 * 60 * 1000).toISOString()
    }
  ];

  // Fallback: si l’API échoue, on affiche avis épinglé + extras
  const effectiveReviews = [pinned, ...manualExtras, ...((data?.reviews ?? []))];
  const avg = data?.rating ?? pinned.rating;
  const total = data?.userRatingCount ?? 1;

  return (
    <div className="bg-slate-800/60 border border-cyan-500/30 rounded-2xl p-6 shadow-xl shadow-slate-900/50">
      <div className="flex items-center justify-between mb-4">
        <div>
          <div className="text-white font-bold font-modern">Avis Google</div>
          <div className="flex items-center gap-2 text-gray-300 text-sm">
            <StarRow value={avg ?? 0} />
            <span className="text-cyan-300 font-medium">{avg?.toFixed ? avg.toFixed(1) : avg}</span>
            {data?.userRatingCount != null && (
              <span className="text-gray-400">({total} avis)</span>
            )}
          </div>
        </div>
        <div className="flex items-center gap-3">
          <img src="/google-g.svg" alt="Google" className="w-6 h-6" />
          <a
            href="https://g.page/r/CSzon7sXqzyaEAE/review"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-xs sm:text-sm px-3 py-1.5 rounded-lg bg-cyan-500/20 text-cyan-200 border border-cyan-400/40 hover:bg-cyan-500/30 transition-colors"
          >
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
              <path d="M12 4a1 1 0 011 1v6h6a1 1 0 110 2h-6v6a1 1 0 11-2 0v-6H5a1 1 0 110-2h6V5a1 1 0 011-1z" />
            </svg>
            Ajouter un avis
          </a>
        </div>
      </div>

      <div className="grid gap-4">
        {effectiveReviews.map((r, idx) => (
          <div key={idx} className={`bg-slate-700/40 rounded-xl p-4 border ${r.source === 'Manuel' ? 'border-cyan-400/40' : 'border-cyan-500/20'}`}>
            <div className="flex items-center justify-between mb-1">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-gradient-to-br from-cyan-500 to-blue-500 flex items-center justify-center text-white text-sm font-semibold">
                  {r.authorName?.charAt(0) ?? 'A'}
                </div>
                <div>
                  <div className="text-white font-medium flex items-center gap-2">
                    {r.authorName}
                    {isNewReview(r) && (
                      <span className="text-[10px] px-2 py-0.5 rounded-full bg-cyan-500/20 text-cyan-300 border border-cyan-500/40">NOUVEAU</span>
                    )}
                  </div>
                  <div className="text-xs text-gray-500">{r.relativeTime}</div>
                </div>
              </div>
              <StarRow value={r.rating} />
            </div>
            {r.text && <p className="text-gray-300 text-sm leading-relaxed whitespace-pre-line">{r.text}</p>}
          </div>
        ))}
      </div>
    </div>
  );
};

export default GoogleReviews;
