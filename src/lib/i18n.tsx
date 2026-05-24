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
    "Memória, infância e imaginário atravessam sua escrita. Em uma linguagem sensorial e delicada, seus textos transitam entre o real e o fantástico, explorando o que permanece — nos silêncios, nos afetos e nas perdas.",
  "hero.caption": "escritora · contos · literatura infantil",
  "hero.note.livros": "Livros",
  "hero.note.poemas": "Poemas e Textos",
  "hero.note.artes": "Artes",
  "hero.note.contato": "Contato",
  "hero.note.loja": "Loja",
  "hero.note.sobre1": "Sobre",
  "hero.note.sobre2": "a autora",
  "hero.note.arte": "arte",
  "hero.note.contatoSub": "vamos conversar →",

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

  "flores.label": "Destaque do Livro",
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

  "author.label": "Sobre a autora",
  "author.title.pre": "Uma escrita intuitiva,",
  "author.title.em": "tecida pela memória",
  "author.p1":
    "Nasci no interior de Minas Gerais, entre paisagens e memórias que ainda atravessam minha escrita.",
  "author.p2":
    "Sou formada em Pedagogia pela UEMG, com pós-graduação em Pedagogia Empresarial pela PUC Minas. Vivo há alguns anos na Alemanha, onde me especializei em cuidados geriátricos pela escola Johanniter, em Wertheim.",
  "author.p3":
    "Participo do curso de escrita criativa da Metamorfose, onde publiquei os contos Idaí, na coletânea Casos de Família, e Urá, na coletânea Mundo Fantástico.",
  "author.p4":
    "Sou autora do livro infantil Céu de Brincar e do romance Entre Flores e Algodão, atualmente em edição pela Metamorfose.",
  "author.p5":
    "Entre literatura, música e pequenas paisagens poéticas, sigo criando espaços onde delicadeza, imaginação e afeto possam permanecer.",
  "author.badge": "Minas Gerais → Wertheim, DE",
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
  "hero.note.poemas": "Gedichte & Texte",
  "hero.note.artes": "Kunst",
  "hero.note.contato": "Kontakt",
  "hero.note.loja": "Shop",
  "hero.note.sobre1": "Über",
  "hero.note.sobre2": "die Autorin",
  "hero.note.arte": "Kunst",
  "hero.note.contatoSub": "Lass uns sprechen →",

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

  "flores.label": "Buchpremiere",
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

  "author.label": "Über die Autorin",
  "author.title.pre": "Ein intuitives Schreiben,",
  "author.title.em": "gewebt aus Erinnerung",
  "author.p1":
    "Ich wurde im Landesinneren von Minas Gerais geboren, zwischen Landschaften und Erinnerungen, die meiner Schrift noch heute innewohnen.",
  "author.p2":
    "Ich habe Pädagogik an der UEMG studiert und einen Postgraduierten-Abschluss in Betriebspädagogik von der PUC Minas. Seit einigen Jahren lebe ich in Deutschland, wo ich mich an der Johanniter-Schule in Wertheim auf Altenpflege spezialisiert habe.",
  "author.p3":
    "Ich nehme am Kurs für kreatives Schreiben der Metamorfose teil, wo ich die Kurzgeschichten Idaí in der Anthologie Casos de Família und Urá in der Anthologie Mundo Fantástico veröffentlicht habe.",
  "author.p4":
    "Ich bin Autorin des Kinderbuchs Céu de Brincar und des Romans Entre Flores e Algodão, der derzeit von Metamorfose bearbeitet wird.",
  "author.p5":
    "Zwischen Literatur, Musik und kleinen poetischen Landschaften schaffe ich weiterhin Räume, in denen Zartheit, Phantasie und Zuneigung Bestand haben können.",
  "author.badge": "Minas Gerais → Wertheim, DE",
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
