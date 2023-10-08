import React from 'react';
import styled from "styled-components";
import Smoke from "../icons/smoke-particles.svg";


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
    return (
        <Card>
            <p>Calidad del aire</p>
            <Info>105 Insano</Info>
            
                <img src={Smoke} alt='Humo' width={'70px'}/>   
            
        </Card>
    );
}

export default AirQuality;