// Enunciado:
// Con este inventario:
// let inventario = { arepas: 20, empanadas: 8, jugos: 0, tintos: 40, pandebonos: 5 };

// Objetos en JavaScript · Sesión 2 · Página 17

// Mostrar cuántos productos hay, el total de unidades, los productos con stock bajo (más de 0 y
// menos de 10) con su cantidad, y los agotados. Usa Object.entries, Object.values, filter
// y map; nada de for ni for...in.
let inventario = {
  arepas: 20,
  empanadas: 8,
  jugos: 0,
  tintos: 40,
  pandebonos: 5
};

function contarUnidades(inventario) {
  return Object.values(inventario).reduce((total, cantidad) => total + cantidad, 0);
}

function obtenerStockBajo(inventario) {
  return Object.entries(inventario).filter(([producto, cantidad]) => cantidad > 0 && cantidad < 10);
}

function formatearPares(pares) {
  return pares.map(([producto, cantidad]) => `${producto} (${cantidad})`).join(", ");
}

function obtenerAgotados(inventario) {
  return Object.entries(inventario)
    .filter(([producto, cantidad]) => cantidad === 0)
    .map(([producto, cantidad]) => producto);
}

console.log(`Productos: ${Object.keys(inventario).length}`);
console.log(`Unidades en total: ${contarUnidades(inventario)}`);

let stockBajo = obtenerStockBajo(inventario);
console.log(`Stock bajo: ${formatearPares(stockBajo)}`);

let agotados = obtenerAgotados(inventario);
console.log(`Agotados: ${agotados.join(", ")}`);