import { motion, useInView } from "framer-motion";
import { useRef, useEffect, useState } from "react";

const stats = [
  { value: 60, suffix: "+", label: "Anni di Attività", description: "Dal 1963 al servizio dell'edilizia" },
  { value: 20, suffix: "+", label: "Aziende del Gruppo", description: "Un ecosistema integrato" },
  { value: 150, suffix: "+", label: "Sedi Operative", description: "Presenti su tutto il territorio" },
  { value: 2000, suffix: "+", label: "Collaboratori", description: "Professionisti specializzati" },
];

const CounterNumber = ({ value, suffix, isInView }: { value: number; suffix: string; isInView: boolean }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!isInView) return;
    let start = 0;
    const duration = 2000;
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
    <span className="font-display font-bold text-4xl sm:text-5xl md:text-6xl text-gradient-green">
      {count.toLocaleString()}{suffix}
    </span>
  );
};

const StatsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="numeri" className="py-16 sm:py-32 bg-gradient-concrete relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-5 hidden sm:block">
        <div className="absolute top-0 left-1/4 w-px h-full bg-foreground" />
        <div className="absolute top-0 left-2/4 w-px h-full bg-foreground" />
        <div className="absolute top-0 left-3/4 w-px h-full bg-foreground" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-12">
        <div className="text-center mb-20">
          <div className="flex items-center justify-center gap-3 mb-6">
            <div className="h-px w-12 bg-primary" />
            <span className="font-display text-sm tracking-[0.3em] uppercase text-primary">
              I Numeri
            </span>
            <div className="h-px w-12 bg-primary" />
          </div>
          <h2 className="font-display font-bold text-3xl sm:text-4xl md:text-5xl text-foreground">
            La forza di un <span className="text-gradient-green">grande gruppo</span>
          </h2>
        </div>

        <div ref={ref} className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className="text-center p-4 sm:p-8 border border-border bg-card/50 backdrop-blur-sm"
            >
              <CounterNumber value={stat.value} suffix={stat.suffix} isInView={isInView} />
              <div className="mt-4 font-display font-semibold text-foreground tracking-wide">
                {stat.label}
              </div>
              <div className="mt-2 text-sm text-muted-foreground">
                {stat.description}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
