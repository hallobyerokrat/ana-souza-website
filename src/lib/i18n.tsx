"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";

export type Locale = "pt" | "de";

type Dict = Record<string, string>;

const pt: Dict = {
  "nav.inicio": "Início",
  "nav.livros": "Livros",
  "nav.sobre": "Sobre",
  "nav.contato": "Contato",

  "hero.subtitle":
    "Literatura e experiência poético-musicais atravessadas pela memória e pela imaginação.",
  "hero.caption": "escritora · contos · literatura infantil",
  "hero.note.livros": "Livros",
  "hero.note.poemas": "Projetos",
  "hero.note.artes": "Arte e Textos",
  "hero.note.contato": "Contato",
  "hero.note.loja": "Loja",
  "hero.note.sobre1": "Sobre",
  "hero.note.sobre2": "a autora",
  "hero.note.arte": "arte",
  "hero.note.contatoSub": "vamos conversar →",
  "hero.note.livros.sub": "conheça minha obra",
  "hero.note.poemas.sub": "projetos em andamento",
  "hero.note.artes.sub": "poemas e ilustrações",
  "hero.note.contato.sub": "vamos conversar",
  "hero.note.loja.sub": "adquira meus livros",
  "hero.note.sobre.sub": "a autora",
  "hero.tagline": "Literatura e experiência poético-musicais atravessadas pela memória e pela imaginação.",
  "hero.tagline2": "",
  "hero.cta": "Ver Livros ↓",

  "casos.label": "Coletânea",
  "casos.sublabel": "Casos de Família · Conto Idaí",
  "casos.p1":
    "Famílias são bênçãos, âncoras, esperança, ilusão, carmas e saudades.",
  "casos.p2":
    "São plurais, nos atravessam e, inevitavelmente, rendem histórias.",
  "casos.p3":
    "Nesta coletânea, 64 autores de diferentes partes do Brasil apresentam contos cujos conflitos passam pelas relações familiares.",
  "casos.p4":
    "Casais, avós, pais, irmãos, crianças — somos nós, refletidos em cada texto, em cada história.",
  "casos.badge": "Edição impressa — tiragem limitada, disponível no Brasil",
  "casos.cta": "Quero adquirir um exemplar",
  "casos.quote": "«Uma escrita que toca o coração — delicada, verdadeira e cheia de afeto.»",
  "casos.quote.author": "— Leitor da coletânea Casos de Família",

  "flores.label": "Destaque do Livro",
  "flores.announce": "Novo romance · Em breve",
  "flores.title.pre": "Entre Flores e",
  "flores.title.em": "Algodão",
  "flores.p1":
    "Em Entre Flores e Algodão, acompanhamos Clara pelas memórias de sua infância em um ambiente interiorano, onde afetos, silêncios e pequenos gestos moldam sua forma de ver o mundo.",
  "flores.p2":
    "Com o tempo, essa infância é atravessada por rupturas e perdas que não se explicam — apenas não voltam.",
  "flores.p3":
    "Em uma linguagem sensorial e delicada, o livro constrói um percurso íntimo sobre crescer, lembrar e seguir adiante.",
  "flores.status": "Em edição — lançamento em breve",
  "flores.cta": "Quero acompanhar o lançamento",
  "flores.launchText": "Lançamento em breve — acompanhe pelo Instagram",
  "flores.instagram": "Seguir no Instagram →",

  "ceu.label": "Literatura Infantil",
  "ceu.title.pre": "Céu de",
  "ceu.title.em": "Brincar",
  "ceu.p1":
    "Céu de Brincar é um convite a redescobrir a infância através das nuvens.",
  "ceu.p2":
    "Com poesia e encanto, o céu se transforma em palco de cores e formas — dragões, bailarinas, castelos e sonhos.",
  "ceu.p3":
    "Um livro para imaginar, brincar e se encantar, em qualquer idade.",
  "ceu.cta.amazonBr": "Amazon Brasil",
  "ceu.cta.amazonDe": "Amazon.de",
  "ceu.cta.ebook": "Kindle / Ebook →",
  "ceu.quote": "«Eu super indico o livro Céu de Brincar. É um livro que nos leva a antigos hábitos que foram se perdendo com o tempo. As crianças precisam desse livro para se conectar com as maravilhas que Deus nos proporciona e deixar de lado o celular.»",
  "ceu.quote.author": "— Leitora",

  "author.label": "Sobre a autora",
  "author.title.pre": "Uma escrita intuitiva,",
  "author.title.em": "tecida pela memória",
  "author.p1":
    "Ana Souza de Magalhães nasceu no interior de Minas Gerais. É formada em Pedagogia pela UEMG, com pós-graduação em Pedagogia Empresarial pela PUC Minas. Vive há alguns anos na Alemanha, onde se especializou em cuidados geriátricos pela escola Johanniter, em Wertheim. Atuou na área da geriatria, tanto em hospitais quanto em instituições de longa permanência para idosos, experiência que contribui para seu olhar sobre memória, envelhecimento e relações humanas.",
  "author.p2": "",
  "author.p3":
    "Participa das coletâneas Casos de Família, com o conto Idaí, e Mundo Fantástico, com o conto Urá, organizadas pela Metamorfose, escola de escrita criativa da qual faz parte.",
  "author.p4":
    "É autora do livro infantil Céu de Brincar e do romance Entre Flores e Algodão, em edição pela Metamorfose.",
  "author.p5":
    "Entre literatura, música e pequenas paisagens poéticas, sua criação busca preservar espaços onde delicadeza, imaginação e afeto possam permanecer.",
  "author.badge": "Minas Gerais - Hardheim",
  "author.readMore": "Mais sobre mim",
  "author.readLess": "Mostrar menos",

  "contato.label": "Contato",
  "contato.title.pre": "Vamos",
  "contato.title.em": "conversar",
  "contato.intro":
    "Para falar sobre os livros, projetos ou parcerias:",
  "contato.cta": "Falar comigo",
  "contato.instagram": "Instagram",
  "contato.email": "E-mail",
  "contato.privacy":
    "Seus dados são protegidos conforme o RGPD.",

  "footer.desc":
    "Escritora brasileira radicada na Alemanha. Autora de Céu de Brincar e Entre Flores e Algodão (em edição).",
  "footer.nav": "Navegação",
  "footer.legal": "Legal",
  "footer.link.livros": "Livros",
  "footer.link.sobre": "Sobre a autora",
  "footer.link.contato": "Contato",
  "footer.link.impressum": "Impressum",
  "footer.link.datenschutz": "Política de Privacidade",
  "footer.link.widerruf": "Direito de Revogação",
  "footer.rights": "Todos os direitos reservados.",
  "footer.country": "Operado a partir da Alemanha · Conforme RGPD",

  "nav.loja": "Livraria",

  "shop.label": "Livraria",
  "shop.title.pre": "Os",
  "shop.title.em": "Livros",
  "shop.subtitle": "Adquira diretamente ou encontre na Amazon",
  "shop.readMore": "Ver livro →",
  "shop.buy": "Comprar agora",
  "shop.comingSoon": "Em breve",
  "shop.notifyMe": "Avisem-me no lançamento",
  "shop.alsoAmazon": "Também disponível na Amazon",
  "shop.amazonBr": "Amazon Brasil",
  "shop.amazonDe": "Amazon.de",
  "shop.ebook": "Kindle / Ebook",
  "shop.details": "Detalhes",
  "shop.backToShop": "← Voltar à livraria",
};

