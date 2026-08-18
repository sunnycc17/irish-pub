import Hero from "@/components/Hero";
import Header from "@/components/Header";
import About from "@/components/About";
import Drinks from "@/components/Drinks";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main>
      <Hero />
      <Header />
      <About />
      <Drinks />
      <Contact />
      <Footer />
      {/* Other sections */}
    </main>
  );
}
