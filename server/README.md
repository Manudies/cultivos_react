# API de Cultivos

## Introducción

La API de Cultivos proporciona un conjunto de endpoints para gestionar cultivos, usuarios y comentarios. Permite a los usuarios explorar el catálogo de cultivos, registrarse, iniciar sesión, dejar comentarios y más.

## Funcionamiento Básico

- **Explorar Cultivos**: Los usuarios pueden acceder a la lista completa de cultivos disponibles en el catálogo.

- **Registro de Usuarios**: Los usuarios pueden registrarse para crear una cuenta en la plataforma.

- **Inicio de Sesión**: Los usuarios registrados pueden iniciar sesión para acceder a funcionalidades adicionales.

- **Dejar Comentarios**: Los usuarios pueden dejar comentarios en los cultivos para compartir sus experiencias y opiniones.

## Endpoints Principales

### Cultivos

- `GET /cultivos`: Obtiene una lista de todos los cultivos disponibles.
- `POST /cultivos`: Crea un nuevo cultivo en el catálogo.
- `GET /cultivos/:id`: Obtiene detalles de un cultivo específico por su ID.
- `PUT /cultivos/:id`: Actualiza la información de un cultivo existente.
- `DELETE /cultivos/:id`: Elimina un cultivo del catálogo.

### Usuarios

- `POST /usuarios/registro`: Registra un nuevo usuario.
- `POST /usuarios/login`: Inicia sesión de un usuario registrado.

### Comentarios

- `POST /comentarios`: Agrega un nuevo comentario a un cultivo.
- `GET /comentarios/:cultivoId`: Obtiene todos los comentarios asociados a un cultivo específico.


# Tecnologías y Dependencias Utilizadas

## Lenguaje de Programación
- JavaScript

## Plataforma
- Node.js

## Framework Web
- Express.js

## Base de Datos
- MongoDB (a través de Mongoose)

## Encriptación de Contraseñas
- bcrypt

## Autenticación y Autorización
- jsonwebtoken

## Variables de Entorno
- dotenv

## Herramientas de Desarrollo
- Pruebas: Jest
- Recarga Automática en Desarrollo: nodemon

## Contenedorización
- Docker
