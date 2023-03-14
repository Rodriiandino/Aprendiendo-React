import './App.css'
import { UseEffect } from './components/useEffect'

function App() {
  return (
    <div className='App'>
      <div>
        <h1>08_useEffect</h1>
        <p>
          El hook useEffect se usa para ejecutar código cuando se renderiza el
          componente o cuando cambian las dependencias del efecto.
        </p>
        <h2>Recibe dos parámetros:</h2>
        <ul>
          <li>
            La función que se ejecutará al cambiar las dependencias o al
            renderizar el componente.
          </li>
          <li>
            Un array de dependencias. Si cambia el valor de alguna dependencia,
            ejecutará la función.
          </li>
        </ul>
        <UseEffect />
        <h3>Codigo de Limpieza</h3>
        <p>
          En la configuracion del useEffect, tiene que haber un return, el cual
          se usara como codigo de limpieza.
        </p>
        <p>
          El código de limpieza se especifica en la función de retorno del
          useEffect. Cuando el componente se desmonta, React ejecuta la función
          de retorno para limpiar cualquier efecto secundario que se haya creado
          durante la fase de montaje.
        </p>
        <p>
          Por ejemplo, si te suscribes a un evento utilizando el useEffect,
          debes cancelar la suscripción en la función de retorno para evitar
          fugas de memoria o errores posteriores. Si no cancelas la suscripción,
          el evento seguirá escuchándose incluso después de que el componente se
          haya desmontado.
        </p>
        <h3>Datos</h3>
        <p>
          Si el <strong>useEffect</strong> no tiene dependencia ¡se volvera a
          ejecutar después de cada renderización!
        </p>
        <p>
          Si el <strong>useEffect</strong> tiene dependencia pero este esta
          vacio ¡se ejecutar solo una vez!
        </p>
      </div>
      <p className='read-the-docs'>08_useEffect</p>
    </div>
  )
}

export default App
