# IAMET Rack 3D Interactivo

Aplicación web 3D interactiva que muestra un rack de centro de datos con componentes reales de Panduit, Cisco, Dell y APC.

## 🚀 Características

- **Rack 3D interactivo** con rotación automática
- **Componentes animados**: LEDs parpadeantes, actividad de discos
- **Información detallada** de cada componente
- **Botones de cotización** integrados
- **Diseño responsivo** y moderno
- **Optimizado para producción**

## 🐳 Despliegue con Docker

### Opción 1: Docker Compose (Recomendado)

```bash
# Clonar o descargar el proyecto
cd iamet/

# Construir y ejecutar
docker-compose up -d

# Ver logs
docker-compose logs -f

# Detener
docker-compose down
```

### Opción 2: Docker directo

```bash
# Construir imagen
docker build -t iamet-rack .

# Ejecutar contenedor
docker run -d -p 80:80 --name iamet-rack iamet-rack

# Ver logs
docker logs -f iamet-rack

# Detener
docker stop iamet-rack
docker rm iamet-rack
```

## 🌐 Acceso

Una vez desplegado, accede a:

- **Localhost**: http://localhost
- **Puerto alternativo**: http://localhost:8080
- **Rack directo**: http://localhost/rack

## 📦 Estructura del Proyecto

```
iamet/
├── rack-simple.html          # Aplicación principal
├── index.html               # Página de entrada
├── Dockerfile               # Configuración Docker
├── docker-compose.yml       # Orquestación Docker
├── nginx.conf              # Configuración Nginx
├── .dockerignore           # Exclusiones Docker
└── README.md               # Este archivo
```

## 🔧 Configuración

### Variables de Entorno

- `NGINX_HOST`: Host del servidor (default: localhost)
- `NGINX_PORT`: Puerto interno (default: 80)

### Puertos

- **80**: Puerto principal HTTP
- **8080**: Puerto alternativo

## 🏗️ Componentes del Rack

1. **Switch Cisco Catalyst 9300**
   - 48 puertos 1Gbps + 4 puertos 10Gbps
   - PoE+ 740W
   - LEDs de estado animados

2. **Panel Panduit NetKey**
   - 48 puertos Cat6A
   - Módulos Mini-Com TX6A
   - Diseño de alta densidad

3. **Servidor Dell PowerEdge R750**
   - Dual Intel Xeon Gold
   - 128GB DDR4 ECC
   - Bahías de disco animadas

4. **UPS APC Smart-UPS 3000VA**
   - 3000VA / 2700W
   - Pantalla LCD
   - Gestión SNMP

## 🎮 Interacciones

- **Click**: Seleccionar componente y ver información
- **Arrastrar**: Rotar vista manualmente
- **Scroll**: Zoom in/out
- **Auto-rotación**: Se reanuda tras 3 segundos de inactividad

## 🛠️ Desarrollo

### Requisitos

- Docker y Docker Compose
- Navegador web moderno con soporte WebGL

### Modificaciones

1. Editar `rack-simple.html` para cambios en la aplicación
2. Ejecutar `docker-compose up --build` para aplicar cambios
3. Acceder a http://localhost para ver los cambios

## 📱 Compatibilidad

- ✅ Chrome, Firefox, Safari, Edge (últimas versiones)
- ✅ Dispositivos móviles con WebGL
- ✅ Tablets y desktop
- ⚠️ Internet Explorer no soportado

## 🔒 Seguridad

- Headers de seguridad configurados
- Compresión Gzip habilitada
- Cache optimizado para recursos estáticos
- Sin dependencias externas críticas

## 📞 Contacto

**IAMET - Innovación y Excelencia en Tecnología**
- Tel: 664 380 8965
- WhatsApp: 664 331 4515
- Email: info@iamet.mx
- Ubicación: Tijuana, Baja California

## 📄 Licencia

Proyecto propietario de IAMET. Todos los derechos reservados.