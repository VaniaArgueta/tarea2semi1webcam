import logo from './logo.svg';
import './App.css';
import Camara from './components/Camara'
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Vania Argueta - 201213487
        </p>
        <p>
          Laboratorio Seminario de Sistemas 1
        </p>
        <Camara/>

      </header>
    </div>
  );
}

export default App;
