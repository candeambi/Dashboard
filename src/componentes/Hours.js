/*import React from 'react';
import {Bar} from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";

ChartJS.register(ArcElement, Tooltip, Legend);

function Hours(){

const horarios = ['12:00 AM', '3:00 AM', '6:00 AM', '9:00 AM', '12:00 PM', '3:00 PM', '6:00 PM', '9:00 PM', '12:00 AM'];
const grados = [16, 13, 15, 19, 25, 29, 26, 20, 17];

const data = {
    labels: horarios,
    datasets: [
        {
            label: 'Grados',
            data: grados,
            backgroundColor: 'rgba(0, 220, 195, 0.5)'
        }
    ]
};


const options = {
    scales: {
      x: {
        type: 'category', // Indicar explícitamente que el tipo de escala es 'category'.
        labels: horarios, // Esto debe coincidir con tus etiquetas de datos.
      },
      y: {
        beginAtZero: true, // Esto asegura que el eje y comience desde cero.
      },
    },
  };

    return (
        <Bar data={data} options={options} />
    );
}

export default Hours;*/
