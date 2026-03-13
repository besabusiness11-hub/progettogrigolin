import { useEffect } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";
import { Users, Briefcase, GraduationCap, ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";

const Careers = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="bg-background min-h-screen">
      <Navbar />
      
      {/* Header Page */}
      <section className="pt-40 pb-20 bg-[#0a0f0d] text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-12">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className="max-w-3xl">
            
            {/* Tasto Torna alla Home */}
            <Link to="/" className="inline-flex items-center gap-2 text-sm font-display tracking-widest uppercase text-white/60 hover:text-primary transition-colors mb-8 group">
              <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" /> 
              Torna alla Home
            </Link>

            <h1 className="font-display font-bold text-5xl sm:text-6xl md:text-7xl leading-tight mb-6">
              Costruisci la tua carriera <span className="text-primary">con noi.</span>
            </h1>
            <p className="text-lg text-white/70 leading-relaxed">
              Entrare nel Gruppo Grigolin significa far parte di una famiglia di oltre 2000 professionisti. Cerchiamo talenti appassionati pronti a plasmare il futuro delle infrastrutture italiane.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Why Us */}
      <section className="py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-12">
          <h2 className="font-display font-bold text-3xl mb-12 text-center">Perché scegliere Grigolin</h2>
          <div className="grid md:grid-cols-3 gap-8 mb-20">
            <div className="p-8 border border-border rounded-2xl">
              <Users className="text-primary mb-6" size={32} />
              <h3 className="font-display font-bold text-xl mb-3">Ambiente Inclusivo</h3>
              <p className="text-muted-foreground">Valorizziamo il lavoro di squadra e le competenze individuali in un ecosistema lavorativo stimolante e sicuro.</p>
            </div>
            <div className="p-8 border border-border rounded-2xl">
              <GraduationCap className="text-primary mb-6" size={32} />
              <h3 className="font-display font-bold text-xl mb-3">Formazione Continua</h3>
              <p className="text-muted-foreground">Investiamo nella crescita delle nostre persone con programmi di aggiornamento tecnico e manageriale.</p>
            </div>
            <div className="p-8 border border-border rounded-2xl">
              <Briefcase className="text-primary mb-6" size={32} />
              <h3 className="font-display font-bold text-xl mb-3">Solidità e Crescita</h3>
              <p className="text-muted-foreground">Un gruppo in continua espansione offre innumerevoli opportunità di mobilità interna e avanzamento di carriera.</p>
            </div>
          </div>

          {/* CTA Invia CV */}
          <div className="bg-secondary/30 p-12 rounded-2xl text-center max-w-4xl mx-auto border border-border">
            <h3 className="font-display font-bold text-3xl mb-4">Non trovi la posizione adatta?</h3>
            <p className="text-muted-foreground mb-8">Siamo sempre alla ricerca di nuovi talenti. Inviaci la tua candidatura spontanea.</p>
            <a href="mailto:hr@gruppogrigolin.it" className="inline-block bg-primary text-primary-foreground font-display text-sm tracking-widest uppercase px-8 py-4 rounded-xl hover:shadow-green transition-all">
              Invia il tuo CV
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Careers;