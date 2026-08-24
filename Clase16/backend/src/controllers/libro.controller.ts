import { Request, Response } from "express";
import * as libroService from "../services/libro.service";

export const getAll = async (req: Request, res: Response) => {
  try {
    const disponibleQuery = req.query.disponible;
    const disponible = disponibleQuery !== undefined ? disponibleQuery === "true" : undefined;
    
    const libros = await libroService.findAll(disponible);
    res.json(libros);
  } catch (error) {
    res.status(500).json({ error: "Error interno del servidor al obtener libros" });
  }
};

export const getById = async (req: Request, res: Response) => {
  try {
    const id = Number(req.params.id);
    const libro = await libroService.findById(id);
    if (!libro) return res.status(404).json({ error: "Libro no encontrado" });
    res.json(libro);
  } catch (error) {
    res.status(500).json({ error: "Error interno del servidor al buscar el libro" });
  }
};

export const create = async (req: Request, res: Response) => {
  try {
    const nuevo = await libroService.create(req.body);
    res.status(201).json(nuevo);
  } catch (error) {
    res.status(500).json({ error: "Error interno del servidor al crear el libro" });
  }
};

export const remove = async (req: Request, res: Response) => {
  try {
    const id = Number(req.params.id);
    const ok = await libroService.remove(id);
    if (!ok) return res.status(404).json({ error: "Libro no encontrado" });
    res.status(204).send();
  } catch (error) {
    res.status(500).json({ error: "Error interno del servidor al eliminar el libro" });
  }
};