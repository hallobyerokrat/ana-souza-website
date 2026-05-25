"use client";

import { useT } from "@/lib/i18n";

// ─── Farb-Konstanten ────────────────────────────────────────────────
const C = {
  bg: "#d8cac4",
  frameOuter: "#7a5068",
  frameFace: "#bfadb5",
  notePaper: "#f2e8dc",
  pin: "#6e4a5c",
  botanicNote: "#a08898",
  titleDark: "#4a2a40",
  bodyText: "#6a4858",
  botanicCorner: "rgba(120,80,100,0.32)",
  botanicCornerLight: "rgba(160,120,140,0.22)",
};

// ─── Botanische SVGs ─────────────────────────────────────────────────

/** Gypsophila-Zweig oben-links */
function BotanicTopLeft() {
  const s = C.botanicCorner;
  const sl = C.botanicCornerLight;
  return (
    <svg aria-hidden width="120" height="220" viewBox="0 0 120 220" fill="none"
      style={{ position: "absolute", top: 0, left: 0, pointerEvents: "none" }}>
      {/* Hauptstamm */}
      <line x1="20" y1="220" x2="45" y2="80" stroke={s} strokeWidth="1.0" />
      {/* Ast 1 */}
      <line x1="35" y1="150" x2="8" y2="120" stroke={s} strokeWidth="0.8" />
      <line x1="8" y1="120" x2="2" y2="100" stroke={sl} strokeWidth="0.7" />
      <line x1="8" y1="120" x2="18" y2="102" stroke={sl} strokeWidth="0.7" />
      <circle cx="2" cy="98" r="2.8" fill={s} /><circle cx="4" cy="95" r="1.8" fill={sl} />
      <circle cx="18" cy="100" r="2.5" fill={s} /><circle cx="20" cy="97" r="1.6" fill={sl} />
      {/* Ast 2 */}
      <line x1="40" y1="115" x2="12" y2="88" stroke={s} strokeWidth="0.8" />
      <line x1="12" y1="88" x2="5" y2="70" stroke={sl} strokeWidth="0.7" />
      <line x1="12" y1="88" x2="24" y2="72" stroke={sl} strokeWidth="0.7" />
      <circle cx="4" cy="68" r="2.8" fill={s} /><circle cx="6" cy="65" r="1.8" fill={sl} />
      <circle cx="24" cy="70" r="2.5" fill={s} /><circle cx="26" cy="67" r="1.6" fill={sl} />
      {/* Ast 3 */}
      <line x1="43" y1="95" x2="20" y2="68" stroke={s} strokeWidth="0.8" />
      <line x1="20" y1="68" x2="10" y2="50" stroke={sl} strokeWidth="0.7" />
      <line x1="20" y1="68" x2="32" y2="52" stroke={sl} strokeWidth="0.7" />
      <circle cx="9" cy="48" r="2.5" fill={s} /><circle cx="11" cy="45" r="1.6" fill={sl} />
      <circle cx="32" cy="50" r="2.5" fill={s} /><circle cx="34" cy="47" r="1.6" fill={sl} />
      {/* Spitze */}
      <line x1="45" y1="80" x2="35" y2="55" stroke={sl} strokeWidth="0.7" />
      <line x1="45" y1="80" x2="58" y2="60" stroke={sl} strokeWidth="0.7" />
      <circle cx="34" cy="53" r="2.2" fill={sl} /><circle cx="36" cy="50" r="1.4" fill={sl} />
      <circle cx="58" cy="58" r="2.2" fill={sl} /><circle cx="60" cy="55" r="1.4" fill={sl} />
      {/* Rechte Aste */}
      <line x1="30" y1="170" x2="60" y2="148" stroke={sl} strokeWidth="0.7" />
      <line x1="60" y1="148" x2="68" y2="132" stroke={sl} strokeWidth="0.6" />
      <line x1="60" y1="148" x2="74" y2="150" stroke={sl} strokeWidth="0.6" />
      <circle cx="68" cy="130" r="2.2" fill={sl} /><circle cx="74" cy="148" r="2.0" fill={sl} />
    </svg>
  );
}

