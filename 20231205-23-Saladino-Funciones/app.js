let txtOpciones = `Ingrese un numero segun la opcion que desee ejecutar (se retira con 0):
1 - Leer la carta
2 - Interactuar con el mozo
3 - Pedir la cuenta`
let txtComidas = `Ingrese un numero segun el producto que desee consumir (deja de pedir ingresando 0) :
Comidas
1 - Tostado Jamon y Queso - $999.99
2 - Sandwich de milanesa completo - $1999.99
3 - Ensalada completa - $799.99
Bebidas
4 - Cerveza - $599.99
5 - Gaseosa - $599.99
6 - Agua - $499.99`
let txtMozo = `Ingrese un para interactuar con el mozo (deja de interactuar ingresando 0):
1 - El mozo cuenta un chiste
2 - El mozo te dice el clima`
let txtCuenta = `Acabas de pedir la cuenta, deseas dejar propina? Equivale al 10% de lo que has consumido
1 - SI
2 - NO`
let chiste = `A Juanito le dice la maestra: Juanito, ¿qué harías si te estuvieses ahogando en la piscina? Juanito le responde: Me pondría a llorar mucho para desahogarme.`
let clima = `El cielo esta nublado y hace un poco de frio, abrigate.`
let subtotal = 0;
let total = 0;
let numCliente;
let numProd;
let numInteraccion;
let numCuenta;
function valdacionDespedida (total,subtotal) {
    let dinero = (total) => alert(`Debes abonar $${total.toFixed(2)}`);
    if(total == subtotal && subtotal != 0) {
        dinero(total);
        alert('Hasta pronto! Podrias haber dejado propina, rata');
    } else if (subtotal != 0) {
        dinero(total)
        alert('Hasta pronto! Nos vemos la proxima');
    }
    else if (subtotal == 0) {
        alert('Hasta pronto! Nos vemos la proxima');
    }
}
function pedirComida () {
    let subtotal = 0;
    do {
        numProd = parseInt(prompt(txtComidas));
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
    return subtotal;
}
function interactuarMozo (numInteraccion) {
    if(numInteraccion == 1) {
        alert(chiste);
    }
    else if (numInteraccion == 2) {
        alert(clima);
    }
    else if (numInteraccion != 0) alert('No existe una interaccion con ese numero');
}

//Programa modularizado
alert(`Hola! Como estas, aqui te saluda tu mozo asignado!
A continuacion te muestro tus opciones`);
do {
    numCliente = parseInt(prompt(txtOpciones));
    switch (numCliente) {
        case 0:
            break;
        case 1:
            subtotal += pedirComida();
            break;
        case 2:
            do {
                numInteraccion =  parseInt(prompt(txtMozo));
                interactuarMozo(numInteraccion);
            } while (numInteraccion != 0);
            break;
        case 3:
            numCuenta = parseInt(prompt(txtCuenta));
            numCuenta == 1 ? total = subtotal * 1.10 : total = subtotal;
            numCliente = 0;
            break;
        default:
            alert('Ingresa una opcion valida');
            break;
    }
    
} while (numCliente != 0);

valdacionDespedida(total,subtotal);