"use client";

import Image from "next/image";
import { useT } from "@/lib/i18n";

export default function CeuDeBrincarSection() {
  const { t } = useT();

  return (
    <section
      id="ceu-de-brincar"
      className="wallpaper-botanical-dense relative overflow-hidden py-24 md:py-32"
    >
      {/* Soft vignette */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "linear-gradient(to bottom, rgba(253,251,246,1) 0%, rgba(253,251,246,0) 8%, rgba(253,251,246,0) 92%, rgba(253,251,246,1) 100%)",
        }}
      />

      {/* Divider between the two book sections */}
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
            style={{
              background:
                "linear-gradient(to right, transparent, rgba(90,64,50,0.3))",
            }}
          />
          <span
            className="text-xs uppercase tracking-[0.3em]"
            style={{
              color: "#5a4032",
              fontFamily: "var(--font-inter)",
              fontWeight: 500,
            }}
          >
            {t("ceu.label")}
          </span>
          <div
            className="h-px flex-1 max-w-xs"
            style={{
              background:
                "linear-gradient(to left, transparent, rgba(90,64,50,0.3))",
            }}
          />
        </div>

        <div className="grid md:grid-cols-[1fr_auto] gap-14 md:gap-20 items-center">
          {/* Text (left on desktop) */}
          <div className="md:order-1 order-2">
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
              {t("ceu.title.pre")}{" "}
              <em style={{ fontStyle: "italic", color: "#5a4032" }}>
                {t("ceu.title.em")}
              </em>
            </h2>

            <p
              className="text-base md:text-lg leading-loose mb-4"
              style={{ color: "#5a4032", maxWidth: 520 }}
            >
              {t("ceu.p1")}
            </p>

            <p
              className="text-base leading-loose mb-4"
              style={{ color: "rgba(90,64,50,0.85)", maxWidth: 520 }}
            >
              {t("ceu.p2")}
            </p>

            <p
              className="text-base leading-loose mb-10"
              style={{ color: "rgba(90,64,50,0.75)", maxWidth: 520 }}
            >
              {t("ceu.p3")}
            </p>

            {/* Buy buttons */}
            <div className="flex flex-wrap gap-3">
              <a
                href="#"
                className="px-6 py-3 rounded-full text-sm tracking-wide transition-all duration-300 hover:-translate-y-0.5"
                style={{
                  background: "#6d7e5f",
                  color: "#faf6ed",
                  fontWeight: 500,
                  boxShadow: "0 6px 16px rgba(109,126,95,0.3)",
                }}
              >
                {t("ceu.cta.amazonBr")}
              </a>
              <a
                href="#"
                className="px-6 py-3 rounded-full text-sm tracking-wide transition-all duration-300 hover:-translate-y-0.5"
                style={{
                  border: "1.5px solid rgba(61,42,26,0.35)",
                  color: "#3d2a1a",
                  fontWeight: 500,
                }}
              >
                {t("ceu.cta.amazonDe")}
              </a>
              <a
                href="#"
                className="px-6 py-3 rounded-full text-sm tracking-wide transition-all duration-300 hover:-translate-y-0.5"
                style={{
                  color: "#5a4032",
                  fontWeight: 500,
                }}
              >
                {t("ceu.cta.ebook")}
              </a>
            </div>
          </div>

          {/* Book cover (right on desktop) */}
          <div className="md:order-2 order-1 flex justify-center md:justify-end">
            <div className="relative" style={{ width: 280, height: 420 }}>
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
                  src="/images/ceu-de-brincar-cover.png"
                  alt="Céu de Brincar"
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
        </div>
      </div>
    </section>
  );
}
