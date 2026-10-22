// Enunciado:
// El programa arranca con estos dos objetos:
// let cliente = {
// nombre: "Laura Gómez",
// telefonos: ["3104567890", "6077241234"],
// direccion: { calle: "Calle 12 # 9-45", barrio: "Centro", ciudad: "San Gil" }
// };
// let clienteNuevo = { nombre: "Pedro Ruiz", telefonos: [] };
// Mostrar la ficha de cliente, leer un teléfono nuevo, un barrio y una calle nuevos, actualizar el
// objeto y volver a mostrar la ficha. Al final, mostrar la ciudad de clienteNuevo usando la misma
// función que con cliente, sin que el programa se rompa.

let cliente = {
  nombre: "Laura Gómez",
  telefonos: ["3104567890", "6077241234"],
  direccion: {
    calle: "Calle 12 # 9-45",
    barrio: "Centro",
    ciudad: "San Gil"
  }
};

let clienteNuevo = {
  nombre: "Pedro Ruiz",
  telefonos: []
};

function mostrarFicha(cliente) {
  console.log(cliente.nombre);
  console.log("Teléfonos:", cliente.telefonos.join(", "));
  console.log("Dirección:", cliente.direccion.calle + ", " + cliente.direccion.barrio + ", " + cliente.direccion.ciudad);
}

function cambiarDireccion(cliente, calle, barrio) {
  if (cliente.direccion === undefined) {
    cliente.direccion = {};
  }

  cliente.direccion.calle = calle;
  cliente.direccion.barrio = barrio;
}

function obtenerCiudad(cliente) {
  if (cliente.direccion === undefined || cliente.direccion.ciudad === undefined) {
    return "sin dirección";
  }

  return cliente.direccion.ciudad;
}

console.log("--- Antes ---");
mostrarFicha(cliente);

let telefono = prompt("Nuevo teléfono:");
cliente.telefonos.push(telefono);

let barrio = prompt("Nuevo barrio:");
let calle = prompt("Nueva calle:");
cambiarDireccion(cliente, calle, barrio);

console.log("--- Después ---");
mostrarFicha(cliente);

console.log(`Ciudad de ${clienteNuevo.nombre}: ${obtenerCiudad(clienteNuevo)}`);

