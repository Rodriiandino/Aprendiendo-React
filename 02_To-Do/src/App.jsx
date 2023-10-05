import './App.css'
import AddTodo from './components/AddTodo'
import CardTodo from './components/CardTodo'
import Footer from './components/Footer'
import { saveToDo } from './components/Storage'
import { useState } from 'react'

function App() {
  const init = []

  const [toDo, setToDo] = useState(() => {
    const toDoFromStores = window.localStorage.getItem('toDo')
    return toDoFromStores ? JSON.parse(toDoFromStores) : init
  })

  const handleAddTodo = (id, title, description, level) => {
    const newToDo = {
      id,
      title,
      description,
      level,
      completed: false
    }

    setToDo([...toDo, newToDo])

    saveToDo({
      toDo: [...toDo, newToDo]
    })
  }

  const handleDeleteCard = id => {
    setToDo(toDo.filter(toDo => toDo.id !== id))

    saveToDo({
      toDo: toDo.filter(toDo => toDo.id !== id)
    })
  }

  const handleCompletedTodo = id => {
    const completedToDo = toDo.find(toDo => toDo.id === id)
    completedToDo.completed = !completedToDo.completed

    const newToDo = toDo.filter(toDo => toDo.id !== id)

    if (completedToDo.completed) {
      newToDo.push(completedToDo)
    } else {
      newToDo.unshift(completedToDo)
    }

    setToDo(newToDo)
    saveToDo({ toDo: newToDo })
  }

  return (
    <>
      <h1 className='title'>To-Do</h1>
      <main>
        <AddTodo onAddTodo={handleAddTodo} />

        <section className='container'>
          <CardTodo
            toDo={toDo}
            onCompletedTodo={handleCompletedTodo}
            onDeleteCard={handleDeleteCard}
          />
        </section>
      </main>
      <Footer />
    </>
  )
}

export default App
