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
    isbn: "AUTO-" + Date.now(),
    titulo: "Introducción a TypeScript",
    autor: "Ana Pérez",
    precio: 4500,
    disponible: true,
    genero: "Programación",
  },
  {
    isbn: "AUTO-" + (Date.now() + 1),
    titulo: "JavaScript moderno",
    autor: "Luis Gómez",
    precio: 3800,
    disponible: false,
    genero: "Programación",
  },
  {
    isbn: "AUTO-" + (Date.now() + 2),
    titulo: "Diseño web con HTML y CSS",
    autor: "María López",
    precio: 3200,
    disponible: true,
  },
];

const filtroAutor = document.getElementById("filtroAutor") as HTMLInputElement;
const botonFiltrar = document.getElementById("filtrar") as HTMLButtonElement;
const botonDisponibles = document.getElementById("mostrarDisponibles") as HTMLButtonElement;
const botonTodos = document.getElementById("mostrarTodos") as HTMLButtonElement;
const listado = document.getElementById("listado") as HTMLUListElement;
const stats = document.getElementById("stats") as HTMLElement;
const tituloInput = document.getElementById("titulo") as HTMLInputElement;
const autorInput = document.getElementById("autor") as HTMLInputElement;
const precioInput = document.getElementById("precio") as HTMLInputElement;
const disponibleInput = document.getElementById("disponible") as HTMLInputElement;
const generoInput = document.getElementById("genero") as HTMLInputElement;
const botonAgregar = document.getElementById("agregarLibro") as HTMLButtonElement;
const errorForm = document.getElementById("errorForm") as HTMLElement;

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
    item.className = "book-item";
    item.textContent = `${libro.titulo} — ${libro.autor} | $${libro.precio.toFixed(2)} ${libro.disponible ? "(disponible)" : "(no disponible)"}${libro.genero ? ` | ${libro.genero}` : ""}`;

    const eliminarBtn = document.createElement("button");
    eliminarBtn.textContent = "Eliminar";
    eliminarBtn.addEventListener("click", () => eliminarLibro(libro.isbn));

    item.appendChild(eliminarBtn);
    listado.appendChild(item);
  });

  const promedio = precioPromedio(libros);
  stats.textContent = `Cantidad: ${libros.length} | Precio promedio: $${promedio.toFixed(2)}`;
}

function agregarLibro(libro: Libro): void {
  catalogo.push(libro);
  renderizar(catalogo);
}

function eliminarLibro(isbn: string): void {
  const indice = catalogo.findIndex((libro) => libro.isbn === isbn);
  if (indice >= 0) {
    catalogo.splice(indice, 1);
    renderizar(catalogo);
  }
}

function validarFormulario(): Libro | null {
  const titulo = tituloInput.value.trim();
  const autor = autorInput.value.trim();
  const precio = Number(precioInput.value);
  const disponible = disponibleInput.checked;
  const genero = generoInput.value.trim();

  if (!titulo || !autor) {
    errorForm.textContent = "Título y autor no pueden quedar vacíos.";
    return null;
  }

  if (!Number.isFinite(precio) || precio <= 0) {
    errorForm.textContent = "El precio debe ser un número mayor a 0.";
    return null;
  }

  errorForm.textContent = "";

  return {
    isbn: `AUTO-${Date.now()}`,
    titulo,
    autor,
    precio,
    disponible,
    genero: genero || undefined,
  };
}

function limpiarFormulario(): void {
  tituloInput.value = "";
  autorInput.value = "";
  precioInput.value = "";
  disponibleInput.checked = false;
  generoInput.value = "";
  errorForm.textContent = "";
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

botonAgregar.addEventListener("click", () => {
  const nuevoLibro = validarFormulario();

  if (!nuevoLibro) {
    return;
  }

  agregarLibro(nuevoLibro);
  limpiarFormulario();
});

document.addEventListener("DOMContentLoaded", () => {
  renderizar(catalogo);
});
