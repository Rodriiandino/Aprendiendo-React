import { useState } from 'react';
import reactLogo from './assets/react.svg';
import ComponenteClase from './components/ComponenteClases';
import ComponeteFuncionDeclarada from './components/ComponenteFuncion';
import { ComponeteFuncionExpresada } from './components/ComponenteFuncion';
import Propiedades from './components/Propiedades';
import Estado from './components/Estado';
import './App.css';

function App() {
  const [count, setCount] = useState(0);

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
      <h1>Curso React</h1>
      <section>
        <h2>JSX</h2>
        <p>
          JSX es una extensión de React para la sintaxis del lenguaje JavaScript
          que proporciona una forma de estructurar la representación de
          componentes utilizando una sintaxis familiar para muchos
          desarrolladores. Es similar en apariencia a HTML.
        </p>
      </section>
      <hr />
      <section>
        <h2>Componentes</h2>
        <p>
          En React se introduce el concepto de componentes para crear la
          interfaz gráfica de nuestra aplicación. Permiten separar el código y
          los elementos de la interfaz en pequeñas piezas independientes y
          reutilizables que estarán aisladas una de otras. El objetivo es que
          cada componente sea independiente y encapsule su marcado, estilos y
          estado.
        </p>
        <h3>Componente de Clase</h3>
        <p>Como una clase que extiende de Component con un método render:</p>
        <ComponenteClase></ComponenteClase>
        <ComponenteClase />
        <h3>Componente Funcion</h3>
        <ComponeteFuncionDeclarada />
        <ComponeteFuncionExpresada />
      </section>
      <hr />
      <section>
        <h2>Propiedades</h2>
        <p>
          Son valores que recibe un componente hijo de uno padre. Se agrupan en
          un objeto llamado props, el cual puede recibir diferentes tipos de
          datos
        </p>
        <Propiedades
          cadena="Esto es una cadena de texto"
          numero={19}
          booleano={true}
          arreglo={[1, 2, 3]}
          objeto={{ nombre: 'Jon', correo: 'jonmircha@gmail.com' }}
          funcion={(num) => num * num}
          elementoReact={<i>Esto es un elemento React</i>}
          componenteReact={<ComponenteClase />}
        />
      </section>
      <hr />
      <section>
        <h2>Estados</h2>
        <Estado />
      </section>
      <hr />
      <p className="read-the-docs">React Basicos</p>
    </div>
  );
}

export default App;
