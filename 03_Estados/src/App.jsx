import reactLogo from './assets/react.svg'
import State from './components/CounterState'
import MyButton from './components/ButtonState'
import SharingButton from './components/SharingButtonState'
import './App.css'

function App() {
  return (
    <div className='App'>
      <div>
        <a href='https://vitejs.dev' target='_blank' rel='noreferrer'>
          <img src='/vite.svg' className='logo' alt='Vite logo' />
        </a>
        <a href='https://reactjs.org' target='_blank' rel='noreferrer'>
          <img src={reactLogo} className='logo react' alt='React logo' />
        </a>
      </div>
      <h1>03_estados</h1>
      <p>
        Si quieres que un componete recuerde cierta informacion, Por ejemplo,
        tal vez desee contar la cantidad de veces que se hace clic en un botón.
        Para hacer esto, agregue el estado a su componente.
      </p>
      <p>
        <strong>Primero, importa "useState" desde React</strong>
      </p>
      <p>
        Obtendrá dos cosas de useState: el estado actual (count) y la función
        que le permite actualizarlo (setCount). Puede darles cualquier nombre,
        pero la convención es llamarlos como [algo, ponerAlgo].
      </p>
      <div className='card'>
        <MyButton />
        <p>Cada Boton recuerda su propio estado de conteo</p>
        <p>La Funciones que empiezan con "use" son llamas "Hooks"</p>
        <p>
          Sin embargo, a menudo necesitará componentes para compartir datos y
          actualizarlos siempre juntos.
        </p>
        <p>
          Para que ambos componentes MyButton muestren el mismo recuento y se
          actualicen juntos, debe mover el estado de los botones individuales
          "hacia arriba" al componente más cercano que los contenga a todos.
        </p>
        <SharingButton />
        <State />
      </div>
      <p className='read-the-docs'>03_estados</p>
    </div>
  )
}

export default App
