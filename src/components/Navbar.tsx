"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { useT, type Locale } from "@/lib/i18n";

const SECTION_TO_HREF: Record<string, string> = {
  hero: "#hero",
  livros: "#livros",
  "casos-de-familia": "#livros",
  "entre-flores": "#livros",
  "ceu-de-brincar": "#livros",
  contemporanea: "#contemporanea",
  musica: "#musica",
  videos: "#videos",
  loja: "#loja",
  sobre: "#sobre",
  contato: "#contato",
};

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeHref, setActiveHref] = useState("#hero");
  const { locale, setLocale, t } = useT();

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            const href = SECTION_TO_HREF[entry.target.id];
            if (href) setActiveHref(href);
          }
        }
      },
      { rootMargin: "-35% 0px -60% 0px" },
    );
    Object.keys(SECTION_TO_HREF).forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  const links = [
    { href: "#hero", label: t("nav.inicio") },
    { href: "#livros", label: t("nav.livros") },
    { href: "#musica", label: t("nav.musica") },
    { href: "#videos", label: t("nav.videos") },
    { href: "#sobre", label: t("nav.sobre") },
    { href: "#contato", label: t("nav.contato") },
  ];

  const toggleLocale = (next: Locale) => {
    if (next !== locale) setLocale(next);
  };

  return (
    <nav
      className="fixed top-0 left-0 right-0 z-50"
      style={{
        background: "rgba(250,246,241,0.88)",
        backdropFilter: "blur(10px)",
        WebkitBackdropFilter: "blur(10px)",
        borderBottom: "1px solid rgba(61,43,53,0.08)",
      }}
    >
      <div className="max-w-6xl mx-auto px-6 py-3 flex items-center justify-between gap-4">
        <Link
          href="#hero"
          className="text-base tracking-wide transition-opacity duration-300 hover:opacity-70"
          style={{
            fontFamily: "var(--font-playfair)",
            color: "#3d2b35",
            fontSize: 17,
          }}
        >
          Ana Souza{" "}
          <em style={{ fontStyle: "italic", color: "#6b5060" }}>de Magalhães</em>
        </Link>

        <div className="hidden md:flex items-center gap-7">
          {links.map((l, i) => {
            const isActive = activeHref === l.href;
            return (
              <a
                key={`${l.href}-${i}`}
                href={l.href}
                className="tracking-wide transition-colors duration-300 relative"
                style={{
                  fontFamily: "var(--font-playfair)",
                  fontSize: 15,
                  color: isActive ? "#7a5468" : "#3d2b35",
                }}
                onMouseEnter={(e) => (e.currentTarget.style.color = "#7a5468")}
                onMouseLeave={(e) =>
                  (e.currentTarget.style.color = isActive ? "#7a5468" : "#3d2b35")
                }
              >
                {l.label}
                {isActive && (
                  <span
                    style={{
                      position: "absolute",
                      bottom: -4,
                      left: "50%",
                      transform: "translateX(-50%)",
                      width: 4,
                      height: 4,
                      borderRadius: "50%",
                      background: "#7a5468",
                      opacity: 0.7,
                    }}
                  />
                )}
              </a>
            );
          })}
        </div>

        <div className="hidden md:flex items-center">
          <div
            role="group"
            aria-label="Language"
            style={{
              border: "1px solid rgba(61,43,53,0.2)",
              borderRadius: 3,
              padding: "3px 4px",
              fontFamily: "var(--font-playfair)",
              fontSize: 12,
              color: "#3d2b35",
              letterSpacing: "0.03em",
              background: "rgba(255,255,255,0.4)",
              display: "inline-flex",
              alignItems: "center",
              gap: 2,
            }}
          >
            <LocaleButton
              active={locale === "pt"}
              onClick={() => toggleLocale("pt")}
              label="PT"
            />
            <span style={{ opacity: 0.3 }}>|</span>
            <LocaleButton
              active={locale === "de"}
              onClick={() => toggleLocale("de")}
              label="DE"
            />
          </div>
        </div>

        <button
          className="md:hidden flex flex-col gap-1.5 p-2"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Menu"
        >
          <span
            className={`block w-6 h-0.5 transition-all duration-300 ${menuOpen ? "rotate-45 translate-y-2" : ""}`}
            style={{ background: "#3d2b35" }}
          />
          <span
            className={`block w-6 h-0.5 transition-all duration-300 ${menuOpen ? "opacity-0" : ""}`}
            style={{ background: "#3d2b35" }}
          />
          <span
            className={`block w-6 h-0.5 transition-all duration-300 ${menuOpen ? "-rotate-45 -translate-y-2" : ""}`}
            style={{ background: "#3d2b35" }}
          />
        </button>
      </div>

      {menuOpen && (
        <div
          className="md:hidden border-t px-6 py-4 flex flex-col gap-3"
          style={{
            background: "rgba(250,246,241,0.96)",
            borderColor: "rgba(61,43,53,0.1)",
          }}
        >
          {links.map((l, i) => (
            <a
              key={`${l.href}-m-${i}`}
              href={l.href}
              className="py-1"
              style={{
                fontFamily: "var(--font-playfair)",
                fontSize: 16,
                color: "#3d2b35",
              }}
              onClick={() => setMenuOpen(false)}
            >
              {l.label}
            </a>
          ))}
          <div
            style={{
              marginTop: 8,
              display: "inline-flex",
              alignItems: "center",
              gap: 2,
              fontFamily: "var(--font-playfair)",
              fontSize: 14,
              color: "#3d2b35",
            }}
          >
            <LocaleButton
              active={locale === "pt"}
              onClick={() => toggleLocale("pt")}
              label="PT"
            />
            <span style={{ opacity: 0.3, margin: "0 4px" }}>|</span>
            <LocaleButton
              active={locale === "de"}
              onClick={() => toggleLocale("de")}
              label="DE"
            />
          </div>
        </div>
      )}
    </nav>
  );
}

function LocaleButton({
  active,
  onClick,
  label,
}: {
  active: boolean;
  onClick: () => void;
  label: string;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-pressed={active}
      style={{
        padding: "2px 8px",
        borderRadius: 2,
        background: active ? "rgba(122,84,104,0.18)" : "transparent",
        color: active ? "#3d2b35" : "rgba(61,43,53,0.55)",
        fontWeight: active ? 600 : 400,
        fontFamily: "inherit",
        fontSize: "inherit",
        letterSpacing: "inherit",
        transition: "all 0.2s ease",
        cursor: "pointer",
        border: "none",
      }}
      onMouseEnter={(e) => {
        if (!active) e.currentTarget.style.color = "#3d2b35";
      }}
      onMouseLeave={(e) => {
        if (!active) e.currentTarget.style.color = "rgba(61,43,53,0.55)";
      }}
    >
      {label}
    </button>
  );
}
