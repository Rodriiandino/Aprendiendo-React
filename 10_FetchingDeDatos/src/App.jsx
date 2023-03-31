import './App.css'
import { useEffect, useState } from 'react'
import { getUsers, getCatFact } from './components/logica'

function App() {
  const [user, setUser] = useState()
  const [fact, setFact] = useState()

  useEffect(() => {
    // Se ejecuta cuando se monta el componente
    getUsers().then(users => setUser(users)) // Se ejecuta la funcion que retorna una promesa y se setea el estado
  }, []) // La dependecia es un array vacio para que solo se ejecute una vez
  // NO OLVIDAR DE COLOCAR DEPENDENCIA!!

  // Usando async await
  useEffect(() => {
    getCatFact().then(fact => setFact(fact)) // Se ejecuta la funcion que retorna una promesa y se setea el estado
  }, [])

  // Otra fomarma de hacerlo
  const handleNewFact = async () => {
    const newFact = await getCatFact() // Se ejecuta la funcion que retorna una promesa y se setea el estado
    setFact(newFact)
  }

  return (
    <div className='App'>
      <main>
        <h1>10_FetchingDeDatos</h1>
        <p>
          Para hacer Fetching de datos, en react se usa <strong>effect</strong>
        </p>
        {user && <ul>{user}</ul>} {/* Se valida que el estado tenga datos */}
        {fact && <p>{fact}</p>}
        <button onClick={handleNewFact}>New Fact</button>
      </main>
      <p className='read-the-docs'>10_FetchingDeDatos</p>
    </div>
  )
}

export default App
