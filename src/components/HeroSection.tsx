"use client";

import { useT } from "@/lib/i18n";

// ─── Farb-Konstanten ────────────────────────────────────────────────
const C = {
  bg: "#ede5df",
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

/** Schlanker Zweig oben-links */
function BotanicTopLeft() {
  return (
    <svg
      aria-hidden
      width="140"
      height="200"
      viewBox="0 0 140 200"
      fill="none"
      style={{ position: "absolute", top: 0, left: 0, pointerEvents: "none" }}
    >
      {/* Hauptstamm */}
      <line x1="30" y1="200" x2="55" y2="40" stroke={C.botanicCorner} strokeWidth="1.2" />
      {/* Seitenzweige links */}
      <line x1="45" y1="130" x2="10" y2="105" stroke={C.botanicCorner} strokeWidth="0.9" />
      <line x1="50" y1="90" x2="12" y2="68" stroke={C.botanicCorner} strokeWidth="0.9" />
      <line x1="53" y1="60" x2="22" y2="42" stroke={C.botanicCorner} strokeWidth="0.8" />
      {/* Seitenzweige rechts */}
      <line x1="40" y1="150" x2="78" y2="128" stroke={C.botanicCornerLight} strokeWidth="0.8" />
      <line x1="47" y1="110" x2="82" y2="92" stroke={C.botanicCornerLight} strokeWidth="0.8" />
      {/* Kleine Blütenkreise */}
      <circle cx="10" cy="104" r="3.5" fill={C.botanicCorner} />
      <circle cx="8" cy="100" r="2" fill={C.botanicCornerLight} />
      <circle cx="12" cy="67" r="3.5" fill={C.botanicCorner} />
      <circle cx="10" cy="63" r="2" fill={C.botanicCornerLight} />
      <circle cx="22" cy="41" r="3" fill={C.botanicCorner} />
      <circle cx="78" cy="127" r="3" fill={C.botanicCornerLight} />
      <circle cx="82" cy="91" r="3" fill={C.botanicCornerLight} />
      {/* Beeren-Cluster oben */}
      <circle cx="55" cy="38" r="2.8" fill={C.botanicCorner} />
      <circle cx="60" cy="32" r="2.2" fill={C.botanicCornerLight} />
      <circle cx="50" cy="30" r="2.5" fill={C.botanicCorner} />
      <circle cx="64" cy="38" r="1.8" fill={C.botanicCornerLight} />
      <circle cx="46" cy="36" r="1.8" fill={C.botanicCorner} />
      {/* Kleiner Zweig ganz oben */}
      <line x1="55" y1="40" x2="68" y2="20" stroke={C.botanicCornerLight} strokeWidth="0.7" />
      <line x1="55" y1="40" x2="40" y2="18" stroke={C.botanicCornerLight} strokeWidth="0.7" />
      <circle cx="68" cy="18" r="2" fill={C.botanicCornerLight} />
      <circle cx="40" cy="17" r="2" fill={C.botanicCornerLight} />
    </svg>
  );
}

/** Gespiegelter Zweig oben-rechts */
function BotanicTopRight() {
  return (
    <svg
      aria-hidden
      width="140"
      height="200"
      viewBox="0 0 140 200"
      fill="none"
      style={{
        position: "absolute",
        top: 0,
        right: 0,
        pointerEvents: "none",
        transform: "scaleX(-1)",
      }}
    >
      <line x1="30" y1="200" x2="55" y2="40" stroke={C.botanicCorner} strokeWidth="1.2" />
      <line x1="45" y1="130" x2="10" y2="105" stroke={C.botanicCorner} strokeWidth="0.9" />
      <line x1="50" y1="90" x2="12" y2="68" stroke={C.botanicCorner} strokeWidth="0.9" />
      <line x1="53" y1="60" x2="22" y2="42" stroke={C.botanicCorner} strokeWidth="0.8" />
      <line x1="40" y1="150" x2="78" y2="128" stroke={C.botanicCornerLight} strokeWidth="0.8" />
      <line x1="47" y1="110" x2="82" y2="92" stroke={C.botanicCornerLight} strokeWidth="0.8" />
      <circle cx="10" cy="104" r="3.5" fill={C.botanicCorner} />
      <circle cx="8" cy="100" r="2" fill={C.botanicCornerLight} />
      <circle cx="12" cy="67" r="3.5" fill={C.botanicCorner} />
      <circle cx="10" cy="63" r="2" fill={C.botanicCornerLight} />
      <circle cx="22" cy="41" r="3" fill={C.botanicCorner} />
      <circle cx="78" cy="127" r="3" fill={C.botanicCornerLight} />
      <circle cx="82" cy="91" r="3" fill={C.botanicCornerLight} />
      <circle cx="55" cy="38" r="2.8" fill={C.botanicCorner} />
      <circle cx="60" cy="32" r="2.2" fill={C.botanicCornerLight} />
      <circle cx="50" cy="30" r="2.5" fill={C.botanicCorner} />
      <circle cx="64" cy="38" r="1.8" fill={C.botanicCornerLight} />
      <circle cx="46" cy="36" r="1.8" fill={C.botanicCorner} />
      <line x1="55" y1="40" x2="68" y2="20" stroke={C.botanicCornerLight} strokeWidth="0.7" />
      <line x1="55" y1="40" x2="40" y2="18" stroke={C.botanicCornerLight} strokeWidth="0.7" />
      <circle cx="68" cy="18" r="2" fill={C.botanicCornerLight} />
      <circle cx="40" cy="17" r="2" fill={C.botanicCornerLight} />
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
        <filter id="wc-left" x="-60%" y="-40%" width="220%" height="200%">
          <feTurbulence type="turbulence" baseFrequency="0.012 0.018" numOctaves="3" seed="3" result="turb" />
          <feDisplacementMap in="SourceGraphic" in2="turb" scale="28" xChannelSelector="R" yChannelSelector="G" result="displaced" />
          <feGaussianBlur in="displaced" stdDeviation="10" />
        </filter>
      </defs>
      {/* Watercolor-Wash — organische Blobs */}
      <g filter="url(#wc-left)">
        <ellipse cx="80" cy="248" rx="75" ry="32" fill="rgba(155,95,128,0.5)" />
        <ellipse cx="45" cy="258" rx="52" ry="24" fill="rgba(135,80,112,0.45)" />
        <ellipse cx="125" cy="254" rx="60" ry="22" fill="rgba(168,115,142,0.38)" />
        <ellipse cx="30" cy="252" rx="38" ry="18" fill="rgba(148,90,120,0.42)" />
        <ellipse cx="100" cy="264" rx="70" ry="16" fill="rgba(175,128,150,0.32)" />
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
        <filter id="wc-right" x="-60%" y="-40%" width="220%" height="200%">
          <feTurbulence type="turbulence" baseFrequency="0.012 0.018" numOctaves="3" seed="7" result="turb" />
          <feDisplacementMap in="SourceGraphic" in2="turb" scale="28" xChannelSelector="R" yChannelSelector="G" result="displaced" />
          <feGaussianBlur in="displaced" stdDeviation="10" />
        </filter>
      </defs>
      <g filter="url(#wc-right)">
        <ellipse cx="80" cy="248" rx="75" ry="32" fill="rgba(155,95,128,0.5)" />
        <ellipse cx="45" cy="258" rx="52" ry="24" fill="rgba(135,80,112,0.45)" />
        <ellipse cx="125" cy="254" rx="60" ry="22" fill="rgba(168,115,142,0.38)" />
        <ellipse cx="30" cy="252" rx="38" ry="18" fill="rgba(148,90,120,0.42)" />
        <ellipse cx="100" cy="264" rx="70" ry="16" fill="rgba(175,128,150,0.32)" />
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
  noteHeight = 190,
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
        boxShadow:
          "0 18px 44px rgba(40,20,35,0.26), 0 5px 14px rgba(40,20,35,0.14), inset 0 1px 2px rgba(200,170,185,0.35)",
        borderRadius: 3,
      }}
    >
      {/* Innere Rahmenlinie */}
      <div
        style={{
          padding: 5,
          background: "rgba(90,50,70,0.35)",
          boxShadow: "inset 0 2px 8px rgba(40,20,35,0.2)",
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
          {/* SVG Leinwand-Muster Overlay */}
          <svg
            aria-hidden
            style={{ position: "absolute", inset: 0, width: "100%", height: "100%", pointerEvents: "none" }}
            preserveAspectRatio="xMidYMid slice"
          >
            <defs>
              <filter id="linen-noise" x="0%" y="0%" width="100%" height="100%">
                <feTurbulence type="turbulence" baseFrequency="0.65 0.35" numOctaves="3" seed="5" result="noise" />
                <feColorMatrix type="saturate" values="0" in="noise" result="grayNoise" />
                <feBlend in="SourceGraphic" in2="grayNoise" mode="multiply" result="blended" />
                <feComponentTransfer in="blended">
                  <feFuncA type="linear" slope="0.18" />
                </feComponentTransfer>
              </filter>
              <pattern id="weave" x="0" y="0" width="6" height="6" patternUnits="userSpaceOnUse">
                <rect width="6" height="6" fill="none" />
                <line x1="0" y1="0" x2="6" y2="0" stroke="rgba(70,40,60,0.09)" strokeWidth="0.8" />
                <line x1="0" y1="3" x2="6" y2="3" stroke="rgba(70,40,60,0.06)" strokeWidth="0.5" />
                <line x1="0" y1="0" x2="0" y2="6" stroke="rgba(70,40,60,0.09)" strokeWidth="0.8" />
                <line x1="3" y1="0" x2="3" y2="6" stroke="rgba(70,40,60,0.06)" strokeWidth="0.5" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#weave)" />
            <rect width="100%" height="100%" filter="url(#linen-noise)" />
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

          {/* Rechtes Board: Contato | Sobre */}
          <SideFrame>
            <FramedNote href="#contato" label={t("hero.note.contato")} rotate={2} />
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
