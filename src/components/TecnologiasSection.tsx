import { motion } from "framer-motion";
import {
  Clock,
  Radio,
  Wifi,
  FileText,
  Cpu,
  Sparkles,
  Bot,
  ArrowRight,
} from "lucide-react";
import ScrollReveal from "./ScrollReveal";

const tecnologias = [
  {
    icon: Clock,
    title: "Gestor de colas",
    tag: "Ya implantado",
    desc: "Sistema actual de gestión de turnos integrado al journey digital. Reserva remota desde la app y asignación al llegar.",
    anchor: "#fase-03",
  },
  {
    icon: Radio,
    title: "IoT Nespra",
    tag: "Captación de datos",
    desc: "Sensorización de la tienda en tiempo real: conteo de personas, movimiento, temperatura, humedad y bienestar.",
    anchor: "#fase-02",
  },
  {
    icon: Wifi,
    title: "Wipass",
    tag: "Identificación · Engagement",
    desc: "Identifica al cliente al entrar, le da acceso a landing personalizada con QR/NFC y activa gamificación con productos.",
    anchor: "#fase-02",
  },
  {
    icon: FileText,
    title: "Cuestionario inteligente",
    tag: "Perfil energético",
    desc: "Tipo de vivienda → orientación → consumo → recomendación personalizada. Conoce al cliente y propone ahorro real.",
    anchor: "#fase-05",
  },
  {
    icon: Cpu,
    title: "IA aplicada a producto",
    tag: "Soluciones Iberdrola",
    desc: "Aplicada a cargador de coche eléctrico, placas solares, aerotermia y domótica. Recomendación, simulación y venta cruzada.",
    anchor: "#fase-04",
  },
  {
    icon: Sparkles,
    title: "Experiencia metaverso",
    tag: "Inmersión · RA · RV",
    desc: "Explicación inmersiva de los productos. 'Vive tu casa con Iberdrola' antes de contratarlo.",
    anchor: "#fase-04",
  },
  {
    icon: Bot,
    title: "Robótica",
    tag: "Asistencia",
    desc: "Asistente robotizado que orienta, informa y entretiene en el momento del asesoramiento comercial.",
    anchor: "#fase-05",
  },
];

const TecnologiasSection = () => (
  <section id="tecnologias" className="py-12 md:py-16 bg-background">
    <div className="container mx-auto px-4">
      <ScrollReveal>
        <div className="text-center max-w-3xl mx-auto mb-10">
          <span className="inline-block text-xs uppercase tracking-[0.3em] text-accent font-primary font-bold mb-4">
            03
          </span>
          <h2 className="text-3xl md:text-5xl font-bold text-foreground">Tecnologías</h2>
        </div>
      </ScrollReveal>

      <ScrollReveal delay={0.1}>
        <div className="max-w-4xl mx-auto text-center mb-12">
          <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
            Las siete tecnologías que componen la propuesta. Cada una activa en un momento concreto del recorrido del cliente.
          </p>
        </div>
      </ScrollReveal>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 max-w-6xl mx-auto">
        {tecnologias.map((t, i) => {
          const Icon = t.icon;
          return (
            <ScrollReveal key={t.title} delay={i * 0.06}>
              <motion.a
                href={t.anchor}
                whileHover={{ y: -6 }}
                transition={{ type: "spring", stiffness: 200, damping: 18 }}
                className="group relative h-full flex flex-col rounded-3xl bg-card border border-border hover:border-accent/50 p-6 overflow-hidden transition-colors duration-500 shadow-sm"
              >
                <div className="absolute -top-16 -right-16 w-48 h-48 rounded-full bg-accent/10 blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700" />

                <div className="relative flex-1">
                  <div className="flex items-start justify-between mb-4">
                    <div className="w-12 h-12 rounded-xl bg-accent/10 border border-accent/20 flex items-center justify-center">
                      <Icon className="w-6 h-6 text-accent" strokeWidth={2} />
                    </div>
                    <span className="text-[10px] uppercase tracking-[0.15em] text-accent font-bold px-2.5 py-1 rounded-full bg-accent/10 border border-accent/20">
                      {t.tag}
                    </span>
                  </div>

                  <h3 className="text-lg md:text-xl font-bold text-foreground mb-2">{t.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed mb-4">{t.desc}</p>
                </div>

                <div className="relative flex items-center gap-1.5 text-xs font-bold text-accent uppercase tracking-[0.15em] mt-auto">
                  Ver en el recorrido
                  <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" strokeWidth={2.5} />
                </div>
              </motion.a>
            </ScrollReveal>
          );
        })}
      </div>
    </div>
  </section>
);

export default TecnologiasSection;
