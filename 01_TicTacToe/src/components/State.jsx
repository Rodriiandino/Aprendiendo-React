export const State = ({ winner, newTurn, resetGame }) => {
  let status
  let nextStatus
  let textPlayer

  if (winner) {
    if (winner === 'O') {
      status = <strong className='circle'>'O'</strong>
    } else {
      status = <strong className='cross'>'X'</strong>
    }
    textPlayer = 'El ganador es '
  } else if (winner == null) {
    nextStatus = newTurn === 'X' ? 'X' : 'O'

    if (nextStatus === 'O') {
      status = <strong className='circle'>'O'</strong>
    } else {
      status = <strong className='cross'>'X'</strong>
    }

    textPlayer = 'Siguiente Jugador es '
  } else {
    textPlayer = 'Empate'
  }

  return (
    <>
      <section>
        <h2 className='player'>
          {textPlayer}
          {status}
        </h2>
      </section>
      <footer>
        <button onClick={resetGame}>Empezar de Nuevo</button>
      </footer>
    </>
  )
}
