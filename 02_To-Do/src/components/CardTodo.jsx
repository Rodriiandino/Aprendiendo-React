export default function CardTodo({ toDo, onCompletedTodo, onDeleteCard }) {
  return (
    <>
      {toDo.map(toDo => (
        <Card
          key={toDo.id}
          toDo={toDo}
          onCompletedTodo={onCompletedTodo}
          onDeleteCard={onDeleteCard}
        />
      ))}
    </>
  )
}

function Card({ toDo, onCompletedTodo, onDeleteCard }) {
  const levelColor = level => {
    const color = {
      low: 'low',
      medium: 'medium',
      high: 'high'
    }
    return color[level]
  }

  return (
    <div
      className='info'
      style={
        toDo.completed
          ? {
              opacity: '0.5',
              textDecoration: 'line-through',
              border: '1px solid #000'
            }
          : {
              opacity: '1',
              textDecoration: 'none'
            }
      }
    >
      <header>
        <span className={levelColor(toDo.level)}>{toDo.level}</span>
        <h3>{toDo.title}</h3>
      </header>
      <div>
        <p>{toDo.description}</p>
      </div>
      <footer>
        <button onClick={() => onCompletedTodo(toDo.id)}>
          {toDo.completed ? 'Completed' : 'Complete'}
        </button>
        <button onClick={() => onDeleteCard(toDo.id)}>Delete</button>
      </footer>
    </div>
  )
}
