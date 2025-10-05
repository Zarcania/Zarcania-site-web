import React from 'react';
import { Link } from 'react-router-dom';

interface FooterProps {
  onPortfolioClick?: () => void;
  onFormulesClick?: () => void;
  onContactClick?: () => void;
  onAppointmentClick?: () => void;
  onNavigateHome?: (section?: string) => void;
}

const Footer: React.FC<FooterProps> = ({ 
  onPortfolioClick, 
  onFormulesClick, 
  onContactClick, 
  onAppointmentClick, 
  onNavigateHome
}) => {
  const handleNavigation = (section?: string, isPortfolio?: boolean, isFormules?: boolean, isContact?: boolean, isAppointment?: boolean) => {
    if (isPortfolio && onPortfolioClick) {
      onPortfolioClick();
    } else if (isFormules && onFormulesClick) {
      onFormulesClick();
    } else if (isContact && onContactClick) {
      onContactClick();
    } else if (isAppointment && onAppointmentClick) {
      onAppointmentClick();
    } else if (section && onNavigateHome) {
      onNavigateHome(section);
    } else if (onNavigateHome) {
      onNavigateHome();
    }
  };

  // CGV accessible via direct link in markup below

  return (
    <footer className="relative bg-transparent overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900/60 via-blue-900/30 to-slate-800/60" />
      {/* Planet illustration */}
      <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-1/2">
        <div className="w-48 sm:w-72 md:w-96 h-24 sm:h-36 md:h-48 bg-gradient-to-t from-cyan-500/20 to-transparent rounded-t-full blur-xl" />
      </div>
      
    <div className="relative z-10 container-responsive py-4 sm:py-6">
        <div className="max-w-6xl mx-auto">
          {/* Navigation compacte */}
      <nav className="flex flex-col md:flex-row md:flex-wrap md:justify-center gap-1.5 md:gap-4 mb-3 text-sm" role="navigation" aria-label="Menu footer">
            <button 
        onClick={() => handleNavigation('', false, true)}
        className="text-gray-300 hover:text-cyan-300 transition-colors font-modern p-0 leading-tight"
              aria-label="Voir nos formules"
            >
              Nos Formules
            </button>
            <button 
        onClick={() => handleNavigation('', true)}
        className="text-gray-300 hover:text-cyan-300 transition-colors font-modern p-0 leading-tight"
              aria-label="Voir notre portfolio"
            >
              Portfolio
            </button>
            <button 
        onClick={() => handleNavigation('about')}
        className="text-gray-300 hover:text-cyan-300 transition-colors font-modern p-0 leading-tight"
              aria-label="En savoir plus sur nous"
            >
              À propos
            </button>
            <button 
        onClick={() => handleNavigation('', false, false, true)}
        className="text-gray-300 hover:text-cyan-300 transition-colors font-modern p-0 leading-tight"
              aria-label="Nous contacter"
            >
              Contact
            </button>
            <button 
        onClick={() => handleNavigation('', false, false, false, true)}
        className="text-gray-300 hover:text-cyan-300 transition-colors font-modern p-0 leading-tight"
              aria-label="Prendre rendez-vous"
            >
              Rendez-vous
            </button>
          </nav>

          {/* Informations essentielles */}
          <div className="text-center mb-4">
            <button onClick={() => handleNavigation()} className="flex items-center justify-center space-x-3 mb-4 group mx-auto">
              <img
                src="/logo.png?v=4" 
                alt="Zarcania - Agence Web Professionnelle Paris" 
                className="w-8 h-8 rounded-full object-cover" loading="lazy" decoding="async"
              />
              <div className="text-white">
                <h3 className="text-lg font-bold font-ultra-futuristic tracking-widest text-transparent bg-clip-text bg-gradient-to-r from-white via-blue-200 to-blue-400 group-hover:from-cyan-200 group-hover:to-blue-300 transition-colors">ZARCANIA</h3>
              </div>
            </button>
            
            <p className="text-gray-400 text-sm max-w-lg mx-auto font-modern mb-3 leading-relaxed">
              Agence web professionnelle Paris • Sites express 7 jours • Design moderne • SEO optimisé
            </p>
            
            {/* Contact rapide */}
            <div className="flex flex-col sm:flex-row flex-wrap justify-center gap-2 md:gap-3 text-sm text-gray-400 mb-3">
              <div className="flex items-center justify-center gap-4">
                <span>contact@zarcania.com</span>
                <span className="hidden sm:inline">•</span>
              </div>
              <div className="flex items-center justify-center gap-4">
                <span>06.26.44.57.85</span>
                <span className="hidden sm:inline">•</span>
              </div>
              <span>Paris, France</span>
            </div>
          </div>
          
          {/* Copyright compact */}
          <div className="text-center text-gray-500 text-xs border-t border-cyan-500/20 pt-3">
            <div className="flex flex-col sm:flex-row items-center justify-center gap-2">
              <span>&copy; 2025 Zarcania - Agence Web Paris. Tous droits réservés.</span>
              <div className="flex items-center gap-2">
                <span className="hidden sm:inline">•</span>
                <Link 
                  to="/mentions-legales"
                  className="hover:text-cyan-300 transition-colors"
                >
                  Mentions légales
                </Link>
                <span>•</span>
                <a 
                  href="/CGV.pdf" 
                  download="CGV-Zarcania.pdf"
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="hover:text-cyan-300 transition-colors"
                >
                  CGV
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;