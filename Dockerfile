# Usar la imagen base de Node.js
FROM node:16-alpine

# Crear un directorio de trabajo dentro del contenedor
WORKDIR /usr/src/app

# Copiar todos los archivos del proyecto al directorio de trabajo
COPY . .

# Instalar las dependencias de Node.js
RUN npm install

# Exponer el puerto que va a usar la aplicación
EXPOSE 3000

# Ejecutar el servidor de Node.js cuando el contenedor se inicie
CMD ["node", "server.js"]
