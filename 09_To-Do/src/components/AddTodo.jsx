import { useState } from 'react'

export default function AddTodo({ onAddTodo }) {
  const [inputValue, setInputValue] = useState({
    id: 0,
    title: '',
    description: '',
    level: 'low'
  })

  const handleSubmit = e => {
    e.preventDefault()
    onAddTodo(
      inputValue.id,
      inputValue.title,
      inputValue.description,
      inputValue.level
    )
    setInputValue({
      id: inputValue.id + 1,
      title: '',
      description: '',
      level: ''
    })
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
              placeholder='Title'
            />
          </label>
          <label>
            <input
              type='text'
              value={inputValue.description}
              onChange={e =>
                setInputValue({ ...inputValue, description: e.target.value })
              }
              required
              placeholder='Description'
            />
          </label>
          <label>
            Level
            <select
              name='combo'
              value={inputValue.level}
              onChange={e =>
                setInputValue({ ...inputValue, level: e.target.value })
              }
            >
              <option value='low'>Low</option>
              <option value='medium'>Medium</option>
              <option value='hard'>Hard</option>
            </select>
          </label>
          <button type='submit'>ToDo</button>
        </form>
      </section>
    </>
  )
}
