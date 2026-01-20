/**
 * Software Page - IAMET
 * Swiss Precision Tech Design
 * Página de software propio con módulos: Helpdesk, CRM, Cotizador, Control de Visitas, Almacenes
 */

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ChatBot from "@/components/ChatBot";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Link } from "wouter";
import { motion } from "framer-motion";
import { 
  Headphones, 
  Users, 
  Calculator, 
  ClipboardCheck, 
  Package,
  ArrowRight,
  CheckCircle,
  Zap,
  Clock,
  BarChart3
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

const softwareModules = [
  {
    id: "helpdesk",
    icon: Headphones,
    title: "Helpdesk",
    tagline: "Gestión de tickets y soporte técnico",
    problem: "Los tickets de soporte se pierden, no hay seguimiento y los tiempos de respuesta son impredecibles.",
    benefit: "Sistema centralizado de tickets con SLAs automatizados, escalamiento inteligente y métricas en tiempo real.",
    features: [
      "Creación y seguimiento de tickets multicanal",
      "Asignación automática por categoría y carga de trabajo",
      "SLAs configurables con alertas automáticas",
      "Base de conocimiento integrada",
      "Reportes de desempeño y satisfacción"
    ],
    metrics: [
      { value: "40%", label: "Reducción en tiempo de respuesta" },
      { value: "95%", label: "Tasa de resolución en primer contacto" },
      { value: "4.8/5", label: "Satisfacción del usuario" }
    ]
  },
  {
    id: "crm",
    icon: Users,
    title: "CRM",
    tagline: "Gestión de relaciones con clientes",
    problem: "La información de clientes está dispersa, se pierden oportunidades de venta y no hay visibilidad del pipeline.",
    benefit: "Vista 360° de cada cliente con historial completo, seguimiento de oportunidades y automatización de procesos comerciales.",
    features: [
      "Gestión completa de contactos y empresas",
      "Pipeline de ventas visual y personalizable",
      "Automatización de seguimientos y recordatorios",
      "Integración con correo y calendario",
      "Pronósticos de venta y reportes ejecutivos"
    ],
    metrics: [
      { value: "35%", label: "Incremento en conversión" },
      { value: "50%", label: "Reducción en ciclo de venta" },
      { value: "100%", label: "Visibilidad del pipeline" }
    ]
  },
  {
    id: "cotizador",
    icon: Calculator,
    title: "Cotizador",
    tagline: "Generación de propuestas comerciales",
    problem: "Las cotizaciones tardan días en generarse, tienen errores de precios y no hay control de versiones.",
    benefit: "Cotizaciones profesionales en minutos con precios actualizados, aprobaciones digitales y seguimiento automático.",
    features: [
      "Catálogo de productos y servicios centralizado",
      "Plantillas personalizables por tipo de cliente",
      "Flujos de aprobación configurables",
      "Firma electrónica integrada",
      "Conversión automática a orden de compra"
    ],
    metrics: [
      { value: "80%", label: "Reducción en tiempo de cotización" },
      { value: "0%", label: "Errores de precio" },
      { value: "2x", label: "Cotizaciones generadas por día" }
    ]
  },
  {
    id: "visitas",
    icon: ClipboardCheck,
    title: "Control de Visitas y Checadas",
    tagline: "Registro y seguimiento de personal",
    problem: "No hay control real de asistencia, las visitas a clientes no se documentan y el tiempo se pierde en reportes manuales.",
    benefit: "Registro automático de asistencia con geolocalización, evidencia fotográfica y reportes instantáneos.",
    features: [
      "Check-in/check-out con GPS y fotografía",
      "Registro de visitas a clientes con evidencia",
      "Cálculo automático de horas trabajadas",
      "Alertas de ausencias y retardos",
      "Integración con nómina"
    ],
    metrics: [
      { value: "99%", label: "Precisión en registros" },
      { value: "100%", label: "Trazabilidad de visitas" },
      { value: "60%", label: "Ahorro en tiempo administrativo" }
    ]
  },
  {
    id: "almacenes",
    icon: Package,
    title: "Administración de Almacenes",
    tagline: "Control de inventarios y logística",
    problem: "Inventarios inexactos, productos extraviados, faltantes no detectados a tiempo y exceso de stock innecesario.",
    benefit: "Inventario en tiempo real con alertas de reorden, trazabilidad completa y optimización de niveles de stock.",
    features: [
      "Control de entradas y salidas en tiempo real",
      "Múltiples almacenes y ubicaciones",
      "Alertas de stock mínimo y máximo",
      "Trazabilidad por lote y número de serie",
      "Integración con compras y ventas"
    ],
    metrics: [
      { value: "99.5%", label: "Exactitud de inventario" },
      { value: "30%", label: "Reducción de stock muerto" },
      { value: "25%", label: "Ahorro en costos de almacén" }
    ]
  }
];

export default function Software() {
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
                Software IAMET
              </motion.span>
              <motion.h1 variants={fadeInUp} className="mt-4 mb-6">
                Soluciones propias para su operación
              </motion.h1>
              <motion.p variants={fadeInUp} className="text-xl text-muted-foreground">
                Software desarrollado por IAMET, diseñado específicamente para resolver 
                los desafíos operativos más comunes de las empresas mexicanas.
              </motion.p>
            </motion.div>
          </div>
        </section>

        {/* Software Modules - Tabs */}
        <section className="section-padding">
          <div className="container">
            <Tabs defaultValue="helpdesk" className="w-full">
              {/* Tabs Navigation */}
              <TabsList className="w-full flex flex-wrap justify-start gap-2 bg-transparent h-auto p-0 mb-12">
                {softwareModules.map((module) => (
                  <TabsTrigger
                    key={module.id}
                    value={module.id}
                    className="flex items-center gap-2 px-6 py-3 rounded-lg border border-border data-[state=active]:bg-primary data-[state=active]:text-white data-[state=active]:border-primary transition-all"
                  >
                    <module.icon className="w-4 h-4" />
                    <span className="font-medium">{module.title}</span>
                  </TabsTrigger>
                ))}
              </TabsList>

              {/* Tabs Content */}
              {softwareModules.map((module) => (
                <TabsContent key={module.id} value={module.id} className="mt-0">
                  <motion.div
                    initial="hidden"
                    animate="visible"
                    variants={staggerContainer}
                    className="grid lg:grid-cols-2 gap-12 lg:gap-20"
                  >
                    {/* Content */}
                    <div>
                      <motion.div variants={fadeInUp} className="mb-8">
                        <div className="flex items-center gap-4 mb-4">
                          <div className="w-16 h-16 rounded-xl bg-primary/10 flex items-center justify-center">
                            <module.icon className="w-8 h-8 text-primary" />
                          </div>
                          <div>
                            <h2 className="text-3xl md:text-4xl font-bold">{module.title}</h2>
                            <p className="text-muted-foreground">{module.tagline}</p>
                          </div>
                        </div>
                      </motion.div>

                      {/* Problem */}
                      <motion.div variants={fadeInUp} className="mb-8">
                        <div className="flex items-start gap-3 p-4 bg-destructive/5 border border-destructive/20 rounded-lg">
                          <div className="w-6 h-6 rounded-full bg-destructive/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                            <span className="text-destructive text-sm font-bold">!</span>
                          </div>
                          <div>
                            <span className="text-sm font-medium text-destructive uppercase tracking-wider">El problema</span>
                            <p className="text-foreground mt-1">{module.problem}</p>
                          </div>
                        </div>
                      </motion.div>

                      {/* Benefit */}
                      <motion.div variants={fadeInUp} className="mb-8">
                        <div className="flex items-start gap-3 p-4 bg-primary/5 border border-primary/20 rounded-lg">
                          <div className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                            <Zap className="w-3 h-3 text-primary" />
                          </div>
                          <div>
                            <span className="text-sm font-medium text-primary uppercase tracking-wider">La solución</span>
                            <p className="text-foreground mt-1">{module.benefit}</p>
                          </div>
                        </div>
                      </motion.div>

                      {/* Features */}
                      <motion.div variants={fadeInUp} className="mb-8">
                        <h4 className="text-lg font-semibold mb-4">Características principales</h4>
                        <div className="space-y-3">
                          {module.features.map((feature, i) => (
                            <div key={i} className="flex items-start gap-3">
                              <CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                              <span>{feature}</span>
                            </div>
                          ))}
                        </div>
                      </motion.div>

                      {/* CTA */}
                      <motion.div variants={fadeInUp}>
                        <Link href={`/contacto?tipo=ventas&servicio=software-${module.id}`}>
                          <Button size="lg">
                            Solicitar demo
                            <ArrowRight className="ml-2 w-4 h-4" />
                          </Button>
                        </Link>
                      </motion.div>
                    </div>

                    {/* Visual */}
                    <motion.div variants={fadeInUp} className="space-y-8">
                      {/* Screenshot placeholder */}
                      <div className="relative">
                        <img
                          src="/images/software-dashboard.jpg"
                          alt={`${module.title} - Captura de pantalla`}
                          className="rounded-lg shadow-2xl w-full"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-foreground/20 to-transparent rounded-lg" />
                      </div>

                      {/* Metrics */}
                      <div className="grid grid-cols-3 gap-4">
                        {module.metrics.map((metric, i) => (
                          <div key={i} className="text-center p-4 bg-card border border-border rounded-lg">
                            <div className="text-2xl md:text-3xl font-black text-primary">{metric.value}</div>
                            <div className="text-xs text-muted-foreground mt-1">{metric.label}</div>
                          </div>
                        ))}
                      </div>
                    </motion.div>
                  </motion.div>
                </TabsContent>
              ))}
            </Tabs>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="section-padding bg-secondary/30">
          <div className="container">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={staggerContainer}
              className="text-center mb-16"
            >
              <motion.span variants={fadeInUp} className="text-sm font-medium text-primary uppercase tracking-widest">
                Ventajas
              </motion.span>
              <motion.h2 variants={fadeInUp} className="mt-4">
                ¿Por qué elegir software IAMET?
              </motion.h2>
            </motion.div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={staggerContainer}
              className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
            >
              {[
                { icon: Zap, title: "Implementación rápida", description: "Puesta en marcha en días, no meses" },
                { icon: Clock, title: "Soporte local", description: "Equipo en México, en tu zona horaria" },
                { icon: BarChart3, title: "Personalizable", description: "Se adapta a tus procesos, no al revés" },
                { icon: Users, title: "Capacitación incluida", description: "Tu equipo listo para usar el sistema" }
              ].map((item, i) => (
                <motion.div
                  key={i}
                  variants={fadeInUp}
                  className="text-center p-6"
                >
                  <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-4">
                    <item.icon className="w-7 h-7 text-primary" />
                  </div>
                  <h4 className="text-lg font-semibold mb-2">{item.title}</h4>
                  <p className="text-muted-foreground text-sm">{item.description}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="section-padding bg-foreground text-background">
          <div className="container">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={staggerContainer}
              className="max-w-3xl mx-auto text-center"
            >
              <motion.h2 variants={fadeInUp} className="text-background mb-6">
                ¿Listo para optimizar su operación?
              </motion.h2>
              <motion.p variants={fadeInUp} className="text-background/70 text-lg mb-10">
                Solicite una demostración personalizada y descubra cómo nuestro software 
                puede transformar la eficiencia de su empresa.
              </motion.p>
              <motion.div variants={fadeInUp} className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/contacto?tipo=ventas&servicio=software">
                  <Button size="lg" className="text-base px-8 h-12 bg-primary hover:bg-primary/90">
                    Solicitar demo gratuita
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
