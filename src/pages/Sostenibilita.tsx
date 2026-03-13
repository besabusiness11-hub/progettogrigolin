import { useEffect } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";
import { Leaf, Recycle, Factory, ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";

const Sostenibilita = () => {
  // Riporta la pagina in alto al caricamento
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="bg-background min-h-screen">
      <Navbar />
      
      {/* Header Page */}
      <section className="pt-40 pb-20 bg-card border-b border-border/50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-12">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className="max-w-3xl">
            
            {/* Tasto Torna alla Home */}
            <Link to="/" className="inline-flex items-center gap-2 text-sm font-display tracking-widest uppercase text-muted-foreground hover:text-primary transition-colors mb-8 group">
              <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" /> 
              Torna alla Home
            </Link>

            <h1 className="font-display font-bold text-5xl sm:text-6xl md:text-7xl leading-tight mb-6">
              Il nostro impegno per l'<span className="text-gradient-green">Ambiente.</span>
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Nel Gruppo Grigolin, la sostenibilità non è uno slogan, ma un processo industriale misurabile. Investiamo costantemente nell'economia circolare e nella riduzione delle emissioni in tutte le fasi produttive.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Content */}
      <section className="py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-12">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="p-8 border border-border rounded-2xl bg-card">
              <Leaf className="text-primary mb-6" size={40} />
              <h3 className="font-display font-bold text-2xl mb-4">Riduzione CO2</h3>
              <p className="text-muted-foreground leading-relaxed">Ottimizziamo i cicli termici delle nostre fornaci e utilizziamo combustibili alternativi per abbattere significativamente le emissioni in atmosfera.</p>
            </div>
            <div className="p-8 border border-border rounded-2xl bg-card">
              <Recycle className="text-primary mb-6" size={40} />
              <h3 className="font-display font-bold text-2xl mb-4">Economia Circolare</h3>
              <p className="text-muted-foreground leading-relaxed">Recuperiamo gli scarti di lavorazione e i materiali da demolizione, trasformandoli in nuovi inerti certificati per l'edilizia.</p>
            </div>
            <div className="p-8 border border-border rounded-2xl bg-card">
              <Factory className="text-primary mb-6" size={40} />
              <h3 className="font-display font-bold text-2xl mb-4">Impianti Efficienti</h3>
              <p className="text-muted-foreground leading-relaxed">I nostri poli produttivi sono dotati di pannelli fotovoltaici e sistemi di recupero idrico, riducendo al minimo l'impatto sul territorio circostante.</p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Sostenibilita;