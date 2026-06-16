"use client";

import { useT } from "@/lib/i18n";

export default function ContactSection() {
  const { t } = useT();
  const email = "anasouzademagalhaes@gmail.com";
  const instagramHandle = "@anasouzademagalhaes";

  return (
    <section
      id="contato"
      className="wallpaper-botanical-dense relative py-24 md:py-32 overflow-hidden"
    >

      <div className="relative z-10 max-w-2xl mx-auto px-6 py-12 text-center" style={{ background: "#f5ede8", borderRadius: 4, boxShadow: "0 0 8px 4px #f5ede8, 0 0 18px 10px rgba(245,237,232,0.85), 0 0 36px 18px rgba(245,237,232,0.45)" }}>
        {/* Section label */}
        <div className="flex items-center gap-4 mb-10 justify-center">
          <div
            className="h-px flex-1 max-w-40"
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
            {t("contato.label")}
          </span>
          <div
            className="h-px flex-1 max-w-40"
            style={{
              background:
                "linear-gradient(to left, transparent, rgba(107,80,96,0.3))",
            }}
          />
        </div>

        <h2
          className="mb-6 leading-snug"
          style={{
            fontFamily: "var(--font-playfair)",
            fontSize: "clamp(1.8rem, 4vw, 2.8rem)",
            fontWeight: 600,
            color: "#3d2b35",
            letterSpacing: "0.005em",
          }}
        >
          {t("contato.title.pre")}{" "}
          <em style={{ fontStyle: "italic", color: "#6b5060" }}>
            {t("contato.title.em")}
          </em>
        </h2>

        <p
          className="mb-10 leading-relaxed"
          style={{ color: "#6b5060", fontSize: "1.05rem" }}
        >
          {t("contato.intro")}
        </p>

        <div className="flex flex-col items-center gap-6">
          <div className="flex flex-col items-center gap-1.5">
            <span style={{
              fontFamily: "var(--font-inter)",
              fontSize: 9,
              letterSpacing: "0.14em",
              textTransform: "uppercase",
              color: "#9b7080",
              opacity: 0.45,
            }}>
              E-mail
            </span>
            <svg width="8" height="10" viewBox="0 0 8 10" fill="none" aria-hidden>
              <line x1="4" y1="0" x2="4" y2="7" stroke="#9b7080" strokeWidth="1" strokeLinecap="round" opacity="0.4" />
              <path d="M1.5 5L4 8L6.5 5" stroke="#9b7080" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" opacity="0.4" />
            </svg>
            <a
              href={`mailto:${email}`}
              className="px-8 py-3.5 rounded-full text-sm tracking-wide transition-all duration-300 hover:-translate-y-0.5"
              style={{
                background: "#7a5468",
                color: "#faf6ed",
                fontWeight: 500,
                boxShadow: "0 6px 18px rgba(122,84,104,0.35)",
              }}
            >
              {t("contato.cta")}
            </a>
          </div>

          <a
            href="https://instagram.com/anasouzademagalhaes"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 transition-colors duration-300"
            style={{ color: "#6b5060" }}
            onMouseEnter={(e) =>
              ((e.currentTarget as HTMLElement).style.color = "#7a5468")
            }
            onMouseLeave={(e) =>
              ((e.currentTarget as HTMLElement).style.color = "#6b5060")
            }
          >
            <svg
              width="17"
              height="17"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth={1.5}
            >
              <rect x="2" y="2" width="20" height="20" rx="5" />
              <circle cx="12" cy="12" r="4" />
              <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
            </svg>
            <span style={{ fontFamily: "var(--font-inter)", fontSize: 14 }}>
              {instagramHandle}
            </span>
          </a>

          <a
            href="https://wa.me/491709250795"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 transition-colors duration-300"
            style={{ color: "#6b5060" }}
            onMouseEnter={(e) =>
              ((e.currentTarget as HTMLElement).style.color = "#7a5468")
            }
            onMouseLeave={(e) =>
              ((e.currentTarget as HTMLElement).style.color = "#6b5060")
            }
          >
            <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5}>
              <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
            </svg>
            <span style={{ fontFamily: "var(--font-inter)", fontSize: 14 }}>
              WhatsApp
            </span>
          </a>

          <a
            href="https://www.youtube.com/@anasouzademagalhaes32"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 transition-colors duration-300"
            style={{ color: "#6b5060" }}
            onMouseEnter={(e) =>
              ((e.currentTarget as HTMLElement).style.color = "#7a5468")
            }
            onMouseLeave={(e) =>
              ((e.currentTarget as HTMLElement).style.color = "#6b5060")
            }
          >
            <svg
              width="17"
              height="17"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth={1.5}
            >
              <path d="M22.54 6.42A2.78 2.78 0 0 0 20.6 4.47C18.88 4 12 4 12 4s-6.88 0-8.6.47A2.78 2.78 0 0 0 1.46 6.42 29 29 0 0 0 1 12a29 29 0 0 0 .46 5.58A2.78 2.78 0 0 0 3.4 19.53C5.12 20 12 20 12 20s6.88 0 8.6-.47a2.78 2.78 0 0 0 1.94-1.95A29 29 0 0 0 23 12a29 29 0 0 0-.46-5.58Z" />
              <polygon points="9.75 15.02 15.5 12 9.75 8.98 9.75 15.02" fill="currentColor" stroke="none" />
            </svg>
            <span style={{ fontFamily: "var(--font-inter)", fontSize: 14 }}>
              YouTube
            </span>
          </a>
        </div>

        <p
          className="mt-10 text-xs"
          style={{ color: "#8a6878" }}
        >
          {t("contato.privacy")}
        </p>
      </div>
    </section>
  );
}
