import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

interface HeaderProps {
  onPortfolioClick: () => void;
  onFormulesClick: () => void;
  onContactClick: () => void;
  onAppointmentClick: () => void;
  onAboutClick?: () => void;
  onNavigateHome: (section?: string) => void;
  currentPage: 'home' | 'portfolio' | 'formules' | 'contact' | 'appointment' | 'a-propos' | 'mentions-legales';
}

const Header: React.FC<HeaderProps> = ({ onPortfolioClick, onFormulesClick, onContactClick, onAppointmentClick, onAboutClick, onNavigateHome, currentPage }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleLogoClick = () => {
    if (currentPage !== 'home') {
      onNavigateHome();
    } else {
      // Si on est déjà sur l'accueil, juste remonter en haut
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const handleMenuClick = (section: string, isPortfolio: boolean = false, isFormules: boolean = false, isContact: boolean = false, isAppointment: boolean = false, isAbout: boolean = false) => {
    setIsMenuOpen(false);
    
    if (isPortfolio) {
      onPortfolioClick();
      return;
    }

    if (isFormules) {
      onFormulesClick();
      return;
    }

    if (isContact) {
      onContactClick();
      return;
    }

    if (isAppointment) {
      onAppointmentClick();
      // Scroll vers le haut de la page après navigation
      setTimeout(() => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }, 100);
      return;
    }

    if (isAbout && onAboutClick) {
      onAboutClick();
      setTimeout(() => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }, 100);
      return;
    }


    if (currentPage !== 'home') {
      // Si on est sur portfolio, retourner à l'accueil puis naviguer vers la section
      onNavigateHome();
      setTimeout(() => {
        const element = document.getElementById(section);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 200);
    } else {
      // Si on est sur l'accueil, naviguer vers la section
      const element = document.getElementById(section);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  const menuItems: Array<{ name: string; section: string; isPortfolio?: boolean; isFormules?: boolean; isContact?: boolean; isAppointment?: boolean; isAbout?: boolean }> = [
    { name: 'Nos Formules', section: '', isFormules: true },
    { name: 'Portfolio', section: '', isPortfolio: true },
    { name: 'À propos', section: '', isAbout: true },
    { name: 'Prendre rendez-vous', section: '', isAppointment: true },
    { name: 'Contact', section: '', isContact: true }
  ];

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 mobile-safe-area ${
      isScrolled ? 'bg-slate-900/95 backdrop-blur-md shadow-lg shadow-cyan-500/10' : 'bg-transparent'
    }`}>
      <div className="container-responsive py-3 sm:py-4">
        <div className="flex items-center justify-between">
          {/* Logo à gauche */}
          <div className="flex items-center space-x-2 sm:space-x-3 cursor-pointer mobile-touch-target" onClick={handleLogoClick} role="banner">
            <img 
              src="/logo.png?v=4" 
              alt="Zarcania Logo" 
              className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 rounded-full object-cover"
              loading="lazy" decoding="async"
            />
            <div className="text-white">
              <h1 className="text-sm sm:text-lg md:text-xl font-bold font-ultra-futuristic tracking-widest text-transparent bg-clip-text bg-gradient-to-r from-white via-blue-200 to-blue-400 animate-pulse" aria-label="Zarcania - Agence Web">ZARCANIA</h1>
            </div>
          </div>

          {/* Menu desktop à droite */}
          <nav className="hidden md:flex items-center space-x-8" role="navigation" aria-label="Menu principal">
            {menuItems.map((item) => (
              <button
                key={item.name}
                onClick={() => handleMenuClick(item.section, item.isPortfolio, item.isFormules, item.isContact, item.isAppointment, item.isAbout)}
                className="text-white hover:text-cyan-300 transition-colors duration-300 font-medium font-modern"
                aria-label={`Naviguer vers ${item.name}`}
              >
                {item.name}
              </button>
            ))}
          </nav>

          {/* Bouton menu mobile */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden text-white hover:text-cyan-300 transition-colors p-2"
            aria-label={isMenuOpen ? 'Fermer le menu' : 'Ouvrir le menu'}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <nav className="md:hidden mt-4 pb-4 border-t border-cyan-500/20 bg-slate-900/95 backdrop-blur-md animate-fadeInUp">
            <div className="flex flex-col items-end">
              {menuItems.map((item) => (
                <button
                  key={item.name}
                  onClick={() => handleMenuClick(item.section, item.isPortfolio, item.isFormules, item.isContact, item.isAppointment, item.isAbout)}
                  className="block w-full text-right py-3 pr-4 pl-4 text-white hover:text-cyan-300 hover:bg-cyan-500/10 transition-all duration-300 font-medium"
                >
                  {item.name}
                </button>
              ))}
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;