import React from 'react';
import styled from "styled-components";
import { WiHumidity } from "weather-icons-react";

const Card = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    background-color: #fff;
    border-radius: 5px;
    color: #000;
    margin: 5px;
    padding: 5px;
`;

const TitleCard = styled.p`
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
    grid-column: 1 / 2; /* Columna 1 */
    text-align: center;
`;

const SecondIcon = styled.div`
    grid-row: 3 / 4; /* Fila 3 */
    grid-column: 2 / 3; /* Columna 2 */
    text-align: center;
`;

function Humidity(){
    return (
        <Card>
            <TitleCard>Humedad</TitleCard >  
            <Value>12%</Value>
            <SecondIcon>
                <WiHumidity size={45} color='#000' />  
            </SecondIcon>
            <Description>Normal</Description>
        </Card>
    );
}

export default Humidity;