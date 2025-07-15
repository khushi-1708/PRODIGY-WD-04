const apiKey = "YOUR_API_KEY_HERE"; // ← Replace with your OpenWeatherMap API key

function getWeather() {
  const city = document.getElementById("cityInput").value;
  const weatherResult = document.getElementById("weatherResult");

  if (!city) {
    weatherResult.innerHTML = `<p>Please enter a city name.</p>`;
    return;
  }

  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

  fetch(url)
    .then(response => {
      if (!response.ok) throw new Error("City not found");
      return response.json();
    })
    .then(data => {
      const { name, main, weather, wind } = data;
      weatherResult.innerHTML = `
        <h2>${name}</h2>
        <p><strong>Condition:</strong> ${weather[0].main}</p>
        <p><strong>Temperature:</strong> ${main.temp} °C</p>
        <p><strong>Humidity:</strong> ${main.humidity}%</p>
        <p><strong>Wind Speed:</strong> ${wind.speed} m/s</p>
      `;
    })
    .catch(error => {
      weatherResult.innerHTML = `<p>Error: ${error.message}</p>`;
    });
}
