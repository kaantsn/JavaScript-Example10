function getWeather() {
    var cityInput = document.getElementById("cityInput");
    var city = cityInput.value.toLowerCase();

    var apiKey = "YOUR_API_KEY";

    var xhr = new XMLHttpRequest();
    var url = "https://api.openweathermap.org/data/2.5/weather?q=" + city + "&appid=" + apiKey;

    xhr.onreadystatechange = function() {
        if (xhr.readyState === XMLHttpRequest.DONE) {
            if (xhr.status === 200) {
                var response = JSON.parse(xhr.responseText);
                showWeather(response);
            } else {
                alert("Unable to fetch weather data. Please enter a valid city name.");
            }
        }
    };

    xhr.open("GET", url, true);
    xhr.send();
}

function showWeather(weather) {
    var weatherInfo = document.getElementById("weatherInfo");
    weatherInfo.innerHTML = "";

    var city = weather.name;
    var temperature = weather.main.temp;
    var description = weather.weather[0].description;

    var cityElement = document.createElement("h2");
    cityElement.textContent = city;

    var temperatureElement = document.createElement("p");
    temperatureElement.innerHTML = "Temperature: " + (temperature - 273.15).toFixed(1) + "°C";

    var descriptionElement = document.createElement("p");
    descriptionElement.textContent = "Condition: " + description;

    weatherInfo.appendChild(cityElement);
    weatherInfo.appendChild(temperatureElement);
    weatherInfo.appendChild(descriptionElement);
}
