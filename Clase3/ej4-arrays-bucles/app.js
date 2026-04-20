const numeros = [12, 7, 22, 5, 18, 3, 14, 9];

let suma = 0;
let mayor = numeros[0];
let menor = numeros[0];

for (const numero of numeros) {
  suma += numero;
  if (numero > mayor) mayor = numero;
  if (numero < menor) menor = numero;
}

const promedio = suma / numeros.length;

console.log(`Suma total: ${suma}`);
console.log(`Promedio: ${promedio}`);
console.log(`Número mayor: ${mayor}`);
console.log(`Número menor: ${menor}`);

function generarAsteriscos(n) {
  let resultado = "";
  for (let i = 0; i < n; i++) {
    resultado += "*";
  }
  return resultado;
}

console.log(generarAsteriscos(5));
console.log(generarAsteriscos(8));
