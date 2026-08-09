import { Libro } from "../types/libro.types";

let libros: Libro[] = [
  { id: 1, titulo: "El principito", autor: "Antoine de Saint-Exupéry", precio: 4500, imagen: "...", disponible: true },
  { id: 2, titulo: "Fundación", autor: "Isaac Asimov", precio: 5000, imagen: "...", disponible: true }
];

let proximoId = 3; 

export const findAll = () => libros;

export const findById = (id: number) => libros.find(l => l.id === id);

export const create = (datos: Omit<Libro, "id">) => {
  const nuevo = { id: proximoId++, ...datos };
  libros.push(nuevo);
  return nuevo;
};

export const remove = (id: number) => {
  const index = libros.findIndex(l => l.id === id);
  if (index === -1) return false;
  libros.splice(index, 1);
  return true;
};