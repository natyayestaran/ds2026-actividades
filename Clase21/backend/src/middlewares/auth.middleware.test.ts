
import { describe, it, expect, vi } from "vitest";
import type { Request, Response, NextFunction } from "express";
import { authorize } from "./auth.middleware";

describe("Middleware de autorización", () => {
  it("permite el acceso si el usuario tiene el rol ADMIN", () => {
    const req = {
      usuario: { id: 1, rol: "ADMIN" },
    } as Request;

    const res = {
      status: vi.fn().mockReturnThis(),
      json: vi.fn(),
    } as unknown as Response;

    const next = vi.fn() as NextFunction;

    authorize("ADMIN")(req, res, next);

    expect(next).toHaveBeenCalledOnce();
    expect(res.status).not.toHaveBeenCalled();
  });

  it("rechaza con 403 si el usuario tiene el rol CLIENTE", () => {
    const req = {
      usuario: { id: 2, rol: "CLIENTE" },
    } as Request;

    const res = {
      status: vi.fn().mockReturnThis(),
      json: vi.fn(),
    } as unknown as Response;

    const next = vi.fn() as NextFunction;

    authorize("ADMIN")(req, res, next);

    expect(res.status).toHaveBeenCalledWith(403);
    expect(res.json).toHaveBeenCalledOnce();
    expect(next).not.toHaveBeenCalled();
  });

  it("rechaza con 401 si no hay usuario autenticado", () => {
    const req = {} as Request;

    const res = {
      status: vi.fn().mockReturnThis(),
      json: vi.fn(),
    } as unknown as Response;

    const next = vi.fn() as NextFunction;

    authorize("ADMIN")(req, res, next);

    expect(res.status).toHaveBeenCalledWith(401);
    expect(res.json).toHaveBeenCalledOnce();
    expect(next).not.toHaveBeenCalled();
  });
});
