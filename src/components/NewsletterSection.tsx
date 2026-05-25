"use client";

import { useT } from "@/lib/i18n";

export default function NewsletterSection() {
  const { t } = useT();
  const email = "anasouzademagalhaes@gmail.com";
  const instagramHandle = "@anasouzademagalhaes";

  return (
    <section
      id="contato"
      className="wallpaper-botanical-dense relative py-24 md:py-32 overflow-hidden"
    >

      <div className="relative z-10 max-w-2xl mx-auto px-6 text-center">
        {/* Section label */}
        <div className="flex items-center gap-4 mb-10 justify-center">
          <div
            className="h-px flex-1 max-w-40"
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
            {t("contato.label")}
          </span>
          <div
            className="h-px flex-1 max-w-40"
            style={{
              background:
                "linear-gradient(to left, transparent, rgba(90,64,50,0.3))",
            }}
          />
        </div>

        <h2
          className="mb-6 leading-snug"
          style={{
            fontFamily: "var(--font-playfair)",
            fontSize: "clamp(1.8rem, 4vw, 2.8rem)",
            fontWeight: 600,
            color: "#3d2a1a",
            letterSpacing: "0.005em",
          }}
        >
          {t("contato.title.pre")}{" "}
          <em style={{ fontStyle: "italic", color: "#5a4032" }}>
            {t("contato.title.em")}
          </em>
        </h2>

        <p
          className="mb-10 leading-relaxed"
          style={{ color: "#5a4032", fontSize: "1.05rem" }}
        >
          {t("contato.intro")}
        </p>

        <div className="flex flex-col items-center gap-6">
          <a
            href={`mailto:${email}`}
            className="px-8 py-3.5 rounded-full text-sm tracking-wide transition-all duration-300 hover:-translate-y-0.5"
            style={{
              background: "#6d7e5f",
              color: "#faf6ed",
              fontWeight: 500,
              boxShadow: "0 6px 18px rgba(109,126,95,0.35)",
            }}
          >
            {t("contato.cta")}
          </a>

          <a
            href="https://instagram.com/anasouzademagalhaes"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 transition-colors duration-300"
            style={{ color: "#5a4032" }}
            onMouseEnter={(e) =>
              ((e.currentTarget as HTMLElement).style.color = "#6d7e5f")
            }
            onMouseLeave={(e) =>
              ((e.currentTarget as HTMLElement).style.color = "#5a4032")
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
        </div>

        <p
          className="mt-10 text-xs"
          style={{ color: "rgba(90,64,50,0.5)" }}
        >
          {t("contato.privacy")}
        </p>
      </div>
    </section>
  );
}
