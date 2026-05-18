"use client";

import { useT } from "@/lib/i18n";

export default function Footer() {
  const { t } = useT();
  const year = new Date().getFullYear();

  const navLinks = [
    { href: "#livros", label: t("footer.link.livros") },
    { href: "#sobre", label: t("footer.link.sobre") },
    { href: "#contato", label: t("footer.link.contato") },
  ];

  const legalLinks = [
    { href: "/impressum", label: t("footer.link.impressum") },
    { href: "/datenschutz", label: t("footer.link.datenschutz") },
    { href: "/widerruf", label: t("footer.link.widerruf") },
  ];

  return (
    <footer
      className="relative wallpaper-botanical-dense border-t"
      style={{
        borderColor: "rgba(61,42,26,0.12)",
      }}
    >
      <div className="max-w-6xl mx-auto px-6 py-14">
        <div className="grid sm:grid-cols-3 gap-10 mb-12">
          {/* Brand */}
          <div>
            <p
              className="mb-3"
              style={{
                fontFamily: "var(--font-playfair)",
                fontSize: 20,
                color: "#3d2a1a",
                fontWeight: 500,
              }}
            >
              Ana Souza{" "}
              <em style={{ fontStyle: "italic", color: "#6d7e5f" }}>
                de Magalhães
              </em>
            </p>
            <p
              className="text-sm leading-relaxed"
              style={{ color: "rgba(90,64,50,0.75)" }}
            >
              {t("footer.desc")}
            </p>
          </div>

          {/* Nav */}
          <div>
            <p
              className="text-xs uppercase tracking-widest mb-4"
              style={{
                color: "#6d7e5f",
                fontWeight: 600,
              }}
            >
              {t("footer.nav")}
            </p>
            <ul className="space-y-2">
              {navLinks.map((l) => (
                <li key={l.href}>
                  <a
                    href={l.href}
                    className="text-sm transition-colors duration-300"
                    style={{ color: "#5a4032" }}
                    onMouseEnter={(e) =>
                      ((e.currentTarget as HTMLElement).style.color =
                        "#6d7e5f")
                    }
                    onMouseLeave={(e) =>
                      ((e.currentTarget as HTMLElement).style.color =
                        "#5a4032")
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
              className="text-xs uppercase tracking-widest mb-4"
              style={{
                color: "#6d7e5f",
                fontWeight: 600,
              }}
            >
              {t("footer.legal")}
            </p>
            <ul className="space-y-2">
              {legalLinks.map((l) => (
                <li key={l.href}>
                  <a
                    href={l.href}
                    className="text-sm transition-colors duration-300"
                    style={{ color: "rgba(90,64,50,0.7)" }}
                    onMouseEnter={(e) =>
                      ((e.currentTarget as HTMLElement).style.color =
                        "#6d7e5f")
                    }
                    onMouseLeave={(e) =>
                      ((e.currentTarget as HTMLElement).style.color =
                        "rgba(90,64,50,0.7)")
                    }
                  >
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div
          className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 border-t"
          style={{ borderColor: "rgba(61,42,26,0.1)" }}
        >
          <p className="text-xs" style={{ color: "rgba(90,64,50,0.55)" }}>
            © {year} Ana Souza de Magalhães. {t("footer.rights")}
          </p>
          <p className="text-xs" style={{ color: "rgba(90,64,50,0.5)" }}>
            {t("footer.country")}
          </p>
        </div>
      </div>
    </footer>
  );
}
