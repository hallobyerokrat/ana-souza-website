import Link from "next/link";

export const metadata = {
  title: "Datenschutzerklärung — Ana Souza de Magalhães",
};

export default function DatenschutzPage() {
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
            marginBottom: "0.5rem",
            color: "#3d2a1a",
          }}
        >
          Datenschutzerklärung
        </h1>
        <p style={{ ...pStyle, marginBottom: "2.5rem", color: "#8a6a50" }}>
          Stand: April 2025
        </p>

        <section style={{ marginBottom: "2rem" }}>
          <h2 style={h2Style}>1. Verantwortliche Person</h2>
          <p style={pStyle}>
            Ana Souza de Magalhães
            <br />
            Rote Au 36, 74736 Hardheim, Deutschland
            <br />
            E-Mail:{" "}
            <a href="mailto:anasouzademagalhaes@gmail.com" style={linkStyle}>
              anasouzademagalhaes@gmail.com
            </a>
          </p>
        </section>

        <section style={{ marginBottom: "2rem" }}>
          <h2 style={h2Style}>2. Welche Daten wir erheben</h2>
          <p style={pStyle}>
            Diese Website erhebt keine personenbezogenen Daten über Formulare
            oder Registrierungen. Beim Aufruf der Seite werden vom Hosting-
            Anbieter (Vercel) technisch notwendige Server-Logs gespeichert
            (IP-Adresse, Zeitstempel, aufgerufene URL, Browser-Typ). Diese
            Daten sind für uns nicht einsehbar und werden von Vercel
            automatisch nach kurzer Zeit gelöscht.
          </p>
          <p style={{ ...pStyle, marginTop: "0.75rem" }}>
            Wenn Sie uns per E-Mail kontaktieren, verarbeiten wir die von
            Ihnen übermittelten Daten ausschließlich zur Bearbeitung Ihrer
            Anfrage (Art. 6 Abs. 1 lit. b DSGVO). Eine Weitergabe an Dritte
            findet nicht statt.
          </p>
        </section>

        <section style={{ marginBottom: "2rem" }}>
          <h2 style={h2Style}>3. Hosting — Vercel</h2>
          <p style={pStyle}>
            Die Website wird über{" "}
            <strong>Vercel Inc.</strong> (440 N Barranca Ave #4133, Covina,
            CA 91723, USA) gehostet. Vercel verarbeitet technische Verbindungs-
            daten beim Seitenaufruf. Ein Auftragsverarbeitungsvertrag (DPA)
            gemäß Art. 28 DSGVO liegt vor. Weitere Informationen:{" "}
            <a
              href="https://vercel.com/legal/privacy-policy"
              target="_blank"
              rel="noopener noreferrer"
              style={linkStyle}
            >
              vercel.com/legal/privacy-policy
            </a>
            .
          </p>
        </section>

        <section style={{ marginBottom: "2rem" }}>
          <h2 style={h2Style}>4. Analytics — Vercel Analytics</h2>
          <p style={pStyle}>
            Wir nutzen <strong>Vercel Analytics</strong> zur anonymisierten
            Auswertung von Seitenaufrufen. Vercel Analytics arbeitet
            cookielos und speichert keine personenbezogenen Daten. Es werden
            lediglich aggregierte Statistiken (Seitenaufrufe, Herkunftsland,
            verwendetes Gerät) erfasst. Eine Identifizierung einzelner
            Personen ist nicht möglich. Rechtsgrundlage: Art. 6 Abs. 1
            lit. f DSGVO (berechtigtes Interesse an anonymer
            Nutzungsanalyse).
          </p>
        </section>

        <section style={{ marginBottom: "2rem" }}>
          <h2 style={h2Style}>5. Zahlungsabwicklung — PayPal</h2>
          <p style={pStyle}>
            Für den direkten Buchkauf wird{" "}
            <strong>PayPal (Europe) S.à r.l. et Cie, S.C.A.</strong> als
            Zahlungsdienstleister eingesetzt. Bei Auswahl von PayPal als
            Zahlungsmethode werden Sie auf die PayPal-Plattform
            weitergeleitet. Welche Daten PayPal dabei verarbeitet, entnehmen
            Sie der Datenschutzerklärung von PayPal:{" "}
            <a
              href="https://www.paypal.com/de/webapps/mpp/ua/privacy-full"
              target="_blank"
              rel="noopener noreferrer"
              style={linkStyle}
            >
              paypal.com/de/…/privacy-full
            </a>
            . Rechtsgrundlage: Art. 6 Abs. 1 lit. b DSGVO
            (Vertragserfüllung).
          </p>
        </section>

        <section style={{ marginBottom: "2rem" }}>
          <h2 style={h2Style}>6. Datenbank — Supabase</h2>
          <p style={pStyle}>
            Für die Speicherung von Bestelldaten verwenden wir{" "}
            <strong>Supabase Inc.</strong> (San Francisco, CA, USA) mit
            Servern in der EU (Frankfurt). Ein Auftragsverarbeitungsvertrag
            liegt vor. Gespeichert werden ausschließlich
            transaktionsbezogene Daten (E-Mail-Adresse, Bestelldetails).
            Weitere Informationen:{" "}
            <a
              href="https://supabase.com/privacy"
              target="_blank"
              rel="noopener noreferrer"
              style={linkStyle}
            >
              supabase.com/privacy
            </a>
            .
          </p>
        </section>

        <section style={{ marginBottom: "2rem" }}>
          <h2 style={h2Style}>7. Cookies</h2>
          <p style={pStyle}>
            Diese Website verwendet keine Tracking- oder
            Marketing-Cookies. Es wird lediglich ein technisch notwendiges
            Cookie gesetzt, um Ihre Sprachpräferenz (Portugiesisch / Deutsch)
            zu speichern. Dieses Cookie enthält keine personenbezogenen Daten
            und kann jederzeit im Browser gelöscht werden.
          </p>
        </section>

        <section style={{ marginBottom: "2rem" }}>
          <h2 style={h2Style}>8. Ihre Rechte</h2>
          <p style={pStyle}>
            Sie haben das Recht auf Auskunft (Art. 15), Berichtigung
            (Art. 16), Löschung (Art. 17), Einschränkung der Verarbeitung
            (Art. 18), Datenübertragbarkeit (Art. 20) sowie Widerspruch
            (Art. 21 DSGVO). Zur Ausübung Ihrer Rechte genügt eine formlose
            E-Mail an{" "}
            <a href="mailto:anasouzademagalhaes@gmail.com" style={linkStyle}>
              anasouzademagalhaes@gmail.com
            </a>
            .
          </p>
          <p style={{ ...pStyle, marginTop: "0.75rem" }}>
            Sie haben außerdem das Recht, sich bei einer
            Datenschutzaufsichtsbehörde zu beschweren. Zuständig ist der
            Landesbeauftragte für den Datenschutz und die
            Informationsfreiheit Baden-Württemberg.
          </p>
        </section>

        <section>
          <h2 style={h2Style}>9. Externe Links</h2>
          <p style={pStyle}>
            Diese Website enthält Links zu Amazon und Instagram. Für die
            Datenschutzpraktiken dieser Drittanbieter sind wir nicht
            verantwortlich. Beim Klick auf einen externen Link verlassen
            Sie unsere Website.
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
