// Ejercicio 2. Actualizar el perfil
// Qué practica: Corchetes con una clave guardada en variable y comprobar si una clave existe.
// Enunciado:
// El programa arranca con este objeto:
// let cliente = { nombre: "Jorge Díaz", telefono: "3001234567", barrio: "La Playa",
// ciudad: "San Gil" };
// El usuario escribe qué dato quiere cambiar y el valor nuevo. Si la clave no existe, se avisa y no
// se crea. Se repite hasta que escriba "fin". Al final se muestra el perfil.

const cliente = {
  nombre: prompt('Nombre: '),
  telefono: prompt('Teléfono: '),
  barrio: prompt('Barrio: '),
  ciudad: prompt('Ciudad: ')
};

const clave = prompt('¿Qué dato quieres cambiar? (escribe "fin" para saltar)').trim();
if (clave !== 'fin') {
  if (!(clave in cliente)) {
    console.log('El dato ' + clave + ' no existe');
  } else {
    cliente[clave] = prompt('Nuevo valor:');
    console.log('Actualizado: ' + clave + ' = ' + cliente[clave]);
  }
}

console.log('Perfil final:');
console.log('Nombre: ' + cliente.nombre);
console.log('Teléfono: ' + cliente.telefono);
console.log('Barrio: ' + cliente.barrio);
console.log('Ciudad: ' + cliente.ciudad);