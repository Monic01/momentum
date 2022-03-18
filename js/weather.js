const API_KEY = "66c5b3972aff52a69374b02bc8868353";
const weather = document.querySelector("#weather span:first-child");
const city = document.querySelector("#weather span:last-child");

function successGeo(position) {
  const lat = position.coords.latitude;
  const lon = position.coords.longitude;
  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;

  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      city.innerText = data.name;
      weather.innerText = `${data.weather[0].main} / ${parseInt(
        data.main.temp
      )} ℃`;
    });
}

function errorGeo() {
  alert("Can't find where you are, No weather option");
}

navigator.geolocation.getCurrentPosition(successGeo, errorGeo);
