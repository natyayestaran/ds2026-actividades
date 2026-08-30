import { Request, Response, NextFunction } from 'express';
import * as bookService from '../services/book.service';

export const getBooks = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const books = await bookService.getAll();
    res.json(books);
  } catch (e) { next(e); }
};

export const createBook = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const newBook = await bookService.create(req.body);
    res.status(201).json(newBook);
  } catch (e) { next(e); }
};