const URL = "https://api.chucknorris.io/jokes/random";
const img = document.getElementById("img");
const chiste = document.getElementById("chiste");
const refresh = document.getElementById("refresh");
refresh.addEventListener("click", () => {
  fetch(URL)
    .then((resp) => resp.json())
    .then((json) => {
      console.log(json);
      img.src =
        "https://avatars.githubusercontent.com/u/17794049?s=280&v=4";
      chiste.innerText = json.value;
    });
});
