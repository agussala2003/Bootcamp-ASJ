const txtIng = document.getElementById('txtIng');
const txtMost = document.getElementById('txtMost');
const txtShow = document.getElementById('txtShow') ;
const arrConso = ['b','c','d','f','g','h','j','k','l','m','n','o','p','q','r','s','t','v','x','y','z'," "];
const arrVocal = ['a','e','i','o','u'];
let arrPal = []
txtIng.addEventListener("keyup", () => {
    arrPal = txtIng.value.split("")
    console.log(arrPal)
})
txtShow.addEventListener("click",()=> {
    arrPal.forEach(i => {
        if(arrVocal.includes(i)) {
            txtMost.innerHTML += '_';
        } else if (i == ' ') {
            console.log(true)
            txtMost.innerHTML += "-"
        } else {
            txtMost.innerHTML += i
        }
    });
})