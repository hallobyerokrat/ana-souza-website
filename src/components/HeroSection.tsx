"use client";

import { useT } from "@/lib/i18n";

const FRAME_BG =
  "linear-gradient(145deg, #d4a84a 0%, #8a5e28 40%, #c49038 65%, #d4a84a 100%)";
const FRAME_SHADOW =
  "0 16px 40px rgba(40,25,10,0.3), 0 4px 12px rgba(40,25,10,0.16), inset 0 1px 2px rgba(255,215,160,0.45), inset 0 -2px 3px rgba(0,0,0,0.3)";
const INNER_CORK =
  "linear-gradient(135deg, #c8a870 0%, #b48850 50%, #c0a060 100%)";

function FramedNote({
  href,
  label,
  sublabel,
  rotate = -2,
  width = 160,
  noteHeight = 185,
}: {
  href: string;
  label: string;
  sublabel?: string;
  rotate?: number;
  width?: number;
  noteHeight?: number;
}) {
  return (
    <a
      href={href}
      className="frame-note"
      style={
        {
          "--fn-rotate": `${rotate}deg`,
          position: "relative",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "14px 14px 32px 14px",
          background: "#fdf8ec",
          border: "1px solid rgba(120,88,48,0.25)",
          boxShadow: "0 4px 12px rgba(60,38,20,0.18), 0 1px 3px rgba(60,38,20,0.1)",
          transform: `rotate(${rotate}deg)`,
          transition: "transform 0.5s cubic-bezier(0.22,1,0.36,1), box-shadow 0.5s ease",
          cursor: "pointer",
          width,
          minHeight: noteHeight,
          textDecoration: "none",
        } as React.CSSProperties
      }
    >
      {/* Pin */}
      <span
        className="pin pin-note"
        style={{ position: "absolute", top: -9, left: "50%", marginLeft: -9 }}
      />

      {/* Botanical sprig — left side */}
      <svg
        width="14"
        height="52"
        viewBox="0 0 14 52"
        fill="none"
        aria-hidden
        style={{
          position: "absolute",
          left: 7,
          top: "50%",
          transform: "translateY(-50%)",
          opacity: 0.18,
          pointerEvents: "none",
        }}
      >
        <line x1="7" y1="3" x2="7" y2="49" stroke="#3d2a1a" strokeWidth="0.9" />
        <ellipse cx="7" cy="4" rx="2" ry="2.5" fill="#3d2a1a" />
        <ellipse cx="3" cy="12" rx="3.5" ry="1.8" fill="#3d2a1a" transform="rotate(-28 3 12)" />
        <ellipse cx="11" cy="19" rx="3.5" ry="1.8" fill="#3d2a1a" transform="rotate(28 11 19)" />
        <ellipse cx="3" cy="27" rx="3.5" ry="1.8" fill="#3d2a1a" transform="rotate(-28 3 27)" />
        <ellipse cx="11" cy="35" rx="3.5" ry="1.8" fill="#3d2a1a" transform="rotate(28 11 35)" />
        <ellipse cx="3" cy="43" rx="3.5" ry="1.8" fill="#3d2a1a" transform="rotate(-28 3 43)" />
      </svg>

      {/* Label */}
      <p
        style={{
          fontFamily: "var(--font-playfair)",
          fontStyle: "italic",
          fontSize: 14,
          color: "#3d2a1a",
          lineHeight: 1.35,
          textAlign: "center",
        }}
      >
        {label}
      </p>

      {sublabel && (
        <p
          style={{
            fontFamily: "var(--font-playfair)",
            fontSize: 11,
            color: "#5a4032",
            marginTop: 4,
            opacity: 0.75,
            textAlign: "center",
            fontStyle: "italic",
          }}
        >
          {sublabel}
        </p>
      )}

      {/* Bottom ornament */}
      <div
        aria-hidden
        style={{
          position: "absolute",
          bottom: 10,
          left: 14,
          right: 14,
          display: "flex",
          alignItems: "center",
          gap: 4,
          opacity: 0.22,
        }}
      >
        <div style={{ flex: 1, height: 0.8, background: "#3d2a1a" }} />
        <svg width="8" height="8" viewBox="0 0 10 10" fill="none">
          <circle cx="5" cy="5" r="1.6" fill="#3d2a1a" />
          <path
            d="M5 1.5C4.2 2.8 2.5 3.2 1.5 4 2.5 4.6 4 5.2 5 7.5 6 5.2 7.5 4.6 8.5 4 7.5 3.2 5.8 2.8 5 1.5Z"
            fill="#3d2a1a"
          />
        </svg>
        <div style={{ flex: 1, height: 0.8, background: "#3d2a1a" }} />
      </div>
    </a>
  );
}

