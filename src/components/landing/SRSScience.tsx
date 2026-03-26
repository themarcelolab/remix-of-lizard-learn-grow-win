import { useEffect, useRef, useState } from "react";
import { Brain, Clock, MessageSquareText } from "lucide-react";

const topics = [
  {
    icon: Brain,
    number: "01",
    title: 'O combate à "Curva do Esquecimento"',
    subtitle: "O SRS impede que o cérebro descarte a informação",
    colorVar: "--lizard-purple",
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
    colorVar: "--lizard-green",
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
    colorVar: "--lizard-orange",
    points: [
      {
        label: "Gramática implícita",
        text: "Aprender através de frases completas permite que o cérebro absorva a gramática de forma intuitiva e automática, sem a necessidade de decorar regras abstratas.",
      },
      {
        label: "Contexto real",
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
    <section ref={sectionRef} className="py-20 md:py-32 relative overflow-hidden">
      {/* Subtle background decoration */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 -left-32 w-64 h-64 rounded-full opacity-[0.04]" style={{ background: 'hsl(var(--lizard-purple))' }} />
        <div className="absolute bottom-1/4 -right-32 w-64 h-64 rounded-full opacity-[0.04]" style={{ background: 'hsl(var(--lizard-green))' }} />
      </div>

      <div className="container mx-auto px-4 relative">
        {/* Header */}
        <div
          className="max-w-3xl mx-auto text-center mb-20 transition-all duration-700"
          style={{
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? "translateY(0)" : "translateY(30px)",
          }}
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tighter mb-5">
            A ciência por trás do{" "}
            <span className="gradient-brand-text">SRS</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-xl mx-auto">
            Entenda por que a repetição espaçada é o método mais eficaz para fixar conhecimento
          </p>
        </div>

        {/* Topics */}
        <div className="max-w-5xl mx-auto space-y-6">
          {topics.map((topic, index) => {
            const Icon = topic.icon;
            const color = `hsl(var(${topic.colorVar}))`;
            const colorLight = `hsl(var(${topic.colorVar}) / 0.08)`;
            const colorBorder = `hsl(var(${topic.colorVar}) / 0.15)`;

            return (
              <div
                key={index}
                className="group relative rounded-2xl border bg-background transition-all duration-700 hover:shadow-xl overflow-hidden"
                style={{
                  opacity: isVisible ? 1 : 0,
                  transform: isVisible ? "translateY(0)" : "translateY(40px)",
                  transitionDelay: `${index * 150}ms`,
                  borderColor: colorBorder,
                }}
              >
                {/* Colored top accent bar */}
                <div className="h-1 w-full" style={{ background: `linear-gradient(90deg, ${color}, transparent)` }} />

                <div className="p-8 md:p-10">
                  {/* Header row */}
                  <div className="flex items-start gap-5 mb-8">
                    <div
                      className="flex-shrink-0 w-12 h-12 rounded-xl flex items-center justify-center transition-transform duration-300 group-hover:scale-110"
                      style={{ backgroundColor: colorLight, color }}
                    >
                      <Icon className="w-6 h-6" strokeWidth={1.8} />
                    </div>
                    <div className="flex-1 min-w-0">
                      <h3 className="text-xl md:text-2xl font-bold leading-tight">{topic.title}</h3>
                      <p className="text-muted-foreground mt-1.5 text-sm md:text-base">{topic.subtitle}</p>
                    </div>
                    <span
                      className="hidden md:flex flex-shrink-0 text-3xl font-black opacity-10 select-none"
                      style={{ color }}
                    >
                      {topic.number}
                    </span>
                  </div>

                  {/* Points grid */}
                  <div className="grid md:grid-cols-2 gap-4 md:pl-[68px]">
                    {topic.points.map((point, pIndex) => (
                      <div
                        key={pIndex}
                        className="rounded-xl p-5 transition-all duration-300 hover:translate-y-[-2px]"
                        style={{
                          backgroundColor: colorLight,
                          border: `1px solid ${colorBorder}`,
                        }}
                      >
                        <div className="flex items-center gap-2 mb-2.5">
                          <div className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: color }} />
                          <h4
                            className="font-semibold text-sm uppercase tracking-wide"
                            style={{ color }}
                          >
                            {point.label}
                          </h4>
                        </div>
                        <p className="text-muted-foreground text-sm leading-relaxed">
                          {point.text}
                        </p>
                      </div>
                    ))}
                  </div>
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
