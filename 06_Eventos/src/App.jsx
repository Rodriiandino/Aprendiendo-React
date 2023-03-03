import './App.css'
import EventosES6 from './components/ES6-Binding'
import EventosES7 from './components/ES7'
import { Eventos } from './components/EventosNativosPersonalizados'

function App() {
  return (
    <div className='App'>
      <div>
        <h1>06_Eventos</h1>
        <p>
          Manejar eventos en React es muy similar a manejar eventos en el DOM.
          Sin embargo existen algunas diferencias de sintaxis:
        </p>
        <ul>
          <li>
            Los eventos de React se nombran usando camelCase, en vez de
            minúsculas.
          </li>
          <li>
            JSX pasas una función como el manejador del evento, en vez de un
            string.
          </li>
        </ul>
        <EventosES6 />
        <p>
          En ES6 para poder usar un metodo para variar el estado que se hacia en
          el constructor se tenia que vicular el metodo con el "this" Este hace
          referencia a la propias propiedades de las clases "hace referencia al
          objeto en cuestión" Para vincular al metodo con la clase se utiliza el
          metodo "bind" El cual se utilizara dentro del constructor
        </p>
        <hr />
        <EventosES7 />
        <p>
          Apartir de ES7 ya no es necesario utilizar el constructor para
          declarar el estado Y tampoco el bind en el metodo Eso es porque la
          arrow functions hace referencia ya al this de la clase y no el global
        </p>
        <hr />
        <Eventos />
      </div>
      <p className='read-the-docs'>06_Eventos</p>
    </div>
  )
}

export default App
