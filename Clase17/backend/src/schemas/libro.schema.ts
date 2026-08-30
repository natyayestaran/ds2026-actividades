import { z } from 'zod';

export const createBookSchema = z.object({
  titulo: z.string().min(1, "El título es obligatorio"),
  precio: z.number().positive("El precio debe ser mayor a 0"),
  autorId: z.number().int().positive(),
  categorias: z.array(z.number().int()).min(1, "Al menos una categoría es requerida")
});

export type CreateBookInput = z.infer<typeof createBookSchema>;
export const updateBookSchema = createBookSchema.partial();