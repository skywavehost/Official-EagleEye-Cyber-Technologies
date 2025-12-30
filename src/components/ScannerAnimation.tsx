import React, { useEffect, useRef } from 'react';

const ScannerAnimation: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let scanY = 0;
    const particles: { x: number; y: number; size: number; speed: number; opacity: number; label: string }[] = [];

    const labels = ['NODE_AUTH', 'SSL_VALID', 'IP_ENC', 'THREAT_NULL', 'PACKET_IN', 'SEC_DNS'];

    // Initialize particles as 'network nodes'
    const initParticles = () => {
      particles.length = 0;
      const count = Math.floor(canvas.width / 40);
      for (let i = 0; i < count; i++) {
        particles.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          size: Math.random() * 1.5 + 0.5,
          speed: Math.random() * 0.2 + 0.05,
          opacity: Math.random() * 0.3 + 0.1,
          label: labels[Math.floor(Math.random() * labels.length)]
        });
      }
    };

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      initParticles();
    };

    window.addEventListener('resize', resize);
    resize();

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Background scanlines (subtle)
      ctx.strokeStyle = 'rgba(0, 242, 255, 0.02)';
      ctx.lineWidth = 1;
      for (let i = 0; i < canvas.height; i += 4) {
        ctx.beginPath();
        ctx.moveTo(0, i);
        ctx.lineTo(canvas.width, i);
        ctx.stroke();
      }

      // Scanning Beam
      scanY += 2.5;
      if (scanY > canvas.height + 100) scanY = -100;

      // Beam Glow
      const beamGradient = ctx.createLinearGradient(0, scanY - 50, 0, scanY);
      beamGradient.addColorStop(0, 'transparent');
      beamGradient.addColorStop(0.5, 'rgba(0, 242, 255, 0.05)');
      beamGradient.addColorStop(1, 'rgba(0, 242, 255, 0.2)');

      ctx.fillStyle = beamGradient;
      ctx.fillRect(0, scanY - 50, canvas.width, 50);

      // Beam Line
      ctx.strokeStyle = 'rgba(0, 242, 255, 0.6)';
      ctx.shadowBlur = 15;
      ctx.shadowColor = 'rgba(0, 242, 255, 0.8)';
      ctx.lineWidth = 2;
      ctx.beginPath();
      ctx.moveTo(0, scanY);
      ctx.lineTo(canvas.width, scanY);
      ctx.stroke();
      ctx.shadowBlur = 0; // Reset shadow

      // Nodes / Particles
      particles.forEach((p) => {
        p.y += p.speed;
        if (p.y > canvas.height) p.y = 0;

        const distanceToBeam = Math.abs(p.y - scanY);
        const inBeamRange = distanceToBeam < 80;
        const intensity = inBeamRange ? Math.max(0, 1 - distanceToBeam / 80) : 0;
        
        // Node point
        ctx.fillStyle = `rgba(0, 242, 255, ${p.opacity + intensity * 0.7})`;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size + intensity * 1, 0, Math.PI * 2);
        ctx.fill();

        // Data Reveal
        if (intensity > 0.6) {
          ctx.font = '700 8px Inter';
          ctx.fillStyle = `rgba(0, 242, 255, ${intensity * 0.5})`;
          ctx.fillText(p.label, p.x + 10, p.y + 3);
          
          ctx.strokeStyle = `rgba(0, 242, 255, ${intensity * 0.2})`;
          ctx.beginPath();
          ctx.moveTo(p.x, p.y);
          ctx.lineTo(p.x + 8, p.y);
          ctx.stroke();
        }

        // Connection lines (very faint)
        if (intensity > 0.3) {
           particles.slice(0, 3).forEach(target => {
              const dx = target.x - p.x;
              const dy = target.y - p.y;
              const dist = Math.sqrt(dx*dx + dy*dy);
              if (dist < 150) {
                 ctx.strokeStyle = `rgba(0, 242, 255, ${intensity * 0.05})`;
                 ctx.beginPath();
                 ctx.moveTo(p.x, p.y);
                 ctx.lineTo(target.x, target.y);
                 ctx.stroke();
              }
           });
        }
      });

      animationFrameId = requestAnimationFrame(draw);
    };

    draw();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('resize', resize);
    };
  }, []);

  return (
    <div className="absolute inset-0 pointer-events-none">
       {/* Dark Vignette Overlay */}
       <div className="absolute inset-0 bg-radial-gradient from-transparent via-[#050505]/40 to-[#050505] z-10" />
       <canvas 
         ref={canvasRef} 
         className="absolute inset-0 opacity-80 w-full h-full z-20"
       />
    </div>
  );
};

export default ScannerAnimation;