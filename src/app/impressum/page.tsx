import Link from "next/link";

export const metadata = {
  title: "Impressum — Ana Souza de Magalhães",
};

export default function ImpressumPage() {
  return (
    <main
      style={{
        minHeight: "100vh",
        background: "#faf6ed",
        padding: "4rem 1.5rem",
        fontFamily: "var(--font-inter)",
        color: "#3d2a1a",
      }}
    >
      <div style={{ maxWidth: 680, margin: "0 auto" }}>
        <Link
          href="/"
          style={{
            fontSize: 13,
            color: "#6d7e5f",
            textDecoration: "none",
            display: "inline-block",
            marginBottom: "2rem",
            letterSpacing: "0.05em",
          }}
        >
          ← zurück zur Startseite
        </Link>

        <h1
          style={{
            fontFamily: "var(--font-playfair)",
            fontSize: "2rem",
            fontWeight: 600,
            marginBottom: "2.5rem",
            color: "#3d2a1a",
          }}
        >
          Impressum
        </h1>

        <section style={{ marginBottom: "2rem" }}>
          <h2 style={h2Style}>Angaben gemäß § 5 DDG</h2>
          <p style={pStyle}>
            <strong>Ana Christina Magalhaes-Müller</strong>
            <br />
            Rote Au 36
            <br />
            74736 Hardheim
            <br />
            Deutschland
          </p>
        </section>

        <section style={{ marginBottom: "2rem" }}>
          <h2 style={h2Style}>Kontakt</h2>
          <p style={pStyle}>
            Telefon: +49 0170 9250795
            <br />
            E-Mail:{" "}
            <a href="mailto:anasouzademagalhaes@gmail.com" style={linkStyle}>
              anasouzademagalhaes@gmail.com
            </a>
          </p>
        </section>

        <section style={{ marginBottom: "2rem" }}>
          <h2 style={h2Style}>Steuerliche Angaben</h2>
          <p style={pStyle}>
            Tätigkeit als Freiberuflerin (Schriftstellerin / Autorin) gemäß § 18
            EStG.
          </p>
        </section>

        <section style={{ marginBottom: "2rem" }}>
          <h2 style={h2Style}>Inhaltlich verantwortlich</h2>
          <p style={pStyle}>Ana Souza de Magalhães (Anschrift wie oben)</p>
        </section>

        <section style={{ marginBottom: "2rem" }}>
          <h2 style={h2Style}>Urheberrecht</h2>
          <p style={pStyle}>
            Die auf dieser Website veröffentlichten Texte, Bilder und
            Buchcover sind urheberrechtlich geschützt. Eine Vervielfältigung
            oder Verwendung ohne ausdrückliche schriftliche Genehmigung ist
            nicht gestattet.
          </p>
        </section>

        <section style={{ marginBottom: "2rem" }}>
          <h2 style={h2Style}>EU-Streitschlichtung</h2>
          <p style={pStyle}>
            Die Europäische Kommission stellt eine Plattform zur
            Online-Streitbeilegung (OS) bereit:{" "}
            <a
              href="https://ec.europa.eu/consumers/odr/"
              target="_blank"
              rel="noopener noreferrer"
              style={linkStyle}
            >
              https://ec.europa.eu/consumers/odr/
            </a>
            . Meine E-Mail-Adresse finden Sie oben im Impressum.
          </p>
        </section>

        <section>
          <h2 style={h2Style}>Verbraucherstreitbeilegung</h2>
          <p style={pStyle}>
            Ich bin nicht bereit und nicht verpflichtet, an
            Streitbeilegungsverfahren vor einer
            Verbraucherschlichtungsstelle teilzunehmen.
          </p>
        </section>
      </div>
    </main>
  );
}

const h2Style: React.CSSProperties = {
  fontFamily: "var(--font-playfair)",
  fontSize: "1.1rem",
  fontWeight: 600,
  marginBottom: "0.5rem",
  color: "#3d2a1a",
};

const pStyle: React.CSSProperties = {
  fontSize: "0.95rem",
  lineHeight: 1.8,
  color: "#5a4032",
};

const linkStyle: React.CSSProperties = {
  color: "#6d7e5f",
  textDecoration: "underline",
};
