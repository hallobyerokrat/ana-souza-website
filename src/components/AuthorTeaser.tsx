"use client";

import Image from "next/image";
import { useT } from "@/lib/i18n";

export default function AuthorTeaser() {
  const { t } = useT();

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        padding: "36px 24px 12px",
      }}
    >
      <div
        style={{
          display: "inline-flex",
          alignItems: "center",
          gap: 16,
          background: "#f0ebe0",
          borderRadius: 40,
          padding: "10px 24px 10px 10px",
          boxShadow:
            "0 0 8px 4px #f0ebe0, 0 0 18px 10px rgba(240,235,224,0.85)",
        }}
      >
        {/* Foto */}
        <div
          style={{
            width: 48,
            height: 48,
            borderRadius: "50%",
            overflow: "hidden",
            flexShrink: 0,
            border: "2px solid rgba(139,111,77,0.3)",
          }}
        >
          <Image
            src="/images/ana-souza-foto.jpg"
            alt="Ana Souza de Magalhães"
            width={48}
            height={48}
            style={{ objectFit: "cover", width: "100%", height: "100%" }}
          />
        </div>

        {/* Text */}
        <div>
          <p
            style={{
              fontFamily: "var(--font-playfair)",
              fontSize: 15,
              fontWeight: 600,
              color: "#3d2a1a",
              margin: 0,
              lineHeight: 1.3,
            }}
          >
            Ana Souza de Magalh&#xE3;es
          </p>
          <p
            style={{
              fontFamily: "var(--font-inter)",
              fontSize: 11,
              color: "#8b6f4d",
              margin: 0,
              letterSpacing: "0.08em",
              textTransform: "uppercase",
              marginTop: 2,
            }}
          >
            {t("hero.caption")}
          </p>
        </div>
      </div>
    </div>
  );
}
