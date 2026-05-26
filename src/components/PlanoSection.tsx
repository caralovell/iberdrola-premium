import { motion } from "framer-motion";
import ScrollReveal from "./ScrollReveal";
import planoTienda from "@/assets/plano-tienda.png";

const PlanoSection = () => (
  <section id="plano" className="py-12 md:py-16 bg-surface">
    <div className="container mx-auto px-4">
      <ScrollReveal>
        <div className="text-center max-w-3xl mx-auto mb-10">
          <span className="inline-block text-xs uppercase tracking-[0.3em] text-accent font-primary font-bold mb-4">
            04
          </span>
          <h2 className="text-3xl md:text-5xl font-bold text-foreground">Espacio físico</h2>
        </div>
      </ScrollReveal>

      <ScrollReveal delay={0.1}>
        <div className="max-w-4xl mx-auto text-center mb-10">
          <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
            Distribución de los principales elementos digitales en una tienda premium tipo. Propuesta base, escalable a distintas superficies.
          </p>
        </div>
      </ScrollReveal>

      <ScrollReveal delay={0.15}>
        <motion.div
          whileHover={{ scale: 1.01 }}
          transition={{ duration: 0.4 }}
          className="max-w-5xl mx-auto rounded-3xl overflow-hidden shadow-2xl bg-background border border-border p-4 md:p-8"
        >
          <img
            src={planoTienda}
            alt="Vista cenital de tienda Iberdrola con etiquetas señalando configurador, monitor interior, monitor escaparate, altavoces, aromatización y gestor de turnos"
            className="w-full h-auto object-contain"
            loading="lazy"
          />
        </motion.div>
      </ScrollReveal>
    </div>
  </section>
);

export default PlanoSection;
