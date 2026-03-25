import { useEffect, useRef, useState } from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";

const Problem = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);
  const plugin = useRef(
    Autoplay({ delay: 3000, stopOnInteraction: true })
  );

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const cards = [
    {
      title: "Ciência Cognitiva",
      description: "Criado com base em como a memória humana realmente funciona",
      color: "lizard-purple",
      bgColor: "bg-lizard-purple/5",
      borderColor: "border-lizard-purple/20",
    },
    {
      title: "Repetição Espaçada",
      description: "Cada frase reaparece exatamente quando você está prestes a esquecê-la",
      color: "lizard-orange",
      bgColor: "bg-lizard-orange/5",
      borderColor: "border-lizard-orange/20",
    },
    {
      title: "Progresso Real",
      description: "Sem listas aleatórias. Com o Lizard, a evolução é mensurável e consistente.",
      color: "lizard-green",
      bgColor: "bg-lizard-green/5",
      borderColor: "border-lizard-green/20",
    },
  ];

  return (
    <section ref={sectionRef} className="py-20 md:py-32 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tighter">
            A ciência por trás do seu <span className="gradient-brand-text-green-yellow">progresso</span>
          </h2>
          <p className="text-xl md:text-2xl text-muted-foreground tracking-tight">
            Não acreditamos em fórmulas mágicas, mas sim em tecnologia adaptativa
          </p>
        </div>

        {/* Carousel for all screen sizes */}
        <div className="mt-16 max-w-5xl mx-auto">
          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
            plugins={[plugin.current]}
            className="w-full"
          >
            <CarouselContent className="-ml-2 md:-ml-4">
              {cards.map((card, index) => (
                <CarouselItem key={index} className="pl-2 md:pl-4 basis-full md:basis-1/3">
                  <div
                    className={`group p-8 rounded-2xl text-center border transition-all duration-500 h-full ${card.bgColor} ${card.borderColor} hover:scale-105 hover:shadow-lg`}
                    style={{
                      opacity: isVisible ? 1 : 0,
                      transform: isVisible ? 'translateY(0)' : 'translateY(30px)',
                      transitionDelay: `${index * 150}ms`,
                    }}
                  >
                    <h3 
                      className="text-xl font-bold mb-3"
                      style={{ color: `hsl(var(--${card.color}))` }}
                    >
                      {card.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {card.description}
                    </p>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <div className="flex justify-center gap-2 mt-6">
              <CarouselPrevious className="static translate-x-0 translate-y-0" />
              <CarouselNext className="static translate-x-0 translate-y-0" />
            </div>
          </Carousel>
        </div>
      </div>
    </section>
  );
};

export default Problem;
