import { Request, Response, NextFunction } from "express";
import { ZodError } from "zod";

export const globalErrorHandler = (err: any, req: Request, res: Response, next: NextFunction) => {
  if (err instanceof ZodError) {
    return res.status(400).json({ errors: err.errors.map(e => e.message) });
  }

  // Mapeo de errores de Prisma según SOURCE_IMAGE_14
  const prismaErrors: Record<string, { status: number; message: string }> = {
    P2002: { status: 409, message: 'Conflicto: El registro ya existe.' },
    P2025: { status: 404, message: 'Recurso no encontrado.' },
    P2003: { status: 400, message: 'Error de relación: ID de referencia inválido.' },
  };

  const prismaError = prismaErrors[err.code];
  if (prismaError) {
    return res.status(prismaError.status).json({ error: prismaError.message });
  }

  console.error(err);
  res.status(500).json({ error: 'Internal Server Error' });
};