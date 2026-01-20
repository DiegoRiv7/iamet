/**
 * Blog Page - IAMET
 * Swiss Precision Tech Design
 * Listado de artículos estilo Apple Newsroom
 */

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ChatBot from "@/components/ChatBot";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { motion } from "framer-motion";
import { Calendar, Clock, ArrowRight, Tag } from "lucide-react";

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

// Categorías del blog
const categories = [
  { id: "all", name: "Todos" },
  { id: "continuidad", name: "Continuidad Operativa" },
  { id: "seguridad", name: "Seguridad" },
  { id: "infraestructura", name: "Infraestructura" },
  { id: "software", name: "Software" },
  { id: "mejores-practicas", name: "Mejores Prácticas" },
];

// Artículos de ejemplo
const articles = [
  {
    id: "continuidad-operativa-2026",
    title: "Continuidad Operativa: La prioridad empresarial para 2026",
    excerpt: "Descubra por qué las empresas líderes están invirtiendo en infraestructura resiliente y cómo puede preparar su organización para los desafíos del próximo año.",
    category: "continuidad",
    date: "2026-01-15",
    readTime: "5 min",
    image: "/images/hero-infrastructure.jpg",
    featured: true
  },
  {
    id: "cctv-inteligente",
    title: "CCTV Inteligente: Más allá de la vigilancia tradicional",
    excerpt: "Los sistemas de videovigilancia modernos incorporan inteligencia artificial para detectar amenazas en tiempo real. Conozca las últimas tendencias.",
    category: "seguridad",
    date: "2026-01-10",
    readTime: "4 min",
    image: "/images/security-systems.jpg",
    featured: false
  },
  {
    id: "cableado-estructurado-cat7",
    title: "Cableado Estructurado Cat 7: ¿Vale la pena la inversión?",
    excerpt: "Analizamos las ventajas del cableado categoría 7 frente a alternativas más económicas y cuándo tiene sentido hacer el upgrade.",
    category: "infraestructura",
    date: "2026-01-05",
    readTime: "6 min",
    image: "/images/services-network.jpg",
    featured: false
  },
  {
    id: "helpdesk-eficiente",
    title: "5 Claves para un Helpdesk Eficiente",
    excerpt: "Mejore los tiempos de respuesta y la satisfacción de sus usuarios con estas prácticas probadas en gestión de tickets de soporte.",
    category: "software",
    date: "2025-12-28",
    readTime: "4 min",
    image: "/images/software-dashboard.jpg",
    featured: false
  },
  {
    id: "plan-recuperacion-desastres",
    title: "Cómo Crear un Plan de Recuperación ante Desastres",
    excerpt: "Guía paso a paso para desarrollar un DRP efectivo que proteja su operación ante cualquier eventualidad.",
    category: "mejores-practicas",
    date: "2025-12-20",
    readTime: "8 min",
    image: "/images/team-collaboration.jpg",
    featured: false
  },
  {
    id: "rfid-inventarios",
    title: "RFID: Revolucionando el Control de Inventarios",
    excerpt: "Caso de estudio: cómo una empresa logró 99.5% de precisión en inventarios implementando tecnología RFID.",
    category: "infraestructura",
    date: "2025-12-15",
    readTime: "5 min",
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80",
    featured: false
  },
];

function formatDate(dateString: string): string {
  const date = new Date(dateString);
  return date.toLocaleDateString('es-MX', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });
}

