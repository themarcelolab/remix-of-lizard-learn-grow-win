import { useEffect, useRef, useState } from "react";
import lifestyleImage from "@/assets/lifestyle-image.png";
const benefits = [{
  title: "Ciência da memória (SRS)",
  description: "Memorização inteligente, o algoritmo foca no reforço na hora certa, garantindo que você não esqueça o que aprendeu",
  color: "lizard-purple",
  borderColor: "border-l-lizard-purple"
}, {
  title: "Fluência no mundo real",
  description: "Inglês útil, sem desperdício. Aprenda com mais de 5.000 cards focados no que realmente importa: o vocabulário essencial para falar com confiança.",
  color: "lizard-orange",
  borderColor: "border-l-lizard-orange"
}, {
  title: "Tecnologia adaptativa",
  description: "Seu ritmo, suas regras. Usamos a tecnologia para ajustar o conteúdo e a frequência de estudos ao seu desempenho e disponibilidade.",
  color: "lizard-green",
  borderColor: "border-l-lizard-green"
}, {
  title: "Gamificação com prêmios reais",
  description: "Aqui, as conquistas vão além da tela. Esforço vira recompensa de verdade, não pontos que não valem nada.",
  color: "lizard-blue",
  borderColor: "border-l-lizard-blue"
}];
const Benefits = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);
  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setIsVisible(true);
      }
    }, {
      threshold: 0.2
    });
    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }
    return () => observer.disconnect();
  }, []);
  return <section ref={sectionRef} className="py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-stretch max-w-6xl mx-auto">
          {/* Left side - Image - matches text height */}
          <div className="relative overflow-hidden rounded-2xl transition-all duration-700 flex" style={{
          opacity: isVisible ? 1 : 0,
          transform: isVisible ? 'translateX(0)' : 'translateX(-50px)'
        }}>
            <img alt="Pessoa estudando com o Lizard" className="w-full h-full min-h-[400px] object-cover object-center" src="/lovable-uploads/84c5f433-ee09-41d2-9bcf-0bb34365bf12.png" />
          </div>

          {/* Right side - Benefits */}
          <div>
            <div className="mb-8">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tighter">
                Por que escolher o <span className="gradient-brand-text">Lizard</span>?
              </h2>
            </div>

            <div className="space-y-4">
              {benefits.map((benefit, index) => <div key={index} className={`group relative bg-card p-6 rounded-xl shadow-sm hover:shadow-md overflow-hidden border-l-4 ${benefit.borderColor} transition-all duration-500`} style={{
              opacity: isVisible ? 1 : 0,
              transform: isVisible ? 'translateX(0)' : 'translateX(50px)',
              transitionDelay: `${index * 100}ms`
            }}>
                  <h3 className="text-lg font-bold mb-2" style={{
                color: `hsl(var(--${benefit.color}))`
              }}>
                    {benefit.title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {benefit.description}
                  </p>
                </div>)}
            </div>
          </div>
        </div>
      </div>
    </section>;
};
export default Benefits;