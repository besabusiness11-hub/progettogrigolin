import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { ArrowUpRight, Building, Construction, MapPin } from "lucide-react";

// Dati di esempio per i progetti (Sostituire le immagini con i veri cantieri Grigolin)
const projects = [
  {
    id: 1,
    title: "Nuovo Polo Logistico Nord Est",
    category: "Edilizia Industriale",
    location: "Veneto, Italia",
    image: "https://images.unsplash.com/photo-1541885071989-8ac978b0e77d?q=80&w=2000&auto=format&fit=crop", 
    companies: ["Magnetti Building", "SuperBeton"],
    description: "Realizzazione di oltre 50.000 mq di capannoni industriali con strutture prefabbricate ad alta efficienza energetica e getti in opera continui.",
  },
  {
    id: 2,
    title: "Ampliamento Rete Autostradale",
    category: "Grandi Infrastrutture",
    location: "Lombardia, Italia",
    image: "https://images.unsplash.com/photo-1545459720-aac8509eb02c?q=80&w=2000&auto=format&fit=crop",
    companies: ["Venetasfalti", "Brussi Costruzioni", "ILCEV"],
    description: "Fornitura di conglomerati bituminosi speciali e gestione del cantiere per il rifacimento del manto stradale ad alto scorrimento.",
  },
  {
    id: 3,
    title: "Complesso Residenziale Green",
    category: "Edilizia Civile",
    location: "Milano, Italia",
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2000&auto=format&fit=crop",
    companies: ["TesiSystem", "Fornaci Calce Grigolin", "arteMURI"],
    description: "Soluzioni abitative in classe A4 realizzate con sistemi costruttivi integrati, intonaci termici e finiture di pregio ecosostenibili.",
  },
  {
    id: 4,
    title: "Ospedale Regionale",
    category: "Edilizia Pubblica",
    location: "Emilia-Romagna, Italia",
    image: "https://images.unsplash.com/photo-1504307651254-35680f356f58?q=80&w=2000&auto=format&fit=crop",
    companies: ["Ferro Beton", "SuperBeton"],
    description: "Fornitura di strutture in calcestruzzo armato e getti speciali ad altissima resistenza per padiglioni sanitari e blocchi operatori.",
  }
];

const ProjectsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="progetti" className="py-24 sm:py-32 bg-secondary/30 relative overflow-hidden border-t border-border/50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-12 mb-12 sm:mb-16">
        <motion.div 
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="flex flex-col md:flex-row md:items-end justify-between gap-6"
        >
          <div className="max-w-2xl">
            <div className="flex items-center gap-3 mb-6">
              <div className="h-px w-12 bg-primary" />
              <span className="font-display text-sm tracking-[0.3em] uppercase text-primary font-semibold">
                Case History
              </span>
            </div>
            <h2 className="font-display font-bold text-4xl sm:text-5xl leading-tight text-foreground">
              Costruiamo opere <span className="text-gradient-green">destinate a durare.</span>
            </h2>
          </div>
          
          <div className="flex items-center gap-2">
            <span className="text-sm font-display tracking-widest uppercase text-muted-foreground hidden sm:block mr-2">Scorri per esplorare</span>
            <ArrowUpRight className="text-primary rotate-45 sm:rotate-90 animate-pulse" />
          </div>
        </motion.div>
      </div>

      {/* Slider Orizzontale Custom */}
      <div className="w-full overflow-x-auto pb-12 pt-4 px-4 sm:px-6 lg:px-12 snap-x snap-mandatory scrollbar-hide" style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}>
        <div className="flex gap-6 sm:gap-8 w-max">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, x: 50 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className="group relative w-[85vw] sm:w-[500px] lg:w-[600px] snap-center shrink-0 rounded-2xl overflow-hidden bg-card border border-border hover:border-primary/50 transition-colors duration-500"
            >
              {/* Immagine Progetto */}
              <div className="relative h-64 sm:h-80 overflow-hidden bg-muted">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover grayscale opacity-80 group-hover:grayscale-0 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                
                {/* Categoria & Location */}
                <div className="absolute top-6 left-6 flex flex-wrap gap-2">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-primary/90 backdrop-blur-md text-primary-foreground text-xs font-display tracking-wider uppercase rounded-sm shadow-sm">
                    <Building size={12} /> {project.category}
                  </span>
                </div>
                
                <div className="absolute bottom-6 left-6 right-6 flex items-end justify-between">
                  <div>
                    <h3 className="text-white font-display text-2xl sm:text-3xl font-bold mb-2">
                      {project.title}
                    </h3>
                    <div className="flex items-center gap-1.5 text-white/70 text-sm">
                      <MapPin size={14} /> {project.location}
                    </div>
                  </div>
                  <div className="w-10 h-10 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center text-white opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 border border-white/20">
                    <ArrowUpRight size={20} />
                  </div>
                </div>
              </div>

              {/* Dettagli & Aziende Coinvolte */}
              <div className="p-6 sm:p-8">
                <div className="mb-6">
                  <span className="text-xs font-display tracking-widest uppercase text-muted-foreground block mb-3">
                    Aziende del Gruppo coinvolte
                  </span>
                  <div className="flex flex-wrap gap-2">
                    {project.companies.map((company) => (
                      <span key={company} className="inline-flex items-center gap-1.5 px-3 py-1 bg-secondary text-secondary-foreground text-xs font-semibold rounded-sm border border-border/50">
                        <Construction size={12} className="text-primary" /> {company}
                      </span>
                    ))}
                  </div>
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed line-clamp-3">
                  {project.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;