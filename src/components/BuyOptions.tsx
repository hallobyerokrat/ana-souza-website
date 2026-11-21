"use client";

import { useState } from "react";
import type { Locale } from "@/lib/i18n";

export type BuyLink = { label: string; url: string; note?: string; available?: boolean };
export type BuyRegion = { key: string; label: { pt: string; de: string }; icon: "globe" | "pin" | "book"; links: BuyLink[] };

function RegionIcon({ icon }: { icon: BuyRegion["icon"] }) {
  const common = { width: 15, height: 15, viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: 1.8 };
  if (icon === "globe") {
    return (
      <svg {...common}>
        <circle cx="12" cy="12" r="9" />
        <path d="M3 12h18M12 3c2.5 2.5 4 5.5 4 9s-1.5 6.5-4 9c-2.5-2.5-4-5.5-4-9s1.5-6.5 4-9Z" />
      </svg>
    );
  }
  if (icon === "pin") {
    return (
      <svg {...common}>
        <path d="M12 21s7-6.5 7-11.5A7 7 0 0 0 5 9.5C5 14.5 12 21 12 21Z" />
        <circle cx="12" cy="9.5" r="2.3" />
      </svg>
    );
  }
  return (
    <svg {...common}>
      <path d="M4 5.5A2.5 2.5 0 0 1 6.5 3H20v16H6.5A2.5 2.5 0 0 0 4 21.5v-16Z" />
      <path d="M4 19V5.5" />
    </svg>
  );
}

export default function BuyOptions({ regions, locale }: { regions: BuyRegion[]; locale: Locale }) {
  const [openSet, setOpenSet] = useState<Set<string>>(() => new Set(regions.map((r) => r.key)));

  const toggle = (key: string) =>
    setOpenSet((prev) => {
      const next = new Set(prev);
      next.has(key) ? next.delete(key) : next.add(key);
      return next;
    });

  return (
    <div className="flex flex-col gap-3">
      <div className="flex flex-wrap gap-3">
        {regions.map((region) => (
          <button
            key={region.key}
            type="button"
            onClick={() => toggle(region.key)}
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-sm tracking-wide transition-all duration-300 hover:-translate-y-0.5"
            style={{
              background: openSet.has(region.key) ? "#7a5468" : "transparent",
              color: openSet.has(region.key) ? "#fff" : "#7a5468",
              fontWeight: 500,
              border: "1px solid #7a5468",
            }}
          >
            <RegionIcon icon={region.icon} />
            {region.label[locale]}
            <span style={{ fontSize: 10, opacity: 0.8 }}>{openSet.has(region.key) ? "▲" : "▼"}</span>
          </button>
        ))}
      </div>

      {regions.map((region) =>
        openSet.has(region.key) ? (
          <div
            key={region.key}
            style={{
              background: "#fdf8f5",
              border: "1px solid rgba(122,84,104,0.2)",
              borderRadius: 10,
              padding: 16,
              display: "flex",
              flexDirection: "column",
              gap: 10,
              maxWidth: 420,
            }}
          >
            {region.links.map((link, i) => {
              const isPlaceholder = link.url === "#";
              return (
                <a
                  key={i}
                  href={isPlaceholder ? undefined : link.url}
                  target={isPlaceholder ? undefined : "_blank"}
                  rel={isPlaceholder ? undefined : "noopener noreferrer"}
                  className="flex items-center justify-between gap-3"
                  style={{
                    padding: "10px 12px",
                    borderRadius: 8,
                    background: link.available ? "#fdf8f5" : "#fff",
                    border: link.available ? "1px solid rgba(122,84,104,0.35)" : "1px solid rgba(107,80,96,0.15)",
                    cursor: isPlaceholder ? "default" : "pointer",
                    opacity: isPlaceholder ? 0.6 : 1,
                    textDecoration: "none",
                  }}
                >
                  <span className="flex items-center gap-2">
                    {link.available && (
                      <span
                        aria-hidden
                        style={{
                          width: 6,
                          height: 6,
                          borderRadius: "50%",
                          background: "#5a8a6b",
                          flexShrink: 0,
                        }}
                      />
                    )}
                    <span>
                      <span style={{ display: "block", fontSize: 13, fontWeight: 600, color: "#3d2b35" }}>{link.label}</span>
                      {link.note && (
                        <span style={{ display: "block", fontSize: 11, color: link.available ? "#5a8a6b" : "#9b7080" }}>{link.note}</span>
                      )}
                    </span>
                  </span>
                  {!isPlaceholder && <span style={{ color: "#7a5468", fontSize: 13 }}>↗</span>}
                </a>
              );
            })}
          </div>
        ) : null
      )}
    </div>
  );
}
