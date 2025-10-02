import React, { useState, useEffect } from 'react';

const PlanetAnimation = () => {
  const texts = [
    'Rapidité',
    'Service 24/7', 
    'Innovation',
    'Qualité Premium',
    'Support Réactif'
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      // Commencer le fondu de sortie
      setIsVisible(false);
      
      // Après 800ms, changer le texte et faire le fondu d'entrée
      setTimeout(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % texts.length);
        setIsVisible(true);
      }, 800);
    }, 3500);

    return () => clearInterval(interval);
  }, [texts.length]);

  return (
    <div className="relative w-full h-24 overflow-hidden mb-12 flex items-center justify-center">
      {/* Effet de particules en arrière-plan */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-2 left-1/4 w-1 h-1 bg-cyan-400 rounded-full animate-pulse" style={{ animationDelay: '0s' }} />
        <div className="absolute top-8 right-1/3 w-1 h-1 bg-blue-400 rounded-full animate-pulse" style={{ animationDelay: '1s' }} />
        <div className="absolute bottom-4 left-1/3 w-1 h-1 bg-cyan-300 rounded-full animate-pulse" style={{ animationDelay: '2s' }} />
        <div className="absolute bottom-8 right-1/4 w-1 h-1 bg-blue-300 rounded-full animate-pulse" style={{ animationDelay: '0.5s' }} />
      </div>
      
      <div 
        className={`transition-all duration-800 ease-in-out transform ${
          isVisible 
            ? 'opacity-100 scale-100 translate-y-0' 
            : 'opacity-0 scale-95 translate-y-2'
        }`}
      >
        <div className="text-center">
          <div className="text-white text-xl font-bold font-futuristic tracking-wider transition-colors duration-300">
            {texts[currentIndex]}
          </div>
          
          {/* Barre bleue sous le mot */}
          <div className="mt-3 flex justify-center">
            <div className="h-0.5 w-16 bg-gradient-to-r from-transparent via-cyan-400 to-transparent rounded-full" />
          </div>
        </div>
      </div>
      
    </div>
  );
};

export default PlanetAnimation;