import { Button } from "@/components/ui/button";
import { Clock, TrendingUp, CheckCircle2, ArrowRight, BookOpen, Target, Building2, GraduationCap, Brain, Sparkles, Star, Zap } from "lucide-react";
import Header from "@/components/landing/Header";
import Footer from "@/components/landing/Footer";
import lizardLogo from "@/assets/lizard-logo.png";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import { useRef } from "react";
import appMockup from "@/assets/app-mockup.png";
import girlBooksYellow from "@/assets/girl-books-yellow.png";
import girlHeadphones from "@/assets/girl-headphones.png";
import boyLaughing from "@/assets/boy-laughing.jpg";
const challenges = [{
  text: "Aulas não garantem retenção de vocabulário"
}, {
  text: "Alunos esquecem o conteúdo fora da sala de aula"
}, {
  text: "Implementar ensino bilíngue é caro e complexo"
}, {
  text: "Falta engajamento no estudo fora do horário escolar"
}];
const features = [{
  icon: Clock,
  text: "Uso diário e curto (5–15 minutos)",
  color: "lizard-purple"
}, {
  icon: TrendingUp,
  text: "Evolução mensurável",
  color: "lizard-orange"
}, {
  icon: BookOpen,
  text: "Conteúdo estruturado por nível",
  color: "lizard-blue"
}, {
  icon: Brain,
  text: "Ciência cognitiva aplicada à prática",
  color: "lizard-pink"
}];
const customization = [{
  text: "Sustentabilidade financeira"
}, {
    text: "Comunicação adaptada ao tom institucional"
  }, {
    text: "Autoridade pedagógica e tecnológica"
  }];
