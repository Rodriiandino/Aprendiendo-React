import { useInput } from './hooks/useInput'

export function Input() {
  const input = useInput('')

  const handleSubmit = event => {
    event.preventDefault()
    alert(`El valor del input es: ${input.value}`)
  }
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>
          Ingresa un texto:
          <input type='text' {...input} />{' '}
          {/* ...input es un spread operator */}
        </label>
        <button type='submit'>Enviar</button>
      </form>
    </div>
  )
}
