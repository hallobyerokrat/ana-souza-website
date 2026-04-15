"use client";

import { useEffect, useRef } from "react";

function VagaLumesCanvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let raf: number;

    const resize = () => {
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
    };
    resize();
    window.addEventListener("resize", resize);

    // Each firefly has position, velocity, glow phase, size, trail
    type Firefly = {
      x: number; y: number;
      vx: number; vy: number;
      phase: number;       // glow oscillation phase
      glowSpeed: number;   // how fast it pulses
      r: number;           // base radius
      trail: { x: number; y: number; a: number }[];
      turnTimer: number;   // frames until next direction nudge
      hue: number;         // slight hue variation warm amber→yellow
    };

    const flies: Firefly[] = [];
    const COUNT = 180;

    for (let i = 0; i < COUNT; i++) {
      const angle = Math.random() * Math.PI * 2;
      const speed = 0.18 + Math.random() * 0.32;
      flies.push({
        x: Math.random() * (canvas.width || 800),
        y: Math.random() * (canvas.height || 500),
        vx: Math.cos(angle) * speed,
        vy: Math.sin(angle) * speed,
        phase: Math.random() * Math.PI * 2,
        glowSpeed: 0.5 + Math.random() * 1.2,
        r: 0.4 + Math.random() * 0.5,   // much smaller: 0.4–0.9px core
        trail: [],
        turnTimer: Math.floor(Math.random() * 80),
        hue: 38 + Math.random() * 22,
      });
    }

    let t = 0;

    function draw() {
      if (!ctx || !canvas) return;
      // Fade trail with semi-transparent clear
      ctx.fillStyle = "rgba(10, 10, 18, 0.18)";
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      t += 0.016;

      for (const f of flies) {
        // Organic steering — nudge direction every turnTimer frames
        f.turnTimer--;
        if (f.turnTimer <= 0) {
          const nudge = (Math.random() - 0.5) * 0.6;
          const angle = Math.atan2(f.vy, f.vx) + nudge;
          const speed = 0.25 + Math.random() * 0.45;
          f.vx = Math.cos(angle) * speed;
          f.vy = Math.sin(angle) * speed;
          f.turnTimer = 40 + Math.floor(Math.random() * 80);
        }

        // Move
        f.x += f.vx;
        f.y += f.vy;

        // Wrap around edges
        if (f.x < -10) f.x = canvas.width + 10;
        if (f.x > canvas.width + 10) f.x = -10;
        if (f.y < -10) f.y = canvas.height + 10;
        if (f.y > canvas.height + 10) f.y = -10;

        // Glow oscillation — natural on/off rhythm
        const rawGlow = Math.sin(f.phase + t * f.glowSpeed);
        // Fireflies are mostly off, with brief bright flashes
        const brightness = Math.max(0, rawGlow);
        const alpha = Math.pow(brightness, 1.8); // non-linear — dimmer longer

        if (alpha < 0.02) continue; // fully off, skip drawing

        // glow halo: max ~6px radius at peak brightness
        const glowR = f.r * (1.5 + brightness * 4);

        // Soft outer halo
        const grad = ctx.createRadialGradient(f.x, f.y, 0, f.x, f.y, glowR);
        grad.addColorStop(0,   `hsla(${f.hue}, 95%, 75%, ${alpha * 0.45})`);
        grad.addColorStop(0.5, `hsla(${f.hue}, 90%, 60%, ${alpha * 0.12})`);
        grad.addColorStop(1,   `hsla(${f.hue}, 80%, 50%, 0)`);

        ctx.beginPath();
        ctx.arc(f.x, f.y, glowR, 0, Math.PI * 2);
        ctx.fillStyle = grad;
        ctx.fill();

        // Core dot — tiny bright point
        ctx.beginPath();
        ctx.arc(f.x, f.y, f.r * (0.6 + brightness * 0.4), 0, Math.PI * 2);
        ctx.fillStyle = `hsla(${f.hue + 15}, 100%, 90%, ${alpha})`;
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
    />
  );
}

