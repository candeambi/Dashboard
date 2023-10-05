import React from 'react';
import styled from 'styled-components';
import { WiDaySunny } from "weather-icons-react";
import { WiMoonWaxingCrescent2 } from "weather-icons-react";
import { WiDayCloudy } from "weather-icons-react";



const Container = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
`

const ActualTemp = styled.div`
    grid-column: 1 / span 2;
    text-align: center;
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
                <WiDayCloudy size={60} color='#fff' />
                <h2>20º</h2>
                <p>Lunes, 17:00</p>
            </ActualTemp>
            <Max>
                <p>Max</p>
                <h3>29º</h3>
                <WiDaySunny size={30} color='#fff' />
            </Max>
            <Min>
                <p>Min</p>
                <h3>13º</h3>
                <WiMoonWaxingCrescent2 size={30} color='#fff' />
            </Min>
        </Container>
    );
}

export default Temp;