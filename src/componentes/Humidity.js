import React from 'react';
import styled from "styled-components";
import HumidityIcon from "../icons/humidity.svg";

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
text-align: center;
`;

function Humidity({weatherData}){

    /*Datos de la api*/
    const actualHour = String(weatherData.current_weather.time).slice(11, 13);
    const humidityValue = weatherData.hourly.relativehumidity_2m[actualHour];
    const humidityUnit = weatherData.hourly_units.relativehumidity_2m;

    const humidityDescription = () => {
        if (humidityValue < 40) {
            return "Muy baja";
        } else if (humidityValue >= 40 && humidityValue < 60) {
            return "Baja";
        } else if (humidityValue >= 60 && humidityValue < 70) {
            return "Moderada";
        } else if (humidityValue >= 70 && humidityValue < 80) {
            return "Alta";
        } else if (humidityValue >= 80 && humidityValue < 90) {
            return "Muy alta";
        } else {
            return "Extremadamente alta";
        }
    }
    
    const humidityDescriptionText = humidityDescription();

    return (
        <Card>
            <p>Humedad</p >  
            <Info>{humidityValue} {humidityUnit}  {humidityDescriptionText}</Info>
                <img src={HumidityIcon} alt='Humedad' width={'70px'}/> 
        </Card>
    );
}

export default Humidity;