export default function Blog() {
  const featuredArticle = articles.find(a => a.featured);
  const regularArticles = articles.filter(a => !a.featured);

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
                Blog
              </motion.span>
              <motion.h1 variants={fadeInUp} className="mt-4 mb-6">
                Insights y mejores prácticas
              </motion.h1>
              <motion.p variants={fadeInUp} className="text-xl text-muted-foreground">
                Artículos sobre continuidad operativa, seguridad, infraestructura y 
                las últimas tendencias en tecnología empresarial.
              </motion.p>
            </motion.div>
          </div>
        </section>

        {/* Categories */}
        <section className="py-8 border-b border-border">
          <div className="container">
            <div className="flex flex-wrap gap-2">
              {categories.map((category) => (
                <Button
                  key={category.id}
                  variant={category.id === "all" ? "default" : "outline"}
                  size="sm"
                  className="rounded-full"
                >
                  {category.name}
                </Button>
              ))}
            </div>
          </div>
        </section>

        {/* Featured Article */}
        {featuredArticle && (
          <section className="section-padding">
            <div className="container">
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeInUp}
              >
                <Link href={`/blog/${featuredArticle.id}`}>
                  <article className="group grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
                    <div className="relative overflow-hidden rounded-lg">
                      <img
                        src={featuredArticle.image}
                        alt={featuredArticle.title}
                        className="w-full aspect-[16/10] object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                      <div className="absolute top-4 left-4">
                        <span className="bg-primary text-white text-xs font-semibold px-3 py-1 rounded-full uppercase tracking-wider">
                          Destacado
                        </span>
                      </div>
                    </div>
                    <div>
                      <div className="flex items-center gap-4 text-sm text-muted-foreground mb-4">
                        <span className="flex items-center gap-1">
                          <Tag className="w-4 h-4" />
                          {categories.find(c => c.id === featuredArticle.category)?.name}
                        </span>
                        <span className="flex items-center gap-1">
                          <Calendar className="w-4 h-4" />
                          {formatDate(featuredArticle.date)}
                        </span>
                        <span className="flex items-center gap-1">
                          <Clock className="w-4 h-4" />
                          {featuredArticle.readTime}
                        </span>
                      </div>
                      <h2 className="mb-4 group-hover:text-primary transition-colors">
                        {featuredArticle.title}
                      </h2>
                      <p className="text-muted-foreground text-lg mb-6">
                        {featuredArticle.excerpt}
                      </p>
                      <span className="inline-flex items-center text-primary font-medium group-hover:gap-3 gap-2 transition-all">
                        Leer artículo
                        <ArrowRight className="w-4 h-4" />
                      </span>
                    </div>
                  </article>
                </Link>
              </motion.div>
            </div>
          </section>
        )}

        {/* Articles Grid */}
        <section className="section-padding bg-secondary/30">
          <div className="container">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={staggerContainer}
              className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
            >
              {regularArticles.map((article) => (
                <motion.article
                  key={article.id}
                  variants={fadeInUp}
                  className="group"
                >
                  <Link href={`/blog/${article.id}`}>
                    <div className="bg-card rounded-lg overflow-hidden border border-border hover:border-primary/50 hover:shadow-lg transition-all duration-300">
                      <div className="relative overflow-hidden">
                        <img
                          src={article.image}
                          alt={article.title}
                          className="w-full aspect-[16/10] object-cover transition-transform duration-500 group-hover:scale-105"
                        />
                      </div>
                      <div className="p-6">
                        <div className="flex items-center gap-3 text-xs text-muted-foreground mb-3">
                          <span className="bg-primary/10 text-primary px-2 py-1 rounded">
                            {categories.find(c => c.id === article.category)?.name}
                          </span>
                          <span>{formatDate(article.date)}</span>
                        </div>
                        <h3 className="text-xl font-semibold mb-3 group-hover:text-primary transition-colors line-clamp-2">
                          {article.title}
                        </h3>
                        <p className="text-muted-foreground text-sm line-clamp-3 mb-4">
                          {article.excerpt}
                        </p>
                        <div className="flex items-center justify-between">
                          <span className="text-xs text-muted-foreground flex items-center gap-1">
                            <Clock className="w-3 h-3" />
                            {article.readTime}
                          </span>
                          <span className="text-primary text-sm font-medium flex items-center gap-1 group-hover:gap-2 transition-all">
                            Leer más
                            <ArrowRight className="w-3 h-3" />
                          </span>
                        </div>
                      </div>
                    </div>
                  </Link>
                </motion.article>
              ))}
            </motion.div>

            {/* Load More */}
            <div className="text-center mt-12">
              <Button variant="outline" size="lg">
                Cargar más artículos
              </Button>
            </div>
          </div>
        </section>

        {/* Newsletter CTA */}
        <section className="section-padding">
          <div className="container">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
              className="max-w-2xl mx-auto text-center"
            >
              <h2 className="mb-4">Manténgase informado</h2>
              <p className="text-muted-foreground mb-8">
                Suscríbase a nuestro newsletter y reciba las últimas novedades 
                sobre continuidad operativa y tecnología empresarial.
              </p>
              <form className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                <input
                  type="email"
                  placeholder="correo@empresa.com"
                  className="flex-1 px-4 py-3 rounded-lg border border-border bg-background focus:outline-none focus:ring-2 focus:ring-primary"
                />
                <Button type="submit" size="lg">
                  Suscribirse
                </Button>
              </form>
            </motion.div>
          </div>
        </section>
      </main>

      <Footer />
      <ChatBot />
    </div>
  );
}
