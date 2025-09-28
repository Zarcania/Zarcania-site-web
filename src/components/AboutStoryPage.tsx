import React from 'react';

const AboutStoryPage: React.FC = () => {
  return (
    <main className="min-h-screen bg-transparent relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900/40 via-blue-900/20 to-slate-800/40" />
      <div className="container-responsive py-24 relative z-10">
        <header className="text-center mb-10 animate-fadeInUp">
          <h1 className="text-4xl md:text-5xl font-bold font-futuristic text-white tracking-wide">
            L'histoire de Zarcania
          </h1>
          <p className="text-gray-300 font-modern mt-3 max-w-3xl mx-auto">
            Découvrez notre parcours, notre vision et les valeurs qui nous animent.
          </p>
        </header>

        <article className="prose prose-invert max-w-3xl mx-auto text-gray-200 font-modern">
          <h2>Nos débuts</h2>
          <p>
            Zarcania est née d'une ambition simple : rendre la création de sites web professionnels
            rapide, accessible et de haute qualité. Depuis 2025, nous concevons des sites vitrines et
            e‑commerce livrés en 7 jours, sans compromis sur le design ni la performance.
          </p>

          <h2>Notre méthode</h2>
          <p>
            Nous allions design soigné, technologies modernes et SEO dès le départ. Chaque projet suit
            un process clair : découverte, maquette, développement, optimisation et livraison.
          </p>

          <h2>Vision</h2>
          <p>
            Notre objectif est d'offrir la meilleure expérience client possible : transparence, vitesse
            d'exécution, et accompagnement. Nous croyons qu'un site performant est un levier de
            croissance et de crédibilité.
          </p>
        </article>
      </div>
    </main>
  );
};

export default AboutStoryPage;
