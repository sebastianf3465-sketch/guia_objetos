// Parte A. Con este objeto de códigos de aeropuerto:
// let codigos = { bogota: "BOG", medellin: "MDE", bucaramanga: "BGA", cali: "CLO" };
// Construir un objeto invertido (código: ciudad). El usuario escribe códigos hasta "fin" y el
// programa dice a qué ciudad corresponden.
// Parte B. Ahora invierte este objeto de zonas de reparto, donde un valor se repite:
// let zonas = { centro: "A", laPlaya: "B", pabloVI: "A" };
// Si lo inviertes como en la parte A, se pierde un barrio. Escribe otra función que agrupe: cada
// zona debe guardar un array con todos sus barrios.
// Parte A
let codigos = {
  bogota: "BOG",
  medellin: "MDE",
  bucaramanga: "BGA",
  cali: "CLO"
};

function invertir(objeto) {
  let invertido = {};

  for (let [clave, valor] of Object.entries(objeto)) {
    invertido[valor] = clave;
  }

  return invertido;
}

let invertido = invertir(codigos);

let codigo = prompt("Código:");

while (codigo.toLowerCase() !== "fin") {
  let ciudad = invertido[codigo.toUpperCase()];

  if (ciudad !== undefined) {
    console.log(`${codigo.toUpperCase()}: ${ciudad}`);
  } else {
    console.log(`No hay ciudad con el código ${codigo.toUpperCase()}`);
  }

  codigo = prompt("Código:");
}

//siiii