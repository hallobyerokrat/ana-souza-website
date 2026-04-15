"use client";

import { useEffect, useRef } from "react";

// Small twinkling stars rendered on canvas
function StarsCanvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let raf: number;
    const stars: { x: number; y: number; r: number; phase: number; speed: number }[] = [];

    const resize = () => {
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
    };
    resize();
    window.addEventListener("resize", resize);

    // Generate 140 stars
    for (let i = 0; i < 140; i++) {
      stars.push({
        x: Math.random(),
        y: Math.random(),
        r: 0.3 + Math.random() * 1.4,
        phase: Math.random() * Math.PI * 2,
        speed: 0.4 + Math.random() * 1.2,
      });
    }

    let t = 0;
    function draw() {
      if (!ctx || !canvas) return;
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      t += 0.016;
      for (const s of stars) {
        const alpha = 0.2 + 0.8 * (0.5 + 0.5 * Math.sin(s.phase + t * s.speed));
        ctx.beginPath();
        ctx.arc(s.x * canvas.width, s.y * canvas.height, s.r, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(255,245,210,${alpha})`;
        ctx.fill();
      }
      raf = requestAnimationFrame(draw);
    }
    draw();

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", resize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full pointer-events-none"
      style={{ opacity: 0.9 }}
    />
  );
}

export default function HeroSection() {
  return (
    <section
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      style={{
        background:
          "radial-gradient(ellipse at 30% 40%, #1a1040 0%, #0a0a12 55%, #090810 100%)",
      }}
    >
      {/* Stars */}
      <StarsCanvas />

      {/* Subtle purple glow */}
      <div
        className="absolute top-1/3 left-1/4 w-96 h-96 rounded-full pointer-events-none"
        style={{
          background:
            "radial-gradient(circle, rgba(120,60,200,0.12) 0%, transparent 70%)",
          filter: "blur(40px)",
        }}
      />
      <div
        className="absolute bottom-1/4 right-1/3 w-80 h-80 rounded-full pointer-events-none"
        style={{
          background:
            "radial-gradient(circle, rgba(201,168,76,0.08) 0%, transparent 70%)",
          filter: "blur(60px)",
        }}
      />

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
        {/* Eyebrow */}
        <p
          className="anim-fade-in text-xs uppercase tracking-[0.35em] text-muted mb-6"
          style={{ animationDelay: "0.2s" }}
        >
          Escritora · Brasil & Alemanha
        </p>

        {/* Name */}
        <h1
          className="anim-fade-up mb-4 leading-tight"
          style={{
            fontFamily: "var(--font-playfair)",
            fontSize: "clamp(2.8rem, 8vw, 6.5rem)",
            fontWeight: 800,
            animationDelay: "0.4s",
          }}
        >
          Ana Souza{" "}
          <em
            className="gold-text block"
            style={{ fontStyle: "italic", fontSize: "0.92em" }}
          >
            de Magalhães
          </em>
        </h1>

        {/* Tagline */}
        <p
          className="anim-fade-up text-lg md:text-xl text-muted max-w-xl mx-auto mb-12 leading-relaxed"
          style={{ animationDelay: "0.7s" }}
        >
          Histórias que atravessam continentes — da infância mineira à vida na
          Alemanha.
        </p>

        {/* CTAs */}
        <div
          className="anim-fade-up flex flex-wrap gap-4 justify-center"
          style={{ animationDelay: "1s" }}
        >
          <a
            href="#livros"
            className="px-8 py-3.5 rounded-full font-semibold tracking-wide transition-all duration-300 text-ink"
            style={{
              background: "linear-gradient(135deg, #c9a84c, #e8c96a)",
              boxShadow: "0 4px 24px rgba(201,168,76,0.35)",
            }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLElement).style.transform = "translateY(-2px)";
              (e.currentTarget as HTMLElement).style.boxShadow =
                "0 8px 32px rgba(201,168,76,0.5)";
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLElement).style.transform = "translateY(0)";
              (e.currentTarget as HTMLElement).style.boxShadow =
                "0 4px 24px rgba(201,168,76,0.35)";
            }}
          >
            Conhecer os livros
          </a>
          <a
            href="#newsletter"
            className="px-8 py-3.5 rounded-full font-semibold tracking-wide border border-white/20 text-cream hover:border-white/50 transition-all duration-300"
          >
            Capítulo grátis
          </a>
        </div>

        {/* Scroll hint */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-40">
          <div className="w-px h-12 bg-gradient-to-b from-transparent to-cream" />
          <span className="text-xs uppercase tracking-widest text-muted">Scroll</span>
        </div>
      </div>
    </section>
  );
}
