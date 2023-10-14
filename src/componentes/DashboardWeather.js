import Temp from './Temp.js';
import Hours from './Hours';
import styled from 'styled-components';
import UvIndex from './UvIndex';
import Wind from './Wind';
import SunriseSunset from './SunriseSunset';
import Humidity from './Humidity';
import Visibility from './Visibility';
import AirQuality from './AirQuality';

/* Estilos*/
const DashboardContainer = styled.div`
  display: grid;
  grid-template-columns: 30% 70%; /* Columna 1: 30%, Columna 2: 70% */
  gap: 20px;
  padding: 20px;
  background-color: #0b83b3;
  color: #fff;
  width: 50vw;
  height: 100vh;
  overflow: hidden; /* Oculta el desbordamiento*/
`;

const Temperature= styled.div`
  display: flex;
  flex-direction: column;
  overflow: hidden; /* Oculta el desbordamiento*/
  max-height: 100%; /* Limita la altura al 100% del contenedor */
`;

const Information = styled.div`
  display: flex;
  flex-direction: column;
  max-height: 100%; /* Limita la altura al 100% del contenedor */
  justify-content: space-between;
`;

const Graphic = styled.div`
    height: 100%;
    width: 200%;
    display: flex;
`;

const DetailsContainer = styled.div`
  display: flex;
  flex-wrap: wrap; /* Permite que las tarjetas se ajusten automáticamente al espacio disponible */
  align-content: flex-start;
  justify-content: space-between; /* Distribuye las tarjetas uniformemente */
  max-height: 70%; /* Limita la altura al 100% del contenedor */
`;




function DashboardWeather({weatherData}) {

  console.log('Datos en DashboardWeather:', weatherData);

  return (
    <DashboardContainer>
      <Temperature>
        <Temp weatherData={weatherData} />
      </Temperature>
      <Information>
        <Graphic>
        <Hours />
        </Graphic>
        <DetailsContainer>
          <UvIndex />
          <Wind />
          <SunriseSunset />
          <Humidity />
          <Visibility />
          <AirQuality />
        </DetailsContainer>
        
      </Information>
    </DashboardContainer>
  );
}

export default DashboardWeather;