import React from 'react';
import styled from 'styled-components';
import Day from "../icons/clear-day.svg";
import ClearNight from '../icons/clear-night.svg';
import Night from "../icons/moon-first-quarter.svg";
import Cloudy from "../icons/cloudy.svg";
import Fog from "../icons/fog.svg";
import Drizzle from "../icons/drizzle.svg";
import Rain from "../icons/rain.svg";
import PartlyCloudy from "../icons/partly-cloudy-day.svg";
import PartlyCloudyNight from '../icons/partly-cloudy-night.svg';
import Sleet from "../icons/sleet.svg";
import Snow from "../icons/snow.svg";
import ThunderstormRain from "../icons/thunderstorms-rain.svg";
import ThunderstormSnow from "../icons/thunderstorms-snow.svg";
import ElectricThunderstorm from "../icons/thunderstorms.svg";

/* Estilos*/
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

const Date = styled.p`
    font-size: small;
`

function Temp ({weatherData}){

    /* Declaro constantes del json*/
    const tempUnit = weatherData.daily_units.temperature_2m_max;
    const getMax = weatherData.daily.temperature_2m_max;
    const max = Math.max(...getMax);
    const getMin = weatherData.daily.temperature_2m_min;
    const min = Math.min(...getMin);
    const weathercode = weatherData.current_weather.weathercode;
    const actualHour = String(weatherData.current_weather.time).slice(-5)
    const day = String(weatherData.current_weather.time).slice(8, 10);
    const month = String(weatherData.current_weather.time).slice(5, 7);
    const year = String(weatherData.current_weather.time).slice(0, 4);
    const actualDate = `${day}-${month}-${year}`;
    const actualTemp = weatherData.current_weather.temperature;
    const getSunriseHour = weatherData.daily.sunrise[0];
    const sunriseHour = String(getSunriseHour).slice(-5);
    const getSunsetHour = weatherData.daily.sunset[0];
    const sunsetHour = String(getSunsetHour).slice(-5);

    const tempCode = () => {
        if (weathercode === 0){
            if (actualHour >= sunriseHour && actualHour < sunsetHour){
                return (
                    <>
                        <p>Despejado</p>
                        <img src={Day} alt="Icono de sol" width={'130px'}/>
                    </>
                );
            } else { 
                return (
                    <>
                        <p>Despejado</p>
                        <img src={ClearNight} alt="Icono de luna" width={'130px'}/>
                    </>
                );
            }
        } else if (weathercode === 1){
            if (actualHour >= sunriseHour && actualHour < sunsetHour){
                return (
                    <>
                        <p>Mayormente despejado</p>
                        <img src={Day} alt="Icono de sol" width={'130px'} />
                    </>
                );
            } else {
                return (
                    <>
                        <p>Mayormente despejado</p>
                        <img src={ClearNight} alt="Icono de luna" width={'130px'} />
                    </>
                );
            }
        } else if (weathercode === 2){
            if (actualHour >= sunriseHour && actualHour < sunsetHour){
                return (
                    <>
                        <p>Parcialmente nublado</p>
                        <img src={PartlyCloudy} alt="Icono de sol parcialmente nublado" width={'130px'}/>
                    </>
                );
            } else {
                return (
                    <>
                        <p>Parcialmente nublado</p>
                        <img src={PartlyCloudyNight} alt="Icono de luna parcialmente nublada" width={'130px'}/>
                    </>
                );
            }
        } else if (weathercode === 3){
            return (
                <>
                    <p>Nublado</p>
                    <img src={Cloudy} alt="Icono de nube" width={'130px'} />
                </>
            );
        } else if (weathercode === 45){
             return (
                <>
                    <p>Niebla</p>
                    <img src={Fog} alt="Icono de niebla" width={'130px'} />
                </>
            );
        } else if (weathercode === 46){
             return (
                <>
                    <p>Niebla con escarcha</p>
                    <img src={Fog} alt="Icono de niebla" width={'130px'} />
                </>
            );
        } else if (weathercode === 51){
            return (
                <>
                    <p>Llovizna ligera</p>
                    <img src={Drizzle} alt="Icono de llovizna" width={'130px'} />
                </>
            );
        } else if (weathercode === 53){
            return (
                <>
                    <p>Llovizna moderada</p>
                    <img src={Drizzle} alt="Icono de llovizna" width={'130px'} />
                </>
            );
        } else if (weathercode === 55){
            return (
                <>
                    <p>Llovizna intensa</p>
                    <img src={Drizzle} alt="Icono de llovizna" width={'130px'} />
                </>
            );
        } else if (weathercode === 56){
            return (
                <>
                    <p>Escarcha ligera</p>
                    <img src={Sleet} alt="Icono de escarcha" width={'130px'} />
                </>
            );
        } else if (weathercode === 57){
            return (
                <>
                    <p>Escarcha densa</p>
                    <img src={Sleet} alt="Icono de escarcha" width={'130px'} />
                </>
            );
        } else if (weathercode === 61){
            return (
                <>
                    <p>Lluvia ligera</p>
                    <img src={Rain} alt="Icono de lluvia" width={'130px'} />
                </>
            );
        } else if (weathercode === 63){
            return (
                <>
                    <p>Lluvia moderada</p>
                    <img src={Rain} alt="Icono de lluvia" width={'130px'} />
                </>
            );
        } else if (weathercode === 65){
            return (
                <>
                    <p>Lluvia intensa</p>
                    <img src={Rain} alt="Icono de lluvia" width={'130px'} />
                </>
            );
        } else if (weathercode === 66){
            return (
                <>
                    <p>Lluvia fria, ligera</p>
                    <img src={Rain} alt="Icono de lluvia" width={'130px'} />
                </>
            );
        } else if (weathercode === 67){
            return (
                <>
                    <p>Lluvia fria, intensa</p>
                    <img src={Rain} alt="Icono de lluvia" width={'130px'} />
                </>
            );
        } else if (weathercode === 71){
            return (
                <>
                    <p>Nevada ligera</p>
                    <img src={Snow} alt="Icono de nieve" width={'130px'} />
                </>
            );
        } else if (weathercode === 73){
            return (
                <>
                    <p>Nevada moderada</p>
                    <img src={Snow} alt="Icono de nieve" width={'130px'} />
                </>
            );
        } else if (weathercode === 75){
            return (
                <>
                    <p>Nevada intensa</p>
                    <img src={Snow} alt="Icono de nieve" width={'150px'} />
                </>
            );
        } else if (weathercode === 77){
            return (
                <>
                    <p>Aguanieve</p>
                    <img src={Snow} alt="Icono de nieve" width={'130px'} />
                </>
            );
        } else if (weathercode === 80){
            return (
                <>
                    <p>Tormenta ligera</p>
                    <img src={ThunderstormRain} alt="Icono de tormenta con lluvia" width={'130px'} />
                </>
            );
        } else if (weathercode === 81){
            return (
                <>
                    <p>Tormenta moderada</p>
                    <img src={ThunderstormRain} alt="Icono de tormenta con lluvia" width={'130px'} />
                </>
            );
        } else if (weathercode === 82){
            return (
                <>
                    <p>Tormenta fuerte</p>
                    <img src={ThunderstormRain} alt="Icono de tormenta con lluvia" width={'130px'} />
                </>
            );
        } else if (weathercode === 85){
            return (
                <>
                    <p>Tormenta de nieve, moderada</p>
                    <img src={ThunderstormSnow} alt="Icono de tormenta con nieve" width={'130px'} />
                </>
            );
        } else if (weathercode === 86){
            return (
                <>
                    <p>Tormenta de nieve, fuerte</p>
                    <img src={ThunderstormSnow} alt="Icono de tormenta con nieve" width={'130px'} />
                </>
            );
        } else if (weathercode === 95){
            return (
                <>
                    <p>Tormenta electrica</p>
                    <img src={ElectricThunderstorm} alt="Icono de tormenta electrica" width={'130px'} />
                </>
            );
        } else if (weathercode === 96){
            return (
                <>
                    <p>Tormenta electrica con granizo ligero</p>
                    <img src={ThunderstormSnow} alt="Icono de tormenta con granizo" width={'130px'} />
                </>
            );
        } else if (weathercode === 99){
            return (
                <>
                    <p>Tormenta electrica con granizo pesado</p>
                    <img src={ThunderstormSnow} alt="Icono de tormenta con granizo" width={'130px'} />
                </>
            );
        } else {
            return (
                <><p>No hay información momentaneamente.</p></>
            )
        }
    }

    const weatherInfo = tempCode(); // Llama a la función para obtener la información del clima

    return(
        <Container>
            <ActualTemp>
                <h1>Córdoba, Argentina</h1>
                <h3>{actualTemp} {tempUnit}</h3>
                {weatherInfo} {/* Renderiza el resultado de la función tempCode */}
                <Date>{actualDate}</Date>
                <Date>Última actualización: {actualHour}</Date>
            </ActualTemp>
            <Max>
                <p>Max</p>
                <h3>{max} {tempUnit}</h3>
                <img src={Day} alt="Max" width={'70px'} />
            </Max>
            <Min>
                <p>Min</p>
                <h3>{min} {tempUnit}</h3>
                <img src={Night} alt="Min" width={'70px'} />
            </Min>
        </Container>
    );
}

export default Temp;