/** Gypsophila-Zweig oben-rechts (gespiegelt) */
function BotanicTopRight() {
  return (
    <svg aria-hidden width="120" height="220" viewBox="0 0 120 220" fill="none"
      style={{ position: "absolute", top: 0, right: 0, pointerEvents: "none", transform: "scaleX(-1)" }}>
      {/* identisch mit TopLeft — gespiegelt via CSS */}
      {(() => {
        const s = C.botanicCorner; const sl = C.botanicCornerLight;
        return (<>
          <line x1="20" y1="220" x2="45" y2="80" stroke={s} strokeWidth="1.0" />
          <line x1="35" y1="150" x2="8" y2="120" stroke={s} strokeWidth="0.8" />
          <line x1="8" y1="120" x2="2" y2="100" stroke={sl} strokeWidth="0.7" />
          <line x1="8" y1="120" x2="18" y2="102" stroke={sl} strokeWidth="0.7" />
          <circle cx="2" cy="98" r="2.8" fill={s} /><circle cx="4" cy="95" r="1.8" fill={sl} />
          <circle cx="18" cy="100" r="2.5" fill={s} /><circle cx="20" cy="97" r="1.6" fill={sl} />
          <line x1="40" y1="115" x2="12" y2="88" stroke={s} strokeWidth="0.8" />
          <line x1="12" y1="88" x2="5" y2="70" stroke={sl} strokeWidth="0.7" />
          <line x1="12" y1="88" x2="24" y2="72" stroke={sl} strokeWidth="0.7" />
          <circle cx="4" cy="68" r="2.8" fill={s} /><circle cx="6" cy="65" r="1.8" fill={sl} />
          <circle cx="24" cy="70" r="2.5" fill={s} /><circle cx="26" cy="67" r="1.6" fill={sl} />
          <line x1="43" y1="95" x2="20" y2="68" stroke={s} strokeWidth="0.8" />
          <line x1="20" y1="68" x2="10" y2="50" stroke={sl} strokeWidth="0.7" />
          <line x1="20" y1="68" x2="32" y2="52" stroke={sl} strokeWidth="0.7" />
          <circle cx="9" cy="48" r="2.5" fill={s} /><circle cx="11" cy="45" r="1.6" fill={sl} />
          <circle cx="32" cy="50" r="2.5" fill={s} /><circle cx="34" cy="47" r="1.6" fill={sl} />
          <line x1="45" y1="80" x2="35" y2="55" stroke={sl} strokeWidth="0.7" />
          <line x1="45" y1="80" x2="58" y2="60" stroke={sl} strokeWidth="0.7" />
          <circle cx="34" cy="53" r="2.2" fill={sl} /><circle cx="36" cy="50" r="1.4" fill={sl} />
          <circle cx="58" cy="58" r="2.2" fill={sl} /><circle cx="60" cy="55" r="1.4" fill={sl} />
          <line x1="30" y1="170" x2="60" y2="148" stroke={sl} strokeWidth="0.7" />
          <line x1="60" y1="148" x2="68" y2="132" stroke={sl} strokeWidth="0.6" />
          <line x1="60" y1="148" x2="74" y2="150" stroke={sl} strokeWidth="0.6" />
          <circle cx="68" cy="130" r="2.2" fill={sl} /><circle cx="74" cy="148" r="2.0" fill={sl} />
        </>);
      })()}
    </svg>
  );
}

