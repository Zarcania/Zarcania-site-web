import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import PlanetAnimation from './PlanetAnimation';

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-transparent py-20">
      {/* Overlay pour améliorer la lisibilité */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900/30 via-blue-900/20 to-slate-800/30" />

      {/* Content */}
      <div className="relative z-20 text-center container mx-auto px-6 max-w-5xl animate-fadeInUp">
        <h1 className="text-4xl md:text-6xl font-bold font-futuristic text-white mb-8 leading-tight tracking-wide animate-fadeInUp animate-delay-300">
          Sites Web Express
          <span className="block text-2xl md:text-3xl text-cyan-400 mt-2 font-modern">
            Livrés en 7 jours maximum
          </span>
        </h1>
        
        <div className="mb-8">
          <p className="text-lg md:text-xl text-gray-300 max-w-4xl mx-auto font-modern leading-relaxed mb-6">
            🚀 <strong className="text-cyan-300">Agence web professionnelle à Paris</strong> - Création rapide de sites vitrines et e-commerce avec design moderne, SEO optimisé et support technique inclus.
          </p>
          <div className="flex flex-wrap justify-center gap-4 text-sm text-cyan-300 font-medium">
            <span className="bg-slate-800/60 px-4 py-2 rounded-full border border-cyan-500/30">✓ Design Responsive</span>
            <span className="bg-slate-800/60 px-4 py-2 rounded-full border border-cyan-500/30">✓ SEO Optimisé</span>
            <span className="bg-slate-800/60 px-4 py-2 rounded-full border border-cyan-500/30">✓ Support Inclus</span>
            <span className="bg-slate-800/60 px-4 py-2 rounded-full border border-cyan-500/30">✓ Prix Transparents</span>
          </div>
        </div>
        
  <PlanetAnimation />
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fadeInUp animate-delay-500">
          <Link 
            to="/formules"
            className="group px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-semibold font-modern rounded-full hover:from-cyan-400 hover:to-blue-400 transform hover:scale-105 shadow-xl shadow-cyan-500/30 backdrop-blur-sm transition-all duration-300 inline-flex items-center"
            aria-label="Découvrir nos formules de création de sites web"
          >
            Voir nos formules dès 600€
            <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Link>
          
          <Link 
            to="/rendez-vous"
            className="px-8 py-4 border-2 border-cyan-400/70 text-cyan-300 font-semibold font-modern rounded-full hover:bg-cyan-400/20 backdrop-blur-sm shadow-lg shadow-cyan-500/10 transition-all duration-300 inline-flex items-center"
            aria-label="Prendre rendez-vous pour un devis gratuit"
          >
            Devis gratuit
          </Link>
        </div>

        {/* Stats */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8 animate-fadeInUp animate-delay-600">
          {[
            { number: '50+', label: 'Sites livrés' },
            { number: '98%', label: 'Clients satisfaits' },
            { number: '7j', label: 'Délai maximum' }
          ].map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-3xl font-bold font-futuristic text-cyan-400 mb-2 tracking-wider">{stat.number}</div>
              <div className="text-gray-400 font-modern">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;