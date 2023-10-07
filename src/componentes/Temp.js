import React from 'react';
import styled from 'styled-components';
import Day from "../icons/clear-day.svg";
import Night from "../icons/moon-first-quarter.svg";
import PartlyCloudy from "../icons/partly-cloudy-day.svg";



const Container = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    font-family: Georgia, 'Times New Roman', Times, serif;
`

const ActualTemp = styled.div`
    grid-column: 1 / span 2;
    text-align: center;
    font-size: larger;
`;

const Max = styled.div`
    grid-row: 2 / 3; /* Fila 2 */
    grid-column: 1 / 2; /* Columna 1 */
    text-align: center;
`;

const Min = styled.div`
    grid-row: 2 / 3; /* Fila 2 */
    grid-column: 2 / 3; /* Columna 1 */
    text-align: center;
`;

function Temp (){
    return(
        <Container>
            <ActualTemp>
                <h1>Córdoba, Argentina</h1>
                <img src={PartlyCloudy} alt="Parcialmente Nublado" width={'100px'} />
                <h2>20º</h2>
                <p>Lunes, 17:00</p>
            </ActualTemp>
            <Max>
                <p>Max</p>
                <h3>29º</h3>
                <img src={Day} alt="Max" width={'80px'} />
            </Max>
            <Min>
                <p>Min</p>
                <h3>13º</h3>
                <img src={Night} alt="Min" width={'80px'} />
            </Min>
        </Container>
    );
}

export default Temp;