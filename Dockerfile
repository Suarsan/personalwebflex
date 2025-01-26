# Etapa 1: Construcción
FROM node:18-alpine AS build
WORKDIR /

# Instalar dependencias y construir el proyecto
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build:ssr

# Etapa 2: Servidor
FROM node:18-alpine
WORKDIR /

# Copiar archivos del build al contenedor
COPY --from=build /dist ./dist
COPY package*.json ./

# Instalar dependencias para producción
RUN npm install --production

# Exponer el puerto que usa Angular Universal
EXPOSE 6000

# Comando para iniciar la aplicación SSR
CMD ["node", "dist/server/main.js"]
