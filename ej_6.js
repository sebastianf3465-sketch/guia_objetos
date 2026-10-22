// El programa arranca con este glosario:
// let glosario = {
// api: "Conjunto de reglas para que dos programas se comuniquen.",
// servidor: "Programa que recibe peticiones y devuelve respuestas.",
// ruta: "Dirección a la que llega una petición, como /productos.",
// middleware: "Función que se ejecuta entre la petición y la respuesta.",
// endpoint: "Combinación de un método HTTP y una ruta."
// };
// El usuario escribe términos hasta "fin" y el programa muestra la definición, sin importar
// mayúsculas. Si el término no está, pregunta si quiere agregarlo y, si sí, pide la definición y lo
// agrega. Al final dice cuántos términos tiene el glosario.
// Ejemplo de ejecución:
// [prompt] Término: API
// api: Conjunto de reglas para que dos programas se comuniquen.
// [prompt] Término: cookie
// "cookie" no está en el glosario
// [prompt] ¿Quieres agregarlo? (si/no): si
// [prompt] Definición: Dato pequeño que el servidor guarda en el navegador.
// Agregado
// [prompt] Término: fin
// El glosario tiene 6 términos

let glosario = {
  api: "Conjunto de reglas para que dos programas se comuniquen.",
  servidor: "Programa que recibe peticiones y devuelve respuestas.",
  ruta: "Dirección a la que llega una petición, como /productos.",
  middleware: "Función que se ejecuta entre la petición y la respuesta.",
  endpoint: "Combinación de un método HTTP y una ruta."
};

function contarClaves(objeto) {
  let contador = 0;

  for (let clave in objeto) {
    contador++;
  }

  return contador;
}

function buscarDefinicion(glosario, termino) {
  let clave = termino.toLowerCase();
  return glosario[clave];
}

let termino = prompt("Término:");

while (termino.toLowerCase() !== "fin") {
  let definicion = buscarDefinicion(glosario, termino);

  if (definicion !== undefined) {
    console.log(`${termino.toLowerCase()}: ${definicion}`);
  } else {
    console.log(`"${termino}" no está en el glosario`);

    let respuesta = prompt("¿Quieres agregarlo? (si/no):").toLowerCase();

    if (respuesta === "si") {
      let nuevaDefinicion = prompt("Definición:");
      glosario[termino.toLowerCase()] = nuevaDefinicion;
      console.log("Agregado");
    }
  }

  termino = prompt("Término:");
}

console.log(`El glosario tiene ${contarClaves(glosario)} términos`);