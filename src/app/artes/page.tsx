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
    title_pt: "Carta a um Jovem Escritor",
    title_de: "Brief an einen jungen Schriftsteller",
    body_pt: `Meu caro escritor,

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
    body_de: `Mein lieber Schriftsteller,

heute erhielt ich dein Buch. Ich möchte dir für die große Zuneigung danken, die du mir damit erwiesen hast. Es hat mich sehr gefreut.

Als ich darin blätterte, verzauberten mich die Illustrationen. Sie erinnerten mich an den Kleinen Prinzen: welch eine Zartheit in den Linien! Der Illustrator hat die Worte sehr einfühlsam zum Leben erweckt. Und das Cover! Ich war hingerissen von der Leichtigkeit und der Vollkommenheit des Phönix. Das letzte Kapitel brachte mich zum Weinen. Ich las auch den Brief, der auf der ersten Seite beigelegt war.

Beim Lesen spürte ich deine Frustration, die Enttäuschung über das Schreiben — und vor allem den Zweifel, ob du diesen Weg als Schriftsteller weitergehen sollst.

Ja, mein Lieber, ich verstehe deine Qual vollkommen. Es schmerzt — und es ist völlig berechtigt, diesen Schmerz zu empfinden. Dies ist ein verwirrender Moment, voller widersprüchlicher Gefühle. Während manche scheinbar mühelos vorankommen, brauchen andere mehr Zeit, mehr Anstrengung.

Mir erging es so. Und vielleicht ist es für dich nicht viel anders. Wenn wir aufgehört haben zu schreiben, beginnt eine andere Arbeit — und oft eine schwierigere.

Als ich anfing, dachte ich daran aufzugeben. Ich erinnere mich an die Veröffentlichung meines ersten Buches, eines Kinderbuches. Ich glaubte naiv, ich würde genug verkaufen, um die Druckkosten zu decken.

Ein Irrtum. Der Verkauf war ein Desaster.

Was mich am meisten verletzte, war zu sehen, wie der Verlag alle Werbung auf einen anderen Kindertitel verwendete — den einer bereits bekannten Autorin. Ich muss nicht sagen, wie frustrierend und schmerzhaft das war.

Auf dem Höhepunkt meiner Empörung fragte ich mich:
— Was hat sie, was ich nicht habe?
Alles, antwortete ich mir.

Sie hatte einen Namen, Erfahrung und Leser. Das wusste ich — doch etwas in mir bestand darauf zu sagen, ich sei keine Schriftstellerin. Ich dachte daran, das Buch zu verbrennen, aber ich tat es nicht.

Ich zog mich in die Stille zurück und blieb so für Tage, Monate, Jahre. Erst viel später verstand ich, was geschah. Dieses Zurückziehen nach der Veröffentlichung war für mich eine Art Wochenbett.

Das Wochenbett bedeutet, lernen dem mütterlichen Instinkt zu vertrauen. Es ist ein verwirrender Prozess: schlaflose Nächte, nicht enden wollende Tränen, ein schmerzender Körper, Milch die nicht fließen will. Wir möchten der Welt die Schönheit unseres Kindes zeigen, aber wir sind erschöpft, zerstreut, versteckt hinter dunklen Augenringen. Gleichzeitig, da wir uns nach Anerkennung sehnen, ist das Einzige, was wir wollen, zu verschwinden.

Mit der Zeit beruhigt sich alles. Die Nächte hören auf, eine Qual zu sein, das Weinen bekommt seine Stunden, die Koliken werden verständlich — und man lernt sogar, die Bedeutung jedes Weinens zu erkennen. So entsteht die Beziehung zwischen Mutter und Kind: Es wird aus uns geboren, aber nicht für uns.

Das Gleiche gilt für Bücher. Auch sie werden aus uns geboren, aber nicht für uns. Diese Zeit nenne ich das literarische Wochenbett.

Du befindest dich genau in dieser Phase: der des literarischen Wochenbetts. Eine Zeit, um zu lernen, mit deinem Werk zu leben. Es ist dein Werk. Ob du willst oder nicht — es ist aus dir entstanden. Und von da an gehört es der Welt. Es lässt sich nicht mehr beherrschen.

Einmal, nachdem ein Herr eines meiner Gedichte gelesen hatte, sagte er:
— Ich verstehe nicht ganz, was du schreibst, aber es liegt etwas Philosophisches in den Worten. Deshalb musst du weitermachen.

Zum Schluss: Sorge für dein Werk und für dich selbst. Beide lernen noch, gemeinsam zu gehen.

Eine herzliche Umarmung — und schon ungeduldig, das nächste Buch zu lesen, von dem ich weiß, dass es kommen wird.

Ana Souza de Magalhães

