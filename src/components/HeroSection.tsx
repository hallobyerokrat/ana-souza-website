"use client";

import { useT } from "@/lib/i18n";
import type { Locale } from "@/lib/i18n";

const C = {
  frameOuter: "#7a5468",
  frameFace: "#c9b8be",
  notePaper: "#f8f0ed",
  pin: "#7a5468",
  botanicNote: "#9b7080",
  titleDark: "#3d2b35",
  bodyText: "#6b5060",
};

function NoteSprig() {
  return (
    <svg aria-hidden width="16" height="58" viewBox="0 0 16 58" fill="none"
      style={{ position: "absolute", left: 8, top: "50%", transform: "translateY(-50%)", opacity: 0.45, pointerEvents: "none" }}>
      <line x1="8" y1="4" x2="8" y2="54" stroke={C.botanicNote} strokeWidth="1" />
      <circle cx="8" cy="4" r="2.2" fill={C.botanicNote} />
      <ellipse cx="3.5" cy="14" rx="3.8" ry="2" fill={C.botanicNote} transform="rotate(-30 3.5 14)" />
      <ellipse cx="12.5" cy="22" rx="3.8" ry="2" fill={C.botanicNote} transform="rotate(30 12.5 22)" />
      <ellipse cx="3.5" cy="30" rx="3.8" ry="2" fill={C.botanicNote} transform="rotate(-30 3.5 30)" />
      <ellipse cx="12.5" cy="38" rx="3.8" ry="2" fill={C.botanicNote} transform="rotate(30 12.5 38)" />
      <ellipse cx="3.5" cy="46" rx="3.8" ry="2" fill={C.botanicNote} transform="rotate(-30 3.5 46)" />
    </svg>
  );
}

function NoteBottomOrnament() {
  return (
    <div aria-hidden style={{ position: "absolute", bottom: 9, left: 12, right: 12, display: "flex", alignItems: "center", gap: 4, opacity: 0.28 }}>
      <div style={{ flex: 1, height: 0.8, background: C.botanicNote }} />
      <svg width="9" height="9" viewBox="0 0 10 10" fill="none">
        <circle cx="5" cy="5" r="1.8" fill={C.botanicNote} />
        <path d="M5 1C4.1 2.5 2.2 3 1 4c1.2.7 3 1.4 4 4 1-2.6 2.8-3.3 4-4C7.8 3 5.9 2.5 5 1z" fill={C.botanicNote} />
      </svg>
      <div style={{ flex: 1, height: 0.8, background: C.botanicNote }} />
    </div>
  );
}

function Pin() {
  return (
    <span aria-hidden style={{
      position: "absolute", top: -10, left: "50%", marginLeft: -9,
      display: "block", width: 18, height: 18, borderRadius: "50%",
      background: `radial-gradient(circle at 35% 35%, #c49038, ${C.pin})`,
      boxShadow: "0 2px 5px rgba(40,20,10,0.35), inset 0 1px 1px rgba(255,215,160,0.3)",
      zIndex: 10,
    }} />
  );
}

function DeckleEdge() {
  return (
    <svg aria-hidden preserveAspectRatio="none" viewBox="0 0 160 7" fill="none"
      style={{ position: "absolute", bottom: -1, left: -1, width: "calc(100% + 2px)", height: 8, pointerEvents: "none" }}>
      <path
        d="M0,2.5 Q8,0 16,2.5 Q24,5 32,2.5 Q40,0 48,2.5 Q56,5 64,2.5 Q72,0 80,2.5 Q88,5 96,2.5 Q104,0 112,2.5 Q120,5 128,2.5 Q136,0 144,2.5 Q152,5 160,2.5 L160,7 L0,7 Z"
        fill="#fdf8ec"
      />
      <path
        d="M0,2.5 Q8,0 16,2.5 Q24,5 32,2.5 Q40,0 48,2.5 Q56,5 64,2.5 Q72,0 80,2.5 Q88,5 96,2.5 Q104,0 112,2.5 Q120,5 128,2.5 Q136,0 144,2.5 Q152,5 160,2.5"
        stroke="rgba(90,60,25,0.18)" strokeWidth="0.7" fill="none"
      />
    </svg>
  );
}

