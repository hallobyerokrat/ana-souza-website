"use client";

import Image from "next/image";
import Link from "next/link";
import { useT } from "@/lib/i18n";

const CATEGORIES = [
  { key: "entre-flores", label: { pt: "Entre Flores e Algodão", de: "Entre Flores e Algodão" }, note: { pt: "Romance · Em breve", de: "Roman · Bald erhältlich" } },
  { key: "poesia", label: { pt: "Poesia", de: "Poesie" }, note: { pt: "Coletâneas", de: "Anthologien" } },
  { key: "contos", label: { pt: "Contos", de: "Erzählungen" }, note: { pt: "Casos de Família · Mundo Fantástico", de: "Casos de Família · Mundo Fantástico" } },
  { key: "romance", label: { pt: "Romance", de: "Roman" }, note: { pt: "Literatura contemporânea", de: "Zeitgenössische Literatur" } },
];

function BookStackVisual() {
  return (
    <div className="relative flex justify-center items-end" style={{ height: 280, width: "min(280px, 80vw)" }}>
      {/* Stacked book covers (decorative) */}
      <div
        className="absolute"
        style={{
          bottom: 0,
          left: "50%",
          transform: "translateX(-50%) rotate(-6deg)",
          width: 140,
          height: 190,
          borderRadius: 3,
          overflow: "hidden",
          boxShadow: "0 8px 24px rgba(60,40,22,0.2)",
        }}
      >
        <Image src="/images/casos-de-familia-cover.jpg" alt="" fill style={{ objectFit: "cover" }} sizes="140px" />
      </div>
      <div
        className="absolute"
        style={{
          bottom: 20,
          left: "50%",
          transform: "translateX(-30%) rotate(2deg)",
          width: 140,
          height: 190,
          borderRadius: 3,
          overflow: "hidden",
          boxShadow: "0 8px 24px rgba(60,40,22,0.18)",
        }}
      >
        <Image src="/images/entre-flores-cover-2.jpg" alt="" fill style={{ objectFit: "cover" }} sizes="140px" />
      </div>
      <div
        className="absolute"
        style={{
          bottom: 40,
          left: "50%",
          transform: "translateX(-68%) rotate(-2deg)",
          width: 130,
          height: 175,
          borderRadius: 3,
          overflow: "hidden",
          boxShadow: "0 8px 24px rgba(60,40,22,0.15)",
        }}
      >
        <Image src="/images/casos-de-familia-cover.jpg" alt="" fill style={{ objectFit: "cover" }} sizes="130px" />
      </div>
    </div>
  );
}

export default function LiteraturaContemporaneaSection() {
  const { t, locale } = useT();

  return (
    <section
      id="contemporanea"
      className="relative overflow-hidden py-20 md:py-28"
      style={{ background: "#f0e6d3" }}
    >
      <div className="relative z-10 max-w-6xl mx-auto px-6">
        <div className="grid md:grid-cols-[auto_1fr] gap-14 md:gap-20 items-center">
          {/* Left: book stack visual */}
          <div className="flex justify-center md:justify-start order-2 md:order-1">
            <BookStackVisual />
          </div>

          {/* Right: text */}
          <div className="order-1 md:order-2 relative">
            {/* Handwritten annotation */}
            <div
              aria-hidden
              className="hidden md:block absolute"
              style={{
                right: -16,
                top: "10%",
                fontFamily: "var(--font-caveat)",
                fontSize: "1.2rem",
                color: "#c1654a",
                lineHeight: 1.5,
                whiteSpace: "pre-line",
                textAlign: "right",
                opacity: 0.8,
                fontWeight: 500,
                maxWidth: 130,
              }}
            >
              {t("contemp.annotation")}
              {"\n♡"}
            </div>

            <span
              className="inline-block mb-2 text-xs uppercase tracking-[0.3em]"
              style={{ color: "#7a5468", fontFamily: "var(--font-inter)", fontWeight: 600 }}
            >
              📖
            </span>
            <h2
              className="mb-2 leading-tight"
              style={{
                fontFamily: "var(--font-playfair)",
                fontSize: "clamp(1.7rem, 3.5vw, 2.6rem)",
                fontWeight: 700,
                color: "#2a1a22",
              }}
            >
              {t("contemp.label")}
            </h2>
            <p
              className="mb-6 text-xs uppercase tracking-[0.2em]"
              style={{ color: "#9b7060", fontFamily: "var(--font-inter)" }}
            >
              {t("contemp.subtitle")}
            </p>

            <p className="mb-7 text-sm leading-relaxed" style={{ color: "#5a3d4a", maxWidth: 400 }}>
              {t("contemp.desc")}
            </p>

            {/* Category list */}
            <div className="mb-8" style={{ maxWidth: 380 }}>
              {CATEGORIES.map((cat, i) => (
                <div
                  key={cat.key}
                  className="flex items-center justify-between py-3"
                  style={{
                    borderTop: i === 0 ? "1px solid rgba(90,61,74,0.15)" : undefined,
                    borderBottom: "1px solid rgba(90,61,74,0.15)",
                  }}
                >
                  <span style={{ fontFamily: "var(--font-playfair)", color: "#2a1a22", fontSize: "0.9rem", fontWeight: 600 }}>
                    {cat.label[locale]}
                  </span>
                  <span style={{ fontFamily: "var(--font-inter)", color: "#9b7060", fontSize: "0.7rem" }}>
                    {cat.note[locale]}
                  </span>
                </div>
              ))}
            </div>

            {/* CTAs */}
            <div className="flex flex-wrap gap-3">
              <Link
                href="/loja"
                className="inline-block px-5 py-2.5 text-xs font-semibold tracking-wide rounded"
                style={{
                  background: "#7a5468",
                  color: "#fff",
                  fontFamily: "var(--font-inter)",
                }}
              >
                {t("contemp.cta1")}
              </Link>
              <Link
                href="/loja"
                className="inline-block px-5 py-2.5 text-xs font-semibold tracking-wide rounded"
                style={{
                  border: "1.5px solid rgba(122,84,104,0.4)",
                  color: "#7a5468",
                  fontFamily: "var(--font-inter)",
                }}
              >
                {t("contemp.cta2")}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
