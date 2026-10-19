import { PrismaClient } from "../generated/prisma/client";
import { PrismaPg } from "@prisma/adapter-pg";
import pg from "pg";

// 1. Conexión a la base de datos
const pool = new pg.Pool({ connectionString: process.env.DATABASE_URL });
const adapter = new PrismaPg(pool);

// 2. Instanciamos el cliente ocultando el "passwordHash" por defecto
export const prisma = new PrismaClient({
  adapter,
  omit: {
    usuario: {
      passwordHash: true, // 🛡️ Evita que se filtre el hash en consultas comunes
    },
  },
});

export default prisma;