/** Dichte Pflanze unten-links mit Watercolor-Wash */
function BotanicBottomLeft() {
  return (
    <svg
      aria-hidden
      width="220"
      height="280"
      viewBox="0 0 220 280"
      fill="none"
      style={{ position: "absolute", bottom: 0, left: 0, pointerEvents: "none" }}
    >
      <defs>
        <filter id="wc-left" x="-30%" y="-30%" width="160%" height="160%">
          <feTurbulence type="turbulence" baseFrequency="0.008 0.012" numOctaves="4" seed="2" result="turb" />
          <feDisplacementMap in="SourceGraphic" in2="turb" scale="45" xChannelSelector="R" yChannelSelector="G" result="displaced" />
          <feGaussianBlur in="displaced" stdDeviation="18" />
        </filter>
      </defs>
      {/* Große Watercolor-Wolken unten-links */}
      <g filter="url(#wc-left)">
        <path d="M0,200 Q40,170 90,185 Q140,195 170,175 Q200,160 220,180 L220,280 L0,280 Z" fill="rgba(148,95,125,0.55)" />
        <path d="M0,220 Q50,195 110,210 Q160,220 200,205 L220,280 L0,280 Z" fill="rgba(130,80,108,0.45)" />
        <path d="M0,240 Q60,225 130,235 Q175,240 220,228 L220,280 L0,280 Z" fill="rgba(165,118,142,0.38)" />
        <path d="M0,255 Q80,245 150,252 Q185,255 220,248 L220,280 L0,280 Z" fill="rgba(155,105,132,0.32)" />
      </g>
      {/* Stamm */}
      <line x1="70" y1="280" x2="70" y2="90" stroke={C.botanicCorner} strokeWidth="1.4" />
      {/* Blätter links */}
      <path d="M70 210 Q25 185 8 158" stroke={C.botanicCorner} strokeWidth="1.1" fill="none" />
      <path d="M70 180 Q18 162 4 138" stroke={C.botanicCorner} strokeWidth="1.0" fill="none" />
      <path d="M70 152 Q28 140 12 118" stroke={C.botanicCorner} strokeWidth="0.9" fill="none" />
      <path d="M70 125 Q32 115 20 96" stroke={C.botanicCornerLight} strokeWidth="0.8" fill="none" />
      {/* Blätter rechts */}
      <path d="M70 198 Q108 175 122 153" stroke={C.botanicCornerLight} strokeWidth="1.0" fill="none" />
      <path d="M70 168 Q112 152 128 132" stroke={C.botanicCornerLight} strokeWidth="0.9" fill="none" />
      {/* Beeren */}
      <circle cx="8" cy="157" r="4" fill={C.botanicCorner} />
      <circle cx="4" cy="137" r="3.5" fill={C.botanicCorner} />
      <circle cx="12" cy="117" r="3" fill={C.botanicCorner} />
      <circle cx="20" cy="95" r="2.5" fill={C.botanicCorner} />
      <circle cx="122" cy="152" r="3" fill={C.botanicCornerLight} />
      <circle cx="128" cy="131" r="2.8" fill={C.botanicCornerLight} />
      {/* Oberes Ende */}
      <line x1="70" y1="90" x2="56" y2="62" stroke={C.botanicCornerLight} strokeWidth="0.8" />
      <line x1="70" y1="90" x2="84" y2="62" stroke={C.botanicCornerLight} strokeWidth="0.8" />
      <circle cx="56" cy="60" r="2.5" fill={C.botanicCornerLight} />
      <circle cx="84" cy="60" r="2.5" fill={C.botanicCornerLight} />
      <circle cx="70" cy="88" r="3" fill={C.botanicCorner} />
    </svg>
  );
}

