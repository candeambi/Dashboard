import React from 'react';
import styled from "styled-components";
import { WiHumidity } from "weather-icons-react";
import { WiHot } from "weather-icons-react";
import { WiStrongWind } from "weather-icons-react";
import { WiSunrise } from "weather-icons-react";
import { WiSunset } from "weather-icons-react";
import { WiSmallCraftAdvisory } from "weather-icons-react";
import { WiSmog } from "weather-icons-react";

const Container = styled.div`
display: grid;
grid-template-columns: repeat(3, 1fr);
grid-gap: 5px;
`;

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

const SecondValue = styled.h3`
    grid-row: 3 / 4; /* Fila 3 */
    grid-column: 1 / 2; /* Columna 1 */
    text-align: center;
`;

const Description = styled.h4`
    grid-row: 3 / 4; /* Fila 3 */
    grid-column: 1 / 2; /* Columna 1 */
    text-align: center;
`;

const Icon = styled.div`
    grid-row: 2 / 3; /* Fila 2 */
    grid-column: 2 / 3; /* Columna 2 */
    text-align: center; 
`;

const SecondIcon = styled.div`
    grid-row: 3 / 4; /* Fila 3 */
    grid-column: 2 / 3; /* Columna 2 */
    text-align: center;
`;

function Details(){
    return (
        <Container>
            <Card>
                <TitleCard>Indice UV</TitleCard>
                <Value>6</Value>
                <Icon>
                    <WiHot size={45} color='#000' />  
                </Icon>
            </Card>
            <Card>
                <TitleCard>Estado del viento</TitleCard>
                <Value>11.12 km/h</Value>
                <Icon>
                    <WiStrongWind size={45} color='#000' />  
                </Icon>
            </Card>
            <Card>
                <TitleCard>Amanecer y atardecer</TitleCard>
                <Value>6:35 AM</Value>
                <Icon>
                    <WiSunrise size={45} color='#000' />  
                </Icon>
                <SecondValue>5:42 PM</SecondValue>
                <SecondIcon>
                    <WiSunset size={45} color='#000' />  
                </SecondIcon>
            </Card>
            <Card>
                <TitleCard>Humedad</TitleCard >  
                <Value>12%</Value>
                <SecondIcon>
                    <WiHumidity size={45} color='#000' />  
                </SecondIcon>
                <Description>Normal</Description>
            </Card>
            <Card>     
                <TitleCard>Visibilidad</TitleCard>
                <Value>6.1 km</Value>
                <Description>Promedio</Description>
                <SecondIcon>
                    <WiSmallCraftAdvisory size={45} color='#000' />  
                </SecondIcon>
            </Card>
            <Card>
                <TitleCard>Calidad del aire</TitleCard>
                <Value>105</Value>
                <Description>Insano</Description>
                <SecondIcon>
                    <WiSmog size={45} color='#000' />  
                </SecondIcon>
            </Card>
        </Container>
    );
}

export default Details;