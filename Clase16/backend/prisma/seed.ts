import { prisma } from "../src/config/prisma";

const librosPrueba = [
  { titulo: "El principito", autor: "Antoine de Saint-Exupéry", precio: 4500, imagen: "...", disponible: true },
  { titulo: "Fundación", autor: "Isaac Asimov", precio: 5000, imagen: "...", disponible: true }
];

const autoresPrueba = [
  { nombre: "Antoine de Saint-Exupéry", nacionalidad: "Francia" },
  { nombre: "Isaac Asimov", nacionalidad: "Rusia" }
];

async function main() {
  // Limpiamos registros previos para poder re-ejecutar el seed sin conflictos de unicidad
  await prisma.libro.deleteMany();
  await prisma.autor.deleteMany();

  await prisma.libro.createMany({ data: librosPrueba });
  await prisma.autor.createMany({ data: autoresPrueba });

  console.log("¡Base de datos sembrada con éxito!");
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  });