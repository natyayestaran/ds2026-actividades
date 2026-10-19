import { z } from "zod";

export const libroCreateSchema = z.object({
  titulo: z.string().trim().min(1, "El título es obligatorio"),
  precio: z.number().positive("El precio debe ser mayor a 0"),
  imagen: z.string().url("Debe ser una URL válida"),
  autorId: z.number().int().positive("El autorId es obligatorio"),
});

export const idParamSchema = z.object({
  id: z.string().transform((val) => parseInt(val, 10)).pipe(z.number().int().positive()),
});