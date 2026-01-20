# Etapa 1: Build de React
FROM node:18-alpine AS build

WORKDIR /app

# Copiar archivos de configuración
COPY package.json ./
COPY vite.config.ts tsconfig.json tsconfig.node.json components.json ./

# Instalar dependencias con resolución de conflictos
RUN npm install --legacy-peer-deps

# Copiar código fuente
COPY client/ ./client/
COPY server/ ./server/
COPY shared/ ./shared/

# Construir la aplicación React y el servidor
RUN npm run build

# Etapa 2: Nginx para servir archivos estáticos
FROM nginx:alpine

# Copiar archivos construidos desde la etapa de build
COPY --from=build /app/dist /usr/share/nginx/html/

# Copiar configuración nginx
COPY nginx.conf /etc/nginx/nginx.conf

# Corregir permisos
RUN find /usr/share/nginx/html -type f -exec chmod 644 {} \;
RUN find /usr/share/nginx/html -type d -exec chmod 755 {} \;

EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]