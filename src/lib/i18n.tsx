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
    "Uma literatura atravessada pela memória e pela imaginação — onde o afeto, o silêncio e o tempo se encontram.",
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
  "hero.tagline": "Uma literatura atravessada pela memória e pela imaginação — onde o afeto, o silêncio e o tempo se encontram.",
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
    "Clara cresceu entre o cheiro de alecrim, o calor do forno e as histórias contadas à sombra de um pé de manga. Há uma casa em movimento, um povoado e uma menina que observa os gestos e os silêncios.",
  "flores.p2":
    "Em sua infância, tudo parecia simples: os dias passavam entre brincadeiras, vozes na cozinha e pequenos segredos guardados na memória.",
  "flores.p3":
    "Aos poucos, o mundo começa a mudar. O tempo avança, as mudanças familiares se tornam mais densas e a infância, antes leve, ganha novos significados. Entre descobertas, despedidas e lembranças, Clara aprende. Crescer é lidar com aquilo que não volta.",
  "flores.p4":
    "Sensível e delicado, Entre Flores e Algodão é uma narrativa sobre memória, afeto e transformação — um convite para revisitar a infância e reconhecer, nos pequenos detalhes, aquilo que permanece para sempre.",
  "flores.status": "Em edição — lançamento em breve",
  "flores.cta": "Quero acompanhar o lançamento",
  "flores.launchText": "Lançamento em breve — acompanhe pelo Instagram",
  "flores.instagram": "Seguir no Instagram →",

  "tartaruga.label": "Literatura Infantil",
  "tartaruga.title.pre": "Tanta Doçura,",
  "tartaruga.title.em": "Tartaruga!",
  "tartaruga.credit": "Ilustrado por Luiza Perufo",
  "tartaruga.p1":
    "Uma tartaruga um tanto diferente… Vivia cercada de doces. Até que uma pequena descoberta lhe mostrou um novo caminho.",
  "tartaruga.p2":
    "Entre novas amizades, um mar de possibilidades e descobertas inesperadas, ela percebe que a vida pode ser muito mais doce do que imaginava.",
  "tartaruga.p3":
    "Uma história sensível sobre curiosidade, descobertas e as muitas formas de ressignificar a doçura.",
  "tartaruga.status": "Disponível agora",

  "spielhimmel.label": "Literatura Infantil",
  "spielhimmel.title.pre": "Spiel",
  "spielhimmel.title.em": "Himmel",
  "spielhimmel.p1":
    "O que se esconde atrás das nuvens? Quais figuras aparecem quando erguemos o olhar e deixamos a imaginação fluir livremente?",
  "spielhimmel.p2":
    "O céu pode ser azul ou cinza, tranquilo ou cheio de movimento. Com palavras poéticas e ilustrações cheias de fantasia, Spielhimmel abre espaço para a curiosidade, a criatividade e os momentos compartilhados.",
  "spielhimmel.p3":
    "Um livro infantil que convida a olhar o mundo com os olhos abertos e descobrir o especial no cotidiano.",
  "spielhimmel.cta": "Disponível agora",

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

  "book.cta.shop": "Ver onde comprar",

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
    "Seus dados são protegidos conforme o GDPR (regulamento europeu de proteção de dados).",

  "projects.label": "Projetos em Andamento",
  "projects.title.pre": "Em",
  "projects.title.em": "Desenvolvimento",
  "projects.musica.title": "Projeto Musical",
  "projects.musica.status": "Em produção",
  "projects.musica.desc":
    "Poemas autorais musicalizados — canções e paisagens sonoras construídas a partir de versos próprios, explorando memória, natureza, imaginação e o cotidiano.",

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
  "footer.country": "Operado a partir da Alemanha · Conforme o GDPR",

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

  "nav.musica": "Música",
  "nav.videos": "Textos & Vídeos",

  "hero.slide.launch": "Lançamento",
  "hero.slide.featured": "Em Destaque",
  "hero.slide.cta.book": "Conheça o livro",
  "hero.slide.cta.whatsapp": "Fale pelo WhatsApp",

  "infantil.label": "Literatura Infantil",
  "infantil.subtitle": "Histórias que conectam culturas",
  "infantil.annotation": "Duas línguas.\nMuitas possibilidades.",
  "infantil.sinopse": "Sinopse",
  "infantil.comprar": "Comprar",

  "contemp.label": "Literatura Contemporânea",
  "contemp.subtitle": "Poesia, prosa e outras travessias",
  "contemp.annotation": "Ler\ntambém é\natravessar\nfronteiras.",
  "contemp.desc": "Textos que exploram a identidade, o pertencimento e as sutilezas da vida entre culturas.",
  "contemp.cta1": "Conheça as obras",
  "contemp.cta2": "Ver opções de compra",

  "musica.label": "Álbum",
  "musica.title": "Verso & Stimme",
  "musica.desc": "Poemas que ganham uma nova forma de interpretação através da música.",
  "musica.spotify": "Ouvir no Spotify",
  "musica.youtube": "Ouvir no YouTube Music",
  "musica.other": "Ouvir em outras plataformas",
  "musica.annotation": "Poesia\ntambém\nse ouve.",

  "videos.label": "Textos & Vídeos",
  "videos.title.pre": "Textos &",
  "videos.title.em": "Vídeos",
  "videos.subtitle": "Leituras, conversas e bastidores",
  "videos.cta": "Explorar conteúdos",
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
    "Clara wuchs auf zwischen dem Duft von Rosmarin, der Wärme des Ofens und den Geschichten, die im Schatten eines Mangobaums erzählt wurden. Da ist ein Haus in Bewegung, ein Dorf und ein Mädchen, das die Gesten und das Schweigen beobachtet.",
  "flores.p2":
    "In ihrer Kindheit schien alles einfach: Die Tage vergingen zwischen Spielen, Stimmen in der Küche und kleinen Geheimnissen, die im Gedächtnis bewahrt wurden.",
  "flores.p3":
    "Nach und nach beginnt sich die Welt zu verändern. Die Zeit schreitet voran, die familiären Veränderungen werden dichter, und die Kindheit, einst leicht, gewinnt neue Bedeutungen. Zwischen Entdeckungen, Abschieden und Erinnerungen lernt Clara: Erwachsenwerden heißt, mit dem umzugehen, was nicht zurückkehrt.",
  "flores.p4":
    "Sensibel und zart erzählt Entre Flores e Algodão von Erinnerung, Zuneigung und Wandel — eine Einladung, die Kindheit neu zu besuchen und in den kleinen Details das zu erkennen, was für immer bleibt.",
  "flores.status": "In Bearbeitung — Veröffentlichung in Kürze",
  "flores.cta": "Auf dem Laufenden bleiben",
  "flores.launchText": "Erscheint bald — folge dem Launch auf Instagram",
  "flores.instagram": "Auf Instagram folgen →",

  "tartaruga.label": "Kinderliteratur",
  "tartaruga.title.pre": "Tanta Doçura,",
  "tartaruga.title.em": "Tartaruga!",
  "tartaruga.credit": "Illustriert von Luiza Perufo",
  "tartaruga.p1":
    "Eine Schildkröte, ein wenig anders als die anderen … Sie lebte umgeben von Süßigkeiten. Bis eine kleine Entdeckung ihr einen neuen Weg zeigte.",
  "tartaruga.p2":
    "Zwischen neuen Freundschaften, ungeahnten Möglichkeiten und unerwarteten Entdeckungen begreift sie: Das Leben kann viel süßer sein, als sie dachte.",
  "tartaruga.p3":
    "Eine einfühlsame Geschichte über Neugier, Entdeckungen und die vielen Arten, Süße neu zu deuten.",
  "tartaruga.status": "Jetzt erhältlich",

  "spielhimmel.label": "Kinderliteratur",
  "spielhimmel.title.pre": "Spiel",
  "spielhimmel.title.em": "Himmel",
  "spielhimmel.p1":
    "Was verbirgt sich hinter den Wolken? Welche Figuren entstehen, wenn wir den Blick nach oben richten und unserer Fantasie freien Lauf lassen?",
  "spielhimmel.p2":
    "Mal ist der Himmel blau, mal grau, mal still und mal voller Bewegung. Mit poetischen Worten und fantasievollen Illustrationen öffnet Spielhimmel einen Raum für Neugier, Kreativität und gemeinsame Augenblicke.",
  "spielhimmel.p3":
    "Ein Kinderbuch, das dazu einlädt, die Welt mit offenen Augen zu betrachten und das Besondere im Alltäglichen zu entdecken.",
  "spielhimmel.cta": "Jetzt erhältlich",

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
  "ceu.quote.author": "— Leserin",

  "book.cta.shop": "Wo kaufen",

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

  "projects.label": "Laufende Projekte",
  "projects.title.pre": "In",
  "projects.title.em": "Entwicklung",
  "projects.musica.title": "Musikprojekt",
  "projects.musica.status": "In Produktion",
  "projects.musica.desc":
    "Eigene Gedichte, vertont zu Liedern und Klanglandschaften — sie kreisen um Erinnerung, Natur, Fantasie und die kleinen Momente des Alltags.",

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

  "nav.musica": "Musik",
  "nav.videos": "Texte & Videos",

  "hero.slide.launch": "Neuerscheinung",
  "hero.slide.featured": "Im Fokus",
  "hero.slide.cta.book": "Buch entdecken",
  "hero.slide.cta.whatsapp": "Per WhatsApp schreiben",

  "infantil.label": "Kinderliteratur",
  "infantil.subtitle": "Geschichten, die Kulturen verbinden",
  "infantil.annotation": "Zwei Sprachen.\nUnendliche Möglichkeiten.",
  "infantil.sinopse": "Klappentext",
  "infantil.comprar": "Kaufen",

  "contemp.label": "Zeitgenössische Literatur",
  "contemp.subtitle": "Poesie, Prosa und andere Übergänge",
  "contemp.annotation": "Lesen\nist auch\nGrenzen\nüberwinden.",
  "contemp.desc": "Texte, die Identität, Zugehörigkeit und die Feinheiten des Lebens zwischen Kulturen erkunden.",
  "contemp.cta1": "Die Werke entdecken",
  "contemp.cta2": "Kaufoptionen ansehen",

  "musica.label": "Album",
  "musica.title": "Verso & Stimme",
  "musica.desc": "Gedichte, die durch Musik eine neue Form der Interpretation gewinnen.",
  "musica.spotify": "Auf Spotify hören",
  "musica.youtube": "Auf YouTube Music hören",
  "musica.other": "Auf anderen Plattformen hören",
  "musica.annotation": "Poesie\nhört man\nauch.",

  "videos.label": "Texte & Videos",
  "videos.title.pre": "Texte &",
  "videos.title.em": "Videos",
  "videos.subtitle": "Lesungen, Gespräche und Hintergründe",
  "videos.cta": "Inhalte entdecken",
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
