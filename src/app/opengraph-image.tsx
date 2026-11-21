import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "Ana Souza de Magalhães — Escritora";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          background: "linear-gradient(135deg, #faf6ed 0%, #f0e6d3 50%, #e8d5bc 100%)",
          position: "relative",
        }}
      >
        {/* Decorative top border */}
        <div style={{
          position: "absolute",
          top: 0, left: 0, right: 0,
          height: 6,
          background: "linear-gradient(90deg, #7a5468, #2d5a3d, #7a5468)",
          display: "flex",
        }} />

        {/* Decorative corner lines */}
        <div style={{
          position: "absolute",
          top: 40, left: 60, right: 60, bottom: 40,
          border: "1px solid rgba(122,84,104,0.25)",
          borderRadius: 4,
          display: "flex",
        }} />

        {/* Main content */}
        <div style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: 0,
        }}>
          {/* Small label */}
          <div style={{
            fontSize: 14,
            letterSpacing: "0.35em",
            textTransform: "uppercase",
            color: "#8b6f4d",
            marginBottom: 20,
            display: "flex",
          }}>
            AUTORA · ESCRITORA
          </div>

          {/* Name */}
          <div style={{
            fontSize: 72,
            fontWeight: 700,
            color: "#3d2b35",
            lineHeight: 1.1,
            textAlign: "center",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}>
            <span>Ana Souza</span>
            <span style={{ color: "#6b5060", fontSize: 56 }}>de Magalhães</span>
          </div>

          {/* Divider */}
          <div style={{
            width: 80,
            height: 2,
            background: "linear-gradient(90deg, transparent, #7a5468, transparent)",
            margin: "28px 0",
            display: "flex",
          }} />

          {/* Tagline */}
          <div style={{
            fontSize: 22,
            color: "#7a5468",
            letterSpacing: "0.08em",
            display: "flex",
          }}>
            Literatura entre mundos
          </div>
        </div>

        {/* Bottom border */}
        <div style={{
          position: "absolute",
          bottom: 0, left: 0, right: 0,
          height: 6,
          background: "linear-gradient(90deg, #2d5a3d, #7a5468, #2d5a3d)",
          display: "flex",
        }} />
      </div>
    ),
    { ...size }
  );
}
