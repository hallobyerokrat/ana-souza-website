"use client";

import Image from "next/image";
import { useT } from "@/lib/i18n";

const FRAME_BG =
  "linear-gradient(145deg, #d4a84a 0%, #8a5e28 40%, #c49038 65%, #d4a84a 100%)";
const FRAME_SHADOW =
  "0 16px 40px rgba(40,25,10,0.3), 0 4px 12px rgba(40,25,10,0.16), inset 0 1px 2px rgba(255,215,160,0.45), inset 0 -2px 3px rgba(0,0,0,0.3)";
const INNER_CORK =
  "linear-gradient(135deg, #c8a870 0%, #b48850 50%, #c0a060 100%)";

function FramedNote({
  href,
  label,
  sublabel,
  rotate = -2,
  pinColor = "pin-red",
  width = 148,
}: {
  href: string;
  label: string;
  sublabel?: string;
  rotate?: number;
  pinColor?: string;
  width?: number;
}) {
  return (
    <a
      href={href}
      className="frame-note"
      style={
        {
          "--fn-rotate": `${rotate}deg`,
          display: "block",
          position: "relative",
          padding: "10px 14px 12px",
          background: "#fdf8ec",
          border: "1px solid rgba(120,88,48,0.25)",
          boxShadow: "0 4px 12px rgba(60,38,20,0.18), 0 1px 3px rgba(60,38,20,0.1)",
          transform: `rotate(${rotate}deg)`,
          transition: "transform 0.5s cubic-bezier(0.22,1,0.36,1), box-shadow 0.5s ease",
          cursor: "pointer",
          width,
          textDecoration: "none",
        } as React.CSSProperties
      }
    >
      <span
        className={`pin ${pinColor}`}
        style={{ position: "absolute", top: -9, left: "50%", marginLeft: -9 }}
      />
      <p
        style={{
          fontFamily: "var(--font-playfair)",
          fontStyle: "italic",
          fontSize: 14,
          color: "#3d2a1a",
          lineHeight: 1.3,
          textAlign: "center",
        }}
      >
        {label}
      </p>
      {sublabel && (
        <p
          style={{
            fontFamily: "var(--font-playfair)",
            fontSize: 11,
            color: "#5a4032",
            marginTop: 5,
            opacity: 0.75,
            textAlign: "center",
            fontStyle: "italic",
          }}
        >
          {sublabel}
        </p>
      )}
    </a>
  );
}

function SideFrame({ children }: { children: React.ReactNode }) {
  return (
    <div style={{ padding: 10, background: FRAME_BG, boxShadow: FRAME_SHADOW, borderRadius: 2 }}>
      <div style={{ padding: 6, background: "#e8d5a8", boxShadow: "inset 0 2px 8px rgba(40,25,10,0.28)" }}>
        <div
          style={{
            background: INNER_CORK,
            backgroundImage: [
              "radial-gradient(circle at 20% 30%, rgba(60,38,22,0.28) 0.5px, transparent 1.5px)",
              "radial-gradient(circle at 70% 65%, rgba(60,38,22,0.22) 0.5px, transparent 1.2px)",
              "radial-gradient(circle at 45% 80%, rgba(180,140,90,0.25) 0.4px, transparent 1px)",
              INNER_CORK,
            ].join(", "),
            backgroundSize: "12px 12px, 16px 16px, 10px 10px, 100% 100%",
            minHeight: 240,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "space-evenly",
            gap: 20,
            padding: "32px 20px",
          }}
        >
          {children}
        </div>
      </div>
    </div>
  );
}

function CenterPhotoFrame({ href }: { href: string }) {
  return (
    <div style={{ padding: 14, background: FRAME_BG, boxShadow: FRAME_SHADOW, borderRadius: 2 }}>
      <div style={{ padding: 8, background: "#e8d5a8", boxShadow: "inset 0 3px 10px rgba(40,25,10,0.32)" }}>
        <a href={href} style={{ display: "block", textDecoration: "none" }}>
          <div
            style={{
              position: "relative",
              width: 220,
              height: 270,
              overflow: "hidden",
              borderRadius: "50%",
              boxShadow: "0 4px 16px rgba(40,25,10,0.28), inset 0 0 0 1px rgba(0,0,0,0.22)",
            }}
          >
            <Image
              src="/images/ana-souza-foto.jpg"
              alt="Ana Souza de Magalhães"
              fill
              sizes="220px"
              style={{ objectFit: "cover", objectPosition: "center 15%" }}
              priority
            />
            <div
              style={{
                position: "absolute",
                inset: 0,
                background: "radial-gradient(ellipse at center, transparent 55%, rgba(40,22,8,0.2) 100%)",
                pointerEvents: "none",
              }}
            />
          </div>
          <p
            style={{
              fontFamily: "var(--font-playfair)",
              fontSize: 14,
              fontStyle: "italic",
              color: "#3d2a1a",
              textAlign: "center",
              marginTop: 12,
              marginBottom: 4,
              letterSpacing: "0.015em",
              opacity: 0.85,
            }}
          >
            Ana Souza de Magalhães
          </p>
        </a>
      </div>
    </div>
  );
}

