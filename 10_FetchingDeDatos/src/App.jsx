import './App.css'
import { useEffect, useState } from 'react'

const jsonUser = 'https://jsonplaceholder.typicode.com/users'
const catFact = 'https://catfact.ninja/fact'

function App() {
  const [user, setUser] = useState()
  const [fact, setFact] = useState()

  useEffect(() => {
    // Se ejecuta cuando se monta el componente
    fetch(jsonUser) // Se hace fetch de la url
      .then(res => res.json()) // Se convierte a json
      .then(
        (
          user // Se obtiene el json
        ) => {
          const users = user.map(user => <li key={user.id}>{user.username}</li>) // Se mapea el json
          setUser(users) // Se setea el estado
        }
      )
  }, []) // La dependecia es un array vacio para que solo se ejecute una vez
  // NO OLVIDAR DE COLOCAR DEPENDENCIA!!

  // Usando async await
  useEffect(() => {
    async function getCatFact() {
      const res = await fetch(catFact)
      const data = await res.json()
      const { fact } = data // Se obtiene el dato de la propiedad fact, usando destructuracion
      setFact(fact)
    }
    getCatFact()
  }, [])

  return (
    <div className='App'>
      <main>
        <h1>10_FetchingDeDatos</h1>
        <p>
          Para hacer Fetching de datos, en react se usa <strong>effect</strong>
        </p>
        {user && <ul>{user}</ul>} {/* Se valida que el estado tenga datos */}
        {fact && <p>{fact}</p>}
      </main>
      <p className='read-the-docs'>10_FetchingDeDatos</p>
    </div>
  )
}

export default App