function OrnamentDivider() {
  return (
    <div aria-hidden style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 8, margin: "10px auto 0", width: 240 }}>
      <div style={{ flex: 1, height: 1, background: C.bodyText, opacity: 0.35 }} />
      <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
        <circle cx="7" cy="7" r="1.8" fill={C.bodyText} opacity="0.55" />
        <ellipse cx="7" cy="2.5" rx="1.5" ry="2" fill={C.bodyText} opacity="0.4" />
        <ellipse cx="7" cy="11.5" rx="1.5" ry="2" fill={C.bodyText} opacity="0.4" />
        <ellipse cx="2.5" cy="7" rx="2" ry="1.5" fill={C.bodyText} opacity="0.4" />
        <ellipse cx="11.5" cy="7" rx="2" ry="1.5" fill={C.bodyText} opacity="0.4" />
        <ellipse cx="3.8" cy="3.8" rx="1.4" ry="1.9" fill={C.bodyText} opacity="0.3" transform="rotate(-45 3.8 3.8)" />
        <ellipse cx="10.2" cy="3.8" rx="1.4" ry="1.9" fill={C.bodyText} opacity="0.3" transform="rotate(45 10.2 3.8)" />
        <ellipse cx="3.8" cy="10.2" rx="1.4" ry="1.9" fill={C.bodyText} opacity="0.3" transform="rotate(45 3.8 10.2)" />
        <ellipse cx="10.2" cy="10.2" rx="1.4" ry="1.9" fill={C.bodyText} opacity="0.3" transform="rotate(-45 10.2 10.2)" />
      </svg>
      <div style={{ flex: 1, height: 1, background: C.bodyText, opacity: 0.35 }} />
    </div>
  );
}

function FramedNote({ href, label, subtitle, rotate = -2, width = 158, noteHeight = 155 }: {
  href: string; label: string; subtitle?: string; rotate?: number; width?: number; noteHeight?: number;
}) {
  return (
    <a href={href} style={{
      position: "relative", display: "flex", flexDirection: "column",
      alignItems: "center", justifyContent: "center",
      width: `min(${width}px, 25vw)`, minHeight: noteHeight, background: C.notePaper,
      border: "1px solid rgba(120,88,48,0.25)", borderBottomColor: "transparent",
      boxShadow: "0 4px 12px rgba(60,38,20,0.18), 0 1px 3px rgba(60,38,20,0.1)",
      transform: `rotate(${rotate}deg)`,
      transition: "transform 0.45s cubic-bezier(0.22,1,0.36,1), box-shadow 0.45s ease",
      cursor: "pointer", textDecoration: "none", color: C.titleDark,
      padding: "14px 14px 32px 14px", flexShrink: 0,
    }}
      onMouseEnter={(e) => {
        (e.currentTarget as HTMLAnchorElement).style.transform = "rotate(0deg) scale(1.03)";
        (e.currentTarget as HTMLAnchorElement).style.boxShadow = "0 10px 28px rgba(60,38,20,0.22), 0 3px 8px rgba(60,38,20,0.1)";
      }}
      onMouseLeave={(e) => {
        (e.currentTarget as HTMLAnchorElement).style.transform = `rotate(${rotate}deg)`;
        (e.currentTarget as HTMLAnchorElement).style.boxShadow = "0 4px 12px rgba(60,38,20,0.18), 0 1px 3px rgba(60,38,20,0.1)";
      }}
    >
      <Pin />
      <NoteSprig />
      <p style={{ fontFamily: "var(--font-playfair)", fontStyle: "italic", fontSize: 15, color: C.titleDark, lineHeight: 1.35, textAlign: "center", zIndex: 1, margin: 0 }}>
        {label}
      </p>
      {subtitle && (
        <p style={{ fontFamily: "var(--font-inter)", fontSize: 10, color: C.bodyText, textAlign: "center", zIndex: 1, margin: "6px 0 0", opacity: 0.7, letterSpacing: "0.04em" }}>
          {subtitle}
        </p>
      )}
      <NoteBottomOrnament />
      <DeckleEdge />
    </a>
  );
}

