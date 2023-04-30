import './App.css'
import { useEffect, useState } from 'react'
import mocksResponse from './mocks/success.json'
import { Plants } from './components/Plants'
import Footer from './components/Footer'

function App() {
  const KEY_PLANT = '9Rt6BMZNiG_JKQKJV8a_pGQglKYQxY1ZZQ-X1cRvjhw'
  const [search, setsearch] = useState('')
  const [error, seterror] = useState(null)
  const plants = mocksResponse.data

  // "?"" significa que si plants es null o undefined, no se rompa el codigo

  const handleClick = e => {
    e.preventDefault()
    console.log(search)
  }

  useEffect(() => {
    if (search === '') {
      seterror('Debes ingresar un valor')
      return
    }
    seterror(null)
  }, [search])

  return (
    <>
      <header>
        <h1>Buscador de Plantas</h1>
        <form onClick={handleClick}>
          {error ? <p style={{ color: 'red' }}>{error}</p> : null}
          <input
            style={{ border: error ? '1px solid red' : 'none' }}
            type='search'
            value={search}
            onChange={e => setsearch(e.target.value)}
            placeholder='sunflower, nacar...'
          />
          <button type='submit'>Buscar</button>
        </form>
      </header>
      <main>
        <Plants plants={plants} />
      </main>

      <Footer />
    </>
  )
}

export default App
