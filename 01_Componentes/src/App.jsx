import reactLogo from './assets/react.svg';
import ComponenteClase from './components/ComponenteClases';
import ComponeteFuncionDeclarada from './components/ComponenteFuncion';
import { ComponeteFuncionExpresada } from './components/ComponenteFuncion';
import { MyButton } from './components/Button';
import Profile from './components/avatar';
import './App.css';

function App() {
  return (
    <div className="App">
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src="/vite.svg" className="logo" alt="Vite logo" />
        </a>
        <a href="https://reactjs.org" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>01_Componentes</h1>
      <div className="card">
        <p>
          En React se introduce el concepto de componentes para crear la
          interfaz gráfica de nuestra aplicación. Permiten separar el código y
          los elementos de la interfaz en pequeñas piezas independientes y
          reutilizables que estarán aisladas una de otras. El objetivo es que
          cada componente sea independiente y encapsule su marcado, estilos y
          estado.
        </p>
        <h3 className="title-one">Componente de Clase</h3>
        <p>Como una clase que extiende de Component con un método render:</p>
        <ComponenteClase></ComponenteClase>
        <ComponenteClase />
        <h3 className="title-two">Componente Funcional</h3>
        <ComponeteFuncionDeclarada />
        <ComponeteFuncionExpresada />
      </div>
      <h3 className="title-btn">Componente Botón</h3>
      <MyButton />
      <h3 className="title-two">Un componente más largo "Usando un objeto"</h3>
      <Profile />
      <p className="read-the-docs">01_Componentes</p>
    </div>
  );
}

export default App;
