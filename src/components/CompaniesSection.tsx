import { motion, useInView, AnimatePresence } from "framer-motion";
import { useRef, useState, useMemo, useEffect } from "react";
import { ExternalLink, ShieldCheck, Sparkles } from "lucide-react";
import { useSearchParams, useLocation } from "react-router-dom";

const companies = [
  { name: "Fornaci Calce Grigolin", logo: "/logos/fornaci-calce-grigolin.png", filterGroup: "Calcestruzzi & Calce", category: "Calce & Cemento", description: "Produzione di calce, cemento e malte", isPillar: true },
  { name: "SuperBeton", logo: "/logos/superbeton.png", filterGroup: "Calcestruzzi & Calce", category: "Calcestruzzi", description: "Calcestruzzi preconfezionati di alta qualità", isPillar: true },
  { name: "TesiSystem", logo: "/logos/tesisystem.png", filterGroup: "Prefabbricati", category: "Sistemi Edilizi", description: "Soluzioni integrate per l'edilizia moderna", isPillar: true },
  { name: "Magnetti Building", logo: "/logos/magnetti-building.png", filterGroup: "Prefabbricati", category: "Prefabbricati", description: "Elementi prefabbricati in calcestruzzo", isPillar: true },
  { name: "Brussi Costruzioni", logo: "/logos/brussi-costruzioni.png", filterGroup: "Costruzioni & Infrastrutture", category: "Costruzioni", description: "Impresa generale di costruzioni", isPillar: true },
  { name: "Ferro Beton", logo: "/logos/ferro-beton.png", filterGroup: "Costruzioni & Infrastrutture", category: "Strutture", description: "Strutture in calcestruzzo armato", isPillar: true },
  { name: "Opera Adesivi", logo: "/logos/opera-adesivi.png", filterGroup: "Finiture & Chimica", category: "Adesivi", description: "Adesivi e sigillanti per l'edilizia", isNew: true },
  { name: "arteMURI", logo: "/logos/artemuri.png", filterGroup: "Finiture & Chimica", category: "Finiture", description: "Finiture e decorazioni per l'edilizia" },
  { name: "Veneta Prefabbricati", logo: "/logos/veneta-prefabbricati.png", filterGroup: "Prefabbricati", category: "Prefabbricati", description: "Soluzioni prefabbricate innovative" },
  { name: "Venetasfalti", logo: "/logos/venetasfalti.png", filterGroup: "Costruzioni & Infrastrutture", category: "Infrastrutture", description: "Conglomerati bituminosi e asfalti" },
  { name: "Italcalce", logo: "/logos/italcalce.png", filterGroup: "Calcestruzzi & Calce", category: "Calce", description: "Produzione di calce e derivati" },
  { name: "ILCEV", logo: "/logos/ilcev.png", filterGroup: "Calcestruzzi & Calce", category: "Calcestruzzi", description: "Calcestruzzi e inerti" },
];

const categories = ["Tutti", ...Array.from(new Set(companies.map(c => c.category)))];

const CompaniesSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });
  const [activeFilter, setActiveFilter] = useState("Tutti");
  
  const [searchParams, setSearchParams] = useSearchParams();
  const filterParam = searchParams.get("filter");
  const location = useLocation();

  useEffect(() => {
    const groupMap: Record<string, string> = {
      "calcestruzzi-calce": "Calcestruzzi & Calce",
      "prefabbricati": "Prefabbricati",
      "costruzioni-infrastrutture": "Costruzioni & Infrastrutture",
      "tutti": "Tutti"
    };

    if (filterParam && groupMap[filterParam]) {
      setActiveFilter(groupMap[filterParam]);
    }

    // Effettua lo scroll gestendo sia "#aziende" (dal link padre) sia "#filtri-aziende" (dal mega menu)
    if (location.hash === "#aziende" || location.hash === "#filtri-aziende") {
      setTimeout(() => {
        const idToScroll = location.hash.replace("#", "");
        document.getElementById(idToScroll)?.scrollIntoView({ behavior: "smooth" });
      }, 100);
    }
  }, [filterParam, location]);

  const filtered = useMemo(() => {
    if (activeFilter === "Tutti") return companies;
    return companies.filter(c => c.category === activeFilter || c.filterGroup === activeFilter);
  }, [activeFilter]);

  const isButtonActive = (cat: string) => {
    if (activeFilter === "Tutti") return cat === "Tutti";
    if (activeFilter === cat) return true;
    
    const isMacroGroup = companies.some(c => c.filterGroup === activeFilter);
    if (isMacroGroup) {
      return companies.some(c => c.filterGroup === activeFilter && c.category === cat);
    }
    return false;
  };

  const handleCategoryClick = (cat: string) => {
    setActiveFilter(cat);
    setSearchParams({});
  };

  return (
    <section id="aziende" className="py-24 sm:py-32 bg-background relative border-t border-border/50">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/40 to-transparent" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-12">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-3 mb-6">
            <div className="h-px w-12 bg-primary" />
            <span className="font-display text-sm tracking-[0.3em] uppercase text-primary font-semibold">
              Le Nostre Anime
            </span>
            <div className="h-px w-12 bg-primary" />
          </div>
          <h2 className="font-display font-bold text-4xl sm:text-5xl md:text-6xl text-foreground mb-6">
            Unità nella <span className="text-gradient-green">diversificazione</span>
          </h2>
          <p className="text-base sm:text-lg text-muted-foreground max-w-3xl mx-auto font-light leading-relaxed">
            Dalla materia prima estratta in cava fino all'opera compiuta. Ogni azienda del Gruppo è un ingranaggio perfetto di un ecosistema industriale integrato.
          </p>
        </div>

        {/* Category Filter Bar con il nuovo ID per l'atterraggio diretto e scroll-mt-32 per non farla coprire dalla Navbar */}
        <div id="filtri-aziende" className="flex flex-wrap justify-center gap-3 mb-16 scroll-mt-32">
          {categories.map((cat) => (
            <motion.button
              key={cat}
              onClick={() => handleCategoryClick(cat)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`relative rounded-full px-6 py-2.5 text-xs font-display tracking-[0.2em] uppercase transition-all duration-300 border ${
                isButtonActive(cat)
                  ? "bg-primary text-primary-foreground border-primary shadow-green"
                  : "bg-card text-muted-foreground border-border hover:border-primary/50 hover:text-foreground"
              }`}
            >
              {cat}
            </motion.button>
          ))}
        </div>

        <div ref={ref} className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          <AnimatePresence mode="popLayout">
            {filtered.map((company, index) => (
              <motion.div
                key={company.name}
                layout
                initial={{ opacity: 0, scale: 0.9, y: 20 }}
                animate={isInView ? { opacity: 1, scale: 1, y: 0 } : {}}
                exit={{ opacity: 0, scale: 0.9, y: -20 }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                className={`group relative bg-card border p-6 transition-all duration-500 hover:shadow-green cursor-pointer flex flex-col justify-between h-full ${
                  company.isPillar ? "border-primary/30" : "border-border hover:border-primary/50"
                }`}
              >
                <div>
                  <div className="flex items-start justify-between mb-4">
                    <span className="text-xs tracking-widest uppercase text-primary font-display font-semibold">
                      {company.category}
                    </span>
                    <div className="flex items-center gap-1.5">
                      {company.isPillar && (
                        <span className="flex items-center gap-1 text-[10px] uppercase tracking-wider text-muted-foreground bg-secondary px-2.5 py-1 rounded-sm">
                          <ShieldCheck size={12} className="text-primary"/> Pillar
                        </span>
                      )}
                      {company.isNew && (
                        <span className="flex items-center gap-1 text-[10px] uppercase tracking-wider text-primary-foreground bg-primary px-2.5 py-1 rounded-sm shadow-green">
                          <Sparkles size={12}/> New
                        </span>
                      )}
                      <ExternalLink size={16} className="text-muted-foreground group-hover:text-primary transition-colors ml-1" />
                    </div>
                  </div>

                  <div className="h-20 flex items-center mb-6">
                    <img
                      src={company.logo}
                      alt={company.name}
                      className="h-16 max-w-[220px] object-contain grayscale group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-500 mx-auto"
                      onError={(e) => {
                        const target = e.target as HTMLImageElement;
                        target.style.display = 'none';
                        target.nextElementSibling?.classList.remove('hidden');
                      }}
                    />
                    <span className="hidden font-display font-bold text-xl text-foreground group-hover:text-primary transition-colors text-center w-full">
                      {company.name}
                    </span>
                  </div>
                </div>

                <div>
                  <p className="text-sm text-muted-foreground leading-relaxed group-hover:text-foreground transition-colors">
                    {company.description}
                  </p>
                </div>

                <div className="absolute bottom-0 left-0 w-0 h-1 bg-gradient-to-r from-primary to-green-glow group-hover:w-full transition-all duration-500" />
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};

export default CompaniesSection;