import React, { useState } from "react";

export default function WeatherTemp(props) {
const [unit, setUnit] = useState(`fahrenheit`)

function convertToCelsius(event) {
    event.preventDefault();
    setUnit(`celsius`);
}

function convertToFahrenheit(event) {
    event.preventDefault();
    setUnit(`fahrenheit`);
}

if (unit === `fahrenheit`) {
return (
    <div>
    <h1 id="currentWeather">{props.fahrenheit}°</h1>
    <span className="units">
        F | <a href="/" onClick={convertToCelsius} id="celcius">C</a>
    </span>
    </div>
);
}
else {
    let celsius = (props.fahrenheit - 32) * 5/9;
    return (
        <div>
        <h1 id="currentWeather">{Math.round(celsius)}°</h1>
        <span className="units">
        <a href="/" onClick={convertToFahrenheit} id="faren">F</a> | C
        </span>
        </div>
    );
}
}