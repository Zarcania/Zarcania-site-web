import { Outlet, useLocation, useNavigate } from 'react-router-dom';
import { Suspense, useEffect } from 'react';
import Header from './Header';
import Footer from './Footer';
import AnimatedBackground from './AnimatedBackground';
import ParallaxStars from './ParallaxStars';

type PageKey = 'home' | 'portfolio' | 'formules' | 'contact' | 'appointment' | 'mentions-legales';

const Layout = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const path = location.pathname;
  const currentPage: PageKey =
    path === '/' ? 'home'
    : path.startsWith('/portfolio') ? 'portfolio'
    : path.startsWith('/formules') ? 'formules'
    : path.startsWith('/contact') ? 'contact'
    : path.startsWith('/appointment') || path.startsWith('/rdv') ? 'appointment'
    : path.startsWith('/mentions-legales') ? 'mentions-legales'
    : 'home';

  const scrollTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

  const onPortfolioClick = () => { navigate('/portfolio'); setTimeout(scrollTop, 50); };
  const onFormulesClick = () => { navigate('/formules'); setTimeout(scrollTop, 50); };
  const onContactClick = () => { navigate('/contact'); setTimeout(scrollTop, 50); };
  const onAppointmentClick = () => { navigate('/appointment'); setTimeout(scrollTop, 50); };
  const onNavigateHome = (section?: string) => {
    if (path !== '/') navigate('/');
    setTimeout(() => {
      if (section) {
        const el = document.getElementById(section);
        if (el) {
          el.scrollIntoView({ behavior: 'smooth' });
          return;
        }
      }
      scrollTop();
    }, 100);
  };
  const onMentionsLegalesClick = () => { navigate('/mentions-legales'); setTimeout(scrollTop, 50); };

  // Backward-compat: listen to legacy window events used in some components
  useEffect(() => {
    const toAppointment = () => onAppointmentClick();
    const toPortfolio = () => onPortfolioClick();
    const toFormules = () => onFormulesClick();
    const toContact = () => onContactClick();
    const toHome = () => onNavigateHome();

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
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [path]);

  return (
    <div className="min-h-screen relative overflow-x-hidden">
      <AnimatedBackground />
      <ParallaxStars />
      <div className="relative z-10">
        <Header
          onPortfolioClick={onPortfolioClick}
          onFormulesClick={onFormulesClick}
          onContactClick={onContactClick}
          onAppointmentClick={onAppointmentClick}
          onNavigateHome={onNavigateHome}
          currentPage={currentPage}
        />
        <Suspense fallback={<div className="text-center text-cyan-300 py-10">Chargement…</div>}>
          <Outlet />
        </Suspense>
        <Footer
          onPortfolioClick={onPortfolioClick}
          onFormulesClick={onFormulesClick}
          onContactClick={onContactClick}
          onAppointmentClick={onAppointmentClick}
          onNavigateHome={onNavigateHome}
          onMentionsLegalesClick={onMentionsLegalesClick}
        />
      </div>
    </div>
  );
};

export default Layout;
