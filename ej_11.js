// // el detalle, el subtotal, el domicilio ($3000 si
// // el subtotal es menor a $20000; si no, gratis) y el total.Enunciado:
// El programa arranca con el menú de precios:
// let precios = { arepa: 3500, empanada: 2500, jugo: 4000, tinto: 1500 };
// El usuario agrega productos y cantidades hasta escribir "fin". Los productos se guardan en un
// objeto items (producto: cantidad). Si pide un producto que ya estaba, la cantidad se suma. Si
// no está en el menú, se rechaza. Al final se muestra 
let precios = {
  arepa: 3500,
  empanada: 2500,
  jugo: 4000,
  tinto: 1500
};

let items = {};

function agregarItem(items, producto, cantidad) {
  if (precios[producto] === undefined) {
    return `${producto} no está en el menú`;
  }

  if (items[producto] === undefined) {
    items[producto] = cantidad;
  } else {
    items[producto] += cantidad;
  }

  return `${producto} agregado`;
}

function calcularSubtotal(items, precios) {
  let subtotal = 0;

  for (let producto in items) {
    subtotal += items[producto] * precios[producto];
  }

  return subtotal;
}

function calcularDomicilio(subtotal) {
  if (subtotal < 20000) {
    return 3000;
  }

  return 0;
}

function mostrarDetalle(items, precios) {
  console.log("Detalle:");

  for (let producto in items) {
    let totalProducto = items[producto] * precios[producto];
    console.log(`${producto} x${items[producto]} = $${totalProducto}`);
  }
}

let producto = prompt("Producto:");

while (producto.toLowerCase() !== "fin") {
  let cantidad = Number(prompt("Cantidad:"));

  let mensaje = agregarItem(items, producto.toLowerCase(), cantidad);

  if (mensaje.includes("no está en el menú")) {
    console.log(mensaje);
  }

  producto = prompt("Producto:");
}

mostrarDetalle(items, precios);

let subtotal = calcularSubtotal(items, precios);
let domicilio = calcularDomicilio(subtotal);

console.log(`Subtotal: $${subtotal}`);
console.log(`Domicilio: $${domicilio}`);
console.log(`Total: $${subtotal + domicilio}`);
