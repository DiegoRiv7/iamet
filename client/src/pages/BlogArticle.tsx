/**
 * Blog Article Page - IAMET
 * Swiss Precision Tech Design
 * Página de artículo individual con diseño editorial limpio
 */

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ChatBot from "@/components/ChatBot";
import { Button } from "@/components/ui/button";
import { Link, useParams } from "wouter";
import { motion } from "framer-motion";
import { Calendar, Clock, ArrowLeft, Share2, Linkedin, Twitter, Facebook, Tag } from "lucide-react";

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
};

// Artículos de ejemplo (mismo data que en Blog.tsx)
const articles: Record<string, {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  category: string;
  categoryName: string;
  date: string;
  readTime: string;
  image: string;
  author: { name: string; role: string; };
}> = {
  "continuidad-operativa-2026": {
    id: "continuidad-operativa-2026",
    title: "Continuidad Operativa: La prioridad empresarial para 2026",
    excerpt: "Descubra por qué las empresas líderes están invirtiendo en infraestructura resiliente y cómo puede preparar su organización para los desafíos del próximo año.",
    content: `
## La nueva realidad empresarial

En un mundo donde la tecnología es el corazón de las operaciones empresariales, la continuidad operativa ha dejado de ser una opción para convertirse en una necesidad crítica. Las empresas que no cuenten con planes robustos de continuidad enfrentarán riesgos significativos en 2026.

## ¿Qué es la continuidad operativa?

La continuidad operativa se refiere a la capacidad de una organización para mantener sus funciones esenciales durante y después de un desastre o interrupción. Esto incluye:

- **Infraestructura tecnológica resiliente**: Sistemas redundantes que garantizan disponibilidad 24/7
- **Planes de recuperación ante desastres**: Procedimientos documentados para restaurar operaciones
- **Respaldos y replicación de datos**: Protección contra pérdida de información crítica
- **Personal capacitado**: Equipos preparados para actuar ante contingencias

## Tendencias para 2026

### 1. Infraestructura híbrida

Las empresas están adoptando modelos híbridos que combinan infraestructura on-premise con servicios en la nube, maximizando la flexibilidad y minimizando puntos únicos de falla.

### 2. Automatización de respuesta

Los sistemas de monitoreo inteligente pueden detectar y responder a incidentes antes de que afecten las operaciones, reduciendo significativamente los tiempos de inactividad.

### 3. Ciberseguridad integrada

La seguridad ya no es un componente separado; está integrada en cada capa de la infraestructura, desde el cableado físico hasta las aplicaciones.

## Cómo preparar su organización

El primer paso es realizar un diagnóstico completo de su infraestructura actual. Identifique los puntos críticos, evalúe los riesgos y desarrolle un plan de acción priorizado.

En IAMET, ayudamos a empresas de todos los tamaños a fortalecer su continuidad operativa con soluciones integrales que abarcan infraestructura física, seguridad y software especializado.

## Conclusión

La inversión en continuidad operativa no es un gasto, es una protección esencial para el futuro de su negocio. Las empresas que actúen ahora estarán mejor posicionadas para enfrentar los desafíos de 2026 y más allá.
    `,
    category: "continuidad",
    categoryName: "Continuidad Operativa",
    date: "2026-01-15",
    readTime: "5 min",
    image: "/images/hero-infrastructure.jpg",
    author: { name: "Equipo IAMET", role: "Especialistas en Continuidad Operativa" }
  },
  "cctv-inteligente": {
    id: "cctv-inteligente",
    title: "CCTV Inteligente: Más allá de la vigilancia tradicional",
    excerpt: "Los sistemas de videovigilancia modernos incorporan inteligencia artificial para detectar amenazas en tiempo real.",
    content: `
## La evolución del CCTV

Los sistemas de circuito cerrado de televisión han evolucionado dramáticamente en la última década. Lo que antes era simplemente grabar video para revisión posterior, ahora es un sistema inteligente capaz de analizar, alertar y actuar en tiempo real.

## Características del CCTV inteligente

### Detección de comportamiento

Los algoritmos de IA pueden identificar comportamientos sospechosos como merodeo, acceso no autorizado o movimientos inusuales, alertando al personal de seguridad antes de que ocurra un incidente.

### Reconocimiento facial

Sistemas avanzados pueden identificar personas autorizadas y alertar sobre la presencia de individuos no reconocidos en áreas restringidas.

### Análisis de multitudes

En espacios públicos o eventos, el CCTV inteligente puede monitorear densidad de personas y detectar situaciones potencialmente peligrosas.

## Integración con otros sistemas

El verdadero poder del CCTV inteligente se manifiesta cuando se integra con:

- Control de acceso
- Sistemas de alarma
- Iluminación automatizada
- Comunicación de emergencia

## Consideraciones de implementación

Al implementar un sistema de CCTV inteligente, es importante considerar:

1. **Privacidad**: Cumplir con regulaciones de protección de datos
2. **Almacenamiento**: Planificar capacidad para video de alta resolución
3. **Conectividad**: Asegurar ancho de banda suficiente
4. **Mantenimiento**: Establecer rutinas de verificación y actualización

## El futuro de la vigilancia

La tendencia apunta hacia sistemas cada vez más autónomos, capaces de tomar decisiones y coordinar respuestas sin intervención humana, siempre bajo supervisión y con controles éticos apropiados.
    `,
    category: "seguridad",
    categoryName: "Seguridad",
    date: "2026-01-10",
    readTime: "4 min",
    image: "/images/security-systems.jpg",
    author: { name: "Equipo IAMET", role: "Especialistas en Seguridad" }
  }
};

