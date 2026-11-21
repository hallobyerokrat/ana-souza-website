"use client";

import Image from "next/image";
import Link from "next/link";
import { useRef, useState } from "react";
import { motion } from "framer-motion";
import { useT } from "@/lib/i18n";
import { books } from "@/lib/books";

// All books with a cover — ordered: children first, then adult/anthology
const ALL_SLUGS = [
  "ceu-de-brincar",
  "tanta-docura-tartaruga",
  "spielhimmel",
  "entre-flores",
  "casos-de-familia",
];

function LeafIcon() {
  return (
    <svg width="18" height="24" viewBox="0 0 18 24" fill="none" aria-hidden>
      <path d="M9 23 C9 23 2 17 2 10.5 C2 5.5 5.2 2 9 2 C12.8 2 16 5.5 16 10.5 C16 17 9 23 9 23 Z" fill="#2d5a3d" opacity="0.7" />
      <line x1="9" y1="23" x2="9" y2="2" stroke="#2d5a3d" strokeWidth="1" opacity="0.4" />
    </svg>
  );
}

const VISIBLE = 3; // cards visible at once on desktop

export default function LiteraturaInfantilSection() {
  const { t, locale } = useT();
  const allBooks = ALL_SLUGS.map((s) => books.find((b) => b.slug === s)).filter(Boolean) as typeof books;
  const [startIndex, setStartIndex] = useState(0);
  const canPrev = startIndex > 0;
  const canNext = startIndex + VISIBLE < allBooks.length;

  return (
    <section
      id="livros"
      className="wallpaper-botanical-dense relative overflow-hidden py-20 md:py-28"
    >
      <div className="relative z-10 max-w-6xl mx-auto px-6">
        {/* Header */}
        <div className="flex items-center gap-4 mb-4 justify-center">
          <div className="h-px flex-1 max-w-xs" style={{ background: "linear-gradient(to right, transparent, rgba(45,90,61,0.35))" }} />
          <span
            className="text-xs uppercase tracking-[0.3em] inline-flex items-center gap-2"
            style={{ color: "#2d5a3d", fontFamily: "var(--font-inter)", fontWeight: 600 }}
          >
            <LeafIcon />
            {t("infantil.label")}
            <LeafIcon />
          </span>
          <div className="h-px flex-1 max-w-xs" style={{ background: "linear-gradient(to left, transparent, rgba(45,90,61,0.35))" }} />
        </div>
        <p
          className="text-center text-xs uppercase tracking-[0.25em] mb-14"
          style={{ color: "#6b8f73", fontFamily: "var(--font-inter)" }}
        >
          {t("infantil.subtitle")}
        </p>

        {/* Carousel wrapper */}
        <div className="relative">
          {/* Handwritten annotation */}
          <div
            aria-hidden
            className="hidden lg:block absolute"
            style={{
              right: -24,
              top: "30%",
              fontFamily: "var(--font-caveat)",
              fontSize: "1.3rem",
              color: "#c1654a",
              lineHeight: 1.5,
              whiteSpace: "pre-line",
              textAlign: "right",
              opacity: 0.8,
              fontWeight: 500,
              maxWidth: 140,
              zIndex: 2,
            }}
          >
            {t("infantil.annotation")}
            {"\n♡"}
          </div>

          {/* Left arrow */}
          <button
            onClick={() => setStartIndex((i) => Math.max(0, i - 1))}
            disabled={!canPrev}
            aria-label="Livro anterior"
            className="hidden md:flex absolute items-center justify-center"
            style={{
              left: -48,
              top: "40%",
              width: 40,
              height: 40,
              borderRadius: "50%",
              background: canPrev ? "rgba(255,255,255,0.9)" : "rgba(255,255,255,0.4)",
              border: "1px solid rgba(45,90,61,0.2)",
              cursor: canPrev ? "pointer" : "default",
              zIndex: 2,
              boxShadow: "0 2px 8px rgba(60,40,22,0.1)",
              transition: "all 0.2s",
            }}
          >
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
              <path d="M10 3L5 8l5 5" stroke={canPrev ? "#2d5a3d" : "#aaa"} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>

          {/* Right arrow */}
          <button
            onClick={() => setStartIndex((i) => Math.min(allBooks.length - VISIBLE, i + 1))}
            disabled={!canNext}
            aria-label="Próximo livro"
            className="hidden md:flex absolute items-center justify-center"
            style={{
              right: -48,
              top: "40%",
              width: 40,
              height: 40,
              borderRadius: "50%",
              background: canNext ? "rgba(255,255,255,0.9)" : "rgba(255,255,255,0.4)",
              border: "1px solid rgba(45,90,61,0.2)",
              cursor: canNext ? "pointer" : "default",
              zIndex: 2,
              boxShadow: "0 2px 8px rgba(60,40,22,0.1)",
              transition: "all 0.2s",
            }}
          >
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
              <path d="M6 3l5 5-5 5" stroke={canNext ? "#2d5a3d" : "#aaa"} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>

          {/* Book cards — desktop: show VISIBLE cards; mobile: horizontal scroll */}
          <div
            className="md:grid gap-6"
            style={{ gridTemplateColumns: `repeat(${VISIBLE}, 1fr)` }}
          >
            {/* Mobile: scrollable row */}
            <div className="flex gap-5 overflow-x-auto pb-4 md:hidden" style={{ scrollSnapType: "x mandatory" }}>
              {allBooks.map((book) => (
                <BookCard key={book.slug} book={book} locale={locale} t={t} />
              ))}
            </div>

            {/* Desktop: show slice based on startIndex */}
            {allBooks.slice(startIndex, startIndex + VISIBLE).map((book, i) => (
              <motion.div
                key={`${book.slug}-${startIndex}`}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.35, delay: i * 0.08 }}
                className="hidden md:flex"
              >
                <BookCard book={book} locale={locale} t={t} />
              </motion.div>
            ))}
          </div>

          {/* Dots */}
          <div className="flex justify-center gap-2 mt-6">
            {Array.from({ length: allBooks.length - VISIBLE + 1 }).map((_, i) => (
              <button
                key={i}
                onClick={() => setStartIndex(i)}
                aria-label={`Posição ${i + 1}`}
                style={{
                  width: i === startIndex ? 20 : 7,
                  height: 7,
                  borderRadius: 4,
                  background: i === startIndex ? "#2d5a3d" : "rgba(45,90,61,0.25)",
                  border: "none",
                  cursor: "pointer",
                  transition: "all 0.3s ease",
                  padding: 0,
                }}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function BookCard({
  book,
  locale,
  t,
}: {
  book: (typeof books)[0];
  locale: string;
  t: (k: string) => string;
}) {
  return (
    <div
      className="flex flex-col items-center shrink-0"
      style={{
        background: "rgba(250,246,237,0.92)",
        borderRadius: 6,
        padding: "20px 18px 22px",
        boxShadow: "0 4px 24px rgba(60,40,22,0.08)",
        width: "min(220px, 72vw)",
        scrollSnapAlign: "start",
      }}
    >
      <div
        className="relative mb-4"
        style={{
          width: "min(180px, 55vw)",
          aspectRatio: "3/4",
          borderRadius: 3,
          overflow: "hidden",
          boxShadow: "0 8px 28px rgba(60,40,22,0.18), -4px 0 0 rgba(0,0,0,0.08)",
        }}
      >
        <Image
          src={book.cover ?? ""}
          alt={book.title}
          fill
          style={{ objectFit: "cover" }}
          sizes="180px"
        />
      </div>

      <h3
        className="text-center mb-1 font-semibold leading-snug"
        style={{ fontFamily: "var(--font-playfair)", fontSize: "0.95rem", color: "#2a1a22" }}
      >
        {book.title}
      </h3>

      <p
        className="text-center text-xs mb-4"
        style={{ color: "#7a5468", fontFamily: "var(--font-inter)", lineHeight: 1.5 }}
      >
        {locale === "de" ? book.genre.de : book.genre.pt}
        {book.available ? "" : (locale === "de" ? " · Bald" : " · Em breve")}
      </p>

      <div className="flex gap-2 w-full">
        <Link
          href={`/loja/${book.slug}`}
          className="text-center py-2 text-xs font-semibold tracking-wide rounded"
          style={{
            border: "1.5px solid rgba(45,90,61,0.4)",
            color: "#2d5a3d",
            fontFamily: "var(--font-inter)",
            flex: book.ctaDisabled ? "1 1 100%" : "1",
          }}
        >
          {t("infantil.sinopse")}
        </Link>
        {!book.ctaDisabled && (
          <Link
            href={`/loja/${book.slug}#comprar`}
            className="flex-1 text-center py-2 text-xs font-semibold tracking-wide rounded"
            style={{
              background: book.available ? "#2d5a3d" : "#9bb5a5",
              color: "#fff",
              fontFamily: "var(--font-inter)",
            }}
          >
            {book.available ? t("infantil.comprar") : (locale === "de" ? "Bald" : "Em breve")}
          </Link>
        )}
      </div>
    </div>
  );
}
