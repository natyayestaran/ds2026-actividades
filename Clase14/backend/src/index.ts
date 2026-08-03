import express from "express";

const app = express();
const PORT = 3000;

interface Libro {
  id: number;
  titulo: string;
  autor: string;
  imagen: string;
}

const libros: Libro[] = [
  {
    id: 1,
    titulo: "Harry Potter",
    autor: "J.K Rowling",
    imagen: "https://covers.openlibrary.org/b/id/10523338-L.jpg"
  },
  {
    id: 2,
    titulo: "1984",
    autor: "George Orwell",
    imagen: "https://covers.openlibrary.org/b/id/8228691-L.jpg"
  },
  {
    id: 3,
    titulo: "El Hobbit",
    autor: "J.R.R Tolkien",
    imagen: "https://covers.openlibrary.org/b/id/8231996-L.jpg"
  }
];

app.get("/", (_req, res) => {
  res.json({
    mensaje: "API de la Librería funcionando"
  });
});

app.get("/libros", (_req, res) => {
  res.json(libros);
});

app.listen(PORT, () => {
  console.log(`Servidor escuchando en http://localhost:${PORT}`);
});