import React from 'react';
import styled from "styled-components";
import Smoke from "../icons/smoke-particles.svg";


const Card = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    background-color: rgb(247, 156, 38);
    border-radius: 5px;
    color: #000;
    margin: 5px;
    padding: 5px;
`;

const TitleCard = styled.p`
    font-size: large;
    font-family: Georgia, 'Times New Roman', Times, serif;
    grid-column: 1 / span 2;
    text-align: center;
`;

const Value = styled.h3`
    grid-row: 2 / 3; /* Fila 2 */
    grid-column: 1 / 2; /* Columna 1 */
    text-align: center;
`;

const Description = styled.h4`
    grid-row: 3 / 4; /* Fila 3 */
    grid-column: 1 / span 2; 
    text-align: center;
`;

const SecondIcon = styled.div`
    grid-row: auto;
    grid-column: 2 / 3; /* Columna 2 */
    text-align: center;
`;

function AirQuality() {
    return (
        <Card>
            <TitleCard>Calidad del aire</TitleCard>
            <Value>105</Value>
            <Description>Insano</Description>
            <SecondIcon>
                <img src={Smoke} alt='Humo' width={'70px'}/>   
            </SecondIcon>
        </Card>
    );
}

export default AirQuality;