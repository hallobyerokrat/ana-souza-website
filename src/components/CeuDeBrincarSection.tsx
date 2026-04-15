"use client";

import { useEffect, useRef } from "react";

// Cloud shape made with CSS box-shadow trick
function Cloud({
  width,
  top,
  delay,
  duration,
  opacity = 1,
  layer = "mid",
}: {
  width: number;
  top: string;
  delay: number;
  duration: number;
  opacity?: number;
  layer?: "back" | "mid" | "front";
}) {
  const h = width * 0.55;
  const colorMap = {
    back: "rgba(200,230,255,0.55)",
    mid: "rgba(240,248,255,0.82)",
    front: "rgba(255,255,255,0.95)",
  };
  const color = colorMap[layer];

  return (
    <div
      className="absolute pointer-events-none"
      style={{
        top,
        left: 0,
        opacity,
        animation: `drift-${layer === "back" ? "fast" : layer === "mid" ? "mid" : "slow"} ${duration}s linear infinite`,
        animationDelay: `${delay}s`,
      }}
    >
      {/* Main body */}
      <div
        style={{
          position: "relative",
          width: width,
          height: h * 0.55,
          background: color,
          borderRadius: `${h * 0.3}px`,
          filter: layer === "front" ? "blur(0px)" : layer === "mid" ? "blur(0.5px)" : "blur(1px)",
        }}
      >
        {/* Left bump */}
        <div
          style={{
            position: "absolute",
            bottom: "60%",
            left: "10%",
            width: width * 0.38,
            height: h * 0.55,
            background: color,
            borderRadius: "50%",
          }}
        />
        {/* Centre bump (tallest) */}
        <div
          style={{
            position: "absolute",
            bottom: "58%",
            left: "28%",
            width: width * 0.45,
            height: h * 0.7,
            background: color,
            borderRadius: "50%",
          }}
        />
        {/* Right bump */}
        <div
          style={{
            position: "absolute",
            bottom: "55%",
            left: "52%",
            width: width * 0.32,
            height: h * 0.45,
            background: color,
            borderRadius: "50%",
          }}
        />
      </div>
    </div>
  );
}

// Floating sparkle / star
function Sparkle({ x, y, delay, size = 6 }: { x: string; y: string; delay: number; size?: number }) {
  return (
    <div
      className="absolute pointer-events-none anim-twinkle"
      style={{ left: x, top: y, animationDelay: `${delay}s` }}
    >
      <svg width={size} height={size} viewBox="0 0 10 10" fill="none">
        <path d="M5 0 L5.6 4.4 L10 5 L5.6 5.6 L5 10 L4.4 5.6 L0 5 L4.4 4.4Z" fill="rgba(255,240,100,0.9)" />
      </svg>
    </div>
  );
}

// Sun glow
function Sun() {
  return (
    <div
      className="absolute anim-sun"
      style={{
        top: "8%",
        right: "12%",
        width: 90,
        height: 90,
        borderRadius: "50%",
        background: "radial-gradient(circle, #fff7a1 30%, #ffd54f 60%, #ffb300 100%)",
        boxShadow: "0 0 50px 25px rgba(255,213,79,0.35)",
      }}
    />
  );
}

// Birds (simple V shapes)
function Birds() {
  const birds = [
    { x: "20%", y: "18%", scale: 0.8, delay: 0 },
    { x: "24%", y: "14%", scale: 1,   delay: 0.3 },
    { x: "28%", y: "17%", scale: 0.7, delay: 0.15 },
    { x: "60%", y: "22%", scale: 0.6, delay: 0 },
    { x: "63%", y: "19%", scale: 0.8, delay: 0.2 },
  ];
  return (
    <>
      {birds.map((b, i) => (
        <div
          key={i}
          className="absolute pointer-events-none"
          style={{
            left: b.x,
            top: b.y,
            transform: `scale(${b.scale})`,
            animation: `bob ${3 + b.delay}s ease-in-out infinite`,
            animationDelay: `${b.delay}s`,
          }}
        >
          <svg width="24" height="12" viewBox="0 0 24 12" fill="none">
            <path d="M0 8 Q6 0 12 6 Q18 0 24 8" stroke="rgba(30,60,100,0.7)" strokeWidth="1.5" fill="none" strokeLinecap="round" />
          </svg>
        </div>
      ))}
    </>
  );
}

