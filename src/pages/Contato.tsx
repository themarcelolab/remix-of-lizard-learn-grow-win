import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { ArrowLeft, Send } from "lucide-react";
import { useNavigate } from "react-router-dom";
import lizardLogo from "@/assets/lizard-logo.png";

const Contato = () => {
  const navigate = useNavigate();
  const [form, setForm] = useState({
    email: "",
    telefone: "",
    assunto: "",
    mensagem: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const body = `E-mail: ${form.email}%0D%0ATelefone: ${form.telefone}%0D%0A%0D%0A${encodeURIComponent(form.mensagem)}`;
    const mailto = `mailto:suporte@lizard-app.com?subject=${encodeURIComponent(form.assunto)}&body=${body}`;

    window.location.href = mailto;
  };

  return (
    <div className="min-h-screen bg-background flex flex-col">
      {/* Header */}
      <header className="py-6 border-b border-border/50">
        <div className="container mx-auto px-4 flex items-center justify-between">
          <button
            onClick={() => navigate("/")}
            className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors"
          >
            <ArrowLeft className="w-5 h-5" />
            <span className="text-sm">Voltar</span>
          </button>
          <img src={lizardLogo} alt="Lizard" className="h-10" />
          <div className="w-20" />
        </div>
      </header>

      {/* Form */}
      <main className="flex-1 flex items-center justify-center py-12">
        <div className="container mx-auto px-4 max-w-lg">
          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold tracking-tighter mb-2">
              Fale Conosco
            </h1>
            <p className="text-muted-foreground">
              Preencha o formulário abaixo e seu app de e-mail será aberto com a mensagem pronta para envio.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-5">
            <div className="space-y-2">
              <Label htmlFor="email">E-mail pessoal</Label>
              <Input
                id="email"
                name="email"
                type="email"
                placeholder="seu@email.com"
                required
                value={form.email}
                onChange={handleChange}
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="telefone">Telefone para contato</Label>
              <Input
                id="telefone"
                name="telefone"
                type="tel"
                placeholder="(51) 99999-9999"
                required
                value={form.telefone}
                onChange={handleChange}
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="assunto">Assunto</Label>
              <Input
                id="assunto"
                name="assunto"
                type="text"
                placeholder="Assunto do e-mail"
                required
                value={form.assunto}
                onChange={handleChange}
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="mensagem">Mensagem</Label>
              <Textarea
                id="mensagem"
                name="mensagem"
                placeholder="Escreva sua mensagem aqui..."
                rows={6}
                required
                value={form.mensagem}
                onChange={handleChange}
              />
            </div>

            <Button type="submit" variant="hero" size="lg" className="w-full gap-2">
              <Send className="w-5 h-5" />
              Enviar mensagem
            </Button>
          </form>
        </div>
      </main>
    </div>
  );
};

export default Contato;
