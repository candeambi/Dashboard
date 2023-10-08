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

function Visibility() {
    return (
        <Card>     
            <p>Visibilidad</p>
            <p>6.1 km Promedio</p>
                <img src={VisibilityIcon} alt='Visibilidad' width={'70px'}/>   
            
        </Card>
    );
}

export default Visibility;