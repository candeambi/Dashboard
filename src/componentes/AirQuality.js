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
    height: 200px;
`;
/*
const TitleCard = styled.p`
    font-size: large;
    font-family: Georgia, 'Times New Roman', Times, serif;
    grid-column: 1 / span 2;
    text-align: center;
`;

const Value = styled.h3`
    grid-row: 2 / 3; 
    grid-column: 1 / 2; 
    text-align: center;
`;

const Description = styled.h4`
    grid-row: 3 / 4; 
    grid-column: 1 / span 2; 
    text-align: center;
`;

const SecondIcon = styled.div`
    grid-row: auto;
    grid-column: 2 / 3; 
    text-align: center;
`;
*/

function AirQuality() {
    return (
        <Card>
            <p>Calidad del aire</p>
            <h3>105</h3>
            <h4>Insano</h4>
            
                <img src={Smoke} alt='Humo' width={'70px'}/>   
            
        </Card>
    );
}

export default AirQuality;