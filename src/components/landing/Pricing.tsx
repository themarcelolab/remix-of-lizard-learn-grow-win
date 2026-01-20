import { Button } from "@/components/ui/button";
import { Check, Sparkles } from "lucide-react";

const features = [
  "Repetição inteligente (SRS)",
  "+1.000 palavras ao longo do uso",
  "Rotina flexível",
  "Gamificação com prêmios reais",
  "Acesso completo ao app",
];

const Pricing = () => {
  return (
    <section className="py-20 md:py-32 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-xl mx-auto">
          <div className="relative bg-card rounded-3xl shadow-2xl overflow-hidden">
            {/* Gradient header */}
            <div className="gradient-brand p-8 text-center">
              <Sparkles className="w-10 h-10 text-primary-foreground mx-auto mb-4" />
              <h2 className="text-2xl md:text-3xl font-bold text-primary-foreground mb-2">
                Construa vocabulário em inglês de forma definitiva.
              </h2>
            </div>

            <div className="p-8 md:p-10">
              {/* Price */}
              <div className="text-center mb-8">
                <div className="flex items-baseline justify-center gap-2">
                  <span className="text-5xl md:text-6xl font-bold gradient-brand-text">R$29,90</span>
                  <span className="text-muted-foreground">/ mês</span>
                </div>
                <p className="text-muted-foreground mt-2">
                  👉 menos de <span className="font-semibold">R$1 por dia</span>
                </p>
              </div>

              {/* Features list */}
              <ul className="space-y-4 mb-8">
                {features.map((feature, index) => {
                  const colors = [
                    { bg: "bg-lizard-purple/20", text: "text-lizard-purple" },
                    { bg: "bg-lizard-orange/20", text: "text-lizard-orange" },
                    { bg: "bg-lizard-green/20", text: "text-lizard-green" },
                    { bg: "bg-lizard-yellow/20", text: "text-lizard-yellow" },
                    { bg: "bg-lizard-blue/20", text: "text-lizard-blue" },
                  ];
                  const color = colors[index % colors.length];
                  return (
                    <li key={index} className="flex items-center gap-3">
                      <div className={`w-6 h-6 rounded-full ${color.bg} flex items-center justify-center flex-shrink-0`}>
                        <Check className={`w-4 h-4 ${color.text}`} />
                      </div>
                      <span className="font-medium">{feature}</span>
                    </li>
                  );
                })}
              </ul>

              {/* CTA Button */}
              <Button variant="gradient" size="xl" className="w-full">
                Quero começar agora
              </Button>

              <p className="text-center text-sm text-muted-foreground mt-4">
                Cancele quando quiser. Sem compromisso.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
