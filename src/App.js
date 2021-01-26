import "./index.css";
import React, { useState } from "react";
import axios from "axios";

export default function App() {
  const [weatherData, setWeatherData] = useState({ ready: false });
  function handleResponse(response) {
    console.log(response.data);
    setWeatherData({
      ready: true,
      temperature: Math.round(response.data.main.temp),
      wind: Math.round(response.data.wind.speed),
      name: response.data.name,
      description: response.data.weather[0].description,
      humidity: response.data.main.humidity
    })
    
  };

  if (weatherData.ready) {
    return (
    <div className="App">
      <div className="weatherapp">
    <div className="city">
   <h1 id="location">Salem, VA</h1>
   <button>
           <i id="location-selector" className="fas fa-location-arrow"></i>
   </button>
   <form id="search-box">
   <input type="search" id="city-search" placeholder="Search for your city" />
   <input type="submit" value="go" /> 
  </form>
   </div>
   <div class="weekly">        
       <img id="icon" alt ="weather icon"src="http://openweathermap.org/img/wn/03d@2x.png"/>
       <h3 className="currentTime">Sunday 10:30</h3>
       <div>
        <h1 id="currentWeather">{weatherData.temperature}°</h1>
        <span class="units"><a href="/" id="faren">F</a>|<a href="/" id="celcius">C</a></span>
        
       </div>
       <h6 id="description">{weatherData.description}
       <br />
       wind speed: {weatherData.wind} mph
       <br />
       humidity: {weatherData.humidity}%</h6>
       <br />
       <div class="weathergrid" id="weatherforecast">
       <div class="row" >
        <div class="col">
            Monday
        </div>
        <div class="col">
          <img id="icony" alt ="weather icon" src="http://openweathermap.org/img/wn/10d@2x.png" />
        </div>
        <div class="col">
            30°
        </div>
    </div>
    <div class="row">
        <div class="col">
          Tuesday
        </div>
        <div class="col">
            <img id="icony" alt ="weather icon" src="http://openweathermap.org/img/wn/03d@2x.png" />
        </div>
        <div class="col">
          28°
        </div>
    </div>
    <div class="row">
        <div class="col">
          Wednesday
        </div>
        <div class="col">
          <img id="icony" alt ="weather icon" src="http://openweathermap.org/img/wn/01d@2x.png" />
        </div>
        <div class="col">
          36°
        </div>
    </div>
    <div class="row">
        <div class="col">
          Thursday
        </div>
        <div class="col">
          <img id="icony" alt ="weather icon" src="http://openweathermap.org/img/wn/10d@2x.png" />
        </div>
        <div class="col">
          40°
        </div>
    </div>
    <div class="row">
        <div class="col">
          Friday
        </div>
        <div class="col">
        <img id="icony" alt ="weather icon" src="http://openweathermap.org/img/wn/03d@2x.png" />
        </div>
        <div class="col">
          33°
        </div>
    </div>
       </div>
   </div>
</div>
    </div>

  );
} else {
  const apiKey = '6c9b6fab8cba893fa6e820adfa010e87';
  let city = "Roanoke";
  let apiUrl = 
    `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=imperial`;
  axios.get(apiUrl).then(handleResponse);

  return "Loading...";
};
}
