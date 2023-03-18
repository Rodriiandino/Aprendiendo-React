import { useState } from 'react'

export default function AddTodo({ onAddTodo }) {
  const [inputValue, setInputValue] = useState({
    title: '',
    description: '',
    level: ''
  })

  const handleSubmit = e => {
    e.preventDefault()
    onAddTodo(inputValue.title, inputValue.description, inputValue.level)
    setInputValue({ title: '', description: '', level: '' })
  }

  return (
    <>
      <section className='container-form'>
        <form className='card-form' onSubmit={handleSubmit}>
          <label>
            <input
              type='text'
              value={inputValue.title}
              onChange={e =>
                setInputValue({ ...inputValue, title: e.target.value })
              }
              required
            />
          </label>
          <label>
            <input
              type='text'
              value={inputValue.description}
              onChange={e =>
                setInputValue({ ...inputValue, description: e.target.value })
              }
            />
          </label>
          <label>
            <input
              type='text'
              value={inputValue.level}
              onChange={e =>
                setInputValue({ ...inputValue, level: e.target.value })
              }
            />
          </label>
          <button type='submit'>ToDo</button>
        </form>
      </section>
    </>
  )
}
