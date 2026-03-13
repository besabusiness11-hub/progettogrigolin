import { useEffect } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";
import { Users, Briefcase, GraduationCap, ArrowLeft, CheckCircle2, MapPin } from "lucide-react";
import { Link } from "react-router-dom";

const Careers = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const stats = [
    { label: "Collaboratori", value: "2.000+" },
    { label: "Sedi in Italia", value: "80+" },
    { label: "Anni di Storia", value: "60+" },
  ];

  return (
    <div className="bg-background min-h-screen">
      <Navbar />
      
      {/* Header Page - Dark Mode Style */}
      <section className="pt-40 pb-24 bg-[#0a0f0d] text-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/3 h-full bg-primary/10 blur-[120px] rounded-full" />
        <div className="container mx-auto px-4 sm:px-6 lg:px-12 relative z-10">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className="max-w-4xl">
            <Link to="/" className="inline-flex items-center gap-2 text-sm font-display tracking-widest uppercase text-white/60 hover:text-primary transition-colors mb-8 group">
              <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" /> 
              Torna alla Home
            </Link>
            <h1 className="font-display font-bold text-5xl sm:text-6xl md:text-8xl leading-tight mb-8">
              Lavora nell'industria del <span className="text-primary">futuro.</span>
            </h1>
            <p className="text-xl text-white/70 leading-relaxed max-w-2xl">
              Cerchiamo persone che vogliano lasciare un segno. Unisciti a un team che costruisce le infrastrutture vitali del Paese con passione e innovazione.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Stats Quick View */}
      <section className="py-12 border-b border-border bg-card/50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-12">
          <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
            {stats.map((stat, i) => (
              <div key={i} className="text-center md:text-left">
                <div className="text-3xl font-display font-bold text-primary">{stat.value}</div>
                <div className="text-sm uppercase tracking-widest text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Us */}
      <section className="py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-12">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="font-display font-bold text-4xl mb-4">Perché scegliere Grigolin</h2>
            <p className="text-muted-foreground">Offriamo molto più di un posto di lavoro: offriamo un percorso di crescita in un ecosistema solido.</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 mb-20">
            {[
              { icon: Users, title: "Ambiente Inclusivo", text: "Valorizziamo la diversità e il lavoro di squadra in un ambiente sicuro e stimolante." },
              { icon: GraduationCap, title: "Formazione Continua", text: "Investiamo nel tuo futuro con academy interne e programmi di aggiornamento tecnico." },
              { icon: Briefcase, title: "Solidità e Crescita", text: "Facciamo parte di un gruppo leader che premia il merito e offre mobilità interna." }
            ].map((item, i) => (
              <div key={i} className="p-10 border border-border rounded-3xl bg-card hover:border-primary/50 transition-all group">
                <item.icon className="text-primary mb-6 group-hover:scale-110 transition-transform" size={40} />
                <h3 className="font-display font-bold text-xl mb-4">{item.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{item.text}</p>
              </div>
            ))}
          </div>

          {/* CTA Invia CV */}
          <motion.div 
            whileHover={{ scale: 1.01 }}
            className="bg-primary/5 p-12 rounded-[2rem] text-center max-w-4xl mx-auto border border-primary/20 relative overflow-hidden"
          >
            <div className="relative z-10">
              <h3 className="font-display font-bold text-4xl mb-6">Pronto per la sfida?</h3>
              <p className="text-lg text-muted-foreground mb-10 max-w-xl mx-auto">Siamo sempre alla ricerca di ingegneri, tecnici, operatori e professionisti del settore. Inviaci la tua candidatura spontanea.</p>
              <a href="mailto:hr@gruppogrigolin.it" className="inline-flex items-center gap-3 bg-primary text-primary-foreground font-display text-sm tracking-widest uppercase px-10 py-5 rounded-2xl hover:shadow-green transition-all hover:-translate-y-1">
                Invia il tuo CV <Briefcase size={18} />
              </a>
            </div>
            <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-primary/10 rounded-full blur-3xl" />
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Careers;