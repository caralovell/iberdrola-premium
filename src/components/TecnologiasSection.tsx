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
    title: "IoT",
    desc: "Red de sensores conectados que convierte la tienda en un espacio inteligente. Mide en tiempo real el aforo, el flujo de personas por zonas, la temperatura, la humedad y los niveles de confort, y vuelca todo en un dashboard único que sirve tanto al equipo de tienda (para optimizar atención y consumo energético) como a la dirección (para comparar tiendas, identificar horas pico y entender el comportamiento real del cliente). Es la capa que hace que la tienda no solo atienda, sino que también aprenda.",
    image: null,
  },
  {
    title: "NFC",
    desc: "Plataforma de WiFi marketing que convierte la conexión a la red de la tienda en una oportunidad de captación. Al conectarse, el cliente aterriza en una landing personalizada de Iberdrola con acceso por QR o NFC, donde puede explorar contenido, recibir ofertas y participar en sorteos vinculados a los productos de la tienda. Cada interacción queda registrada, alimentando el perfil del cliente y permitiendo seguimiento posterior por email o SMS.",
    image: wipass,
  },
  {
    title: "Cuestionario inteligente",
    desc: "Un flujo guiado de pocos pasos en el que el cliente describe su vivienda — tipo, orientación, distribución, consumo — y, en menos de un minuto, recibe una recomendación personalizada de soluciones Iberdrola: aerotermia, placas solares, smart home o aerotérmia, según su perfil. La interacción puede iniciarse en el cuestionario previo a la visita (desde la app o un SMS con cita) y completarse en el comercial dentro de la tienda, de modo que cuando el cliente llega, el comercial ya tiene contexto y la conversación arranca con una propuesta concreta de ahorro energético en la mesa.",
    image: mockupCuestionario,
  },
  {
    title: "IA",
    desc: "Una capa de inteligencia que conecta lo que el cliente cuenta (cuestionario, perfil energético, recorrido en la tienda) con las soluciones de Iberdrola: cargador para coche eléctrico, placas solares, aerotermia, domótica y smart home. La IA simula consumo y ahorro estimado, recomienda el pack más adecuado al perfil del cliente, y activa venta cruzada inteligente: si alguien ya está interesado en placas solares, sugiere automáticamente el cargador EV compatible. Decisiones de minutos en lugar de visitas múltiples.",
    image: mockupRecomendacion,
  },
  {
    title: "Experiencia Inmersiva",
    desc: "Una recreación inmersiva de la vivienda del cliente donde puede ver, antes de contratar, cómo cambia su casa con las soluciones de Iberdrola: cómo se integran las placas en su tejado, cómo funciona la aerotermia en invierno, cómo responde el smart home a sus rutinas. Mediante realidad virtual con gafas o realidad aumentada desde el móvil sobre los productos en la tienda, el cliente deja de imaginar y empieza a ver el resultado — el salto emocional que convierte una propuesta técnica en una decisión personal.",
    image: null,
  },
  {
    title: "Robótica",
    desc: "Un asistente robotizado presente en la tienda que da la bienvenida, orienta al cliente hacia la zona que le interesa, responde dudas básicas sobre los productos y entretiene mientras espera su turno. Más allá del impacto visual y el "factor wow" propio de un espacio premium, libera al comercial de las consultas repetitivas para que pueda centrarse en lo importante: la conversación de asesoramiento real con quien ya está preparado para comprar.",
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
