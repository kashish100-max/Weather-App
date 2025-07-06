import LocationOnIcon from '@mui/icons-material/LocationOn';
import WavesIcon from '@mui/icons-material/Waves';
import WaterDropIcon from '@mui/icons-material/WaterDrop';
import SpeedIcon from '@mui/icons-material/Speed';


export default function Weather_data({weather}){
    return(
        <div>
            <LocationOnIcon/>
            <h4> {weather.city}</h4>
            {/* <icon/> */}
            <h1>{weather.temperature}</h1>&deg;
            <p>{weather.description}</p>
            <div>
                <div>
                     <WavesIcon/>
                     <p>{weather.windspeed}</p>
                     <h4>Wind</h4>
                </div>
                <div>
                     <WaterDropIcon/>
                     <p>{weather.humidity}</p>
                     <h4>Humidity</h4>
                </div>
                <div>
                     <SpeedIcon/>
                     <p>{weather.pressure}</p>
                     <h4>Pressure</h4>
                </div>
            </div>
        </div>
    )
}