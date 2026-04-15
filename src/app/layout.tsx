import type { Metadata } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import "./globals.css";

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
  style: ["normal", "italic"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
});

export const metadata: Metadata = {
  title: "Ana Souza de Magalhães — Escritora",
  description:
    "Ana Souza de Magalhães é autora de Casos de Família e Céu de Brincar. Conheça seus livros e adquira agora.",
  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: "https://anasouzademagalhaes.com",
    siteName: "Ana Souza de Magalhães",
    title: "Ana Souza de Magalhães — Escritora",
    description:
      "Autora de Casos de Família e Céu de Brincar. Livros disponíveis na Amazon e ebook direto.",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="pt-BR"
      className={`${playfair.variable} ${inter.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-ink text-cream">
        {children}
      </body>
    </html>
  );
}