const strengthens = [{
  text: "marca da escola",
  color: "lizard-purple"
}, {
  text: "percepção de inovação",
  color: "lizard-orange"
}, {
  text: "vínculo com alunos e responsáveis",
  color: "lizard-blue"
}];
const benefits = ["Nova fonte de receita recorrente", "Diferencial competitivo no mercado educacional", "Maior engajamento dos alunos com o inglês", "Evolução acompanhável por métricas", "Implementação simples e rápida", "Sua escola bilíngue de verdade"];
const steps = [{
  num: 1,
  text: "A escola se torna parceira"
}, {
  num: 2,
  text: "Configuração do painel administrativo da escola"
}, {
  num: 3,
  text: "Os alunos recebem acesso e começam a estudar"
}, {
  num: 4,
  text: "A escola acompanha engajamento e evolução"
}, {
  num: 5,
  text: "A escola recebe comissão mensal"
}];
const winWinItems = [{
  text: "A escola oferece o app como parte do programa educacional",
  color: "lizard-purple"
}, {
  text: "Um valor mínimo é incorporado à mensalidade",
  color: "lizard-orange"
}, {
  text: "A escola recebe comissão recorrente por aluno ativo",
  color: "lizard-blue"
}, {
  text: "O aluno ganha acesso a uma metodologia eficiente e gamificada",
  color: "lizard-yellow"
}];
// WinWin Carousel Component
const WinWinCarousel = ({ items }: { items: typeof winWinItems }) => {
  const plugin = useRef(
    Autoplay({ delay: 3500, stopOnInteraction: true })
  );

  return (
    <Carousel
      opts={{
        align: "start",
        loop: true,
      }}
      plugins={[plugin.current]}
      className="w-full"
    >
      <CarouselContent className="-ml-2 md:-ml-4">
        {items.map((item, index) => (
          <CarouselItem key={index} className="pl-2 md:pl-4 basis-full sm:basis-1/2">
            <div 
              className="group p-6 rounded-2xl bg-card/80 backdrop-blur-sm transition-all duration-300 border-2 h-full hover:scale-[1.02] hover:shadow-xl"
              style={{
                borderColor: `hsl(var(--${item.color}) / 0.3)`
              }}
            >
              <div className="flex items-start gap-4">
                <div 
                  className="w-12 h-12 rounded-2xl flex items-center justify-center flex-shrink-0 text-lg font-bold text-white shadow-lg group-hover:scale-110 transition-transform duration-300"
                  style={{ 
                    background: `linear-gradient(135deg, hsl(var(--${item.color})), hsl(var(--${item.color}) / 0.7))`
                  }}
                >
                  {index + 1}
                </div>
                <p className="text-foreground font-medium leading-relaxed pt-2">{item.text}</p>
              </div>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <div className="flex justify-center gap-2 mt-6">
        <CarouselPrevious className="static translate-x-0 translate-y-0" />
        <CarouselNext className="static translate-x-0 translate-y-0" />
      </div>
    </Carousel>
  );
};

const Parcerias = () => {
  return <div className="min-h-screen">
      <Header />
      <main className="pt-20">
        {/* Hero Section - Centered with Modern Photo Grid */}
        <section className="py-16 md:py-24 relative overflow-hidden bg-gradient-to-br from-lizard-purple/5 via-background to-lizard-orange/5">
          {/* Decorative Background Shapes */}
          <div className="absolute top-20 left-10 w-32 h-32 bg-lizard-purple/10 rounded-full blur-3xl" />
          <div className="absolute bottom-20 right-10 w-40 h-40 bg-lizard-orange/10 rounded-full blur-3xl" />
          
          <div className="container mx-auto px-4 relative">
            <div className="max-w-5xl mx-auto">
              <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
                {/* Left - Content */}
                <div className="space-y-6 order-2 lg:order-1">
                  <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-lizard-purple/10 text-lizard-purple text-sm font-medium">
                    <GraduationCap className="w-4 h-4" />
                    Para Escolas
                  </div>
                  
                  <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight tracking-tighter">
                    Inglês bilíngue sem mudar sua{" "}
                    <span className="text-lizard-orange">estrutura de ensino</span>
                  </h1>
                  
                  <p className="text-lg text-muted-foreground max-w-xl">
                    Leve um programa de vocabulário em inglês baseado em ciência para seus alunos, 
                    com baixo custo, alta adesão e nova fonte de receita para a escola.
                  </p>

                  <div className="flex flex-col sm:flex-row gap-4 pt-4">
                    <Button size="lg" className="bg-lizard-purple hover:bg-lizard-purple/90 text-white">
                      Quero ser escola parceira
                      <ArrowRight className="ml-2" />
                    </Button>
                  </div>

                </div>

                {/* Right - Modern Geometric Photo Grid */}
                <div className="relative order-1 lg:order-2 h-[350px] sm:h-[380px] lg:h-[420px] flex items-center justify-center">
                  {/* Photo Container - Compact and Modern */}
                  <div className="relative w-full max-w-sm lg:max-w-md mx-auto">
                    {/* Main Photo - Hexagon-ish with clip-path */}
                    <div className="absolute top-0 right-0 w-40 h-52 sm:w-48 sm:h-60 lg:w-56 lg:h-72 rounded-[2rem] overflow-hidden shadow-2xl z-20 rotate-3 hover:rotate-0 transition-transform duration-500">
                      <img src={girlBooksYellow} alt="Estudante com livros" className="w-full h-full object-cover object-top" />
                    </div>

                    {/* Second Photo - Top left overlapping */}
                    <div className="absolute top-4 left-0 w-32 h-40 sm:w-36 sm:h-44 lg:w-40 lg:h-52 rounded-[1.5rem] overflow-hidden shadow-xl z-10 -rotate-6 hover:rotate-0 transition-transform duration-500">
                      <img src={girlHeadphones} alt="Estudante com fones" className="w-full h-full object-cover object-top" />
                    </div>

                    {/* Third Photo - Bottom center overlapping both */}
                    <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-44 h-28 sm:w-52 sm:h-32 lg:w-56 lg:h-36 rounded-[1.5rem] overflow-hidden shadow-xl z-30 hover:scale-105 transition-transform duration-500">
                      <img src={boyLaughing} alt="Estudante feliz" className="w-full h-full object-cover" />
                    </div>

                    {/* Decorative Elements - Geometric Shapes */}
                    <div className="absolute -top-4 right-1/3 w-8 h-8 bg-gradient-to-br from-lizard-purple to-lizard-pink rounded-lg rotate-45 z-40" />
                    <div className="absolute top-1/3 -left-2 w-6 h-6 bg-gradient-to-br from-lizard-orange to-lizard-yellow rounded-full z-40" />
                    <div className="absolute bottom-1/4 -right-2 w-10 h-10 bg-gradient-to-br from-lizard-blue to-lizard-purple rounded-xl rotate-12 z-40" />
                    <div className="absolute -bottom-2 left-1/4 w-5 h-5 bg-gradient-to-br from-lizard-pink to-lizard-orange rounded-full z-40" />
                    
                    {/* Floating Icons with gradient backgrounds */}
                    <div className="absolute top-1/4 left-1/2 bg-gradient-to-br from-lizard-blue to-lizard-purple p-2 rounded-xl z-40 shadow-lg">
                      <Sparkles className="w-4 h-4 text-white" />
                    </div>
                    <div className="absolute bottom-1/3 right-0 bg-gradient-to-br from-lizard-green to-lizard-blue p-2 rounded-xl z-40 shadow-lg">
                      <Star className="w-4 h-4 text-white" />
                    </div>
                    
                    {/* Decorative rings */}
                    <div className="absolute top-8 left-1/3 w-16 h-16 border-2 border-lizard-purple/30 rounded-full z-0" />
                    <div className="absolute bottom-12 right-1/4 w-12 h-12 border-2 border-lizard-orange/30 rounded-full z-0" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Challenge Section - White with subtle border cards */}
        <section className="py-16 md:py-24">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-center mb-4 tracking-tighter">
                O desafio do <span className="text-lizard-orange">ensino de inglês</span> hoje
              </h2>
              
              <div className="grid sm:grid-cols-2 gap-4 mt-10">
                {challenges.map((challenge, index) => {
                const colors = ["lizard-purple", "lizard-orange", "lizard-blue", "lizard-yellow"];
                const color = colors[index % colors.length];
                return <div key={index} className="p-5 bg-card rounded-xl border-l-4 shadow-sm hover:shadow-md transition-shadow" style={{
                  borderLeftColor: `hsl(var(--${color}))`
                }}>
                      <p className="text-muted-foreground">{challenge.text}</p>
                    </div>;
              })}
              </div>

              <div className="mt-12 text-center p-8 bg-gradient-to-r from-lizard-orange/10 via-lizard-pink/10 to-lizard-purple/10 rounded-2xl">
                <p className="text-lg md:text-xl font-medium text-muted-foreground">
                  O resultado? <span className="text-lizard-orange font-bold">Muito esforço, pouco progresso real.</span>
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Animated Phrase Section - Gradient Banner with Typewriter */}
        <section className="py-16 md:py-20 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-lizard-purple via-lizard-orange to-lizard-pink" />
          <div className="container mx-auto px-4 relative">
            <div className="text-center">
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight tracking-tighter">
                Faça seus alunos irem
                <br />
                <span className="inline-block overflow-hidden border-r-4 border-white animate-[typing_3s_steps(20,end)_forwards,blink_0.75s_step-end_infinite]">
                  ainda mais longe.
                </span>
              </h2>
            </div>
          </div>
        </section>

        {/* Solution Section - Light gray background */}
        <section className="py-16 md:py-24 bg-muted/50">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="grid lg:grid-cols-2 gap-12 items-center">
                {/* Image on left - Horizontal crop */}
                <div className="relative">
                  <div className="rounded-3xl overflow-hidden shadow-2xl">
                    <img alt="Estudante feliz" className="w-full h-72 md:h-80 object-cover" src="/lovable-uploads/1271ebe6-508b-43ba-9263-0ab66ec188f9.png" />
                  </div>
                  <div className="absolute -bottom-4 -right-4 bg-card p-4 rounded-xl shadow-lg border-2 border-lizard-green">
                    <p className="text-sm font-semibold text-lizard-green">✓ Aprendizado real</p>
                  </div>
                </div>

                {/* Content on right */}
                <div>
                  <span className="inline-block px-4 py-2 rounded-full bg-lizard-purple/10 text-lizard-purple text-sm font-medium mb-4">
                    Solução
                  </span>
                  <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold tracking-tighter mb-4">
                    O Lizard <span className="text-lizard-purple">complementa</span> o ensino, não substitui
                  </h2>
                  <p className="text-lg text-muted-foreground mb-8">
                    O Lizard é um app de vocabulário em inglês baseado em repetição espaçada (SRS), 
                    feito para funcionar junto à rotina escolar.
                  </p>

                  <div className="grid sm:grid-cols-2 gap-4">
                    {features.map((feature, index) => <div key={index} className="flex items-center gap-4 p-4 bg-card rounded-xl shadow-sm">
                        <div className="w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0" style={{
                      backgroundColor: `hsl(var(--${feature.color}) / 0.15)`
                    }}>
                          <feature.icon className="w-5 h-5" style={{
                        color: `hsl(var(--${feature.color}))`
                      }} />
                        </div>
                        <p className="font-medium text-sm">{feature.text}</p>
                      </div>)}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Accessible Section - Purple gradient background */}
        <section className="py-16 md:py-24 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-lizard-purple/10 via-lizard-blue/5 to-lizard-pink/10" />
          <div className="container mx-auto px-4 relative">
            <div className="max-w-6xl mx-auto">
              <div className="grid lg:grid-cols-2 gap-12 items-center">
                {/* Content on left */}
                <div>
                  <span className="inline-block px-4 py-2 rounded-full bg-lizard-orange/10 text-lizard-orange text-sm font-medium mb-4">
                    Acessível
                  </span>
                  <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold tracking-tighter mb-4">
                    Ensino bilíngue <span className="text-lizard-purple">acessível</span> e <span className="text-lizard-orange">escalável</span>
                  </h2>
                  <p className="text-lg text-muted-foreground mb-8">
                    Com o Lizard, sua escola pode oferecer um programa bilíngue moderno, sem:
                  </p>
                  
                  <div className="flex flex-col gap-3">
                    <div className="px-6 py-4 bg-card rounded-xl border-2 border-lizard-purple/20 text-muted-foreground shadow-sm">
                      ❌ contratar novos professores
                    </div>
                    <div className="px-6 py-4 bg-card rounded-xl border-2 border-lizard-orange/20 text-muted-foreground shadow-sm">
                      ❌ reformular a grade
                    </div>
                    <div className="px-6 py-4 bg-card rounded-xl border-2 border-lizard-blue/20 text-muted-foreground shadow-sm">
                      ❌ aumentar a carga horária
                    </div>
                  </div>
                </div>

                {/* Image on right */}
                <div className="relative">
                  <div className="rounded-3xl overflow-hidden shadow-2xl">
                    <img alt="Estudante com fones" className="w-full h-80 md:h-96 object-cover object-top" src="/lovable-uploads/d424963d-108a-4bb7-adb9-8bb2d0795144.jpg" />
                  </div>
                  {/* Decorative elements */}
                  <div className="absolute -top-4 -left-4 w-12 h-12 bg-lizard-orange rounded-xl rotate-12" />
                  <div className="absolute -bottom-4 -right-4 w-8 h-8 bg-lizard-purple rounded-full" />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Customization Section - White */}
        <section className="py-16 md:py-24">
          <div className="container mx-auto px-4">
            <div className="max-w-5xl mx-auto">
              <div className="grid md:grid-cols-2 gap-12 items-center">
                <div>
                  <span className="inline-block px-4 py-2 rounded-full bg-lizard-blue/10 text-lizard-blue text-sm font-medium mb-4">
                    Tecnologia
                  </span>
                  <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold tracking-tighter mb-6">
                    Inovação que gera <span className="text-lizard-orange">valor</span> para a sua escola
                  </h2>
                  <p className="text-muted-foreground mb-6">Cada escola parceira pode ter:</p>
                  
                  <ul className="space-y-3 mb-8">
                    {customization.map((item, index) => {
                    const colors = ["lizard-purple", "lizard-orange", "lizard-blue"];
                    return <li key={index} className="flex items-center gap-3">
                          <CheckCircle2 className="w-5 h-5 flex-shrink-0" style={{
                        color: `hsl(var(--${colors[index]}))`
                      }} />
                          <span>{item.text}</span>
                        </li>;
                  })}
                  </ul>

                  <p className="text-muted-foreground mb-4">Isso fortalece:</p>
                  <div className="flex flex-wrap gap-3">
                    {strengthens.map((item, index) => <span key={index} className="px-4 py-2 rounded-full text-sm font-medium" style={{
                    backgroundColor: `hsl(var(--${item.color}) / 0.1)`,
                    color: `hsl(var(--${item.color}))`
                  }}>
                        {item.text}
                      </span>)}
                  </div>
                </div>
                
                {/* App Mockup */}
                <div className="relative flex justify-center">
                  <div className="relative">
                    <img src={appMockup} alt="Lizard App" className="w-56 md:w-64 drop-shadow-2xl rounded-3xl" />
                    
                    {/* Floating badge */}
                    <div className="absolute -right-4 top-16 bg-card p-3 rounded-xl shadow-lg border-2 border-lizard-purple/20">
                      <div className="flex items-center gap-2">
                        <img src={lizardLogo} alt="Logo" className="h-8" />
                        <span className="text-xs font-semibold text-lizard-purple">Sua Escola</span>
                      </div>
                    </div>

                    {/* Decorative */}
                    <div className="absolute -top-6 left-8 w-10 h-10 bg-lizard-yellow rounded-xl rotate-6" />
                    <div className="absolute bottom-12 -left-6 w-6 h-6 bg-lizard-pink rounded-full" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Win-Win Section - Modern gradient background with Carousel */}
        <section className="py-16 md:py-24 relative overflow-hidden">
          {/* Gradient background */}
          <div className="absolute inset-0 bg-gradient-to-br from-lizard-purple/10 via-lizard-pink/8 to-lizard-orange/10" />
          {/* Decorative shapes */}
          <div className="absolute top-10 left-10 w-40 h-40 bg-lizard-purple/10 rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-10 right-10 w-48 h-48 bg-lizard-orange/10 rounded-full blur-3xl animate-pulse" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-lizard-pink/5 rounded-full blur-3xl" />
          
          <div className="container mx-auto px-4 relative">
            <div className="max-w-5xl mx-auto">
              <div className="text-center mb-10">
                <span className="inline-block px-4 py-2 rounded-full bg-lizard-purple/15 text-lizard-purple text-sm font-medium mb-4 backdrop-blur-sm">
                  Modelo de negócio
                </span>
                <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold tracking-tighter mb-4">
                  Todos <span className="gradient-brand-text">ganham</span>
                </h2>
              </div>
              
              {/* Carousel for all screen sizes */}
              <WinWinCarousel items={winWinItems} />

              <div className="flex flex-wrap gap-4 justify-center mt-10">
                <span className="px-6 py-3 bg-card/80 backdrop-blur-sm rounded-full text-lizard-purple font-semibold border-2 border-lizard-purple/30 shadow-md hover:scale-105 transition-transform">
                  ✓ Sem risco operacional
                </span>
                <span className="px-6 py-3 bg-card/80 backdrop-blur-sm rounded-full text-lizard-orange font-semibold border-2 border-lizard-orange/30 shadow-md hover:scale-105 transition-transform">
                  ✓ Sem investimento inicial
                </span>
              </div>
            </div>
          </div>
        </section>

        {/* Benefits Section - Modern gradient with glassmorphism */}
        <section className="py-16 md:py-24 relative overflow-hidden">
          {/* Animated gradient background */}
          <div className="absolute inset-0 bg-gradient-to-br from-lizard-purple via-lizard-pink/80 to-lizard-orange" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,hsl(var(--lizard-blue)/0.3),transparent_50%)]" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,hsl(var(--lizard-yellow)/0.2),transparent_50%)]" />
          
          <div className="container mx-auto px-4 relative">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-10">
                <span className="inline-block px-4 py-2 rounded-full bg-white/20 backdrop-blur-sm text-white text-sm font-medium mb-4 border border-white/20">
                  Benefícios
                </span>
                <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold tracking-tighter text-white">
                  Benefícios para a escola
                </h2>
              </div>

              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {benefits.map((benefit, index) => {
                  const colors = ["lizard-yellow", "lizard-blue", "lizard-green", "lizard-pink", "lizard-orange", "lizard-purple"];
                  const iconColor = colors[index % colors.length];
                  return (
                    <div 
                      key={index} 
                      className="flex items-center gap-3 p-5 bg-white/15 backdrop-blur-md rounded-2xl border border-white/25 hover:bg-white/20 transition-all duration-300 hover:scale-[1.02] group"
                    >
                      <div 
                        className="w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0"
                        style={{ backgroundColor: `hsl(var(--${iconColor}) / 0.3)` }}
                      >
                        <CheckCircle2 
                          className="w-5 h-5 flex-shrink-0" 
                          style={{ color: `hsl(var(--${iconColor}))` }}
                        />
                      </div>
                      <span className="font-medium text-white">{benefit}</span>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </section>

        {/* Methodology Section - White with rounded box */}
        <section className="py-16 md:py-24">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto">
              <div className="bg-gradient-to-br from-lizard-orange/5 to-lizard-pink/5 p-8 md:p-12 rounded-3xl border-2 border-lizard-orange/20 text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-lizard-orange/10 rounded-2xl mb-6">
                  <Brain className="w-8 h-8 text-lizard-orange" />
                </div>
                <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold tracking-tighter mb-4">
                  Metodologia baseada em <span className="text-lizard-orange">ciência</span>
                </h2>
                <p className="text-lg text-muted-foreground">
                  O método de repetição espaçada utilizado no Lizard é respaldado por estudos de ciência cognitiva 
                  e já utilizado por milhões de estudantes no mundo.
                </p>
                <Button variant="link" className="mt-4 text-lizard-orange">
                  Ver referências científicas
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Full-width Image Banner with Animation */}
        <section className="w-full">
          <div className="relative h-48 md:h-64 lg:h-72 overflow-hidden">
            <img src={girlBooksYellow} alt="Estudante" className="w-full h-full object-cover object-center" />
            <div className="absolute inset-0 bg-gradient-to-r from-lizard-purple/60 via-lizard-orange/40 to-lizard-pink/60" />
            <div className="absolute inset-0 flex items-center justify-center">
              <p className="text-2xl md:text-3xl lg:text-4xl font-bold text-white text-center px-4 animate-pulse">
                O futuro do inglês é <span className="inline-block animate-bounce">agora</span>.
              </p>
            </div>
          </div>
        </section>

        {/* How it works Section - Light background */}
        <section className="py-16 md:py-24 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-12">
                <span className="inline-block px-4 py-2 rounded-full bg-lizard-blue/10 text-lizard-blue text-sm font-medium mb-4">
                  Processo
                </span>
                <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold tracking-tighter">
                  Como funciona na <span className="text-lizard-orange">prática</span>
                </h2>
              </div>

              <div className="relative">
                {/* Connection line */}
                <div className="absolute left-5 top-8 bottom-8 w-0.5 bg-gradient-to-b from-lizard-purple via-lizard-orange to-lizard-pink hidden md:block" />
                
                <div className="space-y-4">
                  {steps.map((step, index) => {
                  const colors = ["lizard-purple", "lizard-orange", "lizard-blue", "lizard-yellow", "lizard-pink"];
                  const color = colors[index % colors.length];
                  return <div key={index} className="flex items-center gap-5 p-5 bg-card rounded-xl shadow-sm hover:shadow-md transition-all ml-0 md:ml-8">
                        <div className="w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0 font-bold text-white relative z-10" style={{
                      backgroundColor: `hsl(var(--${color}))`
                    }}>
                          {step.num}
                        </div>
                        <p className="font-medium">{step.text}</p>
                      </div>;
                })}
                </div>
              </div>

              <div className="flex flex-wrap gap-4 justify-center mt-10">
                <span className="px-6 py-3 bg-lizard-purple/10 text-lizard-purple rounded-full font-medium">
                  Simples
                </span>
                <span className="px-6 py-3 bg-lizard-orange/10 text-lizard-orange rounded-full font-medium">
                  Escalável
                </span>
                <span className="px-6 py-3 bg-lizard-blue/10 text-lizard-blue rounded-full font-medium">
                  Sustentável
                </span>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 md:py-28 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-lizard-purple/15 via-lizard-orange/10 to-lizard-pink/15" />
          <div className="container mx-auto px-4 relative">
            <div className="max-w-3xl mx-auto text-center space-y-6">
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold tracking-tighter">
                Leve o Lizard para sua <span className="text-lizard-orange">escola</span>
              </h2>
              <p className="text-lg text-muted-foreground">
                Ofereça um ensino de inglês mais eficiente e gere valor para alunos e para a instituição.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
                <Button size="lg" className="bg-lizard-purple hover:bg-lizard-purple/90 text-white shadow-lg">
                  Quero ser escola parceira
                  <ArrowRight className="ml-2" />
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>;
};
export default Parcerias;