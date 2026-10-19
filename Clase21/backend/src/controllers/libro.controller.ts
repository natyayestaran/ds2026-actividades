import { Request, Response, NextFunction } from "express";

import * as bookService from "../services/libro.service";

export const getAll = async (
  _req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const books = await bookService.getAll();
    res.json(books);
  } catch (error) {
    next(error);
  }
};

export const getById = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const id = Number(req.params.id);

    const book = await bookService.getById(id);

    if (!book) {
      return res.status(404).json({
        error: "Libro no encontrado",
      });
    }

    res.json(book);
  } catch (error) {
    next(error);
  }
};

export const create = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const newBook = await bookService.create(req.body);
    res.status(201).json(newBook);
  } catch (error) {
    next(error);
  }
};

export const update = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const id = Number(req.params.id);

    const book = await bookService.update(id, req.body);

    res.json(book);
  } catch (error) {
    next(error);
  }
};

export const remove = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const id = Number(req.params.id);

    const ok = await bookService.remove(id);

    if (!ok) {
      return res.status(404).json({
        error: "Libro no encontrado",
      });
    }

    res.status(204).send();
  } catch (error) {
    next(error);
  }
};