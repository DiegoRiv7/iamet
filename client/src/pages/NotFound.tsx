/**
 * 404 Not Found Page - IAMET
 */

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { Home, ArrowLeft } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />
      
      <main className="flex-1 flex items-center justify-center pt-20">
        <div className="container">
          <div className="max-w-2xl mx-auto text-center">
            {/* 404 Number */}
            <div className="text-[150px] md:text-[200px] font-black text-primary/10 leading-none select-none">
              404
            </div>
            
            <h1 className="text-3xl md:text-4xl font-bold -mt-8 mb-4">
              Página no encontrada
            </h1>
            
            <p className="text-muted-foreground text-lg mb-8">
              Lo sentimos, la página que busca no existe o ha sido movida. 
              Verifique la URL o regrese a la página de inicio.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/">
                <Button size="lg">
                  <Home className="mr-2 w-4 h-4" />
                  Ir al inicio
                </Button>
              </Link>
              <Button variant="outline" size="lg" onClick={() => window.history.back()}>
                <ArrowLeft className="mr-2 w-4 h-4" />
                Volver atrás
              </Button>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
