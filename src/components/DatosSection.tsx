import { motion } from "framer-motion";
import { Clock, Radio, FileText, Wifi, ArrowRight } from "lucide-react";
import ScrollReveal from "./ScrollReveal";

const fuentes = [
  { icon: Clock, title: "Gestor de colas", desc: "Tiempos de espera, picos de afluencia, motivos de visita más frecuentes" },
  { icon: Radio, title: "IoT Nespra", desc: "Conteo de personas, movimiento, temperatura, humedad, bienestar" },
  { icon: FileText, title: "Cuestionario", desc: "Perfil energético, vivienda, intereses y consumo del cliente" },
  { icon: Wifi, title: "Wipass + NFC/QR", desc: "Recorrido del cliente, interacciones con producto, gamificación" },
];

const outputs = [
  "CX hiperpersonalizada",
  "Venta cruzada inteligente",
  "Optimización operativa",
  "Lead scoring automatizado",
  "Reporting unificado",
];

const DatosSection = () => (
  <section id="datos" className="py-12 md:py-16 bg-background">
    <div className="container mx-auto px-4">
      <ScrollReveal>
        <div className="text-center max-w-3xl mx-auto mb-10">
          <span className="inline-block text-xs uppercase tracking-[0.3em] text-accent font-primary font-bold mb-4">
            06
          </span>
          <h2 className="text-3xl md:text-5xl font-bold text-foreground">Datos</h2>
        </div>
      </ScrollReveal>

      <ScrollReveal delay={0.1}>
        <div className="max-w-4xl mx-auto text-center mb-12">
          <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
            Toda la tecnología converge en una única plataforma de datos que alimenta CX, ventas y operaciones. El activo más valioso de la propuesta.
          </p>
        </div>
      </ScrollReveal>

      <div className="grid lg:grid-cols-[2fr_1fr] gap-6 max-w-6xl mx-auto">
        <div className="grid sm:grid-cols-2 gap-4">
          {fuentes.map((f, i) => {
            const Icon = f.icon;
            return (
              <ScrollReveal key={f.title} delay={i * 0.08}>
                <motion.div
                  whileHover={{ y: -4 }}
                  className="h-full rounded-2xl bg-card border border-border hover:border-accent/40 p-5 shadow-sm transition-colors"
                >
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-10 h-10 rounded-lg bg-accent/10 border border-accent/20 flex items-center justify-center">
                      <Icon className="w-5 h-5 text-accent" strokeWidth={2} />
                    </div>
                    <h3 className="text-base font-bold text-foreground">{f.title}</h3>
                  </div>
                  <p className="text-sm text-muted-foreground leading-relaxed">{f.desc}</p>
                </motion.div>
              </ScrollReveal>
            );
          })}
        </div>

        <ScrollReveal delay={0.2}>
          <div className="dark-card p-6 h-full">
            <h3 className="text-lg font-bold mb-4">Lo que activa</h3>
            <ul className="space-y-3">
              {outputs.map((o, i) => (
                <motion.li
                  key={o}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 + i * 0.08 }}
                  className="flex items-center gap-2 text-sm text-white/90"
                >
                  <ArrowRight className="w-4 h-4 text-accent shrink-0" strokeWidth={2.5} />
                  <span>{o}</span>
                </motion.li>
              ))}
            </ul>
          </div>
        </ScrollReveal>
      </div>
    </div>
  </section>
);

export default DatosSection;