/** Gespiegelte Pflanze unten-rechts */
function BotanicBottomRight() {
  return (
    <svg
      aria-hidden
      width="220"
      height="280"
      viewBox="0 0 220 280"
      fill="none"
      style={{ position: "absolute", bottom: 0, right: 0, pointerEvents: "none", transform: "scaleX(-1)" }}
    >
      <defs>
        <filter id="wc-right" x="-30%" y="-30%" width="160%" height="160%">
          <feTurbulence type="turbulence" baseFrequency="0.008 0.012" numOctaves="4" seed="9" result="turb" />
          <feDisplacementMap in="SourceGraphic" in2="turb" scale="45" xChannelSelector="R" yChannelSelector="G" result="displaced" />
          <feGaussianBlur in="displaced" stdDeviation="18" />
        </filter>
      </defs>
      {/* Große Watercolor-Wolken unten-rechts (gespiegelt) */}
      <g filter="url(#wc-right)">
        <path d="M0,200 Q40,170 90,185 Q140,195 170,175 Q200,160 220,180 L220,280 L0,280 Z" fill="rgba(148,95,125,0.55)" />
        <path d="M0,220 Q50,195 110,210 Q160,220 200,205 L220,280 L0,280 Z" fill="rgba(130,80,108,0.45)" />
        <path d="M0,240 Q60,225 130,235 Q175,240 220,228 L220,280 L0,280 Z" fill="rgba(165,118,142,0.38)" />
        <path d="M0,255 Q80,245 150,252 Q185,255 220,248 L220,280 L0,280 Z" fill="rgba(155,105,132,0.32)" />
      </g>
      <line x1="70" y1="280" x2="70" y2="90" stroke={C.botanicCorner} strokeWidth="1.4" />
      <path d="M70 210 Q25 185 8 158" stroke={C.botanicCorner} strokeWidth="1.1" fill="none" />
      <path d="M70 180 Q18 162 4 138" stroke={C.botanicCorner} strokeWidth="1.0" fill="none" />
      <path d="M70 152 Q28 140 12 118" stroke={C.botanicCorner} strokeWidth="0.9" fill="none" />
      <path d="M70 125 Q32 115 20 96" stroke={C.botanicCornerLight} strokeWidth="0.8" fill="none" />
      <path d="M70 198 Q108 175 122 153" stroke={C.botanicCornerLight} strokeWidth="1.0" fill="none" />
      <path d="M70 168 Q112 152 128 132" stroke={C.botanicCornerLight} strokeWidth="0.9" fill="none" />
      <circle cx="8" cy="157" r="4" fill={C.botanicCorner} />
      <circle cx="4" cy="137" r="3.5" fill={C.botanicCorner} />
      <circle cx="12" cy="117" r="3" fill={C.botanicCorner} />
      <circle cx="20" cy="95" r="2.5" fill={C.botanicCorner} />
      <circle cx="122" cy="152" r="3" fill={C.botanicCornerLight} />
      <circle cx="128" cy="131" r="2.8" fill={C.botanicCornerLight} />
      <line x1="70" y1="90" x2="56" y2="62" stroke={C.botanicCornerLight} strokeWidth="0.8" />
      <line x1="70" y1="90" x2="84" y2="62" stroke={C.botanicCornerLight} strokeWidth="0.8" />
      <circle cx="56" cy="60" r="2.5" fill={C.botanicCornerLight} />
      <circle cx="84" cy="60" r="2.5" fill={C.botanicCornerLight} />
      <circle cx="70" cy="88" r="3" fill={C.botanicCorner} />
    </svg>
  );
}

/** Zentrale Pflanze unten-Mitte */
function BotanicBottomCenter() {
  return (
    <svg
      aria-hidden
      width="120"
      height="200"
      viewBox="0 0 120 200"
      fill="none"
      style={{
        position: "absolute",
        bottom: 0,
        left: "50%",
        transform: "translateX(-50%)",
        pointerEvents: "none",
      }}
    >
      {/* Hauptstamm */}
      <line x1="60" y1="200" x2="60" y2="55" stroke={C.botanicCorner} strokeWidth="1.3" />
      {/* Seitenzweige */}
      <line x1="60" y1="140" x2="25" y2="110" stroke={C.botanicCorner} strokeWidth="1.0" />
      <line x1="60" y1="140" x2="95" y2="110" stroke={C.botanicCorner} strokeWidth="1.0" />
      <line x1="60" y1="110" x2="30" y2="85" stroke={C.botanicCornerLight} strokeWidth="0.9" />
      <line x1="60" y1="110" x2="90" y2="85" stroke={C.botanicCornerLight} strokeWidth="0.9" />
      <line x1="60" y1="82" x2="38" y2="62" stroke={C.botanicCornerLight} strokeWidth="0.8" />
      <line x1="60" y1="82" x2="82" y2="62" stroke={C.botanicCornerLight} strokeWidth="0.8" />
      {/* Beeren-Cluster oben */}
      <circle cx="60" cy="53" r="3.5" fill={C.botanicCorner} />
      <circle cx="52" cy="47" r="3" fill={C.botanicCornerLight} />
      <circle cx="68" cy="47" r="3" fill={C.botanicCornerLight} />
      <circle cx="56" cy="40" r="2.5" fill={C.botanicCorner} />
      <circle cx="64" cy="40" r="2.5" fill={C.botanicCorner} />
      <circle cx="60" cy="35" r="2" fill={C.botanicCornerLight} />
      {/* Blüten an Zweigenden */}
      <circle cx="25" cy="109" r="4" fill={C.botanicCorner} />
      <circle cx="95" cy="109" r="4" fill={C.botanicCorner} />
      <circle cx="30" cy="84" r="3.5" fill={C.botanicCornerLight} />
      <circle cx="90" cy="84" r="3.5" fill={C.botanicCornerLight} />
      <circle cx="38" cy="61" r="3" fill={C.botanicCornerLight} />
      <circle cx="82" cy="61" r="3" fill={C.botanicCornerLight} />
    </svg>
  );
}

