import './App.css'
import { Fetch } from './components/Fetch'
import { Input } from './components/Input'

function App() {
  return (
    <div className='App'>
      <div>
        <h1>11_CustomHooks</h1>
        <p>
          Los custom Hook, son hook que cumplen un propósito más específico.
        </p>
        <p>Un Ejemplo es que haya un hook que haga peticiones a una api.</p>
        <p>
          Un hook personalizado es una función que empieza con la palabra use y
          que puede utilizar otros hooks. Son ideales para reutilizar lógica en
          diferentes componentes.
        </p>
        <Fetch />
        <p>
          En esta peticion se hace atraves del un custom hook, llamado useFetch
        </p>
        <Input />
        <p>
          En este cambio de valor se hace atraves del un custom hook, llamado
          useFetch
        </p>
      </div>
      <p className='read-the-docs'>11_CustomHooks</p>
    </div>
  )
}

export default App