_______________________
Text entstanden als Übung im Kurs für kreatives Schreiben der Escola Metamorfose`,
  },
];

function TextosSection() {
  const { locale } = useT();
  const [textos, setTextos] = useState<{ id: string; title_pt: string; title_de: string; body_pt: string; body_de: string }[]>([]);
  const [activeId, setActiveId] = useState<string | null>(null);
  const supabase = createClient();

  useEffect(() => {
    supabase.from("textos").select("*").order("sort_order").then(({ data }) => setTextos(data ?? []));
  }, []);

  useEffect(() => {
    document.body.style.overflow = activeId ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [activeId]);

  const readMore = locale === "de" ? "Lesen →" : "Ler mais →";
  const rawItems = textos.length > 0 ? textos : SEED_TEXTOS;
  const items = rawItems.map(i => ({
    id: i.id,
    title: locale === "de" ? i.title_de : i.title_pt,
    body: locale === "de" ? i.body_de : i.body_pt,
  }));
  const activeItem = items.find(i => i.id === activeId) ?? null;

  function teaser(body: string) {
    const lines = body.trim().split("\n").filter(l => l.trim());
    const preview = lines.slice(0, 2).join(" ");
    return (preview.length > 150 ? preview.slice(0, 150) : preview) + "…";
  }

  return (
    <section style={{ padding: "80px 24px", background: "rgba(245,237,232,0.4)" }}>
      <div style={{ maxWidth: 960, margin: "0 auto" }}>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(260px, 1fr))", gap: 20 }}>
          {items.map(item => (
            <button
              key={item.id}
              onClick={() => setActiveId(item.id)}
              style={{
                background: "#fdf8f5",
                border: "1px solid rgba(107,80,96,0.15)",
                borderRadius: 10,
                padding: "24px 22px 20px",
                cursor: "pointer",
                textAlign: "left",
                display: "flex",
                flexDirection: "column",
                gap: 0,
                transition: "box-shadow 0.2s, transform 0.2s",
                boxShadow: "0 2px 8px rgba(61,43,53,0.06)",
              }}
              onMouseEnter={e => {
                (e.currentTarget as HTMLElement).style.boxShadow = "0 10px 28px rgba(61,43,53,0.14)";
                (e.currentTarget as HTMLElement).style.transform = "translateY(-3px)";
              }}
              onMouseLeave={e => {
                (e.currentTarget as HTMLElement).style.boxShadow = "0 2px 8px rgba(61,43,53,0.06)";
                (e.currentTarget as HTMLElement).style.transform = "translateY(0)";
              }}
            >
              <div style={{ width: 28, height: 2, background: "rgba(122,84,104,0.3)", borderRadius: 2, marginBottom: 16 }} />
              <h3 style={{ fontFamily: "var(--font-playfair)", fontStyle: "italic", fontSize: 21, color: "#3d2b35", margin: "0 0 12px", lineHeight: 1.35 }}>
                {item.title}
              </h3>
              <p style={{ fontFamily: "var(--font-playfair)", fontStyle: "italic", fontSize: 13, color: "#9b7080", lineHeight: 1.75, margin: "0 0 20px", flex: 1 }}>
                {teaser(item.body)}
              </p>
              <span style={{ fontFamily: "var(--font-inter)", fontSize: 11, color: "#7a5468", letterSpacing: "0.1em", textTransform: "uppercase" }}>
                {readMore}
              </span>
            </button>
          ))}
        </div>
      </div>

      {activeItem && (
        <div
          onClick={() => setActiveId(null)}
          style={{ position: "fixed", inset: 0, background: "rgba(30,15,20,0.6)", zIndex: 1000, display: "flex", alignItems: "center", justifyContent: "center", padding: 24 }}
        >
          <div
            onClick={e => e.stopPropagation()}
            style={{ background: "#fdf8f5", borderRadius: 12, maxWidth: 640, width: "100%", maxHeight: "85vh", overflowY: "auto", padding: "44px 40px 40px", position: "relative", boxShadow: "0 32px 80px rgba(30,15,20,0.35)" }}
          >
            <button
              onClick={() => setActiveId(null)}
              style={{ position: "absolute", top: 16, right: 18, background: "none", border: "none", cursor: "pointer", fontFamily: "var(--font-inter)", fontSize: 18, color: "#9b7080", lineHeight: 1, padding: 4 }}
              aria-label="Fechar"
            >
              ✕
            </button>
            <div style={{ width: 32, height: 2, background: "rgba(122,84,104,0.3)", borderRadius: 2, marginBottom: 20 }} />
            <h2 style={{ fontFamily: "var(--font-playfair)", fontStyle: "italic", fontSize: 22, color: "#3d2b35", margin: "0 0 28px", lineHeight: 1.3 }}>
              {activeItem.title}
            </h2>
            <p style={{ fontFamily: "var(--font-playfair)", fontStyle: "italic", fontSize: 15, color: "#6b5060", lineHeight: 1.9, margin: 0, whiteSpace: "pre-wrap" }}>
              {activeItem.body}
            </p>
          </div>
        </div>
      )}
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

// ─── Música Section ──────────────────────────────────────────────────────────

function MusicaSection() {
  const { locale } = useT();

  const label = locale === "de" ? "Musik" : "Música";
  const title = locale === "de" ? "Album anhören" : "Ouça o álbum";
  const subtitle = locale === "de"
    ? "Verfügbar auf Ihren Lieblingsplattformen"
    : "Disponível nas suas plataformas favoritas";

  const platforms = [
    {
      name: "Spotify",
      url: "https://open.spotify.com/album/5VXkHfqzBfiFJkhFQIplsN",
      color: "#1DB954",
      hoverColor: "#1aa34a",
      icon: (
        <svg viewBox="0 0 24 24" fill="currentColor" style={{ width: 28, height: 28 }}>
          <path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.521 17.34c-.24.359-.66.48-1.021.24-2.82-1.74-6.36-2.101-10.561-1.141-.418.122-.779-.179-.899-.539-.12-.421.18-.78.54-.9 4.56-1.021 8.52-.6 11.64 1.32.42.18.479.659.301 1.02zm1.44-3.3c-.301.42-.841.6-1.262.3-3.239-1.98-8.159-2.58-11.939-1.38-.479.12-1.02-.12-1.14-.6-.12-.48.12-1.021.6-1.141C9.6 9.9 15 10.561 18.72 12.84c.361.181.54.78.241 1.2zm.12-3.36C15.24 8.4 8.82 8.16 5.16 9.301c-.6.179-1.2-.181-1.38-.721-.18-.601.18-1.2.72-1.381 4.26-1.26 11.28-1.02 15.721 1.621.539.3.719 1.02.419 1.56-.299.421-1.02.599-1.559.3z"/>
        </svg>
      ),
    },
    {
      name: "YouTube Music",
      url: "https://music.youtube.com/playlist?list=OLAK5uy_m9As__lDsGoZGCvW9H-vL4-0Bc9WvRdnQ",
      color: "#FF0000",
      hoverColor: "#cc0000",
      icon: (
        <svg viewBox="0 0 24 24" fill="currentColor" style={{ width: 28, height: 28 }}>
          <path d="M12 0C5.376 0 0 5.376 0 12s5.376 12 12 12 12-5.376 12-12S18.624 0 12 0zm0 19.104c-3.924 0-7.104-3.18-7.104-7.104S8.076 4.896 12 4.896s7.104 3.18 7.104 7.104-3.18 7.104-7.104 7.104zm0-13.332c-3.432 0-6.228 2.796-6.228 6.228S8.568 18.228 12 18.228s6.228-2.796 6.228-6.228S15.432 5.772 12 5.772zM9.684 15.54V8.46L15.816 12l-6.132 3.54z"/>
        </svg>
      ),
    },
  ];

  return (
    <section style={{ padding: "80px 24px", background: "rgba(245,237,232,0.4)" }}>
      <div style={{ maxWidth: 960, margin: "0 auto" }}>
        <SectionHeader label={label} title={title} />
        <p style={{ textAlign: "center", fontFamily: "var(--font-inter)", fontSize: 14, color: "#9b7080", marginBottom: 48, marginTop: -32, letterSpacing: "0.02em" }}>
          {subtitle}
        </p>
        <div style={{
          display: "flex",
          flexWrap: "wrap",
          gap: 20,
          justifyContent: "center",
        }}>
          {platforms.map((p) => (
            <a
              key={p.name}
              href={p.url}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: "flex",
                alignItems: "center",
                gap: 14,
                background: "#fdf8f5",
                border: "1px solid rgba(107,80,96,0.15)",
                borderRadius: 12,
                padding: "18px 28px",
                textDecoration: "none",
                boxShadow: "0 2px 8px rgba(61,43,53,0.06)",
                transition: "box-shadow 0.2s, transform 0.2s",
                minWidth: 220,
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLElement).style.boxShadow = "0 10px 28px rgba(61,43,53,0.14)";
                (e.currentTarget as HTMLElement).style.transform = "translateY(-3px)";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLElement).style.boxShadow = "0 2px 8px rgba(61,43,53,0.06)";
                (e.currentTarget as HTMLElement).style.transform = "translateY(0)";
              }}
            >
              <span style={{ color: p.color, display: "flex", alignItems: "center", flexShrink: 0 }}>
                {p.icon}
              </span>
              <span style={{ fontFamily: "var(--font-inter)", fontSize: 15, fontWeight: 600, color: "#3d2b35", letterSpacing: "0.01em" }}>
                {p.name}
              </span>
              <span style={{ marginLeft: "auto", fontFamily: "var(--font-inter)", fontSize: 11, color: "#9b7080", letterSpacing: "0.08em", textTransform: "uppercase" }}>
                ↗
              </span>
            </a>
          ))}
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
    ? "Texte, Bilder & Videobeiträge"
    : "Textos, imagens, audiovisuais e música";

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
        <SectionDivider />
        <MusicaSection />
      </main>
      <Footer />
    </>
  );
}
