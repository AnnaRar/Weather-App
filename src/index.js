let days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday"
];
let dt = new Date();
let day = dt.getDay();
let hours = dt.getHours();
if (hours < 10) {
  hours = `0${hours}`;
}
let minutes = dt.getMinutes();
if (minutes < 10) {
  minutes = `0${minutes}`;
}
let dayName = days[dt.getDay()];

document.getElementById(
  "date-time"
).innerHTML = `${dayName} ${hours}:${minutes}`;

function weatherCondition(response) {
  document.querySelector(".city-change").innerHTML = response.data.name;
  let tempChange = Math.round(response.data.main.temp);
  document.querySelector(".tem").innerHTML = `${tempChange}°C`;
  let humidityChange = Math.round(response.data.main.humidity);
  document.querySelector(
    ".humidity"
  ).innerHTML = `Humidity: ${humidityChange}%`;
  let windChange = Math.round(response.data.wind.speed);
  document.querySelector(".wind").innerHTML = `Wind speed: ${windChange} m/s`;
  console.log(response.data);
}

function search(event) {
  event.preventDefault();
  let city = document.querySelector("#weather").value;
  let apiKey = "d4f737392e9cef5c459c68eb8371d126";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
  axios.get(apiUrl).then(weatherCondition);
}
let form = document.querySelector("#form-submit-button");
form.addEventListener("click", search);
