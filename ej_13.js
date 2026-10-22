// Reescribe el ejercicio 5 sin for...in: usa Object.keys, Object.values y métodos de array.
// La salida debe ser idéntica. En un comentario responde: ¿qué función del ejercicio 5
// desapareció por completo y por qué?
let notas = {
  matematicas: 4.2,
  ingles: 3.1,
  programacion: 4.8,
  etica: 3.9
};

function contarClaves(objeto) {
  return Object.keys(objeto).length;
}

function calcularPromedioObjeto(objeto) {
  let valores = Object.values(objeto);
  let suma = valores.reduce((total, valor) => total + valor, 0);
  return suma / contarClaves(objeto);
}

function buscarClaveMayor(objeto) {
  let claves = Object.keys(objeto);

  return claves.reduce((claveMayor, claveActual) => {
    if (objeto[claveActual] > objeto[claveMayor]) {
      return claveActual;
    }

    return claveMayor;
  }, claves[0]);
}

function filtrarClavesMenores(objeto, limite) {
  return Object.keys(objeto).filter((clave) => objeto[clave] < limite);
}

for (let clave of Object.keys(notas)) {
  console.log(`${clave}: ${notas[clave]}`);
}

console.log(`Promedio: ${calcularPromedioObjeto(notas).toFixed(1)}`);
console.log(`Mejor materia: ${buscarClaveMayor(notas)}`);

let porReforzar = filtrarClavesMenores(notas, 3.5);
console.log(`Por reforzar: ${porReforzar.join(", ")}`);