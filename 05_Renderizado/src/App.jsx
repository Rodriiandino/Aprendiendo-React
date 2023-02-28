import './App.css'
import { ConditionalRendering } from './components/ConditionalRendering'
import { ElementRendering } from './components/ElementRendering'

function App() {
  return (
    <div className='App'>
      <div>
        <h1>05_Renderizado</h1>
        <p>
          En React, puedes crear distintos componentes que encapsulan el
          comportamiento que necesitas.
        </p>
        <p>
          Entonces, puedes renderizar solamente algunos de ellos, dependiendo
          del estado de tu aplicación.
        </p>
        <h2>El renderizado condicional</h2>
        <ConditionalRendering />
        <p>
          Puedes usar el condicional if o el operador ternario para crear
          elementos dinámicamente en base al valor del estado o las propiedades
          que recibe el componente.
        </p>
        <h2>El renderizado de elementos</h2>
        <ElementRendering />
        <p>
          Una “key” es un atributo especial de tipo string que debes incluir al
          crear listas de elementos.
        </p>
        <p>
          Las keys ayudan a React a identificar que elementos han cambiado, son
          agregados, o son eliminados. Las keys deben ser dadas a los elementos
          dentro del array para darle una identidad estable.
        </p>
        <p>
          Las keys usadas dentro de arrays deberían ser únicas entre sus
          hermanos. Sin embargo, no necesitan ser únicas globalmente. Podemos
          usar las mismas keys cuando creamos dos o más arrays diferentes.
        </p>
      </div>
      <p className='read-the-docs'>05_Renderizado</p>
    </div>
  )
}

export default App
