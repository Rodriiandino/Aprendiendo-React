import { useState } from 'react'

// la SharingButton() contiene el estado de los botones por eso que al presionar acmbien el estado juntos
export default function SharingButton() {
  const [count, setCount] = useState(0)
  // Con useState le asigno el valor al count

  function handleClick() {
    setCount(count + 1) // Con setCount le cambio el valor al count
  }

  return (
    <div>
      <p>
        <strong>Contadores que se actualizan juntos</strong>
      </p>
      <ActionButton count={count} onClick={handleClick} />
      <ActionButton count={count} onClick={handleClick} />
    </div>
  )
}

function ActionButton({ count, onClick }) {
  return <button onClick={onClick}>Clicked {count} times</button>
}
