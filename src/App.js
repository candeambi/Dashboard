import './App.css';
import React, {useState, useEffect} from 'react';
import DashboardWeather from './componentes/DashboardWeather';

function App() {

  /*Extraigo los datos de la api*/
const [weatherData, setWeatherData] = useState(null);
const [loading, setLoading] = useState(true);

useEffect (() => {
  fetch('https://api.open-meteo.com/v1/forecast?latitude=-31.4135&longitude=-64.181&hourly=temperature_2m,relativehumidity_2m,weathercode,visibility,temperature_80m,temperature_120m,temperature_180m&daily=weathercode,temperature_2m_max,temperature_2m_min,sunrise,sunset,uv_index_max,windspeed_10m_max&current_weather=true&timezone=America%2FSao_Paulo')
  .then (resp => resp.json()
  ).then(data => {
    setWeatherData(data);
    setLoading(false);
  }).catch(ex => {
    console.error(ex);
  })
}, [])


  return (
    <div>
       <div>{loading && <h1>Cargando...</h1>}</div>
      <div>{!loading && weatherData && <DashboardWeather weatherData={weatherData} />}</div>
    </div>

  );
}

export default App;
