  import prisma from '../src/config/prisma';

  async function main() {
  // 1. Limpieza en orden de dependencia (Hijos primero)
  await prisma.libro.deleteMany();
  await prisma.categoria.deleteMany();
  await prisma.autor.deleteMany();

  // 2. Creación de entidades maestras
  const autor = await prisma.autor.create({
    data: { nombre: 'Jorge Luis Borges' },
  });

  const catFiccion = await prisma.categoria.create({
    data: { nombre: 'Ficción' },
  });

  // 3. Creación vinculada dinámicamente
  await prisma.libro.create({
    data: {
      titulo: 'El Aleph',
      precio: 4500.50,
      autor: { connect: { id: autor.id } },
      categorias: { connect: [{ id: catFiccion.id }] }
    },
  });
}

main()
  .catch((e) => { console.error(e); process.exit(1); })
  .finally(async () => await prisma.$disconnect());