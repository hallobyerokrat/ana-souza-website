"use client";

import Image from "next/image";
import { useT } from "@/lib/i18n";

function LeafSmall() {
  return (
    <svg width="10" height="14" viewBox="0 0 10 14" fill="none" aria-hidden style={{ display: "inline", verticalAlign: "middle" }}>
      <path d="M5 13 C5 13 1 9.5 1 6 C1 2.8 2.9 1 5 1 C7.1 1 9 2.8 9 6 C9 9.5 5 13 5 13 Z" fill="#7a5468" opacity="0.6" />
      <line x1="5" y1="13" x2="5" y2="1" stroke="#7a5468" strokeWidth="0.7" opacity="0.4" />
    </svg>
  );
}

function ProjectCard({
  title,
  status,
  desc,
  note,
  cover,
}: {
  title: string;
  status: string;
  desc: string;
  note?: string;
  cover?: string;
}) {
  return (
    <div
      style={{
        background: "#fdf8f5",
        border: "1px solid rgba(107,80,96,0.14)",
        borderRadius: 8,
        padding: "28px 26px",
      }}
    >
      {cover && (
        <div
          style={{
            width: 96,
            marginBottom: 18,
            borderRadius: 6,
            overflow: "hidden",
            boxShadow: "0 4px 14px rgba(61,43,53,0.18)",
          }}
        >
          <Image
            src={cover}
            alt={title}
            width={300}
            height={300}
            style={{ width: "100%", height: "auto", display: "block" }}
          />
        </div>
      )}
      <h3
        style={{
          fontFamily: "var(--font-playfair)",
          fontSize: 22,
          fontWeight: 600,
          color: "#3d2b35",
          marginBottom: 10,
        }}
      >
        {title}
      </h3>
      <span
        style={{
          display: "inline-block",
          fontFamily: "var(--font-inter)",
          fontSize: 10,
          letterSpacing: "0.08em",
          textTransform: "uppercase",
          color: "#7a5468",
          background: "#f5ede8",
          borderRadius: 9999,
          padding: "4px 12px",
          marginBottom: 16,
        }}
      >
        {status}
      </span>
      <p
        style={{
          fontFamily: "var(--font-playfair)",
          fontStyle: "italic",
          fontSize: 14.5,
          color: "#6b5060",
          lineHeight: 1.75,
          margin: 0,
        }}
      >
        {desc}
      </p>
      {note && (
        <p
          style={{
            fontFamily: "var(--font-inter)",
            fontSize: 11.5,
            letterSpacing: "0.03em",
            color: "#7a5468",
            marginTop: 14,
            marginBottom: 0,
          }}
        >
          {note}
        </p>
      )}
    </div>
  );
}

export default function ProjectsSection() {
  const { t } = useT();

  return (
    <section
      id="projetos"
      className="wallpaper-botanical-dense relative overflow-hidden py-24 md:py-32"
    >
      <div className="relative z-10 max-w-5xl mx-auto px-6">
        {/* Section label */}
        <div className="flex items-center gap-4 mb-14 justify-center">
          <div
            className="h-px flex-1 max-w-xs"
            style={{ background: "linear-gradient(to right, transparent, rgba(122,84,104,0.4))" }}
          />
          <span
            className="text-xs uppercase tracking-[0.3em]"
            style={{
              color: "#7a5468",
              fontFamily: "var(--font-inter)",
              fontWeight: 600,
              display: "inline-flex",
              alignItems: "center",
              gap: 6,
            }}
          >
            <LeafSmall />
            {t("projects.label")}
            <LeafSmall />
          </span>
          <div
            className="h-px flex-1 max-w-xs"
            style={{ background: "linear-gradient(to left, transparent, rgba(122,84,104,0.4))" }}
          />
        </div>

        <h2
          className="text-center mb-14 leading-tight"
          style={{
            fontFamily: "var(--font-playfair)",
            fontSize: "clamp(2rem, 5vw, 3.2rem)",
            fontWeight: 600,
            color: "#3d2b35",
          }}
        >
          {t("projects.title.pre")}{" "}
          <em style={{ fontStyle: "italic", color: "#6b5060" }}>
            {t("projects.title.em")}
          </em>
        </h2>

        <div className="grid md:grid-cols-2 gap-6">
          <ProjectCard
            title={t("projects.tata.title")}
            status={t("projects.tata.status")}
            desc={t("projects.tata.desc")}
            note={t("projects.tata.note")}
            cover="/images/tanta-docura-tartaruga-cover.jpg"
          />
          <ProjectCard
            title={t("projects.musica.title")}
            status={t("projects.musica.status")}
            desc={t("projects.musica.desc")}
          />
        </div>
      </div>
    </section>
  );
}
