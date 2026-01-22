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
            Chega de estudar inglês e{" "}
            <span className="gradient-brand-text-green-yellow">esquecer tudo</span> depois.
          </h1>

          <p className="text-base md:text-lg lg:text-xl text-muted-foreground max-w-2xl mx-auto">
            Construa um vocabulário sólido com um sistema que fixa palavras no longo prazo.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-2">
            <Button variant="hero" size="lg">
              Começar agora
            </Button>
            <Button variant="heroOutline" size="lg">
              <Play className="mr-2" size={18} />
              Ver como funciona
            </Button>
          </div>

          {/* Stats */}
          <div className="flex items-center gap-6 md:gap-8 justify-center pt-4">
            <div className="text-center">
              <p className="text-xl md:text-2xl font-bold text-lizard-purple">+2000</p>
              <p className="text-xs md:text-sm text-muted-foreground">palavras</p>
            </div>
            <div className="w-px h-8 md:h-10 bg-border" />
            <div className="text-center">
              <p className="text-xl md:text-2xl font-bold text-lizard-orange">400%</p>
              <p className="text-xs md:text-sm text-muted-foreground">mais retenção</p>
            </div>
            <div className="w-px h-8 md:h-10 bg-border" />
            <div className="text-center">
              <p className="text-xl md:text-2xl font-bold text-lizard-green">SRS</p>
              <p className="text-xs md:text-sm text-muted-foreground">método</p>
            </div>
          </div>
        </div>

        {/* App mockup below - centered */}
        <div className="mt-12 md:mt-16 flex justify-center">
          <div className="relative">
            <img src={appMockup} alt="Lizard App - Interface de aprendizado" className="w-64 sm:w-72 md:w-80 lg:w-96 drop-shadow-2xl rounded-3xl" />
            
            {/* Floating cards */}
            <div className="absolute -left-4 sm:-left-8 top-16 sm:top-20 glass-card p-2 sm:p-3 rounded-xl shadow-card animate-bounce-slow">
              <div className="flex items-center gap-2">
                <div className="w-6 h-6 sm:w-8 sm:h-8 rounded-full bg-lizard-green/20 flex items-center justify-center">
                  <span className="text-lizard-green text-sm sm:text-lg">✓</span>
                </div>
                <div>
                  <p className="text-[10px] sm:text-xs font-semibold">+15 palavras</p>
                  <p className="text-[10px] sm:text-xs text-muted-foreground">hoje</p>
                </div>
              </div>
            </div>

            <div className="absolute -right-2 sm:-right-4 bottom-24 sm:bottom-32 glass-card p-2 sm:p-3 rounded-xl shadow-card animate-bounce-slow animate-delay-300">
              <div className="flex items-center gap-2">
                <div className="w-6 h-6 sm:w-8 sm:h-8 rounded-full bg-lizard-orange/20 flex items-center justify-center">
                  <span className="text-sm sm:text-lg">🔥</span>
                </div>
                <div>
                  <p className="text-[10px] sm:text-xs font-semibold">7 dias</p>
                  <p className="text-[10px] sm:text-xs text-muted-foreground">de sequência</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>;
};
export default Hero;