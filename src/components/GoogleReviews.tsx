import React, { useEffect, useState } from 'react';
import { Star } from 'lucide-react';

type Review = {
  rating: number;
  authorName: string;
  relativeTime: string;
  text?: string;
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
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);

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
        if (!cancelled) setError(e instanceof Error ? e.message : 'Erreur');
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

  if (error || !data) {
    return (
      <div className="bg-slate-800/60 border border-cyan-500/30 rounded-xl p-4 text-gray-400 text-sm">
        Les avis Google seront bientôt disponibles.
      </div>
    );
  }

  return (
    <div className="bg-slate-800/60 border border-cyan-500/30 rounded-2xl p-6 shadow-xl shadow-slate-900/50">
      <div className="flex items-center justify-between mb-4">
        <div>
          <div className="text-white font-bold font-modern">Avis Google</div>
          <div className="flex items-center gap-2 text-gray-300 text-sm">
            <StarRow value={data.rating ?? 0} />
            <span className="text-cyan-300 font-medium">{data.rating?.toFixed(1) ?? '—'}</span>
            <span className="text-gray-400">({data.userRatingCount} avis)</span>
          </div>
        </div>
        <img src="https://www.gstatic.com/images/branding/product/1x/google_g_48dp.png" alt="Google" className="w-6 h-6" />
      </div>

      <div className="grid gap-4">
        {data.reviews.map((r, idx) => (
          <div key={idx} className="bg-slate-700/40 rounded-xl p-4 border border-cyan-500/20">
            <div className="flex items-center justify-between mb-1">
              <div className="text-white font-medium">{r.authorName}</div>
              <StarRow value={r.rating} />
            </div>
            {r.text && <p className="text-gray-300 text-sm leading-relaxed">{r.text}</p>}
            <div className="text-xs text-gray-500 mt-1">{r.relativeTime}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default GoogleReviews;
