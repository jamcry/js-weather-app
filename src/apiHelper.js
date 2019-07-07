async function setCityInfo(city, weatherDiv) {
  const weatherData = await getCityInfo(city);
  const location = weatherDiv.querySelector('#location');
  const weather = weatherDiv.querySelector('#weather');
  const humidity = weatherDiv.querySelector('#humidity');
  if (weatherData.cityFound) {
    location.textContent = `${weatherData.city}, ${weatherData.country}`;
    weather.textContent = `${weatherData.weather.temp} C`;
    humidity.textContent = `Humidity: ${weatherData.weather.humidity}%`;
  } else {
    location.textContent = "CITY NOT FOUND!";
  }
  
}

async function getCityInfo(city) {
  const API_KEY = '60893133019f8947f3001b83a0d2b23d';
  const units = 'metric';
  const targetURL = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=${units}&appid=${API_KEY}`;
  let response = await fetch(targetURL);
  let weatherData = await response.json();
  if (weatherData.cod === '404') {
    return { cityFound: false }
  }
  return {
    cityFound: true,
    city: weatherData.name,
    country: weatherData.sys.country,
    coord: {
      lon: weatherData.coord.lon,
      lat: weatherData.coord.lat
    },
    weather: {
      status: weatherData.weather.main,
      description: weatherData.weather.description,
      temp: weatherData.main.temp,
      humidity: weatherData.main.humidity,
      minTemp: weatherData.main.temp_min,
      maxTemp: weatherData.main.temp_max,
      windSpeed: weatherData.wind.speed
    }
  }
}

export default setCityInfo;