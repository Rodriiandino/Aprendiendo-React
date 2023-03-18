import './App.css'
import AddTodo from './components/AddTodo'
import { useState } from 'react'

function App() {
  const init = []

  const [toDo, setToDo] = useState(init)

  function handleAddTodo(title, description, level) {
    setToDo([
      ...toDo,
      {
        title,
        description,
        level
      }
    ])
  }

  return (
    <>
      <h1 className='title'>To-Do</h1>
      <main>
        <AddTodo onAddTodo={handleAddTodo} />

        <section className='container'>
          <header>
            <p>{toDo.title}</p>
            <p>{toDo.level}</p>
          </header>
          <div>
            <p>{toDo.description}</p>
          </div>
          <footer>
            <button>Delete</button>
          </footer>
        </section>
      </main>
    </>
  )
}

export default App
