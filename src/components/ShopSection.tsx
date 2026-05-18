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
        {/* Section header */}
        <motion.div
          className="flex flex-col items-center mb-16"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        >
          {/* Shop sign */}
          <div className="shop-sign mb-8">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden>
              <path
                d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z"
                stroke="#c2a074"
                strokeWidth="1.8"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <polyline
                points="9 22 9 12 15 12 15 22"
                stroke="#c2a074"
                strokeWidth="1.8"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            {t("shop.label")}
          </div>

          {/* Divider with label */}
          <div className="flex items-center gap-4 w-full max-w-sm">
            <div
              className="h-px flex-1"
              style={{
                background: "linear-gradient(to right, transparent, rgba(90,64,50,0.3))",
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
              {t("shop.subtitle")}
            </span>
            <div
              className="h-px flex-1"
              style={{
                background: "linear-gradient(to left, transparent, rgba(90,64,50,0.3))",
              }}
            />
          </div>
        </motion.div>

        {/* Shop window frame */}
        <div className="shop-window-frame p-8 md:p-12" style={{ background: "#faf6ed" }}>
          {/* Book cards grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {books.map((book, i) => (
              <motion.div
                key={book.slug}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{
                  duration: 0.65,
                  delay: i * 0.15,
                  ease: [0.22, 1, 0.36, 1],
                }}
              >
                <Link href={`/loja/${book.slug}`} className="block">
                  <div className={`book-card${!book.available ? " book-card-coming-soon" : ""}`}>
                    {/* Cover */}
                    <div className="book-card-cover">
                      {book.cover ? (
                        <Image
                          src={book.cover}
                          alt={book.title}
                          fill
                          sizes="(max-width: 768px) 90vw, 320px"
                          style={{ objectFit: "cover" }}
                        />
                      ) : (
                        <ComingSoonCover title={book.title} locale={locale} />
                      )}

                      {/* Coming soon badge */}
                      {!book.available && (
                        <div
                          className="absolute top-3 right-3 px-3 py-1 rounded-full text-xs tracking-wide"
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
                      {/* Genre label */}
                      <p
                        className="text-xs uppercase tracking-[0.22em] mb-2"
                        style={{
                          color: "#8b6f4d",
                          fontFamily: "var(--font-inter)",
                          fontWeight: 500,
                        }}
                      >
                        {book.genre[locale]}
                      </p>

                      {/* Title */}
                      <h3
                        className="mb-3 leading-snug"
                        style={{
                          fontFamily: "var(--font-playfair)",
                          fontSize: "1.2rem",
                          fontWeight: 600,
                          color: "#3d2a1a",
                        }}
                      >
                        {book.titlePre}{" "}
                        <em style={{ fontStyle: "italic", color: "#5a4032" }}>
                          {book.titleEm}
                        </em>
                      </h3>

                      {/* Short description */}
                      <p
                        className="text-sm leading-relaxed mb-4 flex-1"
                        style={{ color: "rgba(90,64,50,0.85)" }}
                      >
                        {book.shortDesc[locale]}
                      </p>

                      {/* Footer: price + CTA */}
                      <div className="flex items-center justify-between mt-auto pt-3" style={{ borderTop: "1px solid rgba(139,111,77,0.18)" }}>
                        <span
                          className="text-sm"
                          style={{
                            fontFamily: "var(--font-caveat)",
                            fontSize: "1.1rem",
                            color: "#6b4a2b",
                            fontWeight: 600,
                          }}
                        >
                          {book.price?.[locale]}
                        </span>
                        <span
                          className="text-sm tracking-wide"
                          style={{
                            color: "#6d7e5f",
                            fontFamily: "var(--font-inter)",
                            fontWeight: 500,
                          }}
                        >
                          {t("shop.readMore")}
                        </span>
                      </div>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
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
      {/* Decorative lines mimicking a book */}
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
