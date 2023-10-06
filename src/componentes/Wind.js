import React from 'react';
import styled from "styled-components";
import { WiStrongWind } from "weather-icons-react";


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

const Icon = styled.div`
    grid-row: 2 / 3; /* Fila 2 */
    grid-column: 2 / 3; /* Columna 2 */
    text-align: center; 
`;

function Wind () {
    return (
        <Card>
            <TitleCard>Estado del viento</TitleCard>
            <Value>11.12 km/h</Value>
            <Icon>
                <WiStrongWind size={45} color='#000' />  
            </Icon>
        </Card>
    );
}

export default Wind;