const de: Dict = {
  "nav.inicio": "Start",
  "nav.livros": "Bücher",
  "nav.sobre": "Über",
  "nav.contato": "Kontakt",

  "hero.subtitle":
    "Erinnerung, Kindheit und das Imaginäre durchziehen ihr Schreiben. In einer sinnlichen, zarten Sprache bewegen sich ihre Texte zwischen dem Realen und dem Fantastischen — und erkunden, was bleibt: in der Stille, in der Zuneigung, in den Verlusten.",
  "hero.caption": "Schriftstellerin · Erzählungen · Kinderliteratur",
  "hero.note.livros": "Bücher",
  "hero.note.poemas": "Projekte",
  "hero.note.artes": "Kunst & Texte",
  "hero.note.contato": "Kontakt",
  "hero.note.loja": "Shop",
  "hero.note.sobre1": "Über",
  "hero.note.sobre2": "die Autorin",
  "hero.note.arte": "Kunst",
  "hero.note.contatoSub": "Lass uns sprechen →",
  "hero.note.livros.sub": "meine Bücher",
  "hero.note.poemas.sub": "laufende Projekte",
  "hero.note.artes.sub": "Gedichte & Illustrationen",
  "hero.note.contato.sub": "Lass uns sprechen",
  "hero.note.loja.sub": "Bücher kaufen",
  "hero.note.sobre.sub": "die Autorin",
  "hero.tagline": "Literatur und poetisch-musikalische Erfahrungen, durchdrungen von Erinnerung und Vorstellungskraft.",
  "hero.tagline2": "",
  "hero.cta": "Bücher ansehen ↓",

  "casos.label": "Anthologie",
  "casos.sublabel": "Casos de Família · Erzählung Idaí",
  "casos.p1":
    "Familien sind Segnungen, Anker, Hoffnung, Illusion, Karma und Sehnsucht.",
  "casos.p2":
    "Sie sind vielfältig, durchdringen uns und liefern unweigerlich Geschichten.",
  "casos.p3":
    "In dieser Anthologie präsentieren 64 Autoren aus ganz Brasilien Kurzgeschichten, deren Konflikte sich um Familienbeziehungen drehen.",
  "casos.p4":
    "Paare, Großeltern, Eltern, Geschwister, Kinder — das sind wir, gespiegelt in jedem Text und jeder Geschichte.",
  "casos.badge": "Gedruckte Ausgabe — limitierte Auflage, erhältlich in Brasilien",
  "casos.cta": "Ich möchte ein Exemplar kaufen",
  "casos.quote": "«Ein Schreiben, das das Herz berührt — zart, aufrichtig und voller Wärme.»",
  "casos.quote.author": "— Leser der Anthologie Casos de Família",

  "flores.label": "Buchpremiere",
  "flores.announce": "Neuer Roman · Bald erhältlich",
  "flores.title.pre": "Entre Flores e",
  "flores.title.em": "Algodão",
  "flores.p1":
    "In Entre Flores e Algodão begleiten wir Clara durch die Erinnerungen ihrer Kindheit auf dem Land, wo Zuneigung, Stille und kleine Gesten ihren Blick auf die Welt formen.",
  "flores.p2":
    "Mit der Zeit wird diese Kindheit von Brüchen und Verlusten durchzogen, die sich nicht erklären lassen — sie kehren einfach nicht zurück.",
  "flores.p3":
    "In einer sinnlichen, zarten Sprache zeichnet das Buch einen intimen Weg durch das Heranwachsen, das Erinnern und das Weitergehen nach.",
  "flores.status": "In Bearbeitung — Veröffentlichung in Kürze",
  "flores.cta": "Auf dem Laufenden bleiben",
  "flores.launchText": "Erscheint bald — folge dem Launch auf Instagram",
  "flores.instagram": "Auf Instagram folgen →",

  "ceu.label": "Kinderliteratur",
  "ceu.title.pre": "Céu de",
  "ceu.title.em": "Brincar",
  "ceu.p1":
    "Céu de Brincar ist eine Einladung, die Kindheit durch die Wolken neu zu entdecken.",
  "ceu.p2":
    "Mit Poesie und Zauber wird der Himmel zur Bühne für Farben und Formen — Drachen, Ballerinen, Schlösser und Träume.",
  "ceu.p3":
    "Ein Buch zum Fantasieren, Spielen und Staunen — in jedem Alter.",
  "ceu.cta.amazonBr": "Amazon Brasil",
  "ceu.cta.amazonDe": "Amazon.de",
  "ceu.cta.ebook": "Kindle / E-Book →",
  "ceu.quote": "«Ein zauberhaftes Buch für Kinder und Erwachsene — voller Phantasie und Zartheit.»",
  "ceu.quote.author": "— Leserin, São Paulo",

  "author.label": "Über die Autorin",
  "author.title.pre": "Ein intuitives Schreiben,",
  "author.title.em": "gewebt aus Erinnerung",
  "author.p1":
    "Ana Souza de Magalhães wurde im Landesinneren von Minas Gerais geboren. Sie hat Pädagogik an der UEMG studiert und einen Postgraduierten-Abschluss in Betriebspädagogik von der PUC Minas. Seit einigen Jahren lebt sie in Deutschland, wo sie sich an der Johanniter-Schule in Wertheim auf Altenpflege spezialisiert hat. Sie war sowohl in Krankenhäusern als auch in stationären Pflegeeinrichtungen tätig – eine Erfahrung, die ihren Blick auf Gedächtnis, Alterung und menschliche Beziehungen prägt.",
  "author.p2": "",
  "author.p3":
    "Sie nimmt an den Anthologien Casos de Família, mit der Kurzgeschichte Idaí, und Mundo Fantástico, mit der Kurzgeschichte Urá, teil – beide organisiert von Metamorfose, einer Schule für kreatives Schreiben, der sie angehört.",
  "author.p4":
    "Sie ist Autorin des Kinderbuchs Céu de Brincar und des Romans Entre Flores e Algodão, der derzeit bei Metamorfose erscheint.",
  "author.p5":
    "Zwischen Literatur, Musik und kleinen poetischen Landschaften sucht ihr Schaffen Räume zu bewahren, in denen Zartheit, Phantasie und Zuneigung Bestand haben können.",
  "author.badge": "Minas Gerais - Hardheim",
  "author.readMore": "Mehr lesen",
  "author.readLess": "Weniger anzeigen",

  "contato.label": "Kontakt",
  "contato.title.pre": "Lass uns",
  "contato.title.em": "sprechen",
  "contato.intro":
    "Für Fragen zu den Büchern, Projekten oder möglichen Kooperationen:",
  "contato.cta": "Schreib mir",
  "contato.instagram": "Instagram",
  "contato.email": "E-Mail",
  "contato.privacy":
    "Deine Daten sind gemäß DSGVO geschützt.",

  "footer.desc":
    "Brasilianische Schriftstellerin, lebt in Deutschland. Autorin von Céu de Brincar und Entre Flores e Algodão (in Bearbeitung).",
  "footer.nav": "Navigation",
  "footer.legal": "Rechtliches",
  "footer.link.livros": "Bücher",
  "footer.link.sobre": "Über die Autorin",
  "footer.link.contato": "Kontakt",
  "footer.link.impressum": "Impressum",
  "footer.link.datenschutz": "Datenschutzerklärung",
  "footer.link.widerruf": "Widerrufsbelehrung",
  "footer.rights": "Alle Rechte vorbehalten.",
  "footer.country": "Betrieben aus Deutschland · DSGVO-konform",

  "nav.loja": "Buchhandlung",

  "shop.label": "Buchhandlung",
  "shop.title.pre": "Die",
  "shop.title.em": "Bücher",
  "shop.subtitle": "Direkt kaufen oder auf Amazon finden",
  "shop.readMore": "Buch ansehen →",
  "shop.buy": "Jetzt kaufen",
  "shop.comingSoon": "Demnächst",
  "shop.notifyMe": "Beim Launch benachrichtigen",
  "shop.alsoAmazon": "Auch auf Amazon erhältlich",
  "shop.amazonBr": "Amazon Brasil",
  "shop.amazonDe": "Amazon.de",
  "shop.ebook": "Kindle / E-Book",
  "shop.details": "Details",
  "shop.backToShop": "← Zurück zur Buchhandlung",
};

