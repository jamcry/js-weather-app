async function getCityInfo(city) {
  const API_KEY = 'API_KEY_HERE';
  const targetURL = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${API_KEY}`;
  let response = await fetch(targetURL);
  let weatherData = await response.json();

}