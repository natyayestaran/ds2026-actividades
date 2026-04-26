interface Libro {
  isbn: string;
  titulo: string;
  autor: string;
  precio: number;
  disponible: boolean;
  genero?: string;
}

const catalogo: Libro[] = [
  {
    isbn: "978-987-123456-7",
    titulo: "Introducción a TypeScript",
    autor: "Ana Pérez",
    precio: 4500,
    disponible: true,
    genero: "Programación",
  },
  {
    isbn: "978-987-234567-8",
    titulo: "JavaScript moderno",
    autor: "Luis Gómez",
    precio: 3800,
    disponible: false,
    genero: "Programación",
  },
  {
    isbn: "978-987-345678-9",
    titulo: "Diseño web con HTML y CSS",
    autor: "Ana Pérez",
    precio: 3200,
    disponible: true,
  },
  {
    isbn: "978-987-456789-0",
    titulo: "Bases de datos para principiantes",
    autor: "María López",
    precio: 2900,
    disponible: true,
    genero: "Tecnología",
  },
];

const filtroAutor = document.getElementById("filtroAutor") as HTMLInputElement;
const botonFiltrar = document.getElementById("filtrar") as HTMLButtonElement;
const botonDisponibles = document.getElementById("mostrarDisponibles") as HTMLButtonElement;
const botonTodos = document.getElementById("mostrarTodos") as HTMLButtonElement;
const listado = document.getElementById("listado") as HTMLUListElement;
const stats = document.getElementById("stats") as HTMLElement;

function buscarPorAutor(autor: string): Libro[] {
  const texto = autor.trim().toLowerCase();
  if (!texto) {
    return catalogo;
  }
  return catalogo.filter((libro) => libro.autor.toLowerCase().includes(texto));
}

function librosDisponibles(): Libro[] {
  return catalogo.filter((libro) => libro.disponible);
}

function precioPromedio(libros: Libro[]): number {
  if (libros.length === 0) {
    return 0;
  }
  const total = libros.reduce((acum, libro) => acum + libro.precio, 0);
  return total / libros.length;
}

function renderizar(libros: Libro[]): void {
  listado.innerHTML = "";
  libros.forEach((libro) => {
    const item = document.createElement("li");
    item.textContent = `${libro.titulo} — ${libro.autor} | $${libro.precio.toFixed(2)} ${libro.disponible ? "(disponible)" : "(no disponible)"}${libro.genero ? ` | ${libro.genero}` : ""}`;
    listado.appendChild(item);
  });

  const promedio = precioPromedio(libros);
  stats.textContent = `Cantidad: ${libros.length} | Precio promedio: $${promedio.toFixed(2)}`;
}

botonFiltrar.addEventListener("click", () => {
  renderizar(buscarPorAutor(filtroAutor.value));
});

botonDisponibles.addEventListener("click", () => {
  renderizar(librosDisponibles());
});

botonTodos.addEventListener("click", () => {
  renderizar(catalogo);
});

document.addEventListener("DOMContentLoaded", () => {
  renderizar(catalogo);
});
