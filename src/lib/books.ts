export type Book = {
  slug: string;
  cover: string | null;
  available: boolean;
  lemonsqueezyUrl: string | null;
  amazonBr?: string;
  amazonDe?: string;
  kindle?: string;
  price?: { pt: string; de: string };
  genre: { pt: string; de: string };
  title: string;
  titleEm: string;
  titlePre: string;
  shortDesc: { pt: string; de: string };
  fullDesc: { pt: string[]; de: string[] };
  details: { pt: string; de: string };
};

export const books: Book[] = [
  {
    slug: "casos-de-familia",
    cover: "/images/casos-de-familia-cover.jpg",
    available: true,
    lemonsqueezyUrl: null, // preencher após criar conta Lemon Squeezy
    price: { pt: "A consultar", de: "Auf Anfrage" },
    genre: { pt: "Coletânea", de: "Anthologie" },
    title: "Casos de Família",
    titlePre: "Casos de",
    titleEm: "Família",
    shortDesc: {
      pt: "64 autores, 64 histórias sobre os laços que nos definem — e que nunca esquecemos.",
      de: "64 Autoren, 64 Geschichten über die Bande, die uns prägen — und die wir nie vergessen.",
    },
    fullDesc: {
      pt: [
        "Famílias são bênçãos, âncoras, esperança, ilusão, carmas e saudades.",
        "São plurais, nos atravessam e, inevitavelmente, rendem histórias.",
        "Nesta coletânea, 64 autores de diferentes partes do Brasil apresentam contos cujos conflitos passam pelas relações familiares.",
        "Casais, avós, pais, irmãos, crianças — somos nós, refletidos em cada texto, em cada história.",
      ],
      de: [
        "Familien sind Segnungen, Anker, Hoffnung, Illusion, Karma und Sehnsucht.",
        "Sie sind vielfältig, durchdringen uns und liefern unweigerlich Geschichten.",
        "In dieser Anthologie präsentieren 64 Autoren aus ganz Brasilien Kurzgeschichten, deren Konflikte sich um Familienbeziehungen drehen.",
        "Paare, Großeltern, Eltern, Geschwister, Kinder — das sind wir, gespiegelt in jedem Text und jeder Geschichte.",
      ],
    },
    details: {
      pt: "Edição impressa · Tiragem limitada · Disponível no Brasil",
      de: "Gedruckte Ausgabe · Limitierte Auflage · Erhältlich in Brasilien",
    },
  },
  {
    slug: "ceu-de-brincar",
    cover: "/images/ceu-de-brincar-cover.png",
    available: true,
    lemonsqueezyUrl: null, // preencher após criar conta Lemon Squeezy
    amazonBr: "#", // preencher com link real
    amazonDe: "#", // preencher com link real
    kindle: "#", // preencher com link real
    price: { pt: "Ver opções", de: "Optionen ansehen" },
    genre: { pt: "Literatura Infantil", de: "Kinderliteratur" },
    title: "Céu de Brincar",
    titlePre: "Céu de",
    titleEm: "Brincar",
    shortDesc: {
      pt: "Um convite a redescobrir a infância através das nuvens — dragões, bailarinas, castelos e sonhos.",
      de: "Eine Einladung, die Kindheit durch die Wolken neu zu entdecken — Drachen, Ballerinen, Schlösser.",
    },
    fullDesc: {
      pt: [
        "Céu de Brincar é um convite a redescobrir a infância através das nuvens.",
        "Com poesia e encanto, o céu se transforma em palco de cores e formas — dragões, bailarinas, castelos e sonhos.",
        "Um livro para imaginar, brincar e se encantar, em qualquer idade.",
      ],
      de: [
        "Céu de Brincar ist eine Einladung, die Kindheit durch die Wolken neu zu entdecken.",
        "Mit Poesie und Zauber wird der Himmel zur Bühne für Farben und Formen — Drachen, Ballerinen, Schlösser und Träume.",
        "Ein Buch zum Fantasieren, Spielen und Staunen — in jedem Alter.",
      ],
    },
    details: {
      pt: "Literatura Infantil · Publicado em 2025 · Disponível na Amazon",
      de: "Kinderliteratur · Erschienen 2025 · Erhältlich auf Amazon",
    },
  },
  {
    slug: "entre-flores",
    cover: "/images/entre-flores-cover-2.jpg",
    available: false,
    lemonsqueezyUrl: null,
    price: { pt: "Em breve", de: "Demnächst" },
    genre: { pt: "Romance", de: "Roman" },
    title: "Entre Flores e Algodão",
    titlePre: "Entre Flores e",
    titleEm: "Algodão",
    shortDesc: {
      pt: "A história de Clara — uma infância no interior, atravessada por silêncios e rupturas que não voltam.",
      de: "Claras Geschichte — eine Kindheit auf dem Land, durchzogen von Stille und Brüchen, die nicht zurückkehren.",
    },
    fullDesc: {
      pt: [
        "Em Entre Flores e Algodão, acompanhamos Clara pelas memórias de sua infância em um ambiente interiorano, onde afetos, silêncios e pequenos gestos moldam sua forma de ver o mundo.",
        "Com o tempo, essa infância é atravessada por rupturas e perdas que não se explicam — apenas não voltam.",
        "Em uma linguagem sensorial e delicada, o livro constrói um percurso íntimo sobre crescer, lembrar e seguir adiante.",
      ],
      de: [
        "In Entre Flores e Algodão begleiten wir Clara durch die Erinnerungen ihrer Kindheit auf dem Land, wo Zuneigung, Stille und kleine Gesten ihren Blick auf die Welt formen.",
        "Mit der Zeit wird diese Kindheit von Brüchen und Verlusten durchzogen, die sich nicht erklären lassen — sie kehren einfach nicht zurück.",
        "In einer sinnlichen, zarten Sprache zeichnet das Buch einen intimen Weg durch das Heranwachsen, das Erinnern und das Weitergehen nach.",
      ],
    },
    details: {
      pt: "Romance · Em processo editorial · Lançamento em breve",
      de: "Roman · Im Lektorat · Veröffentlichung in Kürze",
    },
  },
];

export function getBook(slug: string): Book | undefined {
  return books.find((b) => b.slug === slug);
}
