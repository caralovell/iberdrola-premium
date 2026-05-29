import { motion } from "framer-motion";
import { Heart, Lightbulb, Users } from "lucide-react";
import ScrollReveal from "./ScrollReveal";

const pilares = [
  {
    icon: Heart,
    title: "Emocionar",
    tag: "Hiperpersonalización",
  },
  {
    icon: Lightbulb,
    title: "Inspirar",
    tag: "Innovación",
  },
  {
    icon: Users,
    title: "Vínculos",
    tag: "Sostenibilidad",
  },
];

const PilaresSection = () => (
  <section id="pilares" className="py-12 md:py-16 bg-surface">
    <div className="container mx-auto px-4">
      <ScrollReveal>
        <div className="text-center max-w-3xl mx-auto mb-10">
          <span className="inline-block text-xs uppercase tracking-[0.3em] text-accent font-primary font-bold mb-4">
            02
          </span>
          <h2 className="text-3xl md:text-5xl font-bold text-foreground">
            Cómo lo conseguimos
          </h2>
        </div>
      </ScrollReveal>

      <ScrollReveal delay={0.1}>
        <div className="max-w-4xl mx-auto text-center mb-12">
          <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
            Espacios diseñados para emocionar, inspirar y crear vínculos.
          </p>
        </div>
      </ScrollReveal>

      <div className="grid md:grid-cols-3 gap-5 max-w-5xl mx-auto mb-8">
        {pilares.map((pilar, i) => {
          const Icon = pilar.icon;

          return (
            <ScrollReveal key={pilar.title} delay={i * 0.1}>
              <motion.div
                whileHover={{ y: -6, scale: 1.02 }}
                transition={{ type: "spring", stiffness: 200, damping: 18 }}
                className="text-center rounded-2xl bg-background border border-border p-7 shadow-sm hover:shadow-lg hover:border-accent/40 transition-all"
              >
                <div className="w-14 h-14 mx-auto mb-4 rounded-full bg-accent/10 border border-accent/20 flex items-center justify-center">
                  <Icon className="w-7 h-7 text-accent" strokeWidth={2} />
                </div>

                <h3 className="text-xl font-bold text-foreground mb-4">
                  {pilar.title}
                </h3>

                <motion.span
                  whileHover={{ scale: 1.08, y: -3 }}
                  className="inline-flex items-center px-4 py-2 rounded-full bg-accent/10 border border-accent/30 text-sm font-medium text-foreground hover:bg-accent/20 hover:border-accent/60 transition-colors cursor-default shadow-sm"
                >
                  {pilar.tag}
                </motion.span>
              </motion.div>
            </ScrollReveal>
          );
        })}
      </div>

      <ScrollReveal delay={0.3}>
        <div className="max-w-5xl mx-auto flex flex-col items-center">
          <div className="hidden md:block w-[68%] h-8 border-b-2 border-x-2 border-accent/40 rounded-b-3xl mb-4" />

          <motion.div
            initial={{ opacity: 0, scale: 0.8, y: 10 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ type: "spring", stiffness: 200, damping: 14 }}
            whileHover={{ scale: 1.08, y: -3 }}
            className="inline-flex items-center px-5 py-2.5 rounded-full bg-accent/10 border border-accent/40 text-sm font-semibold text-foreground hover:bg-accent/20 hover:border-accent/70 transition-colors cursor-default shadow-sm"
          >
            Experiencia Inmersiva
          </motion.div>
        </div>
      </ScrollReveal>
    </div>
  </section>
);

export default PilaresSection;
