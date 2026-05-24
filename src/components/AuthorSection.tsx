"use client";

import Image from "next/image";
import { useState } from "react";
import { useT } from "@/lib/i18n";

const Divider = () => (
  <div style={{ display: "flex", alignItems: "center", gap: "0.75rem", padding: "0.5rem 0" }}>
    <div style={{ flex: 1, height: 1, background: "linear-gradient(to right, rgba(90,64,50,0.2), transparent)" }} />
    <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
      <circle cx="5" cy="5" r="1.5" fill="#8b6f4d" opacity="0.4"/>
    </svg>
    <div style={{ flex: 1, height: 1, background: "linear-gradient(to left, rgba(90,64,50,0.2), transparent)" }} />
  </div>
);

export default function AuthorSection() {
  const { t } = useT();
  const [expanded, setExpanded] = useState(false);

  const bioGroups = [
    [t("author.p1")],
    [t("author.p2"), t("author.p3")],
    [t("author.p4"), t("author.p5"), t("author.p6")],
    [t("author.p7"), t("author.p8")],
  ];

  return (
    <section
      id="sobre"
      className="wallpaper-botanical-dense relative py-28 md:py-36 overflow-hidden"
    >
      {/* Soft vignette */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "linear-gradient(to bottom, rgba(253,251,246,1) 0%, rgba(253,251,246,0) 8%, rgba(253,251,246,0) 92%, rgba(253,251,246,1) 100%)",
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
            {t("author.label")}
          </span>
          <div
            className="h-px flex-1 max-w-xs"
            style={{
              background:
                "linear-gradient(to left, transparent, rgba(90,64,50,0.3))",
            }}
          />
        </div>

        <div className="grid md:grid-cols-5 gap-14 md:gap-16 items-start">
          {/* Photo */}
          <div className="md:col-span-2 flex justify-center md:justify-start md:sticky md:top-28">
            <div className="relative">
              <div
                aria-hidden
                className="absolute inset-0 rounded-full"
                style={{
                  background:
                    "radial-gradient(circle, rgba(194,160,116,0.25) 0%, transparent 70%)",
                  transform: "scale(1.25)",
                  filter: "blur(24px)",
                }}
              />
              <div
                className="relative rounded-full overflow-hidden"
                style={{
                  width: 280,
                  height: 280,
                  border: "3px solid rgba(139,111,77,0.35)",
                  boxShadow:
                    "0 24px 48px rgba(60,40,22,0.25), 0 0 0 8px rgba(253,251,246,0.8), 0 0 0 9px rgba(139,111,77,0.18)",
                }}
              >
                <Image
                  src="/images/ana-souza-foto.jpg"
                  alt="Ana Souza de Magalhães"
                  fill
                  sizes="280px"
                  style={{ objectFit: "cover", objectPosition: "center 15%" }}
                />
              </div>
              <div
                className="absolute -bottom-3 left-1/2 -translate-x-1/2 px-4 py-1.5 rounded-full text-xs tracking-widest uppercase whitespace-nowrap"
                style={{
                  background: "#faf6ed",
                  color: "#5a4032",
                  border: "1px solid rgba(139,111,77,0.3)",
                  boxShadow: "0 4px 12px rgba(60,40,22,0.1)",
                  fontWeight: 500,
                }}
              >
                {t("author.badge")}
              </div>
            </div>
          </div>

          {/* Bio text */}
          <div className="md:col-span-3">
            <h2
              className="mb-8 leading-tight"
              style={{
                fontFamily: "var(--font-playfair)",
                fontSize: "clamp(1.8rem, 4vw, 3rem)",
                fontWeight: 600,
                color: "#3d2a1a",
                letterSpacing: "0.005em",
              }}
            >
              {t("author.title.pre")}{" "}
              <em style={{ fontStyle: "italic", color: "#5a4032" }}>
                {t("author.title.em")}
              </em>
            </h2>

            <div style={{ color: "#5a4032", maxWidth: 620 }}>
              {/* Always visible: groups 0 + 1 */}
              {bioGroups.slice(0, 2).map((group, gi) => (
                <div key={gi}>
                  {gi > 0 && <Divider />}
                  <div className="space-y-3" style={{ padding: "0.25rem 0" }}>
                    {group.map((p, pi) => (
                      <p
                        key={pi}
                        className="leading-relaxed"
                        style={
                          gi === 0
                            ? { fontSize: "1.05rem", color: "#3d2a1a", fontWeight: 400 }
                            : { fontSize: "0.95rem" }
                        }
                      >
                        {p}
                      </p>
                    ))}
                  </div>
                </div>
              ))}

              {/* Collapsible: groups 2 + 3 */}
              <div
                style={{
                  overflow: "hidden",
                  maxHeight: expanded ? 600 : 0,
                  transition: "max-height 0.55s cubic-bezier(0.22, 1, 0.36, 1)",
                }}
              >
                {bioGroups.slice(2).map((group, gi) => (
                  <div key={gi + 2}>
                    <Divider />
                    <div className="space-y-3" style={{ padding: "0.25rem 0" }}>
                      {group.map((p, pi) => (
                        <p key={pi} className="leading-relaxed" style={{ fontSize: "0.95rem" }}>
                          {p}
                        </p>
                      ))}
                    </div>
                  </div>
                ))}
              </div>

              {/* Expand / collapse button */}
              <button
                onClick={() => setExpanded(!expanded)}
                style={{
                  marginTop: "1.25rem",
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "0.4rem",
                  background: "none",
                  border: "none",
                  cursor: "pointer",
                  fontFamily: "var(--font-playfair)",
                  fontSize: "0.9rem",
                  fontStyle: "italic",
                  color: "#8b6f4d",
                  padding: 0,
                  transition: "color 0.2s",
                }}
                onMouseEnter={e => (e.currentTarget.style.color = "#5a3d23")}
                onMouseLeave={e => (e.currentTarget.style.color = "#8b6f4d")}
              >
                {expanded ? t("author.readLess") : t("author.readMore")}
                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 14 14"
                  fill="none"
                  style={{
                    transition: "transform 0.4s ease",
                    transform: expanded ? "rotate(180deg)" : "rotate(0deg)",
                  }}
                >
                  <path d="M3 5l4 4 4-4" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
