
import { describe, it, expect } from "vitest";
import request from "supertest";
import jwt from "jsonwebtoken";
import app from "../app";
import { JWT_SECRET } from "../config/env";

function crearToken(rol: "ADMIN" | "CLIENTE") {
  return jwt.sign({ id: rol === "ADMIN" ? 1 : 2, rol }, JWT_SECRET, {
    expiresIn: "2h",
  });
}

describe("Integración de Endpoints de Libros (Requiere Base de Datos)", () => {
  it("GET /api/libros - devuelve una lista pública", async () => {
    const res = await request(app).get("/api/libros");

    expect(res.status).toBe(200);
    expect(Array.isArray(res.body)).toBe(true);
  }, 20000);

  it("POST /api/libros - rechaza la creación sin token (401)", async () => {
    const res = await request(app)
      .post("/api/libros")
      .send({ titulo: "Libro Test", precio: 1000, autorId: 1 });

    expect(res.status).toBe(401);
  });

  it("POST /api/libros - rechaza a CLIENTE (403)", async () => {
    const res = await request(app)
      .post("/api/libros")
      .set("Authorization", `Bearer ${crearToken("CLIENTE")}`)
      .send({
        titulo: "Libro Test",
        precio: 1000,
        autorId: 1,
        categorias: [1],
      });

    expect(res.status).toBe(403);
  });

  it("POST /api/libros - permite a ADMIN superar la autorización", async () => {
    const res = await request(app)
      .post("/api/libros")
      .set("Authorization", `Bearer ${crearToken("ADMIN")}`)
      .send({
        titulo: "",
        precio: -1,
        autorId: 0,
        categorias: [],
      });

    // ADMIN supera authenticate/authorize, pero estos datos deben fallar en Zod.
    expect(res.status).toBe(400);
  });
});
