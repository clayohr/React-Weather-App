import "./index.css";
import React, { useState } from "react";
import axios from "axios";
import Weatherinfo from "./Weatherinfo";
import WeatherForecast from "./WeatherForecast"

export default function App(props) {
  const [weatherData, setWeatherData] = useState({ ready: false });
  const [city, setCity] = useState(props.defaultCity)
  function handleResponse(response) {
    console.log(response);
    setWeatherData({
      ready: true,
      temperature: Math.round(response.data.main.temp),
      wind: Math.round(response.data.wind.speed),
      city: response.data.name,
      iconUrl: `http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`,
      description: response.data.weather[0].description,
      humidity: response.data.main.humidity,
      date: new Date(response.data.dt * 1000),
    })
    
  };

  function search() {
    const apiKey = '331dad2e3eb8553f01516bd2ea4a009e';
    let apiUrl = 
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=imperial`;
    axios.get(apiUrl).then(handleResponse);
  
  };

  function handleSubmit(event) {
    event.preventDefault();
    search(city);
  };

  function handleCityChange(event) {
    setCity(event.target.value)
  };

  if (weatherData.ready) {
    return (
    <div className="App">
      <div className="weatherapp">
    <div className="city">
   <h1 id="location">{weatherData.city}</h1>
   <form id="search-box" onSubmit={handleSubmit}>
   <input type="search" id="city-search" placeholder="Search for your city" onChange={handleCityChange}/>
   <input type="submit" value="go" /> 
  </form>
  </div>
  <div className="weekly">
   <Weatherinfo data={weatherData} />
   <WeatherForecast city={weatherData.city} />
   </div>
   </div>
   </div>
   
  );
} else {
  search();
  return "Loading...";
};
}
