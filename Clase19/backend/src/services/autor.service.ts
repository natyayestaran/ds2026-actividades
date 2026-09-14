import { prisma } from "../config/prisma";
import { Autor } from "../types/autor.types";

export const findAll = async (): Promise<Autor[]> => {
  return prisma.autor.findMany();
};

export const findById = async (id: number): Promise<Autor | null> => {
  return prisma.autor.findUnique({
    where: { id },
  });
};

export const create = async (
  datos: Omit<Autor, "id" | "libros">
): Promise<Autor> => {
  return prisma.autor.create({
    data: datos,
  });
};

export const update = async (
  id: number,
  datos: Partial<Omit<Autor, "id" | "libros">>
): Promise<Autor | null> => {
  const existe = await prisma.autor.findUnique({
    where: { id },
  });

  if (!existe) return null;

  return prisma.autor.update({
    where: { id },
    data: datos,
  });
};

export const remove = async (id: number): Promise<boolean> => {
  const existe = await prisma.autor.findUnique({
    where: { id },
  });

  if (!existe) return false;

  await prisma.autor.delete({
    where: { id },
  });

  return true;
};