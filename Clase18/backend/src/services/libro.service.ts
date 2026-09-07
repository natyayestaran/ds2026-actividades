import { prisma } from "../config/prisma";
import { Prisma } from "@prisma/client";
import { CreateBookInput } from "../schemas/libro.schema";

export type BookWithDetails = Prisma.LibroGetPayload<{
  include: {
    autor: true;
    categorias: true;
  };
}>;

export const getAll = async (): Promise<BookWithDetails[]> => {
  return prisma.libro.findMany({
    include: {
      autor: true,
      categorias: true,
    },
  });
};

export const getById = async (
  id: number
): Promise<BookWithDetails | null> => {
  return prisma.libro.findUnique({
    where: { id },
    include: {
      autor: true,
      categorias: true,
    },
  });
};

export const create = async (
  data: CreateBookInput
): Promise<BookWithDetails> => {
  return prisma.libro.create({
    data: {
      titulo: data.titulo,
      precio: data.precio,
      autor: {
        connect: { id: data.autorId },
      },
      categorias: {
        connect: data.categorias.map((id) => ({ id })),
      },
    },
    include: {
      autor: true,
      categorias: true,
    },
  });
};

export const update = async (
  id: number,
  data: Partial<CreateBookInput>
): Promise<BookWithDetails> => {
  return prisma.libro.update({
    where: { id },
    data: {
      ...(data.titulo !== undefined && { titulo: data.titulo }),
      ...(data.precio !== undefined && { precio: data.precio }),
      ...(data.autorId !== undefined && {
        autor: {
          connect: { id: data.autorId },
        },
      }),
      ...(data.categorias !== undefined && {
        categorias: {
          set: data.categorias.map((id) => ({ id })),
        },
      }),
    },
    include: {
      autor: true,
      categorias: true,
    },
  });
};

export const remove = async (id: number): Promise<boolean> => {
  const existe = await prisma.libro.findUnique({
    where: { id },
  });

  if (!existe) return false;

  await prisma.libro.delete({
    where: { id },
  });

  return true;
};