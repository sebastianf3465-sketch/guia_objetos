// Enunciado:
// Ejecuta esto y explica el resultado en un comentario:
// let a = { nombre: "Morral", precio: 85000 };
// let b = { nombre: "Morral", precio: 85000 };
// console.log(a === b);
// Después escribe una función que diga si dos objetos tienen exactamente las mismas claves
// con los mismos valores (solo un nivel, sin objetos adentro). Pruébala con los cuatro casos del
// ejemplo.
let a = { nombre: "Morral", precio: 85000 };
let b = { nombre: "Morral", precio: 85000 };
console.log(a === b);

function contarClaves(objeto) {
  let contador = 0;

  for (let clave in objeto) {
    contador++;
  }

  return contador;
}

function sonIguales(a, b) {
  if (contarClaves(a) !== contarClaves(b)) {
    return false;
  }

  for (let clave in a) {
    if (!Object.prototype.hasOwnProperty.call(b, clave)) {
      return false;
    }

    if (a[clave] !== b[clave]) {
      return false;
    }
  }

  return true;
}

let obj1 = { nombre: "Morral", precio: 85000 };
let obj2 = { precio: 85000, nombre: "Morral" };
console.log("Caso 1, iguales:", sonIguales(obj1, obj2));

let obj3 = { nombre: "Morral", precio: 85000 };
let obj4 = { nombre: "Morral", precio: 90000 };
console.log("Caso 2, distinto precio:", sonIguales(obj3, obj4));

let obj5 = { nombre: "Morral" };
let obj6 = { nombre: "Morral", precio: 85000 };
console.log("Caso 3, a tiene menos claves que b:", sonIguales(obj5, obj6));

let obj7 = { nombre: "Morral", precio: 85000 };
let obj8 = { precio: 85000, nombre: "Morral" };
console.log("Caso 4, mismas claves en otro orden:", sonIguales(obj7, obj8));