import React from 'react';
import styled from "styled-components";
import Smoke from "../icons/smoke-particles.svg";
import Data from './Data.json';


const Card = styled.div`
    display: flex;
    flex: 0 0 calc(28% - 0px); /* Establece el ancho de cada tarjeta en un tercio del contenedor, considerando el espacio entre las tarjetas */
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    font-family: Georgia, 'Times New Roman', Times, serif;
    background-color: rgb(247, 156, 38);
    border-radius: 5px;
    color: #000;
    margin: 5px;
    padding: 5px;
    height: 180px;
`;

const Info = styled.div`
font-weight: bold;
`;

function AirQuality() {

    /*Datos del JSON*/
    const actualHour = String(Data.current_weather.time).slice(11, 13);
    const airQualityValue = Data.hourly.european_aqi[actualHour];

    const description = () => {
        if (airQualityValue >= 0 && airQualityValue <= 50) {
            return "Bueno";
        } else if (airQualityValue <= 100) {
            return "Moderado";
        } else if (airQualityValue <= 150) {
            return "Deficiente para grupos sensibles";
        } else if (airQualityValue <= 200) {
            return "Deficiente";
        } else if (airQualityValue <= 300) {
            return "Muy deficiente";
        } else {
            return "Peligroso";
        }
    }

    const airQualityDescription = description();

    return (
        <Card>
            <p>Calidad del aire</p>
            <Info>{airQualityValue}  {airQualityDescription}</Info>
            
                <img src={Smoke} alt='Humo' width={'70px'}/>   
            
        </Card>
    );
}

export default AirQuality;