import Link from "next/link";

export const metadata = {
  title: "Widerrufsbelehrung — Ana Souza de Magalhães",
};

export default function WiderrufPage() {
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
          Widerrufsbelehrung
        </h1>
        <p style={{ ...pStyle, marginBottom: "2.5rem", color: "#8a6a50" }}>
          Stand: April 2025
        </p>

        <section style={{ marginBottom: "2rem" }}>
          <h2 style={h2Style}>Widerrufsrecht</h2>
          <p style={pStyle}>
            Sie haben das Recht, binnen vierzehn Tagen ohne Angabe von Gründen
            diesen Vertrag zu widerrufen. Die Widerrufsfrist beträgt vierzehn
            Tage ab dem Tag des Vertragsabschlusses.
          </p>
          <p style={{ ...pStyle, marginTop: "0.75rem" }}>
            Um Ihr Widerrufsrecht auszuüben, müssen Sie uns (Ana Souza de
            Magalhães,{" "}
            <a href="mailto:anasouzademagalhaes@gmail.com" style={linkStyle}>
              anasouzademagalhaes@gmail.com
            </a>
            , Rote Au 36, 74736 Hardheim) mittels einer eindeutigen Erklärung (z. B. ein per E-Mail
            übermittelter Brief) über Ihren Entschluss, diesen Vertrag zu
            widerrufen, informieren.
          </p>
        </section>

        <section style={{ marginBottom: "2rem" }}>
          <h2 style={h2Style}>Ausschluss des Widerrufsrechts bei digitalen Inhalten</h2>
          <p style={pStyle}>
            Das Widerrufsrecht erlischt bei Verträgen zur Lieferung von
            digitalen Inhalten (E-Books), wenn die Ausführung des Vertrags
            begonnen hat, nachdem Sie ausdrücklich zugestimmt haben, dass wir
            mit der Ausführung des Vertrags vor Ablauf der Widerrufsfrist
            beginnen, und Sie Ihre Kenntnis davon bestätigt haben, dass Sie
            durch Ihre Zustimmung mit Beginn der Ausführung des Vertrags Ihr
            Widerrufsrecht verlieren.
          </p>
          <p style={{ ...pStyle, marginTop: "0.75rem" }}>
            Beim Kauf eines E-Books wird Ihnen daher vor Abschluss des Kaufs
            ein entsprechender Hinweis angezeigt, dem Sie aktiv zustimmen
            müssen. Nach erteilter Zustimmung und sofortigem Download-Beginn
            besteht kein Widerrufsrecht mehr.
          </p>
        </section>

        <section style={{ marginBottom: "2rem" }}>
          <h2 style={h2Style}>Folgen des Widerrufs (physische Bücher)</h2>
          <p style={pStyle}>
            Wenn Sie diesen Vertrag widerrufen, haben wir Ihnen alle
            Zahlungen, die wir von Ihnen erhalten haben, unverzüglich und
            spätestens binnen vierzehn Tagen ab dem Tag zurückzuzahlen, an
            dem die Mitteilung über Ihren Widerruf dieses Vertrags bei uns
            eingegangen ist. Für diese Rückzahlung verwenden wir dasselbe
            Zahlungsmittel, das Sie bei der ursprünglichen Transaktion
            eingesetzt haben, es sei denn, mit Ihnen wurde ausdrücklich
            etwas anderes vereinbart.
          </p>
          <p style={{ ...pStyle, marginTop: "0.75rem" }}>
            Wir können die Rückzahlung verweigern, bis wir die Waren wieder
            zurückerhalten haben oder bis Sie den Nachweis erbracht haben,
            dass Sie die Waren zurückgesandt haben, je nachdem, welches der
            frühere Zeitpunkt ist. Sie haben die Waren unverzüglich und in
            jedem Fall spätestens binnen vierzehn Tagen ab dem Tag, an dem
            Sie uns über den Widerruf dieses Vertrags unterrichten,
            zurückzusenden oder zu übergeben. Die Frist ist gewahrt, wenn
            Sie die Waren vor Ablauf der Frist von vierzehn Tagen absenden.
            Sie tragen die unmittelbaren Kosten der Rücksendung der Waren.
          </p>
        </section>

        <section>
          <h2 style={h2Style}>Muster-Widerrufsformular</h2>
          <p style={pStyle}>
            (Wenn Sie den Vertrag widerrufen wollen, dann füllen Sie bitte
            dieses Formular aus und senden Sie es zurück.)
          </p>
          <div
            style={{
              marginTop: "1rem",
              padding: "1.25rem 1.5rem",
              background: "rgba(90,64,50,0.06)",
              borderRadius: 8,
              fontSize: "0.9rem",
              lineHeight: 1.9,
              color: "#5a4032",
            }}
          >
            An: Ana Souza de Magalhães, anasouzademagalhaes@gmail.com
            <br />
            <br />
            Hiermit widerrufe(n) ich/wir (*) den von mir/uns (*)
            abgeschlossenen Vertrag über den Kauf der folgenden Waren (*) /
            die Erbringung der folgenden Dienstleistung (*)
            <br />
            <br />
            Bestellt am (*) / erhalten am (*)
            <br />
            <br />
            Name des/der Verbraucher(s)
            <br />
            <br />
            Anschrift des/der Verbraucher(s)
            <br />
            <br />
            Unterschrift des/der Verbraucher(s) (nur bei Mitteilung auf
            Papier)
            <br />
            <br />
            Datum
            <br />
            <br />
            (*) Unzutreffendes streichen
          </div>
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
