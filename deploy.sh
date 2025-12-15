#!/bin/bash

# Script de despliegue para IAMET
# Configuración automática de nginx y docker

echo "🚀 Iniciando despliegue de IAMET..."

# Crear directorio de nginx si no existe
mkdir -p /etc/nginx/sites-available
mkdir -p /etc/nginx/sites-enabled

# Crear archivo de configuración nginx
cat > /etc/nginx/sites-available/iamet.mx << 'EOF'
server {
    listen 80;
    server_name iamet.mx www.iamet.mx;
    
    location / {
        proxy_pass http://iamet-rack:80;
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto $scheme;
    }
}

# Si usas HTTPS con SSL:
server {
    listen 443 ssl;
    server_name iamet.mx www.iamet.mx;
    
    # Tus certificados SSL aquí (descomenta y configura si tienes SSL)
    # ssl_certificate /path/to/your/certificate.crt;
    # ssl_certificate_key /path/to/your/private.key;
    
    location / {
        proxy_pass http://iamet-rack:80;
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto $scheme;
    }
}
EOF

echo "✅ Archivo de configuración nginx creado"

# Habilitar el sitio
if [ ! -L /etc/nginx/sites-enabled/iamet.mx ]; then
    ln -s /etc/nginx/sites-available/iamet.mx /etc/nginx/sites-enabled/
    echo "✅ Sitio habilitado en nginx"
else
    echo "ℹ️  Sitio ya está habilitado"
fi

# Probar configuración de nginx
echo "🔍 Probando configuración nginx..."
if nginx -t; then
    echo "✅ Configuración nginx válida"
    
    # Recargar nginx
    echo "🔄 Recargando nginx..."
    systemctl reload nginx
    echo "✅ Nginx recargado"
else
    echo "❌ Error en configuración nginx"
    exit 1
fi

# Detener contenedor existente si existe
if [ "$(docker ps -q -f name=iamet-rack)" ]; then
    echo "🛑 Deteniendo contenedor existente..."
    docker-compose down
fi

# Construir y levantar contenedor
echo "🏗️  Construyendo y levantando contenedor..."
docker-compose up -d --build

# Verificar que el contenedor esté corriendo
if [ "$(docker ps -q -f name=iamet-rack)" ]; then
    echo "✅ Contenedor IAMET ejecutándose correctamente"
    echo "🌐 Tu sitio debería estar disponible en: http://iamet.mx"
else
    echo "❌ Error al levantar el contenedor"
    docker-compose logs
    exit 1
fi

echo "🎉 Despliegue completado exitosamente!"
echo "📝 Verifica que tu DNS apunte a este servidor para acceder a iamet.mx"