import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import concreteImg from "@/assets/concrete-texture.jpg";

const AboutSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="chi-siamo" className="py-16 sm:py-32 bg-gradient-concrete relative overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-12">
        <div ref={ref} className="grid lg:grid-cols-2 gap-10 lg:gap-24 items-center">
          {/* Text */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <div className="flex items-center gap-3 mb-4 sm:mb-6">
              <div className="h-px w-8 sm:w-12 bg-primary" />
              <span className="font-display text-xs sm:text-sm tracking-[0.3em] uppercase text-primary">
                Chi Siamo
              </span>
            </div>

            <h2 className="font-display font-bold text-3xl sm:text-4xl md:text-5xl leading-tight mb-6 sm:mb-8 text-foreground">
              Leader nel settore
              <br />
              <span className="text-gradient-green">da 60 anni</span>
            </h2>

            <div className="space-y-4 sm:space-y-6 line-accent pl-4 sm:pl-6">
              <p className="text-sm sm:text-base text-secondary-foreground leading-relaxed">
                Da oltre sessant'anni, il Gruppo Grigolin rappresenta la storia e il futuro
                dell'edilizia in Italia. Leader nel settore dei materiali per le costruzioni
                grazie alla sua presenza diffusa e radicata sul territorio.
              </p>
              <p className="text-sm sm:text-base text-secondary-foreground leading-relaxed">
                Il Gruppo offre prodotti innovativi e di qualità per fornire soluzioni e
                applicazioni integrate per la building community, garantendo una competenza
                a 360° agli operatori del mercato.
              </p>
            </div>

            <div className="mt-8 sm:mt-10 flex gap-8 sm:gap-12">
              <div>
                <div className="font-display font-bold text-2xl sm:text-3xl text-primary">20+</div>
                <div className="text-xs sm:text-sm text-muted-foreground mt-1">Aziende nel gruppo</div>
              </div>
              <div>
                <div className="font-display font-bold text-2xl sm:text-3xl text-primary">60+</div>
                <div className="text-xs sm:text-sm text-muted-foreground mt-1">Anni di esperienza</div>
              </div>
              <div>
                <div className="font-display font-bold text-2xl sm:text-3xl text-primary">360°</div>
                <div className="text-xs sm:text-sm text-muted-foreground mt-1">Competenza integrata</div>
              </div>
            </div>
          </motion.div>

          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="relative overflow-hidden">
              <img
                src={concreteImg}
                alt="Texture cemento industriale"
                className="w-full h-[300px] sm:h-[500px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/60 to-transparent" />
            </div>
            {/* Decorative element */}
            <div className="absolute -bottom-4 -right-4 w-24 h-24 border-2 border-primary/30" />
            <div className="absolute -top-4 -left-4 w-16 h-16 bg-primary/10" />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
