import { motion } from "framer-motion";
import ScrollReveal from "./ScrollReveal";

// Imágenes ya disponibles en tu proyecto
import vistaTienda from "@/assets/gestor.png";
import mockupCuestionario from "@/assets/mockup-cuestionario.png";
import mockupRecomendacion from "@/assets/mockup-recomendacion.png";
import wipass from "@/assets/iberdrolanfc.png";

const tecnologias = [
  {
    title: "Gestor de colas",
    desc: "Sistema de gestión de turnos ya operativo en las tiendas Iberdrola. El cliente saca ticket en el kiosko según el motivo de su visita y el sistema le asigna al comercial disponible. Nuestra propuesta lo integra al journey digital: la cita se puede reservar desde la app antes de llegar, el Wipass identifica al cliente automáticamente al entrar, y el ticket se asigna sin necesidad de pulsar nada en el kiosko.",
    image: vistaTienda,
  },
  {
    title: "IoT Nespra",
    desc: "Sensorización de la tienda en tiempo real: conteo de personas, movimiento, temperatura, humedad y bienestar.",
    image: null,
  },
  {
    title: "Wipass",
    desc: "Plataforma de WiFi marketing que convierte la conexión a la red de la tienda en una oportunidad de captación. Al conectarse, el cliente aterriza en una landing personalizada de Iberdrola con acceso por QR o NFC, donde puede explorar contenido, recibir ofertas y participar en sorteos vinculados a los productos de la tienda. Cada interacción queda registrada, alimentando el perfil del cliente y permitiendo seguimiento posterior por email o SMS.",
    image: wipass,
  },
  {
    title: "Cuestionario inteligente",
    desc: "Tipo de vivienda → orientación → consumo → recomendación personalizada. Conoce al cliente y propone ahorro real.",
    image: mockupCuestionario,
  },
  {
    title: "IA aplicada a producto",
    desc: "Aplicada a cargador de coche eléctrico, placas solares, aerotermia y domótica. Recomendación, simulación y venta cruzada.",
    image: mockupRecomendacion,
  },
  {
    title: "Experiencia metaverso",
    desc: "Explicación inmersiva de los productos. 'Vive tu casa con Iberdrola' antes de contratarlo.",
    image: null,
  },
  {
    title: "Robótica",
    desc: "Asistente robotizado que orienta, informa y entretiene en el momento del asesoramiento comercial.",
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
          const reverse = i % 2 === 1;

          return (
            <ScrollReveal key={t.title} delay={0.05} direction={reverse ? "right" : "left"}>
              <div className={`grid lg:grid-cols-2 gap-8 lg:gap-12 items-center ${reverse ? "lg:[direction:rtl]" : ""}`}>
                {/* Texto */}
                <div className={reverse ? "lg:[direction:ltr]" : ""}>
                  <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-4">{t.title}</h3>
                  <p className="text-base text-muted-foreground leading-relaxed">{t.desc}</p>
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
                      className="relative rounded-3xl border border-border bg-card min-h-[280px] md:min-h-[340px] overflow-hidden"
                    >
                      <div className="absolute inset-0 bg-gradient-to-br from-accent/10 via-transparent to-accent/5" />
                      <div className="absolute -top-20 -right-20 w-60 h-60 rounded-full bg-accent/15 blur-3xl" />
                      <div className="absolute -bottom-20 -left-20 w-60 h-60 rounded-full bg-accent/10 blur-3xl" />
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
