import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import CasosDeFamiliaSection from "@/components/CasosDeFamiliaSection";
import CeuDeBrincarSection from "@/components/CeuDeBrincarSection";
import AuthorSection from "@/components/AuthorSection";
import NewsletterSection from "@/components/NewsletterSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <HeroSection />
        <div id="livros" />
        <CasosDeFamiliaSection />
        <CeuDeBrincarSection />
        <AuthorSection />
        <NewsletterSection />
      </main>
      <Footer />
    </>
  );
}