function SideFrame({ children }: { children: React.ReactNode }) {
  return (
    <div style={{ padding: 10, background: C.frameOuter, boxShadow: "0 4px 16px rgba(40,20,10,0.18)", borderRadius: 2 }}>
      <div style={{ padding: 4, background: "rgba(60,35,10,0.2)" }}>
        <div
          className="flex flex-col sm:flex-row items-center justify-center px-2 py-6 sm:px-5 sm:py-8"
          style={{
            position: "relative", background: C.frameFace, minHeight: 230,
            gap: 18, overflow: "hidden",
          }}
        >
          <svg aria-hidden style={{ position: "absolute", inset: 0, width: "100%", height: "100%", pointerEvents: "none" }} preserveAspectRatio="xMidYMid slice">
            <defs>
              <pattern id="burlap" x="0" y="0" width="8" height="8" patternUnits="userSpaceOnUse">
                <line x1="0" y1="1" x2="8" y2="1" stroke="rgba(80,50,25,0.13)" strokeWidth="1.2" />
                <line x1="0" y1="3" x2="8" y2="3" stroke="rgba(80,50,25,0.08)" strokeWidth="0.7" />
                <line x1="0" y1="5" x2="8" y2="5" stroke="rgba(80,50,25,0.13)" strokeWidth="1.2" />
                <line x1="0" y1="7" x2="8" y2="7" stroke="rgba(80,50,25,0.08)" strokeWidth="0.7" />
                <line x1="1" y1="0" x2="1" y2="8" stroke="rgba(80,50,25,0.13)" strokeWidth="1.2" />
                <line x1="3" y1="0" x2="3" y2="8" stroke="rgba(80,50,25,0.08)" strokeWidth="0.7" />
                <line x1="5" y1="0" x2="5" y2="8" stroke="rgba(80,50,25,0.13)" strokeWidth="1.2" />
                <line x1="7" y1="0" x2="7" y2="8" stroke="rgba(80,50,25,0.08)" strokeWidth="0.7" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#burlap)" />
          </svg>
          {children}
        </div>
      </div>
    </div>
  );
}

