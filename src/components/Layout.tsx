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
  : path.startsWith('/rendez-vous') || path.startsWith('/appointment') || path.startsWith('/rdv') ? 'appointment'
    : path.startsWith('/mentions-legales') ? 'mentions-legales'
    : 'home';

  const scrollTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

  const onPortfolioClick = () => { navigate('/portfolio'); setTimeout(scrollTop, 50); };
  const onFormulesClick = () => { navigate('/formules'); setTimeout(scrollTop, 50); };
  const onContactClick = () => { navigate('/contact'); setTimeout(scrollTop, 50); };
  const onAppointmentClick = () => { navigate('/rendez-vous'); setTimeout(scrollTop, 50); };
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

  // SEO: titles & meta descriptions par page (léger, sans lib)
  useEffect(() => {
    const titles: Record<PageKey, string> = {
      home: 'Zarcania – Agence web à Paris | Sites en 7 jours',
      portfolio: 'Portfolio – Réalisations Zarcania',
      formules: 'Formules – Création de sites web',
      contact: 'Contact – Zarcania',
      appointment: 'Rendez-vous – Devis et accompagnement',
      'mentions-legales': 'Mentions légales – Zarcania'
    };
    const descriptions: Record<PageKey, string> = {
      home: 'Création de sites vitrines et e‑commerce en 7 jours. Design moderne, SEO optimisé, devis gratuit.',
      portfolio: 'Découvrez des sites web conçus par Zarcania : vitrines, e‑commerce et projets sur mesure.',
      formules: 'Nos formules de création de site web : vitrine, avancé, e‑commerce et développement sur mesure.',
      contact: 'Contactez Zarcania à Paris : email, téléphone et formulaire pour votre projet web.',
      appointment: 'Prenez rendez-vous pour parler de votre site : accompagnement et devis gratuit.',
      'mentions-legales': 'Informations légales du site Zarcania.'
    };
    document.title = titles[currentPage];
    const meta = document.querySelector('meta[name="description"]');
    if (meta) meta.setAttribute('content', descriptions[currentPage]);
  }, [currentPage]);

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
