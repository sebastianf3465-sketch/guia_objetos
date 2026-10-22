//Enunciado:
// Leer una frase, pasarla a minúsculas y separarla en palabras con split(" "). Contar cuántas
// veces aparece cada palabra usando un objeto. Mostrar cada palabra con su conteo en el orden
// en que apareció por primera vez, cuántas palabras distintas hay y cuál es la más repetida. Si
// hay empate, gana la que apareció primero.

let frase = prompt("Frase:");

function contarClaves(objeto) {
  let contador = 0;

  for (let clave in objeto) {
    contador++;
  }

  return contador;
}

function contarPalabras(frase) {
  let palabras = frase.toLowerCase().split(" ");
  let contador = {};

  for (let i = 0; i < palabras.length; i++) {
    let palabra = palabras[i];

    if (contador[palabra] === undefined) {
      contador[palabra] = 1;
    } else {
      contador[palabra]++;
    }
  }

  return contador;
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

let palabrasContadas = contarPalabras(frase);

for (let clave in palabrasContadas) {
  console.log(`${clave}: ${palabrasContadas[clave]}`);
}

console.log(`Palabras distintas: ${contarClaves(palabrasContadas)}`);

let masRepetida = buscarClaveMayor(palabrasContadas);
console.log(`Más repetida: ${masRepetida} (${palabrasContadas[masRepetida]} veces)`);