import { Autor } from "../types/autor.types";

// Datos hardcodeados iniciales
let autores: Autor[] = [
  { id: 1, nombre: "Julio Cortázar", nacionalidad: "Argentino" },
  { id: 2, nombre: "Jorge Luis Borges", nacionalidad: "Argentino" }
];
let proximoId = 3; // El servidor asigna el ID automáticamente 

export const findAll = () => autores;

export const findById = (id: number) => autores.find(a => a.id === id);

export const create = (datos: Omit<Autor, "id">) => {
  const nuevo = { id: proximoId++, ...datos };
  autores.push(nuevo);
  return nuevo;
};

export const update = (id: number, datos: Omit<Autor, "id">) => {
  const index = autores.findIndex(a => a.id === id);
  if (index === -1) return undefined;
  autores[index] = { id, ...datos };
  return autores[index];
};

export const remove = (id: number) => {
  const index = autores.findIndex(a => a.id === id);
  if (index === -1) return false;
  autores.splice(index, 1);
  return true;
};