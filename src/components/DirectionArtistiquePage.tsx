import React from 'react';

const Swatch: React.FC<{ hex: string; name?: string; text?: 'light' | 'dark' }> = ({ hex, name, text = 'light' }) => (
  <div className="rounded-xl overflow-hidden border border-white/10">
    <div className="h-20" style={{ backgroundColor: hex }} />
    <div className={`p-3 text-sm ${text === 'light' ? 'text-white' : 'text-slate-900'}`} style={{ background: text === 'light' ? 'rgba(15,23,42,0.6)' : 'rgba(255,255,255,0.9)' }}>
      <p className="font-semibold">{name ?? hex}</p>
      <p className="opacity-80">{hex}</p>
    </div>
  </div>
);

const TypeCard: React.FC<{ family: string; usage: string; sampleClass?: string }> = ({ family, usage, sampleClass }) => (
  <div className="rounded-xl border border-cyan-500/20 bg-slate-900/40 p-5">
    <p className="text-gray-400 text-xs uppercase tracking-wider">{usage}</p>
    <p className={`mt-2 text-2xl md:text-3xl text-white ${sampleClass}`}>{family}</p>
    <p className="mt-3 text-gray-300 text-sm">ABCDEFGHIJKLMNOPQRSTUVWXYZ<br/>abcdefghijklmnopqrstuvwxyz<br/>0123456789</p>
  </div>
);

