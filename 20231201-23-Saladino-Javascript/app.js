// Ejercicio 1
function primerEjercicio () {
    let uno = 1;
    let dos = uno;
    uno = 3;
    console.log(dos);
}
// primerEjercicio();

// Ejercicio 2
function segundoEjercicio () {
    let bienvenida = 'Hola! Bienvenido a nuestro sitio';
    alert(bienvenida);
    let nombre = prompt("Ingresa tu nombre:");
    let edad = prompt("Ingresa tu edad:");
    console.log(`Tu edad es ${edad}`);
    alert(`Te llamas ${nombre} y tienes ${edad}`);
}
// segundoEjercicio()

// Ejercicio 4
function cuartoEjercicio () {
    let mensaje = prompt('Ingrese un texto breve:');
    alert(`La cantidad de caracteres de '${mensaje}' es ${mensaje.length}`);
}
// cuartoEjercicio()

// Ejercicio 5
function quintoEjercicio () {
    let edadCalculable = prompt('Ingrese su edad para saber cuantos dias vivio:');
    alert(`La cantidad de dias vividos es ${edadCalculable*365}`);
}
// quintoEjercicio()

// Ejercicio 6
function sextoEjercicio () {
    alert('A continuacion ingrese dos numeros para realizar una suma algebraica');
    let num1 = prompt('Ingrese el primer numero:');
    let num2 = prompt('Ingrese el segundo numero:');
    let resultado = parseInt(num1) + parseInt(num2);
    alert("El resultado es: " + resultado);
}
// sextoEjercicio()

// Ejercicio 7
function septimoEjercicio () {
    let edadActual = 19;
    let edadMaxima = 95;
    let snackFav = "Doritos";
    let snackDia = 2;
    let snackTotalVida = (edadMaxima - edadActual) * 365 * snackDia;
    alert(`Necesitaras ${snackTotalVida} snacks para que te alcancen hsata los ${edadMaxima} años`);
    let precioSnack = 200.99;
    let totalGastoVida = snackTotalVida * precioSnack;
    alert(`Gastaras ${totalGastoVida.toFixed(2)} en snacks el resto de tu vida (si no hay inflacion)`);
}
// septimoEjercicio()

// Ejercicio Literals
function literalsEjercicio () {
    let precio = prompt('Ingrese el precio del articulo que llevara:');
    let cant = prompt('Ingrese la cantidad que llevara:');
    alert(`Deberas abonar ${(parseFloat(precio) * parseInt(cant)).toFixed(2)}`)
}
// literalsEjercicio()