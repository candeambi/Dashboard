import React from 'react';
import styled from "styled-components";
import UvIcon from "../icons/uv-index.svg";

/* Estilos*/
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

const Info = styled.div`
font-weight: bold;
text-align: center;
`;

function UvIndex ({weatherData}){

    /* Datos de la api */
    const getUvIndexValue = weatherData.daily.uv_index_max;
    const uvIndexValue = Math.max(...getUvIndexValue);

    return (
        <Card>
                <p>Indice UV</p>
                <Info>{uvIndexValue}</Info>
                
                    <img src={UvIcon} alt='RayosUV' width={'70px'}/>  
                
        </Card>
    );
}

export default UvIndex;