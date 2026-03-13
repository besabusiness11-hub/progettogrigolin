import { motion } from "framer-motion";
import heroImg from "@/assets/hero-construction.jpg"; 

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-background">
      {/* Background image with Ken Burns effect */}
      <div className="absolute inset-0 overflow-hidden">
        <img
          src={heroImg}
          alt="Cantiere edile moderno - Gruppo Grigolin"
          className="w-full h-full object-cover animate-ken-burns opacity-30" 
        />
        {/* Light overlay gradients per garantire la leggibilità del testo scuro */}
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/80 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-r from-background/90 via-background/50 to-transparent" />
      </div>

      {/* Content Immersive Typographic */}
      <div className="relative container mx-auto px-4 sm:px-6 lg:px-12 z-10">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 0.2, ease: "easeOut" }}
          className="max-w-4xl"
        >
          <div className="flex items-center gap-3 mb-6">
            <div className="h-px w-12 bg-primary" />
            <span className="font-display text-sm tracking-[0.3em] uppercase text-primary font-semibold">
              Ecosistema Industriale
            </span>
          </div>

          <h1 className="font-display font-bold text-5xl sm:text-6xl md:text-8xl lg:text-9xl leading-[0.9] mb-8 tracking-tight">
            <span className="text-foreground">Integrità</span><br />
            <span className="text-foreground">della materia,</span><br />
            <span className="text-gradient-green">Forza del Gruppo.</span>
          </h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1 }}
            className="text-lg md:text-2xl text-muted-foreground max-w-2xl font-light leading-relaxed mb-10"
          >
            Dal 1963 controlliamo l'intera filiera: dall'estrazione alla produzione, fino alle grandi infrastrutture.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.2 }}
            className="flex flex-col sm:flex-row gap-4"
          >
            <a
              href="#aziende"
              className="bg-primary text-primary-foreground font-display text-sm tracking-widest uppercase px-8 py-4 hover:bg-green-glow transition-all duration-300 text-center hover:shadow-green"
            >
              Esplora la Filiera
            </a>
          </motion.div>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 1 }}
          className="absolute bottom-12 right-12 hidden lg:flex flex-col items-center gap-4"
        >
          <span className="font-display text-xs tracking-[0.3em] uppercase text-muted-foreground rotate-90 origin-center translate-y-8">
            Scroll
          </span>
          <div className="w-px h-24 bg-gradient-to-b from-primary via-primary/50 to-transparent mt-12" />
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;