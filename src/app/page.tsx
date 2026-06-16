import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import CasosDeFamiliaSection from "@/components/CasosDeFamiliaSection";
import EntreFloresSection from "@/components/EntreFloresSection";
import CeuDeBrincarSection from "@/components/CeuDeBrincarSection";
import BotanicalDivider from "@/components/BotanicalDivider";
import AuthorSection from "@/components/AuthorSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ScrollToTop";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <HeroSection />
        <div id="livros" />
        <EntreFloresSection />
        <BotanicalDivider />
        <CeuDeBrincarSection />
        <BotanicalDivider />
        <CasosDeFamiliaSection />
        <BotanicalDivider />
        <AuthorSection />
        <BotanicalDivider />
        <ContactSection />
      </main>
      <Footer />
      <ScrollToTop />
    </>
  );
}
