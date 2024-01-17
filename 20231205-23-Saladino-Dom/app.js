let btn = document.getElementById('btn');
let inputNom = document.getElementById('nom');
let inputApe = document.getElementById('ap');
let nombre = document.querySelector('body .nom');
let apellido = document.querySelector('body .app');

btn.addEventListener("click",() => {
    nombre.innerText = inputNom.value;
    apellido.innerText = inputApe.value;
})