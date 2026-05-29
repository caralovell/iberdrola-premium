import { motion } from "framer-motion";
import { Database, Heart, Target } from "lucide-react";
import ScrollReveal from "./ScrollReveal";

const objetivos = [
  {
    icon: Database,
    title: "Captación de datos",
    desc: "Información del cliente y de la tienda en tiempo real: comportamiento, preferencias, aforo, ambiente. Todo agregado en un único dashboard.",
  },
  {
    icon: Heart,
    title: "Mejorar la CX",
    desc: "Una experiencia hiperpersonalizada, inmersiva e innovadora desde antes de entrar a la tienda hasta después de salir.",
  },
  {
    icon: Target,
    title: "Cross Selling",
    desc: "Aprovechar cada punto de contacto para ofrecer productos y servicios complementarios relevantes.",
  },
];

const ObjetivosSection = () => (
  <section id="objetivos" className="py-12 md:py-16 bg-background">
    <div className="container mx-auto px-4">
      <ScrollReveal>
        <div className="text-center max-w-3xl mx-auto mb-10">
          <span className="inline-block text-xs uppercase tracking-[0.3em] text-accent font-primary font-bold mb-4">
            01
          </span>
          <h2 className="text-3xl md:text-5xl font-bold text-foreground">Objetivos</h2>
        </div>
      </ScrollReveal>

      <ScrollReveal delay={0.1}>
        <div className="max-w-4xl mx-auto text-center mb-10">
          <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
            Tres ejes que vertebran toda la propuesta. Cada decisión técnica está pensada para servir a uno de ellos.
          </p>
        </div>
      </ScrollReveal>

      <div className="grid md:grid-cols-3 gap-5 max-w-5xl mx-auto">
        {objetivos.map((obj, i) => {
          const Icon = obj.icon;
          return (
            <ScrollReveal key={obj.title} delay={i * 0.1}>
              <motion.div
                whileHover={{ y: -8 }}
                transition={{ type: "spring", stiffness: 200, damping: 18 }}
                className="group relative h-full rounded-3xl bg-card border border-border hover:border-accent/50 p-7 overflow-hidden transition-colors duration-500 shadow-sm"
              >
                <div className="absolute -top-16 -right-16 w-48 h-48 rounded-full bg-accent/10 blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                <div className="relative">
                  <div className="w-12 h-12 rounded-xl bg-accent/10 border border-accent/20 flex items-center justify-center mb-5">
                    <Icon className="w-6 h-6 text-accent" strokeWidth={2} />
                  </div>
                  <h3 className="text-xl md:text-2xl font-bold text-foreground mb-3">{obj.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{obj.desc}</p>
                </div>
              </motion.div>
            </ScrollReveal>
          );
        })}
      </div>
    </div>
  </section>
);

export default ObjetivosSection;
