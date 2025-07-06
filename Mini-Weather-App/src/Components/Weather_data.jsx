import LocationOnIcon from '@mui/icons-material/LocationOn';
import WavesIcon from '@mui/icons-material/Waves';
import WaterDropIcon from '@mui/icons-material/WaterDrop';
import SpeedIcon from '@mui/icons-material/Speed';
import "./Weather_data.css";
import AcUnitIcon from '@mui/icons-material/AcUnit';
import ThunderstormIcon from '@mui/icons-material/Thunderstorm'; 
import CloudIcon from '@mui/icons-material/Cloud'; 
import WbSunnyIcon from '@mui/icons-material/WbSunny'; 


export default function Weather_data({weather}){
    return(
        <div>
            <h2> <LocationOnIcon sx={{color:"red"}}/> {weather.city}</h2>
            {weather.temperature <=0 && 
              <AcUnitIcon className='icon' sx={{
                height:"4rem",
                width:'4rem'
              }}/>
            }
            {(weather.temperature <=10 && weather.temperature >0) && 
              <ThunderstormIcon className='icon' sx={{
                height:"4rem",
                width:'4rem'
              }}/>
            }
            {(weather.temperature <=20 && weather.temperature>10) && 
              <CloudIcon className='icon' sx={{
                height:"4rem",
                width:'4rem'
              }}/>
            }
            {(weather.temperature <=30 && weather.temperature>20) && 
              <WbSunnyIcon className='icon' sx={{
                height:"4rem",
                width:'4rem'
              }}/>
            }
            {(weather.temperature <=40 && weather.temperature>30) && 
              <i class="fa-solid fa-cloud-sun" className='icon'></i>
            }
            {weather.temperature >40 && 
              <i class="fa-solid fa-temperature-high" className="icon"></i>
            }
            
            <h1>{weather.temperature}&deg;C</h1>
            <p className="description">{weather.description}</p>
            <br></br>
            <div className="report">
                <div>
                     <WavesIcon/>
                     <p>{weather.windspeed}m/s</p>
                     <h4>Wind</h4>
                </div>
                <div>
                     <WaterDropIcon/>
                     <p>{weather.humidity}%</p>
                     <h4>Humidity</h4>
                </div>
                <div>
                     <SpeedIcon/>
                     <p>{weather.pressure}hpa</p>
                     <h4>Pressure</h4>
                </div>
            </div>
        </div>
    )
}