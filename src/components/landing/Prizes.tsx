import { Plane, Star, Gift, Users } from "lucide-react";
import travelPrize from "@/assets/travel-prize.png";

const Prizes = () => {
  return (
    <section className="py-20 md:py-32 relative overflow-hidden">
      {/* Light gradient background - purple/pink/orange tones */}
      <div className="absolute inset-0 bg-gradient-to-br from-lizard-purple/8 via-lizard-pink/5 to-lizard-orange/8" />
      
      <div className="container mx-auto px-4 relative">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left content */}
          <div className="space-y-8 pl-4 md:pl-6 lg:pl-8 pr-8 lg:pr-12">

            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight tracking-tighter">
              Crescemos juntos,{" "}
              <span className="text-lizard-orange">ganhamos juntos</span>
            </h2>

            <p className="text-lg text-muted-foreground">
              No Lizard, o seu progresso não fica apenas na tela do celular. 
              Acreditamos que aprender inglês deve ser uma experiência coletiva e recompensadora. 
              Por isso, cada meta alcançada pela nossa comunidade desbloqueia prêmios reais para os alunos.
            </p>

            <div className="bg-card p-6 rounded-2xl border border-lizard-orange/30 shadow-sm">
              <div>
                <h4 className="font-bold text-lg mb-1 text-lizard-purple">Primeiro Marco</h4>
                <p className="text-muted-foreground">
                  Ao atingir 1.000 assinantes, vamos celebrar essa conquista com o sorteio de um iPhone entre os usuários da plataforma. É o nosso jeito de premiar quem está ajudando a construir essa nova jornada educacional com a gente.
                </p>
              </div>
            </div>

            <div className="space-y-4">
              <p className="font-semibold text-lg">Prêmios futuros:</p>
              <div className="flex flex-wrap gap-3">
                <div className="flex items-center gap-2 px-4 py-3 rounded-full bg-lizard-orange/15 border border-lizard-orange/40">
                  <Plane className="w-5 h-5 text-lizard-orange" />
                  <span className="text-sm font-semibold text-lizard-orange">Viagens</span>
                </div>
                <div className="flex items-center gap-2 px-4 py-3 rounded-full bg-lizard-blue/15 border border-lizard-blue/40">
                  <Star className="w-5 h-5 text-lizard-blue" />
                  <span className="text-sm font-semibold text-lizard-blue">Experiências exclusivas</span>
                </div>
                <div className="flex items-center gap-2 px-4 py-3 rounded-full bg-lizard-green/15 border border-lizard-green/40">
                  <Gift className="w-5 h-5 text-lizard-green" />
                  <span className="text-sm font-semibold text-lizard-green">Recompensas físicas</span>
                </div>
              </div>
            </div>

            <p className="text-sm text-muted-foreground italic">
              (Regras e critérios sempre claros dentro do app.)
            </p>
          </div>

          {/* Right content - Image */}
          <div className="relative flex items-center justify-center">
            <div className="absolute inset-0 bg-lizard-orange/10 blur-3xl rounded-full" />
            <img
              src={travelPrize}
              alt="Prêmios de viagem"
              className="relative w-full max-w-md lg:max-w-lg aspect-[3/4] object-cover rounded-3xl shadow-2xl"
            />
            
            {/* Floating badge */}
            <div className="absolute -bottom-4 -left-4 md:left-8 bg-card px-6 py-4 rounded-xl shadow-card border border-lizard-orange/30">
              <div className="flex items-center gap-3">
                <div>
                  <p className="font-bold">Próximo sorteio</p>
                  <p className="text-sm text-muted-foreground">em 1.000 assinantes</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Prizes;
