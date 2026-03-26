import { useEffect, useRef, useState } from "react";

const timelineSteps = [
  {
    month: "1 mês",
    words: "+300 frases (A1)",
    description: "Sobrevivência: Você já não fica \"travado\" em situações básicas. Consegue se apresentar, pedir informações e entender comandos simples de apps e redes sociais",
    color: "bg-lizard-orange",
    textColor: "text-lizard-orange",
    borderColor: "border-lizard-orange",
    emoji: "🌱",
  },
  {
    month: "3 meses",
    words: "+1.000 frases (A2/B1)",
    description: "Independência: Compreensão de cerca de 75% das palavras usadas em conversas nativas comuns. O inglês deixa de ser um ruído e passa a ter significado contextual",
    color: "bg-lizard-purple",
    textColor: "text-lizard-purple",
    borderColor: "border-lizard-purple",
    emoji: "🚀",
  },
  {
    month: "6 meses",
    words: "+1500 a 2500 palavras",
    description: "Base sólida para conversação e leitura",
    color: "bg-lizard-pink",
    textColor: "text-lizard-pink",
    borderColor: "border-lizard-pink",
    emoji: "🏆",
  },
];

const Timeline = () => {
  const [activeIndex, setActiveIndex] = useState(-1);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          // Animate each step with delay
          timelineSteps.forEach((_, index) => {
            setTimeout(() => {
              setActiveIndex(index);
            }, index * 400);
          });
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="py-20 md:py-32 relative overflow-hidden bg-background">
      {/* Gradient background - purple/orange/pink */}
      <div className="absolute inset-0 bg-gradient-to-br from-lizard-purple/20 via-lizard-pink/15 to-lizard-orange/20" />
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-lizard-purple/50 to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-lizard-pink/50 to-transparent" />
      
      <div className="container mx-auto px-4 relative">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 tracking-tighter">
            Construa vocabulário em inglês{" "}
            <span className="text-lizard-purple">de forma definitiva</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Veja como seu vocabulário cresce de forma consistente e mensurável
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Connection line with progress animation */}
            <div className="absolute left-1/2 md:left-8 top-0 bottom-0 w-1 transform -translate-x-1/2 md:translate-x-0 rounded-full hidden md:block bg-border overflow-hidden">
              <div 
                className="w-full bg-gradient-to-b from-lizard-orange via-lizard-purple to-lizard-pink transition-all duration-1000 ease-out"
                style={{
                  height: activeIndex >= 0 ? `${((activeIndex + 1) / timelineSteps.length) * 100}%` : '0%'
                }}
              />
            </div>

            <div className="space-y-8 md:space-y-12">
              {timelineSteps.map((step, index) => (
                <div
                  key={index}
                  className="relative flex flex-col md:flex-row items-center gap-6 md:gap-12 group"
                  style={{
                    opacity: activeIndex >= index ? 1 : 0.3,
                    transform: activeIndex >= index ? 'translateX(0)' : 'translateX(-20px)',
                    transition: 'all 0.5s ease-out',
                  }}
                >
                  {/* Circle indicator with scale animation */}
                  <div 
                    className={`relative z-10 w-16 h-16 rounded-full ${step.color} flex items-center justify-center text-2xl shadow-lg flex-shrink-0 text-white transition-all duration-500`}
                    style={{
                      transform: activeIndex >= index ? 'scale(1)' : 'scale(0.5)',
                    }}
                  >
                    <span className={activeIndex >= index ? 'animate-bounce' : ''}>{step.emoji}</span>
                    {/* Pulse ring animation */}
                    {activeIndex >= index && (
                      <div className={`absolute inset-0 rounded-full ${step.color} animate-ping opacity-25`} />
                    )}
                  </div>

                  {/* Content card */}
                  <div 
                    className={`flex-1 bg-card p-6 md:p-8 rounded-2xl shadow-card text-center md:text-left w-full border-2 ${step.borderColor}/30 transition-all duration-300 group-hover:shadow-xl group-hover:-translate-y-1`}
                  >
                    <div className="flex flex-col md:flex-row md:items-center gap-2 md:gap-4 mb-3">
                      <span className={`inline-block px-3 py-1 rounded-full ${step.color}/20 ${step.textColor} text-sm font-semibold`}>
                        {step.month}
                      </span>
                      <span className={`text-xl font-bold ${step.textColor}`}>
                        {step.words}
                      </span>
                    </div>
                    <p className="text-muted-foreground">{step.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Timeline;
