import { saveIdToDo } from './Storage'
import { useState } from 'react'

export default function AddTodo({ onAddTodo }) {
  const [inputValue, setInputValue] = useState(() => {
    const idFromStores = window.localStorage.getItem('id')

    return {
      id: idFromStores ? JSON.parse(idFromStores) : 0,
      title: '',
      description: '',
      level: 'low'
    }
  })

  const handleSubmit = e => {
    e.preventDefault()
    onAddTodo(
      inputValue.id,
      inputValue.title,
      inputValue.description,
      inputValue.level
    )
    const idFromStores = window.localStorage.getItem('id')
    const newId = JSON.parse(idFromStores) + 1

    saveIdToDo({
      id: newId
    })

    setInputValue({
      id: newId,
      title: '',
      description: '',
      level: 'low'
    })
  }

  return (
    <>
      <section className='container-form'>
        <form className='card-form' onSubmit={handleSubmit}>
          <label>
            <span className='date'>Task?</span>
            <input
              type='text'
              value={inputValue.title}
              onChange={e =>
                setInputValue({ ...inputValue, title: e.target.value })
              }
              required
              placeholder='Title'
            />
          </label>
          <label>
            <span className='date'>Description</span>
            <input
              type='text'
              value={inputValue.description}
              onChange={e =>
                setInputValue({ ...inputValue, description: e.target.value })
              }
              required
              placeholder='Ej: do a to-do'
            />
          </label>
          <label>
            <span className='date'>Level</span>
            <select
              data-testid='select'
              name='level'
              value={inputValue.level}
              onChange={e =>
                setInputValue({ ...inputValue, level: e.target.value })
              }
            >
              <option value='low'>Low</option>
              <option value='medium'>Medium</option>
              <option value='high'>High</option>
            </select>
          </label>
          <button type='submit'>Add</button>
        </form>
      </section>
    </>
  )
}
