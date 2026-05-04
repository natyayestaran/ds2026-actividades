interface Usuario {
  id: number;
  name: string;
  email: string;
  phone: string;
}

async function obtenerUsuarios(): Promise<Usuario[]> {
  try {
    const response = await fetch('https://jsonplaceholder.typicode.com/users');

    if (!response.ok) {
      throw new Error(`Error HTTP: ${response.status}`);
    }

    const usuarios: Usuario[] = await response.json();
    return usuarios;

  } catch (error) {
    console.error('Hubo un problema con la petición:', error);
    return []; 
  }
}

const mostrarUsuarios = async () => {
  const listaUsuarios = await obtenerUsuarios();
  
  listaUsuarios.forEach(usuario => {
    console.log(`Nombre: ${usuario.name} | Email: ${usuario.email}`);
  });
};

mostrarUsuarios();
export {};
