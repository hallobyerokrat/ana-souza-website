import type { Metadata } from "next";
import { Playfair_Display, Inter, Caveat } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import { LanguageProvider } from "@/lib/i18n";

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

const caveat = Caveat({
  variable: "--font-caveat",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Ana Souza de Magalhães — Escritora",
  description:
    "Ana Souza de Magalhães é autora de Casos de Família e Céu de Brincar. Conheça seus livros e adquira agora.",
  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: "https://www.anasouza.space",
    siteName: "Ana Souza de Magalhães",
    title: "Ana Souza de Magalhães — Escritora",
    description:
      "Autora de Casos de Família e Céu de Brincar. Livros disponíveis na Amazon e ebook direto.",
    images: [
      {
        url: "https://www.anasouza.space/icon.png",
        width: 512,
        height: 512,
        alt: "Ana Souza de Magalhães — Escritora",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Ana Souza de Magalhães — Escritora",
    description: "Autora de Casos de Família e Céu de Brincar.",
    images: ["https://www.anasouza.space/icon.png"],
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
      className={`${playfair.variable} ${inter.variable} ${caveat.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <LanguageProvider>{children}</LanguageProvider>
        <Script src="https://app.lemonsqueezy.com/js/lemon.js" strategy="lazyOnload" />
      </body>
    </html>
  );
}
