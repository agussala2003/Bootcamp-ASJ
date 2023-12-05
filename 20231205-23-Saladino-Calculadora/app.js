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
let auxNumeros = true;
let auxOperacion = true;
let num1 = 0;
let num2 = 0;
let numOp = 0;
const arrNumbers = [btn0,btn1,btn2,btn3,btn4,btn5,btn6,btn7,btn8,btn9];
arrNumbers.forEach(item => item.addEventListener("click",()=>{
    if (auxNumeros && item.value != 0) {
        result.innerText = item.value
        auxNumeros = false;
    } else if (!auxNumeros) {
        result.innerText += item.value
    }
    console.log(item.value)
}))
sumar.addEventListener("click",() => {
    if (auxOperacion && !auxNumeros) {
        auxOperacion = false;
        auxNumeros = true;
        num1 = parseInt(result.innerText);
        result.innerText = 0;
        numOp = 1;
    }
    else {
        console.log('Solo pueden realizarse operaciones entre dos numeros')
    }
})
restar.addEventListener("click",() => {
    if (auxOperacion && !auxNumeros) {
        auxOperacion = false;
        auxNumeros = true;
        num1 = parseInt(result.innerText);
        result.innerText = 0;
        numOp = 2;
    }
    else {
        console.log('Solo pueden realizarse operaciones entre dos numeros')
    }
})
dividir.addEventListener("click",() => {
    if (auxOperacion && !auxNumeros) {
        auxOperacion = false;
        auxNumeros = true;
        num1 = parseInt(result.innerText);
        result.innerText = 0;
        numOp = 3;
    }
    else {
        console.log('Solo pueden realizarse operaciones entre dos numeros')
    }
})
multiplicar.addEventListener("click",() => {
    if (auxOperacion && !auxNumeros) {
        auxOperacion = false;
        auxNumeros = true;
        num1 = parseInt(result.innerText);
        result.innerText = 0;
        numOp = 4;
    }
    else {
        console.log('Solo pueden realizarse operaciones entre dos numeros')
    }
})
igual.addEventListener("click",() => {
    if(!auxOperacion && numOp == 1) {
        num2 = parseInt(result.innerText);
        result.innerText = num1 + num2;
        auxOperacion = true;
    } else if (!auxOperacion && numOp == 2) {
        num2 = parseInt(result.innerText);
        result.innerText = num1 - num2;
        auxOperacion = true;
    } else if (!auxOperacion && numOp == 3) {
        if(num2!=0) {
            num2 = parseInt(result.innerText);
            result.innerText = num1 / num2;
            auxOperacion = true;
        } else {
            console.log('Como que queres dividir por 0??????');
            auxNumeros = true;
            auxOperacion = true;
            num1 = 0;
            num2 = 0;
            numOp = 0;
            result.innerText = 0;
        }
    } else if (!auxOperacion && numOp == 4) {
        num2 = parseInt(result.innerText);
        result.innerText = num1 * num2;
        auxOperacion = true;
    } else {
        console.log('Debese seleccionar una operacion')
    }
})
reset.addEventListener("click",()=>{
    auxNumeros = true;
    auxOperacion = true;
    num1 = 0;
    num2 = 0;
    numOp = 0;
    result.innerText = 0;
})