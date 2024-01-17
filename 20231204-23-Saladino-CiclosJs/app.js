// let num = parseInt(prompt("Ingrese un numero a validar:"))
// let n = num%2
// switch (n) {
//     case 0:
//         alert('El numero ingresado es par');
//         break;
//     default:
//         alert('El numero ingresado es impar');
//         break;
// }

// let palabra = prompt('Ingrese una palabra').toLowerCase()

// switch (palabra) {
//     case 'casa':
//         alert('house')
//         break;
//     case 'perro':
//         alert('dog')
//         break;
//     case 'pelota':
//         alert('ball')
//         break;
//     case 'arbol':
//         alert('tree')
//         break;
//     case 'genio':
//         alert('genius')
//         break;
//     default:
//         alert('la palabra ingresada es incorrecta')
//         break;
// }

// let valoracion = prompt('Ingrese una valoracion de la palabra').toLowerCase();

// switch (valoracion) {
//     case 'muy mala':
//         alert('Lo sentimos, trabajaremos por mejorar las proximas ediciones')
//         break;
//     case 'mala':
//         alert('Que pena! Esperamos que la proxima te guste mas!')
//         break;
//     case 'mediocre':
//         alert('Gracias por tu opinion, trabajaremos por mejorar')
//         break;
//     case 'buena':
//         alert('Nos alegramos de que te haya gustado, te esperamos la proxima')
//         break;
//     case 'muy buena':
//         alert('Sabiamos que eras un gran fan de esta saga')
//         break;
//     default:
//         alert('Ingresa un valor valido')
//         break;
// }

// let numIng = parseInt(prompt('Ingrese el numero que quiere hacer la sumatoria'));
// let aux = numIng
// let total = 0;
// while(numIng>0) {
//     total += numIng;
//     numIng--;
//     console.log(total);
// }
// let prom = total/aux;
// alert(`El promedio es ${prom}`)2

// let numIng2 = parseInt(prompt('Ingrese un numero entero (corta ingresando un negativo):'));
// let cont = 0;
// while(numIng2 >= 0) {
//     numIng2 > 0 ? cont++ : '';
//     numIng2 = parseInt(prompt('Ingrese un numero entero (corta ingresando un negativo):'));
// }
// alert(`Ingresaste ${cont} numeros positivos`)