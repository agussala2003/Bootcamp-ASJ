// const txtIng = document.getElementById('txtIng');
// const txtMost = document.getElementById('txtMost');
// const txtShow = document.getElementById('txtShow') ;
// const arrConso = ['b','c','d','f','g','h','j','k','l','m','n','o','p','q','r','s','t','v','x','y','z'," "];
// const arrVocal = ['a','e','i','o','u'];
// let arrPal = []
// txtIng.addEventListener("keyup", () => {
//     arrPal = txtIng.value.split("")
//     console.log(arrPal)
// })
// txtShow.addEventListener("click",()=> {
//     arrPal.forEach(i => {
//         if(arrVocal.includes(i)) {
//             txtMost.innerText += '_';
//         } else if (i == ' ') {
//             txtMost.innerText += " "
//         } else {
//             txtMost.innerText += i
//         }
//     });
// })

const txtIng = document.getElementById('txtIng');
const txtMost = document.getElementById('txtMost');
let palabra = ""
txtIng.addEventListener("keyup", () => {
    arrPal = txtIng.value.replace(/[aeiouAEIOU]/ig,"_");
    txtMost.innerHTML = arrPal
})