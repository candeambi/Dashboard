import React from 'react';
import styled from "styled-components";

const Container = styled.div`
display: grid;
grid-template-columns: repeat(3, 1fr);
grid-gap: 5px
`

const Card = styled.div`
background-color: #fff;
border-radius: 5px;
color: #000;
margin: 20px;
padding: 5px;
`

function Details(){
    return (
        <Container>
            <Card>
                <p>Indice UV</p>
                <h3>6</h3>
            </Card>
            <Card>
                <p>Estado del viento</p>
                <h3>11.12 km/h</h3>
            </Card>
            <Card>
                <p>Amanecer y atardecer</p>
                <h3>6:35 AM</h3>
                <h3>5:42 PM</h3>
            </Card>
            <Card>
                <p>Humedad</p>
                <h3>12%</h3>
                <h4>Normal</h4>
            </Card>
            <Card>     
                <p>Visibilidad</p>
                <h3>6.1 km</h3>
                <h4>Promedio</h4>
            </Card>
            <Card>
                <p>Calidad del aire</p>
                <h3>105</h3>
                <h4>Insano</h4>
            </Card>
        </Container>
    );
}

export default Details;