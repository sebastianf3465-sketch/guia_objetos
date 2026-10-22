// Ejercicio 3. Producto en oferta
// Qué practica: Construir un objeto nuevo a partir de otro sin modificar el original.
// Enunciado:
// El programa arranca con este objeto:
// let producto = { nombre: "Morral", precio: 85000, stock: 12 };
// Leer un porcentaje de descuento. Una función debe retornar un objeto nuevo con el precio
// rebajado y una propiedad extra precioAnterior. Las demás propiedades se copian igual.
// Mostrar ambos objetos para demostrar que el original quedó intacto.

const producto = { nombre: "Morral", precio: 85000, stock: 12 };
const pct = Number(prompt('Porcentaje de descuento: '));
const aplicarDescuento = (p, porc) => {
  const precioAnterior = p.precio;
  const precio = Math.round(precioAnterior * (1 - porc / 100));
  return { ...p, precio, precioAnterior };
};
const linea = p => p.nombre + ' - $' + p.precio + (p.precioAnterior ? ' (antes $' + p.precioAnterior + ')' : '') + ' - ' + p.stock + ' unidades';

const oferta = aplicarDescuento(producto, pct);
console.log('Original: ' + linea(producto));
console.log('En oferta: ' + linea(oferta));