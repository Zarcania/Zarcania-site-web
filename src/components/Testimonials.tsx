import React from 'react';
import { Award, ThumbsUp, CheckCircle } from 'lucide-react';
import GoogleReviews from './GoogleReviews';

const Testimonials = () => {
  // Removed static testimonials grid; Google Reviews now display real feedback.

  const stats = [
    { icon: <Award className="w-6 h-6" />, value: '98%', label: 'Satisfaction' },
    { icon: <CheckCircle className="w-6 h-6" />, value: '50+', label: 'Projets livrés' },
    { icon: <ThumbsUp className="w-6 h-6" />, value: '7j', label: 'Délai moyen' }
  ];
  return (
    <section className="py-8 sm:py-12 md:py-16 bg-transparent relative">
      <div className="absolute inset-0 bg-gradient-to-br from-slate-800/40 via-blue-900/20 to-slate-900/40" />
      <div className="container-responsive">
        {/* Header amélioré */}
        <div className="text-center margin-responsive relative z-10 animate-fadeInUp">
        </div>
      </div>
      <div className="container-responsive">
        <div className="text-center margin-responsive relative z-10 animate-fadeInUp">
          <h2 className="heading-responsive font-bold font-futuristic text-white margin-responsive tracking-wide" id="testimonials">
            Ce que disent nos clients
          </h2>
          <p className="text-responsive-base text-gray-300 max-w-3xl mx-auto font-modern leading-relaxed">
            Découvrez les retours authentiques de nos clients satisfaits et leurs projets réussis.
          </p>
        </div>

        {/* Avis Google dynamiques */}
        <div className="max-w-4xl mx-auto mb-10 relative z-10 animate-fadeInUp animate-delay-100">
          <GoogleReviews />
        </div>

        {/* Stats rapides */}
        <div className="flex justify-center mb-12 relative z-10 animate-fadeInUp animate-delay-100">
          <div className="grid grid-cols-3 gap-8 bg-slate-800/60 backdrop-blur-md border border-cyan-500/30 rounded-2xl p-6 shadow-xl shadow-slate-900/50">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="w-12 h-12 bg-gradient-to-br from-cyan-500 to-blue-500 rounded-xl flex items-center justify-center text-white mx-auto mb-3 shadow-lg shadow-cyan-500/30">
                  {stat.icon}
                </div>
                <div className="text-2xl font-bold font-futuristic text-cyan-400 mb-1 tracking-wider">{stat.value}</div>
                <div className="text-gray-400 font-modern text-sm">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>

  {/* Grille de témoignages statiques supprimée */}

        {/* Call to action */}
        <div className="text-center mt-12 relative z-10 animate-fadeInUp animate-delay-400">
          <div className="bg-gradient-to-br from-slate-800/80 via-cyan-900/20 to-slate-800/80 backdrop-blur-md border border-cyan-500/40 rounded-2xl p-8 max-w-2xl mx-auto hover:border-cyan-400/60 transition-all duration-300 shadow-2xl shadow-slate-900/50">
            <h3 className="text-2xl font-bold font-futuristic text-white mb-4 tracking-wide">
              Rejoignez nos clients satisfaits
            </h3>
            <p className="text-gray-300 font-modern mb-6 leading-relaxed">
              Découvrez pourquoi plus de 50 entreprises nous font confiance pour leur présence digitale.
            </p>
            <button onClick={() => window.dispatchEvent(new Event('navigate:portfolio'))} className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-semibold rounded-xl hover:from-cyan-400 hover:to-blue-400 hover:shadow-lg hover:shadow-cyan-500/30 transition-all duration-300 font-modern">
              Voir nos réalisations
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;