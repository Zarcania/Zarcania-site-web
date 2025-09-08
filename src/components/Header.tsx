import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

interface HeaderProps {
  onPortfolioClick: () => void;
  onFormulesClick: () => void;
  onContactClick: () => void;
  onAppointmentClick: () => void;
  onNavigateHome: (section?: string) => void;
  currentPage: 'home' | 'portfolio' | 'formules' | 'contact' | 'appointment' | 'mentions-legales';
}

const Header: React.FC<HeaderProps> = ({ onPortfolioClick, onFormulesClick, onContactClick, onAppointmentClick, onNavigateHome, currentPage }) => {
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

  const handleMenuClick = (section: string, isPortfolio: boolean = false, isFormules: boolean = false, isContact: boolean = false, isAppointment: boolean = false) => {
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

  const menuItems = [
    { name: 'Nos Formules', section: '', isFormules: true },
    { name: 'Portfolio', section: '', isPortfolio: true },
    { name: 'À propos', section: 'about' },
    { name: 'Prendre rendez-vous', section: '', isAppointment: true },
    { name: 'Contact', section: '', isContact: true }
  ];

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 mobile-safe-area ${
      isScrolled ? 'bg-slate-900/95 backdrop-blur-md shadow-lg shadow-cyan-500/10' : 'bg-transparent'
    }`}>
      <div className="container-responsive py-3 sm:py-4">
        <div className="relative flex items-center">
          {/* Logo centré */}
          <div className="absolute left-1/2 -translate-x-1/2 flex items-center space-x-2 sm:space-x-3 cursor-pointer mobile-touch-target" onClick={handleLogoClick} role="banner">
            <img 
              src="/anto logo copy.jpg" 
              alt="Zarcania - logo" 
              className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 rounded-full object-cover"
              loading="eager" decoding="async" fetchPriority="high"
            />
            <div className="text-white">
              <h1 className="text-sm sm:text-lg md:text-xl font-bold font-ultra-futuristic tracking-widest text-transparent bg-clip-text bg-gradient-to-r from-white via-blue-200 to-blue-400 animate-pulse" aria-label="Zarcania - Agence Web">ZARCANIA</h1>
            </div>
          </div>

          {/* Menu desktop aligné à droite */}
          <nav className="hidden md:flex items-center ml-auto space-x-8" role="navigation" aria-label="Menu principal">
            {menuItems.map((item) => (
              <button
                key={item.name}
                onClick={() => handleMenuClick(item.section, item.isPortfolio, item.isFormules, item.isContact, item.isAppointment)}
                className="text-white hover:text-cyan-300 transition-colors duration-300 font-medium font-modern"
                aria-label={`Naviguer vers ${item.name}`}
              >
                {item.name}
              </button>
            ))}
          </nav>

          {/* Bouton menu mobile à droite */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden text-white hover:text-cyan-300 transition-colors p-2 ml-auto"
            aria-label={isMenuOpen ? 'Fermer le menu' : 'Ouvrir le menu'}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <nav className="md:hidden mt-4 pb-4 border-t border-cyan-500/20 bg-slate-900/95 backdrop-blur-md animate-fadeInUp">
            {menuItems.map((item) => (
              <button
                key={item.name}
                onClick={() => handleMenuClick(item.section, item.isPortfolio, item.isFormules, item.isContact, item.isAppointment)}
                className="block w-full text-left py-3 px-4 text-white hover:text-cyan-300 hover:bg-cyan-500/10 transition-all duration-300 font-medium"
              >
                {item.name}
              </button>
            ))}
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;