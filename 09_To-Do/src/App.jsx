import './App.css'
import AddTodo from './components/AddTodo'
import CardTodo from './components/CardTodo'
import Footer from './components/Footer'
import { saveToDo, delteteFromStores } from './components/Storage'
import { useState } from 'react'

function App() {
  // "init" donde se almacenara el array de objetos
  const init = []

  // "toDo" es el array de objetos
  const [toDo, setToDo] = useState(() => {
    const toDoFromStores = window.localStorage.getItem('toDo')
    return toDoFromStores ? JSON.parse(toDoFromStores) : init
  })

  // "handleAddTodo" es la funcion que se encarga de agregar un nuevo objeto al array
  const handleAddTodo = (id, title, description, level) => {
    const newToDo = {
      id,
      title,
      description,
      level
    }

    setToDo([...toDo, newToDo])

    saveToDo({
      toDo: [...toDo, newToDo]
    })
  }

  // "handleDeleteCard" es la funcion que se encarga de eliminar un objeto del array
  const handleDeleteCard = id => {
    setToDo(toDo.filter(toDo => toDo.id !== id))

    delteteFromStores({
      toDo: toDo.filter(toDo => toDo.id !== id)
    })
  }

  return (
    <>
      <h1 className='title'>To-Do</h1>
      <main>
        <AddTodo onAddTodo={handleAddTodo} />

        <section className='container'>
          <CardTodo toDo={toDo} onDeleteCard={handleDeleteCard} />
        </section>
      </main>
      <Footer />
    </>
  )
}

export default App
