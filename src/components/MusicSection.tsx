"use client";

import { useT } from "@/lib/i18n";

// Replace these with real URLs when Ana sends them
const SPOTIFY_URL = "#";
const YOUTUBE_URL = "#";
const OTHER_PLATFORMS_URL = "#";

function VinylSVG() {
  return (
    <svg viewBox="0 0 200 200" width="200" height="200" aria-hidden>
      <circle cx="100" cy="100" r="98" fill="#1a0e1a" stroke="#3d2040" strokeWidth="2" />
      <circle cx="100" cy="100" r="75" fill="#120a12" />
      <circle cx="100" cy="100" r="60" fill="#1a0e1a" />
      <circle cx="100" cy="100" r="45" fill="#120a12" />
      <circle cx="100" cy="100" r="30" fill="#1a0e1a" />
      <circle cx="100" cy="100" r="18" fill="#c1654a" opacity="0.9" />
      <circle cx="100" cy="100" r="5" fill="#1a0e1a" />
      {[0,30,60,90,120,150,180,210,240,270,300,330].map((deg, i) => (
        <line
          key={i}
          x1="100" y1="100"
          x2={100 + 90 * Math.cos((deg * Math.PI) / 180)}
          y2={100 + 90 * Math.sin((deg * Math.PI) / 180)}
          stroke="#2a1a2a"
          strokeWidth="0.5"
          opacity="0.4"
        />
      ))}
      {[35,42,50,58,65,72,80,88].map((r, i) => (
        <circle key={i} cx="100" cy="100" r={r} fill="none" stroke="#2a1a2a" strokeWidth="0.4" opacity="0.3" />
      ))}
    </svg>
  );
}

function SpotifyIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.521 17.34c-.24.359-.66.48-1.021.24-2.82-1.74-6.36-2.101-10.561-1.141-.418.122-.779-.179-.899-.539-.12-.421.18-.78.54-.9 4.56-1.021 8.52-.6 11.64 1.32.42.18.479.659.301 1.02zm1.44-3.3c-.301.42-.841.6-1.262.3-3.239-1.98-8.159-2.58-11.939-1.38-.479.12-1.02-.12-1.14-.6-.12-.48.12-1.021.6-1.141C9.6 9.9 15 10.561 18.72 12.84c.361.181.54.78.241 1.2zm.12-3.36C15.24 8.4 8.82 8.16 5.16 9.301c-.6.179-1.2-.181-1.38-.721-.18-.601.18-1.2.72-1.381 4.26-1.26 11.28-1.02 15.721 1.621.539.3.719 1.02.419 1.56-.299.421-1.02.599-1.559.3z" />
    </svg>
  );
}

function YouTubeIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
      <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
    </svg>
  );
}

export default function MusicSection() {
  const { t } = useT();

  return (
    <section
      id="musica"
      className="relative overflow-hidden py-20 md:py-28"
      style={{ background: "#1e1228" }}
    >
      {/* Subtle texture */}
      <div
        aria-hidden
        className="absolute inset-0 pointer-events-none"
        style={{ background: "url('/botanical-1.svg') repeat", opacity: 0.04 }}
      />

      <div className="relative z-10 max-w-6xl mx-auto px-6">
        <div className="grid md:grid-cols-[auto_1fr] gap-14 md:gap-20 items-center">
          {/* Left: vinyl + author photo */}
          <div className="flex justify-center md:justify-start">
            <div className="relative flex items-center justify-center" style={{ width: "min(280px, 70vw)", height: "min(280px, 70vw)" }}>
              <VinylSVG />
            </div>
          </div>

          {/* Right: text */}
          <div className="relative">
            {/* Handwritten annotation */}
            <div
              aria-hidden
              className="hidden md:block absolute"
              style={{
                right: -16,
                top: "5%",
                fontFamily: "var(--font-caveat)",
                fontSize: "1.2rem",
                color: "#c1654a",
                lineHeight: 1.5,
                whiteSpace: "pre-line",
                textAlign: "right",
                opacity: 0.75,
                fontWeight: 500,
                maxWidth: 120,
              }}
            >
              {t("musica.annotation")}
              {"\n♡"}
            </div>

            <span
              className="inline-block mb-3 text-xs uppercase tracking-[0.3em]"
              style={{
                color: "#c1654a",
                fontFamily: "var(--font-inter)",
                fontWeight: 600,
                background: "rgba(193,101,74,0.12)",
                padding: "3px 10px",
                borderRadius: 20,
              }}
            >
              {t("musica.label")}
            </span>

            <h2
              className="mb-4 leading-tight"
              style={{
                fontFamily: "var(--font-playfair)",
                fontSize: "clamp(2rem, 4vw, 3rem)",
                fontWeight: 700,
                color: "#f5ede4",
                letterSpacing: "-0.01em",
              }}
            >
              {t("musica.title")}
            </h2>

            <p className="mb-8 text-sm leading-relaxed" style={{ color: "#b89aaa", maxWidth: 400 }}>
              {t("musica.desc")}
            </p>

            {/* Streaming CTAs */}
            <div className="flex flex-col gap-3" style={{ maxWidth: 340 }}>
              <a
                href={SPOTIFY_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 px-5 py-3 rounded text-sm font-semibold tracking-wide"
                style={{
                  background: "#1DB954",
                  color: "#fff",
                  fontFamily: "var(--font-inter)",
                  cursor: "pointer",
                }}
              >
                <SpotifyIcon />
                {t("musica.spotify")}
              </a>
              <a
                href={YOUTUBE_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 px-5 py-3 rounded text-sm font-semibold tracking-wide"
                style={{
                  background: "#FF0000",
                  color: "#fff",
                  fontFamily: "var(--font-inter)",
                  cursor: "pointer",
                }}
              >
                <YouTubeIcon />
                {t("musica.youtube")}
              </a>
              <a
                href={OTHER_PLATFORMS_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center px-5 py-3 rounded text-sm tracking-wide"
                style={{
                  border: "1px solid rgba(245,237,228,0.25)",
                  color: "#d4b8c4",
                  fontFamily: "var(--font-inter)",
                  cursor: "pointer",
                }}
              >
                {t("musica.other")}
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
