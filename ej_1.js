// Leer el nombre, la edad, el número de ficha y el programa de un aprendiz, y guardarlos en un
// objeto. Agregar al objeto una propiedad mayorDeEdad con true o false según la edad.
// Mostrar la ficha.
function leerAprendiz(){
  const nombre = prompt('Nombre: ');
  const edad = Number(prompt('Edad: '));
  const ficha = prompt('Número de ficha: ');
  const programa = prompt('Programa: ');
  return { nombre, edad, ficha, programa, mayorDeEdad: edad >= 18 };
}
function mostrarFicha(a){
  console.log('--- Ficha del aprendiz ---');
  console.log('Nombre: ' + a.nombre);
  console.log('Edad: ' + a.edad + ' años');
  console.log('Ficha: ' + a.ficha);
  console.log('Programa: ' + a.programa);
  console.log('Mayor de edad: ' + (a.mayorDeEdad ? 'sí' : 'no'));
}
const aprendiz = leerAprendiz();
mostrarFicha(aprendiz); 