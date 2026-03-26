import { useEffect, useRef, useState } from "react";
import { Brain, Clock, MessageSquareText } from "lucide-react";

const topics = [
  {
    icon: Brain,
    number: "01",
    title: 'O combate à "Curva do Esquecimento"',
    subtitle: "O SRS impede que o cérebro descarte a informação",
    color: "lizard-purple",
    points: [
      {
        label: "Retenção de +90%",
        text: "Estudos mostram que revisões diárias programadas via SRS podem elevar as taxas de retenção para até 95%, enquanto no aprendizado sem reforço, as pessoas esquecem cerca de 50% do que aprendem em apenas uma hora e 70% em 24 horas.",
      },
      {
        label: "Memória de Longo Prazo",
        text: 'O SRS atua transferindo o conhecimento da memória de curto prazo para a de longo prazo de forma sistemática, "ensinando" ao cérebro que aquela informação é importante.',
      },
    ],
  },
  {
    icon: Clock,
    number: "02",
    title: "Eficiência de tempo e esforço",
    subtitle: "O tempo é o recurso mais escasso. O SRS otimiza cada minuto",
    color: "lizard-green",
    points: [
      {
        label: "Regra de 1 para 120",
        text: "Em termos de eficiência, uma hora de estudo com repetição espaçada pode gerar os mesmos resultados de retenção que quatro meses de estudo tradicional repetitivo.",
      },
      {
        label: "Foco no que é Difícil",
        text: "O algoritmo prioriza os cards que o aluno tem dificuldade, evitando que ele perca tempo revisando o que já sabe (o que aumenta o engajamento e evita o tédio).",
      },
    ],
  },
  {
    icon: MessageSquareText,
    number: "03",
    title: "O poder das Frases vs. Palavras Soltas",
    subtitle: "O Lizard foca em frases úteis. O que você aprende, você usa.",
    color: "lizard-orange",
    points: [
      {
        label: "Gramática Implícita",
        text: "Aprender através de frases completas permite que o cérebro absorva a gramática de forma intuitiva e automática, sem a necessidade de decorar regras abstratas.",
      },
      {
        label: "Contexto Real",
        text: "Esqueça as listas infinitas de vocabulário. O cérebro aprende melhor por contexto. No Lizard, você domina frases prontas para o uso, acelerando sua fala e eliminando o medo de travar.",
      },
    ],
  },
];

const SRSScience = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true);
      },
      { threshold: 0.1 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="py-20 md:py-32">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tighter mb-4">
            A ciência por trás do <span className="gradient-brand-text">SRS</span>
          </h2>
          <p className="text-xl text-muted-foreground">
            Entenda por que a repetição espaçada é o método mais eficaz para fixar conhecimento.
          </p>
        </div>

        <div className="max-w-5xl mx-auto space-y-8">
          {topics.map((topic, index) => {
            const Icon = topic.icon;
            return (
              <div
                key={index}
                className="group relative bg-card rounded-2xl border p-8 md:p-10 transition-all duration-700 hover:shadow-lg"
                style={{
                  opacity: isVisible ? 1 : 0,
                  transform: isVisible ? "translateY(0)" : "translateY(40px)",
                  transitionDelay: `${index * 150}ms`,
                  borderColor: `hsl(var(--${topic.color}) / 0.2)`,
                }}
              >
                <div className="mb-6">
                    <h3 className="text-xl md:text-2xl font-bold">{topic.title}</h3>
                    <p className="text-muted-foreground mt-1">{topic.subtitle}</p>
                </div>

                <div className="grid md:grid-cols-2 gap-6 pl-0 md:pl-17">
                  {topic.points.map((point, pIndex) => (
                    <div
                      key={pIndex}
                      className="rounded-xl p-5 border"
                      style={{
                        backgroundColor: `hsl(var(--${topic.color}) / 0.03)`,
                        borderColor: `hsl(var(--${topic.color}) / 0.1)`,
                      }}
                    >
                      <h4
                        className="font-bold mb-2"
                        style={{ color: `hsl(var(--${topic.color}))` }}
                      >
                        {point.label}
                      </h4>
                      <p className="text-muted-foreground text-sm leading-relaxed">{point.text}</p>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default SRSScience;
