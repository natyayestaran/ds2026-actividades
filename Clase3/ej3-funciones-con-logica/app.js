function calcularPrecioFinal(monto, medioPago) {
  if (monto < 200) {
    return monto;
  }

  if (monto > 400) {
    return monto * 0.6;
  }

  switch (medioPago) {
    case "E":
      return monto * 0.7;
    case "D":
      return monto * 0.8;
    case "C":
      return monto * 0.9;
    default:
      return monto;
  }
}

const pruebas = [
  { monto: 150, medioPago: "E" },
  { monto: 250, medioPago: "E" },
  { monto: 250, medioPago: "C" },
  { monto: 450, medioPago: "D" },
  { monto: 500, medioPago: "C" },
];

for (const prueba of pruebas) {
  const final = calcularPrecioFinal(prueba.monto, prueba.medioPago);
  console.log(`Monto: $${prueba.monto} | Pago: ${prueba.medioPago} | Final: $${final}`);
}
