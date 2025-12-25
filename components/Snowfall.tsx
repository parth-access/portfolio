
import React, { useEffect, useRef } from 'react';

export const Snowfall: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let particles: Particle[] = [];

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    class Particle {
      x: number = 0;
      y: number = 0;
      radius: number = 0;
      speedX: number = 0;
      speedY: number = 0;
      opacity: number = 0;
      drift: number = 0;

      constructor() {
        this.reset();
      }

      reset() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * -canvas.height;
        this.radius = Math.random() * 3 + 1.5; // Larger flakes
        this.speedX = (Math.random() - 0.5) * 0.5;
        this.speedY = Math.random() * 1.2 + 0.8; // Faster drop
        this.opacity = Math.random() * 0.5 + 0.4; // More visible
        this.drift = Math.random() * 2;
      }

      update() {
        this.x += this.speedX + Math.sin(this.drift + Date.now() * 0.001) * 0.2;
        this.y += this.speedY;

        if (this.y > canvas.height) {
          this.reset();
        }
      }

      draw() {
        if (!ctx) return;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
        // Frosted blue hue for winter vibes
        ctx.fillStyle = `rgba(165, 180, 252, ${this.opacity})`;
        ctx.fill();
        
        // Add a slight glow/blur to flakes
        ctx.shadowBlur = 4;
        ctx.shadowColor = 'rgba(255, 255, 255, 0.8)';
      }
    }

    const init = () => {
      particles = Array.from({ length: 150 }, () => new Particle());
    };

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      particles.forEach((p) => {
        p.update();
        p.draw();
      });
      animationFrameId = requestAnimationFrame(animate);
    };

    window.addEventListener('resize', resize);
    resize();
    init();
    animate();

    return () => {
      window.removeEventListener('resize', resize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-[2]"
      style={{ opacity: 0.8 }}
    />
  );
};
