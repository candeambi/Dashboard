import React from 'react';
import styled from "styled-components";
import UvIcon from "../icons/uv-index.svg";

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
    padding:5px;
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

const Icon = styled.div`
    grid-row: 2 / 3; 
    grid-column: 2 / 3; 
    text-align: center; 
`;
*/

function UvIndex (){
    return (
        <Card>
                <p>Indice UV</p>
                <p>6</p>
                
                    <img src={UvIcon} alt='RayosUV' width={'70px'}/>  
                
        </Card>
    );
}

export default UvIndex;