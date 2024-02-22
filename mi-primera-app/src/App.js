import './App.css';
import Dado from './components/Dado';
import Usuarios from './components/Usuarios';

function App() {
  return (
    <div className="App">
      <header className="App-header">
          <h1>¡Mi primera Chamba!</h1>
          <Dado/>
          <Usuarios/>
      </header>
    </div>
  );
}

export default App;
