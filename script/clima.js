// INFORMACION DE LA API

let clima = {
  apiKey: "5e74f0be2e35f69fa9e9cab8882e8d29",
  fetchClima: function (ciudad) {
    fetch(
      "https://api.openweathermap.org/data/2.5/weather?q=" +
        ciudad +
        "&units=metric&appid=" +
        this.apiKey
    )
      .then((response) => {
        return response.json();
      })
      .then((data) => this.mostrarClima(data));
  },
  mostrarClima: function (data) {
    const { temp } = data.main;
    document.querySelector("#temp").innerHTML = temp + " &#8451;";
  },
};
let ciudad = document.querySelector("#ciudad");
ciudad.addEventListener("change", function () {
  clima.fetchClima(ciudad.value);
});
clima.fetchClima("buenos aires");
