const input = document.getElementById('input-busqueda');

const boton = document.getElementById('btn-buscar');

const contenedorResultados = document.getElementById('resultados');

const contenedorError = document.getElementById('error-validacion');



async function buscarLibros(termino) {

    contenedorResultados.innerHTML = '';

    contenedorError.textContent = '';

    try {

        const url = `https://openlibrary.org/search.json?q=${encodeURIComponent(termino)}`;

        const response = await fetch(url);

        const data = await response.json();

        const libros = data.docs.slice(0, 10);

        renderizarTarjetas(libros);

    } catch (error) {

        contenedorError.textContent =
            'No se pudo realizar la búsqueda.';
    }
}



function renderizarTarjetas(libros) {

    contenedorResultados.innerHTML = '';

    if (libros.length === 0) {

        contenedorResultados.innerHTML =
            '<p>No se encontraron resultados.</p>';

        return;
    }

    libros.forEach(libro => {

        const autor = libro.author_name
            ? libro.author_name.join(', ')
            : 'Autor desconocido';

        const imagen = libro.cover_i
            ? `https://covers.openlibrary.org/b/id/${libro.cover_i}-L.jpg`
            : 'https://via.placeholder.com/300x400?text=Sin+Imagen';

        const card = document.createElement('div');

        card.className = 'col-md-4 mb-4';

        card.innerHTML = `

            <div class="card h-100">

                <img
                    src="${imagen}"
                    class="card-img-top"
                >

                <div class="card-body">

                    <h5 class="card-title">
                        ${libro.title}
                    </h5>

                    <p class="card-text">
                        ${autor}
                    </p>

                    <a
                        href="libro.html"
                        class="btn btn-primary"
                    >
                        Ver más
                    </a>

                </div>

            </div>

        `;

        contenedorResultados.appendChild(card);

    });

}



boton.addEventListener('click', () => {

    const texto = input.value.trim();

    if (texto === '') {

        contenedorError.textContent =
            'El campo de búsqueda no puede estar vacío.';

        return;
    }

    buscarLibros(texto);

});