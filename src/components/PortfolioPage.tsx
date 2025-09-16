import React, { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import { Star, Rocket, ExternalLink, Code, Zap, Check, ChevronLeft, ChevronRight, Eye, Heart, Award, TrendingUp } from 'lucide-react';

const PortfolioPage: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState(0);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const heroRef = useRef<HTMLDivElement | null>(null);

  // Lightbox state
  const [lightbox, setLightbox] = useState<{ open: boolean; projectIndex: number; imageIndex: number }>({
    open: false,
    projectIndex: 0,
    imageIndex: 0,
  });

  type NavigatorWithTouch = Navigator & { maxTouchPoints?: number; msMaxTouchPoints?: number };
  const isTouchDevice = typeof window !== 'undefined' && (
    ('ontouchstart' in window) || (typeof navigator !== 'undefined' && ((navigator as NavigatorWithTouch).maxTouchPoints || 0) > 0)
  );

  const openLightbox = (projectIndex: number, imageIndex: number) => {
    setLightbox({ open: true, projectIndex, imageIndex });
  };
  const closeLightbox = () => setLightbox((s) => ({ ...s, open: false }));

  // Tous les projets (extensible)
  const currentProjects = useMemo(() => ([
    // Projets Réels Zarcania
    {
      id: 1,
      title: "AUDIOLIGHT",
      category: "Site Vitrine",
      description: "Site vitrine professionnel pour AUDIOLIGHT, spécialisé dans les solutions audio et éclairage événementiel. Design moderne avec galerie de réalisations, présentation des services et formulaire de contact optimisé.",
      technologies: ["React", "Tailwind CSS", "JavaScript", "Netlify"],
      features: ["Design responsive", "Galerie interactive", "Formulaire contact", "SEO optimisé"],
      images: [
        "/AudioLight ACCUEIL.png",
        "/Audiolight a propos.png",
        "/Audio light expertise.png",
        "/Audiolight catalogue.png"
      ],
      gradient: "from-cyan-500 to-blue-500",
      color: "cyan",
      isReal: true
    },
    // Bloc 1 - Sites E-commerce
    {
      id: 2,
      title: "Site Web Restaurant",
      category: "Site Vitrine",
      description: "Site vitrine élégant pour restaurant avec menu interactif, galerie de plats et système de réservation en ligne. Design gourmand mettant en valeur la cuisine avec des photos appétissantes, présentation du chef et informations pratiques.",
      technologies: ["React", "Tailwind CSS", "JavaScript", "Netlify"],
      features: ["Menu interactif", "Réservation en ligne", "Galerie de plats", "Informations pratiques"],
      images: [
        "/restaurant accueil.png",
        "/restaurant storie.png"
      ],
      gradient: "from-cyan-500 to-blue-500",
      color: "cyan"
    },
    {
      id: 3,
      title: "Site Web Logistique",
      category: "Site Vitrine",
      description: "Site web professionnel pour entreprise de logistique avec présentation des services de transport, suivi des colis et demandes de devis. Interface moderne avec sections dédiées aux différents types de transport et témoignages clients.",
      technologies: ["React", "Tailwind CSS", "JavaScript", "Netlify"],
      features: ["Suivi de colis", "Devis en ligne", "Services transport", "Interface moderne"],
      images: [
        "/files_3416049-1757015877246-Logistique%20accueil.png",
        "/files_3416049-1757015879921-Logistique%20histoire.png",
        "/files_3416049-1757015881450-logistique%20pied%20de%20page.png"
      ],
      gradient: "from-cyan-500 to-blue-500",
      color: "cyan"
    },
    {
      id: 4,
      title: "Site Web Yoga",
      category: "Site Vitrine",
      description: "Site vitrine zen et moderne pour studio de yoga avec présentation des cours, planning des séances et réservation en ligne. Design apaisant avec galerie photos et informations sur les instructeurs.",
      technologies: ["React", "Tailwind CSS", "JavaScript", "Netlify"],
      features: ["Planning des cours", "Réservation en ligne", "Galerie photos", "Profils instructeurs"],
      images: [
        "/SanKalpa Yoga.png",
        "/Capture d'écran 2025-09-04 214028.png",
        "/Capture d'écran 2025-09-04 214057.png"
      ],
      gradient: "from-cyan-400 to-blue-600",
      color: "cyan"
    },
  ]), []);

  // Prev/next helpers now that projects are defined
  const lightboxPrev = useCallback(() => {
    const images = currentProjects[lightbox.projectIndex]?.images || [];
    if (!images.length) return;
    setLightbox((s) => ({ ...s, imageIndex: s.imageIndex === 0 ? images.length - 1 : s.imageIndex - 1 }));
  }, [currentProjects, lightbox.projectIndex]);
  const lightboxNext = useCallback(() => {
    const images = currentProjects[lightbox.projectIndex]?.images || [];
    if (!images.length) return;
    setLightbox((s) => ({ ...s, imageIndex: s.imageIndex === images.length - 1 ? 0 : s.imageIndex + 1 }));
  }, [currentProjects, lightbox.projectIndex]);

  // Close/controls on keyboard
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setLightbox((s) => ({ ...s, open: false }));
        return;
      }
      if (!lightbox.open) return;
      if (e.key === 'ArrowLeft') lightboxPrev();
      if (e.key === 'ArrowRight') lightboxNext();
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [lightbox.open, lightboxPrev, lightboxNext]);

  const stats = [
    { number: "50+", label: "Projets réalisés", icon: <Rocket className="w-5 h-5" /> },
    { number: "98%", label: "Clients satisfaits", icon: <Star className="w-5 h-5" /> },
    { number: "7j", label: "Délai moyen", icon: <Zap className="w-5 h-5" /> },
    { number: "24/7", label: "Support client", icon: <Code className="w-5 h-5" /> }
  ];

  // CTA handlers are delegated to Footer and global navigation

  type Color = 'cyan' | 'blue' | 'slate';
  const getColorClasses = (color: Color) => {
    const colors = {
      cyan: { border: 'border-cyan-400/50', bg: 'bg-cyan-500/10', text: 'text-cyan-300' },
      blue: { border: 'border-blue-400/50', bg: 'bg-blue-500/10', text: 'text-blue-300' },
      slate: { border: 'border-slate-400/50', bg: 'bg-slate-500/10', text: 'text-slate-300' },
    };
    return colors[color] || colors.cyan;
  };

  const handleImageChange = (direction: 'prev' | 'next') => {
    const currentProject = currentProjects[selectedProject];
    if (!currentProject) return;
    
    if (direction === 'prev') {
      setCurrentImageIndex((prev) => 
        prev === 0 ? currentProject.images.length - 1 : prev - 1
      );
    } else {
      setCurrentImageIndex((prev) => 
        prev === currentProject.images.length - 1 ? 0 : prev + 1
      );
    }
  };

  // Reset image index when project changes
  React.useEffect(() => {
    setCurrentImageIndex(0);
  }, [selectedProject]);

  // Select a project and scroll to hero section
  const handleSelectAndScroll = (index: number) => {
    setSelectedProject(index);
    // Small delay to ensure layout updates then scroll
    setTimeout(() => {
      if (heroRef.current) {
        heroRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }, 50);
  };
  
  return (
    <div className="min-h-screen bg-transparent relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900/40 via-blue-900/20 to-slate-800/40" />
      
      <div className="container mx-auto px-6 py-20 relative z-10">
        {/* Header Section */}
        <div className="text-center mb-16 animate-fadeInUp">
          <h1 className="text-5xl md:text-6xl font-bold font-futuristic text-white mb-8 tracking-wide">
            Portfolio
          </h1>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto font-modern leading-relaxed mb-12">
            Chez Zarcania, nous transformons vos idées en expériences digitales exceptionnelles. 
            Chaque projet reflète notre expertise technique, notre créativité et notre engagement 
            à livrer des solutions web performantes qui marquent les esprits.
          </p>
          
          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-3xl mx-auto">
            {stats.map((stat, index) => (
              <div key={index} className="bg-slate-800/60 backdrop-blur-md border border-cyan-500/30 rounded-xl p-4 text-center hover:border-cyan-400/60 transition-all duration-300 shadow-xl shadow-slate-900/50">
                <div className="w-8 h-8 bg-gradient-to-br from-cyan-500 to-blue-500 rounded-lg flex items-center justify-center text-white mx-auto mb-3">
                  {stat.icon}
                </div>
                <div className="text-xl font-bold font-futuristic text-cyan-400 mb-1 tracking-wider">{stat.number}</div>
                <div className="text-gray-400 font-modern text-xs">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Portfolio Title */}
        <div className="mb-12 animate-fadeInUp animate-delay-200">
          <h2 className="text-3xl font-bold font-futuristic text-white tracking-wide text-center">
            Nos Réalisations
          </h2>
        </div>

        {/* Portfolio Layout */}
        <div className="mb-16 animate-fadeInUp animate-delay-300">
          {/* Hero Project Section */}
          <div ref={heroRef} className="relative mb-12 scroll-mt-28" id="portfolio-hero">
            <div className="grid lg:grid-cols-2 gap-8 items-center">
              {/* Project Showcase */}
              <div className="relative group">
                <div className="absolute -inset-4 bg-gradient-to-r from-cyan-500/20 via-blue-500/20 to-purple-500/20 rounded-3xl blur-xl group-hover:blur-2xl transition-all duration-500 opacity-60 group-hover:opacity-100" />
                <div className="relative bg-slate-800/80 backdrop-blur-xl border border-cyan-500/30 rounded-3xl overflow-hidden shadow-2xl">
                  {/* Main Image */}
                  <div className="relative h-80 lg:h-96 overflow-hidden">
                    <img
                      src={currentProjects[selectedProject]?.images[currentImageIndex] || "/restaurant accueil.png"}
                      alt={currentProjects[selectedProject]?.title}
                      className="w-full h-full object-cover transition-all duration-700 cursor-zoom-in"
                      loading="lazy" decoding="async"
                      onClick={(e) => {
                        // Desktop: simple click opens
                        if (!isTouchDevice) {
                          e.stopPropagation();
                          openLightbox(selectedProject, currentImageIndex);
                        }
                      }}
                      onDoubleClick={(e) => {
                        // Mobile: double tap opens
                        e.stopPropagation();
                        openLightbox(selectedProject, currentImageIndex);
                      }}
                      onError={(e) => {
                        const target = e.target as HTMLImageElement;
                        target.src = "/restaurant accueil.png";
                      }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-cyan-900/20 to-transparent" />
                    
                    {/* Image Navigation */}
                    {currentProjects[selectedProject]?.images.length > 1 && (
                      <>
                        <button
                          onClick={() => handleImageChange('prev')}
                          className="absolute left-4 top-1/2 transform -translate-y-1/2 w-10 h-10 bg-slate-900/80 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-cyan-500/80 hover:shadow-lg hover:shadow-cyan-500/50 transition-all duration-300 z-10"
                        >
                          <ChevronLeft className="w-5 h-5" />
                        </button>
                        <button
                          onClick={() => handleImageChange('next')}
                          className="absolute right-4 top-1/2 transform -translate-y-1/2 w-10 h-10 bg-slate-900/80 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-cyan-500/80 hover:shadow-lg hover:shadow-cyan-500/50 transition-all duration-300 z-10"
                        >
                          <ChevronRight className="w-5 h-5" />
                        </button>
                        
                        {/* Image Indicators */}
                        <div className="absolute bottom-16 left-1/2 transform -translate-x-1/2 flex space-x-2 z-10">
                          {currentProjects[selectedProject]?.images.map((_, index) => (
                            <button
                              key={index}
                              onClick={() => setCurrentImageIndex(index)}
                              className={`w-2 h-2 rounded-full transition-all duration-300 ${
                                index === currentImageIndex
                                  ? 'bg-cyan-400 shadow-lg shadow-cyan-400/50'
                                  : 'bg-white/50 hover:bg-white/80'
                              }`}
                            />
                          ))}
                        </div>
                      </>
                    )}
                    
                    {/* Overlay Info */}
                    <div className="absolute top-4 left-4 right-4 flex justify-between items-start">
                      <div className={`px-4 py-2 bg-gradient-to-r ${currentProjects[selectedProject]?.gradient} rounded-full text-white text-sm font-bold font-futuristic tracking-wide shadow-lg backdrop-blur-sm`}>
                        {currentProjects[selectedProject]?.category}
                      </div>
                      <div className="flex space-x-2">
                        {/* Image Counter */}
                        {currentProjects[selectedProject]?.images.length > 1 && (
                          <div className="px-3 py-1 bg-slate-900/80 backdrop-blur-sm rounded-full text-white text-xs font-medium">
                            {currentImageIndex + 1}/{currentProjects[selectedProject]?.images.length}
                          </div>
                        )}
                        <button
                          type="button"
                          onClick={(e) => { e.stopPropagation(); openLightbox(selectedProject, currentImageIndex); }}
                          className="w-10 h-10 bg-slate-900/80 backdrop-blur-sm rounded-full flex items-center justify-center text-cyan-400 hover:bg-cyan-500/80 hover:text-white hover:shadow-lg hover:shadow-cyan-500/50 transition-all duration-300 cursor-pointer"
                        >
                          <Eye className="w-5 h-5" />
                        </button>
                        <div className="w-10 h-10 bg-slate-900/80 backdrop-blur-sm rounded-full flex items-center justify-center text-blue-400 hover:bg-blue-500/80 hover:text-white hover:shadow-lg hover:shadow-blue-500/50 transition-all duration-300 cursor-pointer">
                          <Heart className="w-5 h-5" />
                        </div>
                      </div>
                    </div>
                    
                    {/* Bottom Info */}
                    <div className="absolute bottom-4 left-4 right-4">
                      <div className="flex items-center justify-between">
                        <div className="text-white">
                          <h3 className="text-xl font-bold font-futuristic mb-1">{currentProjects[selectedProject]?.title}</h3>
                          <div className="flex items-center space-x-4 text-sm text-gray-300">
                            <div className="flex items-center">
                              <Award className="w-4 h-4 mr-1 text-cyan-400" />
                              Premium
                            </div>
                            <div className="flex items-center">
                              <TrendingUp className="w-4 h-4 mr-1 text-blue-400" />
                              Livré
                            </div>
                          </div>
                        </div>
                        <div className="text-right">
                          <div className="text-2xl font-bold text-cyan-400 font-futuristic">{selectedProject + 1}</div>
                          <div className="text-xs text-gray-400">sur {currentProjects.length}</div>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  {/* Project Details */}
                  <div className="p-6">
                    <p className="text-gray-300 mb-4 leading-relaxed font-modern">
                      {currentProjects[selectedProject]?.description}
                    </p>
                    
                    {/* Technologies */}
                    <div className="flex flex-wrap gap-2 mb-4">
                      {currentProjects[selectedProject]?.technologies.map((tech, index) => (
                        <span
                          key={index}
                          className="px-3 py-1 bg-slate-700/60 border border-cyan-500/30 rounded-lg text-xs font-medium text-cyan-300 font-modern hover:bg-cyan-500/20 hover:border-cyan-400/50 transition-all duration-300"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                    
                    {/* Action Button */}
                  </div>
                </div>
              </div>
              
              {/* Project Navigation */}
              <div className="space-y-4">
                <div className="text-center lg:text-left mb-8">
                  <h3 className="text-3xl font-bold font-futuristic text-white mb-4 tracking-wide">
                    Nos dernières réalisations
                  </h3>
                  <p className="text-gray-300 font-modern">
                    Découvrez nos réalisations les plus impressionnantes
                  </p>
                </div>
                
                {/* Project Thumbnails */}
                <div className="grid grid-cols-2 gap-4">
                  {currentProjects.map((item, index) => {
                    const colorClasses = getColorClasses(item.color as Color);
                    const isSelected = selectedProject === index;
                    
                    return (
                      <div
                        key={item.id}
                        onClick={() => handleSelectAndScroll(index)}
                        className={`group cursor-pointer transition-all duration-500 ${
                          isSelected 
                            ? `ring-2 ring-cyan-400 shadow-2xl shadow-cyan-500/40` 
                            : 'hover:shadow-xl hover:shadow-cyan-500/20'
                        } rounded-2xl overflow-hidden relative`}
                      >
                        {/* Thumbnail Image */}
                        <div className="relative h-32 overflow-hidden">
                          <img
                            src={item.images[0] || "/restaurant accueil.png"}
                            alt={item.title}
                            className="w-full h-full object-cover transition-all duration-500 cursor-zoom-in" loading="lazy" decoding="async"
                            onClick={(e) => {
                              if (!isTouchDevice) {
                                e.stopPropagation();
                                openLightbox(index, 0);
                              }
                            }}
                            onDoubleClick={(e) => {
                              e.stopPropagation();
                              openLightbox(index, 0);
                            }}
                            onError={(e) => {
                              const target = e.target as HTMLImageElement;
                              target.src = "/restaurant accueil.png";
                            }}
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-cyan-900/10 to-transparent" />
                          
                          {/* Selection Indicator */}
                          {isSelected && (
                            <div className="absolute top-2 right-2">
                              <div className="w-6 h-6 bg-cyan-400 rounded-full flex items-center justify-center shadow-lg shadow-cyan-500/50">
                                <Check className="w-4 h-4 text-white" />
                              </div>
                            </div>
                          )}
                          
                          {/* Project Info Overlay */}
                          <div className="absolute bottom-2 left-2 right-2">
                            <h4 className="text-white font-bold text-sm font-futuristic mb-1 truncate">
                              {item.title}
                            </h4>
                            <div className={`inline-flex items-center px-2 py-1 ${colorClasses.bg} border ${colorClasses.border} rounded-lg text-xs font-medium ${colorClasses.text} backdrop-blur-sm`}>
                              {item.category}
                            </div>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
                
                {/* Features List */}
                <div className="bg-slate-800/60 backdrop-blur-md border border-cyan-500/30 rounded-2xl p-6 mt-6 hover:border-cyan-400/50 transition-all duration-300">
                  <h4 className="text-lg font-bold font-futuristic text-white mb-4 tracking-wide">
                    Fonctionnalités clés
                  </h4>
                  <div className="space-y-3">
                    {currentProjects[selectedProject]?.features.map((feature, index) => (
                      <div key={index} className="flex items-center text-gray-300 font-modern">
                        <div className="w-2 h-2 bg-cyan-400 rounded-full mr-3 flex-shrink-0 shadow-sm shadow-cyan-400/50" />
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* All Projects Grid */}
          <div className="mb-12">
            <h3 className="text-2xl font-bold font-futuristic text-white mb-8 text-center tracking-wide">
              Nos Réalisations
            </h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {currentProjects.map((item, index) => {
                const colorClasses = getColorClasses(item.color as Color);
                
                return (
                  <div
                    key={item.id}
                    onClick={() => handleSelectAndScroll(index)}
                    className="group cursor-pointer bg-slate-800/60 backdrop-blur-md border border-cyan-500/30 rounded-2xl overflow-hidden hover:border-cyan-400/60 transition-all duration-300 shadow-xl shadow-slate-900/50 hover:shadow-cyan-500/20"
                  >
                    {/* Project Image */}
                    <div className="relative h-48 overflow-hidden">
                      <img
                        src={item.images[0]}
                        alt={item.title}
                        className="w-full h-full object-cover transition-all duration-500 cursor-zoom-in" loading="lazy" decoding="async"
                        onClick={(e) => {
                          if (!isTouchDevice) {
                            e.stopPropagation();
                            openLightbox(index, 0);
                          }
                        }}
                        onDoubleClick={(e) => {
                          e.stopPropagation();
                          openLightbox(index, 0);
                        }}
                        onError={(e) => {
                          const target = e.target as HTMLImageElement;
                          target.src = "/restaurant accueil.png";
                        }}
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-cyan-900/10 to-transparent" />
                      
                      {/* Category Badge */}
                      <div className="absolute top-3 left-3">
                        <div className={`px-3 py-1 ${colorClasses.bg} border ${colorClasses.border} rounded-lg text-xs font-bold font-futuristic tracking-wide backdrop-blur-sm`}>
                          <span className={colorClasses.text}>{item.category}</span>
                        </div>
                      </div>
                      
                      {/* Hover Overlay */}
                      <button
                        type="button"
                        onClick={(e) => { e.stopPropagation(); handleSelectAndScroll(index); }}
                        className="absolute inset-0 bg-gradient-to-br from-slate-900/80 via-cyan-900/40 to-slate-900/80 opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-center justify-center"
                      >
                        <div className="text-center">
                          <ExternalLink className="w-8 h-8 text-cyan-400 mx-auto mb-2" />
                          <span className="text-white font-medium">Voir le projet</span>
                        </div>
                      </button>
                    </div>
                    
                    {/* Project Info */}
                    <div className="p-4">
                      <h4 className="text-lg font-bold font-futuristic text-white mb-2 tracking-wide group-hover:text-cyan-300 transition-colors">
                        {item.title}
                      </h4>
                      <p className="text-gray-400 text-sm font-modern mb-3 line-clamp-2">
                        {item.description}
                      </p>
                      
                      {/* Technologies */}
                      <div className="flex flex-wrap gap-1 mb-3">
                        {item.technologies.slice(0, 2).map((tech, techIndex) => (
                          <span
                            key={techIndex}
                            className="px-2 py-1 bg-slate-700/60 border border-cyan-500/20 rounded text-xs font-medium text-cyan-300 font-modern"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>

  {/* Lightbox Modal */}
  {lightbox.open && (
    <div
      className="fixed inset-0 z-[100] bg-black/80 backdrop-blur-sm flex items-center justify-center p-4"
      onClick={closeLightbox}
      role="dialog" aria-modal="true"
    >
      <div className="relative max-w-6xl w-full" onClick={(e) => e.stopPropagation()}>
        <img
          src={currentProjects[lightbox.projectIndex]?.images[lightbox.imageIndex]}
          alt={currentProjects[lightbox.projectIndex]?.title}
          className="w-full max-h-[80vh] object-contain rounded-lg shadow-2xl"
        />
        {/* Controls */}
        <button
          onClick={closeLightbox}
          className="absolute top-2 right-2 text-white bg-slate-900/70 hover:bg-slate-800 rounded-full px-3 py-1"
        >
          Fermer
        </button>
        {currentProjects[lightbox.projectIndex]?.images.length > 1 && (
          <>
            <button
              onClick={(e) => { e.stopPropagation(); lightboxPrev(); }}
              className="absolute left-2 top-1/2 -translate-y-1/2 w-10 h-10 bg-slate-900/80 rounded-full flex items-center justify-center text-white hover:bg-cyan-500/80"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={(e) => { e.stopPropagation(); lightboxNext(); }}
              className="absolute right-2 top-1/2 -translate-y-1/2 w-10 h-10 bg-slate-900/80 rounded-full flex items-center justify-center text-white hover:bg-cyan-500/80"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </>
        )}
      </div>
    </div>
  )}

  {/* Footer rendu par App */}
    </div>
  );
};

export default PortfolioPage;