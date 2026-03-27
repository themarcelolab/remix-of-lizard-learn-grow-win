import { useEffect, useRef, useState } from "react";
import { Brain, Clock, MessageSquareText, Zap, Target, BookOpen } from "lucide-react";

const bentoItems = [
  {
    icon: Brain,
    number: "01",
    title: 'O combate à "Curva do Esquecimento"',
    subtitle: "O SRS impede que o cérebro descarte a informação",
    colorVar: "--lizard-purple",
    stat: "95%",
    statLabel: "de retenção",
    points: [
      {
        label: "Retenção de +90%",
        text: "Revisões diárias programadas via SRS elevam as taxas de retenção para até 95%. Sem reforço, esquecemos 70% em 24h.",
      },
      {
        label: "Memória de Longo Prazo",
        text: 'O SRS transfere o conhecimento da memória de curto prazo para a de longo prazo, "ensinando" ao cérebro que aquela informação é importante.',
      },
    ],
    gridClass: "md:col-span-2 md:row-span-2",
  },
  {
    icon: Clock,
    number: "02",
    title: "Eficiência de tempo",
    subtitle: "O SRS otimiza cada minuto do seu estudo",
    colorVar: "--lizard-green",
    stat: "1h",
    statLabel: "= 4 meses",
    points: [
      {
        label: "Regra de 1 para 120",
        text: "Uma hora de estudo com repetição espaçada gera os mesmos resultados de retenção que quatro meses de estudo tradicional.",
      },
    ],
    gridClass: "md:col-span-1 md:row-span-1",
  },
  {
    icon: Target,
    number: "",
    title: "Foco no que é Difícil",
    subtitle: "",
    colorVar: "--lizard-green",
    stat: "",
    statLabel: "",
    points: [
      {
        label: "Algoritmo inteligente",
        text: "O algoritmo prioriza os cards que o aluno tem dificuldade, evitando que perca tempo revisando o que já sabe.",
      },
    ],
    gridClass: "md:col-span-1 md:row-span-1",
  },
  {
    icon: MessageSquareText,
    number: "03",
    title: "Frases vs. Palavras Soltas",
    subtitle: "O que você aprende, você usa",
    colorVar: "--lizard-orange",
    stat: "",
    statLabel: "",
    points: [
      {
        label: "Gramática implícita",
        text: "Frases completas permitem que o cérebro absorva a gramática de forma intuitiva e automática.",
      },
    ],
    gridClass: "md:col-span-1 md:row-span-1",
  },
  {
    icon: BookOpen,
    number: "",
    title: "Contexto real",
    subtitle: "O cérebro aprende melhor por contexto",
    colorVar: "--lizard-orange",
    stat: "",
    statLabel: "",
    points: [
      {
        label: "Sem listas infinitas",
        text: "No Lizard, você domina frases prontas para o uso, acelerando sua fala e eliminando o medo de travar.",
      },
    ],
    gridClass: "md:col-span-1 md:row-span-1",
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
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 -left-32 w-64 h-64 rounded-full opacity-[0.04]" style={{ background: 'hsl(var(--lizard-purple))' }} />
        <div className="absolute bottom-1/4 -right-32 w-64 h-64 rounded-full opacity-[0.04]" style={{ background: 'hsl(var(--lizard-green))' }} />
      </div>

      <div className="container mx-auto px-4 relative">
        {/* Header */}
        <div
          className="max-w-3xl mx-auto text-center mb-16 transition-all duration-700"
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

        {/* Bento Grid */}
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-4 auto-rows-auto">
          {bentoItems.map((item, index) => {
            const Icon = item.icon;
            const color = `hsl(var(${item.colorVar}))`;
            const colorLight = `hsl(var(${item.colorVar}) / 0.06)`;
            const colorBorder = `hsl(var(${item.colorVar}) / 0.12)`;
            const isLarge = item.gridClass.includes("row-span-2");

            return (
              <div
                key={index}
                className={`group relative rounded-2xl border bg-background overflow-hidden transition-all duration-700 hover:shadow-lg ${item.gridClass}`}
                style={{
                  opacity: isVisible ? 1 : 0,
                  transform: isVisible ? "translateY(0)" : "translateY(30px)",
                  transitionDelay: `${index * 100}ms`,
                  borderColor: colorBorder,
                  backgroundColor: colorLight,
                }}
              >
                {/* Accent corner glow */}
                <div
                  className="absolute -top-12 -right-12 w-32 h-32 rounded-full opacity-[0.07] blur-2xl transition-opacity duration-500 group-hover:opacity-[0.12]"
                  style={{ background: color }}
                />

                <div className={`relative p-6 ${isLarge ? "md:p-8" : ""} h-full flex flex-col`}>
                  {/* Icon + Number row */}
                  <div className="flex items-center justify-between mb-4">
                    <div
                      className="w-10 h-10 rounded-xl flex items-center justify-center transition-transform duration-300 group-hover:scale-110"
                      style={{ backgroundColor: `hsl(var(${item.colorVar}) / 0.12)`, color }}
                    >
                      <Icon className="w-5 h-5" strokeWidth={1.8} />
                    </div>
                    {item.number && (
                      <span
                        className="text-2xl font-black opacity-10 select-none"
                        style={{ color }}
                      >
                        {item.number}
                      </span>
                    )}
                  </div>

                  {/* Stat highlight for large cards */}
                  {item.stat && isLarge && (
                    <div className="mb-5">
                      <span
                        className="text-5xl md:text-6xl font-black tracking-tighter"
                        style={{ color }}
                      >
                        {item.stat}
                      </span>
                      <span className="text-muted-foreground text-lg ml-2">{item.statLabel}</span>
                    </div>
                  )}

                  {item.stat && !isLarge && (
                    <div className="mb-3">
                      <span
                        className="text-3xl font-black tracking-tighter"
                        style={{ color }}
                      >
                        {item.stat}
                      </span>
                      <span className="text-muted-foreground text-sm ml-2">{item.statLabel}</span>
                    </div>
                  )}

                  {/* Title */}
                  <h3 className={`font-bold leading-tight mb-1.5 ${isLarge ? "text-xl md:text-2xl" : "text-lg"}`}>
                    {item.title}
                  </h3>
                  {item.subtitle && (
                    <p className="text-muted-foreground text-sm mb-4">{item.subtitle}</p>
                  )}

                  {/* Points */}
                  <div className={`mt-auto space-y-3 ${isLarge ? "pt-2" : "pt-1"}`}>
                    {item.points.map((point, pIndex) => (
                      <div key={pIndex}>
                        <div className="flex items-center gap-2 mb-1">
                          <div className="w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ backgroundColor: color }} />
                          <h4 className="font-semibold text-xs uppercase tracking-wide" style={{ color }}>
                            {point.label}
                          </h4>
                        </div>
                        <p className="text-muted-foreground text-sm leading-relaxed pl-3.5">
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
