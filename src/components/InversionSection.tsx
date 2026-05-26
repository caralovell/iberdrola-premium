import { motion } from "framer-motion";
import ScrollReveal from "./ScrollReveal";

const bloques = [
  { num: "1", title: "Gestor de colas + IoT Nespra", price: "A definir" },
  { num: "2", title: "Wipass + Cuestionario + Landing", price: "A definir" },
  { num: "3", title: "IA aplicada a productos", price: "A definir" },
  { num: "4", title: "Experiencia metaverso · RA · RV", price: "A definir" },
  { num: "5", title: "Robótica", price: "A definir" },
  { num: "6", title: "Marketing sensorial + Digital Signage", price: "A definir" },
];

const InversionSection = () => (
  <section id="inversion" className="py-12 md:py-16 bg-surface">
    <div className="container mx-auto px-4">
      <ScrollReveal>
        <div className="text-center max-w-3xl mx-auto mb-10">
          <span className="inline-block text-xs uppercase tracking-[0.3em] text-accent font-primary font-bold mb-4">
            06
          </span>
          <h2 className="text-3xl md:text-5xl font-bold text-foreground">Inversión</h2>
        </div>
      </ScrollReveal>

      <ScrollReveal delay={0.1}>
        <div className="max-w-4xl mx-auto text-center mb-12">
          <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
            Estructura modular. Cada bloque aporta valor independiente y se integra con los siguientes. Cifras detalladas en documento aparte.
          </p>
        </div>
      </ScrollReveal>

      <ScrollReveal delay={0.15}>
        <div className="max-w-3xl mx-auto rounded-3xl bg-background border border-border shadow-xl overflow-hidden">
          {bloques.map((b, i) => (
            <motion.div
              key={b.num}
              initial={{ opacity: 0, x: -10 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.05 + i * 0.06 }}
              className="flex items-center justify-between gap-4 px-6 py-5 border-b border-border last:border-b-0 hover:bg-accent/[0.03] transition-colors"
            >
              <div className="flex items-center gap-4">
                <span className="flex-shrink-0 w-9 h-9 rounded-full bg-accent/10 border border-accent/20 text-accent flex items-center justify-center font-bold text-sm">
                  {b.num}
                </span>
                <span className="text-sm md:text-base font-bold text-foreground">{b.title}</span>
              </div>
              <span className="text-sm text-muted-foreground italic whitespace-nowrap">{b.price}</span>
            </motion.div>
          ))}

          <div className="flex items-center justify-between gap-4 px-6 py-5 bg-foreground text-background">
            <span className="font-bold text-sm md:text-base">Total estimado</span>
            <span className="text-sm italic text-accent">A definir</span>
          </div>
        </div>
      </ScrollReveal>
    </div>
  </section>
);

export default InversionSection;
