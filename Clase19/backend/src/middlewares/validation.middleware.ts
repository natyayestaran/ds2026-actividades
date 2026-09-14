import { Request, Response, NextFunction } from "express";
import { ZodType } from "zod";

// 🛡️ La función exportada se llama validate (en singular)
export const validate = (schema: ZodType) => {
  return (req: Request, res: Response, next: NextFunction) => {
    const resultado = schema.safeParse(req.body);
    if (!resultado.success) {
      return next(resultado.error); // Envía los errores de Zod al errorHandler global [1]
    }
    req.body = resultado.data; // Reemplaza el body con la versión limpia [2]
    next();
  };
};

// Valida los parámetros de la URL (el :id de las rutas) [1]
export const validateParams = (schema: ZodType) => {
  return (req: Request, res: Response, next: NextFunction) => {
    const resultado = schema.safeParse(req.params);
    if (!resultado.success) {
      return next(resultado.error);
    }
    next();
  };
};