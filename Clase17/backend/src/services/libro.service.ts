import prisma from '../lib/prisma';
import { Prisma } from '@prisma/client';
import { CreateBookInput } from '../schemas/libro.schema';

// Tipado avanzado para asegurar autocompletado de relaciones
export type BookWithDetails = Prisma.LibroGetPayload<{
  include: { autor: true, categorias: true }
}>;

export const getAll = async (): Promise<BookWithDetails[]> => {
  return await prisma.libro.findMany({
    include: { autor: true, categorias: true }
  });
};

export const create = async (data: CreateBookInput): Promise<BookWithDetails> => {
  return await prisma.libro.create({
    data: {
      titulo: data.titulo,
      precio: data.precio,
      autor: { connect: { id: data.autorId } },
      categorias: { connect: data.categorias.map(id => ({ id })) }
    },
    include: { autor: true, categorias: true }
  });
};