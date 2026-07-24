import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import CasosDeFamiliaSection from "@/components/CasosDeFamiliaSection";
import EntreFloresSection from "@/components/EntreFloresSection";
import CeuDeBrincarSection from "@/components/CeuDeBrincarSection";
import TartarugaSection from "@/components/TartarugaSection";
import ProjectsSection from "@/components/ProjectsSection";
import ShopSection from "@/components/ShopSection";
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
        <TartarugaSection />
        <BotanicalDivider />
        <CasosDeFamiliaSection />
        <BotanicalDivider />
        <ProjectsSection />
        <BotanicalDivider />
        <AuthorSection />
        <BotanicalDivider />
        <ContactSection />
        <BotanicalDivider />
        <ShopSection />
      </main>
      <Footer />
      <ScrollToTop />
    </>
  );
}
