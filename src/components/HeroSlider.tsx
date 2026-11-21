"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useT } from "@/lib/i18n";

type Slide = {
  slug: string;
  label: "launch" | "featured";
  cover: string;
  alt: string;
  tagline: { pt: string; de: string };
  annotation: { pt: string; de: string };
  whatsapp: string;
  bg?: string;
};

const SLIDES: Slide[] = [
  {
    slug: "tanta-docura-tartaruga",
    label: "launch",
    cover: "/images/tanta-docura-tartaruga-cover.jpg",
    alt: "Tanta Doçura, Tartaruga!",
    tagline: {
      pt: "Uma história sobre amizade, paciência e as belezas de ser quem se é.",
      de: "Eine Geschichte über Freundschaft, Geduld und die Schönheit, man selbst zu sein.",
    },
    annotation: {
      pt: "Pequenas histórias,\ngrandes descobertas. ♡",
      de: "Kleine Geschichten,\ngroße Entdeckungen. ♡",
    },
    whatsapp: "https://wa.me/491709250795",
    bg: "/images/tartaruga-hero-bg.jpg",
  },
  {
    slug: "ceu-de-brincar",
    label: "featured",
    cover: "/images/ceu-de-brincar-cover.png",
    alt: "Céu de Brincar",
    tagline: {
      pt: "Um convite a redescobrir a infância através das nuvens — dragões, bailarinas e sonhos.",
      de: "Eine Einladung, die Kindheit durch die Wolken neu zu entdecken.",
    },
    annotation: {
      pt: "Imaginar\nnão tem limite. ♡",
      de: "Fantasie\nkennt keine Grenzen. ♡",
    },
    whatsapp: "https://wa.me/491709250795",
    bg: "/images/clouds-hero-bg.jpg",
  },
  {
    slug: "spielhimmel",
    label: "featured",
    cover: "/images/spielhimmel-cover.jpg",
    alt: "Spielhimmel",
    tagline: {
      pt: "O que se esconde atrás das nuvens? Um convite a olhar o mundo com os olhos abertos.",
      de: "Was verbirgt sich hinter den Wolken? Ein Kinderbuch voller Neugier und Fantasie.",
    },
    annotation: {
      pt: "O céu é\nnossa tela. ♡",
      de: "Der Himmel\nist unsere Leinwand. ♡",
    },
    whatsapp: "https://wa.me/491709250795",
    bg: "/images/clouds-hero-bg.jpg",
  },
];

const SLIDE_TITLES: Record<string, { pt: string; de: string }> = {
  "tanta-docura-tartaruga": { pt: "Tanta Doçura, Tartaruga!", de: "Tanta Doçura, Tartaruga!" },
  "ceu-de-brincar": { pt: "Céu de Brincar", de: "Céu de Brincar" },
  spielhimmel: { pt: "Spiel Himmel", de: "Spiel Himmel" },
};

