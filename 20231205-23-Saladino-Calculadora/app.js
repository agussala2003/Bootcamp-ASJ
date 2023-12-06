// Declaracion de variables

const btn0 = document.getElementById('btn0');
const btn1 = document.getElementById('btn1');
const btn2 = document.getElementById('btn2');
const btn3 = document.getElementById('btn3');
const btn4 = document.getElementById('btn4');
const btn5 = document.getElementById('btn5');
const btn6 = document.getElementById('btn6');
const btn7 = document.getElementById('btn7');
const btn8 = document.getElementById('btn8');
const btn9 = document.getElementById('btn9');
const reset = document.getElementById('reset');
const sumar = document.getElementById('sumar');
const dividir = document.getElementById('dividir');
const multiplicar = document.getElementById('multiplicar');
const restar = document.getElementById('restar');
const igual = document.getElementById('igual');
const result = document.getElementById('result');
const historialCT = document.getElementById('historialCT');
const btnHist = document.getElementById('btnHist');
let auxNumeros = true;
let auxOperacion = true;
let auxHistorial = true;
let num1 = 0;
let num2 = 0;
let numOp = 0;

// Agrupacion de los botones
const arrNumbers = [btn0,btn1,btn2,btn3,btn4,btn5,btn6,btn7,btn8,btn9];
const arrOperacines = [sumar,restar,dividir,multiplicar];

// Eventos para los numeros
arrNumbers.forEach(item => item.addEventListener("click",()=>{
    if (auxNumeros && item.value != 0) {
        result.innerText = item.value
        auxNumeros = false;
    } else if (!auxNumeros) {
        result.innerText += item.value
    }
    //console.log(item.value)
}))

// Eventos para las operaciones
arrOperacines.forEach(item => item.addEventListener("click",()=>{
    if (auxOperacion && !auxNumeros) {
        auxOperacion = false;
        auxNumeros = true;
        num1 = parseInt(result.innerText);
        result.innerText = 0;
        numOp = item.value;
    }
    else {
        alert('Solo pueden realizarse operaciones entre dos numeros')
    }
}))

const inicializar = () => {
    auxNumeros = true;
    auxOperacion = true;
    num1 = 0;
    num2 = 0;
    numOp = 0;
    result.innerText = 0;
}

// Eventos para el igual
igual.addEventListener("click",() => {
    if(!auxOperacion && numOp == 1) {
        num2 = parseInt(result.innerText);
        result.innerText = num1 + num2;
        auxOperacion = true;
        historial(num1,num2,parseInt(result.innerText),numOp)
    } else if (!auxOperacion && numOp == 2) {
        num2 = parseInt(result.innerText);
        result.innerText = num1 - num2;
        auxOperacion = true;
        historial(num1,num2,parseInt(result.innerText),numOp)
    } else if (!auxOperacion && numOp == 3) {
        num2 = parseInt(result.innerText);
        if(num2!=0) {
            result.innerText = num1 / num2;
            auxOperacion = true;
            historial(num1,num2,parseInt(result.innerText),numOp)
        } else {
            alert('Como que queres dividir por 0?????? Empeza de nuevo');
            inicializar();
        }
    } else if (!auxOperacion && numOp == 4) {
        num2 = parseInt(result.innerText);
        result.innerText = num1 * num2;
        auxOperacion = true;
        historial(num1,num2,parseInt(result.innerText),numOp)
    } else {
        alert('Debes seleccionar una operacion')
    }
})

// Evento para resetear
reset.addEventListener("click",()=>{
    inicializar();
})

btnHist.addEventListener("click", () => historialCT.className = "col-12");

const historial = (num1,num2,result,numOp) => {
    let signOp = '';
    switch (parseInt(numOp)) {
        case 1:
            console.log('entre')
            signOp = "+"
            break;
        case 2:
            signOp = "-"
            break;
        case 3:
            signOp = "/"
            break
        case 4:
            signOp = "*"
            break
    }
    if(auxHistorial) {
        console.log('asas')
        historialCT.innerHTML = `<div class="row">
        <div class="col-12">
            <p class="text-center">${num1} ${signOp} ${num2} = ${result}</p>
        </div>
    </div>`;
        auxHistorial = false;
    } else {
        historialCT.innerHTML += `<div class="row">
        <div class="col-12">
            <p class="text-center">${num1} ${signOp} ${num2} = ${result}</p>
        </div>
    </div>`;
    }
}