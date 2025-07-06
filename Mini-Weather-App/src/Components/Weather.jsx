import Weather_form from "./Weather_form.jsx";
import Weather_data from "./Weather_data.jsx"
import { useState } from "react";

export default function Weather(){
    let [weather,setWeather]=useState({
            temperature:"",
            description:"",
            windspeed:"",
            humidity:"",
            pressure:"",
            city:"",
        })

    function UpdateInfo(data){
        setWeather(data);
    }

    return(
        <div>
            <h2>Weather App</h2>
            <Weather_form UpdateInfo={UpdateInfo}/>
            <Weather_data weather={weather}/>
        </div>
    )
}