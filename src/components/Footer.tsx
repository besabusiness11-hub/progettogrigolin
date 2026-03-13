import { Linkedin, Facebook, Instagram } from "lucide-react";

const Footer = () => {
  return (
    <footer className="py-12 bg-card border-t border-border">
      <div className="container mx-auto px-4 sm:px-6 lg:px-12">
        <div className="flex flex-col items-center gap-8 md:flex-row md:justify-between">
          
          {/* Logo Brand */}
          <div className="font-display font-bold text-xl tracking-wider">
            <span className="text-primary">GRUPPO</span>{" "}
            <span className="text-foreground">GRIGOLIN</span>
          </div>

          {/* Copyright Centrale */}
          <div className="text-center md:text-left">
            <p className="text-sm text-muted-foreground font-light">
              © {new Date().getFullYear()} Gruppo Grigolin S.p.A.
              <span className="hidden md:inline mx-2">—</span>
              <br className="md:hidden" />
              Tutti i diritti riservati
            </p>
          </div>

          {/* Link Legali e Social */}
          <div className="flex flex-col items-center md:items-end gap-4">
            <div className="flex gap-6">
              <a href="#" className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground hover:text-primary transition-colors font-display">
                Privacy
              </a>
              <a href="#" className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground hover:text-primary transition-colors font-display">
                Cookie
              </a>
              <a href="#" className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground hover:text-primary transition-colors font-display">
                Legale
              </a>
            </div>
            
            {/* Social Icons - Aggiungono professionalità */}
            <div className="flex gap-4 text-muted-foreground">
              <Linkedin size={16} className="hover:text-primary cursor-pointer transition-colors" />
              <Facebook size={16} className="hover:text-primary cursor-pointer transition-colors" />
              <Instagram size={16} className="hover:text-primary cursor-pointer transition-colors" />
            </div>
          </div>

        </div>
      </div>
    </footer>
  );
};

export default Footer;