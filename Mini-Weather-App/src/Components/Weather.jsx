import Weather_form from "./Weather_form.jsx";
import Weather_data from "./Weather_data.jsx"
import { useMemo, useState } from "react";
import "./Weather.css";
import { getBackgroundColor } from "./Background.js";

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

    const bgColor=useMemo(()=>getBackgroundColor(weather.temperature),[weather.temperature]);
    return(
        <div>
  
            <h1 className="heading">Weather App</h1>
            <div className="display_box" style={{background:bgColor}}>
                <Weather_form UpdateInfo={UpdateInfo}/>
                <Weather_data weather={weather}/>
            </div>
        </div>
    )
}