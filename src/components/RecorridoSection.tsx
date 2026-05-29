import { motion } from "framer-motion";
import {
  Smartphone,
  Radio,
  Hand,
  Sparkles,
  Bot,
  CheckCircle2,
  FileText,
  MessageSquare,
  Wifi,
  Monitor,
  Clock,
  QrCode,
  Cpu,
  Music,
  Trophy,
  ScanLine,
  UserCheck,
  Repeat,
  Mail,
} from "lucide-react";
import ScrollReveal from "./ScrollReveal";
import pre from "@/assets/pre-entrada.png";
import entrada from "@/assets/pisando.png";
import bienvenida from "@/assets/bienve.png";
import dina from "@/assets/comercial.png";
import entorno from "@/assets/entornoo.png";
import satis from "@/assets/satis.png";

type Tech = { icon: any; title: string; desc: string };
type Fase = {
  num: string;
  name: string;
  desc: string;
  tech: Tech[];
  image?: string;
  imageAlt?: string;
  caption?: string;
};

const fases: Fase[] = [
  {
    num: "01",
    name: "Pre-entrada",
    desc: "El cliente ya está conectado con Iberdrola antes de cruzar la puerta. Recibimos su intención y la convertimos en una experiencia preparada a su medida.",
    tech: [
      { icon: Smartphone, title: "App o notificación de cita", desc: "Confirmación, recordatorio y check-in remoto" },
      { icon: FileText, title: "Formulario previo", desc: "Motivo de visita, intereses, productos a explorar" },
      { icon: MessageSquare, title: "Mensaje automatizado", desc: "SMS o WhatsApp con info de la cita y enlace al cuestionario" },
    ],
    image: pre,
    imageAlt: "Mockup",
  },
  {
    num: "02",
    name: "Entrada",
    desc: 'El cliente pisa la tienda y, en paralelo, la tienda empieza a "leerse" a sí misma. Datos de cliente y datos de operación, capturados en tiempo real.',
    tech: [
      { icon: Radio, title: "IoT", desc: "Conteo de personas, movimiento, temperatura, humedad, bienestar" },
      { icon: Wifi, title: "NFC", desc: "Identificación del cliente y vinculación al journey digital" },
      { icon: Monitor, title: "Tótem con dashboard", desc: "Visualización de datos en tiempo real para el equipo interno" },
    ],
     image: entrada,
    imageAlt: "Mockup",
  },
  {
    num: "03",
    name: "Bienvenida",
    desc: "El cliente es recibido. Pantallas que saludan, gestión de turnos sin fricción, y un primer punto de contacto digital que invita a participar.",
    tech: [
      { icon: Monitor, title: "Pantalla LED", desc: 'Saludo personalizado: "Hola" / "Bienvenido/a" tras detectar Wipass' },
      { icon: Clock, title: "Gestor de colas", desc: "Saca turno o asigna cita ya reservada desde la app" },
      { icon: QrCode, title: "Landing page", desc: "Acceso rápido a contenido, ofertas y registro de visita" },
    ],
    image: bienvenida,
    imageAlt: "Mockup",
  },
  {
    num: "04",
    name: "Entorno",
    desc: "El cliente está rodeado de las soluciones de Iberdrola hechas tangibles. Aerotermia, cargador, placas solares, domótica — todo explorable de forma interactiva, gamificada y sensorial.",
    tech: [
      { icon: Cpu, title: "IA aplicada a productos", desc: "Cargador EV · Placas solares · Aerotermia · Domótica · Smart Home" },
      { icon: Music, title: "Marketing sensorial", desc: "Hilo musical, aromatización, iluminación adaptativa" },
      { icon: Sparkles, title: "Metaverso", desc: 'Experiencia inmersiva: "vive tu casa con Iberdrola"' },
      { icon: Trophy, title: "Gamificación NFC", desc: "Sorteos y desafíos vinculados a los productos" },
    ],
    image: entorno,
    imageAlt: "Mockup",
  },
  {
    num: "05",
    name: "Dinamización",
    desc: "Llega el momento humano. El comercial cuenta con toda la información previa del cliente y herramientas digitales para ofrecer un asesoramiento real, no improvisado.",
    tech: [
      { icon: ScanLine, title: "Cuestionario inteligente", desc: "Tipo vivienda → orientación → consumo → recomendación personalizada" },
      { icon: UserCheck, title: "Comercial conectado", desc: "Acceso al perfil del cliente y a su recorrido por la tienda" },
      { icon: Bot, title: "Robótica", desc: "Asistente robotizado que orienta, informa y entretiene" },
    ],
     image: dina,
    imageAlt: "Mockup",
  },
  {
    num: "06",
    name: "Cierre",
    desc: "Cerramos el círculo. Medimos la satisfacción, capturamos el feedback, y activamos venta cruzada inteligente para mantener la relación viva.",
    tech: [
      { icon: CheckCircle2, title: "Encuesta de satisfacción", desc: "NPS, comentarios y oportunidades de mejora en el momento" },
      { icon: Repeat, title: "Venta cruzada con IA", desc: "Recomendación automatizada de producto complementario" },
      { icon: Mail, title: "Seguimiento post-visita", desc: "Resumen, recomendación y presupuesto enviado por app o email" },
    ],
     image: satis,
    imageAlt: "Mockup",
  },
];