/** Schlanker vertikaler Zweig links-Mitte */
function BotanicSideLeft() {
  return (
    <svg
      aria-hidden
      width="30"
      height="180"
      viewBox="0 0 30 180"
      fill="none"
      style={{
        position: "absolute",
        left: 12,
        top: "50%",
        transform: "translateY(-50%)",
        pointerEvents: "none",
        opacity: 0.55,
      }}
    >
      <line x1="15" y1="175" x2="15" y2="10" stroke={C.botanicCorner} strokeWidth="0.9" />
      <line x1="15" y1="140" x2="3" y2="120" stroke={C.botanicCorner} strokeWidth="0.7" />
      <line x1="15" y1="110" x2="27" y2="92" stroke={C.botanicCornerLight} strokeWidth="0.7" />
      <line x1="15" y1="80" x2="3" y2="62" stroke={C.botanicCorner} strokeWidth="0.7" />
      <line x1="15" y1="50" x2="25" y2="34" stroke={C.botanicCornerLight} strokeWidth="0.7" />
      <circle cx="3" cy="119" r="3" fill={C.botanicCorner} />
      <circle cx="27" cy="91" r="3" fill={C.botanicCornerLight} />
      <circle cx="3" cy="61" r="2.5" fill={C.botanicCorner} />
      <circle cx="25" cy="33" r="2.5" fill={C.botanicCornerLight} />
      <circle cx="15" cy="8" r="2.8" fill={C.botanicCorner} />
    </svg>
  );
}

/** Gespiegelter vertikaler Zweig rechts-Mitte */
function BotanicSideRight() {
  return (
    <svg
      aria-hidden
      width="30"
      height="180"
      viewBox="0 0 30 180"
      fill="none"
      style={{
        position: "absolute",
        right: 12,
        top: "50%",
        transform: "translateY(-50%) scaleX(-1)",
        pointerEvents: "none",
        opacity: 0.55,
      }}
    >
      <line x1="15" y1="175" x2="15" y2="10" stroke={C.botanicCorner} strokeWidth="0.9" />
      <line x1="15" y1="140" x2="3" y2="120" stroke={C.botanicCorner} strokeWidth="0.7" />
      <line x1="15" y1="110" x2="27" y2="92" stroke={C.botanicCornerLight} strokeWidth="0.7" />
      <line x1="15" y1="80" x2="3" y2="62" stroke={C.botanicCorner} strokeWidth="0.7" />
      <line x1="15" y1="50" x2="25" y2="34" stroke={C.botanicCornerLight} strokeWidth="0.7" />
      <circle cx="3" cy="119" r="3" fill={C.botanicCorner} />
      <circle cx="27" cy="91" r="3" fill={C.botanicCornerLight} />
      <circle cx="3" cy="61" r="2.5" fill={C.botanicCorner} />
      <circle cx="25" cy="33" r="2.5" fill={C.botanicCornerLight} />
      <circle cx="15" cy="8" r="2.8" fill={C.botanicCorner} />
    </svg>
  );
}

// ─── Ornament-Divider ────────────────────────────────────────────────
function OrnamentDivider() {
  return (
    <div
      aria-hidden
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        gap: 8,
        margin: "10px auto 0",
        width: 240,
      }}
    >
      <div style={{ flex: 1, height: 1, background: C.bodyText, opacity: 0.35 }} />
      {/* Kleine Blume */}
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

