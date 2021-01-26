import React from "react";
import FormattedDate from "./FormattedDate";

export default function Weatherinfo(props) {
    return (
        <div className = "WeatherInfo">
<div class="weekly">        
       <img id="icon" alt ="weather icon"src={props.data.iconUrl}/>
       <h3 className="currentTime">
         <FormattedDate date={props.data.date}/>
        </h3>
       <div>
        <h1 id="currentWeather">{props.data.temperature}°</h1>
        <span class="units"><a href="/" id="faren">F</a>|<a href="/" id="celcius">C</a></span>
        
       </div>
       <h6 id="description">{props.data.description}
       <br />
       wind speed: {props.data.wind} mph
       <br />
       humidity: {props.data.humidity}%</h6>
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
    );

};