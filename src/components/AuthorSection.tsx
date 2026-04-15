"use client";

export default function AuthorSection() {
  return (
    <section
      id="sobre"
      className="relative py-28 md:py-40 overflow-hidden"
      style={{
        background:
          "linear-gradient(160deg, #100e0a 0%, #0d0d18 50%, #0a0a12 100%)",
      }}
    >
      {/* Background accent */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse at 20% 60%, rgba(201,168,76,0.05) 0%, transparent 55%)",
        }}
      />

      <div className="max-w-6xl mx-auto px-6">
        <div className="grid md:grid-cols-5 gap-16 items-center">
          {/* Photo placeholder */}
          <div className="md:col-span-2 flex justify-center md:justify-start">
            <div className="relative">
              {/* Glow ring */}
              <div
                className="absolute inset-0 rounded-full"
                style={{
                  background:
                    "radial-gradient(circle, rgba(201,168,76,0.2) 0%, transparent 70%)",
                  transform: "scale(1.2)",
                  filter: "blur(20px)",
                }}
              />
              {/* Photo frame */}
              <div
                className="relative rounded-full overflow-hidden"
                style={{
                  width: 260,
                  height: 260,
                  border: "2px solid rgba(201,168,76,0.25)",
                  boxShadow: "0 20px 60px rgba(0,0,0,0.5), 0 0 0 6px rgba(201,168,76,0.06)",
                }}
              >
                {/* Placeholder for author photo */}
                <div
                  className="w-full h-full flex items-center justify-center"
                  style={{
                    background:
                      "radial-gradient(circle at 35% 35%, #3a2a18, #1a1208)",
                  }}
                >
                  <svg width="90" height="110" viewBox="0 0 90 110" fill="none">
                    <ellipse cx="45" cy="36" rx="24" ry="28" fill="rgba(201,168,76,0.25)" />
                    <path
                      d="M5 105 C5 72 85 72 85 105"
                      fill="rgba(201,168,76,0.2)"
                    />
                  </svg>
                </div>
              </div>
              {/* Caption badge */}
              <div
                className="absolute -bottom-3 left-1/2 -translate-x-1/2 px-4 py-1.5 rounded-full text-xs tracking-widest uppercase font-medium glass"
                style={{ color: "#c9a84c", whiteSpace: "nowrap" }}
              >
                Claudio / MG → Wertheim, DE
              </div>
            </div>
          </div>

          {/* Bio text */}
          <div className="md:col-span-3">
            <p
              className="text-xs uppercase tracking-[0.3em] mb-4"
              style={{ color: "rgba(201,168,76,0.6)" }}
            >
              Sobre a autora
            </p>
            <h2
              className="mb-8 leading-tight"
              style={{
                fontFamily: "var(--font-playfair)",
                fontSize: "clamp(1.8rem, 4vw, 3rem)",
                fontWeight: 700,
                color: "#f5f0e8",
              }}
            >
              Uma mineira de coração,{" "}
              <em className="gold-text" style={{ fontStyle: "italic" }}>
                escrevendo o mundo
              </em>
            </h2>

            <div className="space-y-4" style={{ color: "rgba(245,240,232,0.65)" }}>
              <p className="leading-relaxed">
                Ana Souza de Magalhães nasceu no interior de Minas Gerais. É
                formada em Pedagogia pela UEMG, com pós-graduação em Pedagogia
                Empresarial pela PUC Minas.
              </p>
              <p className="leading-relaxed">
                Vive há alguns anos na Alemanha, onde se especializou em cuidados
                geriátricos pela escola Johanniter, em Wertheim. A distância não
                apagou as raízes — ao contrário, a fez enxergar com mais nitidez
                tudo que carregava dentro de si.
              </p>
              <p className="leading-relaxed">
                Participa das coletâneas{" "}
                <em>Casos de Família</em> e <em>Mundo Fantástico</em>, com o
                conto <em>Urá</em>, e do curso de escrita criativa da Metamorfose.
                É também autora do livro infantil{" "}
                <em className="text-cream">Céu de Brincar</em> e do romance{" "}
                <em>Entre Flores e Algodão</em>, em edição pela Metamorfose.
              </p>
            </div>

            {/* Social links */}
            <div className="mt-10 flex items-center gap-5">
              {[
                {
                  name: "Instagram",
                  icon: (
                    <svg width="20" height="20" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                      <rect x="2" y="2" width="20" height="20" rx="5" />
                      <circle cx="12" cy="12" r="4" />
                      <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
                    </svg>
                  ),
                },
                {
                  name: "YouTube",
                  icon: (
                    <svg width="20" height="20" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                      <rect x="2" y="6" width="20" height="12" rx="4" />
                      <polygon points="10,9 16,12 10,15" fill="currentColor" stroke="none" />
                    </svg>
                  ),
                },
                {
                  name: "WhatsApp",
                  icon: (
                    <svg width="20" height="20" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                      <path d="M12 2C6.48 2 2 6.48 2 12c0 1.85.5 3.58 1.37 5.07L2 22l4.93-1.37A9.96 9.96 0 0 0 12 22c5.52 0 10-4.48 10-10S17.52 2 12 2z" />
                      <path d="M8.5 9.5c.5 1 1.5 2.5 3 3.5 1.5 1 2.5 1.5 3.5 2" strokeLinecap="round" />
                    </svg>
                  ),
                },
              ].map((s) => (
                <a
                  key={s.name}
                  href="#"
                  aria-label={s.name}
                  className="p-2.5 rounded-full transition-all duration-300 hover:-translate-y-0.5"
                  style={{
                    color: "rgba(245,240,232,0.5)",
                    border: "1px solid rgba(245,240,232,0.1)",
                  }}
                  onMouseEnter={(e) => {
                    (e.currentTarget as HTMLElement).style.color = "#c9a84c";
                    (e.currentTarget as HTMLElement).style.borderColor = "rgba(201,168,76,0.4)";
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLElement).style.color = "rgba(245,240,232,0.5)";
                    (e.currentTarget as HTMLElement).style.borderColor = "rgba(245,240,232,0.1)";
                  }}
                >
                  {s.icon}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