// ─── Kleiner SVG-Zweig für Notiz-Dekoration ─────────────────────────
function NoteSprig() {
  return (
    <svg
      aria-hidden
      width="16"
      height="58"
      viewBox="0 0 16 58"
      fill="none"
      style={{
        position: "absolute",
        left: 8,
        top: "50%",
        transform: "translateY(-50%)",
        opacity: 0.45,
        pointerEvents: "none",
      }}
    >
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

// ─── Notiz-Unten-Ornament ────────────────────────────────────────────
function NoteBottomOrnament() {
  return (
    <div
      aria-hidden
      style={{
        position: "absolute",
        bottom: 9,
        left: 12,
        right: 12,
        display: "flex",
        alignItems: "center",
        gap: 4,
        opacity: 0.28,
      }}
    >
      <div style={{ flex: 1, height: 0.8, background: C.botanicNote }} />
      <svg width="9" height="9" viewBox="0 0 10 10" fill="none">
        <circle cx="5" cy="5" r="1.8" fill={C.botanicNote} />
        <path
          d="M5 1C4.1 2.5 2.2 3 1 4c1.2.7 3 1.4 4 4 1-2.6 2.8-3.3 4-4C7.8 3 5.9 2.5 5 1z"
          fill={C.botanicNote}
        />
      </svg>
      <div style={{ flex: 1, height: 0.8, background: C.botanicNote }} />
    </div>
  );
}

// ─── Pin ─────────────────────────────────────────────────────────────
function Pin() {
  return (
    <span
      aria-hidden
      style={{
        position: "absolute",
        top: -10,
        left: "50%",
        marginLeft: -9,
        display: "block",
        width: 18,
        height: 18,
        borderRadius: "50%",
        background: `radial-gradient(circle at 35% 35%, #8a6278, ${C.pin})`,
        boxShadow: "0 2px 5px rgba(40,20,35,0.35), inset 0 1px 1px rgba(200,170,185,0.3)",
        zIndex: 10,
      }}
    />
  );
}

// ─── Deckle Edge (gewellte Unterkante Papier) ────────────────────────
function DeckleEdge() {
  return (
    <svg
      aria-hidden
      preserveAspectRatio="none"
      viewBox="0 0 160 7"
      fill="none"
      style={{
        position: "absolute",
        bottom: -1,
        left: -1,
        width: "calc(100% + 2px)",
        height: 8,
        pointerEvents: "none",
      }}
    >
      <path
        d="M0,2.5 Q8,0 16,2.5 Q24,5 32,2.5 Q40,0 48,2.5 Q56,5 64,2.5 Q72,0 80,2.5 Q88,5 96,2.5 Q104,0 112,2.5 Q120,5 128,2.5 Q136,0 144,2.5 Q152,5 160,2.5 L160,7 L0,7 Z"
        fill="#f2e8dc"
      />
      <path
        d="M0,2.5 Q8,0 16,2.5 Q24,5 32,2.5 Q40,0 48,2.5 Q56,5 64,2.5 Q72,0 80,2.5 Q88,5 96,2.5 Q104,0 112,2.5 Q120,5 128,2.5 Q136,0 144,2.5 Q152,5 160,2.5"
        stroke="rgba(100,70,85,0.18)"
        strokeWidth="0.7"
        fill="none"
      />
    </svg>
  );
}

// ─── FramedNote ──────────────────────────────────────────────────────
function FramedNote({
  href,
  label,
  rotate = -2,
  width = 158,
  noteHeight = 155,
}: {
  href: string;
  label: string;
  rotate?: number;
  width?: number;
  noteHeight?: number;
}) {
  return (
    <a
      href={href}
      style={{
        position: "relative",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        width,
        minHeight: noteHeight,
        background: C.notePaper,
        border: "1px solid rgba(100,70,85,0.18)",
        borderBottomColor: "transparent",
        boxShadow: "0 5px 14px rgba(60,35,50,0.14), 0 1px 4px rgba(60,35,50,0.08)",
        transform: `rotate(${rotate}deg)`,
        transition: "transform 0.45s cubic-bezier(0.22,1,0.36,1), box-shadow 0.45s ease",
        cursor: "pointer",
        textDecoration: "none",
        color: C.titleDark,
        padding: "14px 14px 32px 14px",
        flexShrink: 0,
      }}
      onMouseEnter={(e) => {
        (e.currentTarget as HTMLAnchorElement).style.transform = "rotate(0deg) scale(1.03)";
        (e.currentTarget as HTMLAnchorElement).style.boxShadow =
          "0 10px 28px rgba(60,35,50,0.2), 0 3px 8px rgba(60,35,50,0.1)";
      }}
      onMouseLeave={(e) => {
        (e.currentTarget as HTMLAnchorElement).style.transform = `rotate(${rotate}deg)`;
        (e.currentTarget as HTMLAnchorElement).style.boxShadow =
          "0 5px 14px rgba(60,35,50,0.14), 0 1px 4px rgba(60,35,50,0.08)";
      }}
    >
      <Pin />
      <NoteSprig />
      <p
        style={{
          fontFamily: "var(--font-playfair)",
          fontStyle: "italic",
          fontSize: 15,
          color: C.titleDark,
          lineHeight: 1.35,
          textAlign: "center",
          zIndex: 1,
        }}
      >
        {label}
      </p>
      <NoteBottomOrnament />
      <DeckleEdge />
    </a>
  );
}

// ─── Cork Board (SideFrame) ──────────────────────────────────────────
function SideFrame({ children }: { children: React.ReactNode }) {
  return (
    <div
      style={{
        padding: 10,
        background: C.frameOuter,
        boxShadow: "0 4px 16px rgba(40,20,35,0.18)",
        borderRadius: 2,
      }}
    >
      {/* Innere Rahmenlinie */}
      <div
        style={{
          padding: 4,
          background: "rgba(90,50,70,0.2)",
          boxShadow: "none",
        }}
      >
        {/* Cork-Flache mit SVG-Leinwand-Textur */}
        <div
          style={{
            position: "relative",
            background: C.frameFace,
            minHeight: 230,
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "center",
            gap: 18,
            padding: "30px 28px",
            overflow: "hidden",
          }}
        >
          {/* SVG Jute/Burlap Leinwand-Textur */}
          <svg
            aria-hidden
            style={{ position: "absolute", inset: 0, width: "100%", height: "100%", pointerEvents: "none" }}
            preserveAspectRatio="xMidYMid slice"
          >
            <defs>
              <pattern id="burlap" x="0" y="0" width="8" height="8" patternUnits="userSpaceOnUse" patternTransform="rotate(0)">
                {/* Horizontale Fäden */}
                <line x1="0" y1="1" x2="8" y2="1" stroke="rgba(80,50,68,0.13)" strokeWidth="1.2" />
                <line x1="0" y1="3" x2="8" y2="3" stroke="rgba(80,50,68,0.08)" strokeWidth="0.7" />
                <line x1="0" y1="5" x2="8" y2="5" stroke="rgba(80,50,68,0.13)" strokeWidth="1.2" />
                <line x1="0" y1="7" x2="8" y2="7" stroke="rgba(80,50,68,0.08)" strokeWidth="0.7" />
                {/* Vertikale Fäden */}
                <line x1="1" y1="0" x2="1" y2="8" stroke="rgba(80,50,68,0.13)" strokeWidth="1.2" />
                <line x1="3" y1="0" x2="3" y2="8" stroke="rgba(80,50,68,0.08)" strokeWidth="0.7" />
                <line x1="5" y1="0" x2="5" y2="8" stroke="rgba(80,50,68,0.13)" strokeWidth="1.2" />
                <line x1="7" y1="0" x2="7" y2="8" stroke="rgba(80,50,68,0.08)" strokeWidth="0.7" />
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

// ─── HeroSection ─────────────────────────────────────────────────────
export default function HeroSection() {
  const { t } = useT();

  return (
    <section
      id="hero"
      aria-label="Hero"
      style={{
        position: "relative",
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        background: C.bg,
        overflow: "hidden",
        padding: "80px 24px 72px",
      }}
    >
      {/* Papier-Textur overlay — feTurbulence + feDiffuseLighting */}
      <svg
        aria-hidden
        style={{ position: "absolute", inset: 0, width: "100%", height: "100%", pointerEvents: "none", zIndex: 0, opacity: 0.55 }}
        preserveAspectRatio="xMidYMid slice"
      >
        <defs>
          <filter id="paper-grain" x="0%" y="0%" width="100%" height="100%" colorInterpolationFilters="linearRGB">
            <feTurbulence type="fractalNoise" baseFrequency="0.65" numOctaves="4" stitchTiles="stitch" result="noise" />
            <feDiffuseLighting in="noise" lightingColor="#f5e8e0" surfaceScale="1.8" result="lit">
              <feDistantLight azimuth="45" elevation="65" />
            </feDiffuseLighting>
            <feBlend in="SourceGraphic" in2="lit" mode="multiply" />
          </filter>
        </defs>
        <rect width="100%" height="100%" fill={C.bg} filter="url(#paper-grain)" />
      </svg>

      {/* ── Botanische Ecken ── */}
      <BotanicTopLeft />
      <BotanicTopRight />
      <BotanicBottomLeft />
      <BotanicBottomRight />
      <BotanicBottomCenter />
      <BotanicSideLeft />
      <BotanicSideRight />

      {/* ── Inhalt ── */}
      <div
        style={{
          position: "relative",
          zIndex: 2,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          width: "100%",
          maxWidth: 960,
          gap: 0,
        }}
      >
        {/* Titel */}
        <h1
          style={{
            fontFamily: "var(--font-playfair)",
            fontSize: "clamp(36px, 5vw, 62px)",
            fontWeight: 400,
            color: C.titleDark,
            textAlign: "center",
            margin: 0,
            lineHeight: 1.2,
            letterSpacing: "0.01em",
          }}
        >
          Ana Souza{" "}
          <em
            style={{
              fontStyle: "italic",
              fontWeight: 400,
            }}
          >
            de Magalh&#xE3;es
          </em>
        </h1>

        {/* Ornament-Divider */}
        <OrnamentDivider />

        {/* Boards */}
        <div
          className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-10"
          style={{ marginTop: 44 }}
        >
          {/* Linkes Board: Livros | Poemas e Textos | Artes */}
          <SideFrame>
            <FramedNote href="#livros" label={t("hero.note.livros")} rotate={-3} />
            <FramedNote href="#poemas" label={t("hero.note.poemas")} rotate={1} width={158} />
            <FramedNote href="#artes" label={t("hero.note.artes")} rotate={-2} />
          </SideFrame>

          {/* Rechtes Board: Contato | Loja | Sobre */}
          <SideFrame>
            <FramedNote href="#contato" label={t("hero.note.contato")} rotate={2} />
            <FramedNote href="#loja" label={t("hero.note.loja")} rotate={-1} />
            <FramedNote href="#sobre" label={t("hero.note.sobre1")} rotate={2} />
          </SideFrame>
        </div>

        {/* Tagline */}
        <p
          style={{
            fontFamily: "var(--font-playfair)",
            fontStyle: "italic",
            fontSize: "clamp(12px, 1.4vw, 15px)",
            color: C.bodyText,
            textAlign: "center",
            marginTop: 52,
            lineHeight: 1.7,
            maxWidth: 480,
            opacity: 0.85,
          }}
        >
          Literatura que nasce da mem&#xF3;ria,{" "}
          <br className="hidden sm:block" />
          floresce na palavra e permanece no sil&#xEA;ncio.
        </p>

        {/* Tagline Divider */}
        <div
          aria-hidden
          style={{
            marginTop: 14,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
            <circle cx="6" cy="6" r="2" fill={C.bodyText} opacity="0.4" />
            <ellipse cx="6" cy="2" rx="1.2" ry="1.8" fill={C.bodyText} opacity="0.3" />
            <ellipse cx="6" cy="10" rx="1.2" ry="1.8" fill={C.bodyText} opacity="0.3" />
            <ellipse cx="2" cy="6" rx="1.8" ry="1.2" fill={C.bodyText} opacity="0.3" />
            <ellipse cx="10" cy="6" rx="1.8" ry="1.2" fill={C.bodyText} opacity="0.3" />
          </svg>
        </div>
      </div>

      {/* ── Mobile Layout (unter md) ── */}
      <style>{`
        @media (max-width: 767px) {
          #hero-boards {
            flex-direction: column !important;
            gap: 24px !important;
          }
        }
      `}</style>
    </section>
  );
}
