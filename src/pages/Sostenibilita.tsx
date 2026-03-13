import { useEffect } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";
import { Leaf, Recycle, Factory, ArrowLeft, ShieldCheck, Globe } from "lucide-react";
import { Link } from "react-router-dom";

const Sostenibilita = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="bg-background min-h-screen">
      <Navbar />
      
      {/* Header Page */}
      <section className="pt-40 pb-24 bg-card/30 relative border-b border-border/50 overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-primary/5 to-transparent pointer-events-none" />
        <div className="container mx-auto px-4 sm:px-6 lg:px-12 relative z-10">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className="max-w-4xl">
            <Link to="/" className="inline-flex items-center gap-2 text-sm font-display tracking-widest uppercase text-muted-foreground hover:text-primary transition-colors mb-8 group">
              <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" /> 
              Torna alla Home
            </Link>
            <h1 className="font-display font-bold text-5xl sm:text-6xl md:text-8xl leading-tight mb-8">
              Un futuro <span className="text-gradient-green">consapevole.</span>
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed max-w-2xl">
              La nostra missione è trasformare l'industria pesante in un modello di economia circolare, dove ogni risorsa viene valorizzata e ogni impatto compensato.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Pillars Section */}
      <section className="py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-12">
          <div className="grid lg:grid-cols-3 gap-12">
            {[
              { icon: Leaf, title: "Riduzione CO2", text: "Investiamo in forni a bassa emissione e sistemi di cattura carbonica per decarbonizzare il cemento." },
              { icon: Recycle, title: "Riciclo Certificato", text: "Oltre il 30% dei nostri inerti deriva da processi di recupero di materiali da demolizione." },
              { icon: Factory, title: "Zero Waste", text: "I nostri impianti sono circuiti chiusi: recuperiamo il 100% delle acque di lavaggio e degli scarti." }
            ].map((pillar, i) => (
              <div key={i} className="group flex flex-col items-center text-center">
                <div className="w-20 h-20 rounded-3xl bg-primary/10 flex items-center justify-center text-primary mb-8 group-hover:bg-primary group-hover:text-white transition-all duration-500 shadow-sm">
                  <pillar.icon size={36} />
                </div>
                <h3 className="font-display font-bold text-2xl mb-4">{pillar.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{pillar.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Deep Detail Section */}
      <section className="py-24 bg-secondary/20 relative overflow-hidden">
        <div className="container mx-auto px-4 sm:px-6 lg:px-12">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            <div className="lg:w-1/2 space-y-6">
              <div className="inline-flex items-center gap-2 bg-white px-4 py-2 rounded-full border border-border text-primary text-xs font-bold uppercase tracking-widest">
                <Globe size={14} /> Il nostro territorio
              </div>
              <h2 className="font-display font-bold text-4xl sm:text-5xl">Ripristino Ambientale delle Cave</h2>
              <p className="text-lg text-muted-foreground">
                Non ci limitiamo ad estrarre. Ogni nostra cava ha un piano di rinaturalizzazione che prevede la piantumazione di specie autoctone e la creazione di nuovi habitat per la biodiversità locale.
              </p>
              <ul className="space-y-4">
                {['1.200 Ettari riforestati', 'Sistemi di monitoraggio fauna', 'Educazione ambientale locale'].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 font-semibold text-foreground">
                    <CheckCircle2 size={20} className="text-primary" /> {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="lg:w-1/2 w-full aspect-video rounded-[2rem] bg-card border-4 border-white shadow-2xl flex items-center justify-center overflow-hidden">
               {/* Qui potresti mettere un'immagine della natura */}
               <div className="text-primary/20 font-display font-bold text-2xl">Visual: Cave Rinaturalizzate</div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

const CheckCircle2 = ({size, className}: {size:number, className?:string}) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className={className}><circle cx="12" cy="12" r="10"/><path d="m9 12 2 2 4-4"/></svg>
);

export default Sostenibilita;