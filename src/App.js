import './App.css';
import React, {useState, useEffect} from 'react';
import DashboardWeather from './componentes/DashboardWeather';
import styled from "styled-components";
import Spinner from 'react-bootstrap/Spinner';
import 'bootstrap/dist/css/bootstrap.min.css';
import DashboardTransport from './components_transport/DashboardTransport';


/*Estilos*/
const Loading = styled.div`
  font-family: monospace;
  text-align: center;
`;

const HalfScreen = styled.div`
  width: 50%;
  height: 100vh;
  float: left;
  overflow: hidden;
`;

const SecondHalfScreen = styled.div`
width: 50%;
height: 100vh;
float: right;
overflow: hidden;
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

/*Extraigo los datos de la api de transporte*/
  const [transportData, setTransportData] = useState(null);
  const [transportLoading, setTransportLoading] = useState(true);

  const apiUrl = "https://apitransporte.buenosaires.gob.ar/colectivos/vehiclePositionsSimple?route_id=1464&client_id=cb6b18c84b3b484d98018a791577af52&client_secret=3e3DB105Fbf642Bf88d5eeB8783EE1E6";
  const fetchdata = () => {
    setTransportLoading(false);
    fetch(apiUrl)
      .then((resp) => resp.json())
      .then((data) => {
        setTransportData(data);
        setTransportLoading(false);
        console.log('Datos cargados de transporte:', data);
      })
      .catch((ex) => {
        console.error(ex);
      });
  }

  useEffect(() => {
    fetchdata()
    const interval = setInterval(() => {
      fetchdata()
    }, 31000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div>
      <HalfScreen>
      <Loading>
          {showSpinner && <Spinner animation="border" variant="dark" />} 
          {weatherLoading && <h1>Cargando...</h1>}
        </Loading>
        {!weatherLoading && weatherData && <DashboardWeather weatherData={weatherData} airQualityData={airQualityData} />}
      </HalfScreen>
      <SecondHalfScreen>
        <Loading>
          {showSpinner && <Spinner animation="border" variant="dark" />} 
          {transportLoading && <h1>Cargando...</h1>}
        </Loading>
      {!transportLoading && transportData && <DashboardTransport transportData={transportData} />}
      </SecondHalfScreen>
    </div>

  );
}

export default App;