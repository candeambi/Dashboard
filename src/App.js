import './App.css';
import Temp from './componentes/Temp.js';
import Details from './componentes/Details';
import Today from './componentes/Today';

function App() {
  return (
    <div className="App">
            <h1>Córdoba</h1>
      <header className="App-header">
      <div className="Today">
        <Temp />
      </div>
      <div className="Informacion">
        <h2>Hoy</h2>
        <Today />
        <h2>Información destacada</h2>
        <Details />
      </div>
      </header>
    </div>
  );
}

export default App;