export default function HeroSlider() {
  const { t, locale } = useT();
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);
  const trackRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (paused) return;
    const id = setInterval(() => {
      setActive((a) => (a + 1) % SLIDES.length);
    }, 5000);
    return () => clearInterval(id);
  }, [paused]);

  useEffect(() => {
    if (!trackRef.current) return;
    trackRef.current.scrollTo({ left: active * trackRef.current.clientWidth, behavior: "smooth" });
  }, [active]);

  const slide = SLIDES[active];
  const title = SLIDE_TITLES[slide.slug][locale];
  const tagline = slide.tagline[locale];
  const annotation = slide.annotation[locale];

  return (
    <section
      id="hero"
      className="relative overflow-hidden"
      style={{ minHeight: "100svh", background: "#f5ede4" }}
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      {/* Subtle botanical overlay */}
      <div
        aria-hidden
        className="absolute inset-0 pointer-events-none"
        style={{ background: "url('/botanical-1.svg') repeat", opacity: 0.07 }}
      />

      {/* Slide track (CSS scroll-snap) */}
      <div
        ref={trackRef}
        className="flex w-full"
        style={{
          minHeight: "100svh",
          overflowX: "hidden",
          scrollSnapType: "x mandatory",
          scrollBehavior: "smooth",
        }}
      >
        {SLIDES.map((s, i) => (
          <div
            key={s.slug}
            style={{
              minWidth: "100%",
              minHeight: "100svh",
              scrollSnapAlign: "start",
              display: "flex",
              alignItems: "center",
              position: "relative",
              ...(s.bg ? {
                backgroundImage: `url('${s.bg}')`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              } : {}),
            }}
          >
            <div className="relative z-10 max-w-6xl mx-auto px-6 w-full py-28 md:py-36 grid md:grid-cols-2 gap-12 md:gap-20 items-center" style={{ position: "relative", zIndex: 1 }}>
              {/* Text — jedes Element im eigenen Kästchen */}
              <div className="flex flex-col gap-3 items-start">
                <span
                  className="inline-block text-xs uppercase tracking-[0.3em]"
                  style={{
                    fontFamily: "var(--font-inter)",
                    fontWeight: 600,
                    background: "rgba(45,90,61,0.88)",
                    color: "#fff",
                    padding: "5px 14px",
                    borderRadius: 20,
                  }}
                >
                  {t(s.label === "launch" ? "hero.slide.launch" : "hero.slide.featured")}
                </span>

                <h1
                  className="leading-tight"
                  style={{
                    fontFamily: "var(--font-playfair)",
                    fontSize: "clamp(2.2rem, 5vw, 3.6rem)",
                    fontWeight: 700,
                    color: "#2a1a22",
                    letterSpacing: "-0.01em",
                    background: "rgba(250,246,237,0.88)",
                    backdropFilter: "blur(8px)",
                    WebkitBackdropFilter: "blur(8px)",
                    padding: "8px 16px",
                    borderRadius: 8,
                  }}
                >
                  {SLIDE_TITLES[s.slug][locale]}
                </h1>

                <p
                  className="text-base leading-relaxed"
                  style={{
                    color: "#2a1a22",
                    maxWidth: 420,
                    background: "rgba(250,246,237,0.82)",
                    backdropFilter: "blur(8px)",
                    WebkitBackdropFilter: "blur(8px)",
                    padding: "8px 14px",
                    borderRadius: 8,
                  }}
                >
                  {s.tagline[locale]}
                </p>

                <div className="flex flex-wrap gap-3">
                  <Link
                    href={`/loja/${s.slug}`}
                    className="inline-block px-6 py-3 text-sm font-semibold tracking-wide rounded"
                    style={{
                      background: "#2d5a3d",
                      color: "#fff",
                      fontFamily: "var(--font-inter)",
                    }}
                  >
                    {t("hero.slide.cta.book")}
                  </Link>
                  <a
                    href={s.whatsapp}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-6 py-3 text-sm font-semibold tracking-wide rounded"
                    style={{
                      background: "#25D366",
                      color: "#fff",
                      fontFamily: "var(--font-inter)",
                    }}
                  >
                    <WhatsAppIcon />
                    {t("hero.slide.cta.whatsapp")}
                  </a>
                </div>
              </div>

              {/* Cover + annotation */}
              <div className="flex justify-center md:justify-end relative">
                <div
                  className="relative"
                  style={{ width: "min(320px, 75vw)", height: "min(380px, 90vw)" }}
                >
                  <div
                    aria-hidden
                    className="absolute"
                    style={{
                      bottom: -20,
                      left: "10%",
                      right: "10%",
                      height: 24,
                      background: "rgba(60,40,22,0.15)",
                      filter: "blur(16px)",
                      borderRadius: "50%",
                    }}
                  />
                  <div
                    className="relative w-full h-full overflow-hidden"
                    style={{
                      borderRadius: 4,
                      boxShadow: "0 0 0 2px rgba(160,140,80,0.25), 0 28px 56px rgba(60,40,22,0.22), 0 8px 18px rgba(60,40,22,0.12)",
                    }}
                  >
                    <Image
                      src={s.cover}
                      alt={s.alt}
                      fill
                      style={{ objectFit: "cover" }}
                      sizes="320px"
                      priority={i === 0}
                    />
                  </div>
                </div>

                {/* Handwritten annotation */}
                <div
                  aria-hidden
                  className="absolute hidden md:block"
                  style={{
                    right: -10,
                    top: "20%",
                    fontFamily: "var(--font-caveat)",
                    fontSize: "clamp(1.1rem, 1.8vw, 1.4rem)",
                    color: "#c1654a",
                    lineHeight: 1.4,
                    whiteSpace: "pre-line",
                    textAlign: "right",
                    opacity: 0.85,
                    fontWeight: 500,
                  }}
                >
                  {s.annotation[locale]}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Dots */}
      <div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-2"
        style={{ zIndex: 10 }}
      >
        {SLIDES.map((_, i) => (
          <button
            key={i}
            onClick={() => setActive(i)}
            aria-label={`Slide ${i + 1}`}
            style={{
              width: i === active ? 24 : 8,
              height: 8,
              borderRadius: 4,
              background: i === active ? "#2d5a3d" : "rgba(45,90,61,0.3)",
              border: "none",
              cursor: "pointer",
              transition: "all 0.3s ease",
              padding: 0,
            }}
          />
        ))}
      </div>

      {/* Arrows */}
      <button
        onClick={() => setActive((a) => (a - 1 + SLIDES.length) % SLIDES.length)}
        aria-label="Slide anterior"
        className="absolute left-4 top-1/2 -translate-y-1/2 hidden md:flex items-center justify-center"
        style={{
          width: 40,
          height: 40,
          borderRadius: "50%",
          background: "rgba(255,255,255,0.7)",
          border: "1px solid rgba(45,90,61,0.2)",
          cursor: "pointer",
          zIndex: 10,
          backdropFilter: "blur(4px)",
        }}
      >
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
          <path d="M10 3L5 8l5 5" stroke="#2d5a3d" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </button>
      <button
        onClick={() => setActive((a) => (a + 1) % SLIDES.length)}
        aria-label="Próximo slide"
        className="absolute right-4 top-1/2 -translate-y-1/2 hidden md:flex items-center justify-center"
        style={{
          width: 40,
          height: 40,
          borderRadius: "50%",
          background: "rgba(255,255,255,0.7)",
          border: "1px solid rgba(45,90,61,0.2)",
          cursor: "pointer",
          zIndex: 10,
          backdropFilter: "blur(4px)",
        }}
      >
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
          <path d="M6 3l5 5-5 5" stroke="#2d5a3d" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </button>
    </section>
  );
}

function WhatsAppIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
      <path d="M12 0C5.373 0 0 5.373 0 12c0 2.108.549 4.088 1.508 5.81L0 24l6.348-1.484A11.951 11.951 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.818a9.818 9.818 0 01-5.007-1.368l-.36-.214-3.716.869.898-3.6-.235-.371A9.818 9.818 0 1112 21.818z" />
    </svg>
  );
}
