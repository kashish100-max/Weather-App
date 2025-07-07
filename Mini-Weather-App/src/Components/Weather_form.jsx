import '@fontsource/roboto/700.css';
import { useState } from 'react';
import TextField from '@mui/material/TextField';
import SearchIcon from '@mui/icons-material/Search';
import "./Weather_form.css";

export default function Weather({UpdateInfo}){
    let url="https://api.openweathermap.org/data/2.5/weather?appid=c1c7c44f70877aed6bd93fcc444b1e43&units=metric&q=";
    let [city,setCity]=useState("");
    let [error,setError]=useState(false);
    let [weather,setWeather]=useState({
        temperature:"27.36",
        description:"overcast clouds",
        windspeed:"10.27",
        humidity:"85",
        pressure:"1003",
        city:"mumbai",
    })

    async function GenerateWaether(){
        try{
            let res=await fetch(url+city);
        let data=await res.json();
        if(data.cod==404){
            setError(true);
        }
        setError(false);
        setWeather(weather=
                {...weather,
                    temperature:data.main.feels_like,
                    humidity:data.main.humidity,
                    windspeed:data.wind.speed,
                    city:city,
                    description:data.weather[0].description,
                    pressure:data.main.pressure
                }
            )
        console.log(weather);
        return weather;
        } catch(error){
            console.log("wrong city name "+error);
            setError(true);
            return weather;
    }
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
            <TextField
                id="CityName" 
                label="City Name" 
                variant="outlined"  
                value={city} 
                onChange={Handler}
                InputProps={{
                    sx: {
                        borderRadius: '27px',
                        marginRight:'10px',
                        marginBottom:'5px',
                        width:'300px',
                        borderColor:"black"
                    },
            }} />

            <button type="submit" className="search"><SearchIcon forhtml="CityName"/></button>
            {error && 
                   <p style={{ color: "red" , fontWeight:"500"}}>Please enter correct city name</p>
           }
        </form>
    )
}