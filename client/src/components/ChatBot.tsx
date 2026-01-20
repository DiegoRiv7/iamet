/**
 * ChatBot Component - Asistente Virtual IAMET
 * Widget flotante que guía al usuario hacia ventas, soporte o contacto
 * Integrable con Bitrix24 Live Chat
 */

import { Button } from "@/components/ui/button";
import { BITRIX_LIVECHAT_WIDGET_SCRIPT } from "@/lib/config";
import { MessageCircle, X, ShoppingBag, Headphones, Phone } from "lucide-react";
import { useState, useEffect } from "react";
import { useLocation } from "wouter";

interface ChatOption {
  id: string;
  icon: React.ReactNode;
  title: string;
  description: string;
  action: () => void;
}

export default function ChatBot() {
  const [isOpen, setIsOpen] = useState(false);
  const [, setLocation] = useLocation();
  const [showPulse, setShowPulse] = useState(true);

  // Ocultar el pulso después de la primera interacción
  useEffect(() => {
    if (isOpen) {
      setShowPulse(false);
    }
  }, [isOpen]);

  const chatOptions: ChatOption[] = [
    {
      id: "ventas",
      icon: <ShoppingBag className="w-5 h-5" />,
      title: "Quiero una póliza / propuesta",
      description: "Solicitar diagnóstico o cotización",
      action: () => {
        setIsOpen(false);
        // Si hay integración con Bitrix24 Live Chat, abrir el chat
        if (BITRIX_LIVECHAT_WIDGET_SCRIPT !== "PEGAR_AQUI") {
          // Trigger Bitrix24 chat widget
          (window as any).BX24?.openChat?.();
        } else {
          // Redirigir al formulario de ventas
          setLocation("/contacto?tipo=ventas");
        }
      },
    },
    {
      id: "soporte",
      icon: <Headphones className="w-5 h-5" />,
      title: "Necesito soporte / servicio",
      description: "Reportar incidencia o solicitar mantenimiento",
      action: () => {
        setIsOpen(false);
        if (BITRIX_LIVECHAT_WIDGET_SCRIPT !== "PEGAR_AQUI") {
          (window as any).BX24?.openChat?.();
        } else {
          setLocation("/contacto?tipo=soporte");
        }
      },
    },
    {
      id: "contacto",
      icon: <Phone className="w-5 h-5" />,
      title: "Hablar con un asesor",
      description: "Contacto directo con nuestro equipo",
      action: () => {
        setIsOpen(false);
        setLocation("/contacto");
      },
    },
  ];

  return (
    <>
      {/* Chat Widget Container */}
      <div className="fixed bottom-6 right-6 z-50">
        {/* Chat Panel */}
        <div
          className={`absolute bottom-16 right-0 w-80 sm:w-96 bg-card rounded-2xl shadow-2xl border border-border overflow-hidden transition-all duration-300 origin-bottom-right ${
            isOpen
              ? "opacity-100 scale-100 translate-y-0"
              : "opacity-0 scale-95 translate-y-4 pointer-events-none"
          }`}
        >
          {/* Header */}
          <div className="bg-primary p-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center">
                  <MessageCircle className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h3 className="text-white font-semibold text-sm">
                    Asistente IAMET
                  </h3>
                  <p className="text-white/80 text-xs">En línea</p>
                </div>
              </div>
              <Button
                variant="ghost"
                size="icon"
                className="text-white hover:bg-white/20 h-8 w-8"
                onClick={() => setIsOpen(false)}
              >
                <X className="w-4 h-4" />
              </Button>
            </div>
          </div>

          {/* Message */}
          <div className="p-4 bg-muted/30">
            <div className="bg-card rounded-lg p-3 shadow-sm">
              <p className="text-sm text-foreground">
                Hola, soy el asistente de IAMET. ¿En qué le puedo ayudar hoy?
              </p>
            </div>
          </div>

          {/* Options */}
          <div className="p-4 space-y-2">
            {chatOptions.map((option) => (
              <button
                key={option.id}
                onClick={option.action}
                className="w-full flex items-center gap-3 p-3 rounded-lg border border-border hover:border-primary hover:bg-primary/5 transition-all duration-200 text-left group"
              >
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-colors">
                  {option.icon}
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-medium text-foreground truncate">
                    {option.title}
                  </p>
                  <p className="text-xs text-muted-foreground truncate">
                    {option.description}
                  </p>
                </div>
              </button>
            ))}
          </div>

          {/* Footer */}
          <div className="px-4 pb-4">
            <p className="text-xs text-muted-foreground text-center">
              Respuesta inmediata en horario laboral
            </p>
          </div>
        </div>

        {/* Toggle Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className={`relative w-14 h-14 rounded-full bg-primary text-white shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center ${
            isOpen ? "rotate-0" : ""
          }`}
          aria-label={isOpen ? "Cerrar asistente" : "Abrir asistente"}
        >
          {/* Pulse Animation */}
          {showPulse && !isOpen && (
            <span className="absolute inset-0 rounded-full bg-primary animate-ping opacity-30" />
          )}
          
          {isOpen ? (
            <X className="w-6 h-6" />
          ) : (
            <MessageCircle className="w-6 h-6" />
          )}
        </button>
      </div>
    </>
  );
}
