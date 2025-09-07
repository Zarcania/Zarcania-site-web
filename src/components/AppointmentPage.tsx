// jsx runtime enabled; no React import needed
import { Calendar, MessageSquare, Rocket, Palette, Code } from 'lucide-react';
import GlitchText from './GlitchText';

const AppointmentPage = () => {
  // La réservation se fait via Calendly, aucun état local nécessaire ici


  const processSteps = [
    {
      icon: <MessageSquare className="w-6 h-6" />,
      title: "Consultation",
      description: "Discussion de vos besoins et objectifs"
    },
    {
      icon: <Palette className="w-6 h-6" />,
      title: "Conception",
      description: "Création du design et de l'architecture"
    },
    {
      icon: <Code className="w-6 h-6" />,
      title: "Développement",
      description: "Codage et intégration des fonctionnalités"
    },
    {
      icon: <Rocket className="w-6 h-6" />,
      title: "Lancement",
      description: "Mise en ligne et optimisation"
    }
  ];

  return (
    <div className="min-h-screen bg-transparent relative overflow-hidden">
      {/* Overlay subtil pour la lisibilité */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900/40 via-blue-900/20 to-slate-800/40" />

      <div className="relative z-10 pt-20 pb-16 px-4">
        {/* Header */}
        <div className="text-center mb-16 animate-fadeInUp">
          <div className="inline-block mb-6">
            <GlitchText className="text-4xl md:text-6xl font-bold font-futuristic bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent">
              RÉSERVEZ VOTRE CONSULTATION
            </GlitchText>
          </div>
        </div>

        {/* Process Steps */}
        <div className="max-w-6xl mx-auto mb-16 animate-fadeInUp animate-delay-200">
          <h2 className="text-3xl font-bold font-futuristic text-center text-white mb-12 tracking-wide">
            Notre processus de collaboration
          </h2>
          
          <div className="relative overflow-hidden">
            {/* Ligne de progression principale */}
            <div className="absolute top-1/2 left-0 right-0 h-1 bg-slate-700/30 rounded-full transform -translate-y-1/2 hidden md:block">
              <div className="progress-line h-full bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 rounded-full transform origin-left scale-x-0"></div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8 relative">
              {processSteps.map((step, index) => (
                <div key={index} className={`text-center relative group step-container step-${index + 1}`}>
                  
                  {/* Cercle principal avec animations */}
                  <div className="relative mb-6 flex justify-center">
                    {/* Cercles d'onde */}
                    <div className={`step-wave-1-${index + 1} absolute inset-0 w-24 h-24 bg-cyan-400/20 rounded-full animate-ping opacity-0`}></div>
                    <div className={`step-wave-2-${index + 1} absolute inset-0 w-24 h-24 bg-blue-400/20 rounded-full animate-ping opacity-0`} style={{ animationDelay: '0.5s' }}></div>
                    
                    {/* Cercle principal */}
                    <div className={`step-circle-${index + 1} relative w-20 h-20 rounded-full flex items-center justify-center text-white shadow-2xl transition-all duration-700 ease-out transform scale-75 opacity-30 z-10`}>
                      {/* Gradient de fond animé */}
                      <div className="absolute inset-0 rounded-full bg-gradient-to-br from-slate-600 to-slate-700 transition-all duration-700"></div>
                      <div className={`step-gradient-${index + 1} absolute inset-0 rounded-full bg-gradient-to-br from-cyan-500 to-blue-500 opacity-0 transition-all duration-700`}></div>
                      
                      {/* Icône */}
                      <div className="relative z-10 transition-all duration-500">
                        {step.icon}
                      </div>
                      
                      {/* Numéro de l'étape */}
                      <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-white rounded-full flex items-center justify-center text-slate-800 font-bold text-xs z-20 shadow-lg">
                        {index + 1}
                      </div>
                      
                      {/* Effet de brillance */}
                      <div className={`step-shine-${index + 1} absolute inset-0 rounded-full bg-gradient-to-r from-transparent via-white/30 to-transparent opacity-0 transform rotate-45 transition-all duration-500`}></div>
                    </div>
                  </div>
                  
                  {/* Contenu textuel */}
                  <div className={`step-content-${index + 1} opacity-0 transform translate-y-4 transition-all duration-600 ease-out`}>
                    <h3 className="text-lg font-bold font-futuristic text-white mb-3 tracking-wide transition-colors duration-300">{step.title}</h3>
                    <p className="text-gray-400 font-modern text-sm leading-relaxed transition-colors duration-300">{step.description}</p>
                  </div>
                </div>
              ))}
            </div>
            
          </div>
        </div>

        {/* Appointment Form */}
        <div className="max-w-4xl mx-auto relative z-10 animate-scaleIn animate-delay-300">
          <div className="bg-slate-800/60 backdrop-blur-md border border-cyan-500/30 rounded-2xl p-8 shadow-xl shadow-slate-900/50">
            {/* Calendly Widget */}
            <div className="text-center mb-6">
              <h3 className="text-2xl font-bold font-futuristic text-white mb-4 tracking-wide">
                Réservez votre consultation gratuite
              </h3>
              <p className="text-gray-300 font-modern">
                Choisissez le créneau qui vous convient le mieux
              </p>
            </div>
            
            {/* Bouton Calendly */}
            <div className="text-center">
              <div className="bg-slate-800/40 border border-cyan-500/30 rounded-2xl p-8 mb-6">
                <div className="w-20 h-20 bg-gradient-to-br from-cyan-500 to-blue-500 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Calendar className="w-10 h-10 text-white" />
                </div>
                <h4 className="text-xl font-bold font-futuristic text-white mb-4 tracking-wide">
                  Calendrier de réservation
                </h4>
                <p className="text-gray-300 font-modern mb-6 leading-relaxed">
                  Cliquez sur le bouton ci-dessous pour accéder à notre calendrier de réservation et choisir le créneau qui vous convient.
                </p>
                <button
                  onClick={() => window.open('https://calendly.com/anthony-corradi24072001/reservation', '_blank')}
                  className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-bold font-futuristic rounded-xl hover:from-cyan-400 hover:to-blue-400 hover:shadow-2xl transition-all duration-300 flex items-center justify-center mx-auto group"
                >
                  <Calendar className="w-6 h-6 mr-3 group-hover:rotate-12 transition-transform duration-300" />
                  Ouvrir le calendrier Calendly
                  <svg className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </button>
              </div>
              
            </div>
            
            {/* Instructions */}
            <div className="mt-6 text-center">
              <p className="text-gray-400 font-modern text-sm">
                💡 <strong>Astuce :</strong> Préparez une description de votre projet pour optimiser notre échange
              </p>
            </div>
          </div>
        </div>
      </div>

  {/* Footer rendu par App */}
    </div>
  );
};

export default AppointmentPage;