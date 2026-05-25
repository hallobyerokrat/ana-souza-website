"use client";

import Image from "next/image";
import { useT } from "@/lib/i18n";

export default function EntreFloresSection() {
  const { t } = useT();

  return (
    <section
      id="entre-flores"
      className="wallpaper-botanical-dense relative overflow-hidden py-24 md:py-32"
    >

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
          {/* Book cover */}
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
                className="relative w-full h-full overflow-hidden"
                style={{
                  borderRadius: 4,
                  boxShadow: "0 30px 60px rgba(60,40,22,0.22), 0 10px 20px rgba(60,40,22,0.12), -6px 0 0 rgba(0,0,0,0.10)",
                }}
              >
                <Image
                  src="/images/entre-flores-cover-2.jpg"
                  alt="Entre Flores e Algodão"
                  fill
                  sizes="280px"
                  style={{ objectFit: "cover" }}
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
