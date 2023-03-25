export default function CardTodo({ toDo, onDeleteCard }) {
  return (
    <>
      {toDo.map(toDo => (
        <Card key={toDo.id} toDo={toDo} onDeleteCard={onDeleteCard} />
      ))}
    </>
  )
}

function Card({ toDo, onDeleteCard }) {
  const levelColor = level => {
    const color = {
      low: 'low',
      medium: 'medium',
      high: 'high'
    }
    return color[level]
  }

  return (
    <div className='info'>
      <header>
        <span className={levelColor(toDo.level)}>{toDo.level}</span>
        <h3>{toDo.title}</h3>
      </header>
      <div>{toDo.description}</div>
      <footer>
        <button onClick={() => onDeleteCard(toDo.id)}>Delete</button>
      </footer>
    </div>
  )
}
