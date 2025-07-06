import Weather_form from "./Weather_form.jsx";
import Weather_data from "./Weather_data.jsx"
import { useState } from "react";
import "./Weather.css";

export default function Weather(){
    let [weather,setWeather]=useState({
            temperature:"27.36",
            description:"overcast clouds",
            windspeed:"10.27",
            humidity:"85",
            pressure:"1003",
            city:"mumbai",    
        })

    function UpdateInfo(data){
        setWeather(data);
    }

    return(
        <div>
            <h1>Weather App</h1>
            <div className="display_box">
                <Weather_form UpdateInfo={UpdateInfo}/>
                <Weather_data weather={weather}/>
            </div>
        </div>
    )
}