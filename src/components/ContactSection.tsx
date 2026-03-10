import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { MapPin, Phone, Mail, ArrowRight, Send } from "lucide-react";

const contactInfo = [
  {
    icon: MapPin,
    label: "Sede Centrale",
    value: "Via Ritonda, 33 — 37047 San Bonifacio (VR)",
    href: "https://maps.google.com/?q=Via+Ritonda+33+San+Bonifacio+VR",
  },
  {
    icon: Phone,
    label: "Telefono",
    value: "+39 045 7610500",
    href: "tel:+390457610500",
  },
  {
    icon: Mail,
    label: "Email",
    value: "info@gruppogrigolin.it",
    href: "mailto:info@gruppogrigolin.it",
  },
];

const ContactSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [focusedField, setFocusedField] = useState<string | null>(null);

  const inputBase =
    "w-full bg-transparent border-b-2 border-border px-1 py-3 text-sm text-foreground placeholder:text-muted-foreground/60 focus:border-primary focus:outline-none transition-all duration-300 font-body";

  return (
    <section id="contatti" className="py-16 sm:py-32 bg-background relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/40 to-transparent" />
      <div className="absolute -right-40 top-20 w-80 h-80 bg-primary/5 rounded-full blur-3xl hidden sm:block" />
      <div className="absolute -left-20 bottom-20 w-60 h-60 bg-accent/40 rounded-full blur-3xl hidden sm:block" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-12" ref={ref}>
        {/* Header */}
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
        >
          <div className="flex items-center justify-center gap-3 mb-6">
            <div className="h-px w-12 bg-primary" />
            <span className="font-display text-sm tracking-[0.3em] uppercase text-primary">
              Contatti
            </span>
            <div className="h-px w-12 bg-primary" />
          </div>
          <h2 className="font-display font-bold text-3xl sm:text-4xl md:text-6xl text-foreground mb-2 sm:mb-4">
            Parliamo del tuo
          </h2>
          <h2 className="font-display font-bold text-3xl sm:text-4xl md:text-6xl text-gradient-green">
            prossimo progetto
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-8 lg:gap-20">
          {/* Left — Contact cards */}
          <motion.div
            className="lg:col-span-2 flex flex-col gap-4"
            initial={{ opacity: 0, x: -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            {contactInfo.map((item, i) => (
              <motion.a
                key={item.label}
                href={item.href}
                target={item.icon === MapPin ? "_blank" : undefined}
                rel={item.icon === MapPin ? "noopener noreferrer" : undefined}
                className="group relative flex items-start gap-5 p-6 rounded-2xl border border-border bg-card hover:border-primary/40 hover:shadow-green transition-all duration-500"
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.3 + i * 0.15 }}
                whileHover={{ y: -2 }}
              >
                <div className="w-12 h-12 rounded-xl bg-primary/10 group-hover:bg-primary/20 flex items-center justify-center flex-shrink-0 transition-colors duration-300">
                  <item.icon size={20} className="text-primary" />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="font-display font-semibold text-foreground text-sm mb-1">
                    {item.label}
                  </div>
                  <div className="text-sm text-muted-foreground leading-relaxed">
                    {item.value}
                  </div>
                </div>
                <ArrowRight
                  size={16}
                  className="text-muted-foreground/0 group-hover:text-primary group-hover:translate-x-1 transition-all duration-300 mt-1 flex-shrink-0"
                />
              </motion.a>
            ))}

            {/* Map embed placeholder */}
            <motion.div
              className="relative mt-2 rounded-2xl overflow-hidden border border-border h-48 bg-muted"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.7 }}
            >
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2797.7!2d11.27!3d45.39!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDXCsDIzJzI0LjAiTiAxMcKwMTYnMTIuMCJF!5e0!3m2!1sen!2sit!4v1"
                className="w-full h-full border-0 grayscale opacity-70 hover:grayscale-0 hover:opacity-100 transition-all duration-700"
                loading="lazy"
                title="Sede Gruppo Grigolin"
              />
            </motion.div>
          </motion.div>

          {/* Right — Form */}
          <motion.div
            className="lg:col-span-3"
            initial={{ opacity: 0, x: 40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <div className="relative p-6 sm:p-8 lg:p-12 rounded-2xl border border-border bg-card">
              {/* Decorative corner accent */}
              <div className="absolute top-0 left-0 w-20 h-20 border-t-2 border-l-2 border-primary/30 rounded-tl-2xl" />
              <div className="absolute bottom-0 right-0 w-20 h-20 border-b-2 border-r-2 border-primary/30 rounded-br-2xl" />

              <h3 className="font-display font-bold text-2xl text-foreground mb-2">
                Richiedi informazioni
              </h3>
              <p className="text-muted-foreground text-sm mb-10">
                Compila il form e ti ricontatteremo entro 24 ore.
              </p>

              <form className="space-y-8">
                <div className="grid sm:grid-cols-2 gap-8">
                  <div className="relative">
                    <input
                      type="text"
                      placeholder="Nome"
                      className={inputBase}
                      onFocus={() => setFocusedField("nome")}
                      onBlur={() => setFocusedField(null)}
                    />
                    <motion.div
                      className="absolute bottom-0 left-0 h-0.5 bg-primary"
                      initial={{ width: "0%" }}
                      animate={{ width: focusedField === "nome" ? "100%" : "0%" }}
                      transition={{ duration: 0.3 }}
                    />
                  </div>
                  <div className="relative">
                    <input
                      type="text"
                      placeholder="Cognome"
                      className={inputBase}
                      onFocus={() => setFocusedField("cognome")}
                      onBlur={() => setFocusedField(null)}
                    />
                    <motion.div
                      className="absolute bottom-0 left-0 h-0.5 bg-primary"
                      initial={{ width: "0%" }}
                      animate={{ width: focusedField === "cognome" ? "100%" : "0%" }}
                      transition={{ duration: 0.3 }}
                    />
                  </div>
                </div>

                <div className="relative">
                  <input
                    type="email"
                    placeholder="Email"
                    className={inputBase}
                    onFocus={() => setFocusedField("email")}
                    onBlur={() => setFocusedField(null)}
                  />
                  <motion.div
                    className="absolute bottom-0 left-0 h-0.5 bg-primary"
                    initial={{ width: "0%" }}
                    animate={{ width: focusedField === "email" ? "100%" : "0%" }}
                    transition={{ duration: 0.3 }}
                  />
                </div>

                <div className="relative">
                  <input
                    type="text"
                    placeholder="Azienda"
                    className={inputBase}
                    onFocus={() => setFocusedField("azienda")}
                    onBlur={() => setFocusedField(null)}
                  />
                  <motion.div
                    className="absolute bottom-0 left-0 h-0.5 bg-primary"
                    initial={{ width: "0%" }}
                    animate={{ width: focusedField === "azienda" ? "100%" : "0%" }}
                    transition={{ duration: 0.3 }}
                  />
                </div>

                <div className="relative">
                  <textarea
                    rows={3}
                    placeholder="Il tuo messaggio..."
                    className={`${inputBase} resize-none`}
                    onFocus={() => setFocusedField("messaggio")}
                    onBlur={() => setFocusedField(null)}
                  />
                  <motion.div
                    className="absolute bottom-0 left-0 h-0.5 bg-primary"
                    initial={{ width: "0%" }}
                    animate={{ width: focusedField === "messaggio" ? "100%" : "0%" }}
                    transition={{ duration: 0.3 }}
                  />
                </div>

                <motion.button
                  type="submit"
                  className="group relative w-full bg-primary text-primary-foreground font-display text-sm tracking-widest uppercase py-4 rounded-xl overflow-hidden transition-all duration-300 hover:shadow-green"
                  whileHover={{ scale: 1.01 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <span className="relative z-10 flex items-center justify-center gap-3">
                    Invia Richiesta
                    <Send size={16} className="group-hover:translate-x-1 group-hover:-translate-y-0.5 transition-transform duration-300" />
                  </span>
                  <motion.div
                    className="absolute inset-0 bg-green-glow"
                    initial={{ x: "-100%" }}
                    whileHover={{ x: 0 }}
                    transition={{ duration: 0.4 }}
                  />
                </motion.button>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
