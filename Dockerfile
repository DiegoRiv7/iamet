# Usar nginx como servidor web ligero
FROM nginx:alpine

# Copiar archivos de la aplicación al directorio de nginx
COPY . /usr/share/nginx/html/

# Crear configuración personalizada de nginx
COPY nginx.conf /etc/nginx/nginx.conf

# Exponer puerto 80
EXPOSE 80

# Comando por defecto
CMD ["nginx", "-g", "daemon off;"]