"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useT } from "@/lib/i18n";
import { createClient } from "@/lib/supabase/client";

// ─── Shared ──────────────────────────────────────────────────────────────────

function SectionDivider() {
  return (
    <div aria-hidden style={{ display: "flex", alignItems: "center", gap: 12, margin: "0 auto", maxWidth: 320 }}>
      <div style={{ flex: 1, height: 1, background: "rgba(107,80,96,0.2)" }} />
      <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
        <circle cx="5" cy="5" r="1.8" fill="#9b7080" opacity="0.45" />
        <ellipse cx="5" cy="1.5" rx="1.2" ry="1.6" fill="#9b7080" opacity="0.3" />
        <ellipse cx="5" cy="8.5" rx="1.2" ry="1.6" fill="#9b7080" opacity="0.3" />
        <ellipse cx="1.5" cy="5" rx="1.6" ry="1.2" fill="#9b7080" opacity="0.3" />
        <ellipse cx="8.5" cy="5" rx="1.6" ry="1.2" fill="#9b7080" opacity="0.3" />
      </svg>
      <div style={{ flex: 1, height: 1, background: "rgba(107,80,96,0.2)" }} />
    </div>
  );
}

function SectionHeader({ label, title }: { label: string; title: string }) {
  return (
    <div style={{ textAlign: "center", marginBottom: 48 }}>
      <span style={{ fontFamily: "var(--font-inter)", fontSize: 10, letterSpacing: "0.28em", textTransform: "uppercase", color: "#9b7080", display: "block", marginBottom: 12 }}>
        {label}
      </span>
      <h2 style={{ fontFamily: "var(--font-playfair)", fontSize: "clamp(1.6rem, 4vw, 2.4rem)", fontWeight: 500, color: "#3d2b35", margin: 0 }}>
        {title}
      </h2>
    </div>
  );
}

// ─── Textos Section ───────────────────────────────────────────────────────────

const SEED_TEXTOS = [
  {
    id: "carta-jovem-escritor",
    title: "Carta a um Jovem Escritor",
    body: `Meu caro escritor,

hoje recebi seu livro. Quero agradecer pelo imenso carinho a mim dedicado. Fiquei muito feliz com esse gesto.

Ao folheá-lo, me encantei com as ilustrações. Elas me remeteram ao Pequeno Príncipe: quanta candura nos traços! O ilustrador soube interpretar muito bem as palavras. A capa, então! Fiquei encantada com a leveza e a perfeição da fênix. O último capítulo levou-me às lágrimas. Li também a correspondência que estava anexada na primeira página.

Ao lê-la, percebi sua frustração, o desapontamento com a escrita e, principalmente, a dúvida quanto a continuar nessa jornada de escritor.

Sim, meu caro, compreendo perfeitamente sua angústia. Dói — e é totalmente aceitável sentir essa dor. Este é um momento confuso, cheio de sentimentos contraditórios. Enquanto alguns parecem seguir adiante sem tropeços, para outros o caminho exige mais tempo, mais esforço.

Para mim, foi assim. E talvez para você não seja muito diferente. Depois que terminamos de escrever, começa um trabalho diferente — e, muitas vezes, mais difícil.

Quando comecei, pensei em desistir. Lembro-me do lançamento de meu primeiro livro, uma obra infantil. Acreditei, ingenuamente, que conseguiria vender o bastante para cobrir as despesas da publicação.

Ledo engano. As vendas foram um desastre.

O que mais me feriu foi ver a editora dedicar toda a publicidade a outro título infantil, de uma autora já reconhecida. Não preciso dizer o quanto aquilo foi frustrante e doloroso.

No auge da revolta, perguntei a mim mesma:
— O que ela tem que eu não tenho?
Tudo, respondi.

Ela tinha nome, experiência e leitores. Eu sabia disso, mas algo dentro de mim insistia em dizer que eu não era escritora. Pensei em queimar o livro, mas não o fiz.

Recolhi-me em silêncio e permaneci assim por dias, meses e anos. Só muito tempo depois compreendi o que estava acontecendo. Este afastamento, após lançar o livro, foi para mim uma espécie de resguardo.

O resguardo é aprender a confiar no instinto materno. É um processo confuso: noites mal dormidas, choros incessantes, peito dolorido, leite que teima em não sair. Queremos mostrar ao mundo a beleza do filho, mas estamos cansadas, desarrumadas, escondidas atrás de olheiras. Ao mesmo tempo que ansiamos por reconhecimento, tudo o que desejamos é desaparecer.

Com o tempo, tudo se acalma. As noites deixam de ser um tormento, os choros passam a ter hora marcada, as cólicas já são compreendidas e — pasme — aprendemos até a reconhecer o significado de cada choro. Assim se constrói a relação entre mãe e filho: ele nasce de nós, mas não para nós.

O mesmo acontece com os livros. Eles também nascem de nós, mas não para nós. Esse período eu o chamo de resguardo literário.

Você está, justamente, nessa fase: a do resguardo literário. Um período para aprender a conviver com sua criação. Ela é sua obra. Queira ou não, nasceu de você. E, a partir daí, ganha o mundo. Não é mais possível controlá-la.

Certa vez, após ler um de meus poemas, um senhor disse:
— Não entendo muito o que você escreve, mas há algo filosófico nas letras. Por isso, você deve continuar.

Para encerrar, cuide de sua obra e de si mesmo. Ambos ainda estão aprendendo a caminhar juntos.

Um grande abraço — e já ansiosa para ler o próximo livro, que sei que virá.

Ana Souza de Magalhães

_______________________
Texto produzido como exercício do curso de escrita criativa da Escola Metamorfose`,
  },
];