function SideFrame({ children }: { children: React.ReactNode }) {
  return (
    <div style={{ padding: 10, background: FRAME_BG, boxShadow: FRAME_SHADOW, borderRadius: 2 }}>
      <div style={{ padding: 6, background: "#e8d5a8", boxShadow: "inset 0 2px 8px rgba(40,25,10,0.28)" }}>
        <div
          style={{
            background: INNER_CORK,
            backgroundImage: [
              "radial-gradient(circle at 20% 30%, rgba(60,38,22,0.28) 0.5px, transparent 1.5px)",
              "radial-gradient(circle at 70% 65%, rgba(60,38,22,0.22) 0.5px, transparent 1.2px)",
              "radial-gradient(circle at 45% 80%, rgba(180,140,90,0.25) 0.4px, transparent 1px)",
              INNER_CORK,
            ].join(", "),
            backgroundSize: "12px 12px, 16px 16px, 10px 10px, 100% 100%",
            minHeight: 240,
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "center",
            gap: 20,
            padding: "28px 32px",
          }}
        >
          {children}
        </div>
      </div>
    </div>
  );
}


export default function HeroSection() {
  const { t } = useT();

  return (
    <section
      id="hero"
      className="wallpaper-botanical-dense relative min-h-screen flex flex-col items-center justify-center px-4 pt-28 pb-20 md:pt-32 md:pb-28 overflow-hidden"
    >
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse at 50% 38%, rgba(234,213,160,0.14) 0%, transparent 62%)",
          zIndex: 1,
        }}
      />

      <div className="relative anim-fade-in" style={{ zIndex: 2, animationDelay: "0.1s" }}>
        {/* Desktop: 2 frames, 3 notes each */}
        <div className="hidden md:flex items-center gap-16">
          <SideFrame>
            <FramedNote href="#livros" label={t("hero.note.livros")} rotate={-3} />
            <FramedNote href="#poemas" label={t("hero.note.poemas")} rotate={1} />
            <FramedNote href="#artes" label={t("hero.note.artes")} rotate={-2} />
          </SideFrame>

          <SideFrame>
            <FramedNote href="#contato" label={t("hero.note.contato")} rotate={2} />
            <FramedNote href="#loja" label={t("hero.note.loja")} rotate={-1} />
            <FramedNote href="#sobre" label={t("hero.note.sobre1")} rotate={2} />
          </SideFrame>
        </div>

        {/* Mobile: 2 frames stacked */}
        <div className="md:hidden flex flex-col items-center gap-5">
          <SideFrame>
            <FramedNote href="#livros" label={t("hero.note.livros")} rotate={-3} width={105} noteHeight={150} />
            <FramedNote href="#poemas" label={t("hero.note.poemas")} rotate={1} width={105} noteHeight={150} />
            <FramedNote href="#artes" label={t("hero.note.artes")} rotate={-2} width={105} noteHeight={150} />
          </SideFrame>
          <SideFrame>
            <FramedNote href="#contato" label={t("hero.note.contato")} rotate={2} width={105} noteHeight={150} />
            <FramedNote href="#loja" label={t("hero.note.loja")} rotate={-1} width={105} noteHeight={150} />
            <FramedNote href="#sobre" label={t("hero.note.sobre1")} rotate={2} width={105} noteHeight={150} />
          </SideFrame>
        </div>
      </div>
    </section>
  );
}
