"use client";

import Image from "next/image";
import { useT } from "@/lib/i18n";

const PIX_ACTIVE = false;

function LeafSmall() {
  return (
    <svg width="10" height="14" viewBox="0 0 10 14" fill="none" aria-hidden style={{ display: "inline", verticalAlign: "middle" }}>
      <path d="M5 13 C5 13 1 9.5 1 6 C1 2.8 2.9 1 5 1 C7.1 1 9 2.8 9 6 C9 9.5 5 13 5 13 Z" fill="#9b7080" opacity="0.5" />
      <line x1="5" y1="13" x2="5" y2="1" stroke="#9b7080" strokeWidth="0.7" opacity="0.35" />
    </svg>
  );
}

export default function CasosDeFamiliaSection() {
  const { t } = useT();

  return (
    <section
      id="casos-de-familia"
      className="wallpaper-botanical-dense relative overflow-hidden py-24 md:py-32"
    >
      <div className="relative z-10 max-w-6xl mx-auto px-6">
        {/* Section label */}
        <div className="flex items-center gap-4 mb-14 justify-center">
          <div
            className="h-px flex-1 max-w-xs"
            style={{
              background:
                "linear-gradient(to right, transparent, rgba(107,80,96,0.3))",
            }}
          />
          <span
            className="text-xs uppercase tracking-[0.3em]"
            style={{
              color: "#6b5060",
              fontFamily: "var(--font-inter)",
              fontWeight: 500,
              display: "inline-flex",
              alignItems: "center",
              gap: 6,
            }}
          >
            <LeafSmall />
            {t("casos.label")}
            <LeafSmall />
          </span>
          <div
            className="h-px flex-1 max-w-xs"
            style={{
              background:
                "linear-gradient(to left, transparent, rgba(107,80,96,0.3))",
            }}
          />
        </div>

        <div className="grid md:grid-cols-[auto_1fr] gap-14 md:gap-20 items-center">
          {/* Book cover */}
          <div className="flex justify-center md:justify-start">
            <div className="relative" style={{ width: "min(280px, 70vw)", height: "calc(min(280px, 70vw) * 1.5)" }}>
              <div
                aria-hidden
                className="absolute"
                style={{
                  bottom: -22,
                  left: "10%",
                  right: "10%",
                  height: 28,
                  background: "rgba(60,40,22,0.22)",
                  filter: "blur(18px)",
                  borderRadius: "50%",
                }}
              />
              <div
                className="relative w-full h-full overflow-hidden"
                style={{
                  borderRadius: 4,
                  boxShadow:
                    "0 30px 60px rgba(60,40,22,0.3), 0 10px 20px rgba(60,40,22,0.18), -6px 0 0 rgba(0,0,0,0.15)",
                }}
              >
                <Image
                  src="/images/casos-de-familia-cover.jpg"
                  alt="Casos de Família"
                  fill
                  sizes="280px"
                  style={{ objectFit: "cover" }}
                />
                <div
                  aria-hidden
                  style={{
                    position: "absolute",
                    inset: 0,
                    pointerEvents: "none",
                    background:
                      "linear-gradient(90deg, rgba(255,255,255,0.18) 0%, transparent 6%, transparent 94%, rgba(0,0,0,0.15) 100%)",
                  }}
                />
              </div>
            </div>
          </div>

          {/* Text */}
          <div style={{ background: "#f5ede8", borderRadius: 4, padding: "4px 8px", boxShadow: "0 0 8px 4px #f5ede8, 0 0 18px 10px rgba(245,237,232,0.85), 0 0 36px 18px rgba(245,237,232,0.45)", width: "fit-content", maxWidth: "100%" }}>
            {/* Sublabel */}
            <p
              className="text-xs uppercase tracking-[0.25em] mb-5"
              style={{
                color: "#9b7080",
                fontFamily: "var(--font-inter)",
                fontWeight: 500,
              }}
            >
              {t("casos.sublabel")}
            </p>

            <h2
              className="mb-8 leading-tight"
              style={{
                fontFamily: "var(--font-playfair)",
                fontSize: "clamp(2rem, 5vw, 3.5rem)",
                fontWeight: 600,
                color: "#3d2b35",
                letterSpacing: "0.005em",
              }}
            >
              Casos de{" "}
              <em style={{ fontStyle: "italic", color: "#6b5060" }}>
                Família
              </em>
            </h2>

            <p
              className="text-base md:text-lg leading-loose mb-3"
              style={{ color: "#6b5060", maxWidth: 520 }}
            >
              {t("casos.p1")}
            </p>
            <p
              className="text-base leading-loose mb-3"
              style={{ color: "#6b5060", maxWidth: 520 }}
            >
              {t("casos.p2")}
            </p>
            <p
              className="text-base leading-loose mb-3"
              style={{ color: "#6b5060", maxWidth: 520 }}
            >
              {t("casos.p3")}
            </p>
            <p
              className="text-base leading-loose mb-5"
              style={{ color: "#6b5060", maxWidth: 520 }}
            >
              {t("casos.p4")}
            </p>

            {/* Badge */}
            <div className="flex flex-wrap items-center gap-4">
              <span
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs tracking-wide"
                style={{
                  background: "rgba(139,111,77,0.12)",
                  color: "#6b5060",
                  fontFamily: "var(--font-inter)",
                  fontWeight: 500,
                  border: "1px solid rgba(139,111,77,0.25)",
                }}
              >
                <span style={{ opacity: 0.7 }}>●</span>
                {PIX_ACTIVE
                  ? t("casos.badge.active") || "Disponível por tempo limitado"
                  : t("casos.badge")}
              </span>
            </div>

            {/* Pix CTA — only shown when PIX_ACTIVE */}
            {PIX_ACTIVE && (
              <div className="mt-6">
                <button
                  type="button"
                  disabled
                  className="px-6 py-3 rounded-full text-sm tracking-wide"
                  style={{
                    background: "#7a5468",
                    color: "#faf6ed",
                    fontWeight: 500,
                    boxShadow: "0 6px 16px rgba(122,84,104,0.3)",
                    opacity: 0.6,
                    cursor: "not-allowed",
                  }}
                >
                  {t("casos.cta")} — Pix
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
