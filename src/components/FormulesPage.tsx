import React, { useEffect, useRef, useState } from 'react';
import { Check, Rocket, Star, Crown, ArrowRight, Calendar, Shield, Headphones, Globe, Palette, Code, Search, Users, BarChart3, Smartphone } from 'lucide-react';

const FormulesPage: React.FC = () => {
  // Récupérer le paramètre de sélection depuis l'URL
  const urlParams = new URLSearchParams(window.location.search);
  const selectedParam = urlParams.get('selected');
  const [selectedFormule, setSelectedFormule] = useState(selectedParam ? parseInt(selectedParam) : 0);

  const formules = [
    {
      id: 1,
      name: 'Formule de Base',
      price: '600€',
      originalPrice: '800€',
      type: 'Site vitrine simple',
      icon: <Rocket className="w-8 h-8" />,
      description: 'Parfait pour débuter votre présence en ligne avec un site professionnel et efficace.',
      features: [
        '5 à 6 pages maximum',
        'Hébergement 1 an inclus',
        'Support technique 1 an inclus',
        'Optimisation SEO de base (visibilité sur Google)',
        'Design moderne et professionnel adapté à votre activité',
        'Responsive (mobile, tablette, desktop)',
        'Formulaire de contact intégré',
        'Certificat SSL inclus'
      ],
      advantages: [
        'Livraison en 7 jours maximum',
        'Design sur mesure',
        'Code propre et optimisé',
        'Formation à la gestion incluse'
      ],
      gradient: 'from-slate-600 via-slate-500 to-cyan-400',
      color: 'slate',
      deliveryTime: '5-7 jours',
      popular: false
    },
    {
      id: 2,
      name: 'Formule Intermédiaire',
      price: '1200€',
      originalPrice: '1500€',
      type: 'Site vitrine avancé livré en 7 jours',
      icon: <Star className="w-8 h-8" />,
      description: 'La solution complète pour un site web professionnel avec toutes les fonctionnalités avancées.',
      features: [
        'Pages illimitées',
        'Hébergement 1 an inclus',
        'Support technique 1 an inclus',
        'Optimisation SEO avancée (meilleure visibilité et structure optimisée)',
        'Animations et galeries interactives',
        'Formulaires complexes et zones dynamiques',
        'Design professionnel avec visuels et mise en page sur mesure',
        'Intégration réseaux sociaux',
        'Blog intégré (optionnel)',
        'Analytics et statistiques'
      ],
      advantages: [
        'Design premium personnalisé',
        'Animations fluides et modernes',
        'SEO optimisé pour Google',
        'Support prioritaire'
      ],
      gradient: 'from-cyan-500 via-blue-500 to-cyan-400',
      color: 'cyan',
      deliveryTime: '7 jours',
      popular: false
    },
    {
      id: 3,
      name: 'Formule Premium',
      price: 'Sur devis',
      originalPrice: null,
      type: 'Site e-commerce complet ou projet 100% personnalisé',
      icon: <Crown className="w-8 h-8" />,
      description: 'Pour les projets ambitieux nécessitant des fonctionnalités sur mesure et un développement personnalisé.',
      features: [
        '⚠ Délai de livraison : à définir selon le projet',
        'Site e-commerce complet ou site personnalisé adapté à vos besoins',
        'Gestion catalogue produits + panier et paiement sécurisé',
        'Hébergement 1 an inclus',
        'Support technique 1 an inclus',
        'Optimisation SEO professionnelle (analyse + personnalisation)',
        'Design premium entièrement personnalisé',
        'Possibilité d\'intégrer ou de remodeler du code existant',
        'Développement sur mesure avec fonctionnalités spécifiques',
        'Formation à la gestion du site incluse',
        'Tableau de bord administrateur avancé',
        'Intégrations API tierces'
      ],
      advantages: [
        'Développement 100% sur mesure',
        'Fonctionnalités illimitées',
        'Support dédié premium',
        'Évolutivité garantie'
      ],
      gradient: 'from-slate-600 via-blue-500 to-cyan-400',
      color: 'blue',
      deliveryTime: 'Variable',
      popular: false
    }
  ];

  const processSteps = [
    {
      step: '1',
      title: 'Consultation',
      description: 'Analyse de vos besoins et définition du projet',
      icon: <Users className="w-6 h-6" />
    },
    {
      step: '2',
      title: 'Design',
      description: 'Création de la maquette et validation du design',
      icon: <Palette className="w-6 h-6" />
    },
    {
      step: '3',
      title: 'Développement',
      description: 'Codage et intégration de toutes les fonctionnalités',
      icon: <Code className="w-6 h-6" />
    },
    {
      step: '4',
      title: 'Livraison',
      description: 'Mise en ligne et formation à la gestion',
      icon: <Rocket className="w-6 h-6" />
    }
  ];

  const services = [
    { icon: <Globe className="w-6 h-6" />, title: 'Hébergement inclus', description: '1 an offert' },
    { icon: <Shield className="w-6 h-6" />, title: 'Sécurité SSL', description: 'Certificat inclus' },
    { icon: <Headphones className="w-6 h-6" />, title: 'Support 24/7', description: 'Assistance technique' },
    { icon: <Search className="w-6 h-6" />, title: 'SEO optimisé', description: 'Visibilité Google' },
    { icon: <Smartphone className="w-6 h-6" />, title: 'Responsive', description: 'Mobile & tablette' },
    { icon: <BarChart3 className="w-6 h-6" />, title: 'Analytics', description: 'Statistiques détaillées' }
  ];

  const handleAppointmentClick = () => {
    window.dispatchEvent(new Event('navigate:appointment'));
  };

  // ===== Process animation (fix) =====
  const processRef = useRef<HTMLDivElement | null>(null);

  const resetProcessAnimation = () => {
    const count = processSteps.length;
    for (let i = 1; i <= count; i++) {
      const line = document.querySelector<HTMLElement>(`.step-line-${i}`);
      const circle = document.querySelector<HTMLElement>(`.step-circle-${i}`);
      const glow = document.querySelector<HTMLElement>(`.step-glow-${i}`);
      const pulse = document.querySelector<HTMLElement>(`.step-pulse-${i}`);
      const text = document.querySelector<HTMLElement>(`.step-text-${i}`);

      if (line) line.style.height = '0px';
      if (glow) glow.style.opacity = '0';
      if (pulse) pulse.style.opacity = '0';
      if (circle) {
        circle.style.transform = 'scale(1)';
        circle.style.opacity = '1';
        circle.style.boxShadow = 'none';
      }
      if (text) {
        text.style.opacity = '0';
        text.style.transform = 'translateY(8px)';
      }
    }
  };

  const runProcessAnimation = () => {
    const count = processSteps.length;
    const stepDelay = 1100; // slower pacing between steps for readability
    for (let i = 1; i <= count; i++) {
      setTimeout(() => {
        const line = document.querySelector<HTMLElement>(`.step-line-${i}`);
        const circle = document.querySelector<HTMLElement>(`.step-circle-${i}`);
        const glow = document.querySelector<HTMLElement>(`.step-glow-${i}`);
        const pulse = document.querySelector<HTMLElement>(`.step-pulse-${i}`);
        const text = document.querySelector<HTMLElement>(`.step-text-${i}`);

        if (line) line.style.height = '100%'; // extend connector before showing text
        if (glow) glow.style.opacity = '1';
        if (circle) {
          circle.style.transform = 'scale(1.08)';
          circle.style.boxShadow = '0 10px 30px rgba(34,211,238,0.25)'; // cyan glow
        }
        // reveal text slightly after the circle highlight
        setTimeout(() => {
          if (text) {
            text.style.opacity = '1';
            text.style.transform = 'translateY(0)';
          }
        }, 350);
        if (pulse) {
          pulse.style.opacity = '1';
          setTimeout(() => {
            if (pulse) pulse.style.opacity = '0';
          }, 600);
        }
      }, (i - 1) * stepDelay);
    }
  };

  useEffect(() => {
    // Ensure initial reset
    resetProcessAnimation();

    // Animate when the block enters the viewport
    const el = processRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // Slight delay, then (re)run each time it enters viewport
            setTimeout(() => {
              resetProcessAnimation();
              runProcessAnimation();
            }, 150);
          } else {
            // Reset when leaving so it can replay when coming back
            resetProcessAnimation();
          }
        });
      },
      { root: null, threshold: 0.35 }
    );

    observer.observe(el);
    return () => observer.disconnect();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  type Color = 'cyan' | 'blue' | 'slate';
  const getColorClasses = (color: Color) => {
    const colors = {
      cyan: { border: 'border-cyan-400/50', bg: 'bg-cyan-500/10', text: 'text-cyan-300', ring: 'ring-cyan-400' },
      blue: { border: 'border-blue-400/50', bg: 'bg-blue-500/10', text: 'text-blue-300', ring: 'ring-blue-400' },
      slate: { border: 'border-slate-400/50', bg: 'bg-slate-500/10', text: 'text-slate-300', ring: 'ring-slate-400' },
    };
    return colors[color] || colors.cyan;
  };

  return (
    <div className="min-h-screen bg-transparent relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900/40 via-blue-900/20 to-slate-800/40" />
      
      <div className="container mx-auto px-6 py-20 relative z-10">
        {/* Header Section */}
        <div className="text-center mb-16 animate-fadeInUp">
          <h1 className="text-5xl md:text-6xl font-bold font-futuristic text-white mb-8 tracking-wide">
              Nos Formules
          </h1>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto font-modern leading-relaxed mb-12">
            Découvrez nos formules adaptées à tous vos besoins. De la simple vitrine au site e-commerce complet, 
            nous avons la solution parfaite pour propulser votre présence digitale.
          </p>
        </div>

        {/* Services inclus */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 mb-16 animate-fadeInUp animate-delay-200">
          {services.map((service, index) => (
            <div key={index} className="bg-slate-800/60 backdrop-blur-md border border-cyan-500/30 rounded-xl p-4 text-center hover:border-cyan-400/60 transition-all duration-300 shadow-xl shadow-slate-900/50">
              <div className="w-12 h-12 bg-gradient-to-br from-cyan-500 to-blue-500 rounded-lg flex items-center justify-center text-white mx-auto mb-3">
                {service.icon}
              </div>
              <h3 className="text-white font-bold font-futuristic text-sm mb-1">{service.title}</h3>
              <p className="text-gray-400 font-modern text-xs">{service.description}</p>
            </div>
          ))}
        </div>

        {/* Formules Layout */}
        <div className="mb-16 animate-fadeInUp animate-delay-300">
          {/* Formule en vedette */}
          <div className="relative mb-12">
            <div className="grid lg:grid-cols-2 gap-8 items-start">
              {/* Détails de la formule */}
              <div className="space-y-6">
                <div className="text-center lg:text-left">
                  <h2 className="text-3xl font-bold font-futuristic text-white mb-4 tracking-wide">
                    Formule en vedette
                  </h2>
                  <p className="text-gray-300 font-modern">
                    Découvrez en détail nos différentes formules
                  </p>
                </div>

                {/* Sélecteur de formules */}
                <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
                  {formules.map((formule, index) => {
                    const colorClasses = getColorClasses(formule.color as Color);
                    const isSelected = selectedFormule === index;
                    
                    return (
                      <button
                        key={formule.id}
                        onClick={() => setSelectedFormule(index)}
                        className={`p-1 sm:p-2 lg:p-3 rounded-lg sm:rounded-xl border-2 transition-all duration-300 text-left ${
                          isSelected 
                            ? `${colorClasses.border} ${colorClasses.bg} ring-2 ${colorClasses.ring} shadow-lg` 
                            : 'border-slate-600/50 bg-slate-800/40 hover:border-cyan-400/50'
                        }`}
                      >
                        <div className="flex flex-col sm:flex-row items-center sm:items-start mb-2">
                          <div className={`w-5 h-5 sm:w-6 sm:h-6 bg-gradient-to-br ${formule.gradient} rounded-lg flex items-center justify-center text-white mb-1 sm:mb-0 sm:mr-2 flex-shrink-0`}>
                            {formule.icon}
                          </div>
                          <div className="flex-1 text-center sm:text-left">
                            {formule.popular && (
                              <span className="bg-gradient-to-r from-cyan-500 to-blue-500 text-white px-1 py-0.5 rounded-full text-xs font-bold mb-1 inline-block">
                                POPULAIRE
                              </span>
                            )}
                            <h3 className="text-white font-bold font-futuristic text-xs mb-0.5 leading-tight">{formule.name}</h3>
                            <p className={`text-sm sm:text-base lg:text-xl font-bold font-futuristic bg-gradient-to-r ${formule.gradient} bg-clip-text text-transparent`}>
                              {formule.price}
                            </p>
                          </div>
                        </div>
                      </button>
                    );
                  })}
                </div>

                {/* Processus */}
                <div ref={processRef} className="bg-slate-800/60 backdrop-blur-md border border-cyan-500/30 rounded-2xl p-6">
                  <h3 className="text-xl font-bold font-futuristic text-white mb-6 tracking-wide">
                    Notre processus
                  </h3>
                  <div className="space-y-6">
                    {processSteps.map((step, index) => (
                      <div key={index} className="relative">
                        {/* Ligne de connexion */}
                        {index < processSteps.length - 1 && (
                          <div className="absolute left-6 top-12 w-0.5 h-8 bg-slate-600/50 overflow-hidden">
                            <div className={`w-full bg-gradient-to-b from-cyan-400 to-blue-400 h-0 step-line-${index + 1} transition-all duration-1000 ease-out`} />
                          </div>
                        )}
                        
                        <div className="flex items-start space-x-4">
                          {/* Cercle animé */}
                          <div className={`relative w-12 h-12 rounded-full flex items-center justify-center text-white font-bold text-sm flex-shrink-0 step-circle-${index + 1} transition-all duration-800 ease-out`}>
                            <div className="absolute inset-0 rounded-full bg-gradient-to-br from-slate-600 to-slate-700" />
                            <div className={`absolute inset-0 rounded-full bg-gradient-to-br from-cyan-500 to-blue-500 opacity-0 step-glow-${index + 1} transition-opacity duration-800`} />
                            <span className="relative z-10">{step.step}</span>
                            
                            {/* Effet de pulsation */}
                            <div className={`absolute inset-0 rounded-full bg-cyan-400/30 animate-ping step-pulse-${index + 1} opacity-0`} />
                          </div>
                          
                          {/* Contenu avec animation */}
                          <div className={`flex-1 step-text-${index + 1} opacity-0 transform translate-y-2 transition-all duration-600 ease-out`}>
                            <div className="flex items-center mb-2">
                              <div className="w-8 h-8 bg-gradient-to-br from-cyan-500/20 to-blue-500/20 rounded-lg flex items-center justify-center mr-3">
                                {step.icon}
                              </div>
                              <h4 className="text-white font-bold font-modern text-base">{step.title}</h4>
                            </div>
                            <p className="text-gray-400 font-modern text-sm leading-relaxed pl-11">{step.description}</p>
                          </div>
                        </div>
                      </div>
                    ))}
                    
                    {/* Bouton de relance de l'animation */}
                    <div className="text-center pt-4">
                      <button 
                        onClick={() => {
                          resetProcessAnimation();
                          setTimeout(runProcessAnimation, 50);
                        }}
                        className="px-3 py-1 bg-slate-700/60 border border-cyan-500/30 text-cyan-300 font-medium font-modern rounded-lg hover:bg-cyan-500/20 hover:border-cyan-400/50 transition-all duration-300 text-xs"
                      >
                        🔄 Revoir l'animation
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Carte de la formule sélectionnée */}
              <div className="relative group">
                <div className="absolute -inset-4 bg-gradient-to-r from-cyan-500/20 via-blue-500/20 to-purple-500/20 rounded-3xl blur-xl group-hover:blur-2xl transition-all duration-500 opacity-60 group-hover:opacity-100" />
                <div className="relative bg-slate-800/80 backdrop-blur-xl border border-cyan-500/30 rounded-3xl overflow-hidden shadow-2xl">
                  {/* Header */}
                  <div className="p-8 pb-6">
                    <div className="flex items-center justify-between mb-6">
                      <div className="flex items-center">
                        <div className={`w-16 h-16 bg-gradient-to-br ${formules[selectedFormule].gradient} rounded-2xl flex items-center justify-center text-white mr-4`}>
                          {formules[selectedFormule].icon}
                        </div>
                        <div>
                          <h3 className="text-2xl font-bold font-futuristic text-white mb-1 tracking-wide">
                            {formules[selectedFormule].name}
                          </h3>
                          <p className="text-cyan-300 font-modern text-sm">{formules[selectedFormule].type}</p>
                        </div>
                      </div>
                      {formules[selectedFormule].popular && (
                        <div className="bg-gradient-to-r from-cyan-500 to-blue-500 text-white px-4 py-2 rounded-full text-sm font-bold">
                          POPULAIRE
                        </div>
                      )}
                    </div>
                    
                    <p className="text-gray-300 font-modern mb-6 leading-relaxed">
                      {formules[selectedFormule].description}
                    </p>
                    
                    <div className="flex items-baseline space-x-4 mb-6">
                      <div className={`text-4xl font-bold font-futuristic bg-gradient-to-r ${formules[selectedFormule].gradient} bg-clip-text text-transparent`}>
                        {formules[selectedFormule].price}
                      </div>
                      {formules[selectedFormule].originalPrice && (
                        <div className="text-gray-500 line-through text-xl font-futuristic">
                          {formules[selectedFormule].originalPrice}
                        </div>
                      )}
                      <div className="text-cyan-300 font-modern text-sm">
                        Livraison: {formules[selectedFormule].deliveryTime}
                      </div>
                    </div>
                  </div>
                  
                  {/* Features */}
                  <div className="px-8 pb-6">
                    <h4 className="text-lg font-bold font-futuristic text-white mb-4 tracking-wide">
                      Fonctionnalités incluses
                    </h4>
                    <div className="space-y-3 mb-6">
                      {formules[selectedFormule].features.map((feature, idx) => (
                        <div key={idx} className="flex items-start text-gray-300 font-modern">
                          <div className="w-5 h-5 bg-cyan-400 rounded-full flex items-center justify-center mr-3 mt-0.5 flex-shrink-0">
                            <Check className="w-3 h-3 text-white" />
                          </div>
                          <span className="leading-relaxed text-sm">{feature}</span>
                        </div>
                      ))}
                    </div>
                    
                    {/* Avantages */}
                    <h4 className="text-lg font-bold font-futuristic text-white mb-4 tracking-wide">
                      Avantages exclusifs
                    </h4>
                    <div className="grid grid-cols-2 gap-3 mb-6">
                      {formules[selectedFormule].advantages.map((advantage, idx) => (
                        <div key={idx} className="bg-cyan-500/10 border border-cyan-400/30 rounded-lg p-3 text-center">
                          <span className="text-cyan-300 font-medium text-sm">{advantage}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  {/* Actions */}
                  <div className="p-8 pt-0">
                    <button 
                      onClick={handleAppointmentClick}
                      className={`w-full py-2 bg-gradient-to-r ${formules[selectedFormule].gradient} text-white font-bold font-futuristic rounded-xl hover:shadow-2xl transition-all duration-300 flex items-center justify-center group mb-3 text-sm`}
                    >
                      <Calendar className="w-5 h-5 mr-2 group-hover:rotate-12 transition-transform duration-300" />
                      Prendre rendez-vous
                    </button>
                    <p className="text-center text-gray-400 font-modern text-sm">
                      Consultation gratuite • Devis personnalisé
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Comparatif rapide */}
          <div className="bg-slate-800/60 backdrop-blur-md border border-cyan-500/30 rounded-2xl p-8 mb-12">
            <h3 className="text-2xl font-bold font-futuristic text-white mb-8 text-center tracking-wide">
              Comparatif des formules
            </h3>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-cyan-500/30">
                    <th className="text-left py-4 px-4 text-white font-futuristic">Fonctionnalité</th>
                    <th className="text-center py-4 px-4 text-white font-futuristic">Base</th>
                    <th className="text-center py-4 px-4 text-white font-futuristic">Intermédiaire</th>
                    <th className="text-center py-4 px-4 text-white font-futuristic">Premium</th>
                  </tr>
                </thead>
                <tbody className="text-sm">
                  <tr className="border-b border-slate-700/50">
                    <td className="py-3 px-4 text-gray-300">Pages incluses</td>
                    <td className="text-center py-3 px-4 text-gray-300">5-6</td>
                    <td className="text-center py-3 px-4 text-cyan-300">Illimitées</td>
                    <td className="text-center py-3 px-4 text-cyan-300">Illimitées</td>
                  </tr>
                  <tr className="border-b border-slate-700/50">
                    <td className="py-3 px-4 text-gray-300">SEO optimisé</td>
                    <td className="text-center py-3 px-4 text-yellow-400">Base</td>
                    <td className="text-center py-3 px-4 text-cyan-300">Avancé</td>
                    <td className="text-center py-3 px-4 text-cyan-300">Professionnel</td>
                  </tr>
                  <tr className="border-b border-slate-700/50">
                    <td className="py-3 px-4 text-gray-300">Animations</td>
                    <td className="text-center py-3 px-4 text-gray-500">-</td>
                    <td className="text-center py-3 px-4 text-cyan-300">✓</td>
                    <td className="text-center py-3 px-4 text-cyan-300">✓</td>
                  </tr>
                  <tr className="border-b border-slate-700/50">
                    <td className="py-3 px-4 text-gray-300">E-commerce</td>
                    <td className="text-center py-3 px-4 text-gray-500">-</td>
                    <td className="text-center py-3 px-4 text-gray-500">-</td>
                    <td className="text-center py-3 px-4 text-cyan-300">✓</td>
                  </tr>
                  <tr>
                    <td className="py-3 px-4 text-gray-300">Support</td>
                    <td className="text-center py-3 px-4 text-cyan-300">1 an</td>
                    <td className="text-center py-3 px-4 text-cyan-300">1 an prioritaire</td>
                    <td className="text-center py-3 px-4 text-cyan-300">1 an premium</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center animate-fadeInUp animate-delay-400">
          <div className="bg-gradient-to-br from-slate-800/80 via-cyan-900/20 to-slate-800/80 backdrop-blur-md border border-cyan-500/40 rounded-2xl p-8 max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold font-futuristic text-white mb-4 tracking-wide">
              Prêt à commencer ?
            </h3>
            <p className="text-gray-300 font-modern mb-6 leading-relaxed">
              Réservez votre consultation gratuite et obtenez un devis personnalisé pour votre projet.
            </p>
            <button 
              onClick={handleAppointmentClick}
              className="px-4 py-2 bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-semibold rounded-xl hover:from-cyan-400 hover:to-blue-400 hover:shadow-lg hover:shadow-cyan-500/30 transition-all duration-300 flex items-center justify-center mx-auto group text-sm"
            >
              <Calendar className="w-5 h-5 mr-2 group-hover:rotate-12 transition-transform duration-300" />
              Prendre rendez-vous maintenant
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-2 transition-transform" />
            </button>
          </div>
        </div>
      </div>

  {/* Footer rendu par App */}
    </div>
  );
};

export default FormulesPage;