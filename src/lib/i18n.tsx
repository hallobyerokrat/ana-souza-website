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
  "hero.note.sobre1": "Sobre",
  "hero.note.sobre2": "a autora",
  "hero.note.arte": "arte",
  "hero.note.contato": "Contato",
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
    "Nasci em 1974, na cidade de Cláudio, Minas Gerais, Brasil. Há alguns anos vivo na Alemanha, onde construí minha família.",
  "author.p2":
    "Minha trajetória profissional teve início na área pedagógica, com atuação na elaboração de projetos empresariais. Com a mudança de país, priorizei a vida familiar, dedicando-me ao cuidado dos meus filhos e à transmissão da língua portuguesa como herança afetiva e cultural.",
  "author.p3":
    "Posteriormente, retomei os estudos, aprofundei meus conhecimentos na língua alemã e me formei em enfermagem geriátrica em Wertheim. Essa experiência me proporcionou um contato profundo com os processos de envelhecimento e com a finitude da vida — temas que atravessam minha escrita.",
  "author.p4":
    "A escrita sempre esteve presente em minha vida. Por muito tempo, mantive textos e fragmentos guardados, publicando ocasionalmente no site Recanto das Letras. Esse percurso levou à publicação do meu primeiro livro, Céu de Brincar (2025), uma obra infantil inspirada em um de meus poemas.",
  "author.p5":
    "Minha escrita é intuitiva e livre, orientada pelo fluxo da memória e da experiência. No romance Entre Flores e Algodão, esse processo se revelou de forma clara: os capítulos iniciais surgiram de maneira orgânica, enquanto os finais exigiram construção mais deliberada.",
  "author.p6":
    "Entre minhas principais referências está o autor José Mauro de Vasconcelos, cuja obra influenciou especialmente a elaboração do meu primeiro romance.",
  "author.p7":
    "Participei das coletâneas Casos de Família (conto “Idaí”) e Planeta Fantástico (conto “Urá”), publicações da escola de escrita Metamorfose.",
  "author.p8":
    "Atualmente, desenvolvo projetos literários voltados aos públicos infantil, infantojuvenil e adulto. O romance Entre Flores e Algodão encontra-se em processo editorial, com previsão de publicação.",
  "author.badge": "Minas Gerais → Wertheim, DE",

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
  "hero.note.sobre1": "Über",
  "hero.note.sobre2": "die Autorin",
  "hero.note.arte": "Kunst",
  "hero.note.contato": "Kontakt",
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
    "Ich wurde 1974 in Cláudio, Minas Gerais, Brasilien, geboren. Seit einigen Jahren lebe ich in Deutschland, wo ich meine Familie gegründet habe.",
  "author.p2":
    "Meinen beruflichen Einstieg hatte ich im pädagogischen Bereich, mit dem Schwerpunkt auf der Entwicklung von Bildungsprojekten. Nach dem Umzug ins Ausland rückte das Familienleben in den Vordergrund — ich widmete mich der Erziehung meiner Kinder und der Weitergabe der portugiesischen Sprache als emotionales und kulturelles Erbe.",
  "author.p3":
    "Später nahm ich mein Studium wieder auf, vertiefte meine Deutschkenntnisse und absolvierte eine Ausbildung in der Altenpflege in Wertheim. Diese Erfahrung ermöglichte mir einen tiefen Kontakt mit den Prozessen des Alterns und der Endlichkeit des Lebens — Themen, die mein Schreiben durchziehen.",
  "author.p4":
    "Das Schreiben war schon immer ein Teil meines Lebens. Lange bewahrte ich Texte und Fragmente auf und veröffentlichte gelegentlich auf der Plattform Recanto das Letras. Dieser Weg führte schließlich zur Veröffentlichung meines ersten Buches, Céu de Brincar (2025), einem Kinderbuch, das von einem meiner Gedichte inspiriert wurde.",
  "author.p5":
    "Mein Schreiben ist intuitiv und frei, geleitet vom Fluss der Erinnerung und Erfahrung. Im Roman Entre Flores e Algodão zeigte sich das deutlich: Die ersten Kapitel entstanden organisch, während die letzten eine bewusstere Gestaltung verlangten.",
  "author.p6":
    "Einer meiner wichtigsten literarischen Einflüsse ist der Autor José Mauro de Vasconcelos, dessen Werk besonders die Entstehung meines ersten Romans geprägt hat.",
  "author.p7":
    "Ich habe an den Anthologien Casos de Família (Erzählung „Idaí”) und Planeta Fantástico (Erzählung „Urá”) mitgewirkt — beide erschienen im Rahmen der Schreibschule Metamorfose.",
  "author.p8":
    "Derzeit entwickle ich literarische Projekte für Kinder, Jugendliche und Erwachsene. Der Roman Entre Flores e Algodão befindet sich im Lektorat, eine Veröffentlichung ist geplant.",
  "author.badge": "Minas Gerais → Wertheim, DE",

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
