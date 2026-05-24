import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import CasosDeFamiliaSection from "@/components/CasosDeFamiliaSection";
import EntreFloresSection from "@/components/EntreFloresSection";
import CeuDeBrincarSection from "@/components/CeuDeBrincarSection";
import AuthorSection from "@/components/AuthorSection";
import NewsletterSection from "@/components/NewsletterSection";
// import ShopSection from "@/components/ShopSection";
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ScrollToTop";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <HeroSection />
        <div id="livros" />
        <CasosDeFamiliaSection />
        <EntreFloresSection />
        <CeuDeBrincarSection />
        <AuthorSection />
        {/* <ShopSection /> */}
        <NewsletterSection />
      </main>
      <Footer />
      <ScrollToTop />
    </>
  );
}
