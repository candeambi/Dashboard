import React from 'react';
import styled from "styled-components";
import UvIcon from "../icons/uv-index.svg";

const Card = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    background-color: rgb(245, 240, 169);
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

const Icon = styled.div`
    grid-row: 2 / 3; /* Fila 2 */
    grid-column: 2 / 3; /* Columna 2 */
    text-align: center; 
`;

function UvIndex (){
    return (
        <Card>
                <TitleCard>Indice UV</TitleCard>
                <Value>6</Value>
                <Icon>
                    <img src={UvIcon} alt='RayosUV' width={'70px'}/>  
                </Icon>
        </Card>
    );
}

export default UvIndex;