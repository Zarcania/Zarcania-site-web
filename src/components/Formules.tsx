import React from 'react';
import { Check, Rocket, Sparkles, Crown, Star } from 'lucide-react';
import CircularGallery from './CircularGallery';
import GlitchText from './GlitchText';
import Ballpit from './Ballpit';

interface FormulesProps {
  onFormulesClick: () => void;
}

const Formules: React.FC<FormulesProps> = ({ onFormulesClick }) => {
  const formules = [
    {
      name: 'Formule de Base',
      price: '600€',
      type: 'Site vitrine simple',
      icon: <Rocket className="w-8 h-8" />,
      description: 'Site vitrine professionnel avec hébergement et support inclus',
      gradient: 'from-slate-600 via-slate-500 to-cyan-400',
      borderGradient: 'from-slate-500/50 to-cyan-400/50',
      popular: false
    },
    {
      name: 'Formule Intermédiaire',
      price: '1200€',
      type: 'Site vitrine avancé livré en 7 jours',
      icon: <Star className="w-8 h-8" />,
      description: 'Site avancé avec animations, SEO optimisé et design sur mesure',
      gradient: 'from-cyan-500 via-blue-500 to-cyan-400',
      borderGradient: 'from-cyan-400/60 to-blue-400/60',
      popular: false
    },
    {
      name: 'Formule Personnalisée',
      price: 'Sur devis',
      type: 'Site e-commerce complet ou projet 100% personnalisé',
      icon: <Crown className="w-8 h-8" />,
      description: 'E-commerce complet ou développement 100% personnalisé',
      gradient: 'from-slate-600 via-blue-500 to-cyan-400',
      borderGradient: 'from-slate-500/50 to-blue-400/50',
      popular: false
    }
  ];

  const supplements = [
    // === SUPPORTS IMPRIMÉS ===
    { 
      name: 'Flyers / Affiches', 
      price: '49.99€', 
      icon: '📄',
      description: 'Création de flyers et affiches professionnels avec design moderne et impactant pour vos événements, promotions et campagnes marketing.',
      features: ['Design professionnel', 'Formats variés', 'Fichiers print-ready', 'Révisions incluses', 'Livraison rapide', 'Support technique'],
      category: 'Print'
    },
    { 
      name: 'Cartes de Visite / Restaurant', 
      price: '59.99€', 
      icon: '💼',
      description: 'Cartes de visite haut de gamme ou cartes restaurant élégantes avec design personnalisé. Plusieurs finitions disponibles.',
      features: ['Design personnalisé', 'Papier premium', 'Finitions variées', 'Livraison rapide', 'Quantités flexibles', 'Révisions incluses'],
      category: 'Print'
    },
    { 
      name: 'Menus', 
      price: '69.99€', 
      icon: '🍽️',
      description: 'Création de menus restaurant professionnels avec mise en page soignée et design adapté à votre établissement.',
      features: ['Design sur mesure', 'Mise en page pro', 'Formats multiples', 'Impression premium', 'Révisions incluses', 'Conseils présentation'],
      category: 'Restaurant'
    },
    { 
      name: 'Brochures / Catalogues', 
      price: '149.99€', 
      icon: '📖',
      description: 'Brochures et catalogues professionnels multi-pages avec mise en page soignée pour présenter vos produits et services.',
      features: ['Design multi-pages', 'Mise en page pro', 'Reliure incluse', 'Papier premium', 'Révisions illimitées', 'Formats A4/A5'],
      category: 'Print'
    },
    { 
      name: 'Étiquettes / Autocollants', 
      price: '39.99€', 
      icon: '🏷️',
      description: 'Étiquettes personnalisées et autocollants pour vos produits, packaging ou communication avec finitions variées.',
      features: ['Formes personnalisées', 'Matériaux variés', 'Résistant UV', 'Quantités flexibles', 'Découpe précise', 'Livraison rapide'],
      category: 'Print'
    },
    { 
      name: 'Calendriers Personnalisés', 
      price: '89.99€', 
      icon: '📅',
      description: 'Calendriers personnalisés annuels ou mensuels avec vos visuels et informations pour vos clients et partenaires.',
      features: ['Design personnalisé', 'Photos incluses', 'Formats variés', 'Papier premium', 'Reliure spirale', 'Marquage entreprise'],
      category: 'Print'
    },
    { 
      name: 'Cartes Postales / Invitations', 
      price: '44.99€', 
      icon: '💌',
      description: 'Cartes postales promotionnelles et invitations élégantes pour vos événements avec design sur mesure.',
      features: ['Design unique', 'Papier premium', 'Formats standards', 'Finitions brillantes', 'Quantités flexibles', 'Livraison express'],
      category: 'Print'
    },
    { 
      name: 'Signalétique / Panneaux', 
      price: '199.99€', 
      icon: '🪧',
      description: 'Panneaux de signalétique et affichage extérieur résistants aux intempéries avec supports inclus.',
      features: ['Matériaux résistants', 'Supports inclus', 'Formats sur mesure', 'Impression HD', 'Installation conseils', 'Garantie 2 ans'],
      category: 'Print'
    },
    
    // === SUPPORTS DIGITAUX ===
    { 
      name: 'Bannières Réseaux Sociaux', 
      price: '79.99€', 
      icon: '📱',
      description: 'Pack complet de bannières pour vos réseaux sociaux : Facebook, Instagram, LinkedIn. Designs cohérents avec votre identité.',
      features: ['Templates Instagram', 'Bannières Facebook', 'Couvertures LinkedIn', 'Stories design', 'Formats optimisés', 'Guide utilisation'],
      category: 'Digital'
    },
    { 
      name: 'Templates d\'E-mails', 
      price: '89.99€', 
      icon: '📧',
      description: 'Templates d\'e-mails professionnels responsive pour vos campagnes marketing, newsletters et communications clients.',
      features: ['Design responsive', 'Compatible tous clients', 'Templates variés', 'Code optimisé', 'Tests inclus', 'Documentation'],
      category: 'Digital'
    },
    { 
      name: 'Présentations Visuelles / Visuels Blog', 
      price: '99.99€', 
      icon: '📊',
      description: 'Création de présentations PowerPoint professionnelles et visuels pour blog avec design moderne et contenu structuré.',
      features: ['Design moderne', 'Animations fluides', 'Visuels blog', 'Templates réutilisables', 'Formats multiples', 'Formation incluse'],
      category: 'Design'
    },
    { 
      name: 'Infographies', 
      price: '149.99€', 
      icon: '📈',
      description: 'Infographies professionnelles pour présenter vos données de manière visuelle et impactante avec design sur mesure.',
      features: ['Design sur mesure', 'Données visualisées', 'Formats multiples', 'Révisions incluses', 'Haute résolution', 'Conseils utilisation'],
      category: 'Design'
    },
    { 
      name: 'Présentation PowerPoint', 
      price: '100€', 
      icon: '📊',
      description: 'Création de présentations PowerPoint professionnelles pour vos réunions, formations ou conférences. Design moderne et contenu structuré.',
      features: ['Design moderne', 'Animations fluides', 'Graphiques pro', 'Templates réutilisables', 'Formats multiples', 'Formation incluse'],
      category: 'Digital'
    },
    { 
      name: 'Logos & Identité Visuelle', 
      price: '299.99€', 
      icon: '🎨',
      description: 'Création de logo professionnel et charte graphique complète pour votre entreprise avec déclinaisons multiples.',
      features: ['Logo vectoriel', 'Charte graphique', 'Déclinaisons couleurs', 'Formats multiples', 'Guide utilisation', 'Fichiers sources'],
      category: 'Digital'
    },
    { 
      name: 'Animations & GIFs', 
      price: '129.99€', 
      icon: '🎬',
      description: 'Animations courtes et GIFs animés pour vos réseaux sociaux et communications digitales avec effets professionnels.',
      features: ['Animations fluides', 'Formats optimisés', 'Effets visuels', 'Durée personnalisée', 'Résolutions multiples', 'Formats web'],
      category: 'Digital'
    },
    { 
      name: 'Mockups & Prototypes', 
      price: '159.99€', 
      icon: '📱',
      description: 'Mockups réalistes et prototypes interactifs pour présenter vos projets de manière professionnelle.',
      features: ['Mockups réalistes', 'Prototypes cliquables', 'Formats variés', 'Présentation pro', 'Révisions incluses', 'Fichiers sources'],
      category: 'Digital'
    },
    { 
      name: 'Icônes Personnalisées', 
      price: '79.99€', 
      icon: '⭐',
      description: 'Pack d\'icônes personnalisées cohérentes avec votre identité visuelle pour sites web et applications.',
      features: ['Style cohérent', 'Formats vectoriels', 'Tailles multiples', 'Pack complet', 'Couleurs personnalisées', 'Licence commerciale'],
      category: 'Digital'
    },
    { 
      name: 'Vidéos Promotionnelles', 
      price: '399.99€', 
      icon: '🎥',
      description: 'Vidéos promotionnelles courtes pour vos réseaux sociaux et site web avec montage professionnel.',
      features: ['Montage professionnel', 'Musique incluse', 'Effets visuels', 'Formats optimisés', 'Sous-titres', 'Révisions incluses'],
      category: 'Digital'
    },
    { 
      name: 'Signatures E-mail', 
      price: '49.99€', 
      icon: '✉️',
      description: 'Signatures e-mail professionnelles HTML responsive avec liens sociaux et informations de contact.',
      features: ['Design responsive', 'Liens cliquables', 'Réseaux sociaux', 'Compatible tous clients', 'Installation guidée', 'Révisions incluses'],
      category: 'Digital'
    }
  ];

  return (
    <section id="formules" className="py-8 sm:py-12 md:py-16 bg-transparent relative">
      {/* Overlay subtil pour la lisibilité */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900/40 via-blue-900/20 to-slate-800/40" />
      <div className="container-responsive">
        {/* Header */}
        <div className="text-center margin-responsive relative z-10 animate-fadeInUp">
          <h2 className="heading-responsive font-bold font-futuristic text-white margin-responsive tracking-wide relative">
            Nos Formules
            <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-gradient-to-r from-transparent via-cyan-400 to-transparent rounded-full"></div>
          </h2>
          <p className="text-responsive-base text-gray-300 max-w-3xl mx-auto font-modern leading-relaxed mt-6">
            🚀 <strong className="text-cyan-300">Livraison express en 7 jours</strong> • Design premium • Support 24/7 inclus
          </p>
        </div>

        {/* Formules Grid */}
        <div className="flex flex-wrap justify-center gap-6 mb-8 relative z-10 animate-fadeInUp animate-delay-200 md:gap-8 md:mb-12">
          {formules.map((formule, index) => (
            <div
              key={index}
              className={`group relative bg-slate-800/60 backdrop-blur-md border-2 rounded-full p-8 hover:transform hover:scale-105 transition-all duration-500 shadow-xl hover:shadow-cyan-500/30 w-72 h-72 flex flex-col items-center justify-center text-center sm:w-80 sm:h-80 md:w-96 md:h-96 ${
                formule.popular
                  ? 'border-cyan-400/60 bg-gradient-to-br from-cyan-500/10 via-slate-800/80 to-blue-500/10 shadow-cyan-500/30' 
                  : 'border-slate-600/30 hover:border-cyan-400/60 hover:shadow-2xl'
              } overflow-hidden`}
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              {/* Badge populaire */}
              {formule.popular && (
                <div className="absolute -top-3 -right-3">
                  <span className="bg-gradient-to-r from-cyan-500 to-blue-500 text-white px-3 py-1 rounded-full text-xs font-bold font-futuristic tracking-wide shadow-lg">
                    POPULAIRE
                  </span>
                </div>
              )}
              
              {/* Icône simple */}
              <div className="mb-4">
                <div className={`w-16 h-16 bg-gradient-to-br ${formule.gradient} rounded-full flex items-center justify-center text-white shadow-lg group-hover:scale-110 transition-all duration-300`}>
                  {formule.icon}
                </div>
              </div>
              
              {/* Titre */}
              <div className="mb-3">
                <h3 className="text-lg font-bold font-futuristic text-white mb-2 tracking-wide group-hover:text-cyan-300 transition-colors duration-300 leading-tight">
                  {formule.name}
                </h3>
                <p className="text-cyan-300/90 mb-3 font-modern text-sm leading-relaxed group-hover:text-cyan-200 transition-colors duration-300">{formule.type}</p>
                <div className={`text-2xl font-bold font-futuristic bg-gradient-to-r ${formule.gradient} bg-clip-text text-transparent mb-4 tracking-wider group-hover:scale-105 transition-transform duration-300`}>
                  {formule.price}
                </div>
              </div>
              
              {/* Description */}
              <div className="mb-4 px-4">
                <p className="text-gray-300 font-modern text-xs leading-relaxed group-hover:text-gray-200 transition-colors duration-300 text-center">
                  {formule.description}
                </p>
              </div>
              
              {/* Bouton découvrir */}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// Composant pour les listes déroulantes des suppléments
const SupplementsDropdown: React.FC<{ supplements: any[] }> = ({ supplements }) => {
  const [openSections, setOpenSections] = React.useState<{ [key: string]: boolean }>({
    print: false,
    digital: false
  });

  const toggleSection = (section: string) => {
    setOpenSections(prev => ({
      ...prev,
      [section]: !prev[section]
    }));
  };

  const sections = [
    {
      key: 'print',
      title: 'Supports imprimés',
      description: 'Formats adaptés à la distribution en boutique ou en boîte aux lettres, avec un design clair et percutant.',
      gradient: 'from-cyan-400 to-blue-500',
      borderColor: 'border-cyan-500/30',
      hoverBorderColor: 'hover:border-cyan-400/60',
      items: supplements.filter(item => item.category === 'Print'),
      icon: '🖨️'
    },
    {
      key: 'digital',
      title: 'Supports digitaux',
      description: 'Bannières pour réseaux sociaux, visuels de posts et infographies pour expliquer vos services.',
      gradient: 'from-blue-400 to-purple-500',
      borderColor: 'border-blue-500/30',
      hoverBorderColor: 'hover:border-blue-400/60',
      items: supplements.filter(item => item.category === 'Digital'),
      icon: '💻'
    }
  ];

  return (
    <div className="relative z-10 space-y-3 md:space-y-4">
      {sections.map((section) => (
        <div key={section.key} className="max-w-4xl mx-auto">
          {/* Header cliquable */}
          <button
            onClick={() => toggleSection(section.key)}
            className={`w-full bg-slate-800/60 backdrop-blur-md border ${section.borderColor} ${section.hoverBorderColor} rounded-lg p-3 transition-all duration-300 shadow-lg shadow-slate-900/50 group md:rounded-xl md:p-4`}
          >
            <div className="flex items-center justify-between gap-2 md:gap-4">
              <div className="flex items-center space-x-2 flex-1 min-w-0 md:space-x-3">
                <div className="text-base flex-shrink-0 md:text-lg">{section.icon}</div>
                <div className="text-left">
                  <h3 className={`text-sm font-bold font-futuristic text-white tracking-wide bg-gradient-to-r ${section.gradient} bg-clip-text text-transparent md:text-base`}>
                    {section.title}
                  </h3>
                  <p className="text-gray-300 font-modern text-xs mt-0.5 leading-relaxed md:text-sm md:mt-1">
                    {section.description}
                  </p>
                </div>
              </div>
              <div className={`transform transition-transform duration-300 flex-shrink-0 ${openSections[section.key] ? 'rotate-180' : ''}`}>
                <svg className="w-4 h-4 text-cyan-400 md:w-5 md:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </div>
            </div>
          </button>

          {/* Contenu déroulant */}
          <div className={`overflow-hidden transition-all duration-500 ease-in-out ${
            openSections[section.key] 
              ? 'max-h-[2000px] opacity-100 mt-2 md:mt-3' 
              : 'max-h-0 opacity-0'
          }`}>
            <div className="grid grid-cols-2 gap-2 md:gap-4">
              {section.items.map((item, index) => (
                <div key={index} className={`group relative bg-slate-800/40 backdrop-blur-xl border ${section.borderColor} rounded-lg p-2 ${section.hoverBorderColor} hover:transform hover:scale-[1.02] shadow-lg shadow-slate-900/40 transition-all duration-300 overflow-hidden md:rounded-xl md:p-3`}>
                  {/* Effet de lueur */}
                  <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 via-blue-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
                  
                  <div className="text-center">
                    {/* Icône */}
                    <div className="relative mb-1 md:mb-2">
                      <div className={`w-6 h-6 mx-auto bg-gradient-to-br from-slate-700/80 via-cyan-900/40 to-slate-800/80 rounded-lg flex items-center justify-center text-xs border ${section.borderColor} group-hover:border-cyan-400/60 transition-all duration-300 shadow-md md:w-8 md:h-8 md:text-sm`}>
                        <span className="relative z-10">{item.icon}</span>
                      </div>
                    </div>
                    
                    {/* Titre */}
                    <h4 className="text-xs font-bold font-futuristic text-white mb-1 tracking-wide group-hover:text-cyan-300 transition-colors duration-300 leading-tight md:text-sm md:mb-2">
                      {item.name}
                    </h4>
                    
                    {/* Prix */}
                    <div className={`text-xs font-bold font-futuristic bg-gradient-to-r ${section.gradient} bg-clip-text text-transparent mb-1 md:text-sm md:mb-2`}>
                      Sur devis
                    </div>
                    
                    {/* Description courte */}
                    <p className="text-gray-400 text-xs font-modern leading-relaxed md:text-sm">
                      {item.description.substring(0, 40)}...
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Formules;