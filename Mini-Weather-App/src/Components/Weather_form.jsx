import '@fontsource/roboto/700.css';
import { useState } from 'react';
import TextField from '@mui/material/TextField';
import SearchIcon from '@mui/icons-material/Search';

export default function Weather({UpdateInfo}){
    let url="https://api.openweathermap.org/data/2.5/weather?appid=c1c7c44f70877aed6bd93fcc444b1e43&units=metric&q=";
    let [city,setCity]=useState("");
    let [weather,setWeather]=useState({
        temperature:"",
        description:"",
        windspeed:"",
        humidity:"",
        pressure:"",
        city:"",
    })

    async function GenerateWaether(){
        let res=await fetch(url+city);
        let data=await res.json();
        setWeather(weather=
                {...weather,
                    temperature:data.main.temp,
                    humidity:data.main.humidity,
                    windspeed:data.wind.speed,
                    city:city,
                    description:data.weather[0].description,
                    pressure:data.main.pressure
                }
            )
        console.log(weather);
        return weather;
    }

    async function ChangeWeather(event){
        event.preventDefault();
        console.log(city);
        let data =await GenerateWaether();
        UpdateInfo(data);
        setCity("");
    }

    function Handler(event){
        setCity(event.target.value)
    }

    return(
        <form onSubmit={ChangeWeather}>
            <TextField id="CityName" label="City Name" variant="outlined"  value={city} onChange={Handler}/>
            <button type="submit"><SearchIcon forhtml="CityName"/></button>
        </form>
    )
}