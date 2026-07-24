"use client";

import Image from "next/image";
import { useT } from "@/lib/i18n";
import { useBookDescription } from "@/lib/useBookDescription";
import BookReviewAccordion from "@/components/BookReviewAccordion";
import BuyOptions from "@/components/BuyOptions";
import { getBook } from "@/lib/books";

const CEU_SEED_REVIEWS = [
  {
    id: "seed-1",
    name: "Anônimo",
    stars: 5,
    comment: "Eu super indico o livro Céu de Brincar. É um livro que nos leva a antigos hábitos que foram se perdendo com o tempo. As crianças precisam desse livro para se conectar com as maravilhas que Deus nos proporciona e deixar de lado o celular.",
    date: "2026",
  },
];

function LeafSmall() {
  return (
    <svg width="10" height="14" viewBox="0 0 10 14" fill="none" aria-hidden style={{ display: "inline", verticalAlign: "middle" }}>
      <path d="M5 13 C5 13 1 9.5 1 6 C1 2.8 2.9 1 5 1 C7.1 1 9 2.8 9 6 C9 9.5 5 13 5 13 Z" fill="#9b7080" opacity="0.5" />
      <line x1="5" y1="13" x2="5" y2="1" stroke="#9b7080" strokeWidth="0.7" opacity="0.35" />
    </svg>
  );
}

export default function CeuDeBrincarSection() {
  const { t, locale } = useT();
  const paragraphs = useBookDescription("ceu-de-brincar", locale, [
    t("ceu.p1"),
    t("ceu.p2"),
    t("ceu.p3"),
  ]);

  return (
    <section
      id="ceu-de-brincar"
      className="wallpaper-botanical-dense relative overflow-hidden py-24 md:py-32"
    >

      <div className="relative z-10 max-w-6xl mx-auto px-6">
        {/* Section label */}
        <div className="flex items-center gap-4 mb-14 justify-center">
          <div
            className="h-px flex-1 max-w-xs"
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
              display: "inline-flex",
              alignItems: "center",
              gap: 6,
            }}
          >
            <LeafSmall />
            {t("ceu.label")}
            <LeafSmall />
          </span>
          <div
            className="h-px flex-1 max-w-xs"
            style={{
              background:
                "linear-gradient(to left, transparent, rgba(107,80,96,0.3))",
            }}
          />
        </div>

        <div className="grid md:grid-cols-[1fr_auto] gap-14 md:gap-20 items-center">
          {/* Text (left on desktop) */}
          <div className="md:order-1 order-2" style={{ background: "#f5ede8", borderRadius: 4, padding: "4px 8px", boxShadow: "0 0 8px 4px #f5ede8, 0 0 18px 10px rgba(245,237,232,0.85), 0 0 36px 18px rgba(245,237,232,0.45)", width: "fit-content", maxWidth: "100%" }}>
            <h2
              className="mb-6 leading-tight"
              style={{
                fontFamily: "var(--font-playfair)",
                fontSize: "clamp(1.8rem, 4.2vw, 3rem)",
                fontWeight: 600,
                color: "#3d2b35",
                letterSpacing: "0.005em",
              }}
            >
              {t("ceu.title.pre")}{" "}
              <em style={{ fontStyle: "italic", color: "#6b5060" }}>
                {t("ceu.title.em")}
              </em>
            </h2>

            {paragraphs.map((p, i) => (
              <p
                key={i}
                className="text-sm leading-loose mb-4"
                style={{ color: "#6b5060", maxWidth: 520 }}
              >
                {p}
              </p>
            ))}

            {/* Buy options */}
            {getBook("ceu-de-brincar")?.buyOptions && (
              <BuyOptions regions={getBook("ceu-de-brincar")!.buyOptions!} locale={locale} />
            )}
          </div>

          {/* Book cover (right on desktop) */}
          <div className="md:order-2 order-1 flex justify-center md:justify-end">
            <div className="relative" style={{ width: "min(280px, 70vw)", height: "calc(min(280px, 70vw) * 1.5)" }}>
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
                <Image
                  src="/images/ceu-de-brincar-cover.png"
                  alt="Céu de Brincar"
                  fill
                  sizes="280px"
                  style={{ objectFit: "cover" }}
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
              </div>
            </div>
          </div>
        </div>

        <BookReviewAccordion bookId="ceu-de-brincar" seedReviews={CEU_SEED_REVIEWS} />
      </div>
    </section>
  );
}
