Product Service - Microservicio de Productos
Este proyecto requiere configuración de variables de entorno y Docker para funcionar correctamente.

#Crea un archivo .env en la raíz del proyecto:
Base de datos
PORT=3002
DB_HOST=mariadb-product
DB_PORT=3306
DB_USER=usuariodb
DB_PASSWORD=clavedb
DB_NAME=productdb
DB_ROOT_PASSWORD=root

---------------------------------------------------------------------------------------

#Configuración del docker-compose.yml:
El archivo docker-compose.yml ya está preconfigurado para usar las variables del .env:
version: '3.8'

services:
  product-service:
    build: .
    ports:
      - "3002:3002"
    env_file:
      - .env
    depends_on:
      mariadb-product:
        condition: service_healthy  # Espera hasta que el healthcheck pase
    networks:
      - backend

  mariadb-product:
    image: mariadb:10.5
    environment:
      MARIADB_ROOT_PASSWORD: root
      MARIADB_DATABASE: productdb
      MARIADB_USER: ${DB_USER}
      MARIADB_PASSWORD: ${DB_PASSWORD}
    healthcheck:
      test: ["CMD", "mysql", "-uroot", "-proot", "-e", "SELECT 1"]
      interval: 5s
      timeout: 20s
      retries: 10
    volumes:
      - mariadb_product_data:/var/lib/mysql
    networks:
      - backend

volumes:
  mariadb_product_data:

networks:
  backend:

-----------------------------------------------

#Comandos para Iniciar:
Construir imágenes y levantar contenedores
docker-compose up --build

Detener contenedores
docker-compose down

Ejecutar en segundo plano
docker-compose up -d

---------------------------------------------

#Desarrollo Local:
Si prefieres ejecutarlo directamente:
Instala dependencias:
npm install
Inicia el servidor:
npm start
