"use client";

import Image from "next/image";
import { useT } from "@/lib/i18n";

function LeafSmall() {
  return (
    <svg width="10" height="14" viewBox="0 0 10 14" fill="none" aria-hidden style={{ display: "inline", verticalAlign: "middle" }}>
      <path d="M5 13 C5 13 1 9.5 1 6 C1 2.8 2.9 1 5 1 C7.1 1 9 2.8 9 6 C9 9.5 5 13 5 13 Z" fill="#7a5468" opacity="0.6" />
      <line x1="5" y1="13" x2="5" y2="1" stroke="#7a5468" strokeWidth="0.7" opacity="0.4" />
    </svg>
  );
}

export default function TartarugaSection() {
  const { t } = useT();

  return (
    <section
      id="tanta-docura-tartaruga"
      className="wallpaper-botanical-dense relative overflow-hidden py-24 md:py-32"
    >
      <div className="relative z-10 max-w-6xl mx-auto px-6">
        {/* Section label */}
        <div className="flex items-center gap-4 mb-14 justify-center">
          <div
            className="h-px flex-1 max-w-xs"
            style={{ background: "linear-gradient(to right, transparent, rgba(122,84,104,0.4))" }}
          />
          <span
            className="text-xs uppercase tracking-[0.3em]"
            style={{
              color: "#7a5468",
              fontFamily: "var(--font-inter)",
              fontWeight: 600,
              display: "inline-flex",
              alignItems: "center",
              gap: 6,
            }}
          >
            <LeafSmall />
            {t("tartaruga.label")}
            <LeafSmall />
          </span>
          <div
            className="h-px flex-1 max-w-xs"
            style={{ background: "linear-gradient(to left, transparent, rgba(122,84,104,0.4))" }}
          />
        </div>

        <div className="grid md:grid-cols-[auto_1fr] gap-14 md:gap-20 items-center">
          {/* Book cover */}
          <div className="flex justify-center md:justify-start">
            <div className="relative" style={{ width: "min(280px, 70vw)", height: "min(280px, 70vw)" }}>
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
                  boxShadow: "0 0 0 2px rgba(160,140,80,0.3), 0 30px 60px rgba(60,40,22,0.25), 0 10px 20px rgba(60,40,22,0.15), -6px 0 0 rgba(0,0,0,0.10)",
                }}
              >
                <Image
                  src="/images/tanta-docura-tartaruga-cover.jpg"
                  alt="Tanta Doçura, Tartaruga!"
                  fill
                  sizes="280px"
                  style={{ objectFit: "cover" }}
                />
              </div>
            </div>
          </div>

          {/* Text */}
          <div style={{ background: "#f5ede8", borderRadius: 4, padding: "4px 8px", boxShadow: "0 0 8px 4px #f5ede8, 0 0 18px 10px rgba(245,237,232,0.85), 0 0 36px 18px rgba(245,237,232,0.45)", width: "fit-content", maxWidth: "100%" }}>
            <h2
              className="mb-2 leading-tight"
              style={{
                fontFamily: "var(--font-playfair)",
                fontSize: "clamp(2rem, 5vw, 3.5rem)",
                fontWeight: 600,
                color: "#3d2b35",
                letterSpacing: "0.005em",
              }}
            >
              {t("tartaruga.title.pre")}{" "}
              <em style={{ fontStyle: "italic", color: "#6b5060" }}>
                {t("tartaruga.title.em")}
              </em>
            </h2>

            <p
              className="text-xs mb-6"
              style={{ color: "#9b7080", fontStyle: "italic" }}
            >
              {t("tartaruga.credit")}
            </p>

            <div style={{ maxWidth: 460, marginBottom: 20 }}>
              {[t("tartaruga.p1"), t("tartaruga.p2"), t("tartaruga.p3")].map((p, i) => (
                <p
                  key={i}
                  className="text-sm leading-relaxed mb-4"
                  style={{ color: "#6b5060" }}
                >
                  {p}
                </p>
              ))}
            </div>

            <span
              className="inline-block px-5 py-2 rounded-full text-xs tracking-wide"
              style={{
                background: "rgba(122,84,104,0.1)",
                color: "#7a5468",
                fontWeight: 600,
              }}
            >
              {t("tartaruga.status")}
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
