import { Button } from "@/components/ui/button";
import { Apple, Smartphone, Instagram, Linkedin, Mail, MessageCircle, ArrowRight } from "lucide-react";
import lizardLogo from "@/assets/lizard-logo.png";

const Footer = () => {
  return (
    <footer className="relative overflow-hidden">
      {/* CTA Section - Clean Design */}
      <section className="py-20 md:py-28 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center space-y-8">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tighter">
                Comece sua jornada no inglês
              </h2>
              
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Aprenda com <span className="text-lizard-purple font-semibold">ciência</span>, 
                evolua com <span className="text-lizard-orange font-semibold">consistência</span> e 
                ganhe <span className="text-lizard-green font-semibold">recompensas reais</span>.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
                <a href="https://lizard-app.online/" target="_blank" rel="noopener noreferrer">
                  <Button variant="hero" size="lg" className="gap-3">
                    <Apple className="w-5 h-5" />
                    App Store
                  </Button>
                </a>
                <a href="https://lizard-app.online/" target="_blank" rel="noopener noreferrer">
                  <Button variant="heroOutline" size="lg" className="gap-3">
                    <Smartphone className="w-5 h-5" />
                    Google Play
                  </Button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer Links Section */}
      <section className="py-12 bg-card border-t border-border/50">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            {/* Logo */}
            <div className="flex items-center">
              <img src={lizardLogo} alt="Lizard" className="h-16 md:h-20" />
            </div>

            {/* Social Links */}
            <div className="flex items-center gap-4">
              <a 
                href="https://www.instagram.com/lizardsapp/" 
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-lizard-purple/10 flex items-center justify-center hover:bg-lizard-purple/20 transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5 text-lizard-purple" />
              </a>
              <a 
                href="https://www.linkedin.com/company/111154977/" 
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-lizard-blue/10 flex items-center justify-center hover:bg-lizard-blue/20 transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-5 h-5 text-lizard-blue" />
              </a>
              <a 
                href="https://wa.me/5551997930490" 
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-lizard-green/10 flex items-center justify-center hover:bg-lizard-green/20 transition-colors"
                aria-label="WhatsApp"
              >
                <MessageCircle className="w-5 h-5 text-lizard-green" />
              </a>
              <a 
                href="#" 
                className="w-10 h-10 rounded-full bg-lizard-orange/10 flex items-center justify-center hover:bg-lizard-orange/20 transition-colors"
                aria-label="Email"
              >
                <Mail className="w-5 h-5 text-lizard-orange" />
              </a>
            </div>

            {/* Links */}
            <div className="flex items-center gap-6 text-sm text-muted-foreground">
              <a href="/politicadeprivacidade" className="hover:text-lizard-orange transition-colors">Termos de Uso & Política de Privacidade</a>
              
            </div>
          </div>

          <div className="mt-8 pt-6 border-t border-border/50 text-center">
            <p className="text-sm text-muted-foreground">
              © 2026 Lizard. Todos os direitos reservados.
            </p>
          </div>
        </div>
      </section>
    </footer>
  );
};

export default Footer;
