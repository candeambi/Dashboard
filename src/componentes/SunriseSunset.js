import React from 'react';
import styled from "styled-components";
import Sunrise from "../icons/sunrise.svg";
import Sunset from "../icons/sunset.svg";

/*Estilos*/
const Card = styled.div`
    display: flex;
    flex: 0 0 calc(28% - 0px); /* Establece el ancho de cada tarjeta en un tercio del contenedor, considerando el espacio entre las tarjetas */
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    text-align:center;
    font-family: Georgia, 'Times New Roman', Times, serif;
    background-color: #09976c;
    border-radius: 5px;
    color: #000;
    margin: 5px;
    padding:5px;
    height: 200px;
`;

const Wrap = styled.div`
    flex-wrap: wrap;
`;

const Info = styled.div`
font-weight: bold;
`;

function SunriseSunset ({weatherData}) {

    /*Datos de la api*/
    const getSunriseHour = weatherData.daily.sunrise[0];
    const sunriseHour = String(getSunriseHour).slice(-5);
    const getSunsetHour = weatherData.daily.sunset[0];
    const sunsetHour = String(getSunsetHour).slice(-5);

    return (
        <Card>
            <p>Amanecer y atardecer</p>
            <Info>{sunriseHour}</Info>
            <Info>{sunsetHour}</Info>
            
            <Wrap>
                <img src={Sunset} alt='Atardecer' width={'30px'} />  
                <img src={Sunrise} alt='Amanecer' width={'30px'}/> 
            </Wrap>
        </Card>
    );
}

export default SunriseSunset;