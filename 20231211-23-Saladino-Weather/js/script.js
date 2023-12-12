const input = document.getElementById('input');
const btnEnviar = document.getElementById('btnEnviar');
const ciudad = document.getElementById('ciudad');
const temperatura = document.getElementById('temperatura');
const wicon = document.getElementById('wicon');
const descripcion = document.getElementById('descripcion');
const container = document.querySelector('.container');

function cargarCiudad(){
    let ingresoCiudad = input.value;
    let URL = "https://api.openweathermap.org/data/2.5/weather?q=" + ingresoCiudad +"&appid=fdd533266e28101881f610f2b8f1ebe1"
    fetch(URL)
    .then((response) => response.json())
    .then((json) =>{
        console.log(json)
        ciudad.innerText = ingresoCiudad;
        temperatura.innerText = json.main.temp;
        wicon.src = `https://openweathermap.org/img/wn/${json.weather[0].icon}@2x.png`
        descripcion.innerText = json.weather[0].description;
        container.style.display = "block"
    }).catch((error) =>{
        console.error("Error en la solicitud");
    });

}

btnEnviar.addEventListener("click", cargarCiudad);