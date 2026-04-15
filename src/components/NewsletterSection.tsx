"use client";

import { useState } from "react";

export default function NewsletterSection() {
  const [email, setEmail] = useState("");
  const [state, setState] = useState<"idle" | "loading" | "success" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    setState("loading");
    // TODO: wire to /api/newsletter
    await new Promise((r) => setTimeout(r, 900));
    setState("success");
  };

  return (
    <section
      id="newsletter"
      className="relative py-28 overflow-hidden"
      style={{
        background:
          "linear-gradient(135deg, #0e0c08 0%, #14110a 100%)",
      }}
    >
      {/* Gold glow */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-60 pointer-events-none"
        style={{
          background: "radial-gradient(ellipse, rgba(201,168,76,0.08) 0%, transparent 70%)",
          filter: "blur(40px)",
        }}
      />

      <div className="relative max-w-2xl mx-auto px-6 text-center">
        {/* Icon */}
        <div
          className="inline-flex items-center justify-center w-14 h-14 rounded-full mb-8"
          style={{
            background: "rgba(201,168,76,0.1)",
            border: "1px solid rgba(201,168,76,0.25)",
          }}
        >
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#c9a84c" strokeWidth={1.5}>
            <path d="M3 8l7.89 5.26a2 2 0 0 0 2.22 0L21 8M5 19h14a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2z" />
          </svg>
        </div>

        <h2
          className="mb-4 leading-snug"
          style={{
            fontFamily: "var(--font-playfair)",
            fontSize: "clamp(1.8rem, 4vw, 2.8rem)",
            fontWeight: 700,
            color: "#f5f0e8",
          }}
        >
          Receba um{" "}
          <em className="gold-text" style={{ fontStyle: "italic" }}>
            capítulo grátis
          </em>
        </h2>

        <p
          className="mb-10 leading-relaxed"
          style={{ color: "rgba(245,240,232,0.55)", fontSize: "1.05rem" }}
        >
          Cadastre-se e ganhe um capítulo exclusivo de{" "}
          <em>Casos de Família</em> — direto no seu e-mail, sem spam.
        </p>

        {state === "success" ? (
          <div
            className="flex flex-col items-center gap-3 py-8"
            style={{ color: "#c9a84c" }}
          >
            <svg width="40" height="40" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
              <circle cx="12" cy="12" r="10" />
              <path d="M8 12l3 3 5-5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            <p className="text-lg font-medium text-cream">
              Obrigada! Verifique seu e-mail.
            </p>
            <p style={{ color: "rgba(245,240,232,0.5)", fontSize: 14 }}>
              O capítulo estará na sua caixa de entrada em instantes.
            </p>
          </div>
        ) : (
          <form
            onSubmit={handleSubmit}
            className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto"
          >
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="seu@email.com"
              required
              className="flex-1 px-5 py-3.5 rounded-full outline-none transition-all duration-300 text-cream placeholder:text-muted"
              style={{
                background: "rgba(255,255,255,0.06)",
                border: "1px solid rgba(255,255,255,0.1)",
              }}
              onFocus={(e) => {
                (e.currentTarget as HTMLElement).style.borderColor = "rgba(201,168,76,0.5)";
              }}
              onBlur={(e) => {
                (e.currentTarget as HTMLElement).style.borderColor = "rgba(255,255,255,0.1)";
              }}
            />
            <button
              type="submit"
              disabled={state === "loading"}
              className="px-7 py-3.5 rounded-full font-semibold text-sm tracking-wide text-ink transition-all duration-300 disabled:opacity-60"
              style={{
                background: "linear-gradient(135deg, #c9a84c, #e8c96a)",
                boxShadow: "0 4px 20px rgba(201,168,76,0.3)",
              }}
            >
              {state === "loading" ? "Enviando…" : "Quero meu capítulo"}
            </button>
          </form>
        )}

        <p
          className="mt-6 text-xs"
          style={{ color: "rgba(245,240,232,0.3)" }}
        >
          Sem spam. Cancele quando quiser. Seus dados são protegidos conforme o RGPD.
        </p>
      </div>
    </section>
  );
}
