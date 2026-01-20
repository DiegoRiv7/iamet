/**
 * Services Page - IAMET
 * Swiss Precision Tech Design
 * Página de servicios mostrando capacidades de la empresa
 */

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ChatBot from "@/components/ChatBot";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { motion } from "framer-motion";
import { 
  Network, 
  Shield, 
  Volume2, 
  MonitorPlay, 
  Code2, 
  Laptop, 
  Radio,
  ArrowRight,
  CheckCircle
} from "lucide-react";

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 }
  }
};

const services = [
  {
    id: "infraestructura",
    icon: Network,
    title: "Infraestructura Física",
    subtitle: "Cableado Estructurado",
    benefit: "Conectividad confiable que garantiza la comunicación ininterrumpida de su empresa",
    features: [
      "Diseño e instalación de cableado categoría 6/6A/7",
      "Certificación y documentación completa",
      "Fibra óptica y backbone de alta velocidad"
    ],
    image: "/images/services-network.jpg"
  },
  {
    id: "seguridad",
    icon: Shield,
    title: "Seguridad",
    subtitle: "Control de Acceso y CCTV",
    benefit: "Protección integral de sus instalaciones con monitoreo 24/7 y control de accesos",
    features: [
      "Sistemas de videovigilancia IP de alta definición",
      "Control de acceso biométrico y tarjetas",
      "Integración con sistemas de alarma"
    ],
    image: "/images/security-systems.jpg"
  },
  {
    id: "audio",
    icon: Volume2,
    title: "Audio y Voceo",
    subtitle: "Sistemas de Sonido Profesional",
    benefit: "Comunicación clara y efectiva en todas sus instalaciones",
    features: [
      "Sistemas de voceo y paging",
      "Audio ambiental y música funcional",
      "Integración con sistemas de emergencia"
    ],
    image: "https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?w=800&q=80"
  },
  {
    id: "salas",
    icon: MonitorPlay,
    title: "Salas de Juntas",
    subtitle: "Equipamiento Audiovisual",
    benefit: "Espacios de colaboración equipados con tecnología de punta",
    features: [
      "Pantallas interactivas y proyección",
      "Videoconferencia profesional",
      "Automatización y control centralizado"
    ],
    image: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&q=80"
  },
  {
    id: "software",
    icon: Code2,
    title: "Desarrollo de Software",
    subtitle: "Soluciones a la Medida",
    benefit: "Software personalizado que automatiza y optimiza sus procesos de negocio",
    features: [
      "Aplicaciones web y móviles",
      "Integración de sistemas empresariales",
      "Automatización de procesos (RPA)"
    ],
    image: "/images/software-dashboard.jpg"
  },
  {
    id: "computo",
    icon: Laptop,
    title: "Equipo de Cómputo",
    subtitle: "Hardware Empresarial",
    benefit: "Equipamiento confiable con soporte y mantenimiento incluido",
    features: [
      "Venta y arrendamiento de equipos",
      "Servidores y almacenamiento",
      "Mantenimiento preventivo y correctivo"
    ],
    image: "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=800&q=80"
  },
  {
    id: "rfid",
    icon: Radio,
    title: "Soluciones RFID",
    subtitle: "Identificación por Radiofrecuencia",
    benefit: "Trazabilidad y control de activos en tiempo real",
    features: [
      "Control de inventarios automatizado",
      "Seguimiento de activos fijos",
      "Integración con sistemas ERP"
    ],
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80"
  }
];

