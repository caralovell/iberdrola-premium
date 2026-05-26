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

// Imágenes ya disponibles en tu proyecto
import vistaTienda from "@/assets/vista-tienda.png";
import mockupCuestionario from "@/assets/mockup-cuestionario.png";
import mockupRecomendacion from "@/assets/mockup-recomendacion.png";

// Para añadir más imágenes en el futuro:
// 1. Sube la imagen a src/assets/
// 2. Importa aquí: import nombreImg from "@/assets/nombre.png";
// 3. Pon "image: nombreImg" en la tecnología correspondiente (quita "icon" si quieres)

const tecnologias = [
  {
    icon: Clock,
    title: "Gestor de colas",
    tag: "Ya implantado",
    desc: "Sistema actual de gestión de turnos integrado al journey digital. Reserva remota desde la app y asignación al llegar.",
    anchor: "#fase-03",
    image: vistaTienda,
  },
  {
    icon: Radio,
    title: "IoT Nespra",
    tag: "Captación de datos",
    desc: "Sensorización de la tienda en tiempo real: conteo de personas, movimiento, temperatura, humedad y bienestar.",
    anchor: "#fase-02",
    image: null,
  },
  {
    icon: Wifi,
    title: "Wipass",
    tag: "Identificación · Engagement",
    desc: "Identifica al cliente al entrar, le da acceso a landing personalizada con QR/NFC y activa gamificación con productos.",
    anchor: "#fase-02",
    image: null,
  },
  {
    icon: FileText,
    title: "Cuestionario inteligente",
    tag: "Perfil energético",
    desc: "Tipo de vivienda → orientación → consumo → recomendación personalizada. Conoce al cliente y propone ahorro real.",
    anchor: "#fase-05",
    image: mockupCuestionario,
  },
  {
    icon: Cpu,
    title: "IA aplicada a producto",
    tag: "Soluciones Iberdrola",
    desc: "Aplicada a cargador de coche eléctrico, placas solares, aerotermia y domótica. Recomendación, simulación y venta cruzada.",
    anchor: "#fase-04",
    image: mockupRecomendacion,
  },
  {
    icon: Sparkles,
    title: "Experiencia metaverso",
    tag: "Inmersión · RA · RV",
    desc: "Explicación inmersiva de los productos. 'Vive tu casa con Iberdrola' antes de contratarlo.",
    anchor: "#fase-04",
    image: null,
  },
  {
    icon: Bot,
    title: "Robótica",
    tag: "Asistencia",
    desc: "Asistente robotizado que orienta, informa y entretiene en el momento del asesoramiento comercial.",
    anchor: "#fase-05",
    image: null,
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
        <div className="max-w-4xl mx-auto text-center mb-16">
          <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
            Las siete tecnologías que componen la propuesta. Cada una activa en un momento concreto del recorrido del cliente.
          </p>
        </div>
      </ScrollReveal>

      <div className="max-w-6xl mx-auto space-y-12 md:space-y-16">
        {tecnologias.map((t, i) => {
          const Icon = t.icon;
          const reverse = i % 2 === 1;

          return (
            <ScrollReveal key={t.title} delay={0.05} direction={reverse ? "right" : "left"}>
              <div className={`grid lg:grid-cols-2 gap-8 lg:gap-12 items-center ${reverse ? "lg:[direction:rtl]" : ""}`}>
                {/* Texto */}
                <div className={reverse ? "lg:[direction:ltr]" : ""}>
                  <div className="flex items-start justify-between gap-3 mb-4 flex-wrap">
                    <div className="w-14 h-14 rounded-2xl bg-accent/10 border border-accent/20 flex items-center justify-center shrink-0">
                      <Icon className="w-7 h-7 text-accent" strokeWidth={2} />
                    </div>
                    <span className="text-[10px] uppercase tracking-[0.15em] text-accent font-bold px-3 py-1.5 rounded-full bg-accent/10 border border-accent/20">
                      {t.tag}
                    </span>
                  </div>

                  <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-3">{t.title}</h3>
                  <p className="text-base text-muted-foreground leading-relaxed mb-6">{t.desc}</p>

                  <motion.a
                    href={t.anchor}
                    whileHover={{ x: 4 }}
                    className="inline-flex items-center gap-2 text-sm font-bold text-accent uppercase tracking-[0.15em] hover:gap-3 transition-all"
                  >
                    Ver en el recorrido
                    <ArrowRight className="w-4 h-4" strokeWidth={2.5} />
                  </motion.a>
                </div>

                {/* Imagen o placeholder */}
                <div className={reverse ? "lg:[direction:ltr]" : ""}>
                  {t.image ? (
                    <motion.div
                      whileHover={{ scale: 1.02 }}
                      transition={{ duration: 0.3 }}
                      className="rounded-3xl overflow-hidden shadow-2xl border border-border"
                    >
                      <img
                        src={t.image}
                        alt={t.title}
                        className="w-full h-auto object-cover"
                        loading="lazy"
                      />
                    </motion.div>
                  ) : (
                    <motion.div
                      whileHover={{ scale: 1.02 }}
                      transition={{ duration: 0.3 }}
                      className="relative rounded-3xl border border-border bg-card min-h-[280px] md:min-h-[340px] flex items-center justify-center overflow-hidden"
                    >
                      <div className="absolute inset-0 bg-gradient-to-br from-accent/10 via-transparent to-accent/5" />
                      <div className="absolute -top-20 -right-20 w-60 h-60 rounded-full bg-accent/15 blur-3xl" />
                      <div className="absolute -bottom-20 -left-20 w-60 h-60 rounded-full bg-accent/10 blur-3xl" />
                      <div className="relative w-28 h-28 md:w-32 md:h-32 rounded-full bg-background shadow-xl border border-accent/30 flex items-center justify-center">
                        <Icon className="w-12 h-12 md:w-14 md:h-14 text-accent" strokeWidth={1.5} />
                      </div>
                    </motion.div>
                  )}
                </div>
              </div>
            </ScrollReveal>
          );
        })}
      </div>
    </div>
  </section>
);

export default TecnologiasSection;
