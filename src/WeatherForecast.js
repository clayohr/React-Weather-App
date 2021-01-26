import React, { useState } from "react";
import axios from "axios";
import WeeklyForecast from "./WeeklyForecast";

export default function WeatherForecast(props) {

    const [loaded, setLoaded] = useState(false);
    const [forecast, setForecast] = useState(null);

    function handleForecast(response) {
        setForecast(response.data);
        setLoaded(true);
    }
    if (loaded && props.city === forecast.city.name) {
        console.log(forecast);
        return ( 
        <div className="weathergrid" id="weatherforecast">
        <WeeklyForecast data={forecast.list[6]}/>
        <WeeklyForecast data={forecast.list[14]}/>
        <WeeklyForecast data={forecast.list[22]}/>
        <WeeklyForecast data={forecast.list[30]}/>
        <WeeklyForecast data={forecast.list[38]}/>
    
    </div>
    );
    } else {
    let url = `https://api.openweathermap.org/data/2.5/forecast?q=${props.city}&appid=331dad2e3eb8553f01516bd2ea4a009e&units=imperial`
    axios.get(url).then(handleForecast);
    return "loading";
    }

    
};