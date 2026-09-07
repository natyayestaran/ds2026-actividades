import { z } from "zod";

export const autorCreateSchema = z.object({
  nombre: z
    .string()
    .min(1, "El nombre del autor es obligatorio"),
});

export const autorUpdateSchema = autorCreateSchema.partial();

export const idParamSchema = z.object({
  id: z.string().regex(/^\d+$/, "El ID debe ser numérico"),
});