export default function HeroSection() {
  const { t } = useT();

  return (
    <section
      id="hero"
      className="wallpaper-botanical-dense relative min-h-screen flex flex-col items-center justify-center px-4 pt-28 pb-20 md:pt-32 md:pb-28 overflow-hidden"
    >
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse at 50% 38%, rgba(234,213,160,0.14) 0%, transparent 62%)",
          zIndex: 1,
        }}
      />

      <div className="relative anim-fade-in" style={{ zIndex: 2, animationDelay: "0.1s" }}>
        {/* Desktop: 3 frames */}
        <div className="hidden md:flex items-center gap-10">
          <SideFrame>
            <FramedNote
              href="#livros"
              label={t("hero.note.livros")}
              rotate={-3}
              pinColor="pin-red"
            />
            <FramedNote
              href="#sobre"
              label={t("hero.note.sobre1")}
              sublabel={t("hero.note.sobre2")}
              rotate={2}
              pinColor="pin-blue"
            />
          </SideFrame>

          <CenterPhotoFrame href="#sobre" />

          <SideFrame>
            <FramedNote
              href="#sobre"
              label={t("hero.note.arte")}
              rotate={3}
              pinColor="pin-yellow"
            />
            <FramedNote
              href="#contato"
              label={t("hero.note.contato")}
              sublabel={t("hero.note.contatoSub")}
              rotate={-2}
              pinColor="pin-green"
            />
          </SideFrame>
        </div>

        {/* Mobile: photo on top, 2 side frames below */}
        <div className="md:hidden flex flex-col items-center gap-7">
          <CenterPhotoFrame href="#sobre" />
          <div className="flex gap-5">
            <SideFrame>
              <FramedNote
                href="#livros"
                label={t("hero.note.livros")}
                rotate={-3}
                pinColor="pin-red"
                width={110}
              />
              <FramedNote
                href="#sobre"
                label={t("hero.note.sobre1")}
                sublabel={t("hero.note.sobre2")}
                rotate={2}
                pinColor="pin-blue"
                width={110}
              />
            </SideFrame>
            <SideFrame>
              <FramedNote
                href="#sobre"
                label={t("hero.note.arte")}
                rotate={3}
                pinColor="pin-yellow"
                width={110}
              />
              <FramedNote
                href="#contato"
                label={t("hero.note.contato")}
                sublabel={t("hero.note.contatoSub")}
                rotate={-2}
                pinColor="pin-green"
                width={110}
              />
            </SideFrame>
          </div>
        </div>
      </div>

      {/* Author name + subtitle */}
      <div
        className="relative mt-14 text-center anim-fade-up"
        style={{ animationDelay: "0.8s", zIndex: 2 }}
      >
        <h1
          style={{
            fontFamily: "var(--font-playfair)",
            fontSize: "clamp(2rem, 5vw, 3.5rem)",
            fontWeight: 600,
            color: "#3d2a1a",
            letterSpacing: "0.01em",
            lineHeight: 1.1,
          }}
        >
          Ana Souza{" "}
          <em style={{ fontStyle: "italic", color: "#6b4a2b" }}>de Magalhães</em>
        </h1>
        <p
          className="mt-3"
          style={{
            fontFamily: "var(--font-playfair)",
            fontSize: "clamp(0.95rem, 1.6vw, 1.2rem)",
            color: "#5a4032",
            letterSpacing: "0.06em",
            fontStyle: "italic",
          }}
        >
          {t("hero.caption")}
        </p>
        <p
          className="mt-6 mx-auto leading-relaxed"
          style={{
            fontFamily: "var(--font-playfair)",
            fontSize: "clamp(0.95rem, 1.2vw, 1.1rem)",
            color: "#5a4032",
            maxWidth: 620,
            letterSpacing: "0.005em",
          }}
        >
          {t("hero.subtitle")}
        </p>
      </div>
    </section>
  );
}