function formatDate(dateString: string): string {
  const date = new Date(dateString);
  return date.toLocaleDateString('es-MX', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });
}

export default function BlogArticle() {
  const params = useParams();
  const articleId = params.slug || "";
  const article = articles[articleId];

  // Si no existe el artículo, mostrar mensaje
  if (!article) {
    return (
      <div className="min-h-screen flex flex-col bg-background">
        <Header />
        <main className="flex-1 pt-20 flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-4xl font-bold mb-4">Artículo no encontrado</h1>
            <p className="text-muted-foreground mb-8">
              El artículo que busca no existe o ha sido movido.
            </p>
            <Link href="/blog">
              <Button>
                <ArrowLeft className="mr-2 w-4 h-4" />
                Volver al blog
              </Button>
            </Link>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />
      
      <main className="flex-1 pt-20">
        {/* Hero Image */}
        <div className="relative h-[50vh] min-h-[400px]">
          <img
            src={article.image}
            alt={article.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent" />
        </div>

        {/* Article Content */}
        <article className="container relative -mt-32 z-10">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeInUp}
            className="max-w-3xl mx-auto"
          >
            {/* Back Link */}
            <Link href="/blog" className="inline-flex items-center text-sm text-muted-foreground hover:text-primary mb-8 transition-colors">
              <ArrowLeft className="mr-2 w-4 h-4" />
              Volver al blog
            </Link>

            {/* Article Header */}
            <div className="bg-card rounded-lg p-8 md:p-12 shadow-xl border border-border mb-8">
              <div className="flex items-center gap-4 text-sm text-muted-foreground mb-6">
                <span className="flex items-center gap-1 bg-primary/10 text-primary px-3 py-1 rounded-full">
                  <Tag className="w-3 h-3" />
                  {article.categoryName}
                </span>
                <span className="flex items-center gap-1">
                  <Calendar className="w-4 h-4" />
                  {formatDate(article.date)}
                </span>
                <span className="flex items-center gap-1">
                  <Clock className="w-4 h-4" />
                  {article.readTime}
                </span>
              </div>

              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
                {article.title}
              </h1>

              <p className="text-xl text-muted-foreground mb-8">
                {article.excerpt}
              </p>

              {/* Author */}
              <div className="flex items-center justify-between pt-6 border-t border-border">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                    <span className="text-primary font-semibold">IA</span>
                  </div>
                  <div>
                    <p className="font-medium">{article.author.name}</p>
                    <p className="text-sm text-muted-foreground">{article.author.role}</p>
                  </div>
                </div>

                {/* Share */}
                <div className="flex items-center gap-2">
                  <span className="text-sm text-muted-foreground mr-2">Compartir:</span>
                  <Button variant="ghost" size="icon" className="h-9 w-9">
                    <Linkedin className="w-4 h-4" />
                  </Button>
                  <Button variant="ghost" size="icon" className="h-9 w-9">
                    <Twitter className="w-4 h-4" />
                  </Button>
                  <Button variant="ghost" size="icon" className="h-9 w-9">
                    <Facebook className="w-4 h-4" />
                  </Button>
                </div>
              </div>
            </div>

            {/* Article Body */}
            <div className="prose prose-lg max-w-none">
              <div 
                className="bg-card rounded-lg p-8 md:p-12 border border-border"
                dangerouslySetInnerHTML={{ 
                  __html: article.content
                    .replace(/## /g, '<h2 class="text-2xl font-bold mt-8 mb-4">')
                    .replace(/### /g, '<h3 class="text-xl font-semibold mt-6 mb-3">')
                    .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
                    .replace(/- /g, '<li class="ml-4">')
                    .replace(/\n\n/g, '</p><p class="mb-4 text-muted-foreground">')
                    .replace(/1\. /g, '<li class="ml-4 list-decimal">')
                }}
              />
            </div>

            {/* CTA */}
            <div className="bg-primary rounded-lg p-8 md:p-12 text-center mt-12">
              <h3 className="text-2xl font-bold text-white mb-4">
                ¿Necesita ayuda con su continuidad operativa?
              </h3>
              <p className="text-white/80 mb-6">
                Nuestros expertos pueden ayudarle a evaluar y fortalecer su infraestructura.
              </p>
              <Link href="/contacto?tipo=ventas">
                <Button variant="secondary" size="lg">
                  Solicitar diagnóstico gratuito
                </Button>
              </Link>
            </div>
          </motion.div>
        </article>

        {/* Related Articles */}
        <section className="section-padding bg-secondary/30 mt-16">
          <div className="container">
            <h2 className="text-2xl font-bold mb-8">Artículos relacionados</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {Object.values(articles)
                .filter(a => a.id !== articleId)
                .slice(0, 3)
                .map((relatedArticle) => (
                  <Link key={relatedArticle.id} href={`/blog/${relatedArticle.id}`}>
                    <article className="group bg-card rounded-lg overflow-hidden border border-border hover:border-primary/50 transition-all">
                      <img
                        src={relatedArticle.image}
                        alt={relatedArticle.title}
                        className="w-full aspect-video object-cover"
                      />
                      <div className="p-6">
                        <h3 className="font-semibold mb-2 group-hover:text-primary transition-colors line-clamp-2">
                          {relatedArticle.title}
                        </h3>
                        <p className="text-sm text-muted-foreground line-clamp-2">
                          {relatedArticle.excerpt}
                        </p>
                      </div>
                    </article>
                  </Link>
                ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
      <ChatBot />
    </div>
  );
}