const DirectionArtistiquePage: React.FC = () => {
  return (
    <main className="min-h-screen bg-transparent relative overflow-hidden">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-40 -right-40 h-96 w-96 rounded-full blur-3xl bg-cyan-500/10" />
        <div className="absolute -bottom-40 -left-32 h-[28rem] w-[28rem] rounded-full blur-3xl bg-blue-500/10" />
      </div>
      <div className="container-responsive relative z-10">
        {/* Hero */}
        <section className="pt-28 md:pt-32 pb-10 text-center">
          <h1 className="text-4xl md:text-5xl font-ultra-futuristic font-bold tracking-widest text-transparent bg-clip-text bg-gradient-to-br from-white via-blue-100 to-cyan-300">
            Direction artistique
          </h1>
          <p className="text-gray-300 mt-3 font-modern max-w-3xl mx-auto">
            La charte visuelle qui guide tous nos écrans : couleurs, typo, logo, imagerie et mouvement.
          </p>
          <div className="mt-6">
            <img src="/logo.png?v=4" alt="Logo Zarcania" className="w-20 h-20 mx-auto rounded-full shadow-lg shadow-cyan-500/20" />
          </div>
        </section>

        {/* Palette */}
        <section className="py-8 md:py-12">
          <h2 className="text-white text-2xl font-semibold mb-4">Palette de couleurs</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-4">
            <Swatch hex="#0F172A" name="Slate 900" text="light" />
            <Swatch hex="#111827" name="Slate 800" text="light" />
            <Swatch hex="#06B6D4" name="Cyan 500" text="dark" />
            <Swatch hex="#22D3EE" name="Cyan 400" text="dark" />
            <Swatch hex="#60A5FA" name="Blue 400" text="dark" />
            <Swatch hex="#93C5FD" name="Blue 300" text="dark" />
          </div>
          <p className="text-gray-400 text-sm mt-3">Arrière-plan sombre, accents cyan/bleu lumineux. Contraste AA minimum respecté.</p>
        </section>

        {/* Typographies */}
        <section className="py-8 md:py-12">
          <h2 className="text-white text-2xl font-semibold mb-4">Typographies</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <TypeCard family="Orbitron" usage="Titres • Marque" sampleClass="font-ultra-futuristic" />
            <TypeCard family="Exo 2" usage="Paragraphes • UI" sampleClass="font-modern" />
          </div>
          <p className="text-gray-400 text-sm mt-3">Hiérarchie claire : titres courts impactants, textes lisibles et aérés.</p>
        </section>

        {/* Logo */}
        <section className="py-8 md:py-12">
          <h2 className="text-white text-2xl font-semibold mb-4">Logo & usages</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="rounded-xl border border-cyan-500/20 bg-slate-900/40 p-5 text-center">
              <img src="/logo.png?v=4" alt="Logo" className="w-16 h-16 mx-auto rounded-full" />
              <p className="text-gray-300 text-sm mt-3">Version principale sur fond sombre</p>
            </div>
            <div className="rounded-xl border border-cyan-500/20 bg-white/90 p-5 text-center">
              <img src="/logo.png?v=4" alt="Logo" className="w-16 h-16 mx-auto rounded-full" />
              <p className="text-slate-700 text-sm mt-3">Version sur fond clair</p>
            </div>
            <div className="rounded-xl border border-cyan-500/20 bg-slate-900/40 p-5">
              <p className="text-white font-semibold">Interdits</p>
              <ul className="list-disc list-inside text-gray-300 text-sm mt-2">
                <li>Ne pas déformer ou étirer</li>
                <li>Ne pas modifier les couleurs</li>
                <li>Respecter les marges de sécurité</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Imagerie */}
        <section className="py-8 md:py-12">
          <h2 className="text-white text-2xl font-semibold mb-4">Imagerie & mood</h2>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
            {['/zarcania-preview.png','/AudioLight ACCUEIL.png','/Audiolight catalogue.png','/SanKalpa Yoga.png','/restaurant accueil.png','/files_3416049-1757015881450-logistique pied de page.png'].map((src)=> (
              <div key={src} className="relative rounded-xl overflow-hidden border border-white/10">
                <img src={src} alt="Mood" className="w-full h-36 object-cover" loading="lazy" decoding="async" />
              </div>
            ))}
          </div>
          <p className="text-gray-400 text-sm mt-3">Préférence pour les contrastes marqués, lumières froides et textures spatiales discrètes.</p>
        </section>

        {/* Mouvement */}
        <section className="py-8 md:py-12">
          <h2 className="text-white text-2xl font-semibold mb-4">Mouvement & interactions</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="rounded-xl p-5 border border-cyan-500/20 bg-slate-900/40">
              <p className="text-white font-semibold">Subtil</p>
              <p className="text-gray-300 text-sm mt-2">Transitions de 150‑250ms, easing sortant, parallaxe légère.</p>
            </div>
            <div className="rounded-xl p-5 border border-cyan-500/20 bg-slate-900/40">
              <p className="text-white font-semibold">Signifiant</p>
              <p className="text-gray-300 text-sm mt-2">Les animations guident l’attention, jamais décoratives.</p>
            </div>
            <div className="rounded-xl p-5 border border-cyan-500/20 bg-slate-900/40">
              <p className="text-white font-semibold">Performant</p>
              <p className="text-gray-300 text-sm mt-2">GPU‑friendly, pas d’animations bloquantes, respect de prefers‑reduced‑motion.</p>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-10 md:py-14">
          <div className="rounded-2xl border border-cyan-500/20 bg-gradient-to-br from-slate-900/60 via-slate-900/30 to-slate-800/40 p-8 md:p-10 text-center">
            <h3 className="text-white text-2xl md:text-3xl font-bold">Besoin d’une version PDF ?</h3>
            <p className="text-gray-300 mt-2">Nous pouvons fournir un kit de marque complet sur demande.</p>
            <div className="mt-6 flex items-center justify-center gap-3">
              <a href="/contact" className="px-5 py-2.5 rounded-lg bg-cyan-500 text-slate-900 font-semibold hover:bg-cyan-400 transition">Demander le kit</a>
              <a href="/a-propos" className="px-5 py-2.5 rounded-lg border border-cyan-500/40 text-white hover:border-cyan-300/60 transition">Voir notre approche</a>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
};

export default DirectionArtistiquePage;
