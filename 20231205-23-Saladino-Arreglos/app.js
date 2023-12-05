const arrFibonacci = [];
function sucesionFibonacci (num) {
    let aux = 0;
    let aux2 = true;
    let tt = 0;
    if(!isNaN(num) && num > 0){
        for (let i = 0; i < num + 2; i++) {
            arrFibonacci.push(tt);
            tt += aux;
            if(aux2){
                tt = tt + 1;
                aux2 = false;
            }else {
                aux = arrFibonacci[i];
            }
        }
    } else {
        console.log('El dato ingresado no es un numero o no es un numero positivo')
    }
    console.log(arrFibonacci);
}
sucesionFibonacci(8);