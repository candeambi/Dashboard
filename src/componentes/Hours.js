import React from 'react';
import styled from 'styled-components';
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

const Container = styled.div`
  background-color: rgb(247, 156, 38);
  border-radius: 5px;
  margin: 5px;
`;

function Hours(){

const horarios = ['12:00 AM', '3:00 AM', '6:00 AM', '9:00 AM', '12:00 PM', '3:00 PM', '6:00 PM', '9:00 PM', '12:00 AM'];
const grados = [16, 13, 15, 19, 25, 29, 26, 20, 17];

const myData = {
    labels: horarios,
    datasets: [
        {
            label: 'ºC',
            data: grados,
            backgroundColor: 'rgba(0, 220, 195, 0.5)',
            borderRadius: '10'
        }
    ]
};


const myOptions = {
    scales: {
      x: {
        type: 'category', // Indicar explícitamente que el tipo de escala es 'category'.
        labels: horarios, // Esto debe coincidir con las etiquetas de datos.
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
