"use client";

import type { Locale } from "@/lib/i18n";

export type BuyLink = { label: string; url: string; note?: string; available?: boolean };
export type BuyRegion = { key: string; label: { pt: string; de: string }; icon: "globe" | "pin" | "book"; links: BuyLink[] };

function getStoreStyle(label: string): { bg: string; color: string } {
  const l = label.toLowerCase();
  if (l.includes("amazon")) return { bg: "#FF9900", color: "#0F1111" };
  if (l.includes("um livro") || l.includes("umlivro")) return { bg: "#006C35", color: "#fff" };
  if (l.includes("epubli") || l.includes("e-publi")) return { bg: "#222", color: "#fff" };
  if (l.includes("mercado livre")) return { bg: "#FFE600", color: "#333" };
  if (l.includes("whatsapp")) return { bg: "#25D366", color: "#fff" };
  if (l.includes("kindle")) return { bg: "#232F3E", color: "#FF9900" };
  if (l.includes("tutear") || l.includes("livraria")) return { bg: "#2d5a3d", color: "#fff" };
  return { bg: "#7a5468", color: "#fff" };
}

const REGION_LABEL: Record<string, { pt: string; de: string }> = {
  brasil: { pt: "Brasil", de: "Brasilien" },
  europa: { pt: "Alemanha", de: "Deutschland" },
};

export default function BuyOptions({ regions, locale }: { regions: BuyRegion[]; locale: Locale }) {
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 16, maxWidth: 300 }}>
      {regions.map((region) => {
        const seenUrls = new Set<string>();
        const links = region.links.filter((l) => {
          if (seenUrls.has(l.url)) return false;
          seenUrls.add(l.url);
          return true;
        });
        const regionLabel = REGION_LABEL[region.key]?.[locale] ?? region.label[locale];
        return (
          <div key={region.key}>
            <p style={{
              fontFamily: "var(--font-inter)",
              fontSize: 10,
              fontWeight: 600,
              letterSpacing: "0.2em",
              textTransform: "uppercase",
              color: "#8b6f4d",
              marginBottom: 6,
            }}>
              {regionLabel}
            </p>
            <div style={{ display: "flex", flexDirection: "column", gap: 6 }}>
              {links.map((link, i) => {
                const isPlaceholder = link.url === "#";
                const { bg, color } = getStoreStyle(link.label);
                return (
                  <a
                    key={i}
                    href={isPlaceholder ? undefined : link.url}
                    target={isPlaceholder ? undefined : "_blank"}
                    rel={isPlaceholder ? undefined : "noopener noreferrer"}
                    style={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-between",
                      padding: "11px 16px",
                      borderRadius: 6,
                      background: bg,
                      color,
                      fontFamily: "var(--font-inter)",
                      fontSize: 14,
                      fontWeight: 600,
                      textDecoration: "none",
                      opacity: isPlaceholder ? 0.55 : 1,
                      cursor: isPlaceholder ? "default" : "pointer",
                      transition: "opacity 0.15s",
                    }}
                    onMouseEnter={(e) => { if (!isPlaceholder) e.currentTarget.style.opacity = "0.85"; }}
                    onMouseLeave={(e) => { e.currentTarget.style.opacity = isPlaceholder ? "0.55" : "1"; }}
                  >
                    <span>{link.label}</span>
                    {!isPlaceholder && <span style={{ opacity: 0.7, fontSize: 13 }}>↗</span>}
                  </a>
                );
              })}
            </div>
          </div>
        );
      })}
    </div>
  );
}
