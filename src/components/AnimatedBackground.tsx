import React, { useEffect, useRef } from 'react';

const AnimatedBackground = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas || typeof window === 'undefined') return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationId: number;
    let stars: Array<{
      x: number;
      y: number;
      vx: number;
      vy: number;
      size: number;
      opacity: number;
      twinkle: number;
      phase: number;
    }> = [];

    // Configuration responsive
    const isMobile = window.innerWidth < 768;
    const STAR_COUNT = isMobile ? 150 : 300;
    const MAX_SPEED = 0.2;

    function resize() {
      const rect = canvas.getBoundingClientRect();
      canvas.width = rect.width;
      canvas.height = rect.height;
      
      // Régénérer les étoiles après resize
      generateStars();
    }

    function generateStars() {
      stars = [];
      for (let i = 0; i < STAR_COUNT; i++) {
        stars.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          vx: (Math.random() - 0.5) * MAX_SPEED,
          vy: (Math.random() - 0.5) * MAX_SPEED,
          size: Math.random() * 2 + 0.5,
          opacity: Math.random() * 0.8 + 0.2,
          twinkle: Math.random() * 0.02 + 0.01,
          phase: Math.random() * Math.PI * 2
        });
      }
    }

    function drawStar(star: typeof stars[0], time: number) {
      const alpha = Math.max(0.1, Math.min(1, star.opacity + Math.sin(time * 0.001 + star.phase) * star.twinkle));
      
      ctx.save();
      ctx.globalAlpha = alpha;
      
      // Dégradé radial pour chaque étoile
      const gradient = ctx.createRadialGradient(star.x, star.y, 0, star.x, star.y, star.size * 2);
      gradient.addColorStop(0, '#ffffff');
      gradient.addColorStop(0.3, '#06b6d4');
      gradient.addColorStop(1, 'transparent');
      
      ctx.fillStyle = gradient;
      ctx.beginPath();
      ctx.arc(star.x, star.y, star.size, 0, Math.PI * 2);
      ctx.fill();
      
      ctx.restore();
    }

    function animate(time: number) {
      // Arrière-plan dégradé
      const gradient = ctx.createRadialGradient(
        canvas.width / 2, canvas.height / 2, 0,
        canvas.width / 2, canvas.height / 2, Math.max(canvas.width, canvas.height) / 2
      );
      gradient.addColorStop(0, '#0a0a15');
      gradient.addColorStop(0.5, '#05050b');
      gradient.addColorStop(1, '#000000');
      
      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Animer et dessiner les étoiles
      stars.forEach(star => {
        // Mouvement très lent
        star.x += star.vx;
        star.y += star.vy;

        // Wrap around les bords
        if (star.x < 0) star.x = canvas.width;
        if (star.x > canvas.width) star.x = 0;
        if (star.y < 0) star.y = canvas.height;
        if (star.y > canvas.height) star.y = 0;

        drawStar(star, time);
      });

      animationId = requestAnimationFrame(animate);
    }

    // Initialisation
    resize();
    window.addEventListener('resize', resize);
    animationId = requestAnimationFrame(animate);

    // Nettoyage
    return () => {
      window.removeEventListener('resize', resize);
      if (animationId) {
        cancelAnimationFrame(animationId);
      }
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 w-full h-full pointer-events-none z-0"
      style={{ 
        background: 'radial-gradient(ellipse at center, #0a0a15 0%, #05050b 50%, #000000 100%)'
      }}
      aria-label="Arrière-plan animé: étoiles"
    />
  );
};

export default AnimatedBackground;