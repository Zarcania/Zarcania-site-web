import { lazy, Suspense, useEffect, useState } from 'react';
import AnimatedBackground from './components/AnimatedBackground';
import ParallaxStars from './components/ParallaxStars';
import Header from './components/Header';
import Hero from './components/Hero';
import Formules from './components/Formules';
const PortfolioPage = lazy(() => import('./components/PortfolioPage'));
const FormulesPage = lazy(() => import('./components/FormulesPage'));
const ContactPage = lazy(() => import('./components/ContactPage'));
const AppointmentPage = lazy(() => import('./components/AppointmentPage'));
const MentionsLegalesPage = lazy(() => import('./components/MentionsLegalesPage'));
import About from './components/About';
import Testimonials from './components/Testimonials';
import Footer from './components/Footer';

function App() {
  const [currentPage, setCurrentPage] = useState<'home' | 'portfolio' | 'formules' | 'contact' | 'appointment' | 'mentions-legales'>('home');

  const handlePortfolioClick = () => {
    setCurrentPage('portfolio');
    // Scroll en haut de la page portfolio
    setTimeout(() => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }, 100);
  };

  const handleFormulesClick = () => {
    setCurrentPage('formules');
    // Scroll en haut de la page formules
    setTimeout(() => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }, 100);
  };

  const handleContactClick = () => {
    setCurrentPage('contact');
    // Scroll en haut de la page contact
    setTimeout(() => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }, 100);
  };

  const handleAppointmentClick = () => {
    setCurrentPage('appointment');
  };

  // (removed duplicate single-event listener)

  const handleMentionsLegalesClick = () => {
    setCurrentPage('mentions-legales');
    setTimeout(() => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }, 100);
    setTimeout(() => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }, 100);
  };

  const handleBackToHome = () => {
    setCurrentPage('home');
    // Toujours ramener en haut de la page d'accueil
    setTimeout(() => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }, 100);
  };

  // Global navigation events (avoid prop drilling for CTAs)
  useEffect(() => {
    const toAppointment = () => handleAppointmentClick();
    const toPortfolio = () => handlePortfolioClick();
    const toFormules = () => handleFormulesClick();
    const toContact = () => handleContactClick();
    const toHome = () => handleBackToHome();

    window.addEventListener('navigate:appointment', toAppointment);
    window.addEventListener('navigate:portfolio', toPortfolio);
    window.addEventListener('navigate:formules', toFormules);
    window.addEventListener('navigate:contact', toContact);
    window.addEventListener('navigate:home', toHome);
    return () => {
      window.removeEventListener('navigate:appointment', toAppointment);
      window.removeEventListener('navigate:portfolio', toPortfolio);
      window.removeEventListener('navigate:formules', toFormules);
      window.removeEventListener('navigate:contact', toContact);
      window.removeEventListener('navigate:home', toHome);
    };
  }, []);

  if (currentPage === 'mentions-legales') {
    return (
      <div className="min-h-screen relative overflow-x-hidden">
        <AnimatedBackground />
        <ParallaxStars />
        <div className="relative z-10">
          <Header 
            onPortfolioClick={handlePortfolioClick} 
            onFormulesClick={handleFormulesClick}
            onContactClick={handleContactClick}
            onAppointmentClick={handleAppointmentClick}
            onNavigateHome={handleBackToHome}
            currentPage="mentions-legales"
          />
          <Suspense fallback={<div className="text-center text-cyan-300 py-10">Chargement…</div>}>
            <MentionsLegalesPage />
          </Suspense>
        </div>
      </div>
    );
  }

  if (currentPage === 'contact') {
    return (
      <div className="min-h-screen relative overflow-x-hidden">
        <AnimatedBackground />
        <ParallaxStars />
        <div className="relative z-10">
          <Header 
            onPortfolioClick={handlePortfolioClick} 
            onFormulesClick={handleFormulesClick}
            onContactClick={handleContactClick}
            onAppointmentClick={handleAppointmentClick}
            onNavigateHome={handleBackToHome}
            currentPage="contact"
          />
          <Suspense fallback={<div className="text-center text-cyan-300 py-10">Chargement…</div>}>
            <ContactPage />
          </Suspense>
        </div>
      </div>
    );
  }

  if (currentPage === 'appointment') {
    return (
      <div className="min-h-screen relative overflow-x-hidden">
  <AnimatedBackground />
  <ParallaxStars />
        <div className="relative z-10">
          <Header 
            onPortfolioClick={handlePortfolioClick} 
            onFormulesClick={handleFormulesClick}
            onContactClick={handleContactClick}
            onAppointmentClick={handleAppointmentClick}
            onNavigateHome={handleBackToHome}
            currentPage="appointment"
          />
          <Suspense fallback={<div className="text-center text-cyan-300 py-10">Chargement…</div>}>
            <AppointmentPage />
          </Suspense>
        </div>
      </div>
    );
  }

  if (currentPage === 'formules') {
    return (
      <div className="min-h-screen relative overflow-x-hidden">
        <AnimatedBackground />
        <ParallaxStars />
        <div className="relative z-10">
          <Header 
            onPortfolioClick={handlePortfolioClick} 
            onFormulesClick={handleFormulesClick}
            onContactClick={handleContactClick}
            onAppointmentClick={handleAppointmentClick}
            onNavigateHome={handleBackToHome}
            currentPage="formules"
          />
          <Suspense fallback={<div className="text-center text-cyan-300 py-10">Chargement…</div>}>
            <FormulesPage />
          </Suspense>
        </div>
      </div>
    );
  }

  if (currentPage === 'portfolio') {
    return (
      <div className="min-h-screen relative overflow-x-hidden">
        <AnimatedBackground />
        <ParallaxStars />
        <div className="relative z-10">
          <Header 
            onPortfolioClick={handlePortfolioClick} 
            onFormulesClick={handleFormulesClick}
            onContactClick={handleContactClick}
            onAppointmentClick={handleAppointmentClick}
            onNavigateHome={handleBackToHome}
            currentPage="portfolio"
          />
          <Suspense fallback={<div className="text-center text-cyan-300 py-10">Chargement…</div>}>
            <PortfolioPage />
          </Suspense>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen relative overflow-x-hidden">
      <AnimatedBackground />
      <ParallaxStars />
      <div className="relative z-10">
      <Header 
        onPortfolioClick={handlePortfolioClick} 
        onFormulesClick={handleFormulesClick}
        onContactClick={handleContactClick}
        onAppointmentClick={handleAppointmentClick}
        onNavigateHome={handleBackToHome}
        currentPage="home"
      />
      <Hero />
      <Formules onFormulesClick={handleFormulesClick} />
      
      <About />
      <Testimonials />
      <Footer 
        onPortfolioClick={handlePortfolioClick}
        onFormulesClick={handleFormulesClick}
        onContactClick={handleContactClick}
        onAppointmentClick={handleAppointmentClick}
        onNavigateHome={handleBackToHome}
        onMentionsLegalesClick={handleMentionsLegalesClick}
      />
      </div>
    </div>
  );
}

export default App;