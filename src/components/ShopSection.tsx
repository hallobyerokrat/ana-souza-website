"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { useT } from "@/lib/i18n";
import { books } from "@/lib/books";

export default function ShopSection() {
  const { t, locale } = useT();

  return (
    <section
      id="loja"
      className="wallpaper-botanical-dense relative overflow-hidden py-24 md:py-32"
    >
      {/* Edge fades */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "linear-gradient(to bottom, rgba(253,251,246,1) 0%, rgba(253,251,246,0) 8%, rgba(253,251,246,0) 92%, rgba(253,251,246,1) 100%)",
        }}
      />

      <div className="relative z-10 max-w-6xl mx-auto px-6">
        {/* Section heading */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="flex items-center justify-center gap-5">
            <svg width="28" height="28" viewBox="0 0 28 28" fill="none" aria-hidden style={{ opacity: 0.5, flexShrink: 0 }}>
              <path d="M4 24 Q10 16 18 12 Q22 10 26 8" stroke="#8b6f4d" strokeWidth="1.2" strokeLinecap="round"/>
              <ellipse cx="10" cy="18" rx="2" ry="4" transform="rotate(-40 10 18)" fill="#8b6f4d" fillOpacity="0.5"/>
              <ellipse cx="18" cy="12" rx="1.8" ry="3.5" transform="rotate(-20 18 12)" fill="#8b6f4d" fillOpacity="0.5"/>
            </svg>
            <h2
              style={{
                fontFamily: "var(--font-playfair)",
                fontSize: "2.2rem",
                color: "#3d2a1a",
                fontWeight: 600,
                letterSpacing: "0.01em",
              }}
            >
              {t("shop.label")}
            </h2>
            <svg width="28" height="28" viewBox="0 0 28 28" fill="none" aria-hidden style={{ opacity: 0.5, flexShrink: 0, transform: "scaleX(-1)" }}>
              <path d="M4 24 Q10 16 18 12 Q22 10 26 8" stroke="#8b6f4d" strokeWidth="1.2" strokeLinecap="round"/>
              <ellipse cx="10" cy="18" rx="2" ry="4" transform="rotate(-40 10 18)" fill="#8b6f4d" fillOpacity="0.5"/>
              <ellipse cx="18" cy="12" rx="1.8" ry="3.5" transform="rotate(-20 18 12)" fill="#8b6f4d" fillOpacity="0.5"/>
            </svg>
          </div>
        </motion.div>

        {/* Books grid */}
        <div className="flex flex-wrap justify-center gap-10 md:gap-14">
          {books.map((book, i) => (
            <motion.div
              key={book.slug}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{
                duration: 0.6,
                delay: i * 0.12,
                ease: [0.22, 1, 0.36, 1],
              }}
            >
              <Link href={`/loja/${book.slug}`} className="block w-56">
                <div className={`book-card${!book.available ? " book-card-coming-soon" : ""}`}>
                  {/* Cover */}
                  <div className="book-card-cover">
                    {book.cover ? (
                      <Image
                        src={book.cover}
                        alt={book.title}
                        fill
                        sizes="(max-width: 768px) 50vw, 176px"
                        style={{ objectFit: "cover" }}
                      />
                    ) : (
                      <ComingSoonCover title={book.title} locale={locale} />
                    )}

                    {/* Coming soon badge */}
                    {!book.available && (
                      <div
                        className="absolute top-2 right-2 px-2 py-0.5 rounded-full text-xs tracking-wide"
                        style={{
                          background: "rgba(61,42,26,0.82)",
                          color: "#f3e8cf",
                          fontFamily: "var(--font-inter)",
                          fontWeight: 500,
                          backdropFilter: "blur(6px)",
                        }}
                      >
                        {t("shop.comingSoon")}
                      </div>
                    )}
                  </div>

                  {/* Body */}
                  <div className="book-card-body">
                    <p
                      className="text-xs uppercase tracking-[0.22em] mb-1.5"
                      style={{ color: "#8b6f4d", fontFamily: "var(--font-inter)", fontWeight: 500 }}
                    >
                      {book.genre[locale]}
                    </p>

                    <h3
                      className="mb-2 leading-snug"
                      style={{ fontFamily: "var(--font-playfair)", fontSize: "1rem", fontWeight: 600, color: "#3d2a1a" }}
                    >
                      {book.titlePre}{" "}
                      <em style={{ fontStyle: "italic", color: "#5a4032" }}>{book.titleEm}</em>
                    </h3>

                    <div className="flex items-center justify-center mt-auto pt-2.5" style={{ borderTop: "1px solid rgba(139,111,77,0.18)" }}>
                      <span
                        className="text-xs uppercase tracking-widest"
                        style={{
                          fontFamily: "var(--font-inter)",
                          fontWeight: 600,
                          color: book.ctaDisabled ? "rgba(90,64,50,0.4)" : "#7a5468",
                          letterSpacing: "0.18em",
                        }}
                      >
                        {book.ctaLabel[locale]}
                      </span>
                    </div>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function ComingSoonCover({
  title,
  locale,
}: {
  title: string;
  locale: "pt" | "de";
}) {
  return (
    <div
      className="absolute inset-0 flex flex-col items-center justify-center gap-4 p-6"
      style={{
        background: "linear-gradient(145deg, #ede0be 0%, #d6b487 60%, #c2a074 100%)",
      }}
    >
      <div className="flex flex-col items-center gap-2 opacity-25">
        {[80, 64, 72, 56, 68].map((w, i) => (
          <div
            key={i}
            style={{
              width: w,
              height: 2,
              background: "#3d2a1a",
              borderRadius: 1,
            }}
          />
        ))}
      </div>
      <p
        className="text-center leading-snug mt-2"
        style={{
          fontFamily: "var(--font-playfair)",
          fontSize: "0.95rem",
          fontStyle: "italic",
          color: "#3d2a1a",
          maxWidth: 140,
        }}
      >
        {title}
      </p>
      <p
        className="text-xs uppercase tracking-widest mt-1"
        style={{
          fontFamily: "var(--font-inter)",
          color: "rgba(61,42,26,0.55)",
          fontWeight: 500,
        }}
      >
        {locale === "pt" ? "Em breve" : "Demnächst"}
      </p>
    </div>
  );
}
