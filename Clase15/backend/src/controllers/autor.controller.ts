import { Request, Response } from "express";
import * as autorService from "../services/autor.service";

export const getAll = (_req: Request, res: Response) => {
  res.json(autorService.findAll());
};

export const getById = (req: Request, res: Response) => {
  const id = Number(req.params.id);
  const autor = autorService.findById(id);
  if (!autor) return res.status(404).json({ error: "Autor no encontrado" }); // Error 404 si no existe [5]
  res.json(autor);
};

export const create = (req: Request, res: Response) => {
  const nuevoAutor = autorService.create(req.body); // Lee el body enviado por el cliente [6]
  res.status(201).json(nuevoAutor); // Status 201: Creado con éxito [2, 5]
};

export const update = (req: Request, res: Response) => {
  const id = Number(req.params.id);
  const actualizado = autorService.update(id, req.body);
  if (!actualizado) return res.status(404).json({ error: "Autor no encontrado" });
  res.json(actualizado);
};

export const remove = (req: Request, res: Response) => {
  const id = Number(req.params.id);
  const eliminado = autorService.remove(id);
  if (!eliminado) return res.status(404).json({ error: "Autor no encontrado" });
  res.status(204).send(); // Status 204: Éxito pero sin contenido para devolver [5]
};
