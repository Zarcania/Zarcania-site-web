import React, { useState } from 'react';
import { Check, Rocket, Star, Crown, ShoppingCart, Calendar, ChevronDown, Sparkles } from 'lucide-react';

const FormulesPage: React.FC = () => {
  const [expandedFormule, setExpandedFormule] = useState<number | null>(null);
  const [expandedSupplement, setExpandedSupplement] = useState<string | null>(null);
  const [expandedErp, setExpandedErp] = useState<number | null>(null);
  const [expandedService, setExpandedService] = useState<string | null>(null);

  const toggleFormule = (id: number) => {
    setExpandedFormule(expandedFormule === id ? null : id);
  };

  const toggleSupplement = (id: string) => {
    setExpandedSupplement(expandedSupplement === id ? null : id);
  };

  const toggleErp = (id: number) => {
    setExpandedErp(expandedErp === id ? null : id);
  };

  const toggleService = (id: string) => {
    setExpandedService(expandedService === id ? null : id);
  };

  const formules = [
    {
      id: 1,
      name: 'Starter Vitrine',
      price: '599,99 €',
      priceNote: 'HT',
      type: 'Site vitrine simple',
      icon: <Rocket className="w-6 h-6" />,
      description: '3 pages, formulaire simple, design pro, mobile, SEO de base, HTTPS.',
      deliveryTime: '7 jours ouvrés'
    },
    {
      id: 2,
      name: 'Essentiel Vitrine',
      price: '1 199,99 €',
      priceNote: 'HT',
      type: 'Site vitrine enrichi',
      icon: <Star className="w-6 h-6" />,
      description: "Jusqu'à 8 pages, sections enrichies, animations légères, performances optimisées.",
      deliveryTime: '7 jours ouvrés'
    },
    {
      id: 3,
      name: 'Avancé Vitrine',
      price: '1 799,99 €',
      priceNote: 'HT',
      type: 'Site vitrine premium',
      icon: <Crown className="w-6 h-6" />,
      description: 'Pages illimitées, sections sur-mesure, micro-interactions, Core Web Vitals.',
      deliveryTime: '7 jours ouvrés'
    },
    {
      id: 4,
      name: 'E-commerce',
      price: 'dès 2 199,99 €',
      priceNote: 'HT',
      type: 'Boutique en ligne',
      icon: <ShoppingCart className="w-6 h-6" />,
      description: 'Catalogue, panier, paiement (Stripe/PayPal), emails transactionnels, factures.',
      deliveryTime: 'Variable selon projet'
    }
  ];

  const supplements = [
    {
      id: 'forms',
      title: 'Formulaires & Leads',
      icon: '📝',
      items: [
        'Contact avancé (multi-étapes, PJ)',
        'Formulaire de devis (champs conditionnels, PDF)',
        'Captcha/anti-spam'
      ]
    },
    {
      id: 'content',
      title: 'Contenus & Médias',
      icon: '🎨',
      items: [
        'Galeries/portfolios filtrables',
        'Carrousels',
        'Témoignages/avis',
        'FAQ dynamique',
        'Pages légales complètes'
      ]
    },
    {
      id: 'booking',
      title: 'Réservations & Planning',
      icon: '📅',
      items: [
        'Prise de RDV',
        'Gestion de créneaux',
        'Notifications e-mail/SMS',
        'Calendrier embarqué'
      ]
    },
    {
      id: 'client-space',
      title: 'Espace Client',
      icon: '👤',
      items: [
        'Suivi demandes',
        'Téléchargement de documents',
        'Tickets support'
      ]
    },
    {
      id: 'ecommerce-advanced',
      title: 'E-commerce Avancé',
      icon: '🛒',
      items: [
        'Click-and-collect',
        'Modes de livraison (Colissimo/Relay)',
        'Codes promo',
        'Packs produits',
        'Règles de taxe'
      ]
    },
    {
      id: 'international',
      title: 'International & Structure',
      icon: '🌍',
      items: [
        'Multilingue',
        'Multi-marques',
        'Multi-sites'
      ]
    },
    {
      id: 'integrations',
      title: 'Intégrations',
      icon: '🔗',
      items: [
        'Google Analytics/Search Console',
        'Pixels pub',
        'Maps/itinéraires',
        'Chat',
        'CRM',
        'Newsletter'
      ]
    },
    {
      id: 'seo',
      title: 'SEO & Performances',
      icon: '🚀',
      items: [
        'Balises/Schema',
        'Sitemap/robots',
        'Optimisation images (WebP)',
        'Redirections',
        'Maillage interne'
      ]
    },
    {
      id: 'security',
      title: 'Sécurité & Conformité',
      icon: '🔒',
      items: [
        'Bannière cookies',
        'Consentement',
        'RGPD (droits/purge)',
        'Sauvegardes'
      ]
    },
    {
      id: 'data',
      title: 'Data & Migration',
      icon: '📊',
      items: [
        "Import depuis Excel/anciens sites",
        "Redirections d'URLs",
        'Reprises d\'images/textes'
      ]
    },
    {
      id: 'hosting',
      title: 'Hébergement & Suivi',
      icon: '⚙️',
      items: [
        'Monitoring',
        'Sauvegardes',
        'Mises à jour',
        'SLA'
      ]
    }
  ];

  const erpFormules = [
    {
      id: 1,
      name: 'Pack MVP',
      subtitle: 'Mono-module',
      price: '1 499,99 à 3 999,99 €',
      priceNote: 'HT',
      icon: <Sparkles className="w-6 h-6" />,
      description: 'Ex. : devis-factures, mini-CRM, planning simple, portail client.'
    },
    {
      id: 2,
      name: 'Pack Pro',
      subtitle: 'Multi-modules',
      price: '3 999,99 à 8 999,99 €',
      priceNote: 'HT',
      icon: <Star className="w-6 h-6" />,
      description: 'Rôles/permissions, tableaux de bord, exports, automatisations.'
    },
    {
      id: 3,
      name: 'Sur-mesure',
      subtitle: 'Scale',
      price: 'dès 8 999,99 €',
      priceNote: 'HT',
      icon: <Crown className="w-6 h-6" />,
      description: 'Workflows complexes, API/webhooks, intégrations métier (compta, POS…).'
    }
  ];

  const erpModules = [
    {
      id: 'crm',
      title: 'CRM & Commercial',
      icon: '💼',
      items: [
        'CRM & pipeline',
        'Devis-factures & relances',
        'Abonnements (facturation récurrente)'
      ]
    },
    {
      id: 'planning',
      title: 'Planning & Ressources',
      icon: '📆',
      items: [
        'Planning & ressources',
        'Gestion de stocks/multi-dépôts',
        'POS/caisse'
      ]
    },
    {
      id: 'support',
      title: 'Support & SAV',
      icon: '🎧',
      items: [
        'Tickets/SAV & base de connaissances',
        'Portails (client/prestataire/partenaire)'
      ]
    },
    {
      id: 'analytics',
      title: 'Analytics & Intégrations',
      icon: '📈',
      items: [
        'Tableaux de bord KPI',
        'API & webhooks',
        'Qualité (audit log, rôles, sauvegardes)',
        'RGPD'
      ]
    }
  ];

  const otherServices = [
    {
      id: 'strategy',
      title: 'Stratégie',
      icon: '🎯',
      items: [
        'Pré-audit offert (sur rendez-vous)',
        'Stratégie marketing réseaux sociaux (basique / standard / avancé)',
        'Plan de communication',
        'Pack communication digitale'
      ]
    },
    {
      id: 'digital-com',
      title: 'Communication Digitale',
      icon: '📱',
      items: [
        'Campagnes SMS',
        'SEO (basique / avancé)',
        'Google Ads (basique / avancé)'
      ]
    },
    {
      id: 'social',
      title: 'Réseaux Sociaux',
      icon: '📊',
      items: [
        'Community management (basique / standard / avancé)',
        'Calendrier éditorial',
        'Création de contenus visuels & vidéos courtes',
        'Publicité sociale (Social Ads)',
        'Audit & optimisation de comptes'
      ]
    },
    {
      id: 'branding',
      title: 'Identité & Branding',
      icon: '🎨',
      items: [
        'Logo',
        'Charte graphique',
        'Packs lancement (logo + cartes + animation logo, etc.)'
      ]
    },
    {
      id: 'print',
      title: 'Print',
      icon: '🖨️',
      items: [
        'Petite impression (cartes, flyers, documents)',
        'Affiches & Posters',
        'Banderoles & Kakémonos',
        'Signalétique & Enseignes',
        'Habillage véhicules',
        'Supports événementiels'
      ]
    },
    {
      id: 'audiovisual',
      title: 'Audiovisuel',
      icon: '🎬',
      items: [
        'Montage vidéo (basique / avancé)',
        'Tournage professionnel',
        'Motion design',
        'Animation logo',
        'Pack audiovisuel complet'
      ]
    }
  ];

  const handleAppointmentClick = () => {
    window.dispatchEvent(new Event('navigate:appointment'));
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
          <p className="text-lg text-gray-300 max-w-3xl mx-auto font-modern leading-relaxed mb-6">
            Sites vitrines livrés en 7 jours ouvrés. Logiciels 100% web.
          </p>
          <p className="text-base text-cyan-300 font-modern max-w-2xl mx-auto">
            <strong>Acompte 50%</strong> / <strong>50% à la livraison</strong>
          </p>
        </div>

        {/* 1) Sites Internet */}
        <div className="mb-20 animate-fadeInUp animate-delay-200">
          <h2 className="text-4xl font-bold font-futuristic text-white mb-3 text-center tracking-wide">
            Sites Internet
          </h2>
          <p className="text-center text-gray-400 font-modern mb-8 text-sm">Formules de base</p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 max-w-7xl mx-auto">
            {formules.map((formule) => (
              <div key={formule.id} className="relative">
                <button
                  onClick={() => toggleFormule(formule.id)}
                  className={`w-full h-[240px] bg-slate-800/60 backdrop-blur-md border-2 rounded-2xl p-6 text-left transition-all duration-300 hover:border-cyan-400/60 flex flex-col ${
                    expandedFormule === formule.id
                      ? 'border-cyan-400/80 shadow-lg shadow-cyan-500/20'
                      : 'border-cyan-500/30'
                  }`}
                >
                  <div className="flex items-start justify-between mb-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-cyan-500 to-blue-500 rounded-xl flex items-center justify-center text-white flex-shrink-0">
                      {formule.icon}
                    </div>
                    <ChevronDown
                      className={`w-5 h-5 text-cyan-400 transition-transform duration-300 ${
                        expandedFormule === formule.id ? 'rotate-180' : ''
                      }`}
                    />
                  </div>

                  <h3 className="text-xl font-bold font-futuristic text-white mb-2">{formule.name}</h3>
                  <p className="text-2xl font-bold font-futuristic bg-gradient-to-r from-cyan-500 to-blue-500 bg-clip-text text-transparent mb-1">
                    {formule.price}
                  </p>
                  <p className="text-gray-400 text-xs mb-2">{formule.priceNote}</p>
                  <p className="text-cyan-300 text-sm">{formule.type}</p>
                </button>

                <div
                  className={`overflow-hidden transition-all duration-500 ease-in-out ${
                    expandedFormule === formule.id ? 'max-h-[400px] opacity-100 mt-4' : 'max-h-0 opacity-0'
                  }`}
                >
                  <div className="bg-slate-900/60 backdrop-blur-md border border-cyan-500/30 rounded-2xl p-6">
                    <p className="text-gray-300 font-modern mb-4 leading-relaxed text-sm">
                      {formule.description}
                    </p>
                    <span className="inline-block text-cyan-300 text-xs bg-cyan-500/10 px-3 py-1 rounded-full border border-cyan-400/30 mb-4">
                      {formule.deliveryTime}
                    </span>
                    <button
                      onClick={handleAppointmentClick}
                      className="w-full py-2.5 bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-bold font-futuristic rounded-xl hover:shadow-lg transition-all duration-300 flex items-center justify-center text-sm"
                    >
                      <Calendar className="w-4 h-4 mr-2" />
                      Prendre rendez-vous
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Modules & Suppléments */}
        <div className="mb-20 animate-fadeInUp animate-delay-300">
          <h2 className="text-4xl font-bold font-futuristic text-white mb-3 text-center tracking-wide">
            Modules & Suppléments
          </h2>
          <p className="text-center text-gray-400 font-modern mb-8 text-sm">
            Options additionnelles disponibles sur devis
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 max-w-7xl mx-auto">
            {supplements.map((supplement) => (
              <div key={supplement.id}>
                <button
                  onClick={() => toggleSupplement(supplement.id)}
                  className={`w-full h-[80px] bg-slate-800/60 backdrop-blur-md border-2 rounded-xl p-5 text-left transition-all duration-300 hover:border-cyan-400/60 flex items-center ${
                    expandedSupplement === supplement.id
                      ? 'border-cyan-400/80 shadow-lg shadow-cyan-500/20'
                      : 'border-cyan-500/30'
                  }`}
                >
                  <div className="flex items-center gap-3 flex-1">
                    <span className="text-2xl">{supplement.icon}</span>
                    <h3 className="text-base font-bold font-futuristic text-white">{supplement.title}</h3>
                  </div>
                  <ChevronDown
                    className={`w-4 h-4 text-cyan-400 transition-transform duration-300 flex-shrink-0 ${
                      expandedSupplement === supplement.id ? 'rotate-180' : ''
                    }`}
                  />
                </button>

                <div
                  className={`overflow-hidden transition-all duration-500 ease-in-out ${
                    expandedSupplement === supplement.id ? 'max-h-[500px] opacity-100 mt-3' : 'max-h-0 opacity-0'
                  }`}
                >
                  <div className="bg-slate-900/60 backdrop-blur-md border border-cyan-500/30 rounded-xl p-4">
                    <ul className="space-y-2">
                      {supplement.items.map((item, idx) => (
                        <li key={idx} className="flex items-start text-gray-300 text-sm">
                          <Check className="w-4 h-4 text-cyan-400 mr-2 mt-0.5 flex-shrink-0" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* 2) Logiciels Web (ERP) */}
        <div className="mb-20 animate-fadeInUp animate-delay-400">
          <h2 className="text-4xl font-bold font-futuristic text-white mb-3 text-center tracking-wide">
            Logiciels Web / ERP
          </h2>
          <p className="text-center text-gray-400 font-modern mb-8 text-sm">
            Applications 100% web sur-mesure
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-5xl mx-auto mb-12">
            {erpFormules.map((erp) => (
              <div key={erp.id} className="relative">
                <button
                  onClick={() => toggleErp(erp.id)}
                  className={`w-full h-[240px] bg-slate-800/60 backdrop-blur-md border-2 rounded-2xl p-6 text-left transition-all duration-300 hover:border-cyan-400/60 flex flex-col ${
                    expandedErp === erp.id
                      ? 'border-cyan-400/80 shadow-lg shadow-cyan-500/20'
                      : 'border-cyan-500/30'
                  }`}
                >
                  <div className="flex items-start justify-between mb-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-cyan-500 to-blue-500 rounded-xl flex items-center justify-center text-white flex-shrink-0">
                      {erp.icon}
                    </div>
                    <ChevronDown
                      className={`w-5 h-5 text-cyan-400 transition-transform duration-300 ${
                        expandedErp === erp.id ? 'rotate-180' : ''
                      }`}
                    />
                  </div>

                  <h3 className="text-xl font-bold font-futuristic text-white mb-1">{erp.name}</h3>
                  <p className="text-cyan-300 text-xs mb-3">{erp.subtitle}</p>
                  <p className="text-xl font-bold font-futuristic bg-gradient-to-r from-cyan-500 to-blue-500 bg-clip-text text-transparent mb-1">
                    {erp.price}
                  </p>
                  <p className="text-gray-400 text-xs">{erp.priceNote}</p>
                </button>

                <div
                  className={`overflow-hidden transition-all duration-500 ease-in-out ${
                    expandedErp === erp.id ? 'max-h-[400px] opacity-100 mt-4' : 'max-h-0 opacity-0'
                  }`}
                >
                  <div className="bg-slate-900/60 backdrop-blur-md border border-cyan-500/30 rounded-2xl p-6">
                    <p className="text-gray-300 font-modern mb-4 leading-relaxed text-sm">
                      {erp.description}
                    </p>
                    <button
                      onClick={handleAppointmentClick}
                      className="w-full py-2.5 bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-bold font-futuristic rounded-xl hover:shadow-lg transition-all duration-300 flex items-center justify-center text-sm"
                    >
                      <Calendar className="w-4 h-4 mr-2" />
                      Prendre rendez-vous
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Modules ERP */}
          <h3 className="text-2xl font-bold font-futuristic text-white mb-6 text-center">
            Modules & Options ERP
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 max-w-7xl mx-auto">
            {erpModules.map((module) => (
              <div key={module.id}>
                <button
                  onClick={() => toggleService(module.id)}
                  className={`w-full h-[80px] bg-slate-800/60 backdrop-blur-md border-2 rounded-xl p-5 text-left transition-all duration-300 hover:border-cyan-400/60 flex items-center ${
                    expandedService === module.id
                      ? 'border-cyan-400/80 shadow-lg shadow-cyan-500/20'
                      : 'border-cyan-500/30'
                  }`}
                >
                  <div className="flex items-center gap-3 flex-1">
                    <span className="text-2xl">{module.icon}</span>
                    <h3 className="text-sm font-bold font-futuristic text-white">{module.title}</h3>
                  </div>
                  <ChevronDown
                    className={`w-4 h-4 text-cyan-400 transition-transform duration-300 flex-shrink-0 ${
                      expandedService === module.id ? 'rotate-180' : ''
                    }`}
                  />
                </button>

                <div
                  className={`overflow-hidden transition-all duration-500 ease-in-out ${
                    expandedService === module.id ? 'max-h-[300px] opacity-100 mt-3' : 'max-h-0 opacity-0'
                  }`}
                >
                  <div className="bg-slate-900/60 backdrop-blur-md border border-cyan-500/30 rounded-xl p-4">
                    <ul className="space-y-2">
                      {module.items.map((item, idx) => (
                        <li key={idx} className="flex items-start text-gray-300 text-xs">
                          <Check className="w-3 h-3 text-cyan-400 mr-2 mt-0.5 flex-shrink-0" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Autres Services */}
        <div className="mb-20 animate-fadeInUp animate-delay-500">
          <h2 className="text-4xl font-bold font-futuristic text-white mb-3 text-center tracking-wide">
            Nos Autres Services
          </h2>
          <p className="text-center text-gray-400 font-modern mb-8 text-sm">
            Communication digitale, print et audiovisuel
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 max-w-7xl mx-auto">
            {otherServices.map((service) => (
              <div key={service.id}>
                <button
                  onClick={() => toggleService(service.id)}
                  className={`w-full h-[80px] bg-slate-800/60 backdrop-blur-md border-2 rounded-xl p-5 text-left transition-all duration-300 hover:border-cyan-400/60 flex items-center ${
                    expandedService === service.id
                      ? 'border-cyan-400/80 shadow-lg shadow-cyan-500/20'
                      : 'border-cyan-500/30'
                  }`}
                >
                  <div className="flex items-center gap-3 flex-1">
                    <span className="text-2xl">{service.icon}</span>
                    <h3 className="text-base font-bold font-futuristic text-white">{service.title}</h3>
                  </div>
                  <ChevronDown
                    className={`w-4 h-4 text-cyan-400 transition-transform duration-300 flex-shrink-0 ${
                      expandedService === service.id ? 'rotate-180' : ''
                    }`}
                  />
                </button>

                <div
                  className={`overflow-hidden transition-all duration-500 ease-in-out ${
                    expandedService === service.id ? 'max-h-[500px] opacity-100 mt-3' : 'max-h-0 opacity-0'
                  }`}
                >
                  <div className="bg-slate-900/60 backdrop-blur-md border border-cyan-500/30 rounded-xl p-4">
                    <ul className="space-y-2">
                      {service.items.map((item, idx) => (
                        <li key={idx} className="flex items-start text-gray-300 text-sm">
                          <Check className="w-4 h-4 text-cyan-400 mr-2 mt-0.5 flex-shrink-0" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center animate-fadeInUp animate-delay-600">
          <div className="bg-gradient-to-br from-slate-800/80 via-cyan-900/20 to-slate-800/80 backdrop-blur-md border border-cyan-500/40 rounded-2xl p-8 max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold font-futuristic text-white mb-4 tracking-wide">
              Prêt à commencer ?
            </h3>
            <p className="text-gray-300 font-modern mb-6 leading-relaxed">
              Réservez votre consultation gratuite et obtenez un devis personnalisé pour votre projet.
            </p>
            <button
              onClick={handleAppointmentClick}
              className="px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-semibold rounded-xl hover:from-cyan-400 hover:to-blue-400 hover:shadow-lg hover:shadow-cyan-500/30 transition-all duration-300 flex items-center justify-center mx-auto group"
            >
              <Calendar className="w-5 h-5 mr-2 group-hover:rotate-12 transition-transform duration-300" />
              Prendre rendez-vous maintenant
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FormulesPage;
