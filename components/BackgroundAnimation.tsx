import React, { useEffect, useRef } from 'react';

const BackgroundAnimation: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let width = window.innerWidth;
    let height = window.innerHeight;
    let animationFrameId: number;
    
    // Configuration
    // baseSpeed remains 0.35 from previous step
    const baseSpeed = 0.35; 
    
    // Brand Color: Neutral-900 (#111827) -> 17, 24, 39
    const colorRGB = "17, 24, 39";

    // State
    let particles: Array<{x: number, y: number, vx: number, vy: number}> = [];
    let mouse = { x: -1000, y: -1000 };
    let scrollY = window.scrollY;
    let scrollVelocity = 0;

    // Initialize particles
    const initParticles = () => {
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = width;
      canvas.height = height;
      
      const isMobile = width < 768;
      const count = isMobile ? 40 : 80;
      
      particles = [];
      for (let i = 0; i < count; i++) {
        particles.push({
          x: Math.random() * width,
          y: Math.random() * height,
          vx: (Math.random() - 0.5) * baseSpeed,
          vy: (Math.random() - 0.5) * baseSpeed
        });
      }
    };

    // Event Handlers
    const handleResize = () => {
      initParticles();
    };

    const handleMouseMove = (e: MouseEvent) => {
      mouse.x = e.clientX;
      mouse.y = e.clientY;
    };
    
    const handleScroll = () => {
        const newScrollY = window.scrollY;
        const delta = newScrollY - scrollY;
        scrollVelocity = delta * 0.15;
        scrollY = newScrollY;
    };

    const handleClick = (e: MouseEvent) => {
        const isMobile = window.innerWidth < 768;

        if (isMobile) {
            // Mobile: Random disperse behavior
            // Instead of responding to click location, particles scatter randomly
            particles.forEach(p => {
                p.vx += (Math.random() - 0.5) * 5; 
                p.vy += (Math.random() - 0.5) * 5;
            });
        } else {
            // Desktop: Directed repulsion behavior
            const clickX = e.clientX;
            const clickY = e.clientY;
            
            particles.forEach(p => {
                const dx = p.x - clickX;
                const dy = p.y - clickY;
                const dist = Math.sqrt(dx*dx + dy*dy);
                
                if (dist < 300) {
                    const force = (300 - dist) / 300;
                    p.vx += (dx / dist) * force * 5;
                    p.vy += (dy / dist) * force * 5;
                }
            });
        }
    };

    const animate = () => {
      ctx.clearRect(0, 0, width, height);
      
      scrollVelocity *= 0.92;
      
      const isMobile = width < 768;
      const connectionDistance = isMobile ? 120 : 180; 
      const mouseDistance = 250;

      particles.forEach((p, i) => {
        p.x += p.vx;
        p.y += p.vy - scrollVelocity;

        if (p.x < 0 || p.x > width) p.vx *= -1;
        if (p.y < 0 || p.y > height) p.vy *= -1;
        
        if (p.x < -50) p.x = width + 50;
        if (p.x > width + 50) p.x = -50;
        if (p.y < -50) p.y = height + 50;
        if (p.y > height + 50) p.y = -50;

        const dxMouse = p.x - mouse.x;
        const dyMouse = p.y - mouse.y;
        const distMouse = Math.sqrt(dxMouse * dxMouse + dyMouse * dyMouse);

        if (distMouse < mouseDistance) {
            p.vx -= dxMouse * 0.0005;
            p.vy -= dyMouse * 0.0005;
        }

        const speed = Math.sqrt(p.vx*p.vx + p.vy*p.vy);
        if (speed > baseSpeed * 6) {
            p.vx *= 0.9;
            p.vy *= 0.9;
        }

        particles.slice(i + 1).forEach(p2 => {
          const dx = p.x - p2.x;
          const dy = p.y - p2.y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < connectionDistance) {
            ctx.beginPath();
            ctx.moveTo(p.x, p.y);
            ctx.lineTo(p2.x, p2.y);
            
            // Reduced opacity by another 20% (0.175 * 0.8 ≈ 0.14)
            const alpha = (1 - dist / connectionDistance) * 0.14;
            ctx.strokeStyle = `rgba(${colorRGB}, ${alpha})`; 
            ctx.lineWidth = 1;
            ctx.stroke();
          }
        });

        if (distMouse < mouseDistance) {
            ctx.beginPath();
            ctx.moveTo(p.x, p.y);
            ctx.lineTo(mouse.x, mouse.y);
            // Reduced opacity by another 20% (0.245 * 0.8 ≈ 0.196)
            const alpha = (1 - distMouse / mouseDistance) * 0.196;
            ctx.strokeStyle = `rgba(${colorRGB}, ${alpha})`;
            ctx.stroke();
        }

        ctx.beginPath();
        ctx.arc(p.x, p.y, 2, 0, Math.PI * 2);
        // Reduced opacity by another 20% (0.14 * 0.8 ≈ 0.112)
        ctx.fillStyle = `rgba(${colorRGB}, 0.112)`;
        ctx.fill();
      });

      animationFrameId = requestAnimationFrame(animate);
    };

    initParticles();
    
    window.addEventListener('resize', handleResize);
    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('scroll', handleScroll);
    window.addEventListener('mousedown', handleClick);
    
    animate();

    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('mousedown', handleClick);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas 
        ref={canvasRef} 
        className="fixed top-0 left-0 w-full h-full pointer-events-none z-0 bg-transparent"
        style={{ touchAction: 'none' }}
    />
  );
};

export default BackgroundAnimation;