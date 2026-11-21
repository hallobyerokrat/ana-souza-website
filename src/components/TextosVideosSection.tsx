"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useT } from "@/lib/i18n";
import { textos, type Texto } from "@/lib/textos";

function PlayIcon() {
  return (
    <svg width="48" height="48" viewBox="0 0 48 48" fill="none" aria-hidden>
      <circle cx="24" cy="24" r="23" stroke="#7a5468" strokeWidth="1.5" opacity="0.4" />
      <polygon points="19,15 35,24 19,33" fill="#7a5468" opacity="0.7" />
    </svg>
  );
}

function TextoModal({ texto, locale, onClose }: { texto: Texto; locale: string; onClose: () => void }) {
  const title = locale === "de" && texto.titleDe ? texto.titleDe : texto.title;
  const body = locale === "de" && texto.bodyDe ? texto.bodyDe : texto.body;
  const fonte = locale === "de" && texto.fonteDe ? texto.fonteDe : texto.fonte;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4"
      style={{ background: "rgba(30,15,10,0.6)", backdropFilter: "blur(4px)" }}
      onClick={onClose}
    >
      <motion.div
        initial={{ opacity: 0, y: 20, scale: 0.97 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        exit={{ opacity: 0, y: 12, scale: 0.97 }}
        transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
        className="relative w-full max-w-2xl max-h-[85vh] overflow-y-auto rounded-xl p-8 md:p-12"
        style={{ background: "#faf6ed", boxShadow: "0 24px 80px rgba(30,15,10,0.35)" }}
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          aria-label="Fechar"
          className="absolute top-5 right-5 flex items-center justify-center w-8 h-8 rounded-full transition-colors hover:bg-black/10"
          style={{ color: "#8b6f4d", cursor: "pointer" }}
        >
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
            <path d="M2 2l12 12M14 2L2 14" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
          </svg>
        </button>
        <h2
          className="mb-6 leading-tight"
          style={{ fontFamily: "var(--font-playfair)", fontSize: "clamp(1.5rem,3vw,2rem)", fontWeight: 600, fontStyle: "italic", color: "#3d2a1a" }}
        >
          {title}
        </h2>
        <div
          className="text-sm leading-loose"
          style={{ color: "#5a4032", whiteSpace: "pre-line", fontFamily: "var(--font-inter)" }}
        >
          {body}
        </div>
        {fonte && (
          <p className="mt-8 pt-6 text-xs" style={{ color: "#9b7060", borderTop: "1px solid rgba(139,111,77,0.2)", fontStyle: "italic", fontFamily: "var(--font-inter)" }}>
            {fonte}
          </p>
        )}
      </motion.div>
    </div>
  );
}

export default function TextosVideosSection() {
  const { t, locale } = useT();
  const [view, setView] = useState<"videos" | "textos">("videos");
  const [openTexto, setOpenTexto] = useState<Texto | null>(null);

  return (
    <>
      <section
        id="videos"
        className="relative overflow-hidden py-20 md:py-28"
        style={{ background: "#faf6ed" }}
      >
        <div className="relative z-10 max-w-6xl mx-auto px-6">

          {/* Arrow switcher — top right */}
          <div className="flex justify-end mb-8">
            <button
              onClick={() => setView(view === "videos" ? "textos" : "videos")}
              className="flex flex-col items-center gap-1 group"
              style={{ cursor: "pointer", background: "none", border: "none" }}
            >
              <span
                className="text-xs uppercase tracking-[0.25em] transition-colors"
                style={{ fontFamily: "var(--font-inter)", fontWeight: 600, color: "#9b7080" }}
              >
                {view === "videos"
                  ? (locale === "de" ? "Texte" : "Textos")
                  : (locale === "de" ? "Videos" : "Vídeos")}
              </span>
              <span
                className="flex items-center justify-center w-9 h-9 rounded-full transition-all group-hover:scale-110"
                style={{ background: "rgba(122,84,104,0.12)", color: "#7a5468" }}
              >
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                  <path
                    d={view === "videos" ? "M6 3l5 5-5 5" : "M10 3L5 8l5 5"}
                    stroke="currentColor"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </span>
            </button>
          </div>

          <AnimatePresence mode="wait">
            {view === "videos" ? (
              <motion.div
                key="videos"
                initial={{ opacity: 0, x: -16 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 16 }}
                transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
              >
                <div className="grid md:grid-cols-2 gap-12 md:gap-20 items-center">
                  <div>
                    <div className="mb-5"><PlayIcon /></div>
                    <span className="block mb-3 text-xs uppercase tracking-[0.3em]" style={{ color: "#7a5468", fontFamily: "var(--font-inter)", fontWeight: 600 }}>
                      {t("videos.label")}
                    </span>
                    <h2 className="mb-3 leading-tight" style={{ fontFamily: "var(--font-playfair)", fontSize: "clamp(1.8rem,4vw,2.8rem)", fontWeight: 700, color: "#2a1a22" }}>
                      {t("videos.title.pre")}{" "}
                      <em style={{ fontStyle: "italic", color: "#7a5468" }}>{t("videos.title.em")}</em>
                    </h2>
                    <p className="mb-2 text-xs uppercase tracking-[0.2em]" style={{ color: "#9b7080", fontFamily: "var(--font-inter)" }}>
                      {t("videos.subtitle")}
                    </p>
                    <p className="mb-7 text-sm leading-relaxed" style={{ color: "#5a3d4a", maxWidth: 380 }}>
                      {locale === "de"
                        ? "Hier findest du Texte, Videos, Interviews und weitere Inhalte über den kreativen Prozess, die Bücher und Projekte."
                        : "Aqui você encontra textos, vídeos, entrevistas e outros conteúdos sobre o processo criativo, os livros e os projetos."}
                    </p>
                  </div>
                  <div>
                    <div className="relative w-full overflow-hidden" style={{ borderRadius: 6, boxShadow: "0 16px 48px rgba(60,40,22,0.18)", background: "#1a0e1a" }}>
                      <video src="/videos/ana-video-1.mp4" controls playsInline className="w-full block" style={{ maxHeight: 340, objectFit: "cover" }} />
                    </div>
                    <div className="relative w-full overflow-hidden mt-4" style={{ borderRadius: 6, boxShadow: "0 8px 24px rgba(60,40,22,0.12)", background: "#1a0e1a" }}>
                      <video src="/videos/ana-video-2.mp4" controls playsInline className="w-full block" style={{ maxHeight: 200, objectFit: "cover" }} />
                    </div>
                  </div>
                </div>
              </motion.div>
            ) : (
              <motion.div
                key="textos"
                initial={{ opacity: 0, x: 16 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -16 }}
                transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
              >
                <div className="mb-10">
                  <span className="block mb-3 text-xs uppercase tracking-[0.3em]" style={{ color: "#7a5468", fontFamily: "var(--font-inter)", fontWeight: 600 }}>
                    {locale === "de" ? "Texte" : "Textos"}
                  </span>
                  <h2 className="leading-tight" style={{ fontFamily: "var(--font-playfair)", fontSize: "clamp(1.8rem,4vw,2.8rem)", fontWeight: 700, color: "#2a1a22" }}>
                    {locale === "de"
                      ? <>Texte <em style={{ fontStyle: "italic", color: "#7a5468" }}>&amp; Schriften</em></>
                      : <>Textos <em style={{ fontStyle: "italic", color: "#7a5468" }}>&amp; Escritos</em></>}
                  </h2>
                </div>
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                  {textos.map((texto) => {
                    const cardTitle = locale === "de" && texto.titleDe ? texto.titleDe : texto.title;
                    const cardExcerpt = locale === "de" && texto.excerptDe ? texto.excerptDe : texto.excerpt;
                    return (
                      <button
                        key={texto.slug}
                        onClick={() => setOpenTexto(texto)}
                        className="text-left flex flex-col justify-between p-6 rounded-xl"
                        style={{ background: "#fff", border: "1px solid rgba(139,111,77,0.15)", boxShadow: "0 2px 12px rgba(60,40,22,0.07)", minHeight: 300, cursor: "pointer", transition: "box-shadow 0.2s, transform 0.2s" }}
                        onMouseEnter={(e) => { (e.currentTarget as HTMLButtonElement).style.boxShadow = "0 8px 28px rgba(60,40,22,0.13)"; (e.currentTarget as HTMLButtonElement).style.transform = "translateY(-2px)"; }}
                        onMouseLeave={(e) => { (e.currentTarget as HTMLButtonElement).style.boxShadow = "0 2px 12px rgba(60,40,22,0.07)"; (e.currentTarget as HTMLButtonElement).style.transform = "translateY(0)"; }}
                      >
                        <div>
                          <h3 className="mb-3 leading-snug" style={{ fontFamily: "var(--font-playfair)", fontSize: "1.1rem", fontWeight: 600, fontStyle: "italic", color: "#3d2a1a" }}>
                            {cardTitle}
                          </h3>
                          <p className="text-sm leading-relaxed" style={{ color: "#7a5a42", display: "-webkit-box", WebkitLineClamp: 5, WebkitBoxOrient: "vertical", overflow: "hidden" } as React.CSSProperties}>
                            {cardExcerpt}
                          </p>
                        </div>
                        <span className="mt-5 text-xs font-semibold tracking-widest uppercase" style={{ color: "#7a5468", fontFamily: "var(--font-inter)" }}>
                          {locale === "de" ? "Lesen →" : "Ler mais →"}
                        </span>
                      </button>
                    );
                  })}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </section>

      <AnimatePresence>
        {openTexto && <TextoModal texto={openTexto} locale={locale} onClose={() => setOpenTexto(null)} />}
      </AnimatePresence>
    </>
  );
}
