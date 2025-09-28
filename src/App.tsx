import { lazy } from 'react';
import { Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Hero from './components/Hero';
import Formules from './components/Formules';
import About from './components/About';
import Testimonials from './components/Testimonials';

const PortfolioPage = lazy(() => import('./components/PortfolioPage'));
const FormulesPage = lazy(() => import('./components/FormulesPage'));
const ContactPage = lazy(() => import('./components/ContactPage'));
const AppointmentPage = lazy(() => import('./components/AppointmentPage'));
const MentionsLegalesPage = lazy(() => import('./components/MentionsLegalesPage'));
const AboutStoryPage = lazy(() => import('./components/AboutStoryPage'));
const DirectionArtistiquePage = lazy(() => import('./components/DirectionArtistiquePage'));

const HomePage = () => (
  <>
    <Hero />
    <Formules onFormulesClick={() => {}} />
    <About />
    <Testimonials />
  </>
);

function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<HomePage />} />
        <Route path="/portfolio" element={<PortfolioPage />} />
        <Route path="/formules" element={<FormulesPage />} />
  <Route path="/contact" element={<ContactPage />} />
  <Route path="/rendez-vous" element={<AppointmentPage />} />
        <Route path="/a-propos" element={<AboutStoryPage />} />
  <Route path="/direction-artistique" element={<DirectionArtistiquePage />} />
        <Route path="/mentions-legales" element={<MentionsLegalesPage />} />
        {/* aliases */}
  <Route path="/rdv" element={<AppointmentPage />} />
  <Route path="/appointment" element={<AppointmentPage />} />
      </Route>
    </Routes>
  );
}

export default App;