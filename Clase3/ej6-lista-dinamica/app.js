const inputProducto = document.getElementById("producto");
const botonAgregar = document.getElementById("agregar");
const lista = document.getElementById("lista");
const contadorElemento = document.getElementById("contador");

function actualizarContador() {
  const total = lista.children.length;
  contadorElemento.textContent = `${total} producto${total === 1 ? "" : "s"} en la lista`;
}

function crearItem(producto) {
  const li = document.createElement("li");
  li.textContent = producto;

  const botonEliminar = document.createElement("button");
  botonEliminar.textContent = "Eliminar";
  botonEliminar.type = "button";
  botonEliminar.addEventListener("click", () => {
    lista.removeChild(li);
    actualizarContador();
  });

  li.appendChild(botonEliminar);
  return li;
}

botonAgregar.addEventListener("click", () => {
  const producto = inputProducto.value.trim();
  if (producto === "") {
    alert("Por favor ingresa el nombre de un producto.");
    return;
  }

  lista.appendChild(crearItem(producto));
  inputProducto.value = "";
  inputProducto.focus();
  actualizarContador();
});

actualizarContador();
