# Build-Phase
FROM node:18-alpine AS build
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build

# Runtime-Phase
FROM nginx:alpine
# Kopiert die gebauten Dateien (im Ordner "dist") in den Nginx-Ordner
COPY --from=build /app/dist /usr/share/nginx/html

# Port 80 freigeben
EXPOSE 80

# Nginx starten
CMD ["nginx", "-g", "daemon off;"]
