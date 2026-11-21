export type Book = {
  slug: string;
  cover: string | null;
  coverFit?: "contain" | "cover";
  promoImage?: string;
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
    slug: "planeta-fantastico",
    cover: "/images/planeta-fantastico-cover.jpg",
    available: true,
    lemonsqueezyUrl: null,
    price: { pt: "A consultar", de: "Auf Anfrage" },
    genre: { pt: "Coletânea · Fantasia & Ficção Científica", de: "Anthologie · Fantasy & Science-Fiction" },
    title: "Planeta Fantástico",
    titlePre: "Planeta",
    titleEm: "Fantástico",
    ctaLabel: { pt: "Saiba mais", de: "Mehr erfahren" },
    ctaDisabled: true,
    shortDesc: {
      pt: "Coletânea de fantasia, ficção científica, realismo mágico e horror — reunindo vários autores em uma série inspirada nas revistas pulp americanas.",
      de: "Anthologie mit Fantasy, Science-Fiction, magischem Realismus und Horror — mehrere Autoren in einer Reihe inspiriert von amerikanischen Pulp-Magazinen.",
    },
    fullDesc: {
      pt: [
        "A série Planeta Fantástico segue a tradição de narrativas populares que foram disseminadas em revistas pulp dos Estados Unidos na primeira metade do século XX.",
        "Editada pela Metamorfose, esta coletânea reúne vários autores cujas narrativas de fantasia, ficção científica (incluindo textos futuristas), realismo mágico e/ou horror entram em ação.",
      ],
      de: [
        "Die Reihe Planeta Fantástico folgt der Tradition populärer Erzählungen, die in der ersten Hälfte des 20. Jahrhunderts in amerikanischen Pulp-Magazinen verbreitet wurden.",
        "Herausgegeben von Metamorfose, versammelt diese Anthologie mehrere Autoren, deren Erzählungen Fantasy, Science-Fiction (einschließlich futuristischer Texte), magischen Realismus und/oder Horror umfassen.",
      ],
    },
    details: {
      pt: "Coletânea · Editora Metamorfose · 2026",
      de: "Anthologie · Editora Metamorfose · 2026",
    },
  },
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
    coverFit: "cover",
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
          { label: "Um Livro", url: "https://loja.umlivro.com.br/ceu-de-brincar-8510023/p", note: "Disponível agora", available: true },
        ],
      },
      {
        key: "europa",
        label: { pt: "Comprar na Europa", de: "In Europa kaufen" },
        icon: "globe",
        links: [
          { label: "Amazon.de", url: "https://amzn.eu/d/04pq1tYo", note: "Disponível agora", available: true },
          { label: "epubli", url: "https://www.epubli.com/shop/ceu-de-brincar-9783565561063", note: "Disponível agora", available: true },
          { label: "WhatsApp", url: "https://wa.me/491709250795", note: "Fale comigo para comprar" },
        ],
      },
    ],
  },
  {
    slug: "ceu-de-brincar-bilingue",
    cover: "/images/ceu-de-brincar-bilingue-cover.jpg",
    available: true,
    lemonsqueezyUrl: null,
    price: { pt: "Ver opções", de: "Optionen ansehen" },
    genre: { pt: "Literatura Infantil · Bilíngue PT/DE", de: "Kinderliteratur · Zweisprachig PT/DE" },
    title: "Céu de Brincar",
    titlePre: "Céu de",
    titleEm: "Brincar",
    ctaLabel: { pt: "Compre", de: "Kaufen" },
    shortDesc: {
      pt: "Edição bilíngue (Português / Deutsch) — um convite a redescobrir a infância através das nuvens, em duas línguas.",
      de: "Zweisprachige Ausgabe (Portugiesisch / Deutsch) — eine Einladung, die Kindheit durch die Wolken neu zu entdecken.",
    },
    fullDesc: {
      pt: [
        "Céu de Brincar é um convite a redescobrir a infância através das nuvens.",
        "Com poesia e encanto, o céu se transforma em palco de cores e formas — dragões, bailarinas, castelos e sonhos.",
        "Esta edição bilíngue (PT/DE) permite que a história seja vivida em português e alemão, conectando culturas e leitores.",
      ],
      de: [
        "Céu de Brincar ist eine Einladung, die Kindheit durch die Wolken neu zu entdecken.",
        "Mit Poesie und Zauber wird der Himmel zur Bühne für Farben und Formen — Drachen, Ballerinen, Schlösser und Träume.",
        "Diese zweisprachige Ausgabe (PT/DE) lässt die Geschichte auf Portugiesisch und Deutsch erleben — Kulturen und Leser verbindend.",
      ],
    },
    details: {
      pt: "Literatura Infantil · Edição Bilíngue PT/DE · Disponível na Amazon",
      de: "Kinderliteratur · Zweisprachige Ausgabe PT/DE · Erhältlich auf Amazon",
    },
    buyOptions: [
      {
        key: "europa",
        label: { pt: "Comprar", de: "Kaufen" },
        icon: "globe",
        links: [
          { label: "Amazon.de", url: "https://www.amazon.de/dp/3565738340/", note: "Disponível agora", available: true },
          { label: "epubli", url: "https://www.epubli.com/shop/ceu-de-brincar-spielhimmel-9783565738342", note: "Disponível agora", available: true },
          { label: "WhatsApp", url: "https://wa.me/491709250795", note: "Fale comigo para comprar" },
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
  {
    slug: "tanta-docura-tartaruga",
    cover: "/images/tanta-docura-cover.jpg",
    available: true,
    lemonsqueezyUrl: null,
    amazonDe: "https://www.amazon.de/Tanta-do%C3%A7ura-Tartaruga-Souza-Magalh%C3%A3es/dp/3565618760/",
    price: { pt: "Ver opções", de: "Optionen ansehen" },
    genre: { pt: "Literatura Infantil", de: "Kinderliteratur" },
    title: "Tanta doçura, Tartaruga!",
    titlePre: "Tanta doçura,",
    titleEm: "Tartaruga!",
    ctaLabel: { pt: "Compre", de: "Kaufen" },
    shortDesc: {
      pt: "Uma tartaruga diferente descobre que a vida pode ser muito mais doce do que imaginava — uma história sobre curiosidade e amizade.",
      de: "Eine besondere Schildkröte entdeckt, dass das Leben viel süßer sein kann als gedacht — eine Geschichte über Neugier und Freundschaft.",
    },
    fullDesc: {
      pt: [
        "Uma Tartaruga um tanto diferente... Vivia cercada de doces.",
        "Até que uma pequena descoberta lhe mostrou um novo caminho.",
        "Entre novas amizades, um mar de possibilidades e descobertas inesperadas, ela percebe que a vida pode ser muito mais doce do que imaginava.",
        "Uma história sensível sobre curiosidade, descobertas e as muitas formas de encontrar diferentes doçuras na vida.",
      ],
      de: [
        "Eine etwas andere Schildkröte... Sie lebte umgeben von Süßigkeiten.",
        "Bis eine kleine Entdeckung ihr einen neuen Weg zeigte.",
        "Zwischen neuen Freundschaften, einem Meer voller Möglichkeiten und unerwarteter Entdeckungen merkt sie, dass das Leben viel süßer sein kann als sie sich vorgestellt hatte.",
        "Eine einfühlsame Geschichte über Neugier, Entdeckungen und die vielen Arten, unterschiedliche Süßen im Leben zu finden.",
      ],
    },
    details: {
      pt: "Literatura Infantil · 32 páginas · epubli · A partir de 1 ano · ISBN 978-3565618767",
      de: "Kinderliteratur · 32 Seiten · epubli · Ab 1 Jahr · ISBN 978-3565618767",
    },
    buyOptions: [
      {
        key: "brasil",
        label: { pt: "Comprar no Brasil", de: "In Brasilien kaufen" },
        icon: "pin",
        links: [
          {
            label: "Um Livro",
            url: "https://loja.umlivro.com.br/Tanta%20do%C3%A7ura%20Tartaruga?&utmi_p=_ceu-de-brincar-8510023_p&utmi_pc=BuscaFullText&utmi_cp=Tanta%20do%C3%A7ura%20Tartaruga",
            note: "Disponível agora",
            available: true,
          },
          {
            label: "Amazon",
            url: "https://www.amazon.com.br/dp/6597673107",
            note: "Disponível agora",
            available: true,
          },
          {
            label: "Mercado Livre",
            url: "https://www.mercadolivre.com.br/tanta-docura-tartaruga/up/MLBU5106245530",
            note: "Disponível agora",
            available: true,
          },
        ],
      },
      {
        key: "europa",
        label: { pt: "Comprar na Europa", de: "In Europa kaufen" },
        icon: "globe",
        links: [
          {
            label: "Amazon.de",
            url: "https://www.amazon.de/Tanta-do%C3%A7ura-Tartaruga-Souza-Magalh%C3%A3es/dp/3565618760/",
            note: "Disponível agora",
            available: true,
          },
          {
            label: "epubli",
            url: "https://www.epubli.com/?s=Tanta+do%C3%A7ura+",
            note: "Disponível agora",
            available: true,
          },
          { label: "WhatsApp", url: "https://wa.me/491709250795", note: "Fale comigo para comprar" },
        ],
      },
    ],
  },
  {
    slug: "spielhimmel",
    cover: "/images/spielhimmel-cover.jpg",
    coverFit: "cover",
    available: true,
    lemonsqueezyUrl: null,
    price: { pt: "Ver opções", de: "Optionen ansehen" },
    genre: { pt: "Literatura Infantil", de: "Kinderliteratur" },
    title: "Spiel Himmel",
    titlePre: "Spiel",
    titleEm: "Himmel",
    ctaLabel: { pt: "Compre", de: "Kaufen" },
    shortDesc: {
      pt: "O que se esconde atrás das nuvens? Um livro que convida a olhar o mundo com os olhos abertos e descobrir o especial no cotidiano.",
      de: "Was verbirgt sich hinter den Wolken? Ein Kinderbuch, das dazu einlädt, die Welt mit offenen Augen zu betrachten.",
    },
    fullDesc: {
      pt: [
        "O que se esconde atrás das nuvens? Quais figuras aparecem quando erguemos o olhar e deixamos a imaginação fluir livremente?",
        "O céu pode ser azul ou cinza, tranquilo ou cheio de movimento. Com palavras poéticas e ilustrações cheias de fantasia, Spielhimmel abre espaço para a curiosidade, a criatividade e os momentos compartilhados.",
        "Um livro infantil que convida a olhar o mundo com os olhos abertos e descobrir o especial no cotidiano.",
      ],
      de: [
        "Was verbirgt sich hinter den Wolken? Welche Figuren entstehen, wenn wir den Blick nach oben richten und unserer Fantasie freien Lauf lassen?",
        "Mal ist der Himmel blau, mal grau, mal still und mal voller Bewegung. Mit poetischen Worten und fantasievollen Illustrationen öffnet Spielhimmel einen Raum für Neugier, Kreativität und gemeinsame Augenblicke.",
        "Ein Kinderbuch, das dazu einlädt, die Welt mit offenen Augen zu betrachten und das Besondere im Alltäglichen zu entdecken.",
      ],
    },
    details: {
      pt: "Literatura Infantil · epubli · Disponível na Europa",
      de: "Kinderliteratur · epubli · Erhältlich in Europa",
    },
    buyOptions: [
      {
        key: "europa",
        label: { pt: "Comprar na Europa", de: "In Europa kaufen" },
        icon: "globe",
        links: [
          { label: "Amazon.de", url: "https://www.amazon.de/Spielhimmel-Ana-Souza-Magalh%C3%A3es/dp/3565707178/", note: "Disponível agora", available: true },
          { label: "epubli", url: "https://www.epubli.com/shop/spielhimmel-9783565707171", note: "Disponível agora", available: true },
          { label: "WhatsApp", url: "https://wa.me/491709250795", note: "Fale comigo para comprar" },
        ],
      },
    ],
  },
];

export function getBook(slug: string): Book | undefined {
  return books.find((b) => b.slug === slug);
}
