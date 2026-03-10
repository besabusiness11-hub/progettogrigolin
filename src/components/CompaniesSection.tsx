import { motion, useInView, AnimatePresence } from "framer-motion";
import { useRef, useState, useMemo } from "react";
import { ExternalLink } from "lucide-react";

const companies = [
  { name: "SuperBeton", logo: "/logos/superbeton.png", category: "Calcestruzzi", description: "Calcestruzzi preconfezionati di alta qualità" },
  { name: "Fornaci Calce Grigolin", logo: "/logos/fornaci-calce-grigolin.png", category: "Calce & Cemento", description: "Produzione di calce, cemento e malte" },
  { name: "TesiSystem", logo: "/logos/tesisystem.png", category: "Sistemi Edilizi", description: "Soluzioni integrate per l'edilizia moderna" },
  { name: "Magnetti Building", logo: "/logos/magnetti-building.png", category: "Prefabbricati", description: "Elementi prefabbricati in calcestruzzo" },
  { name: "Brussi Costruzioni", logo: "/logos/brussi-costruzioni.png", category: "Costruzioni", description: "Impresa generale di costruzioni" },
  { name: "Ferro Beton", logo: "/logos/ferro-beton.png", category: "Strutture", description: "Strutture in calcestruzzo armato" },
  { name: "arteMURI", logo: "/logos/artemuri.png", category: "Finiture", description: "Finiture e decorazioni per l'edilizia" },
  { name: "Veneta Prefabbricati", logo: "/logos/veneta-prefabbricati.png", category: "Prefabbricati", description: "Soluzioni prefabbricate innovative" },
  { name: "Venetasfalti", logo: "/logos/venetasfalti.png", category: "Infrastrutture", description: "Conglomerati bituminosi e asfalti" },
  { name: "Italcalce", logo: "/logos/italcalce.png", category: "Calce", description: "Produzione di calce e derivati" },
  { name: "Opera Adesivi", logo: "/logos/opera-adesivi.png", category: "Adesivi", description: "Adesivi e sigillanti per l'edilizia" },
  { name: "ILCEV", logo: "/logos/ilcev.png", category: "Calcestruzzi", description: "Calcestruzzi e inerti" },
];

const categories = ["Tutti", ...Array.from(new Set(companies.map(c => c.category)))];

const CompaniesSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });
  const [activeCategory, setActiveCategory] = useState("Tutti");

  const filtered = useMemo(
    () => activeCategory === "Tutti" ? companies : companies.filter(c => c.category === activeCategory),
    [activeCategory]
  );

  return (
    <section id="aziende" className="py-16 sm:py-32 bg-background relative">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/40 to-transparent" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-12">
        <div className="text-center mb-8 sm:mb-12">
          <div className="flex items-center justify-center gap-3 mb-4 sm:mb-6">
            <div className="h-px w-8 sm:w-12 bg-primary" />
            <span className="font-display text-xs sm:text-sm tracking-[0.3em] uppercase text-primary">
              Il Gruppo
            </span>
            <div className="h-px w-8 sm:w-12 bg-primary" />
          </div>
          <h2 className="font-display font-bold text-3xl sm:text-4xl md:text-5xl text-foreground mb-3 sm:mb-4">
            Le nostre <span className="text-gradient-green">aziende</span>
          </h2>
          <p className="text-sm sm:text-base text-muted-foreground max-w-2xl mx-auto">
            Un ecosistema di eccellenze specializzate che coprono l'intera filiera dell'edilizia
          </p>
        </div>

        {/* Category Filter Bar */}
        <div className="flex flex-wrap justify-center gap-3 mb-14">
          {categories.map((cat) => (
            <motion.button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              className={`relative rounded-full px-6 py-2.5 text-xs font-display tracking-[0.2em] uppercase transition-colors duration-300 border ${
                activeCategory === cat
                  ? "bg-primary text-primary-foreground border-primary shadow-green"
                  : "bg-transparent text-muted-foreground border-border/50 hover:border-primary/50 hover:text-foreground"
              }`}
            >
              {cat}
            </motion.button>
          ))}
        </div>

        <div ref={ref} className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          <AnimatePresence mode="popLayout">
            {filtered.map((company, index) => (
              <motion.div
                key={company.name}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.35, delay: index * 0.04 }}
                className="group relative bg-card border border-border hover:border-primary/50 p-6 transition-all duration-500 hover:shadow-green cursor-pointer"
              >
                <div className="flex items-start justify-between mb-4">
                  <span className="text-xs tracking-widest uppercase text-primary font-display">
                    {company.category}
                  </span>
                  <ExternalLink size={14} className="text-muted-foreground group-hover:text-primary transition-colors" />
                </div>
                <div className="h-20 flex items-center mb-2">
                  <img
                    src={company.logo}
                    alt={company.name}
                    className="h-16 max-w-[220px] object-contain transition-all"
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      target.style.display = 'none';
                      target.nextElementSibling?.classList.remove('hidden');
                    }}
                  />
                  <span className="hidden font-display font-semibold text-lg text-foreground group-hover:text-primary transition-colors">
                    {company.name}
                  </span>
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {company.description}
                </p>
                <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary group-hover:w-full transition-all duration-500" />
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};

export default CompaniesSection;
