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
  ctaLabel: { pt: string; de: string };
  ctaDisabled?: boolean;
  shortDesc: { pt: string; de: string };
  fullDesc: { pt: string[]; de: string[] };
  details: { pt: string; de: string };
  buyOptions?: BuyRegion[];
};

export type BuyRegion = {
  key: string;
  label: { pt: string; de: string };
  icon: "globe" | "pin" | "book";
  links: { label: string; url: string; note?: string; available?: boolean }[];
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
    ctaLabel: { pt: "Esgotado", de: "Vergriffen" },
    ctaDisabled: true,
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
    ctaLabel: { pt: "Compre", de: "Kaufen" },
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
    buyOptions: [
      {
        key: "brasil",
        label: { pt: "Comprar no Brasil", de: "In Brasilien kaufen" },
        icon: "pin",
        links: [
          { label: "WhatsApp", url: "https://wa.me/5511914044118", note: "Livraria Tutear" },
          { label: "Livraria Tutear", url: "https://instagram.com/tutearlivraria", note: "Livros selecionados" },
        ],
      },
      {
        key: "europa",
        label: { pt: "Comprar na Europa", de: "In Europa kaufen" },
        icon: "globe",
        links: [
          { label: "Amazon", url: "https://amzn.eu/d/04pq1tYo", note: "Disponível agora", available: true },
          { label: "WhatsApp", url: "https://wa.me/491709250795", note: "Fale comigo para comprar" },
          { label: "epubli", url: "#", note: "Em breve" }, // preencher com link real assim que Ana enviar
        ],
      },
    ],
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
    ctaLabel: { pt: "Breve na Amazon", de: "Bald auf Amazon" },
    ctaDisabled: true,
    shortDesc: {
      pt: "A história de Clara — uma infância no interior, atravessada por silêncios e rupturas que não voltam.",
      de: "Claras Geschichte — eine Kindheit auf dem Land, durchzogen von Stille und Brüchen, die nicht zurückkehren.",
    },
    fullDesc: {
      pt: [
        "Clara cresceu entre o cheiro de alecrim, o calor do forno e as histórias contadas à sombra de um pé de manga. Há uma casa em movimento, um povoado e uma menina que observa os gestos e os silêncios.",
        "Em sua infância, tudo parecia simples: os dias passavam entre brincadeiras, vozes na cozinha e pequenos segredos guardados na memória.",
        "Aos poucos, o mundo começa a mudar. O tempo avança, as mudanças familiares se tornam mais densas e a infância, antes leve, ganha novos significados. Entre descobertas, despedidas e lembranças, Clara aprende. Crescer é lidar com aquilo que não volta.",
        "Sensível e delicado, Entre Flores e Algodão é uma narrativa sobre memória, afeto e transformação — um convite para revisitar a infância e reconhecer, nos pequenos detalhes, aquilo que permanece para sempre.",
      ],
      de: [
        "Clara wuchs auf zwischen dem Duft von Rosmarin, der Wärme des Ofens und den Geschichten, die im Schatten eines Mangobaums erzählt wurden. Da ist ein Haus in Bewegung, ein Dorf und ein Mädchen, das die Gesten und das Schweigen beobachtet.",
        "In ihrer Kindheit schien alles einfach: Die Tage vergingen zwischen Spielen, Stimmen in der Küche und kleinen Geheimnissen, die im Gedächtnis bewahrt wurden.",
        "Nach und nach beginnt sich die Welt zu verändern. Die Zeit schreitet voran, die familiären Veränderungen werden dichter, und die Kindheit, einst leicht, gewinnt neue Bedeutungen. Zwischen Entdeckungen, Abschieden und Erinnerungen lernt Clara: Erwachsenwerden heißt, mit dem umzugehen, was nicht zurückkehrt.",
        "Sensibel und zart erzählt Entre Flores e Algodão von Erinnerung, Zuneigung und Wandel — eine Einladung, die Kindheit neu zu besuchen und in den kleinen Details das zu erkennen, was für immer bleibt.",
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
