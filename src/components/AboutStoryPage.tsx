import React from 'react';

const SectionTitle: React.FC<{ kicker?: string; title: string; subtitle?: string }> = ({ kicker, title, subtitle }) => (
  <div className="text-center max-w-3xl mx-auto mb-10">
    {kicker && <p className="text-cyan-300/90 uppercase tracking-widest text-xs font-semibold mb-2">{kicker}</p>}
    <h2 className="text-3xl md:text-4xl font-bold text-white font-futuristic leading-tight">{title}</h2>
    {subtitle && <p className="text-gray-300 mt-3 font-modern">{subtitle}</p>}
  </div>
);

const StatCard: React.FC<{ value: string; label: string }> = ({ value, label }) => (
  <div className="rounded-xl border border-cyan-500/20 bg-slate-900/40 p-4 shadow-lg shadow-cyan-900/10">
    <p className="text-2xl md:text-3xl font-bold text-white">{value}</p>
    <p className="text-gray-400 text-sm mt-1">{label}</p>
  </div>
);

const TimelineItem: React.FC<{ step: string; title: string; desc: string }>=({ step, title, desc })=> (
  <div className="relative pl-8">
    <div className="absolute left-0 top-1.5 h-4 w-4 rounded-full bg-gradient-to-br from-cyan-400 to-blue-500 shadow shadow-cyan-500/30" />
    <p className="text-cyan-300 text-xs uppercase tracking-wider font-semibold">{step}</p>
    <h4 className="text-white font-semibold mt-1">{title}</h4>
    <p className="text-gray-300 text-sm mt-1">{desc}</p>
  </div>
);

