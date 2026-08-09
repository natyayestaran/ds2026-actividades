import { Request, Response } from "express";
import * as libroService from "../services/libro.service";

export const getAll = (_req: Request, res: Response) => {
  res.json(libroService.findAll());
};

export const getById = (req: Request, res: Response) => {
  const id = Number(req.params.id);
  const libro = libroService.findById(id);
  if (!libro) return res.status(404).json({ error: "Libro no encontrado" });
  res.json(libro);
};

export const create = (req: Request, res: Response) => {
  const nuevo = libroService.create(req.body);
  res.status(201).json(nuevo);
};

export const remove = (req: Request, res: Response) => {
  const id = Number(req.params.id);
  const ok = libroService.remove(id);
  if (!ok) return res.status(404).json({ error: "Libro no encontrado" });
  res.status(204).send();
};