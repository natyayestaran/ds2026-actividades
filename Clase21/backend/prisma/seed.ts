import 'dotenv/config'; 
import prisma from '../src/config/prisma'; 
import bcrypt from 'bcrypt';

async function main() {
 
  await prisma.libro.deleteMany();
  await prisma.categoria.deleteMany();
  await prisma.autor.deleteMany();

  
  const autor = await prisma.autor.create({
    data: { nombre: 'Jorge Luis Borges' },
  });

  const catFiccion = await prisma.categoria.create({
    data: { nombre: 'Ficción' },
  });

  await prisma.libro.create({
    data: {
      titulo: 'El Aleph',
      precio: 4500.50,
      autor: { connect: { id: autor.id } },
      categorias: { connect: [{ id: catFiccion.id }] }
    },
  });

  
  const usuarios = [
    { 
      email: "admin@libreria.test", 
      nombre: "Administrador", 
      rol: "ADMIN" as const, 
      password: "Admin1234" 
    },
    { 
      email: "cliente@libreria.test", 
      nombre: "Cliente Regular", 
      rol: "CLIENTE" as const, 
      password: "Cliente1234" 
    },
  ];

  for (const { password, ...datos } of usuarios) {
    
    const hash = await bcrypt.hash(password, 10); 

    await prisma.usuario.upsert({
      where: { email: datos.email },
      update: {}, 
      create: { 
        ...datos, 
        passwordHash: hash 
      },
    });
  }
}

main()
  .catch((e) => { 
    console.error(e); 
    process.exit(1); 
  })
  .finally(async () => {
    await prisma.$disconnect();
  });