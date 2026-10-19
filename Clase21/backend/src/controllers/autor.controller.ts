import { Request, Response } from "express";

import * as autorService from "../services/autor.service";

export const getAll = async (_req: Request, res: Response) => {
  try {
    const autores = await autorService.findAll();
    res.json(autores);
  } catch (error) {
    res.status(500).json({
      error: "Error interno del servidor al obtener autores",
    });
  }
};

export const getById = async (req: Request, res: Response) => {
  try {
    const id = Number(req.params.id);

    const autor = await autorService.findById(id);

    if (!autor) {
      return res.status(404).json({
        error: "Autor no encontrado",
      });
    }

    res.json(autor);
  } catch (error) {
    res.status(500).json({
      error: "Error interno del servidor al buscar el autor",
    });
  }
};

export const create = async (req: Request, res: Response) => {
  try {
    const nuevo = await autorService.create(req.body);

    res.status(201).json(nuevo);
  } catch (error) {
    res.status(500).json({
      error: "Error interno del servidor al crear el autor",
    });
  }
};

export const update = async (req: Request, res: Response) => {
  try {
    const id = Number(req.params.id);

    const actualizado = await autorService.update(id, req.body);

    if (!actualizado) {
      return res.status(404).json({
        error: "Autor no encontrado",
      });
    }

    res.json(actualizado);
  } catch (error) {
    res.status(500).json({
      error: "Error interno del servidor al actualizar el autor",
    });
  }
};

export const remove = async (req: Request, res: Response) => {
  try {
    const id = Number(req.params.id);

    const ok = await autorService.remove(id);

    if (!ok) {
      return res.status(404).json({
        error: "Autor no encontrado",
      });
    }

    res.status(204).send();
  } catch (error) {
    res.status(500).json({
      error: "Error interno del servidor al eliminar el autor",
    });
  }
};