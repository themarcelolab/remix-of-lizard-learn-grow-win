import Header from "@/components/landing/Header";
import Hero from "@/components/landing/Hero";
import Problem from "@/components/landing/Problem";
import AnimatedPhrase from "@/components/landing/AnimatedPhrase";
import Benefits from "@/components/landing/Benefits";
import SRSScience from "@/components/landing/SRSScience";
import BrandImage from "@/components/landing/BrandImage";
import Prizes from "@/components/landing/Prizes";
import Timeline from "@/components/landing/Timeline";
import Pricing from "@/components/landing/Pricing";
import Footer from "@/components/landing/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <Problem />
        <AnimatedPhrase />
        <section id="beneficios">
          <Benefits />
        </section>
        <BrandImage />
        <SRSScience />
        <section id="premios">
          <Prizes />
        </section>
        <Timeline />
        <section id="preco">
          <Pricing />
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Index;
