import React from 'react';
import styled from "styled-components";
import WindIcon from "../icons/wind.svg";

/* Estilos*/
const Card = styled.div`
   display: flex;
   flex: 0 0 calc(28% - 0px); /* Establece el ancho de cada tarjeta en un tercio del contenedor, considerando el espacio entre las tarjetas */
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    font-family: Georgia, 'Times New Roman', Times, serif;
    background-color:  rgb(247, 156, 38);
    border-radius: 5px;
    color: #000;
    margin: 5px;
    padding: 5px;
        height: 200px;
`;

const Info = styled.div`
font-weight: bold;
`;

function Wind ({weatherData}) {

    /* Datos de la api */
    const getWindSpeedValue = weatherData.daily.windspeed_10m_max;
    const windSpeedValue = Math.max(...getWindSpeedValue);
    const windSpeedUnit = weatherData.daily_units.windspeed_10m_max;

    return (
        <Card>
            <p>Estado del viento</p>
            <Info>{windSpeedValue} {windSpeedUnit}</Info>
            
                <img src={WindIcon} alt='Viento' width={'70px'}/>   
            
        </Card>
    );
}

export default Wind;