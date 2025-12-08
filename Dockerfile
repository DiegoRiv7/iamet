FROM nginx:alpine

# Copiar archivos
COPY . /usr/share/nginx/html/

# Corregir permisos para evitar errores 403
RUN chmod -R 644 /usr/share/nginx/html/*
RUN chmod 755 /usr/share/nginx/html

# Copiar configuración nginx
COPY nginx.conf /etc/nginx/nginx.conf

EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]