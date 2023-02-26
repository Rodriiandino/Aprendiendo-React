import reactLogo from './assets/react.svg'
import Propiedades from './components/Propiedades'
import ComponeteFuncionDeclarada from './components/ComponenteFuncion'
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
      <h1>02_props</h1>
      <div className='card'>
        <p>
          Son valores que recibe un componente hijo de uno padre. Se agrupan en
          un objeto llamado props, el cual puede recibir diferentes tipos de
          datos
        </p>
        <Propiedades
          cadena='Esto es una cadena de texto'
          numero={19}
          booleano={true}
          arreglo={[1, 2, 3]}
          objeto={{ nombre: 'Jon', correo: 'jonmircha@gmail.com' }}
          funcion={num => num * num}
          elementoReact={<i>Esto es un elemento React</i>}
          componenteReact={<ComponeteFuncionDeclarada />}
        />
      </div>
      <p className='read-the-docs'>02_props</p>
    </div>
  )
}

export default App
