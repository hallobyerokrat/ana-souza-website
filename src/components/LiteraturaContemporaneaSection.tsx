"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { useT } from "@/lib/i18n";
import { books } from "@/lib/books";

const SLUGS = ["entre-flores", "planeta-fantastico", "casos-de-familia"];

export default function LiteraturaContemporaneaSection() {
  const { t, locale } = useT();
  const sectionBooks = SLUGS.map((s) => books.find((b) => b.slug === s)).filter(Boolean) as typeof books;

  return (
    <section
      id="contemporanea"
      className="relative overflow-hidden py-20 md:py-28"
      style={{ background: "#f0e6d3" }}
    >
      <div className="relative z-10 max-w-6xl mx-auto px-6">
        {/* Header */}
        <div className="flex items-center gap-4 mb-4 justify-center">
          <div
            className="h-px flex-1 max-w-xs"
            style={{ background: "linear-gradient(to right, transparent, rgba(122,84,104,0.35))" }}
          />
          <span
            className="text-xs uppercase tracking-[0.3em]"
            style={{ color: "#7a5468", fontFamily: "var(--font-inter)", fontWeight: 600 }}
          >
            📖 {t("contemp.label")}
          </span>
          <div
            className="h-px flex-1 max-w-xs"
            style={{ background: "linear-gradient(to left, transparent, rgba(122,84,104,0.35))" }}
          />
        </div>
        <p
          className="text-center text-xs uppercase tracking-[0.25em] mb-14"
          style={{ color: "#9b7060", fontFamily: "var(--font-inter)" }}
        >
          {t("contemp.subtitle")}
        </p>

        {/* Cards */}
        <div className="relative">
          {/* Handwritten annotation */}
          <div
            aria-hidden
            className="hidden lg:block absolute"
            style={{
              right: -20,
              top: "-10%",
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
            {t("contemp.annotation")}
            {"\n♡"}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 justify-items-center">
            {sectionBooks.map((book, i) => (
              <motion.div
                key={book.slug}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.35, delay: i * 0.1 }}
                className="flex"
              >
                <ContempoCard book={book} locale={locale} t={t} />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function ContempoCard({
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
      className="flex flex-col items-center"
      style={{
        background: "rgba(255,252,247,0.85)",
        borderRadius: 6,
        padding: "20px 18px 22px",
        boxShadow: "0 4px 24px rgba(60,40,22,0.08)",
        width: "min(220px, 82vw)",
      }}
    >
      <div
        className="relative mb-4"
        style={{
          width: "min(180px, 60vw)",
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
        {book.available ? "" : locale === "de" ? " · Bald" : " · Em breve"}
      </p>

      <div className="flex gap-2 w-full">
        <Link
          href={`/loja/${book.slug}`}
          className="text-center py-2 text-xs font-semibold tracking-wide rounded"
          style={{
            border: "1.5px solid rgba(122,84,104,0.4)",
            color: "#7a5468",
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
              background: book.available ? "#7a5468" : "#b5a0ab",
              color: "#fff",
              fontFamily: "var(--font-inter)",
            }}
          >
            {book.available ? t("infantil.comprar") : locale === "de" ? "Bald" : "Em breve"}
          </Link>
        )}
      </div>
    </div>
  );
}
