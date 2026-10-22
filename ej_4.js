// Qué practica: Agregar y eliminar propiedades según decisiones del usuario.
// Enunciado:
// Leer el nombre del cliente y la cantidad de adultos, y crear una reserva con la actividad "Rafting
// río Fonce" y seguro: true. Preguntar si van menores; si sí, agregar la propiedad menores con
// su cantidad. Preguntar si rechaza el seguro; si sí, eliminar la propiedad seguro. Calcular el
// total: $70000 por adulto, $50000 por menor y $8000 por persona si hay seguro. Mostrar solo los
// datos que existen en la reserva.

function crearReserva(cliente, adultos) {
  return {
    cliente: cliente,
    actividad: "Rafting río Fonce",
    adultos: adultos,
    seguro: true
  };
}

function calcularTotal(reserva) {
  let total = reserva.adultos * 70000;
  let menores = reserva.menores ?? 0;

  total += menores * 50000;

  // Solo suma seguro si la propiedad existe y es true
  if (Object.prototype.hasOwnProperty.call(reserva, "seguro") && reserva.seguro === true) {
    total += (reserva.adultos + menores) * 8000;
  }

  return total;
}

function mostrarReserva(reserva) {
  console.log("--- Reserva ---");
  console.log("Cliente:", reserva.cliente);
  console.log("Actividad:", reserva.actividad);
  console.log("Adultos:", reserva.adultos);

  if (Object.prototype.hasOwnProperty.call(reserva, "menores")) {
    console.log("Menores:", reserva.menores);
  }

  if (Object.prototype.hasOwnProperty.call(reserva, "seguro") && reserva.seguro === true) {
    console.log("Seguro: incluido");
  } else {
    console.log("Seguro: no incluido");
  }

  console.log("Total: $" + calcularTotal(reserva));
}

// Ejemplo de uso
let cliente = prompt("Cliente:");
let adultos = Number(prompt("Adultos:"));

let reserva = crearReserva(cliente, adultos);

let vanMenores = prompt("¿Van menores de edad? (si/no):").toLowerCase();
if (vanMenores === "si") {
  reserva.menores = Number(prompt("¿Cuántos menores?:"));
}

let rechazaSeguro = prompt("¿Rechaza el seguro? (si/no):").toLowerCase();
if (rechazaSeguro === "si") {
  delete reserva.seguro; // elimina la propiedad
}

mostrarReserva(reserva);