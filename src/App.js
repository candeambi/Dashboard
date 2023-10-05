import './App.css';
import Temp from './componentes/Temp.js';
import Details from './componentes/Details';
import Hours from './componentes/Hours';
import styled from 'styled-components';

const DashboardContainer = styled.div`
  display: grid;
  grid-template-columns: 30% 70%; /* Columna 1: 30%, Columna 2: 70% */
  gap: 20px;
  padding: 20px;
  background-color: #0b83b3;
  color: #fff;
`;

const Temperature= styled.div`
  grid-column: 1 / 2; 
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

const Information = styled.div`
  grid-column: 2 / 3; 
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

function App() {
  return (
    <DashboardContainer>
            <h1>Córdoba, Argentina</h1>
      <Temperature>
        <Temp />
      </Temperature>
      <Information>
        <h2>Hoy</h2>
        <Hours />
        <h2>Información destacada</h2>
        <Details />
      </Information>
    </DashboardContainer>
  );
}

export default App;
