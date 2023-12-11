let colors = [];
function randomColor () {
    let redRandom = Math.round((Math.random() * 255))
    let greenRandom = Math.round((Math.random() * 255))
    let blueRandom = Math.round((Math.random() * 255))
    const list = {
        Red:redRandom,
        Green:greenRandom,
        Blue:blueRandom
    }
    return list;
}
function generateRandomColor (num) {
    for (let i = 0; i < num; i++) {
        colors.push(randomColor())
    }
}
function pickedColor (num) {
    return Math.round((Math.random() * (num - 1)));
}
function inicializarSquare () {
    for (let i = 0; i < 6; i++) {        
        colorsContainer[i].style.background = "#232323";
    }
}
function validacion (colors,correctColor) {
    for (let i = 0; i < colors.length; i++) {
        colorsContainer[i].style.background = `rgb(${colors[i].Red},${colors[i].Green},${colors[i].Blue})`
        colorsContainer[i].addEventListener("click", () => {
            if (colorsContainer[i].style.background == colorsContainer[correctColor].style.background) {
                for (let j = 0; j < colors.length; j++) {
                    colorsContainer[j].style.background = colorsContainer[correctColor].style.background;
                }
                spanMessage.innerText = "¡Correcto!";
                h1.style.background = colorsContainer[correctColor].style.background;
                setTimeout(()=>{
                    window.location.reload();
                },2000)
            }
            else {
                colorsContainer[i].style.background = "#232323";
                spanMessage.innerText = "Intentalo Nuevamente";
            }
        })
    }
}
const colorsContainer = document.querySelectorAll(".square");
const colorDisplay = document.getElementById("colorDisplay");
const spanMessage = document.getElementById("message");
const h1 = document.getElementById("h1");
const buttonHard = document.getElementById("hard")
const buttonEasy = document.getElementById("easy")

buttonHard.addEventListener("click" , () => {
    buttonHard.className = "selected"
    buttonEasy.className = ""
    colors = [];
    inicializarSquare();
    generateRandomColor(6);
    correctColor = pickedColor(6);
    validacion(colors,correctColor);
    colorDisplay.innerHTML = `Rgb(${colors[correctColor].Red},${colors[correctColor].Green},${colors[correctColor].Blue})`
})

buttonEasy.addEventListener("click" , () => {
    buttonHard.className = ""
    buttonEasy.className = "selected"
    colors = [];
    inicializarSquare();
    generateRandomColor(3);
    correctColor = pickedColor(3);
    validacion(colors,correctColor);
    colorDisplay.innerHTML = `Rgb(${colors[correctColor].Red},${colors[correctColor].Green},${colors[correctColor].Blue})`
})