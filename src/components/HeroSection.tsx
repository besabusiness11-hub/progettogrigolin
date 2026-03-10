import { motion } from "framer-motion";
import heroImg from "@/assets/hero-construction.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-end overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0">
        <img
          src={heroImg}
          alt="Cantiere edile moderno al tramonto"
          className="w-full h-full object-cover"
        />
        {/* Dark overlay with gradient */}
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/70 to-background/30" />
        <div className="absolute inset-0 bg-gradient-to-r from-background/80 to-transparent" />
      </div>

      {/* Content */}
      <div className="relative container mx-auto px-4 sm:px-6 lg:px-12 pb-16 sm:pb-24 pt-28 sm:pt-40">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="max-w-3xl"
        >
          <div className="flex items-center gap-3 mb-4 sm:mb-6">
            <div className="h-px w-8 sm:w-12 bg-primary" />
            <span className="font-display text-xs sm:text-sm tracking-[0.3em] uppercase text-primary">
              Dal 1963
            </span>
          </div>

          <h1 className="font-display font-bold text-4xl sm:text-5xl md:text-7xl lg:text-8xl leading-[0.95] mb-4 sm:mb-6">
            <span className="text-foreground">Conservare</span>
            <br />
            <span className="text-foreground">il passato,</span>
            <br />
            <span className="text-gradient-green">costruire</span>
            <br />
            <span className="text-gradient-green">il futuro.</span>
          </h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1 }}
            className="text-base sm:text-lg md:text-xl text-secondary-foreground max-w-xl leading-relaxed mb-8 sm:mb-10"
          >
            Un Gruppo di aziende specializzate nel mondo dell'edilizia e delle
            costruzioni — dalla progettazione, alla produzione, alla messa in opera.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.3 }}
            className="flex flex-col sm:flex-row gap-3 sm:gap-4"
          >
            <a
              href="#aziende"
              className="bg-primary text-primary-foreground font-display text-xs sm:text-sm tracking-widest uppercase px-6 sm:px-8 py-3.5 sm:py-4 hover:bg-green-glow transition-colors duration-300 text-center"
            >
              Scopri il Gruppo
            </a>
            <a
              href="#contatti"
              className="border border-foreground/20 text-foreground font-display text-xs sm:text-sm tracking-widest uppercase px-6 sm:px-8 py-3.5 sm:py-4 hover:border-primary hover:text-primary transition-colors duration-300 text-center"
            >
              Contattaci
            </a>
          </motion.div>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2 }}
          className="absolute bottom-8 right-12 hidden lg:flex flex-col items-center gap-2"
        >
          <span className="font-display text-xs tracking-widest uppercase text-muted-foreground rotate-90 origin-center translate-y-8">
            Scroll
          </span>
          <div className="w-px h-16 bg-gradient-to-b from-primary to-transparent mt-12" />
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
