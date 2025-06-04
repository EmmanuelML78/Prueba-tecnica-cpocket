# Prueba Técnica - Cpocket

Este proyecto es una plataforma de chatbot compuesta por:

- **Backend** desarrollado en **Node.js** con **Express**, **TypeScript**, **Prisma** y **Docker**.
- **Frontend** desarrollado en **Next.js** con **TailwindCSS** y **shadcn/ui**.

---

## 🧱 Tecnologías Utilizadas

### Backend:
- **Node.js + Express**: Framework para el desarrollo del servidor API.
- **TypeScript**: Tipado estático para mejorar la escalabilidad y mantenibilidad.
- **Prisma ORM**: ORM para interactuar con una base de datos MySQL.
- **Zod**: Validación segura y tipada de datos.
- **Docker**: Contenerización del backend y la base de datos para facilitar la replicabilidad del entorno.

### Frontend:
- **Next.js**: Framework React con renderizado híbrido.
- **TailwindCSS**: Framework de estilos utilitarios para un diseño ágil y moderno.
- **shadcn/ui**: Colección de componentes accesibles, reutilizables y estilizados con TailwindCSS.

---

## ⚙️ Requisitos Previos

- Tener instalado **Docker** y **Docker Compose**.
- Tener instalado **Node.js v18+** (opcional para desarrollo local sin Docker).

---

## 🚀 Instalación y Ejecución

### Backend (API)

#### Opción 1: Usando Docker (Recomendado)

```bash
cd backend
docker-compose up --build
```

Esto levantará:

- Un contenedor con MySQL (`db`).
- El backend de la API (`api`) corriendo en el puerto `3001`.

#### Opción 2: Desarrollo Local (sin Docker)

1. Copia el archivo `.env` con las variables de entorno necesarias.
2. Instala dependencias y genera el cliente Prisma:

```bash
npm install
npx prisma generate
npx prisma migrate dev
```

3. Ejecuta el servidor:

```bash
npm run dev
```

La API estará disponible en: [http://localhost:3001](http://localhost:3001)

---

### Frontend (Next.js)

1. Accede al directorio del frontend:

```bash
cd frontend
```

2. Instala las dependencias:

```bash
npm install
```

3. Ejecuta en modo desarrollo:

```bash
npm run dev
```

La aplicación estará disponible en: [http://localhost:3000](http://localhost:3000)

---

## 🧠 Decisiones Técnicas

- **TypeScript** fue elegido por su robustez y capacidades de tipado estático, lo que facilita el mantenimiento y escalabilidad del código.
- **Prisma ORM** destaca por su excelente experiencia de desarrollo y sus herramientas integradas de migración.
- **Zod** se utiliza para validar inputs de manera segura y estrictamente tipada.
- **Docker** asegura un entorno replicable tanto en desarrollo como en producción.
- **shadcn/ui** facilita el desarrollo ágil de interfaces accesibles y consistentes.

---

## 🔐 Variables de Entorno - Backend

```env
# Base de datos MySQL
MYSQL_DATABASE=db_chatbot
MYSQL_USER=medina
MYSQL_PASSWORD=123456
MYSQL_ROOT_PASSWORD=123456

# Prisma y App
DATABASE_URL=mysql://medina:123456@db:3306/db_chatbot

# Configuración del servidor API
PORT=3001
```

---

## 📄 Licencia

Este proyecto se desarrolla con fines de evaluación técnica.
