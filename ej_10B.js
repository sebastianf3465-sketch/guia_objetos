// parte B
function clonarEntrega(entrega) {
  return {
    barrio: entrega.barrio,
    hora: entrega.hora
  };
}

function clonarPedido(pedido) {
  return {
    cliente: pedido.cliente,
    total: pedido.total,
    entrega: clonarEntrega(pedido.entrega)
  };
}

let pedidoOriginal = {
  cliente: "Ana",
  total: 30000,
  entrega: { barrio: "Centro", hora: "7:00 pm" }
};

let pedidoCopia = clonarPedido(pedidoOriginal);

pedidoCopia.entrega.barrio = "La Playa";

console.log("Barrio del original:", pedidoOriginal.entrega.barrio);
console.log("Barrio de la copia:", pedidoCopia.entrega.barrio);
