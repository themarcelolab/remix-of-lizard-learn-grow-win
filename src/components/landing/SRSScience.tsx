import { useEffect, useRef, useState } from "react";
import { Brain, Clock, MessageSquareText, Target, BookOpen, Zap } from "lucide-react";

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

  const animStyle = (delay: number) => ({
    opacity: isVisible ? 1 : 0,
    transform: isVisible ? "translateY(0)" : "translateY(30px)",
    transitionDelay: `${delay}ms`,
  });

  return (
    <section ref={sectionRef} className="py-20 md:py-32 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 -left-32 w-96 h-96 rounded-full opacity-[0.03] blur-3xl" style={{ background: 'hsl(var(--lizard-purple))' }} />
        <div className="absolute bottom-1/4 -right-32 w-96 h-96 rounded-full opacity-[0.03] blur-3xl" style={{ background: 'hsl(var(--lizard-green))' }} />
      </div>

      <div className="container mx-auto px-4 relative">
        {/* Header */}
        <div
          className="max-w-3xl mx-auto text-center mb-14 transition-all duration-700"
          style={animStyle(0)}
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
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-4">

          {/* Card 1 — Hero stat (wide) */}
          <div
            className="group md:col-span-7 relative rounded-2xl border overflow-hidden transition-all duration-700 hover:shadow-lg"
            style={{
              ...animStyle(100),
              borderColor: 'hsl(var(--lizard-purple) / 0.15)',
              backgroundColor: 'hsl(var(--lizard-purple) / 0.04)',
            }}
          >
            <div className="absolute -top-16 -right-16 w-40 h-40 rounded-full opacity-[0.06] blur-2xl transition-opacity group-hover:opacity-[0.1]" style={{ background: 'hsl(var(--lizard-purple))' }} />
            <div className="relative p-7 md:p-8">
              <h3 className="text-xl font-bold mb-1.5">O combate à "Curva do Esquecimento"</h3>
              <p className="text-muted-foreground text-sm mb-5">O SRS impede que o cérebro descarte a informação</p>
              <div className="rounded-xl p-4" style={{ backgroundColor: 'hsl(var(--lizard-purple) / 0.06)', border: '1px solid hsl(var(--lizard-purple) / 0.1)' }}>
                <div className="flex items-center gap-2 mb-1.5">
                  <div className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: 'hsl(var(--lizard-purple))' }} />
                  <h4 className="font-semibold text-xs uppercase tracking-wide" style={{ color: 'hsl(var(--lizard-purple))' }}>Retenção de +90%</h4>
                </div>
                <p className="text-muted-foreground text-sm leading-relaxed pl-3.5">
                  Revisões diárias programadas via SRS elevam as taxas de retenção para até 95%. Sem reforço, esquecemos 70% em 24h.
                </p>
              </div>
            </div>
          </div>

          {/* Card 2 — Memória de Longo Prazo (tall right) */}
          <div
            className="group md:col-span-5 relative rounded-2xl border overflow-hidden transition-all duration-700 hover:shadow-lg"
            style={{
              ...animStyle(200),
              borderColor: 'hsl(var(--lizard-purple) / 0.15)',
              backgroundColor: 'hsl(var(--lizard-purple) / 0.04)',
            }}
          >
            <div className="relative p-7 md:p-8 h-full flex flex-col">
              <h3 className="text-lg font-bold mb-2">Memória de longo prazo</h3>
              <p className="text-muted-foreground text-sm leading-relaxed flex-1">
                O SRS transfere o conhecimento da memória de curto prazo para a de longo prazo de forma sistemática, "ensinando" ao cérebro que aquela informação é importante.
              </p>
              <div className="mt-5 flex gap-2">
                {["Curto prazo", "Longo prazo"].map((tag, i) => (
                  <span key={i} className="text-xs font-medium px-3 py-1.5 rounded-full" style={{
                    backgroundColor: 'hsl(var(--lizard-purple) / 0.08)',
                    color: 'hsl(var(--lizard-purple))',
                  }}>
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Card 3 — Efficiency stat */}
          <div
            className="group md:col-span-4 relative rounded-2xl border overflow-hidden transition-all duration-700 hover:shadow-lg"
            style={{
              ...animStyle(300),
              borderColor: 'hsl(var(--lizard-green) / 0.15)',
              backgroundColor: 'hsl(var(--lizard-green) / 0.04)',
            }}
          >
            <div className="absolute -bottom-10 -left-10 w-32 h-32 rounded-full opacity-[0.06] blur-2xl" style={{ background: 'hsl(var(--lizard-green))' }} />
            <div className="relative p-7 md:p-8">
              <h3 className="text-lg font-bold mb-1">Eficiência de tempo</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                Uma hora de estudo com repetição espaçada gera os mesmos resultados que quatro meses de estudo tradicional.
              </p>
            </div>
          </div>

          {/* Card 4 — Focus */}
          <div
            className="group md:col-span-4 relative rounded-2xl border overflow-hidden transition-all duration-700 hover:shadow-lg"
            style={{
              ...animStyle(400),
              borderColor: 'hsl(var(--lizard-green) / 0.15)',
              backgroundColor: 'hsl(var(--lizard-green) / 0.04)',
            }}
          >
            <div className="relative p-7 md:p-8">
              <div className="w-10 h-10 rounded-xl flex items-center justify-center mb-4" style={{ backgroundColor: 'hsl(var(--lizard-green) / 0.1)', color: 'hsl(var(--lizard-green))' }}>
                <Target className="w-5 h-5" strokeWidth={1.8} />
              </div>
              <h3 className="text-lg font-bold mb-1">Foco no que é Difícil</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                O algoritmo prioriza os cards que o aluno tem dificuldade, evitando que perca tempo revisando o que já sabe.
              </p>
            </div>
          </div>

          {/* Card 5 — Frases (wide) */}
          <div
            className="group md:col-span-4 relative rounded-2xl border overflow-hidden transition-all duration-700 hover:shadow-lg"
            style={{
              ...animStyle(500),
              borderColor: 'hsl(var(--lizard-orange) / 0.15)',
              backgroundColor: 'hsl(var(--lizard-orange) / 0.04)',
            }}
          >
            <div className="absolute -top-10 -right-10 w-32 h-32 rounded-full opacity-[0.06] blur-2xl" style={{ background: 'hsl(var(--lizard-orange))' }} />
            <div className="relative p-7 md:p-8">
              <div className="flex items-center justify-between mb-4">
                <div className="w-10 h-10 rounded-xl flex items-center justify-center" style={{ backgroundColor: 'hsl(var(--lizard-orange) / 0.1)', color: 'hsl(var(--lizard-orange))' }}>
                  <MessageSquareText className="w-5 h-5" strokeWidth={1.8} />
                </div>
                <span className="text-2xl font-black opacity-10 select-none" style={{ color: 'hsl(var(--lizard-orange))' }}>03</span>
              </div>
              <h3 className="text-lg font-bold mb-1">Frases vs. Palavras Soltas</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                Frases completas permitem que o cérebro absorva a gramática de forma intuitiva e automática.
              </p>
            </div>
          </div>

          {/* Card 6 — Contexto real (full width bottom) */}
          <div
            className="group md:col-span-12 relative rounded-2xl border overflow-hidden transition-all duration-700 hover:shadow-lg"
            style={{
              ...animStyle(600),
              borderColor: 'hsl(var(--lizard-orange) / 0.15)',
              backgroundColor: 'hsl(var(--lizard-orange) / 0.04)',
            }}
          >
            <div className="relative p-7 md:p-8 md:flex items-center gap-8">
              <div className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0 mb-4 md:mb-0" style={{ backgroundColor: 'hsl(var(--lizard-orange) / 0.1)', color: 'hsl(var(--lizard-orange))' }}>
                <BookOpen className="w-5 h-5" strokeWidth={1.8} />
              </div>
              <div className="flex-1">
                <h3 className="text-lg font-bold mb-1">Contexto real</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  Esqueça as listas infinitas de vocabulário. No Lizard, você domina frases prontas para o uso, acelerando sua fala e eliminando o medo de travar.
                </p>
              </div>
              <div className="flex gap-2 mt-4 md:mt-0 flex-shrink-0">
                {["Frases reais", "Sem decorar regras", "Uso prático"].map((tag, i) => (
                  <span key={i} className="text-xs font-medium px-3 py-1.5 rounded-full whitespace-nowrap" style={{
                    backgroundColor: 'hsl(var(--lizard-orange) / 0.08)',
                    color: 'hsl(var(--lizard-orange))',
                  }}>
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SRSScience;