const RecorridoSection = () => (
  <section id="recorrido" className="py-12 md:py-16 bg-background">
    <div className="container mx-auto px-4">
      <ScrollReveal>
        <div className="text-center max-w-3xl mx-auto mb-10">
          <span className="inline-block text-xs uppercase tracking-[0.3em] text-accent font-primary font-bold mb-4">
            04
          </span>
          <h2 className="text-3xl md:text-5xl font-bold text-foreground">Recorrido</h2>
        </div>
      </ScrollReveal>

      <ScrollReveal delay={0.1}>
        <div className="max-w-4xl mx-auto text-center mb-12">
          <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
            Seis fases conectadas. Una sola experiencia continua desde mucho antes de llegar a la tienda hasta después de salir.
          </p>
        </div>
      </ScrollReveal>

      {/* Mapa de fases */}
      <ScrollReveal delay={0.15}>
        <div className="max-w-5xl mx-auto mb-16 dark-card p-6 md:p-8">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3">
            {fases.map((fase, i) => (
              <motion.a
                key={fase.num}
                href={`#fase-${fase.num}`}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                whileHover={{ y: -3 }}
                className="rounded-xl p-4 border border-white/10 hover:border-accent/60 hover:bg-white/[0.04] transition-all cursor-pointer"
              >
                <span className="block text-[10px] uppercase tracking-[0.18em] text-accent font-bold mb-1">
                  Fase {fase.num}
                </span>
                <h4 className="text-white font-bold text-sm">{fase.name}</h4>
              </motion.a>
            ))}
          </div>
        </div>
      </ScrollReveal>

      {/* Fases en detalle */}
      <div className="max-w-6xl mx-auto space-y-16">
        {fases.map((fase, idx) => {
          const reverse = idx % 2 === 1;
          return (
            <ScrollReveal key={fase.num} delay={0.05}>
              <div id={`fase-${fase.num}`} className={`grid lg:grid-cols-2 gap-8 items-center ${reverse ? "lg:[direction:rtl]" : ""}`}>
                <div className={reverse ? "lg:[direction:ltr]" : ""}>
                  <div className="inline-flex items-center gap-3 mb-4">
                    <span className="w-10 h-10 rounded-full bg-accent text-accent-foreground flex items-center justify-center font-bold text-sm">
                      {fase.num}
                    </span>
                    <span className="text-[10px] uppercase tracking-[0.2em] text-accent font-bold">
                      Fase
                    </span>
                  </div>
                  <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-3">{fase.name}</h3>
                  <p className="text-sm md:text-base text-muted-foreground leading-relaxed mb-6">
                    {fase.desc}
                  </p>

                  <div className="space-y-2.5">
                    {fase.tech.map((t, i) => {
                      const Icon = t.icon;
                      return (
                        <motion.div
                          key={t.title}
                          initial={{ opacity: 0, x: reverse ? 10 : -10 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true }}
                          transition={{ delay: 0.15 + i * 0.06 }}
                          whileHover={{ x: reverse ? -4 : 4 }}
                          className="flex items-start gap-3 p-3 rounded-xl bg-card border border-border hover:border-accent/50 transition-colors"
                        >
                          <div className="w-9 h-9 rounded-lg bg-accent/10 border border-accent/20 flex items-center justify-center shrink-0">
                            <Icon className="w-4 h-4 text-accent" strokeWidth={2.5} />
                          </div>
                          <div className="text-left">
                            <h4 className="text-sm font-bold text-foreground mb-0.5">{t.title}</h4>
                            <p className="text-xs text-muted-foreground leading-relaxed">{t.desc}</p>
                          </div>
                        </motion.div>
                      );
                    })}
                  </div>
                </div>

                <div className={reverse ? "lg:[direction:ltr]" : ""}>
                  {fase.image ? (
                    <motion.div
                      whileHover={{ scale: 1.015 }}
                      transition={{ duration: 0.3 }}
                      className="rounded-2xl overflow-hidden shadow-2xl border border-border"
                    >
                      <img
                        src={fase.image}
                        alt={fase.imageAlt}
                        className="w-full h-auto object-cover"
                        loading="lazy"
                      />
                    </motion.div>
                  ) : (
                    <div className="rounded-2xl bg-card border border-border p-12 min-h-[300px] flex flex-col items-center justify-center text-center">
                      <div className="w-16 h-16 rounded-full bg-accent/10 border border-accent/20 flex items-center justify-center mb-4">
                        <Sparkles className="w-7 h-7 text-accent" strokeWidth={2} />
                      </div>
                      <h4 className="text-base font-bold text-foreground mb-1">Fase {fase.num}</h4>
                      <p className="text-sm text-muted-foreground max-w-xs">
                        {fase.tech.map((t) => t.title).join(" · ")}
                      </p>
                    </div>
                  )}
                  {fase.caption && (
                    <p className="text-xs text-muted-foreground italic text-center mt-3">
                      {fase.caption}
                    </p>
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

export default RecorridoSection;
