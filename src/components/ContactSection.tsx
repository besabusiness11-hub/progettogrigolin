import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Link } from "react-router-dom";
import { MapPin, Phone, Mail, ArrowRight, Send, Leaf, Users } from "lucide-react";
import GlobeMap from "./GlobeMap"; // <-- Importiamo il globo

const contactInfo = [
  { icon: MapPin, label: "Sede Centrale", value: "Via Ritonda, 33 — 37047 San Bonifacio (VR)", href: "https://maps.google.com/?q=Via+Ritonda+33+San+Bonifacio+VR" },
  { icon: Phone, label: "Telefono", value: "+39 045 7610500", href: "tel:+390457610500" },
  { icon: Mail, label: "Email", value: "info@gruppogrigolin.it", href: "mailto:info@gruppogrigolin.it" },
];

const ContactSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [focusedField, setFocusedField] = useState<string | null>(null);

  const inputBase = "w-full bg-transparent border-b-2 border-border px-1 py-3 text-sm text-foreground placeholder:text-muted-foreground/60 focus:border-primary focus:outline-none transition-all duration-300 font-body";

  return (
    <section id="contatti" className="py-24 sm:py-32 bg-background relative overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/40 to-transparent" />
      <div className="absolute -right-40 top-20 w-80 h-80 bg-primary/5 rounded-full blur-3xl hidden sm:block pointer-events-none" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-12" ref={ref}>
        
        {/* TOP SPLIT: Sustainability & HR Calls to Action */}
        <motion.div 
          className="grid md:grid-cols-2 gap-6 mb-24 md:mb-32"
          initial={{ opacity: 0, y: 30 }} 
          animate={isInView ? { opacity: 1, y: 0 } : {}} 
          transition={{ duration: 0.8, delay: 0.1 }}
        >
          <Link to="/sostenibilita" className="group flex items-center justify-between p-8 rounded-2xl bg-secondary/30 border border-border hover:border-primary/30 transition-all duration-300">
            <div className="flex items-center gap-6">
              <div className="w-14 h-14 rounded-full bg-white flex items-center justify-center shadow-sm">
                <Leaf className="text-primary" size={24} />
              </div>
              <div>
                <h4 className="font-display font-bold text-xl text-foreground group-hover:text-primary transition-colors">Sostenibilità Integrata</h4>
                <p className="text-sm text-muted-foreground mt-1">Scopri le nostre azioni per ridurre la CO2 e riciclare i materiali.</p>
              </div>
            </div>
            <ArrowRight className="text-muted-foreground group-hover:text-primary group-hover:translate-x-2 transition-transform" />
          </Link>

          <Link to="/careers" className="group flex items-center justify-between p-8 rounded-2xl bg-[#0a0f0d] border border-transparent hover:border-primary/30 transition-all duration-300">
            <div className="flex items-center gap-6">
              <div className="w-14 h-14 rounded-full bg-white/10 flex items-center justify-center shadow-sm">
                <Users className="text-white" size={24} />
              </div>
              <div>
                <h4 className="font-display font-bold text-xl text-white group-hover:text-primary transition-colors">Lavora con Noi</h4>
                <p className="text-sm text-white/60 mt-1">Entra a far parte di un ecosistema industriale in continua crescita.</p>
              </div>
            </div>
            <ArrowRight className="text-white/60 group-hover:text-primary group-hover:translate-x-2 transition-transform" />
          </Link>
        </motion.div>

        {/* Header Contatti */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.3 }}
        >
          <div className="flex items-center justify-center gap-3 mb-6">
            <div className="h-px w-12 bg-primary" />
            <span className="font-display text-sm tracking-[0.3em] uppercase text-primary font-semibold">
              Connessioni
            </span>
            <div className="h-px w-12 bg-primary" />
          </div>
          <h2 className="font-display font-bold text-4xl sm:text-5xl md:text-6xl text-foreground mb-4">
            Costruiamo insieme il <span className="text-gradient-green">futuro.</span>
          </h2>
        </motion.div>

        {/* BOTTOM SPLIT: Info & Form */}
        <div className="grid lg:grid-cols-5 gap-12 lg:gap-20">
          
          {/* Left: Info & 3D Globe */}
          <motion.div 
            className="lg:col-span-2 flex flex-col gap-4" 
            initial={{ opacity: 0, x: -40 }} 
            animate={isInView ? { opacity: 1, x: 0 } : {}} 
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            {contactInfo.map((item) => (
              <a
                key={item.label} href={item.href} target={item.icon === MapPin ? "_blank" : undefined} rel={item.icon === MapPin ? "noopener noreferrer" : undefined}
                className="group relative flex items-start gap-5 p-6 rounded-xl border border-border bg-card hover:border-primary/40 hover:shadow-green transition-all duration-500"
              >
                <div className="w-12 h-12 rounded-lg bg-primary/5 group-hover:bg-primary/10 flex items-center justify-center shrink-0 transition-colors">
                  <item.icon size={20} className="text-primary" />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="font-display font-semibold text-foreground text-sm mb-1">{item.label}</div>
                  <div className="text-sm text-muted-foreground leading-relaxed">{item.value}</div>
                </div>
              </a>
            ))}
            
            {/* Il nostro nuovo fantastico Globo 3D */}
            <div className="relative mt-4 h-64 lg:h-auto lg:flex-1 w-full">
              <GlobeMap />
            </div>
            
          </motion.div>

          {/* Right: Form */}
          <motion.div 
            className="lg:col-span-3" 
            initial={{ opacity: 0, x: 40 }} 
            animate={isInView ? { opacity: 1, x: 0 } : {}} 
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            <div className="relative p-8 lg:p-12 rounded-2xl border border-border bg-card shadow-sm h-full">
              <div className="absolute top-0 left-0 w-16 h-16 border-t-2 border-l-2 border-primary/20 rounded-tl-2xl pointer-events-none" />
              
              <h3 className="font-display font-bold text-2xl text-foreground mb-2">Richiedi informazioni commerciali</h3>
              <p className="text-muted-foreground text-sm mb-10">I nostri consulenti tecnici ti risponderanno entro 24 ore.</p>

              <form className="space-y-8">
                <div className="grid sm:grid-cols-2 gap-8">
                  {['Nome', 'Cognome'].map((field) => (
                    <div className="relative" key={field}>
                      <input type="text" placeholder={field} className={inputBase} onFocus={() => setFocusedField(field.toLowerCase())} onBlur={() => setFocusedField(null)} />
                      <motion.div className="absolute bottom-0 left-0 h-0.5 bg-primary" initial={{ width: "0%" }} animate={{ width: focusedField === field.toLowerCase() ? "100%" : "0%" }} transition={{ duration: 0.3 }} />
                    </div>
                  ))}
                </div>
                {['Email', 'Azienda'].map((field) => (
                  <div className="relative" key={field}>
                    <input type={field === 'Email' ? 'email' : 'text'} placeholder={field} className={inputBase} onFocus={() => setFocusedField(field.toLowerCase())} onBlur={() => setFocusedField(null)} />
                    <motion.div className="absolute bottom-0 left-0 h-0.5 bg-primary" initial={{ width: "0%" }} animate={{ width: focusedField === field.toLowerCase() ? "100%" : "0%" }} transition={{ duration: 0.3 }} />
                  </div>
                ))}
                <div className="relative">
                  <textarea rows={4} placeholder="Dettagli del progetto..." className={`${inputBase} resize-none`} onFocus={() => setFocusedField("messaggio")} onBlur={() => setFocusedField(null)} />
                  <motion.div className="absolute bottom-0 left-0 h-0.5 bg-primary" initial={{ width: "0%" }} animate={{ width: focusedField === "messaggio" ? "100%" : "0%" }} transition={{ duration: 0.3 }} />
                </div>
                <button type="submit" className="w-full bg-primary text-primary-foreground font-display text-sm tracking-widest uppercase py-4 rounded-xl hover:bg-green-glow transition-colors hover:shadow-green flex justify-center items-center gap-3">
                  Invia Richiesta <Send size={16} />
                </button>
              </form>
            </div>
          </motion.div>
        </div>

      </div>
    </section>
  );
};

export default ContactSection;