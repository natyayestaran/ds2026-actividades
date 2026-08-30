import { PrismaClient } from "../generated/prisma/client"; // 👈 AGREGADO "/client" AL FINAL (Crucial para Prisma 7)
import { PrismaPg } from "@prisma/adapter-pg";
import pg from "pg";

// 1. Conexión a la base de datos
const pool = new pg.Pool({ connectionString: process.env.DATABASE_URL });
const adapter = new PrismaPg(pool);

// 2. Instancia del cliente
export const prisma = new PrismaClient({ adapter });

// 3. Doble exportación a prueba de fallos
export default prisma;