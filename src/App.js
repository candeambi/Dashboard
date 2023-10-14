import './App.css';
import React, {useState, useEffect} from 'react';
import DashboardWeather from './componentes/DashboardWeather';
import styled from "styled-components";
import Spinner from 'react-bootstrap/Spinner';
import 'bootstrap/dist/css/bootstrap.min.css';


/*Estilos*/
const Loading = styled.div`
  font-family: monospace;
  text-align: center;
`;

function App() {

  /*Extraigo los datos de la api de clima*/
const [weatherData, setWeatherData] = useState(null);
const [weatherLoading, setWeatherLoading] = useState(true);
 const [showSpinner, setShowSpinner] = useState(true);

useEffect (() => {
  fetch('https://api.open-meteo.com/v1/forecast?latitude=-31.4135&longitude=-64.181&hourly=temperature_2m,relativehumidity_2m,weathercode,visibility,temperature_80m,temperature_120m,temperature_180m&daily=weathercode,temperature_2m_max,temperature_2m_min,sunrise,sunset,uv_index_max,windspeed_10m_max&current_weather=true&timezone=America%2FSao_Paulo')
  .then (resp => resp.json()
  ).then(data => {
    setWeatherData(data);
    setWeatherLoading(false);
    setShowSpinner(false);
    console.log('Datos cargados:', data);
  }).catch(ex => {
    console.error(ex);
  })
}, [])

  /*Extraigo los datos de la api de clima*/
  const [airQualityData, setAirQualityData] = useState(null);
  //const [airQualityLoading, setAirQualityLoading] = useState(true);

  useEffect (() => {
    fetch('https://air-quality-api.open-meteo.com/v1/air-quality?latitude=52.52&longitude=13.41&hourly=european_aqi&timezone=America%2FSao_Paulo')
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
       <Loading>
          {showSpinner && <Spinner animation="border" variant="dark" />} 
          {weatherLoading && <h1>Cargando...</h1>}
        </Loading>
      <div>{!weatherLoading && weatherData && <DashboardWeather weatherData={weatherData} airQualityData={airQualityData} />}</div>
      
    </div>

  );
}

export default App;