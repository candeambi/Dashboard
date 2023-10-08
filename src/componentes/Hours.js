import React from 'react';
import styled from 'styled-components';
import Data from './Data.json';
import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  BarElement,
  Title,
  Tooltip,
  Legend,
  Filler,
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  BarElement,
  Title,
  Tooltip,
  Legend,
  Filler
);

/*Estilos*/
const Container = styled.div`
  background-color: rgb(247, 156, 38);
  border-radius: 5px;
  margin: 5px;
`;

function Hours(){

  /* Datos del JSON extraidos para el grafico*/
  const temperaturaPorHora = [
    { hora: String(Data.hourly.time[0] ).slice(-5), temperatura: Data.hourly.temperature_2m[0]},
    { hora: String(Data.hourly.time[1] ).slice(-5), temperatura: Data.hourly.temperature_2m[1]},
    { hora: String(Data.hourly.time[2] ).slice(-5), temperatura: Data.hourly.temperature_2m[2]},
    { hora: String(Data.hourly.time[3] ).slice(-5), temperatura: Data.hourly.temperature_2m[3]},
    { hora: String(Data.hourly.time[4] ).slice(-5), temperatura: Data.hourly.temperature_2m[4]},
    { hora: String(Data.hourly.time[5] ).slice(-5), temperatura: Data.hourly.temperature_2m[5]},
    { hora: String(Data.hourly.time[6] ).slice(-5), temperatura: Data.hourly.temperature_2m[6]},
    { hora: String(Data.hourly.time[7] ).slice(-5), temperatura: Data.hourly.temperature_2m[7]},
    { hora: String(Data.hourly.time[8] ).slice(-5), temperatura: Data.hourly.temperature_2m[8]},
    { hora: String(Data.hourly.time[9] ).slice(-5), temperatura: Data.hourly.temperature_2m[9]},
    { hora: String(Data.hourly.time[10]).slice(-5) , temperatura: Data.hourly.temperature_2m[10]},
    { hora: String(Data.hourly.time[11]).slice(-5) , temperatura: Data.hourly.temperature_2m[11]},
    { hora: String(Data.hourly.time[12]).slice(-5) , temperatura: Data.hourly.temperature_2m[12]},
    { hora: String(Data.hourly.time[13]).slice(-5) , temperatura: Data.hourly.temperature_2m[13]},
    { hora: String(Data.hourly.time[14]).slice(-5) , temperatura: Data.hourly.temperature_2m[14]},
    { hora: String(Data.hourly.time[15]).slice(-5) , temperatura: Data.hourly.temperature_2m[15]},
    { hora: String(Data.hourly.time[16]).slice(-5) , temperatura: Data.hourly.temperature_2m[16]},
    { hora: String(Data.hourly.time[17]).slice(-5) , temperatura: Data.hourly.temperature_2m[17]},
    { hora: String(Data.hourly.time[18]).slice(-5) , temperatura: Data.hourly.temperature_2m[18]},
    { hora: String(Data.hourly.time[19]).slice(-5) , temperatura: Data.hourly.temperature_2m[19]},
    { hora: String(Data.hourly.time[20]).slice(-5) , temperatura: Data.hourly.temperature_2m[20]},
    { hora: String(Data.hourly.time[21]).slice(-5) , temperatura: Data.hourly.temperature_2m[21]},
    { hora: String(Data.hourly.time[22]).slice(-5) , temperatura: Data.hourly.temperature_2m[22]},
    { hora: String(Data.hourly.time[23]).slice(-5) , temperatura: Data.hourly.temperature_2m[23]},
  ];

  const horas = temperaturaPorHora.map(item => item.hora);
  const temperaturas = temperaturaPorHora.map(item => item.temperatura);

const myData = {
    labels: horas,
    datasets: [
        {
            label: 'ºC',
            data: temperaturas,
            backgroundColor: 'rgba(0, 220, 195, 0.5)',
            borderRadius: '10'
        }
    ]
};


const myOptions = {
    scales: {
      x: {
        type: 'category', // Indicar explícitamente que el tipo de escala es 'category'.
        labels: horas, // Esto debe coincidir con las etiquetas de datos.
      },
      y: {
        beginAtZero: true, // Esto asegura que el eje y comience desde cero.
      },
    },
  };


    return (
      <Container>
        <Bar data={myData} options={myOptions} />
      </Container>
    );
}

export default Hours;
