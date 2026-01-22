import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import lizardLogo from "@/assets/lizard-logo.png";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  const isParcerias = location.pathname === "/parcerias";

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background border-b border-border/50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <img src={lizardLogo} alt="Lizard" className="h-14 md:h-20" />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            <Link 
              to="/parcerias" 
              className={`text-sm font-semibold px-4 py-2 rounded-full transition-all ${
                isParcerias 
                  ? "bg-lizard-purple text-white" 
                  : "bg-lizard-purple/10 text-lizard-purple hover:bg-lizard-purple/20"
              }`}
            >
              Seja uma escola parceira
            </Link>
            <a href="/#beneficios" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
              Benefícios
            </a>
            <a href="/#premios" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
              Prêmios
            </a>
            <a href="/#preco" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
              Preço
            </a>
          </nav>

          <div className="hidden md:block">
            <a href="https://wa.me/5551997930490" target="_blank" rel="noopener noreferrer">
              <Button variant="default">
                Começar agora
              </Button>
            </a>
          </div>

          {/* Mobile menu button */}
          <button
            className="md:hidden p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-border">
            <nav className="flex flex-col gap-4">
              <Link 
                to="/parcerias" 
                className={`text-sm font-semibold py-2 px-4 rounded-full w-fit ${
                  isParcerias 
                    ? "bg-lizard-purple text-white" 
                    : "bg-lizard-purple/10 text-lizard-purple"
                }`}
              >
                Seja uma escola parceira
              </Link>
              <a href="/#beneficios" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors py-2">
                Benefícios
              </a>
              <a href="/#premios" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors py-2">
                Prêmios
              </a>
              <a href="/#preco" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors py-2">
                Preço
              </a>
              <a href="https://wa.me/5551997930490" target="_blank" rel="noopener noreferrer" className="w-full mt-2">
                <Button variant="default" className="w-full">
                  Começar agora
                </Button>
              </a>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
