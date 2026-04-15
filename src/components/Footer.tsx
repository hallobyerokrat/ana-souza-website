"use client";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer
      className="relative border-t"
      style={{
        background: "#080808",
        borderColor: "rgba(255,255,255,0.06)",
      }}
    >
      <div className="max-w-6xl mx-auto px-6 py-14">
        <div className="grid sm:grid-cols-3 gap-10 mb-12">
          {/* Brand */}
          <div>
            <p
              className="font-semibold text-cream mb-3"
              style={{ fontFamily: "var(--font-playfair)", fontSize: 18 }}
            >
              Ana Souza de Magalhães
            </p>
            <p className="text-sm leading-relaxed" style={{ color: "rgba(245,240,232,0.4)" }}>
              Escritora brasileira radicada na Alemanha. Autora de{" "}
              <em>Casos de Família</em> e{" "}
              <em>Céu de Brincar</em>.
            </p>
          </div>

          {/* Links */}
          <div>
            <p
              className="text-xs uppercase tracking-widest mb-4 font-medium"
              style={{ color: "rgba(201,168,76,0.6)" }}
            >
              Navegação
            </p>
            <ul className="space-y-2">
              {[
                { href: "#livros", label: "Livros" },
                { href: "#sobre", label: "Sobre a Autora" },
                { href: "#newsletter", label: "Newsletter" },
                { href: "#contato", label: "Contato" },
              ].map((l) => (
                <li key={l.href}>
                  <a
                    href={l.href}
                    className="text-sm transition-colors duration-300"
                    style={{ color: "rgba(245,240,232,0.45)" }}
                    onMouseEnter={(e) =>
                      ((e.currentTarget as HTMLElement).style.color = "#c9a84c")
                    }
                    onMouseLeave={(e) =>
                      ((e.currentTarget as HTMLElement).style.color =
                        "rgba(245,240,232,0.45)")
                    }
                  >
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div>
            <p
              className="text-xs uppercase tracking-widest mb-4 font-medium"
              style={{ color: "rgba(201,168,76,0.6)" }}
            >
              Legal
            </p>
            <ul className="space-y-2">
              {[
                { href: "/impressum", label: "Impressum" },
                { href: "/datenschutz", label: "Datenschutzerklärung" },
                { href: "/widerruf", label: "Widerrufsbelehrung" },
              ].map((l) => (
                <li key={l.href}>
                  <a
                    href={l.href}
                    className="text-sm transition-colors duration-300"
                    style={{ color: "rgba(245,240,232,0.35)" }}
                    onMouseEnter={(e) =>
                      ((e.currentTarget as HTMLElement).style.color =
                        "rgba(245,240,232,0.7)")
                    }
                    onMouseLeave={(e) =>
                      ((e.currentTarget as HTMLElement).style.color =
                        "rgba(245,240,232,0.35)")
                    }
                  >
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div
          className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 border-t"
          style={{ borderColor: "rgba(255,255,255,0.05)" }}
        >
          <p className="text-xs" style={{ color: "rgba(245,240,232,0.25)" }}>
            © {year} Ana Souza de Magalhães. Todos os direitos reservados.
          </p>
          <p className="text-xs" style={{ color: "rgba(245,240,232,0.2)" }}>
            Betrieben aus Deutschland · DSGVO-konform
          </p>
        </div>
      </div>
    </footer>
  );
}
