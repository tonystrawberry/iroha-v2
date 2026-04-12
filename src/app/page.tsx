import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import ServicesSection from "@/components/ServicesSection";
import NewsSection from "@/components/NewsSection";
import CEOMessage from "@/components/CEOMessage";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <About />
        <ServicesSection />
        <NewsSection />
<CEOMessage />
      </main>
      <Footer />
    </>
  );
}
