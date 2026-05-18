"use client";

import { useT } from "@/lib/i18n";

export default function EntreFloresSection() {
  const { t } = useT();

  return (
    <section
      id="entre-flores"
      className="wallpaper-botanical-dense relative overflow-hidden py-24 md:py-32"
    >
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "linear-gradient(to bottom, rgba(253,251,246,1) 0%, rgba(253,251,246,0) 8%, rgba(253,251,246,0) 92%, rgba(253,251,246,1) 100%)",
        }}
      />
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 pointer-events-none"
        style={{
          width: "min(80%, 640px)",
          height: 1,
          background:
            "linear-gradient(to right, transparent, rgba(90,64,50,0.25), transparent)",
        }}
      />

      <div className="relative z-10 max-w-6xl mx-auto px-6">
        {/* Section label */}
        <div className="flex items-center gap-4 mb-14 justify-center">
          <div
            className="h-px flex-1 max-w-xs"
            style={{ background: "linear-gradient(to right, transparent, rgba(90,64,50,0.3))" }}
          />
          <span
            className="text-xs uppercase tracking-[0.3em]"
            style={{ color: "#5a4032", fontFamily: "var(--font-inter)", fontWeight: 500 }}
          >
            {t("flores.label")}
          </span>
          <div
            className="h-px flex-1 max-w-xs"
            style={{ background: "linear-gradient(to left, transparent, rgba(90,64,50,0.3))" }}
          />
        </div>

        <div className="grid md:grid-cols-[auto_1fr] gap-14 md:gap-20 items-center">
          {/* Coming-soon cover placeholder */}
          <div className="flex justify-center md:justify-start">
            <div className="relative" style={{ width: 280, height: 420 }}>
              <div
                aria-hidden
                className="absolute"
                style={{
                  bottom: -22,
                  left: "10%",
                  right: "10%",
                  height: 28,
                  background: "rgba(60,40,22,0.18)",
                  filter: "blur(18px)",
                  borderRadius: "50%",
                }}
              />
              <div
                className="relative w-full h-full overflow-hidden flex flex-col items-center justify-between"
                style={{
                  borderRadius: 4,
                  boxShadow:
                    "0 30px 60px rgba(60,40,22,0.22), 0 10px 20px rgba(60,40,22,0.12), -6px 0 0 rgba(0,0,0,0.10)",
                  background: "#f5ede0",
                  backgroundImage:
                    "radial-gradient(ellipse at 20% 10%, rgba(180,140,80,0.2) 0%, transparent 40%), radial-gradient(ellipse at 80% 90%, rgba(140,100,60,0.22) 0%, transparent 40%), radial-gradient(ellipse at 50% 50%, rgba(210,180,130,0.08) 0%, transparent 70%)",
                  padding: "2.2rem 1.6rem 1.8rem",
                }}
              >
                {/* Top ornament */}
                <div style={{ width: "100%", textAlign: "center" }}>
                  <svg width="60" height="20" viewBox="0 0 60 20" fill="none" style={{ opacity: 0.4 }}>
                    <line x1="0" y1="10" x2="22" y2="10" stroke="#5a3e28" strokeWidth="0.8"/>
                    <circle cx="30" cy="10" r="3.5" fill="none" stroke="#5a3e28" strokeWidth="0.8"/>
                    <circle cx="30" cy="10" r="1.2" fill="#5a3e28" opacity="0.6"/>
                    <line x1="38" y1="10" x2="60" y2="10" stroke="#5a3e28" strokeWidth="0.8"/>
                  </svg>
                </div>

                {/* Main title block */}
                <div style={{ textAlign: "center", flex: 1, display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", gap: "0.9rem" }}>
                  <p
                    style={{
                      fontFamily: "var(--font-playfair)",
                      fontSize: "1.55rem",
                      fontWeight: 400,
                      color: "#3d2a1a",
                      lineHeight: 1.25,
                      letterSpacing: "0.02em",
                      fontStyle: "italic",
                    }}
                  >
                    Entre Flores e
                  </p>
                  <p
                    style={{
                      fontFamily: "var(--font-playfair)",
                      fontSize: "2.1rem",
                      fontWeight: 700,
                      color: "#2c1a0e",
                      lineHeight: 1,
                      letterSpacing: "0.04em",
                      textTransform: "uppercase",
                    }}
                  >
                    Algodão
                  </p>

                  {/* Decorative rule */}
                  <div style={{ display: "flex", alignItems: "center", gap: "0.5rem", width: "100%", padding: "0.2rem 0" }}>
                    <div style={{ flex: 1, height: 1, background: "rgba(90,62,40,0.3)" }} />
                    <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                      <path d="M6 1 L7.5 4.5 L11 6 L7.5 7.5 L6 11 L4.5 7.5 L1 6 L4.5 4.5 Z" fill="#8a6040" opacity="0.5"/>
                    </svg>
                    <div style={{ flex: 1, height: 1, background: "rgba(90,62,40,0.3)" }} />
                  </div>

                  <p
                    style={{
                      fontFamily: "var(--font-playfair)",
                      fontSize: "0.72rem",
                      fontWeight: 400,
                      color: "#6b4a2b",
                      letterSpacing: "0.18em",
                      textTransform: "uppercase",
                    }}
                  >
                    Ana Souza de Magalhães
                  </p>
                </div>

                {/* Status stamp at bottom */}
                <div
                  style={{
                    border: "1.5px solid rgba(90,62,40,0.35)",
                    borderRadius: 2,
                    padding: "0.3rem 0.9rem",
                    textAlign: "center",
                  }}
                >
                  <p
                    style={{
                      fontFamily: "var(--font-inter)",
                      fontSize: "0.58rem",
                      letterSpacing: "0.22em",
                      textTransform: "uppercase",
                      color: "#8a6040",
                      fontWeight: 500,
                    }}
                  >
                    {t("flores.status")}
                  </p>
                </div>

                {/* Spine shadow */}
                <div
                  aria-hidden
                  style={{
                    position: "absolute",
                    inset: 0,
                    pointerEvents: "none",
                    background:
                      "linear-gradient(90deg, rgba(255,255,255,0.14) 0%, transparent 5%, transparent 95%, rgba(0,0,0,0.1) 100%)",
                  }}
                />
              </div>
            </div>
          </div>

          {/* Text */}
          <div>
            <h2
              className="mb-6 leading-tight"
              style={{
                fontFamily: "var(--font-playfair)",
                fontSize: "clamp(2rem, 5vw, 3.5rem)",
                fontWeight: 600,
                color: "#3d2a1a",
                letterSpacing: "0.005em",
              }}
            >
              {t("flores.title.pre")}{" "}
              <em style={{ fontStyle: "italic", color: "#5a4032" }}>
                {t("flores.title.em")}
              </em>
            </h2>

            <p
              className="text-base md:text-lg leading-loose mb-4"
              style={{ color: "#5a4032", maxWidth: 520 }}
            >
              {t("flores.p1")}
            </p>
            <p
              className="text-base leading-loose mb-4"
              style={{ color: "rgba(90,64,50,0.85)", maxWidth: 520 }}
            >
              {t("flores.p2")}
            </p>
            <p
              className="text-base leading-loose mb-10"
              style={{ color: "rgba(90,64,50,0.75)", maxWidth: 520 }}
            >
              {t("flores.p3")}
            </p>

            {/* Status badge */}
            <div className="flex flex-wrap items-center gap-4 mb-6">
              <span
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs tracking-wide"
                style={{
                  background: "rgba(139,111,77,0.10)",
                  color: "#6b4a2b",
                  fontFamily: "var(--font-inter)",
                  fontWeight: 500,
                  border: "1px solid rgba(139,111,77,0.22)",
                }}
              >
                <span style={{ opacity: 0.6 }}>◌</span>
                {t("flores.status")}
              </span>
            </div>

            <a
              href="mailto:anasouzademagalhaes@gmail.com?subject=Entre%20Flores%20e%20Alg%C3%B5ao%20%E2%80%94%20lan%C3%A7amento"
              className="inline-block px-8 py-3.5 rounded-full text-sm tracking-wide transition-all duration-300 hover:-translate-y-0.5"
              style={{
                background: "#6d7e5f",
                color: "#faf6ed",
                fontWeight: 500,
                boxShadow: "0 6px 18px rgba(109,126,95,0.3)",
              }}
            >
              {t("flores.cta")}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