export default function Services() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />
      
      <main className="flex-1 pt-20">
        {/* Hero Section */}
        <section className="section-padding bg-secondary/30">
          <div className="container">
            <motion.div
              initial="hidden"
              animate="visible"
              variants={staggerContainer}
              className="max-w-3xl"
            >
              <motion.span variants={fadeInUp} className="text-sm font-medium text-primary uppercase tracking-widest">
                Nuestros Servicios
              </motion.span>
              <motion.h1 variants={fadeInUp} className="mt-4 mb-6">
                Capacidades que garantizan su operación
              </motion.h1>
              <motion.p variants={fadeInUp} className="text-xl text-muted-foreground">
                Soluciones integrales de infraestructura tecnológica diseñadas para 
                mantener su negocio funcionando sin interrupciones.
              </motion.p>
            </motion.div>
          </div>
        </section>

        {/* Services List */}
        <section className="section-padding">
          <div className="container">
            <div className="space-y-24">
              {services.map((service, index) => (
                <motion.div
                  key={service.id}
                  id={service.id}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, margin: "-100px" }}
                  variants={staggerContainer}
                  className={`grid lg:grid-cols-2 gap-12 lg:gap-20 items-center ${
                    index % 2 === 1 ? "lg:flex-row-reverse" : ""
                  }`}
                >
                  {/* Content */}
                  <div className={index % 2 === 1 ? "lg:order-2" : ""}>
                    <motion.div variants={fadeInUp} className="flex items-center gap-4 mb-6">
                      <div className="w-14 h-14 rounded-lg bg-primary/10 flex items-center justify-center">
                        <service.icon className="w-7 h-7 text-primary" />
                      </div>
                      <div>
                        <span className="text-sm text-muted-foreground">{service.subtitle}</span>
                        <h2 className="text-3xl md:text-4xl">{service.title}</h2>
                      </div>
                    </motion.div>

                    <motion.p variants={fadeInUp} className="text-lg text-muted-foreground mb-8">
                      {service.benefit}
                    </motion.p>

                    <motion.div variants={fadeInUp} className="space-y-3 mb-8">
                      {service.features.map((feature, i) => (
                        <div key={i} className="flex items-start gap-3">
                          <CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                          <span className="text-foreground">{feature}</span>
                        </div>
                      ))}
                    </motion.div>

                    <motion.div variants={fadeInUp} className="flex flex-wrap gap-4">
                      <Link href="/contacto?tipo=ventas">
                        <Button>
                          Hablar con un asesor
                          <ArrowRight className="ml-2 w-4 h-4" />
                        </Button>
                      </Link>
                      <Link href="/contacto">
                        <Button variant="outline">
                          Solicitar visita
                        </Button>
                      </Link>
                    </motion.div>
                  </div>

                  {/* Image */}
                  <motion.div 
                    variants={fadeInUp}
                    className={index % 2 === 1 ? "lg:order-1" : ""}
                  >
                    <div className="relative">
                      <img
                        src={service.image}
                        alt={service.title}
                        className="rounded-lg shadow-xl w-full aspect-[4/3] object-cover"
                      />
                      {/* Number decoration */}
                      <div className="absolute -top-6 -right-6 w-20 h-20 bg-primary rounded-lg flex items-center justify-center shadow-lg">
                        <span className="text-3xl font-black text-white">
                          {String(index + 1).padStart(2, '0')}
                        </span>
                      </div>
                    </div>
                  </motion.div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="section-padding bg-primary">
          <div className="container">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={staggerContainer}
              className="max-w-3xl mx-auto text-center"
            >
              <motion.h2 variants={fadeInUp} className="text-white mb-6">
                ¿No encuentra lo que busca?
              </motion.h2>
              <motion.p variants={fadeInUp} className="text-white/80 text-lg mb-10">
                Contamos con capacidad para desarrollar soluciones personalizadas 
                que se adapten exactamente a las necesidades de su negocio.
              </motion.p>
              <motion.div variants={fadeInUp}>
                <Link href="/contacto">
                  <Button size="lg" variant="secondary" className="text-base px-8 h-12">
                    Contáctenos
                    <ArrowRight className="ml-2 w-4 h-4" />
                  </Button>
                </Link>
              </motion.div>
            </motion.div>
          </div>
        </section>
      </main>

      <Footer />
      <ChatBot />
    </div>
  );
}
