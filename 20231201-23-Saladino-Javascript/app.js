// Ejercicio 1
function primerEjercicio() {
  let uno = 1;
  let dos = uno;
  uno = 3;
  console.log(dos);
}
// primerEjercicio();

// Ejercicio 2
function segundoEjercicio() {
  let bienvenida = "Hola! Bienvenido a nuestro sitio";
  alert(bienvenida);
  let nombre = prompt("Ingresa tu nombre:");
  let edad = prompt("Ingresa tu edad:");
  console.log(`Tu edad es ${edad}`);
  alert(`Te llamas ${nombre} y tienes ${edad}`);
}
// segundoEjercicio()

// Ejercicio 4
function cuartoEjercicio() {
  let mensaje = prompt("Ingrese un texto breve:");
  alert(`La cantidad de caracteres de '${mensaje}' es ${mensaje.length}`);
}
// cuartoEjercicio()

// Ejercicio 5
function quintoEjercicio() {
  let edadCalculable = prompt("Ingrese su edad para saber cuantos dias vivio:");
  alert(`La cantidad de dias vividos es ${edadCalculable * 365}`);
}
// quintoEjercicio()

// Ejercicio 6
function sextoEjercicio() {
  alert("A continuacion ingrese dos numeros para realizar una suma algebraica");
  let num1 = prompt("Ingrese el primer numero:");
  let num2 = prompt("Ingrese el segundo numero:");
  let resultado = parseInt(num1) + parseInt(num2);
  alert("El resultado es: " + resultado);
}
// sextoEjercicio()

// Ejercicio 7
function septimoEjercicio() {
  let edadActual = 19;
  let edadMaxima = 95;
  let snackFav = "Doritos";
  let snackDia = 2;
  let snackTotalVida = (edadMaxima - edadActual) * 365 * snackDia;
  alert(
    `Necesitaras ${snackTotalVida} snacks para que te alcancen hsata los ${edadMaxima} años`
  );
  let precioSnack = 200.99;
  let totalGastoVida = snackTotalVida * precioSnack;
  alert(
    `Gastaras ${totalGastoVida.toFixed(
      2
    )} en snacks el resto de tu vida (si no hay inflacion)`
  );
}
// septimoEjercicio()

// Ejercicio Literals
function literalsEjercicio() {
  let precio = prompt("Ingrese el precio del articulo que llevara:");
  let cant = prompt("Ingrese la cantidad que llevara:");
  alert(`Deberas abonar ${(parseFloat(precio) * parseInt(cant)).toFixed(2)}`);
}
// literalsEjercicio()

// Ejercicios condicionales
function ejerciciosIf() {
  true ? console.log("Se ejecuta siempre") : console.log("");
  false ? console.log("No se vera nunca") : console.log("");
  let estado = prompt("Contanos como te sentis");
  estado.toLowerCase;
  estado == "triste"
    ? console.log("No estes triste! Ya van a venir cosas buenas")
    : "";
  let num = parseInt(prompt("Ingresa un numero del 1 al 10"));
  num == 3 ? console.log("") : console.log("Es el numero incorrecto!");
  let pass = prompt("Ingrese la clave correcta:");
  pass == "dirigemeGoogle" ? (window.location = "http://www.google.com") : "";
}
// ejerciciosIf()

function parImpar() {
  let number = parseInt(prompt("Ingresa un numero a evaluar:"));
  if (number % 2 == 0) {
    console.log("El numero es par");
  } else {
    console.log("El numero es impar");
  }
}
// parImpar()

function agregaCaminos() {
  let edad = prompt("Ingrese su edad.");
  if (edad < 0) {
    console.log('Error, su edad no es valida');
  } else if (edad = 21) {
    console.log('Felicitaciones, eres mayor');
  } else if (edad%2 != 0) {
    console.log('¿Sabías que tu edad es impar?');
  }
}
// agregaCaminos();

function numeroSecreto() {
    let numeroSecreto = 7;
    let numeroIngresado = parseInt(prompt('Ingrese un numero:'));
    if(numeroIngresado == numeroSecreto) {
        console.log('Acertaste el numero!');
    }
    else {
        numeroIngresado > numeroSecreto ? console.log('El numero que ingresaste es incorrecto, debe ser menor') : console.log('El numero que ingresaste es incorrecto, debe ser mayor');
    }
}
// numeroSecreto()

function jubilacion() {
    let edad = parseInt(prompt('Ingrese su edad:'));
    let sexo = prompt('Indique su sexo (hombre - mujer)');
    if ((edad >= 60 && sexo.toLowerCase == 'mujer') || (edad >= 65 && sexo.toLowerCase == 'hombre')) {
        console.log('Puedes jubilarte!');
    } else {
        console.log('Aun no puedes jubilarte :(');
    }
}
// jubilacion()