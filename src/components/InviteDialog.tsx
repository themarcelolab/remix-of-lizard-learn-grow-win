import { useState } from "react";
import { Copy, MessageCircle, Share2 } from "lucide-react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { toast } from "sonner";

const INVITE_URL = "https://lizard-app.com/";
const SHARE_TITLE = "Lizard - Aprenda Inglês";
const SHARE_TEXT = "Vem aprender inglês comigo no Lizard!";

interface InviteDialogProps {
  trigger: React.ReactNode;
}

const InviteDialog = ({ trigger }: InviteDialogProps) => {
  const [open, setOpen] = useState(false);

  const handleClick = async (e: React.MouseEvent) => {
    if (typeof navigator !== "undefined" && typeof navigator.share === "function") {
      e.preventDefault();
      try {
        await navigator.share({
          title: SHARE_TITLE,
          text: SHARE_TEXT,
          url: INVITE_URL,
        });
      } catch {
        /* user cancelled */
      }
    } else {
      setOpen(true);
    }
  };

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(INVITE_URL);
      toast.success("Link copiado com sucesso!");
    } catch {
      toast.error("Não foi possível copiar o link.");
    }
  };

  const whatsappUrl = `https://wa.me/?text=${encodeURIComponent(`${SHARE_TEXT} ${INVITE_URL}`)}`;

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild onClick={handleClick}>
        {trigger}
      </DialogTrigger>
      <DialogContent className="sm:max-w-md rounded-2xl">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-2 text-xl">
            <Share2 className="w-5 h-5 text-lizard-green" />
            Convidar Amigos
          </DialogTitle>
        </DialogHeader>

        <div className="space-y-4 pt-2">
          <div className="flex items-center gap-2">
            <Input
              readOnly
              value={INVITE_URL}
              className="rounded-xl bg-muted/50"
              onFocus={(e) => e.currentTarget.select()}
            />
            <Button
              type="button"
              onClick={handleCopy}
              className="rounded-xl bg-lizard-green hover:bg-lizard-green/90 text-white shrink-0"
            >
              <Copy className="w-4 h-4" />
              <span className="sr-only sm:not-sr-only sm:ml-2">Copiar</span>
            </Button>
          </div>

          <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="block">
            <Button
              type="button"
              className="w-full rounded-xl bg-lizard-green hover:bg-lizard-green/90 text-white"
            >
              <MessageCircle className="w-5 h-5 mr-2" />
              Compartilhar no WhatsApp
            </Button>
          </a>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default InviteDialog;
