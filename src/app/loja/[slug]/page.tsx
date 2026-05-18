"use client";

import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { use } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useT } from "@/lib/i18n";
import { getBook } from "@/lib/books";

export default function LojaPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = use(params);
  const book = getBook(slug);
  if (!book) notFound();

  const { t, locale } = useT();

  const handleBuy = () => {
    if (!book.lemonsqueezyUrl) return;
    // @ts-expect-error — Lemon Squeezy global injected via script tag
    if (typeof window !== "undefined" && window.LemonSqueezy) {
      // @ts-expect-error
      window.LemonSqueezy.Url.Open(book.lemonsqueezyUrl);
    } else {
      window.open(book.lemonsqueezyUrl, "_blank");
    }
  };

  return (
    <>
      <Navbar />
      <main
        className="wallpaper-botanical-dense min-h-screen"
        style={{ paddingTop: 80 }}
      >
        {/* Edge fade top */}
        <div
          className="pointer-events-none"
          style={{
            background:
              "linear-gradient(to bottom, rgba(253,251,246,1) 0%, rgba(253,251,246,0) 6%)",
            height: 60,
            marginTop: -60,
          }}
        />

        <div className="max-w-6xl mx-auto px-6 py-16 md:py-24">
          {/* Back link */}
          <Link
            href="/#loja"
            className="inline-flex items-center gap-2 mb-12 transition-colors duration-200"
            style={{
              fontFamily: "var(--font-inter)",
              fontSize: 14,
              color: "#8b6f4d",
              fontWeight: 500,
            }}
            onMouseEnter={(e) => (e.currentTarget.style.color = "#5a3d23")}
            onMouseLeave={(e) => (e.currentTarget.style.color = "#8b6f4d")}
          >
            {t("shop.backToShop")}
          </Link>

          {/* Product layout */}
          <div className="grid md:grid-cols-[auto_1fr] gap-14 md:gap-20 items-start">
            {/* Cover */}
            <motion.div
              className="flex justify-center md:justify-start"
              initial={{ opacity: 0, x: -24 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            >
              <div
                className="relative"
                style={{ width: 280, height: 420, flexShrink: 0 }}
              >
                {/* Drop shadow blob */}
                <div
                  aria-hidden
                  className="absolute"
                  style={{
                    bottom: -22,
                    left: "10%",
                    right: "10%",
                    height: 28,
                    background: "rgba(60,40,22,0.22)",
                    filter: "blur(18px)",
                    borderRadius: "50%",
                  }}
                />
                <div
                  className="relative w-full h-full overflow-hidden"
                  style={{
                    borderRadius: 4,
                    boxShadow:
                      "0 30px 60px rgba(60,40,22,0.3), 0 10px 20px rgba(60,40,22,0.18), -6px 0 0 rgba(0,0,0,0.15)",
                  }}
                >
                  {book.cover ? (
                    <>
                      <Image
                        src={book.cover}
                        alt={book.title}
                        fill
                        sizes="280px"
                        style={{ objectFit: "cover" }}
                        priority
                      />
                      <div
                        aria-hidden
                        style={{
                          position: "absolute",
                          inset: 0,
                          pointerEvents: "none",
                          background:
                            "linear-gradient(90deg, rgba(255,255,255,0.18) 0%, transparent 6%, transparent 94%, rgba(0,0,0,0.15) 100%)",
                        }}
                      />
                    </>
                  ) : (
                    <div
                      className="w-full h-full flex flex-col items-center justify-center gap-4 p-6"
                      style={{
                        background:
                          "linear-gradient(145deg, #ede0be 0%, #d6b487 60%, #c2a074 100%)",
                      }}
                    >
                      <p
                        className="text-center leading-snug"
                        style={{
                          fontFamily: "var(--font-playfair)",
                          fontSize: "1.1rem",
                          fontStyle: "italic",
                          color: "#3d2a1a",
                        }}
                      >
                        {book.title}
                      </p>
                    </div>
                  )}
                </div>
              </div>
            </motion.div>

            {/* Info */}
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.12, ease: [0.22, 1, 0.36, 1] }}
            >
              {/* Genre label */}
              <p
                className="text-xs uppercase tracking-[0.28em] mb-5"
                style={{
                  color: "#8b6f4d",
                  fontFamily: "var(--font-inter)",
                  fontWeight: 500,
                }}
              >
                {book.genre[locale]}
              </p>

              {/* Title */}
              <h1
                className="mb-8 leading-tight"
                style={{
                  fontFamily: "var(--font-playfair)",
                  fontSize: "clamp(2rem, 5vw, 3.2rem)",
                  fontWeight: 600,
                  color: "#3d2a1a",
                }}
              >
                {book.titlePre}{" "}
                <em style={{ fontStyle: "italic", color: "#5a4032" }}>
                  {book.titleEm}
                </em>
              </h1>

              {/* Full description */}
              <div className="mb-10 space-y-4" style={{ maxWidth: 520 }}>
                {book.fullDesc[locale].map((para, i) => (
                  <p
                    key={i}
                    className="text-base leading-loose"
                    style={{ color: i === 0 ? "#5a4032" : "rgba(90,64,50,0.85)" }}
                  >
                    {para}
                  </p>
                ))}
              </div>

              {/* Details badge */}
              <p
                className="text-xs mb-8"
                style={{
                  color: "#8b6f4d",
                  fontFamily: "var(--font-inter)",
                  letterSpacing: "0.04em",
                }}
              >
                {book.details[locale]}
              </p>

              {/* CTA buttons */}
              <div className="flex flex-wrap gap-3">
                {book.available && book.lemonsqueezyUrl && (
                  <button
                    type="button"
                    onClick={handleBuy}
                    className="px-7 py-3 rounded-full text-sm tracking-wide transition-all duration-200 hover:-translate-y-0.5"
                    style={{
                      background: "#6d7e5f",
                      color: "#faf6ed",
                      fontFamily: "var(--font-inter)",
                      fontWeight: 500,
                      boxShadow: "0 6px 16px rgba(109,126,95,0.32)",
                    }}
                  >
                    {t("shop.buy")}
                  </button>
                )}

                {book.available && !book.lemonsqueezyUrl && (
                  <span
                    className="px-7 py-3 rounded-full text-sm tracking-wide"
                    style={{
                      background: "rgba(139,111,77,0.12)",
                      color: "#6b4a2b",
                      fontFamily: "var(--font-inter)",
                      fontWeight: 500,
                      border: "1px solid rgba(139,111,77,0.25)",
                    }}
                  >
                    {book.price?.[locale]}
                  </span>
                )}

                {!book.available && (
                  <a
                    href="mailto:dnwayne97@gmail.com"
                    className="px-7 py-3 rounded-full text-sm tracking-wide transition-all duration-200 hover:-translate-y-0.5"
                    style={{
                      background: "rgba(139,111,77,0.12)",
                      color: "#6b4a2b",
                      fontFamily: "var(--font-inter)",
                      fontWeight: 500,
                      border: "1px solid rgba(139,111,77,0.25)",
                    }}
                  >
                    {t("shop.notifyMe")}
                  </a>
                )}

                {book.amazonBr && book.amazonBr !== "#" && (
                  <a
                    href={book.amazonBr}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-7 py-3 rounded-full text-sm tracking-wide transition-all duration-200 hover:-translate-y-0.5"
                    style={{
                      background: "transparent",
                      color: "#5a4032",
                      fontFamily: "var(--font-inter)",
                      fontWeight: 500,
                      border: "1px solid rgba(90,64,50,0.3)",
                    }}
                  >
                    {t("shop.amazonBr")}
                  </a>
                )}

                {book.amazonDe && book.amazonDe !== "#" && (
                  <a
                    href={book.amazonDe}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-7 py-3 rounded-full text-sm tracking-wide transition-all duration-200 hover:-translate-y-0.5"
                    style={{
                      background: "transparent",
                      color: "#5a4032",
                      fontFamily: "var(--font-inter)",
                      fontWeight: 500,
                      border: "1px solid rgba(90,64,50,0.3)",
                    }}
                  >
                    {t("shop.amazonDe")}
                  </a>
                )}
              </div>
            </motion.div>
          </div>
        </div>

        {/* Edge fade bottom */}
        <div
          className="pointer-events-none"
          style={{
            background:
              "linear-gradient(to top, rgba(253,251,246,1) 0%, rgba(253,251,246,0) 100%)",
            height: 60,
          }}
        />
      </main>
      <Footer />
    </>
  );
}
