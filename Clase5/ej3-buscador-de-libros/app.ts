interface LibroOL {
  title: string;
  author_name?: string[]; 
  first_publish_year?: number;
}

const input = document.getElementById('input-busqueda') as HTMLInputElement;
const boton = document.getElementById('btn-buscar') as HTMLButtonElement;
const contenedorResultados = document.getElementById('resultados') as HTMLDivElement;
const contenedorError = document.getElementById('error-validacion') as HTMLDivElement;

async function buscarLibros(termino: string) {
  contenedorResultados.innerHTML = '<p>Buscando...</p>';
  contenedorError.textContent = '';

  try {
    const url = `https://openlibrary.org/search.json?q=${encodeURIComponent(termino)}`;
    const response = await fetch(url);

    if (!response.ok) throw new Error('Error al conectar con la API');

    const data = await response.json();
    
    const libros: LibroOL[] = data.docs.slice(0, 10);
    
    renderizarTarjetas(libros);

  } catch (error) {
    contenedorResultados.innerHTML = '';
    contenedorError.textContent = 'No se pudo realizar la búsqueda.';
  }
}

function renderizarTarjetas(libros: LibroOL[]) {
  contenedorResultados.innerHTML = ''; 

  if (libros.length === 0) {
    contenedorResultados.innerHTML = '<p>No se encontraron resultados.</p>';
    return;
  }

  libros.forEach(libro => {
    const tarjeta = document.createElement('div');
    tarjeta.className = 'tarjeta';

    const autor = libro.author_name ? libro.author_name.join(', ') : 'Autor desconocido';
    const anio = libro.first_publish_year ?? 'Año no disponible';

    tarjeta.innerHTML = `
      <h3>${libro.title}</h3>
      <p><strong>Autor:</strong> ${autor}</p>
      <p><strong>Año:</strong> ${anio}</p>
    `;
    contenedorResultados.appendChild(tarjeta);
  });
}

boton.addEventListener('click', () => {
  const texto = input.value.trim();

  if (texto === "") {
    contenedorError.textContent = "El campo de búsqueda no puede estar vacío.";
    contenedorResultados.innerHTML = "";
    return; 
  }

  buscarLibros(texto);
});
