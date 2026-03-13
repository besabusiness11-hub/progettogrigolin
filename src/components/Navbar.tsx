import { motion, useMotionValueEvent, useScroll } from "framer-motion";
import { useState } from "react";
import { Link } from "react-router-dom";
import { ChevronDown, Building2, Hammer, ShieldCheck, Construction } from "lucide-react";

const Navbar = () => {
  const [hidden, setHidden] = useState(false);
  const [isMegaMenuOpen, setIsMegaMenuOpen] = useState(false);
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    const previous = scrollY.getPrevious() || 0;
    if (latest > previous && latest > 150) {
      setHidden(true);
      setIsMegaMenuOpen(false);
    } else if (latest < previous) {
      setHidden(false);
    }
  });

  const handleLinkClick = () => {
    setIsMegaMenuOpen(false);
  };

  return (
    <motion.nav
      initial={{ y: 0, opacity: 1 }}
      animate={{ y: hidden ? -100 : 0 }}
      transition={{ duration: 0.3, ease: "easeInOut" }}
      className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-xl border-b border-border shadow-sm"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-12 flex items-center justify-between h-20">
        
        <Link to="/" className="font-display font-bold text-xl sm:text-2xl tracking-wider relative z-50" onClick={handleLinkClick}>
          <span className="text-primary">GRUPPO</span>{" "}
          <span className="text-foreground">GRIGOLIN</span>
        </Link>

        <div className="hidden lg:flex items-center gap-8">
          
          <a href="/#filiera" className="text-sm font-display tracking-widest uppercase text-foreground hover:text-primary transition-colors">
            Il Processo
          </a>

          {/* Mega Menu "Aziende" */}
          <div 
            className="relative"
            onMouseEnter={() => setIsMegaMenuOpen(true)}
            onMouseLeave={() => setIsMegaMenuOpen(false)}
          >
            {/* Il bottone principale scorre all'inizio della sezione (titolo compreso) */}
            <a 
              href="/#aziende" 
              onClick={handleLinkClick}
              className="flex items-center gap-1.5 text-sm font-display tracking-widest uppercase text-foreground hover:text-primary transition-colors py-8"
            >
              Aziende <ChevronDown size={14} className={`${isMegaMenuOpen ? "rotate-180" : ""} transition-transform duration-300`} />
            </a>

            {/* Dropdown Content - I link interni scorrono direttamente ai filtri saltando il titolo */}
            <div className={`absolute top-full left-1/2 -translate-x-1/2 w-[600px] bg-card border border-border rounded-2xl shadow-xl transition-all duration-300 p-6 grid grid-cols-2 gap-4 ${isMegaMenuOpen ? "opacity-100 visible translate-y-0" : "opacity-0 invisible translate-y-4"}`}>
              
              {/* Item 1 */}
              <Link to="/?filter=calcestruzzi-calce#filtri-aziende" onClick={handleLinkClick} className="flex items-start gap-4 p-4 rounded-xl hover:bg-muted/50 transition-colors border border-transparent hover:border-border">
                <div className="bg-primary/10 p-2.5 rounded-lg text-primary"><Building2 size={20} /></div>
                <div>
                  <div className="font-display font-bold text-foreground text-sm flex items-center gap-2">Calcestruzzi & Calce <ShieldCheck size={12} className="text-primary"/></div>
                  <p className="text-xs text-muted-foreground mt-1 leading-relaxed">SuperBeton, Fornaci Calce Grigolin, ILCEV</p>
                </div>
              </Link>

              {/* Item 2 */}
              <Link to="/?filter=prefabbricati#filtri-aziende" onClick={handleLinkClick} className="flex items-start gap-4 p-4 rounded-xl hover:bg-muted/50 transition-colors border border-transparent hover:border-border">
                <div className="bg-primary/10 p-2.5 rounded-lg text-primary"><Hammer size={20} /></div>
                <div>
                  <div className="font-display font-bold text-foreground text-sm flex items-center gap-2">Prefabbricati <ShieldCheck size={12} className="text-primary"/></div>
                  <p className="text-xs text-muted-foreground mt-1 leading-relaxed">Magnetti Building, TesiSystem, Veneta Prefabbricati</p>
                </div>
              </Link>

              {/* Item 3 */}
              <Link to="/?filter=costruzioni-infrastrutture#filtri-aziende" onClick={handleLinkClick} className="flex items-start gap-4 p-4 rounded-xl hover:bg-muted/50 transition-colors border border-transparent hover:border-border">
                <div className="bg-primary/10 p-2.5 rounded-lg text-primary"><Construction size={20} /></div>
                <div>
                  <div className="font-display font-bold text-foreground text-sm flex items-center gap-2">Costruzioni & Infrastrutture</div>
                  <p className="text-xs text-muted-foreground mt-1 leading-relaxed">Brussi Costruzioni, Ferro Beton, Venetasfalti</p>
                </div>
              </Link>

              {/* Item 4: Esplora Tutto */}
              <Link to="/?filter=tutti#filtri-aziende" onClick={handleLinkClick} className="flex items-center justify-center p-4 rounded-xl bg-secondary/30 hover:bg-secondary/50 transition-colors border border-border/50 group/btn">
                <span className="text-sm font-display tracking-widest uppercase text-primary font-semibold flex items-center gap-2">
                  Esplora l'ecosistema <span className="group-hover/btn:translate-x-1 transition-transform">→</span>
                </span>
              </Link>

            </div>
          </div>

          <Link to="/sostenibilita" className="text-sm font-display tracking-widest uppercase text-foreground hover:text-primary transition-colors">
            Sostenibilità
          </Link>
          
          <Link to="/careers" className="text-sm font-display tracking-widest uppercase text-foreground hover:text-primary transition-colors">
            Careers
          </Link>

          <a href="/#contatti" className="px-6 py-3 bg-primary text-primary-foreground text-sm font-display tracking-widest uppercase rounded-full hover:shadow-green transition-all hover:scale-105">
            Contatti
          </a>

        </div>

        <div className="lg:hidden flex items-center">
          <button className="text-foreground p-2">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="3" y1="12" x2="21" y2="12"></line><line x1="3" y1="6" x2="21" y2="6"></line><line x1="3" y1="18" x2="21" y2="18"></line></svg>
          </button>
        </div>

      </div>
    </motion.nav>
  );
};

export default Navbar;