function TextosSection() {
  const { locale } = useT();
  const [openIdx, setOpenIdx] = useState<number | null>(null);
  const [textos, setTextos] = useState<{ id: string; title: string; body: string }[]>([]);
  const supabase = createClient();

  useEffect(() => {
    supabase.from("textos").select("*").order("sort_order").then(({ data }) => setTextos(data ?? []));
  }, []);

  const label = locale === "de" ? "Worte" : "Palavras";
  const title = locale === "de" ? "Gedichte & Texte" : "Poemas & Textos";
  const items = textos.length > 0 ? textos : SEED_TEXTOS;

  return (
    <section style={{ padding: "80px 24px", background: "rgba(245,237,232,0.4)" }}>
      <div style={{ maxWidth: 720, margin: "0 auto" }}>
        <SectionHeader label={label} title={title} />
        <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
          {items.map((item, i) => {
            const isOpen = openIdx === i;
            return (
              <div key={item.id} style={{ background: "#fdf8f5", border: "1px solid rgba(107,80,96,0.15)", borderRadius: 8, overflow: "hidden", borderLeft: "3px solid rgba(107,80,96,0.3)" }}>
                <button
                  onClick={() => item.body ? setOpenIdx(isOpen ? null : i) : undefined}
                  disabled={!item.body}
                  style={{ width: "100%", display: "flex", alignItems: "center", justifyContent: "space-between", padding: "18px 24px", background: "none", border: "none", cursor: item.body ? "pointer" : "default", textAlign: "left", gap: 12 }}
                >
                  <span style={{ fontFamily: "var(--font-playfair)", fontStyle: "italic", fontSize: 16, color: "#3d2b35" }}>{item.title}</span>
                  {item.body && (
                    <svg width="14" height="14" viewBox="0 0 14 14" fill="none" style={{ flexShrink: 0, transition: "transform 0.35s ease", transform: isOpen ? "rotate(180deg)" : "rotate(0deg)" }}>
                      <path d="M3 5l4 4 4-4" stroke="#9b7080" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  )}
                </button>
                <div style={{ overflow: "hidden", maxHeight: isOpen ? 600 : 0, transition: "max-height 0.45s cubic-bezier(0.22,1,0.36,1)" }}>
                  <p style={{ fontFamily: "var(--font-playfair)", fontStyle: "italic", fontSize: 15, color: "#6b5060", lineHeight: 1.8, margin: 0, padding: "0 24px 24px", whiteSpace: "pre-wrap" }}>{item.body}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

// ─── Fotos Section ────────────────────────────────────────────────────────────

function FotosSection() {
  const { locale } = useT();
  const [photos, setPhotos] = useState<{ id: string; url: string }[]>([]);
  const supabase = createClient();

  useEffect(() => {
    supabase.from("photos").select("id, url").order("created_at", { ascending: false }).then(({ data }) => setPhotos(data ?? []));
  }, []);

  if (photos.length === 0) return null;

  const label = "Fotos";
  const title = locale === "de" ? "Momente & Impressionen" : "Momentos & Impressões";

  return (
    <section style={{ padding: "80px 24px" }}>
      <div style={{ maxWidth: 960, margin: "0 auto" }}>
        <SectionHeader label={label} title={title} />
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(200px, 1fr))", gap: 16 }}>
          {photos.map(p => (
            <img key={p.id} src={p.url} alt="" style={{ width: "100%", aspectRatio: "1", objectFit: "cover", borderRadius: 6, display: "block" }} />
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── Videos Section ───────────────────────────────────────────────────────────

const LOCAL_VIDEOS = [
  { src: "/videos/ana-video-2.mp4" },
  { src: "/videos/ana-video-1.mp4" },
];

function VideosSection() {
  const { locale } = useT();
  const [ytVideos, setYtVideos] = useState<{ id: string; title: string; youtube_url: string }[]>([]);
  const supabase = createClient();

  useEffect(() => {
    supabase.from("videos").select("*").order("sort_order").then(({ data }) => setYtVideos(data ?? []));
  }, []);

  function youtubeId(url: string) {
    return url.match(/(?:v=|youtu\.be\/)([^&?/]+)/)?.[1] ?? null;
  }

  const label = locale === "de" ? "Videos" : "Vídeos";
  const title = locale === "de" ? "Videos & Auftritte" : "Vídeos & Apresentações";

  return (
    <section style={{ padding: "80px 24px", background: "rgba(245,237,232,0.4)" }}>
      <div style={{ maxWidth: 960, margin: "0 auto" }}>
        <SectionHeader label={label} title={title} />
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))", gap: 24 }}>
          {LOCAL_VIDEOS.map((v, i) => (
            <div key={i} style={{ borderRadius: 8, overflow: "hidden", boxShadow: "0 20px 48px rgba(61,43,53,0.2)" }}>
              <video
                src={v.src}
                controls
                playsInline
                style={{ width: "100%", display: "block", background: "#1a0f14" }}
              />
            </div>
          ))}
          {ytVideos.map(v => {
            const vid = youtubeId(v.youtube_url);
            if (!vid) return null;
            return (
              <div key={v.id} style={{ borderRadius: 8, overflow: "hidden", boxShadow: "0 20px 48px rgba(61,43,53,0.2)" }}>
                <iframe
                  src={`https://www.youtube.com/embed/${vid}`}
                  title={v.title}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  style={{ width: "100%", aspectRatio: "16/9", border: "none", display: "block" }}
                />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

// ─── Page ─────────────────────────────────────────────────────────────────────

export default function ArtesPage() {
  const { locale } = useT();

  const backLabel = locale === "de" ? "← Zurück" : "← Voltar";
  const pageTitle = locale === "de" ? "Kunst & Texte" : "Arte e Textos";
  const pageSubtitle = locale === "de"
    ? "Texte, Fotos und Videos von Ana Souza de Magalhães"
    : "Textos, fotos e vídeos de Ana Souza de Magalhães";

  return (
    <>
      <Navbar />
      <main className="wallpaper-botanical-dense" style={{ paddingTop: 64, minHeight: "100vh" }}>
        <div style={{ padding: "72px 24px 48px", textAlign: "center", background: "rgba(245,237,232,0.6)", borderBottom: "1px solid rgba(107,80,96,0.1)" }}>
          <Link href="/#hero" style={{ fontFamily: "var(--font-inter)", fontSize: 12, color: "#9b7080", textDecoration: "none", letterSpacing: "0.08em", display: "inline-block", marginBottom: 24 }}>
            {backLabel}
          </Link>
          <h1 style={{ fontFamily: "var(--font-playfair)", fontSize: "clamp(2.8rem, 8vw, 5.5rem)", fontWeight: 400, fontStyle: "italic", color: "#7a2d58", margin: "0 0 16px", letterSpacing: "0.01em", lineHeight: 1.15 }}>
            {pageTitle}
          </h1>
          <p style={{ fontFamily: "var(--font-inter)", fontSize: 15, color: "#6b5060", maxWidth: 480, margin: "0 auto", lineHeight: 1.7 }}>
            {pageSubtitle}
          </p>
        </div>

        <TextosSection />
        <SectionDivider />
        <FotosSection />
        <SectionDivider />
        <VideosSection />
      </main>
      <Footer />
    </>
  );
}
