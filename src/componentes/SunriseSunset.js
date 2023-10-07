import React from 'react';
import styled from "styled-components";
import Sunrise from "../icons/sunrise.svg";
import Sunset from "../icons/sunset.svg";

const Card = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    text-align:center;
    font-family: Georgia, 'Times New Roman', Times, serif;
    background-color: #09976c;
    border-radius: 5px;
    color: #000;
    margin: 5px;
    padding: 5px;
`;

const Wrap = styled.div`
    flex-wrap: wrap;
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

const SecondValue = styled.h3`
    grid-row: 3 / 4; 
    grid-column: 1 / 2; 
    text-align: center;
`;

const Icon = styled.div`
    grid-row: 2 / 3; 
    grid-column: 2 / 3; 
    text-align: center; 
`;

const SecondIcon = styled.div`
    grid-row: 3 / 4; 
    grid-column: 2 / 3; 
    text-align: center;
`;
*/

function SunriseSunset () {
    return (
        <Card>
            <p>Amanecer y atardecer</p>
            <Wrap>
            <p>6:35 AM</p>
            
                <img src={Sunrise} alt='Amanecer' width={'50px'}/>  
            </Wrap>
            <Wrap>
            <p>5:42 PM</p>
            
                <img src={Sunset} alt='Atardecer' width={'60px'} />  
            </Wrap>
        </Card>
    );
}

export default SunriseSunset;