"use client";

import Image from "next/image";
import { useState, useEffect } from "react";
import { useT } from "@/lib/i18n";
import { createClient } from "@/lib/supabase/client";

const Divider = () => (
  <div style={{ display: "flex", alignItems: "center", gap: "0.75rem", padding: "0.5rem 0" }}>
    <div style={{ flex: 1, height: 1, background: "linear-gradient(to right, rgba(107,80,96,0.2), transparent)" }} />
    <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
      <circle cx="5" cy="5" r="1.5" fill="#9b7080" opacity="0.4"/>
    </svg>
    <div style={{ flex: 1, height: 1, background: "linear-gradient(to left, rgba(107,80,96,0.2), transparent)" }} />
  </div>
);

export default function AuthorSection() {
  const { t, locale } = useT();
  const [expanded, setExpanded] = useState(false);
  const [dbBio, setDbBio] = useState<Record<string, string>>({});
  const supabase = createClient();

  useEffect(() => {
    supabase.from("bio_content").select("key, value_pt, value_de").then(({ data }) => {
      if (!data) return;
      const map: Record<string, string> = {};
      data.forEach(row => { map[row.key] = locale === "de" ? row.value_de : row.value_pt; });
      setDbBio(map);
    });
  }, [locale]);

  function bio(key: string): string {
    return dbBio[key] || t(`author.${key}` as Parameters<typeof t>[0]);
  }

  const bioGroups = [
    [bio("p1"), bio("p3"), bio("p4"), bio("p5")],
  ];

  return (
    <section
      id="sobre"
      className="wallpaper-botanical-dense relative py-28 md:py-36 overflow-hidden"
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
            }}
          >
            {t("author.label")}
          </span>
          <div
            className="h-px flex-1 max-w-xs"
            style={{
              background:
                "linear-gradient(to left, transparent, rgba(107,80,96,0.3))",
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
                    "radial-gradient(circle, rgba(180,140,160,0.25) 0%, transparent 70%)",
                  transform: "scale(1.25)",
                  filter: "blur(24px)",
                }}
              />
              <div
                className="relative rounded-full overflow-hidden"
                style={{
                  width: "min(280px, calc(100vw - 96px))",
                  height: "min(280px, calc(100vw - 96px))",
                  border: "3px solid rgba(155,112,128,0.35)",
                  boxShadow:
                    "0 24px 48px rgba(61,43,53,0.25), 0 0 0 8px rgba(253,251,246,0.8), 0 0 0 9px rgba(155,112,128,0.18)",
                }}
              >
                <Image
                  src="/images/ana-souza-foto-2.jpg"
                  alt="Ana Souza de Magalhães"
                  fill
                  sizes="280px"
                  style={{ objectFit: "cover", objectPosition: "center 15%" }}
                />
              </div>
              <div
                className="absolute -bottom-3 left-1/2 -translate-x-1/2 px-4 py-1.5 rounded-full text-xs tracking-widest uppercase whitespace-nowrap"
                style={{
                  background: "#faf6f1",
                  color: "#6b5060",
                  border: "1px solid rgba(155,112,128,0.3)",
                  boxShadow: "0 4px 12px rgba(61,43,53,0.1)",
                  fontWeight: 500,
                }}
              >
                {t("author.badge")}
              </div>
            </div>
          </div>

          {/* Bio text */}
          <div className="md:col-span-3" style={{ background: "#f5ede8", borderRadius: 4, padding: "4px 8px", boxShadow: "0 0 8px 4px #f5ede8, 0 0 18px 10px rgba(245,237,232,0.85), 0 0 36px 18px rgba(245,237,232,0.45)" }}>
            <div style={{ color: "#6b5060", maxWidth: 620 }}>
              {/* Always visible: groups 0 + 1 */}
              {bioGroups.slice(0, 2).map((group, gi) => (
                <div key={gi}>
                  {gi > 0 && <Divider />}
                  <div className="space-y-3" style={{ padding: "0.25rem 0" }}>
                    {group.map((p, pi) => (
                      <p
                        key={pi}
                        className="leading-relaxed"
                        style={{ fontSize: "0.95rem" }}
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
                  color: "#9b7080",
                  padding: 0,
                  transition: "color 0.2s",
                }}
                onMouseEnter={e => (e.currentTarget.style.color = "#7a5468")}
                onMouseLeave={e => (e.currentTarget.style.color = "#9b7080")}
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
