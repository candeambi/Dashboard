import React from 'react';
import styled from "styled-components";
import HumidityIcon from "../icons/humidity.svg";

const Card = styled.div`
        display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    font-family: Georgia, 'Times New Roman', Times, serif;
    background-color: rgb(247, 156, 38);
    border-radius: 5px;
    color: #000;
    margin: 5px;
    padding: 5px;
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
function Humidity(){
    return (
        <Card>
            <p>Humedad</p >  
            <h3>12%</h3>
            <h4>Normal</h4>
                <img src={HumidityIcon} alt='Humedad' width={'70px'}/> 
        </Card>
    );
}

export default Humidity;