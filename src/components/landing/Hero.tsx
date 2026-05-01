import { Button } from "@/components/ui/button";
import { Play, ArrowRight } from "lucide-react";
import appMockup from "@/assets/app-mockup.png";
const Hero = () => {
  return <section className="relative min-h-screen overflow-hidden bg-background">
      {/* Subtle decorative elements - more balanced colors */}
      <div className="absolute top-20 left-10 w-64 h-64 bg-lizard-purple/8 rounded-full blur-3xl" />
      <div className="absolute top-40 right-20 w-72 h-72 bg-lizard-orange/8 rounded-full blur-3xl" />
      <div className="absolute bottom-40 left-1/4 w-56 h-56 bg-lizard-green/10 rounded-full blur-3xl" />
      <div className="absolute bottom-20 right-1/3 w-48 h-48 bg-lizard-yellow/8 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 pt-28 md:pt-32 pb-16">
        {/* Centered text content */}
        <div className="max-w-4xl mx-auto text-center space-y-6 md:space-y-8">
          

          <h1 className="text-4xl sm:text-5xl md:text-5xl lg:text-6xl font-bold leading-tight tracking-tighter">
            Inglês sem truques,<br />
            apenas <span className="text-lizard-green">foco em eficiência</span>
          </h1>

          <p className="text-base md:text-lg lg:text-xl text-muted-foreground max-w-2xl mx-auto">Aprenda no seu ritmo, do básico ao avançado, com um método que respeita o seu tempo e a sua memória</p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-2">
            <a href="https://lizard-app.online/" target="_blank" rel="noopener noreferrer">
              <Button variant="hero" size="lg">
                Teste grátis por 7 dias
              </Button>
            </a>
          </div>

          {/* Stats */}
          <div className="flex items-center gap-6 md:gap-8 justify-center pt-4">
            <div className="text-center">
              <p className="text-xl md:text-2xl font-bold text-lizard-purple">+5000</p>
              <p className="text-xs md:text-sm text-muted-foreground">frases do dia a dia</p>
            </div>
            <div className="w-px h-8 md:h-10 bg-border" />
            <div className="text-center">
              <p className="text-xl md:text-2xl font-bold text-lizard-orange">+90%</p>
              <p className="text-xs md:text-sm text-muted-foreground">de retenção</p>
            </div>
            <div className="w-px h-8 md:h-10 bg-border" />
            <div className="text-center">
              <p className="text-xl md:text-2xl font-bold text-lizard-green">SRS</p>
              <p className="text-xs md:text-sm text-muted-foreground">spaced repetition system</p>
            </div>
          </div>
        </div>

        {/* App mockup below - centered */}
        <div className="mt-12 md:mt-16 flex justify-center">
          <div className="relative max-w-3xl mx-auto">
            <img src={appMockup} alt="Lizard App - Interface de aprendizado com tema claro e escuro" className="w-full drop-shadow-2xl" />
            


          </div>
        </div>
      </div>
    </section>;
};
export default Hero;