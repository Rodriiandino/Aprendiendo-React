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
  return (
    <div className='info'>
      <header>
        {toDo.title} {toDo.level}
      </header>
      <div>{toDo.description}</div>
      <footer>
        <button onClick={() => onDeleteCard(toDo.id)}>Delete</button>
      </footer>
    </div>
  )
}
