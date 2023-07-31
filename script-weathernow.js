const apiKey = "ae8d12a65d6679885b1afa0e2a20c0c3";
const url = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const searchBox = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");

const weatherIcon = document.querySelector(".weather-icon");

async function checkWeather(city) {
    const response = await fetch(url + city + `&appid=${apiKey}`);

    if (response.status == 404) {
        document.querySelector(".error").style.display = "block";
        document.querySelector(".weather").style.display = "none";
    }

    else {
        var result = await response.json();
        console.log(result);
        document.querySelector(".city").innerHTML = result.name;
        document.querySelector(".temp").innerHTML = Math.round(result.main.temp) + "°C";
        document.querySelector(".humidity").innerHTML = result.main.humidity + "%";
        document.querySelector(".wind").innerHTML = result.wind.speed + " km/h";

        if (result.weather[0].main == "Clouds") {
            weatherIcon.src = "images-weathernow/clouds.png";
        }
        else if (result.weather[0].main == "Rain") {
            weatherIcon.src = "images-weathernow/rain.png";
        }
        else if (result.weather[0].main == "Clear") {
            weatherIcon.src = "images-weathernow/clear.png";
        }
        else if (result.weather[0].main == "Cloudy") {
            weatherIcon.src = "images-weathernow/cloudy.png";
        }
        else if (result.weather[0].main == "Thunderstorm") {
            weatherIcon.src = "images-weathernow/thunderstorm.png";
        }
        else if (result.weather[0].main == "Snow") {
            weatherIcon.src = "images-weathernow/snow.png";
        }
        else if (result.weather[0].main == "Drizzle") {
            weatherIcon.src = "images-weathernow/drizzle.png";
        }
        else if (result.weather[0].main == "Mist") {
            weatherIcon.src = "images-weathernow/mist.png";
        }
        else if (result.weather[0].main == "Partly Cloudy") {
            weatherIcon.src = "images-weathernow/partly-cloudy.png";
        }

        document.querySelector(".weather").style.display = "block";
        document.querySelector(".error").style.display = "none";

        searchBox.value = '';
    }
}

searchBtn.addEventListener("click", () => {
    checkWeather(searchBox.value);
});