const AboutStoryPage: React.FC = () => {
  return (
    <main className="min-h-screen bg-transparent relative overflow-hidden">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-40 -right-40 h-96 w-96 rounded-full blur-3xl bg-cyan-500/10" />
        <div className="absolute -bottom-40 -left-32 h-[28rem] w-[28rem] rounded-full blur-3xl bg-blue-500/10" />
      </div>
      <div className="container-responsive relative z-10">
        {/* Hero */}
        <section className="pt-28 md:pt-32 pb-12">
          <div className="text-center animate-fadeInUp">
            <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-cyan-500/30 bg-slate-900/40 text-cyan-300 text-xs tracking-wider">
              <span className="h-1.5 w-1.5 rounded-full bg-cyan-400 animate-pulse" /> Agence web • Paris
            </span>
            <h1 className="mt-4 text-4xl md:text-5xl font-bold font-ultra-futuristic tracking-widest text-transparent bg-clip-text bg-gradient-to-br from-white via-blue-100 to-cyan-300">
              L'histoire de Zarcania
            </h1>
            <p className="text-gray-300 font-modern mt-4 max-w-3xl mx-auto">
              Design, performance et simplicité. Nous concevons des expériences digitales qui vont droit au but.
            </p>
            <div className="mt-8 grid grid-cols-2 sm:grid-cols-4 gap-3 max-w-3xl mx-auto">
              <StatCard value="7 j" label="Délai moyen de livraison" />
              <StatCard value="100%" label="Sites responsives" />
              <StatCard value="A+" label="Score Lighthouse visé" />
              <StatCard value="SEO" label="Optimisé dès le départ" />
            </div>
            <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
              <a href="/contact" className="px-5 py-2.5 rounded-lg bg-cyan-500 text-slate-900 font-semibold hover:bg-cyan-400 transition">Nous contacter</a>
              <a href="/portfolio" className="px-5 py-2.5 rounded-lg border border-cyan-500/40 text-white hover:border-cyan-300/60 transition">Voir le portfolio</a>
            </div>
          </div>
        </section>

        {/* Histoire de Zarcania */}
        <section className="py-10 md:py-14">
          <SectionTitle kicker="Prologue" title="D'où l'on part" subtitle="L'histoire de Zarcania commence avec deux frères et une vision commune." />
          <div className="max-w-4xl mx-auto space-y-8">
            <div className="rounded-xl p-6 bg-slate-900/40 border border-cyan-500/20">
              <p className="text-gray-300 leading-relaxed">
                Au début, deux frères. <strong className="text-white">Anthony</strong> et <strong className="text-white">Jordan</strong> bricolent des serveurs, rassemblent des communautés et apprennent à se compléter. Très vite, un rythme s'impose : l\'un structure et explique, l'autre construit et consolide. Pas d\'effet de manche, juste le travail répété qui crée une méthode commune.
              </p>
            </div>

            <div className="rounded-xl p-6 bg-slate-900/40 border border-cyan-500/20">
              <h3 className="text-cyan-300 font-semibold text-lg mb-3">I — Les premières cartes</h3>
              <p className="text-gray-300 leading-relaxed">
                Répondre, organiser, prioriser : les échanges s'étendent jusqu'à l'international. On documente, on teste, on dit les choses simplement. Ce n'est pas spectaculaire, mais solide—et ça tient.
              </p>
            </div>

            <div className="rounded-xl p-6 bg-slate-900/40 border border-cyan-500/20">
              <h3 className="text-cyan-300 font-semibold text-lg mb-3">II — Le langage des signes</h3>
              <p className="text-gray-300 leading-relaxed">
                Des symboles précèdent le nom : la fusée (l'élan), Paris (l'origine), trois étoiles (la mémoire), et <strong className="text-white">ZA</strong> comme une signature. Le logo ne vend rien : il raconte pourquoi on avance et d'où l'on part.
              </p>
            </div>

            <div className="rounded-xl p-6 bg-slate-900/40 border border-cyan-500/20">
              <h3 className="text-cyan-300 font-semibold text-lg mb-3">III — La leçon du projet trop grand</h3>
              <p className="text-gray-300 leading-relaxed">
                Un projet dépasse tout. Il apprend à découper, décider, tenir un cap et à renoncer au contrôle total. Quand il s'arrête, il laisse surtout une direction claire : bâtir une structure fidèle à notre façon de faire.
              </p>
            </div>

            <div className="rounded-xl p-6 bg-slate-900/40 border border-cyan-500/20">
              <h3 className="text-cyan-300 font-semibold text-lg mb-3">IV — Zarcania</h3>
              <p className="text-gray-300 leading-relaxed">
                De ce cap naît <strong className="text-white">Zarcania</strong>. Anthony tient la ligne (organisation, relation, clarté). Jordan pose la charpente (conception, développement, fiabilité) en tant que prestataire de confiance. <strong className="text-white">Lucas</strong>, ami de longue date, relie le duo : écoute du terrain, portes qui s'ouvrent dans le bon ordre. Le trio élargit le duo.
              </p>
            </div>

            <div className="rounded-xl p-6 bg-slate-900/40 border border-cyan-500/20">
              <h3 className="text-cyan-300 font-semibold text-lg mb-3">V — Grandir proprement</h3>
              <p className="text-gray-300 leading-relaxed">
                Le bureau s'ordonne, les dossiers s'empilent sans chaos, les écrans restent allumés tard quand il le faut. Pas de promesses en série : des preuves. Une entreprise familiale, tenace et franche, qui garde l'exigence avant le discours.
              </p>
            </div>

            <div className="rounded-xl p-6 bg-slate-900/40 border border-cyan-500/20">
              <h3 className="text-cyan-300 font-semibold text-lg mb-3">VI — Ce qu'on garde, ce qu'on change</h3>
              <p className="text-gray-300 leading-relaxed">
                On garde la fusée, Paris, les trois étoiles, ZA : des repères. On change nos outils et nos habitudes quand c'est nécessaire. Aller vite et bien quand c'est possible, plus loin que la version d'hier, ne pas s'éparpiller.
              </p>
            </div>

            <div className="rounded-xl p-6 bg-gradient-to-br from-cyan-900/20 via-slate-900/40 to-blue-900/20 border border-cyan-500/30">
              <h3 className="text-cyan-300 font-semibold text-lg mb-3">Épilogue — Constantes</h3>
              <p className="text-gray-300 leading-relaxed">
                Il restera toujours : la fusée (décider de partir), Paris (base de lancement), les trois étoiles (on n'avance jamais seuls). Le reste est affaire de travail, patience et accords tenus. C'est peu et c'est beaucoup. <strong className="text-white">C'est Zarcania.</strong>
              </p>
            </div>
          </div>
        </section>

        {/* Méthode */}
        <section className="py-10 md:py-14">
          <SectionTitle kicker="Méthode" title="Un process clair, efficace" subtitle="Chaque projet suit 5 étapes, du cadrage à la mise en ligne." />
          <div className="grid md:grid-cols-5 gap-6">
            <TimelineItem step="01" title="Découverte" desc="Objectifs, audience, positionnement, benchmark." />
            <TimelineItem step="02" title="Wireframe" desc="Structure, parcours utilisateur, contenus clés." />
            <TimelineItem step="03" title="Design" desc="Charte, UI, micro-interactions, cohérence visuelle." />
            <TimelineItem step="04" title="Dev" desc="React + Vite, performance, accessibilité, SEO." />
            <TimelineItem step="05" title="Lancement" desc="Optimisations finales, suivi, évolutions." />
          </div>
        </section>

        {/* Valeurs */}
        <section className="py-10 md:py-14">
          <SectionTitle kicker="Valeurs" title="Ce qui guide chaque décision" />
          <div className="grid md:grid-cols-3 gap-6">
            <div className="rounded-xl p-6 bg-slate-900/40 border border-cyan-500/20">
              <h3 className="text-white font-semibold">Clarté</h3>
              <p className="text-gray-300 mt-2 text-sm">Un message simple, une navigation évidente, des interfaces sans friction.</p>
            </div>
            <div className="rounded-xl p-6 bg-slate-900/40 border border-cyan-500/20">
              <h3 className="text-white font-semibold">Vitesse</h3>
              <p className="text-gray-300 mt-2 text-sm">Livraisons rapides et sites ultra‑performants. Le temps, c'est un avantage.</p>
            </div>
            <div className="rounded-xl p-6 bg-slate-900/40 border border-cyan-500/20">
              <h3 className="text-white font-semibold">Exécution</h3>
              <p className="text-gray-300 mt-2 text-sm">Des standards élevés, des détails soignés, une solide base technique.</p>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-12 md:py-16">
          <div className="rounded-2xl border border-cyan-500/20 bg-gradient-to-br from-slate-900/60 via-slate-900/30 to-slate-800/40 p-8 md:p-10 text-center">
            <h3 className="text-white text-2xl md:text-3xl font-bold">Prêt à accélérer votre projet ?</h3>
            <p className="text-gray-300 mt-2">Parlons de votre site, de vos objectifs et de votre audience.</p>
            <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
              <a href="/rendez-vous" className="px-5 py-2.5 rounded-lg bg-cyan-500 text-slate-900 font-semibold hover:bg-cyan-400 transition">Prendre rendez‑vous</a>
              <a href="/portfolio" className="px-5 py-2.5 rounded-lg border border-cyan-500/40 text-white hover:border-cyan-300/60 transition">Voir nos réalisations</a>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
};

export default AboutStoryPage;
