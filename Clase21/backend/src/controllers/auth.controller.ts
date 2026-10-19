import { Request, Response } from "express";
import * as authService from "../services/auth.services";
import prisma from "../config/prisma";

export async function registrar(req: Request, res: Response) {
  const usuario = await authService.registrar(req.body);
  return res.status(201).json(usuario);
}

export async function login(req: Request, res: Response) {
  const resultado = await authService.login(req.body);

  if (!resultado) {
    return res.status(401).json({ error: "Credenciales inválidas" });
  }

  return res.status(200).json(resultado);
}

export async function yo(req: Request, res: Response) {
  if (!req.usuario) {
    return res.status(401).json({ error: "No autenticado" });
  }

  const usuario = await prisma.usuario.findUnique({
    where: { id: req.usuario.id },
  });

  if (!usuario) {
    return res.status(404).json({ error: "Usuario no encontrado" });
  }

  return res.status(200).json(usuario);
}