import './App.css';
import Temp from './componentes/Temp.js';
import UvIndex from './componentes/UvIndex.js';
import Wind from './componentes/Wind.js';
import Sunrise from './componentes/Sunrise.js';
import Humidity from './componentes/Humidity.js'
import Visibility from './componentes/Visibility';
import Air from './componentes/Air';

function App() {
  return (
    <div className="App">
      <header className="App-header">
      <h1>Córdoba</h1>
      <h2>Hoy</h2>
      <h2>Información destacada</h2>
      <Temp />
      <UvIndex />
      <Wind />
      <Sunrise />
      <Humidity />
      <Visibility />
      <Air />
      </header>
    </div>
  );
}

export default App;
