"use client";

import { useEffect, useState } from "react";

export default function ScrollToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 600);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  if (!visible) return null;

  return (
    <button
      type="button"
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      aria-label="Nach oben / Voltar ao topo"
      style={{
        position: "fixed",
        bottom: "2rem",
        right: "1.5rem",
        zIndex: 50,
        width: 42,
        height: 42,
        borderRadius: "50%",
        background: "rgba(250,246,237,0.92)",
        border: "1px solid rgba(61,42,26,0.18)",
        boxShadow: "0 4px 14px rgba(60,40,22,0.18)",
        backdropFilter: "blur(8px)",
        WebkitBackdropFilter: "blur(8px)",
        cursor: "pointer",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        transition: "all 0.25s ease",
        color: "#5a4032",
      }}
      onMouseEnter={(e) => {
        (e.currentTarget as HTMLElement).style.background = "#6d7e5f";
        (e.currentTarget as HTMLElement).style.color = "#faf6ed";
        (e.currentTarget as HTMLElement).style.borderColor = "transparent";
      }}
      onMouseLeave={(e) => {
        (e.currentTarget as HTMLElement).style.background = "rgba(250,246,237,0.92)";
        (e.currentTarget as HTMLElement).style.color = "#5a4032";
        (e.currentTarget as HTMLElement).style.borderColor = "rgba(61,42,26,0.18)";
      }}
    >
      <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round">
        <path d="M8 12V4M4 8l4-4 4 4" />
      </svg>
    </button>
  );
}
