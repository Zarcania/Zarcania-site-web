// jsx runtime enabled; no React import needed
import { Calendar, MessageSquare, Rocket, Palette, Code } from 'lucide-react';

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
          <h1 className="text-4xl md:text-6xl font-bold font-futuristic bg-gradient-to-r from-cyan-400 via-white to-blue-400 bg-clip-text text-transparent animate-gradient bg-[length:200%_auto]">
            RÉSERVEZ VOTRE CONSULTATION
          </h1>
        </div>

        {/* Process Steps */}
        <div className="max-w-6xl mx-auto mb-16 animate-fadeInUp animate-delay-200">
          <h2 className="text-3xl font-bold font-futuristic text-center text-white mb-12 tracking-wide">
            Notre processus de collaboration
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 relative">
            {processSteps.map((step, index) => (
              <div key={index} className="text-center relative group">

                {/* Cercle principal */}
                <div className="relative mb-6 flex justify-center">
                  <div className="relative w-20 h-20 rounded-full flex items-center justify-center text-white shadow-lg transition-all duration-300 ease-out hover:scale-110 hover:shadow-cyan-500/50 z-10 bg-gradient-to-br from-cyan-500 to-blue-500">

                    {/* Icône */}
                    <div className="relative z-10">
                      {step.icon}
                    </div>

                    {/* Numéro de l'étape */}
                    <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-white rounded-full flex items-center justify-center text-slate-800 font-bold text-xs z-20 shadow-md">
                      {index + 1}
                    </div>
                  </div>
                </div>

                {/* Contenu textuel */}
                <div>
                  <h3 className="text-lg font-bold font-futuristic text-white mb-3 tracking-wide group-hover:text-cyan-400 transition-colors duration-300">{step.title}</h3>
                  <p className="text-gray-400 font-modern text-sm leading-relaxed group-hover:text-gray-300 transition-colors duration-300">{step.description}</p>
                </div>
              </div>
            ))}
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