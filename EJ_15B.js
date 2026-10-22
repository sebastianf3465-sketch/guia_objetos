// Parte B
let zonas = {
  centro: "A",
  laPlaya: "B",
  pabloVI: "A"
};

function invertirAgrupando(objeto) {
  let agrupado = {};

  for (let [clave, valor] of Object.entries(objeto)) {
    if (agrupado[valor] === undefined) {
      agrupado[valor] = [clave];
    } else {
      agrupado[valor].push(clave);
    }
  }

  return agrupado;
}

function unirConComas(lista) {
  return lista.join(", ");
}

let zonasAgrupadas = invertirAgrupando(zonas);

console.log("Zonas agrupadas:");

for (let clave in zonasAgrupadas) {
  console.log(`${clave}: ${unirConComas(zonasAgrupadas[clave])}`);
}