import './style.css';
import setCityInfo from './apiHelper';
import './style.css'

class UI {
  constructor() {
    this.cityForm = document.querySelector('#city-search');
    this.cityInput = document.querySelector('#city-name');
    this.btnSearch = document.querySelector('#btn-city-search');
    this.weatherDiv = document.querySelector('.weather-info');
    this.cityForm.addEventListener('submit', (e) => {
      e.preventDefault();
      setCityInfo(this.cityInput.value, this.weatherDiv);
    });
  }
}

const ui = new UI();