const dict: Record<Locale, Dict> = { pt, de };

type I18nContextValue = {
  locale: Locale;
  setLocale: (l: Locale) => void;
  t: (key: string) => string;
};

const I18nContext = createContext<I18nContextValue | null>(null);

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [locale, setLocaleState] = useState<Locale>("pt");

  useEffect(() => {
    try {
      const saved = window.localStorage.getItem("asm-locale");
      if (saved === "pt" || saved === "de") setLocaleState(saved);
    } catch {
      // ignore
    }
  }, []);

  const setLocale = useCallback((l: Locale) => {
    setLocaleState(l);
    try {
      window.localStorage.setItem("asm-locale", l);
      document.documentElement.lang = l === "de" ? "de-DE" : "pt-BR";
    } catch {
      // ignore
    }
  }, []);

  const t = useCallback(
    (key: string) => dict[locale][key] ?? dict.pt[key] ?? key,
    [locale],
  );

  const value = useMemo(
    () => ({ locale, setLocale, t }),
    [locale, setLocale, t],
  );

  return <I18nContext.Provider value={value}>{children}</I18nContext.Provider>;
}

export function useT() {
  const ctx = useContext(I18nContext);
  if (!ctx) throw new Error("useT must be used inside LanguageProvider");
  return ctx;
}
