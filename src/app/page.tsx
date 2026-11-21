import Navbar from "@/components/Navbar";
import HeroSlider from "@/components/HeroSlider";
import LiteraturaInfantilSection from "@/components/LiteraturaInfantilSection";
import LiteraturaContemporaneaSection from "@/components/LiteraturaContemporaneaSection";
import MusicSection from "@/components/MusicSection";
import TextosVideosSection from "@/components/TextosVideosSection";
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
        <HeroSlider />
        <LiteraturaInfantilSection />
        <BotanicalDivider />
        <LiteraturaContemporaneaSection />
        <BotanicalDivider />
        <MusicSection />
        <BotanicalDivider />
        <TextosVideosSection />
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
