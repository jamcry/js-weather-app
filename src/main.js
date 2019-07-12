"use strict"
import rawCityForm from './rawCityForm';
import saveToLocalStorage from './saveToLocalStorage';
import './style.css';

const formArea = document.querySelector('#form-area');
const btnSearch = document.querySelector('#btn-city-search');
const btnChangeCity = document.querySelector('#btn-change-city');
const weatherDiv = document.querySelector('.weather-info');


if(localStorage.getItem('weatherData')) {
  const weatherData = JSON.parse(localStorage.getItem('weatherData'));
  console.log(weatherData);
  renderWeatherData(weatherData, weatherDiv);
  btnChangeCity.style.display = 'block';
  btnChangeCity.addEventListener('click', (e) => {
    e.preventDefault();
    renderCityForm(rawCityForm);
  })
} else {
  renderCityForm(rawCityForm);
}

function renderCityForm(formRaw) {
  formArea.innerHTML = formRaw;
  
  const cityForm = document.querySelector('#city-search');
  const cityInput = document.querySelector('#city-name');
  cityInput.focus();

  cityForm.addEventListener('submit', (e) => {
    e.preventDefault();
    // Tries to fetch response for given city name,
    // then renders the response data
    getCityInfo(cityInput.value)
      .then(weatherData => renderWeatherData(weatherData, weatherDiv));

  });
}

// Renders weather data in given div using weatherData object
function renderWeatherData(weatherData, weatherDiv) {
  console.log(weatherData)
  const location = weatherDiv.querySelector('#location');
  const weather = weatherDiv.querySelector('#weather');
  const humidity = weatherDiv.querySelector('#humidity');
  
  if (weatherData.cod !== '404') {
    location.textContent = `${weatherData.name}, ${weatherData.sys.country}`;
    weather.textContent = `${weatherData.main.temp} C`;
    humidity.textContent = `Humidity: ${weatherData.main.humidity}%`;
  } else {
    location.textContent = "CITY NOT FOUND!";
    weather.textContent = '';
    humidity.textContent = '';
  }
}

// Fetches the response to city, then stores and returns it
async function getCityInfo(city) {
  const API_KEY = '60893133019f8947f3001b83a0d2b23d';
  const units = 'metric';
  const targetURL = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=${units}&appid=${API_KEY}`;
  let response = await fetch(targetURL);
  let weatherData = await response.json();
  saveToLocalStorage('weatherData', weatherData);
  return weatherData;
/*   return {
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
  } */
}
