# Usa la imagen oficial de Node.js
FROM node:20

# Establece el directorio de trabajo dentro del contenedor
WORKDIR /app

# Copia los archivos del proyecto al contenedor
COPY package.json package-lock.json ./

# Instala las dependencias
RUN npm install

# Copia todo el código fuente
COPY . .

# Expone el puerto en el que correrá NestJS
EXPOSE 3000

# Comando para iniciar la aplicación
CMD ["npm", "run", "start:dev"]
