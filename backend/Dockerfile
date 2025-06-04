# Usa una imagen oficial de Node.js
FROM node:22-alpine

# Directorio de trabajo dentro del contenedor
WORKDIR /app

# Copia los archivos de dependencias
COPY package*.json ./

# Instala las dependencias
RUN npm install

# Copia el resto del proyecto
COPY . .


# Agrega justo después de copiar el resto del código
COPY wait-for-it.sh .
RUN chmod +x wait-for-it.sh

# Generar Prisma client
RUN npx prisma generate

# Construye el proyecto TypeScript
RUN npm run build

# Expone el puerto (ajústalo al de tu backend)
EXPOSE 3001

# Comando para correr la app
CMD ["node", "dist/server.js"]