// Book cover placeholder for Casos de Família
function CasosCover() {
  return (
    <div className="relative mx-auto" style={{ width: 240, height: 340 }}>
      {/* Shadow */}
      <div
        className="absolute w-52 h-8 rounded-full"
        style={{
          background: "rgba(193,101,74,0.2)",
          filter: "blur(16px)",
          bottom: -20,
          left: "50%",
          transform: "translateX(-50%)",
        }}
      />
      {/* Cover */}
      <div
        className="w-full h-full rounded-2xl relative overflow-hidden"
        style={{
          background: "linear-gradient(145deg, #2c1a0e, #5a2d0c, #8b4513)",
          boxShadow:
            "0 30px 70px rgba(0,0,0,0.7), -6px 0 0 rgba(0,0,0,0.3), inset 4px 0 8px rgba(255,255,255,0.05)",
        }}
      >
        {/* Locket / medallion motif */}
        <div className="absolute inset-0 flex flex-col items-center justify-between p-5">
          {/* Ornamental top */}
          <div className="w-full flex justify-center mt-2">
            <div
              className="w-16 h-px"
              style={{ background: "linear-gradient(90deg, transparent, #c9a84c, transparent)" }}
            />
          </div>

          {/* Medallion */}
          <div className="relative">
            <div
              className="rounded-full flex items-center justify-center"
              style={{
                width: 110,
                height: 110,
                background:
                  "radial-gradient(circle, #c8a95a 0%, #9a7a30 50%, #6b5520 100%)",
                boxShadow:
                  "0 0 0 3px #c9a84c, 0 0 0 6px rgba(201,168,76,0.2), inset 0 2px 8px rgba(0,0,0,0.4)",
              }}
            >
              <div
                style={{
                  width: 80,
                  height: 80,
                  borderRadius: "50%",
                  background: "rgba(0,0,0,0.6)",
                  border: "1px solid rgba(201,168,76,0.4)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                {/* Silhouette inside locket */}
                <svg width="40" height="50" viewBox="0 0 40 50" fill="none">
                  <ellipse cx="20" cy="14" rx="9" ry="10" fill="rgba(201,168,76,0.5)" />
                  <path
                    d="M6 46 C6 30 34 30 34 46"
                    fill="rgba(201,168,76,0.5)"
                  />
                </svg>
              </div>
            </div>
            {/* Chain */}
            <div
              className="absolute left-1/2 -translate-x-1/2"
              style={{ top: -28, width: 1, height: 30, background: "linear-gradient(to bottom, transparent, #c9a84c)" }}
            />
          </div>

          {/* Title area */}
          <div className="text-center">
            <p
              className="font-bold text-sm uppercase tracking-widest mb-1"
              style={{
                fontFamily: "var(--font-playfair)",
                color: "#e8c96a",
                fontSize: 15,
              }}
            >
              Casos de
            </p>
            <p
              className="font-black uppercase tracking-widest"
              style={{
                fontFamily: "var(--font-playfair)",
                color: "#c9a84c",
                fontSize: 22,
                fontStyle: "italic",
              }}
            >
              Família
            </p>
            <div
              className="w-20 h-px mx-auto my-2"
              style={{ background: "linear-gradient(90deg, transparent, #c9a84c, transparent)" }}
            />
            <p className="text-xs tracking-widest uppercase" style={{ color: "rgba(201,168,76,0.6)" }}>
              Contos
            </p>
          </div>

          {/* Author */}
          <p className="text-xs tracking-wider" style={{ color: "rgba(201,168,76,0.5)" }}>
            Ana Souza de Magalhães
          </p>
        </div>
      </div>
    </div>
  );
}

export default function CasosDeFamiliaSection() {
  return (
    <section
      id="casos-de-familia"
      className="relative overflow-hidden py-24 md:py-36"
      style={{
        background:
          "linear-gradient(135deg, #0a0a12 0%, #14100a 50%, #100e0a 100%)",
      }}
    >
      {/* Vaga-lumes canvas */}
      <VagaLumesCanvas />

      {/* Warm glow */}
      <div
        className="absolute top-0 left-0 w-full h-full pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse at 80% 50%, rgba(193,101,74,0.07) 0%, transparent 60%)",
        }}
      />

      <div className="relative z-10 max-w-6xl mx-auto px-6">
        {/* Section label */}
        <div className="flex items-center gap-4 mb-16">
          <div className="h-px flex-1 max-w-xs" style={{ background: "linear-gradient(to right, transparent, rgba(201,168,76,0.3))" }} />
          <span
            className="text-xs uppercase tracking-[0.3em] font-medium"
            style={{ color: "rgba(201,168,76,0.6)" }}
          >
            Contos · Literatura
          </span>
          <div className="h-px flex-1 max-w-xs" style={{ background: "linear-gradient(to left, transparent, rgba(201,168,76,0.3))" }} />
        </div>

        <div className="grid md:grid-cols-2 gap-16 items-center">
          {/* Book cover */}
          <div className="flex justify-center">
            <CasosCover />
          </div>

          {/* Text */}
          <div>
            <p
              className="text-xs uppercase tracking-[0.3em] mb-4"
              style={{ color: "rgba(201,168,76,0.7)" }}
            >
              Livro de Contos
            </p>
            <h2
              className="mb-6 leading-tight"
              style={{
                fontFamily: "var(--font-playfair)",
                fontSize: "clamp(2rem, 5vw, 3.5rem)",
                fontWeight: 800,
                color: "#f5f0e8",
              }}
            >
              Casos de{" "}
              <em className="gold-text" style={{ fontStyle: "italic" }}>
                Família
              </em>
            </h2>

            <p
              className="text-base leading-loose mb-4"
              style={{ color: "rgba(245,240,232,0.65)", maxWidth: 480 }}
            >
              Uma coleção de contos que revisita os laços invisíveis da família —
              os segredos que passam de geração em geração, os silêncios que falam
              mais alto que as palavras, e o amor que persiste mesmo quando tudo
              muda.
            </p>

            <p
              className="text-base leading-loose mb-10"
              style={{ color: "rgba(245,240,232,0.55)", maxWidth: 480 }}
            >
              Escrita com sensibilidade e precisão, a obra de Ana Souza navega
              entre o cotidiano do interior de Minas Gerais e a saudade de quem
              vive longe — mas nunca esquece de onde veio.
            </p>

            {/* Buy buttons */}
            <div className="flex flex-wrap gap-3">
              <a
                href="#"
                className="px-6 py-3 rounded-full font-semibold text-sm tracking-wide text-ink transition-all duration-300 hover:-translate-y-0.5"
                style={{
                  background: "linear-gradient(135deg, #c9a84c, #e8c96a)",
                  boxShadow: "0 4px 20px rgba(201,168,76,0.3)",
                }}
              >
                Amazon Brasil
              </a>
              <a
                href="#"
                className="px-6 py-3 rounded-full font-semibold text-sm tracking-wide transition-all duration-300 hover:-translate-y-0.5"
                style={{
                  border: "1px solid rgba(201,168,76,0.4)",
                  color: "#c9a84c",
                }}
              >
                Amazon.de
              </a>
              <a
                href="#"
                className="px-6 py-3 rounded-full font-semibold text-sm tracking-wide transition-all duration-300 hover:-translate-y-0.5"
                style={{
                  border: "1px solid rgba(245,240,232,0.15)",
                  color: "rgba(245,240,232,0.7)",
                }}
              >
                Kindle
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
