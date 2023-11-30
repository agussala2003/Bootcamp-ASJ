// Ejercicio 1

let numero = prompt("Ingresa un numero a evaluar:") // Try edit me
let resultado = numero%2

if(resultado == 0) {
  console.log('El numero ingresado es par')
}
else {
  console.log('El numero ingresado es impar')
}

//Ejercicio 2

let alumnos = [
    {
      nombre: "Mariano Damian",
      apellido: "Hernandez",
      notas: [8, 7, 9, 10, 6],
    },
    {
      nombre: "Ramiro",
      apellido: "Diaz",
      notas: [1, 3, 8, 2, 1],
    },
    {
      nombre: "Ana",
      apellido: "Armella",
      notas: [5, 7, 9, 4, 2],
    },
    {
      nombre: "Romina",
      apellido: "Almeda",
      notas: [10, 6, 7, 5, 9],
    },
    {
      nombre: "Denis",
      apellido: "Tolaba",
      notas: [10, 10, 9, 9, 10],
    },
    {
      nombre: "Hugo",
      apellido: "Castellano",
      notas: [2, 3, 3, 6, 1],
    },
    {
      nombre: "Analia Daiana",
      apellido: "Fonseca",
      notas: [4, 3, 4, 5, 2],
    },
    {
      nombre: "Francisco Daniel",
      apellido: "Samir",
      notas: [5, 5, 6, 4, 2],
    },
  ];

  function promedio (arrayA,estado){
      let newArrayAlumnos = []
      let promedio = 0
      for(let i = 0; i < arrayA.length; i++) {
          promedio = 0
         for(let j = 0; j < arrayA[i].notas.length; j++) {
          promedio += arrayA[i].notas[j];
         }
         promedio = promedio / arrayA[i].notas.length
         if(estado == 'aprobado' && promedio >= 6) {
          newArrayAlumnos.push(
            nombreCompleto = `${arrayA[i].nombre} ${arrayA[i].apellido}`,
            estado = 'aprobado',
            promedioFinal = promedio
          )
         }
         if(estado == 'desaprobado' && promedio < 6) {
          newArrayAlumnos.push(
            nombreCompleto = `${arrayA[i].nombre} ${arrayA[i].apellido}`,
            estado = 'desaprobado',
            promedioFinal = promedio
          )
         }
      }
      return newArrayAlumnos
  }

console.log(promedio(alumnos, "aprobado"))