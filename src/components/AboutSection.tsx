import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { Pickaxe, Factory, Building2, Hammer } from "lucide-react";
import concreteImg from "@/assets/concrete-texture.jpg"; 

const filieraSteps = [
  {
    id: "estrazione",
    icon: Pickaxe,
    title: "01. Estrazione & Inerti",
    description: "Tutto inizia dalla materia prima. Gestiamo direttamente le cave per garantire la massima qualità e purezza degli inerti fin dall'origine del processo.",
  },
  {
    id: "produzione",
    icon: Factory,
    title: "02. Produzione Materiali",
    description: "Trasformiamo gli inerti in calce, cemento, asfalti e adesivi attraverso impianti all'avanguardia che ottimizzano i consumi energetici e le rese.",
  },
  {
    id: "prefabbricazione",
    icon: Building2,
    title: "03. Prefabbricazione",
    description: "Ingegnerizziamo elementi strutturali complessi in calcestruzzo, offrendo soluzioni costruttive rapide, sicure e altamente scalabili.",
  },
  {
    id: "costruzione",
    icon: Hammer,
    title: "04. Messa in Opera",
    description: "Le nostre imprese generali di costruzione chiudono il cerchio, realizzando grandi infrastrutture, poli logistici e opere civili chiavi in mano.",
  },
];

const AboutSection = () => {
  const [activeStep, setActiveStep] = useState(0);

  return (
    <section id="filiera" className="py-24 sm:py-32 bg-card relative border-t border-border/50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-12">
        
        {/* Intestazione fissa in alto */}
        <div className="mb-16 md:mb-24 text-center">
          <div className="flex items-center justify-center gap-3 mb-6">
            <div className="h-px w-12 bg-primary" />
            <span className="font-display text-sm tracking-[0.3em] uppercase text-primary font-semibold">
              Il Processo
            </span>
            <div className="h-px w-12 bg-primary" />
          </div>
          <h2 className="font-display font-bold text-4xl sm:text-5xl leading-tight mb-6 text-foreground">
            Dalla materia prima <span className="text-gradient-green">all'infrastruttura.</span>
          </h2>
          <p className="text-base text-muted-foreground leading-relaxed max-w-2xl mx-auto font-light">
            Il vero vantaggio competitivo del Gruppo Grigolin è l'integrazione verticale totale. Controlliamo ogni singola fase del processo costruttivo. Scorri per scoprire la nostra filiera.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-start relative">
          
          {/* Left: Scrollable Text Items */}
          <div className="space-y-0 relative pb-32">
            {/* Linea verticale decorativa */}
            <div className="absolute left-[27px] top-12 bottom-32 w-0.5 bg-border/50 hidden sm:block" />
            
            {filieraSteps.map((step, index) => {
              const isActive = activeStep === index;
              return (
                <motion.div
                  key={step.id}
                  // Questo scatena l'evento quando il blocco passa per il centro dello schermo (-50% top, -50% bottom)
                  onViewportEnter={() => setActiveStep(index)}
                  viewport={{ margin: "-50% 0px -50% 0px" }}
                  className={`relative w-full flex items-start gap-6 sm:gap-8 py-20 transition-all duration-700 ${
                    isActive ? "opacity-100" : "opacity-30 grayscale"
                  }`}
                >
                  <div className={`relative z-10 w-14 h-14 shrink-0 rounded-full flex items-center justify-center transition-all duration-500 ${
                    isActive ? "bg-primary text-primary-foreground shadow-green scale-110" : "bg-card border-2 border-border text-muted-foreground"
                  }`}>
                    <step.icon size={24} />
                  </div>
                  <div className="pt-2">
                    <h3 className={`font-display font-bold text-2xl sm:text-3xl mb-4 transition-colors duration-500 ${
                      isActive ? "text-primary" : "text-foreground"
                    }`}>
                      {step.title}
                    </h3>
                    <p className="text-base sm:text-lg text-muted-foreground leading-relaxed font-light">
                      {step.description}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* Right: Sticky Image Display */}
          <div className="hidden lg:block sticky top-32 h-[calc(100vh-16rem)] max-h-[600px]">
            <div className="relative w-full h-full overflow-hidden rounded-2xl bg-muted border border-border">
              <AnimatePresence mode="wait">
                <motion.img
                  key={activeStep}
                  src={concreteImg} // Nota: per un effetto wow, inserisci 4 immagini diverse nell'array filieraSteps e richiama step.image qui
                  alt={filieraSteps[activeStep].title}
                  initial={{ opacity: 0, scale: 1.05 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.6, ease: "easeInOut" }}
                  className="absolute inset-0 w-full h-full object-cover mix-blend-multiply opacity-80"
                />
              </AnimatePresence>
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
              
              <div className="absolute bottom-10 left-10 right-10">
                <motion.div 
                  key={`badge-${activeStep}`}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="inline-flex items-center gap-2 px-3 py-1 bg-primary/90 backdrop-blur-sm text-primary-foreground text-xs font-display tracking-widest uppercase rounded-sm mb-4"
                >
                  Fase {activeStep + 1}
                </motion.div>
                <motion.h4 
                  key={`title-${activeStep}`}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  className="text-white font-display text-4xl font-bold leading-tight"
                >
                  {filieraSteps[activeStep].title.split('. ')[1]}
                </motion.h4>
              </div>
            </div>
            
            {/* Tech Decoration */}
            <div className="absolute -bottom-6 -right-6 w-32 h-32 border-b-2 border-r-2 border-primary/30" />
          </div>

        </div>
      </div>
    </section>
  );
};

export default AboutSection;