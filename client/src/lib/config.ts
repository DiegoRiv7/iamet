/**
 * IAMET Website Configuration
 * ===========================
 * Este archivo contiene todos los placeholders editables para la integración con Bitrix24
 * y la información de contacto de la empresa.
 * 
 * INSTRUCCIONES:
 * 1. Reemplace los valores "PEGAR_AQUI" con los scripts/URLs correspondientes de Bitrix24
 * 2. Actualice la información de contacto según sea necesario
 */

// ============================================
// INTEGRACIÓN BITRIX24 - FORMULARIOS WEB
// ============================================

/**
 * Script del formulario de Ventas/Diagnóstico de Bitrix24
 * Para obtener este script:
 * 1. En Bitrix24, vaya a CRM > Formularios web
 * 2. Cree o edite el formulario de captación de leads
 * 3. Copie el código de inserción (script/iframe)
 */
export const BITRIX_WEBFORM_SCRIPT_VENTAS = "PEGAR_AQUI";

/**
 * Script del formulario de Servicio/Soporte de Bitrix24
 * Para obtener este script:
 * 1. En Bitrix24, vaya a CRM > Formularios web
 * 2. Cree o edite el formulario de solicitudes de servicio
 * 3. Copie el código de inserción (script/iframe)
 */
export const BITRIX_WEBFORM_SCRIPT_SERVICIO = "PEGAR_AQUI";

// ============================================
// INTEGRACIÓN BITRIX24 - REST WEBHOOK
// ============================================

/**
 * URL del Webhook REST de Bitrix24
 * Para obtener esta URL:
 * 1. En Bitrix24, vaya a Aplicaciones > Webhooks
 * 2. Cree un webhook entrante con permisos de CRM
 * 3. Copie la URL generada (formato: https://sudominio.bitrix24.com/rest/1/xxxxx/)
 */
export const BITRIX_WEBHOOK_URL = "PEGAR_AQUI";

/**
 * Métodos disponibles para el webhook:
 * - crm.lead.add: Crear nuevo lead (para formulario de ventas)
 * - crm.deal.add: Crear nuevo negocio
 * - crm.contact.add: Crear nuevo contacto
 */
export const BITRIX_METHODS = {
  createLead: "crm.lead.add",
  createDeal: "crm.deal.add",
  createContact: "crm.contact.add",
};

// ============================================
// INTEGRACIÓN BITRIX24 - LIVE CHAT
// ============================================

/**
 * Script del Widget de Live Chat de Bitrix24
 * Para obtener este script:
 * 1. En Bitrix24, vaya a Contact Center > Widget del sitio web
 * 2. Configure el widget de chat en vivo
 * 3. Copie el código de inserción
 */
export const BITRIX_LIVECHAT_WIDGET_SCRIPT = "PEGAR_AQUI";

// ============================================
// INFORMACIÓN DE CONTACTO
// ============================================

export const CONTACT_INFO = {
  email: "contacto@iamet.com.mx",
  phone: "+52 (55) 1234-5678",
  phoneDisplay: "(55) 1234-5678",
  address: "Av. Insurgentes Sur 1234, Col. Del Valle, CDMX, México, CP 03100",
  addressShort: "Col. Del Valle, CDMX",
  schedule: "Lunes a Viernes: 9:00 - 18:00",
  emergencyPhone: "+52 (55) 9876-5432",
};

// ============================================
// REDES SOCIALES
// ============================================

export const SOCIAL_LINKS = {
  linkedin: "https://linkedin.com/company/iamet",
  facebook: "https://facebook.com/iametmx",
  twitter: "https://twitter.com/iametmx",
};

// ============================================
// SERVICIOS
// ============================================

export const SERVICES = [
  { id: "infraestructura", name: "Infraestructura Física (Cableado Estructurado)" },
  { id: "seguridad", name: "Seguridad (Control de Acceso y CCTV)" },
  { id: "audio", name: "Audio y Voceo" },
  { id: "salas", name: "Salas de Juntas" },
  { id: "software", name: "Desarrollo de Software" },
  { id: "computo", name: "Equipo de Cómputo" },
  { id: "rfid", name: "Soluciones RFID" },
  { id: "software-propio", name: "Software Propio IAMET" },
];

// ============================================
// TIPOS DE SOLICITUD (SOPORTE)
// ============================================

export const REQUEST_TYPES = [
  { id: "soporte", name: "Soporte" },
  { id: "mantenimiento", name: "Mantenimiento" },
  { id: "emergencia", name: "Emergencia" },
  { id: "cotizacion", name: "Cotización" },
];

export const SEVERITY_LEVELS = [
  { id: "s1", name: "S1 - Crítica", description: "Sistema caído, operación detenida" },
  { id: "s2", name: "S2 - Alta", description: "Funcionalidad crítica afectada" },
  { id: "s3", name: "S3 - Media", description: "Funcionalidad parcialmente afectada" },
  { id: "s4", name: "S4 - Baja", description: "Consulta o mejora menor" },
];
