import './App.css';
import React, {useState, useEffect} from 'react';
import DashboardWeather from './componentes/DashboardWeather';

function App() {

  /*Extraigo los datos de la api de clima*/
const [weatherData, setWeatherData] = useState(null);
const [weatherLoading, setWeatherLoading] = useState(true);

useEffect (() => {
  fetch('https://api.open-meteo.com/v1/forecast?latitude=-31.4135&longitude=-64.181&hourly=temperature_2m,relativehumidity_2m,weathercode,visibility,temperature_80m,temperature_120m,temperature_180m&daily=weathercode,temperature_2m_max,temperature_2m_min,sunrise,sunset,uv_index_max,windspeed_10m_max&current_weather=true&timezone=America%2FSao_Paulo')
  .then (resp => resp.json()
  ).then(data => {
    setWeatherData(data);
    setWeatherLoading(false);
    console.log('Datos cargados:', data);
  }).catch(ex => {
    console.error(ex);
  })
}, [])

  /*Extraigo los datos de la api de clima*/
  const [airQualityData, setAirQualityData] = useState(null);
  //const [airQualityLoading, setAirQualityLoading] = useState(true);

  useEffect (() => {
    fetch('https://air-quality-api.open-meteo.com/v1/air-quality?latitude=-31.4135&longitude=-64.181&hourly=european_aqi')
    .then (resp => resp.json()
  ).then(data => {
    setAirQualityData(data);
    setWeatherLoading(false);
    console.log('Datos del aire cargados:', data);
  }).catch(ex => {
    console.error(ex);
  })
}, [])

  return (
    <div>
       <div>{weatherLoading && <h1>Cargando...</h1>}</div>
      <div>{!weatherLoading && weatherData && <DashboardWeather weatherData={weatherData} airQualityData={airQualityData} />}</div>
      
    </div>

  );
}

export default App;