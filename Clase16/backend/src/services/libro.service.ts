import { prisma } from "../config/prisma";
import { Libro } from "../types/libro.types";

export const findAll = async (disponible?: boolean): Promise<Libro[]> => {
  if (disponible !== undefined) {
    return prisma.libro.findMany({ where: { disponible } });
  }
  return prisma.libro.findMany();
};

export const findById = async (id: number): Promise<Libro | null> => {
  return prisma.libro.findUnique({ where: { id } });
};

export const create = async (datos: Omit<Libro, "id">): Promise<Libro> => {
  return prisma.libro.create({ data: datos });
};

export const remove = async (id: number): Promise<boolean> => {
  const existe = await prisma.libro.findUnique({ where: { id } });
  if (!existe) return false;
  await prisma.libro.delete({ where: { id } });
  return true;
};