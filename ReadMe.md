# Final UTN Diplomatura Web Full Stack

## Descripción

Este es un proyecto de BackEnd enfocado en un sistema simple que maneja sesiones y permite realizar operaciones CRUD sobre los siguientes modelos:
- **User**
- **Category**
- **Product**

## Tecnologías

Este proyecto utiliza las siguientes tecnologías:

1. **Express.js**: Framework para Node.js para crear APIs RESTful.
2. **MongoDB**: Base de datos NoSQL para almacenar los datos de los modelos.
3. **Node.js**: Entorno de ejecución de JavaScript en el lado del servidor.
4. **bcrypt**: Paquete para encriptar contraseñas de manera segura.
5. **jsonwebtoken**: Biblioteca para generar y verificar tokens JWT para autenticación.
6. **dotenv**: Paquete para cargar variables de entorno desde un archivo `.env`.

## Requisitos

La máquina donde se ejecute el proyecto debe tener instalado:

- **Node.js**: [Descargar e instalar Node.js](https://nodejs.org/)
- **MongoDB**: [Instalar MongoDB](https://www.mongodb.com/try/download/community) (MongoDB Compass es opcional para gestionar la base de datos de manera visual)


## Instalación de proyecto

1. Clonar el repositorio `git clone https://github.com/TomasSueldo7/SistemaCrud-BE.git`
2. Instalar dependencias: `npm i`
3. Incorporar el archivo `.env` en la raíz del proyecto

## Ejecución

Para correr el proyecto existen dos opciones:
  - Forma productiva: `npm start`
  - Forma develop: `npm run dev`

## Endpoints

### Endpoint de autenticación

  - LOGIN: /api/auth/login
    - Método: POST
    - Descripción: Inicia sesión y devuelve un token JWT para acceder a rutas protegidas

### Endpoints de operaciones CRUD

Cada URL posee las 4 operaciones disponibles GET, POST, PUT, DELETE. Todos los métodos utilizan la misma ruta

  - USER: 
    - GET /api/user - Obtener todos los usuarios.
    - POST /api/user - Crear un nuevo usuario.
    - PUT: /api/user/:id - Actualizar un usuario existente por su ID.
    - DELETE: /api/user/:id - Eliminar un usuario por su ID.
  - PRODUCT: 
    - GET: /api/product - Obtener todos los productos.
    - POST: /api/product - Crear un nuevo producto.
    - PUT: /api/product/:id - Actualizar un producto existente por su ID.
    - DELETE: /api/product/:id - Eliminar un producto por su ID.
  - CATEGORY: /api/category
    - GET: /api/category - Obtener todas las categorías.
    - POST: /api/category - Crear una nueva categoría.
    - PUT: /api/category/:id - Actualizar una categoría existente por su ID.
    - DELETE: /api/category/:id - Eliminar una categoría por su ID.

## MOCKS

user:
  {
    "name":"Lucas",
    "email": "lucas@gmail.com",
    "password":"123",
    "role":"CUSTOMER"
  }

category:
  {
    "name":"Electrodomésticos",
    "description": "Tecnología para el hogar"
  }

product:
  {
    "name":"Microondas",
    "status":"AVAILABLE",
    "price":10000,
    "category": {id del category que asigno mongoDB},
    "description": "Microondas BGH"
  }


