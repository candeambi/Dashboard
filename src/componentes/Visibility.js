import React from 'react';
import styled from "styled-components";
import VisibilityIcon from "../icons/mist.svg";

const Card = styled.div`
    display: flex;
    flex: 0 0 calc(28% - 0px); /* Establece el ancho de cada tarjeta en un tercio del contenedor, considerando el espacio entre las tarjetas */
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    font-family: Georgia, 'Times New Roman', Times, serif;
    background-color: #09976c;
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

function Visibility({weatherData}) {

    /*Datos de la api */
    const actualHour = String(weatherData.current_weather.time).slice(11, 13);
    const visibilityValue = weatherData.hourly.visibility[actualHour];
    const visibilityUnit = weatherData.hourly_units.visibility;

    const visibilityDescription = () => {
        if (visibilityValue > 10000) {
            return "Excelente";
        } else if (visibilityValue >= 5000) {
            return "Buena";
        } else if (visibilityValue >= 3000) {
            return "Moderada";
        } else if (visibilityValue >= 1000) {
            return "Mala";
        } else if (visibilityValue >= 500) {
            return "Muy mala";
        } else {
            return "Peligrosa";
        }
    }
    
    const visibilityDescriptionText = visibilityDescription();

    return (
        <Card>     
            <p>Visibilidad</p>
            <Info>{visibilityValue} {visibilityUnit} {visibilityDescriptionText}</Info>
                <img src={VisibilityIcon} alt='Visibilidad' width={'70px'}/>   
            
        </Card>
    );
}

export default Visibility;