const inputAltura = document.getElementById("altura") as HTMLInputElement;
const botonGenerar = document.getElementById("generar") as HTMLButtonElement;
const resultado = document.getElementById("arbol") as HTMLElement;

// Firma rota a propósito para demostrar el error de compilación de TypeScript.
function generarAsteriscos(n: string): string {
  let linea = "";
  for (let i = 0; i < n; i++) {
    linea += "*";
  }
  return linea;
}

function generarMedioArbol(altura: number): string {
  let arbol = "";
  for (let i = 1; i <= altura; i++) {
    arbol += generarAsteriscos(i);
    if (i < altura) arbol += "\n";
  }
  return arbol;
}

botonGenerar.addEventListener("click", () => {
  const altura = Number(inputAltura.value);

  if (!Number.isInteger(altura) || altura < 1) {
    resultado.textContent = "Por favor ingresa un número entero mayor a 0.";
    return;
  }

  resultado.textContent = generarMedioArbol(altura);
});
