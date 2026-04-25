import { useEffect, useRef, useState } from "react";
import { Trophy, Users, Gift, Plane, Sparkles, Share2, Target, Heart } from "lucide-react";
import { Button } from "@/components/ui/button";
import Header from "@/components/landing/Header";
import Footer from "@/components/landing/Footer";
import lizardPrize from "@/assets/lizard-iphone-prize.png";
import community from "@/assets/community-celebration.jpg";

const handleInvite = async () => {
  const shareData = {
    title: "Lizard - Aprenda inglês com SRS",
    text: "Vem aprender inglês comigo no Lizard! Quanto mais gente entrar, mais perto chegamos do sorteio do iPhone 🦎📱",
    url: "https://lizard-app.online/",
  };
  try {
    if (navigator.share) {
      await navigator.share(shareData);
    } else {
      await navigator.clipboard.writeText(`${shareData.text} ${shareData.url}`);
      alert("Link copiado! Compartilhe com seus amigos.");
    }
  } catch {
    /* user cancelled */
  }
};

const Premios = () => {
  const [visible, setVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => entry.isIntersecting && setVisible(true),
      { threshold: 0.15 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  // SEO
  useEffect(() => {
    document.title = "Prêmios Lizard | Crescemos juntos, ganhamos juntos";
    const desc = "Conheça o programa Experiential Rewards do Lizard: indique amigos, atinja metas coletivas e concorra a um iPhone, viagens e experiências exclusivas.";
    let meta = document.querySelector('meta[name="description"]');
    if (!meta) {
      meta = document.createElement("meta");
      meta.setAttribute("name", "description");
      document.head.appendChild(meta);
    }
    meta.setAttribute("content", desc);

    let canonical = document.querySelector('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement("link");
      canonical.setAttribute("rel", "canonical");
      document.head.appendChild(canonical);
    }
    canonical.setAttribute("href", `${window.location.origin}/premios`);
  }, []);

  const milestones = [
    { count: "1.000", reward: "Sorteio de um iPhone", icon: Trophy, color: "lizard-orange" },
    { count: "5.000", reward: "Experiências exclusivas", icon: Sparkles, color: "lizard-pink" },
    { count: "10.000", reward: "Viagens internacionais", icon: Plane, color: "lizard-blue" },
  ];

  return (
    <div className="min-h-screen">
      <Header />
      <main className="pt-16 md:pt-20">
        {/* HERO */}
        <section className="relative overflow-hidden py-20 md:py-32">
          <div className="absolute inset-0 bg-gradient-to-br from-lizard-purple/15 via-lizard-pink/10 to-lizard-orange/15" />
          <div className="absolute top-20 -left-20 w-96 h-96 bg-lizard-purple/20 rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-0 -right-20 w-96 h-96 bg-lizard-orange/20 rounded-full blur-3xl animate-pulse" />

          <div className="container mx-auto px-4 relative">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-6 animate-fade-in">
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight tracking-tighter">
                  Crescemos juntos,{" "}
                  <span className="bg-gradient-to-r from-lizard-purple via-lizard-pink to-lizard-orange bg-clip-text text-transparent">
                    ganhamos juntos
                  </span>
                </h1>

                <p className="text-lg text-muted-foreground leading-relaxed">
                  No Lizard, o seu progresso não fica guardado apenas na tela do celular.
                  Acreditamos que aprender inglês deve ser um ativo de valor compartilhado,
                  onde o esforço da comunidade se transforma em experiências reais.
                </p>

                <div className="flex flex-wrap gap-3 pt-2">
                  <a href="https://lizard-app.online/" target="_blank" rel="noopener noreferrer">
                    <Button variant="hero" size="lg">Começar agora</Button>
                  </a>
                  <Button variant="outline" size="lg" onClick={handleInvite}>
                    Convidar amigos
                  </Button>
                </div>
              </div>

              <div className="relative flex items-center justify-center">
                <div className="absolute inset-0 bg-lizard-orange/20 blur-3xl rounded-full" />
                <img
                  src={lizardPrize}
                  alt="Camaleão Lizard segurando um iPhone como prêmio da comunidade"
                  width={600}
                  height={800}
                  className="relative w-full max-w-md aspect-[3/4] object-cover rounded-3xl shadow-2xl animate-fade-in"
                />
              </div>
            </div>
          </div>
        </section>

        {/* PRIMEIRA META */}
        <section ref={sectionRef} className="py-20 md:py-28 relative">
          <div className="container mx-auto px-4">
            <div
              className="max-w-3xl mx-auto text-center mb-14 transition-all duration-700"
              style={{
                opacity: visible ? 1 : 0,
                transform: visible ? "translateY(0)" : "translateY(20px)",
              }}
            >
              <h2 className="text-3xl md:text-5xl font-bold tracking-tighter mb-4">
                1.000 usuários,{" "}
                <span className="text-lizard-orange">1 iPhone sorteado</span>
              </h2>
              <p className="text-lg text-muted-foreground">
                Estamos apenas começando a nossa jornada e queremos que você faça parte do primeiro grande marco da nossa história.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
              {[
                {
                  icon: Target,
                  title: "O Desafio",
                  desc: "Alcançar a marca de 1.000 usuários ativos na plataforma.",
                  color: "lizard-purple",
                },
                {
                  icon: Trophy,
                  title: "A Recompensa",
                  desc: "Sorteio de um iPhone entre os membros ativos da comunidade Lizard.",
                  color: "lizard-orange",
                },
                {
                  icon: Share2,
                  title: "Como participar",
                  desc: "Continue focado no seu baralho principal e indique o Lizard para amigos e colegas.",
                  color: "lizard-pink",
                },
              ].map((item, i) => (
                <div
                  key={item.title}
                  className="group relative bg-card p-7 rounded-3xl border border-border hover:border-lizard-orange/50 shadow-card hover:shadow-glow transition-all duration-500"
                  style={{
                    opacity: visible ? 1 : 0,
                    transform: visible ? "translateY(0)" : "translateY(30px)",
                    transitionDelay: `${i * 150}ms`,
                  }}
                >
                  <item.icon className={`w-6 h-6 text-${item.color} mb-4`} />
                  <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                  <p className="text-muted-foreground">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* PORQUE METAS COLETIVAS */}
        <section className="py-20 md:py-28 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-lizard-pink/5 via-background to-lizard-purple/5" />
          <div className="container mx-auto px-4 relative">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="relative order-2 lg:order-1">
                <div className="absolute inset-0 bg-lizard-pink/20 blur-3xl rounded-full" />
                <img
                  src={community}
                  alt="Comunidade Lizard celebrando juntos as conquistas coletivas"
                  width={1024}
                  height={1024}
                  loading="lazy"
                  className="relative w-full rounded-3xl shadow-2xl"
                />
              </div>

              <div className="space-y-6 order-1 lg:order-2">
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-lizard-pink/15 border border-lizard-pink/30">
                  <Heart className="w-4 h-4 text-lizard-pink" />
                  <span className="text-sm font-semibold text-lizard-pink">Por que metas coletivas?</span>
                </div>

                <h2 className="text-3xl md:text-4xl font-bold tracking-tighter leading-tight">
                  Recompensas tangíveis,{" "}
                  <span className="text-lizard-pink">não só pontos virtuais</span>
                </h2>

                <p className="text-lg text-muted-foreground leading-relaxed">
                  Diferente de outros apps, o Lizard foca em recompensas reais.
                  Entendemos que o aprendizado é potencializado por uma rede de apoio
                  e motivação mútua.
                </p>

                <p className="text-lg text-muted-foreground leading-relaxed">
                  O sorteio do iPhone é apenas o primeiro passo. À medida que avançarmos
                  para 5.000, 10.000 usuários e além, as premiações evoluem para experiências
                  ainda maiores, como viagens e eventos exclusivos.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* MILESTONES TIMELINE */}
        <section className="py-20 md:py-28 relative">
          <div className="container mx-auto px-4">
            <div className="text-center max-w-2xl mx-auto mb-14">
              <h2 className="text-3xl md:text-5xl font-bold tracking-tighter mb-4">
                A jornada das <span className="text-lizard-purple">recompensas</span>
              </h2>
              <p className="text-lg text-muted-foreground">
                Cada novo membro acelera o cronômetro para a próxima conquista coletiva.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
              {milestones.map((m, i) => (
                <div
                  key={m.count}
                  className="relative bg-card p-8 rounded-3xl border-2 border-border hover:scale-105 transition-all duration-500 text-center group"
                  style={{
                    background: `linear-gradient(135deg, hsl(var(--card)), hsl(var(--card)))`,
                  }}
                >
                  <div className={`absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-${m.color} text-white text-xs font-bold uppercase tracking-wide`}>
                    Meta {i + 1}
                  </div>
                  <div className={`w-16 h-16 rounded-2xl bg-${m.color}/15 flex items-center justify-center mx-auto mb-4 group-hover:rotate-6 transition-transform`}>
                    <m.icon className={`w-8 h-8 text-${m.color}`} />
                  </div>
                  <p className={`text-4xl font-bold text-${m.color} mb-2`}>{m.count}</p>
                  <p className="text-sm text-muted-foreground mb-3">usuários</p>
                  <p className="font-semibold">{m.reward}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA FINAL */}
        <section className="py-20 md:py-28 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-lizard-purple via-lizard-pink to-lizard-orange opacity-95" />
          <div className="container mx-auto px-4 relative">
            <div className="max-w-3xl mx-auto text-center text-white space-y-6">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/15 border border-white/30 backdrop-blur-sm">
                <Gift className="w-4 h-4" />
                <span className="text-sm font-semibold">Sua indicação vale ouro</span>
              </div>

              <h2 className="text-3xl md:text-5xl font-bold tracking-tighter">
                Fortaleça uma comunidade que aprende com inteligência
              </h2>

              <p className="text-lg opacity-90">
                Indicar o Lizard não é apenas sobre ganhar um prêmio,
                é sobre construir juntos uma forma melhor de aprender inglês.
              </p>

              <div className="flex flex-wrap gap-3 justify-center pt-4">
                <a href="https://lizard-app.online/" target="_blank" rel="noopener noreferrer">
                  <Button size="lg" className="bg-white text-lizard-purple hover:bg-white/90 hover:scale-105 transition-all">
                    <Users className="w-4 h-4" /> Começar agora
                  </Button>
                </a>
                <Button
                  size="lg"
                  variant="outline"
                  onClick={handleInvite}
                  className="border-white text-white hover:bg-white hover:text-lizard-purple"
                >
                  <Share2 className="w-4 h-4" /> Convidar amigos
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Premios;
