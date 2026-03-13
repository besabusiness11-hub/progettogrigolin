import { motion, useInView } from "framer-motion";
import { useRef, useEffect, useState } from "react";

const stats = [
  { value: 60, suffix: "+", label: "Anni di Attività", description: "Dal 1963 al servizio dell'edilizia" },
  { value: 20, suffix: "+", label: "Aziende del Gruppo", description: "Un ecosistema integrato" },
  { value: 150, suffix: "+", label: "Sedi Operative", description: "In Italia ed Europa" },
  { value: 2000, suffix: "+", label: "Collaboratori", description: "Professionisti specializzati" },
];

const CounterNumber = ({ value, suffix, isInView }: { value: number; suffix: string; isInView: boolean }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!isInView) return;
    let start = 0;
    const duration = 2500; 
    const increment = value / (duration / 16);
    
    const timer = setInterval(() => {
      start += increment;
      if (start >= value) {
        setCount(value);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);
    
    return () => clearInterval(timer);
  }, [isInView, value]);

  return (
    <span className="font-display font-bold text-5xl sm:text-6xl md:text-7xl text-gradient-green tracking-tighter">
      {count.toLocaleString()}{suffix}
    </span>
  );
};

const StatsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="numeri" className="py-20 sm:py-28 bg-background relative overflow-hidden border-y border-border/50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-12 relative z-10">
        <div ref={ref} className="grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={isInView ? { opacity: 1, scale: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="text-center p-6 sm:p-8 relative group"
            >
              <CounterNumber value={stat.value} suffix={stat.suffix} isInView={isInView} />
              
              <div className="mt-4 font-display font-semibold text-foreground uppercase tracking-widest text-sm sm:text-base">
                {stat.label}
              </div>
              <div className="mt-2 text-xs sm:text-sm text-muted-foreground font-light">
                {stat.description}
              </div>
              
              {/* Divider per separare le colonne su desktop */}
              {index !== stats.length - 1 && (
                <div className="absolute -right-3 top-1/4 bottom-1/4 w-px bg-border hidden lg:block" />
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;