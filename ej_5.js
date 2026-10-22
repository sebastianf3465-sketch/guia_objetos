// El programa arranca con este objeto:
// let notas = { matematicas: 4.2, ingles: 3.1, programacion: 4.8, etica: 3.9 };
// Mostrar cada materia con su nota, el promedio con un decimal, la materia con mejor nota y las
// materias por reforzar (nota menor a 3.5). Las funciones deben seguir funcionando si agregas
// una quinta materia sin tocarlas.

let notas = {
  matematicas: 4.2,
  ingles: 3.1,
  programacion: 4.8,
  etica: 3.9
};

function contarClaves(objeto) {
  let contador = 0;

  for (let clave in objeto) {
    contador++;
  }

  return contador;
}

function calcularPromedioObjeto(objeto) {
  let suma = 0;

  for (let clave in objeto) {
    suma += objeto[clave];
  }

  return suma / contarClaves(objeto);
}

function buscarClaveMayor(objeto) {
  let claveMayor = "";
  let mayorValor = -Infinity;

  for (let clave in objeto) {
    if (objeto[clave] > mayorValor) {
      mayorValor = objeto[clave];
      claveMayor = clave;
    }
  }

  return claveMayor;
}

function filtrarClavesMenores(objeto, limite) {
  let resultado = [];

  for (let clave in objeto) {
    if (objeto[clave] < limite) {
      resultado.push(clave);
    }
  }

  return resultado;
}

// Mostrar cada materia y su nota
for (let clave in notas) {
  console.log(`${clave}: ${notas[clave]}`);
}

console.log(`Promedio: ${calcularPromedioObjeto(notas).toFixed(1)}`);
console.log(`Mejor materia: ${buscarClaveMayor(notas)}`);

let porReforzar = filtrarClavesMenores(notas, 3.5);
console.log(`Por reforzar: ${porReforzar.join(", ")}`);