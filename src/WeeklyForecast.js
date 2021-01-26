import React from "react";

export default function WeeklyForecast(props) {
    function weekday() {
        let date = new Date(props.data.dt * 1000);
        let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
        let day = days[date.getDay()];

        return day;
    }
    function temperature() {
        let temperature = Math.round(props.data.main.temp);
        return `${temperature}°F`;
    };

    return (
    <div>
        <div className="row" >
            <div className="col">
                    {weekday()}
            </div>
            <div className="col">
                    <img id="icony" alt ="weather icon" src={`http://openweathermap.org/img/wn/${props.data.weather[0].icon}@2x.png`} />
            </div>
            <div className="col">
                    {temperature()}
            </div>
            
        </div>
    </div>
    )
};