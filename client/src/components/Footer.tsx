/**
 * Footer Component - Swiss Precision Tech Design
 * Footer minimalista con información de contacto y enlaces
 */

import { CONTACT_INFO, SOCIAL_LINKS } from "@/lib/config";
import { Linkedin, Facebook, Twitter, Mail, Phone, MapPin } from "lucide-react";
import { Link } from "wouter";

const footerLinks = {
  empresa: [
    { name: "Inicio", href: "/" },
    { name: "Servicios", href: "/servicios" },
    { name: "Software", href: "/software" },
    { name: "Blog", href: "/blog" },
    { name: "Contacto", href: "/contacto" },
  ],
  servicios: [
    { name: "Infraestructura Física", href: "/servicios#infraestructura" },
    { name: "Seguridad y CCTV", href: "/servicios#seguridad" },
    { name: "Desarrollo de Software", href: "/servicios#software" },
    { name: "Soluciones RFID", href: "/servicios#rfid" },
  ],
  legal: [
    { name: "Aviso de Privacidad", href: "/privacidad" },
    { name: "Términos y Condiciones", href: "/terminos" },
  ],
};

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-foreground text-background">
      {/* Main Footer */}
      <div className="container section-padding">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
          {/* Brand Column */}
          <div className="lg:col-span-1">
            <Link href="/" className="inline-block mb-6">
              <span className="text-2xl font-black tracking-tight text-background">
                IAMET
              </span>
            </Link>
            <p className="text-background/70 text-sm leading-relaxed mb-6">
              Más de 15 años garantizando la continuidad operativa de empresas 
              a través de infraestructura crítica, seguridad y software especializado.
            </p>
            {/* Social Links */}
            <div className="flex gap-4">
              <a
                href={SOCIAL_LINKS.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-background/10 flex items-center justify-center hover:bg-primary transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-4 h-4" />
              </a>
              <a
                href={SOCIAL_LINKS.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-background/10 flex items-center justify-center hover:bg-primary transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="w-4 h-4" />
              </a>
              <a
                href={SOCIAL_LINKS.twitter}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-background/10 flex items-center justify-center hover:bg-primary transition-colors"
                aria-label="Twitter"
              >
                <Twitter className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Links Column - Empresa */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider mb-6 text-background">
              Empresa
            </h4>
            <ul className="space-y-3">
              {footerLinks.empresa.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-background/70 hover:text-primary text-sm transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Links Column - Servicios */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider mb-6 text-background">
              Servicios
            </h4>
            <ul className="space-y-3">
              {footerLinks.servicios.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-background/70 hover:text-primary text-sm transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Column */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider mb-6 text-background">
              Contacto
            </h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <Mail className="w-4 h-4 mt-1 text-primary flex-shrink-0" />
                <a
                  href={`mailto:${CONTACT_INFO.email}`}
                  className="text-background/70 hover:text-primary text-sm transition-colors"
                >
                  {CONTACT_INFO.email}
                </a>
              </li>
              <li className="flex items-start gap-3">
                <Phone className="w-4 h-4 mt-1 text-primary flex-shrink-0" />
                <a
                  href={`tel:${CONTACT_INFO.phone}`}
                  className="text-background/70 hover:text-primary text-sm transition-colors"
                >
                  {CONTACT_INFO.phoneDisplay}
                </a>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="w-4 h-4 mt-1 text-primary flex-shrink-0" />
                <span className="text-background/70 text-sm">
                  {CONTACT_INFO.addressShort}
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-background/10">
        <div className="container py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-background/50 text-sm">
              © {currentYear} IAMET. Todos los derechos reservados.
            </p>
            <div className="flex gap-6">
              {footerLinks.legal.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className="text-background/50 hover:text-background text-sm transition-colors"
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
