"use client";

import { useT } from "@/lib/i18n";

function LeafSmall() {
  return (
    <svg width="10" height="14" viewBox="0 0 10 14" fill="none" aria-hidden style={{ display: "inline", verticalAlign: "middle" }}>
      <path d="M5 13 C5 13 1 9.5 1 6 C1 2.8 2.9 1 5 1 C7.1 1 9 2.8 9 6 C9 9.5 5 13 5 13 Z" fill="#9b7080" opacity="0.5" />
      <line x1="5" y1="13" x2="5" y2="1" stroke="#9b7080" strokeWidth="0.7" opacity="0.35" />
    </svg>
  );
}

const videos = [
  { src: "/videos/ana-video-1.mp4" },
];

export default function VideoSection() {
  return (
    <section
      id="videos"
      className="wallpaper-botanical-dense relative py-24 md:py-32 overflow-hidden"
    >
      <div className="relative z-10 max-w-6xl mx-auto px-6">
        {/* Section label */}
        <div className="flex items-center gap-4 mb-14 justify-center">
          <div
            className="h-px flex-1 max-w-xs"
            style={{ background: "linear-gradient(to right, transparent, rgba(107,80,96,0.3))" }}
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
            Vídeos
            <LeafSmall />
          </span>
          <div
            className="h-px flex-1 max-w-xs"
            style={{ background: "linear-gradient(to left, transparent, rgba(107,80,96,0.3))" }}
          />
        </div>

        <div className="flex flex-wrap justify-center gap-8">
          {videos.map((v, i) => (
            <div
              key={i}
              style={{
                borderRadius: 8,
                overflow: "hidden",
                boxShadow: "0 20px 48px rgba(61,43,53,0.2)",
                maxWidth: 360,
                width: "100%",
              }}
            >
              <video
                src={v.src}
                controls
                playsInline
                style={{ width: "100%", display: "block", background: "#1a0f14" }}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
