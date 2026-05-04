interface Usuario {
  id: number;
  name: string;
  email: string;
  phone: string;
}

const contenedorLista = document.getElementById('lista-usuarios') as HTMLUListElement;
const mensajeCarga = document.getElementById('cargando') as HTMLParagraphElement;
const mensajeError = document.getElementById('error-msg') as HTMLParagraphElement;

async function obtenerUsuarios(): Promise<Usuario[]> {
  try {
    const response = await fetch('https://jsonplaceholder.typicode.com/users');

    if (!response.ok) {
      throw new Error(`Error HTTP: ${response.status}`);
    }

    return await response.json();
  } catch (error) {
    console.error(error);
    mensajeError.style.display = 'block';
    return [];
  } finally {
 
    mensajeCarga.style.display = 'none';
  }
}

async function renderizarUsuarios() {
  const usuarios = await obtenerUsuarios();

  usuarios.forEach(usuario => {
    const li = document.createElement('li');
    li.textContent = `${usuario.name} - ${usuario.email}`;
    contenedorLista.appendChild(li);
  });
}

renderizarUsuarios();
