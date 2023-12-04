// FizzBuzz
// En este ejercicio deberás escribir un programa que imprima en la consola los números del 1 al 100, 
// teniendo en cuenta estos criterios:

// Si el número es múltiplo de 3, deberá imprimir "Fizz" en vez del número.
// Si es múltiplo de 5, deberá imprimir "Buzz".
// Si es múltiplo de 3 y de 5 (a la misma vez), deberá imprimir "FizzBuzz".
let num = 1;
do {
    if(num%3 == 0 && num%5 == 0) {
        console.log(`${num} FizzBuzz`);
    }
    else if(num%3 == 0) {
        console.log(`${num} Fizz`);
    }
    else if(num%5 == 0) {
        console.log(`${num} Buzz`);
    }
    num++;
} while (num<101);

// simular, un bar con una mesa, el cliente puede elegir productos de la carta. Puede pedir la cuenta, el total, puede elegir dejar propina, el mozo puede contar un chiste, en pesos, puede no pedir nada

alert(`Hola! Como estas, aqui te saluda tu mozo asignado!
A continuacion te muestro tus opciones`);
let subtotal = 0;
let total = 0;
let numCliente;
let numProd;
let numInteraccion;
let numCuenta;
do {
    numCliente = parseInt(prompt(`Ingrese un numero segun la opcion que desee ejecutar (se retira con 0):
    1 - Leer la carta
    2 - Interactuar con el mozo
    3 - Pedir la cuenta`));
    switch (numCliente) {
        case 0:
            break;
        case 1:
            do {
                numProd =  parseInt(prompt(`Ingrese un numero segun el producto que desee consumir (deja de pedir ingresando 0) :
                Comidas
                1 - Tostado Jamon y Queso
                2 - Sandwich de milanesa completo
                3 - Ensalada completa
                Bebidas
                4 - Cerveza
                5 - Gaseosa
                6 - Agua`));
                switch (numProd) {
                    case 0:
                        alert('Esperamos que lo que hayas ordenado este sabroso!')
                        break;
                    case 1:
                        subtotal += 999.99;
                        break;
                    case 2:
                        subtotal += 1999.99;
                        break;
                    case 3:
                        subtotal += 799.99;
                        break;
                    case 4:
                        subtotal += 599.99;
                        break;
                    case 5:
                        subtotal += 599.99;
                        break;
                    case 6:
                        subtotal += 499.99;
                        break;
                    default:
                        alert('El producto ingresado no existe');
                        break;
                }
            } while (numProd != 0);
            break;
        case 2:
            do {
                numInteraccion =  parseInt(prompt(`Ingrese un para interactuar con el mozo (deja de interactuar ingresando 0):
                1 - El mozo cuenta un chiste
                2 - El mozo te dice el clima`));
                if(numInteraccion == 1) {
                    alert(`A Juanito le dice la maestra: Juanito, ¿qué harías si te estuvieses ahogando en la piscina? Juanito le responde: Me pondría a llorar mucho para desahogarme.`);
                }
                else if (numInteraccion == 2) {
                    alert(`El cielo esta nublado y hace un poco de frio, abrigate.`);
                }
                else if (numInteraccion != 0) alert('No existe una interaccion con ese numero');
            } while (numInteraccion != 0);
            break;
        case 3:
            numCuenta = parseInt(prompt(`Acabas de pedir la cuenta, deseas dejar propina? Equivale al 10% de lo que has consumido
            1 - SI
            2 - NO`));
            numCuenta == 1 ? total = subtotal * 1.10 : total = subtotal;
            numCliente = 0;
            break;
        default:
            alert('Ingresa una opcion valida');
            break;
    }
    
} while (numCliente != 0);
if(total == subtotal && subtotal != 0) {
    alert(`Debes abonar ${total.toFixed(2)}`);
    alert('Hasta pronto! Podrias haber dejado propina, rata');
} else if (subtotal != 0) {
    alert(`Debes abonar ${total.toFixed(2)}`);
    alert('Hasta pronto! Nos vemos la proxima');
}
else if (subtotal == 0) {
    alert('Hasta pronto! Nos vemos la proxima');
}