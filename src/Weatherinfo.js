import React from "react";
import FormattedDate from "./FormattedDate";
import WeatherTemp from "./WeatherTemp";


export default function Weatherinfo(props) {
    return (
        <div className = "WeatherInfo">
                 
            <img id="icon" alt ="weather icon"src={props.data.iconUrl}/>
             <h3 className="currentTime">
             <FormattedDate date={props.data.date}/>
             </h3>
       
        
            <WeatherTemp fahrenheit={props.data.temperature}/>
        
       
             <h6 id="description">{props.data.description}
            <br />
             wind speed: {props.data.wind} mph
             <br />
             humidity: {props.data.humidity}%</h6>
             
             
          </div>
        
    );

};