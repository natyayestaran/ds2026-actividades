import { Request, Response, NextFunction } from "express";

export const globalErrorHandler = (err: any, req: Request, res: Response, next: NextFunction) => {
  console.error("Error global:", err);

  // Error de validación de Zod
  if (err.name === "ZodError" || err.issues) {
    const issues = err.issues || [];
    return res.status(400).json({ 
      errors: issues.map((e: any) => e.message) 
    });
  }

  // Error por defecto del servidor
  const statusCode = err.statusCode || 500;
  const message = err.message || "Error interno del servidor";

  return res.status(statusCode).json({
    error: message,
  });
};