import "@testing-library/jest-dom/vitest";
import { describe, it, expect, vi } from "vitest";
import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import Navbar from "./Navbar";

// Simulamos el contexto de autenticación para probar diferentes roles
vi.mock("../context/AuthContext", () => ({
  useAuth: () => ({
    usuario: { nombre: "Admin Test", rol: "ADMIN" },
    logout: vi.fn(),
    tieneRol: (rol: string) => rol === "ADMIN",
  }),
}));

describe("Navbar Component", () => {
  it("muestra la opción de Nuevo Libro si el usuario es ADMIN", () => {
    render(
      <BrowserRouter>
        <Navbar />
      </BrowserRouter>
    );

    expect(screen.getByText(/Nuevo Libro/i)).toBeInTheDocument();
  });
});