// Book cover placeholder (will be replaced with real image)
function BookCover() {
  return (
    <div
      className="anim-float-book relative mx-auto"
      style={{ width: 220, height: 310 }}
    >
      {/* Shadow */}
      <div
        className="absolute bottom-0 left-1/2 -translate-x-1/2 w-48 h-6 rounded-full"
        style={{
          background: "rgba(30,80,150,0.3)",
          filter: "blur(12px)",
          bottom: -16,
        }}
      />
      {/* Cover */}
      <div
        className="w-full h-full rounded-2xl overflow-hidden"
        style={{
          background: "linear-gradient(145deg, #2980b9, #6dd5fa, #ffffff)",
          boxShadow: "0 24px 60px rgba(0,80,160,0.4), inset 0 1px 0 rgba(255,255,255,0.3)",
        }}
      >
        {/* Sky gradient in the cover */}
        <div className="w-full h-full relative flex flex-col items-center justify-between p-4">
          {/* Top: clouds on cover */}
          <div className="w-full flex justify-around mt-2">
            {[1, 2, 3].map((n) => (
              <div
                key={n}
                className="bg-white/80 rounded-full"
                style={{ width: 40 + n * 10, height: 22, borderRadius: 20 }}
              />
            ))}
          </div>

          {/* Kite */}
          <div className="relative">
            <svg width="60" height="70" viewBox="0 0 60 70" fill="none">
              <polygon points="30,0 55,35 30,55 5,35" fill="#e74c3c" stroke="#c0392b" strokeWidth="1" />
              <polygon points="30,0 55,35 30,28" fill="#e67e22" />
              <line x1="30" y1="55" x2="35" y2="70" stroke="#8B4513" strokeWidth="1.5" strokeDasharray="3,2" />
            </svg>
          </div>

          {/* Title */}
          <div className="text-center pb-2">
            <p
              className="text-blue-900 font-bold text-sm leading-tight"
              style={{ fontFamily: "var(--font-playfair)", fontSize: 13 }}
            >
              Céu de Brincar
            </p>
            <p className="text-blue-700 text-xs mt-1">Ana Souza de Magalhães</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function CeuDeBrincarSection() {
  return (
    <section
      id="ceu-de-brincar"
      className="relative overflow-hidden"
      style={{ minHeight: "100vh" }}
    >
      {/* Sky gradient background */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(180deg, #0d1b3e 0%, #1a3a6e 18%, #2e6aad 40%, #5ba3d9 62%, #87ceeb 80%, #c8eaff 92%, #e8f5ff 100%)",
        }}
      />

      {/* Horizon glow */}
      <div
        className="absolute bottom-0 left-0 right-0 h-40 pointer-events-none"
        style={{
          background:
            "linear-gradient(to top, rgba(255,220,150,0.25) 0%, transparent 100%)",
        }}
      />

      {/* Sun */}
      <Sun />

      {/* Birds */}
      <Birds />

      {/* Sparkles / stars (visible in top dark area) */}
      {[
        { x: "5%",  y: "3%",  d: 0.0 },
        { x: "15%", y: "6%",  d: 0.8 },
        { x: "40%", y: "2%",  d: 0.3 },
        { x: "70%", y: "5%",  d: 1.2 },
        { x: "85%", y: "3%",  d: 0.5 },
        { x: "92%", y: "7%",  d: 0.9 },
        { x: "50%", y: "4%",  d: 0.2 },
      ].map((s, i) => (
        <Sparkle key={i} x={s.x} y={s.y} delay={s.d} size={i % 2 === 0 ? 8 : 6} />
      ))}

      {/* ----  CLOUDS  ---- */}

      {/* Background layer — small, faster, slightly transparent */}
      <Cloud width={160} top="28%" delay={0}    duration={22} opacity={0.6} layer="back" />
      <Cloud width={120} top="15%" delay={-8}   duration={20} opacity={0.5} layer="back" />
      <Cloud width={180} top="42%" delay={-14}  duration={24} opacity={0.5} layer="back" />
      <Cloud width={100} top="55%" delay={-3}   duration={19} opacity={0.55} layer="back" />
      <Cloud width={140} top="35%" delay={-18}  duration={21} opacity={0.5} layer="back" />

      {/* Mid layer */}
      <Cloud width={260} top="22%" delay={0}    duration={32} opacity={0.85} layer="mid" />
      <Cloud width={200} top="38%" delay={-12}  duration={28} opacity={0.8} layer="mid" />
      <Cloud width={300} top="50%" delay={-22}  duration={35} opacity={0.75} layer="mid" />
      <Cloud width={220} top="10%" delay={-6}   duration={30} opacity={0.7} layer="mid" />
      <Cloud width={240} top="60%" delay={-18}  duration={33} opacity={0.8} layer="mid" />

      {/* Foreground layer — large, slow, full white */}
      <Cloud width={400} top="55%" delay={0}    duration={48} opacity={1}   layer="front" />
      <Cloud width={340} top="40%" delay={-20}  duration={44} opacity={0.95} layer="front" />
      <Cloud width={460} top="65%" delay={-35}  duration={52} opacity={0.9} layer="front" />
      <Cloud width={380} top="30%" delay={-10}  duration={46} opacity={0.85} layer="front" />

      {/* Content */}
      <div className="relative z-10 min-h-screen flex flex-col items-center justify-center px-6 py-24 text-center">
        {/* Label */}
        <div
          className="glass mb-8 px-5 py-2 rounded-full text-xs uppercase tracking-widest font-medium"
          style={{ color: "#1a3a6e", borderColor: "rgba(100,150,220,0.4)" }}
        >
          Livro Infantil
        </div>

        {/* Title */}
        <h2
          className="mb-4 leading-tight"
          style={{
            fontFamily: "var(--font-playfair)",
            fontSize: "clamp(2.2rem, 6vw, 4.5rem)",
            fontWeight: 800,
            color: "#0a1f4e",
            textShadow: "0 2px 20px rgba(255,255,255,0.6)",
          }}
        >
          Céu de Brincar
        </h2>

        <p
          className="mb-12 max-w-md mx-auto text-base md:text-lg leading-relaxed"
          style={{ color: "#1a3a6e" }}
        >
          Uma história sobre asas, sonhos e a leveza de ser criança — para os
          pequenos e para quem ainda guarda o pequeno dentro de si.
        </p>

        {/* Floating book */}
        <BookCover />

        {/* CTA buttons */}
        <div className="mt-14 flex flex-wrap gap-4 justify-center">
          <a
            href="#"
            className="px-7 py-3.5 rounded-full font-semibold text-white transition-all duration-300 active:scale-95"
            style={{
              background: "linear-gradient(135deg, #1a6db5, #2e9fe8)",
              boxShadow: "0 6px 24px rgba(46,159,232,0.45)",
            }}
          >
            Comprar na Amazon
          </a>
          <a
            href="#"
            className="px-7 py-3.5 rounded-full font-semibold transition-all duration-300"
            style={{
              background: "rgba(255,255,255,0.75)",
              color: "#0d3d78",
              backdropFilter: "blur(8px)",
              boxShadow: "0 4px 16px rgba(0,80,180,0.2)",
            }}
          >
            Kindle / Ebook
          </a>
        </div>
      </div>
    </section>
  );
}