export default function HeroSection() {
  const { locale, setLocale, t } = useT();

  return (
    <section id="hero" aria-label="Hero" className="wallpaper-botanical-dense" style={{
      position: "relative", minHeight: "100vh",
      display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center",
      overflow: "hidden", padding: "80px 24px 72px",
    }}>

      {/* PT/DE language switcher */}
      <div className="hidden sm:flex" style={{ position: "absolute", top: 20, right: 24, gap: 4, zIndex: 10 }}>
        {(["pt", "de"] as Locale[]).map((lang) => (
          <button key={lang} onClick={() => setLocale(lang)} style={{
            padding: "4px 10px",
            background: locale === lang ? "#7a5468" : "rgba(122,84,104,0.35)",
            color: "#fdf8ec", border: "none", borderRadius: 3,
            fontSize: 12, fontWeight: 700, fontFamily: "var(--font-inter)",
            cursor: "pointer", letterSpacing: "0.08em", textTransform: "uppercase",
            transition: "background 0.2s",
          }}>
            {lang.toUpperCase()}
          </button>
        ))}
      </div>

      {/* Content */}
      <div style={{ position: "relative", zIndex: 2, display: "flex", flexDirection: "column", alignItems: "center", width: "100%", maxWidth: 960 }}>

        {/* Titel + Ornament — enger Halo */}
        <div style={{
          display: "flex", flexDirection: "column", alignItems: "center",
          background: "#f5ede8", borderRadius: 4, padding: "10px 28px 6px",
          boxShadow: "0 0 8px 4px #f5ede8, 0 0 18px 10px rgba(245,237,232,0.85), 0 0 36px 18px rgba(245,237,232,0.45)",
        }}>
          <h1 style={{
            fontFamily: "var(--font-playfair)", fontSize: "clamp(36px, 5vw, 62px)",
            fontWeight: 400, color: C.titleDark, textAlign: "center",
            margin: 0, lineHeight: 1.2, letterSpacing: "0.01em",
          }}>
            Ana Souza{" "}
            <em style={{ fontStyle: "italic", fontWeight: 400 }}>de Magalh&#xE3;es</em>
          </h1>
          <OrnamentDivider />
        </div>

        {/* Zettel-Boards — kein Halo */}
        <div className="flex flex-row items-center justify-center gap-2 md:gap-10" style={{ marginTop: 44 }}>
          <SideFrame>
            <FramedNote href="#livros"   label={t("hero.note.livros")}  subtitle={t("hero.note.livros.sub")}  rotate={-3} />
            <FramedNote href="#projetos" label={t("hero.note.poemas")}  subtitle={t("hero.note.poemas.sub")}  rotate={1}  width={158} />
            <FramedNote href="/artes"    label={t("hero.note.artes")}   subtitle={t("hero.note.artes.sub")}   rotate={-2} />
          </SideFrame>

          <SideFrame>
            <FramedNote href="#contato" label={t("hero.note.contato")} subtitle={t("hero.note.contato.sub")} rotate={2}  />
            <FramedNote href="#loja"    label={t("hero.note.loja")}    subtitle={t("hero.note.loja.sub")}    rotate={-1} />
            <FramedNote href="#sobre"   label={t("hero.note.sobre1")}  subtitle={t("hero.note.sobre.sub")}   rotate={2}  />
          </SideFrame>
        </div>

        {/* Tagline + kleines Ornament — enger Halo */}
        <div style={{
          display: "flex", flexDirection: "column", alignItems: "center",
          marginTop: 52,
          background: "#f5ede8", borderRadius: 4, padding: "6px 20px 8px",
          boxShadow: "0 0 8px 4px #f5ede8, 0 0 18px 10px rgba(245,237,232,0.85), 0 0 36px 18px rgba(245,237,232,0.45)",
        }}>
          <p style={{
            fontFamily: "var(--font-playfair)", fontStyle: "italic",
            fontSize: "clamp(14px, 1.7vw, 18px)", color: C.bodyText,
            textAlign: "center", lineHeight: 1.7, maxWidth: 480, opacity: 0.85, margin: 0,
          }}>
            {t("hero.tagline")}{" "}
            <br className="hidden sm:block" />
            {t("hero.tagline2")}
          </p>
          <div aria-hidden style={{ marginTop: 10, display: "flex", alignItems: "center", justifyContent: "center" }}>
            <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
              <circle cx="6" cy="6" r="2" fill={C.bodyText} opacity="0.4" />
              <ellipse cx="6" cy="2" rx="1.2" ry="1.8" fill={C.bodyText} opacity="0.3" />
              <ellipse cx="6" cy="10" rx="1.2" ry="1.8" fill={C.bodyText} opacity="0.3" />
              <ellipse cx="2" cy="6" rx="1.8" ry="1.2" fill={C.bodyText} opacity="0.3" />
              <ellipse cx="10" cy="6" rx="1.8" ry="1.2" fill={C.bodyText} opacity="0.3" />
            </svg>
          </div>
        </div>

        {/* #15 — Ver Livros CTA */}
        <a
          href="#livros"
          className="transition-all duration-200 hover:-translate-y-0.5"
          style={{
            marginTop: 28,
            display: "inline-block",
            padding: "11px 32px",
            background: "#7a5468",
            color: "#faf6f1",
            borderRadius: 40,
            fontFamily: "var(--font-inter)",
            fontSize: 12,
            fontWeight: 600,
            letterSpacing: "0.12em",
            textDecoration: "none",
            textTransform: "uppercase",
            boxShadow: "0 4px 16px rgba(74,40,64,0.25)",
          }}
        >
          {t("hero.cta")}
        </a>
      </div>
    </section>
  );
}
