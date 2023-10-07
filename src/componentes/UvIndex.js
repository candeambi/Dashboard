import React from 'react';
import styled from "styled-components";
import UvIcon from "../icons/uv-index.svg";

const Card = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    font-family: Georgia, 'Times New Roman', Times, serif;
    background-color: #09976c;
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
                <h3>6</h3>
                
                    <img src={UvIcon} alt='RayosUV' width={'70px'}/>  
                
        </Card>
    );
}

export default UvIndex;