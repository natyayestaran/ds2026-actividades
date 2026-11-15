# Sistema de Gestión de Librería

## Descripción

Este proyecto consiste en una aplicación web para la gestión de una librería. Permite consultar el catálogo de libros, visualizar información de autores y administrar las operaciones disponibles según el rol del usuario.

El sistema cuenta con autenticación de usuarios y control de acceso mediante roles, diferenciando entre administradores y clientes.

## Tecnologías utilizadas

### Frontend
- React
- TypeScript
- Vite
- React Router
- Bootstrap

### Backend
- Node.js
- Express
- TypeScript
- Prisma ORM
- PostgreSQL
- JWT para autenticación
- Zod para validaciones

### Infraestructura y herramientas
- Docker y Docker Compose
- Neon (base de datos PostgreSQL en la nube)
- Render (despliegue de la aplicación)

## Estructura del proyecto

```text
Clase23/
├── backend/
│   ├── prisma/
│   │   ├── migrations/
│   │   ├── schema.prisma
│   │   └── seed.ts
│   ├── src/
│   │   ├── config/
│   │   ├── controllers/
│   │   ├── middlewares/
│   │   ├── routes/
│   │   ├── schemas/
│   │   ├── services/
│   │   └── validations/
│   ├── Dockerfile
│   ├── Dockerfile.prod
│   └── package.json
├── public/
├── src/
│   ├── components/
│   ├── context/
│   ├── hooks/
│   ├── pages/
│   ├── schemas/
│   └── services/
├── docker-compose.yml
├── package.json
└── README.md
```

## Requisitos previos

Para ejecutar el proyecto localmente se necesita tener instalado:

- Node.js
- npm
- Docker Desktop (para utilizar Docker Compose)
- PostgreSQL, si se decide ejecutar la base de datos fuera de Docker.

## Instalación y ejecución local

### 1. Clonar el repositorio

```bash
git clone URL_DEL_REPOSITORIO
cd Clase23
```

### 2. Configurar las variables de entorno

Crear los archivos `.env` tomando como referencia los archivos `.env.example`:

- Frontend: `Clase23/.env`
- Backend: `Clase23/backend/.env`

Completar las variables necesarias para el entorno local. No compartir ni subir los archivos `.env` al repositorio.

### 3. Instalar dependencias del frontend

Desde la carpeta raíz del proyecto:

```bash
npm install
```

### 4. Instalar dependencias del backend

Desde la carpeta `backend`:

```bash
cd backend
npm install
```

### 5. Iniciar los servicios

Desde la carpeta raíz del proyecto, ejecutar:

```bash
docker compose up --build
```

Esto inicia los servicios definidos en el archivo `docker-compose.yml`.

Para detenerlos:

```bash
docker compose down
```

## Compilación para producción

### Frontend

Desde la carpeta raíz:

```bash
npm run build
```

La compilación genera los archivos de producción dentro de la carpeta `dist`.

### Backend

Desde la carpeta `backend`:

```bash
npm run build
```

## Base de datos

El proyecto utiliza PostgreSQL y Prisma ORM para administrar el esquema y las migraciones.

Para aplicar las migraciones pendientes:

```bash
npx prisma migrate deploy
```

Para ejecutar la carga inicial de datos:

```bash
npx prisma db seed
```

## Despliegue

La arquitectura prevista para el despliegue utiliza:

- **Neon:** alojamiento de la base de datos PostgreSQL.
- **Render:** publicación del backend y del frontend.

Las variables de entorno de producción se configuran desde los respectivos paneles de los servicios de alojamiento.

## Seguridad

- Autenticación mediante JWT.
- Contraseñas almacenadas mediante hash.
- Control de acceso según roles.
- Validación de datos de entrada.
- Variables de entorno para información sensible.

**Importante:** no subir archivos `.env`, contraseñas ni claves privadas al repositorio.

## Proyecto académico

Trabajo práctico desarrollado para la materia **Desarrollo de Software**, correspondiente a la actividad AI-C23: Deploy y Entornos.