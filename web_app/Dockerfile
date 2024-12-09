# Usar la imagen base de Node.js
FROM node:16-alpine

# Crear un directorio de trabajo dentro del contenedor
WORKDIR /usr/src/app

# Copiar todos los archivos del proyecto al directorio de trabajo   
COPY . .

# Instalar las dependencias de Node.js definidas en el package.json
RUN npm install

# Exponer el puerto 3000 (puedes elegir otro puerto si prefieres)
EXPOSE 3000

# Ejecutar el servidor de Node.js cuando el contenedor se inicie
CMD ["node", "server.js"]
