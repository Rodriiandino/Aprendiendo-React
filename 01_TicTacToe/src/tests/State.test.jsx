import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { State } from '../components/State'

describe('State component', () => {
  it('should display the winner', () => {
    render(<State winner='X' />)

    const winner = screen.getByText('El ganador es') + screen.getByText("'X'")
    expect(winner).toBeDefined()
  })

  it('should display the next player', () => {
    render(<State newTurn='X' />)

    const nextPlayer =
      screen.getByText('Siguiente Jugador es') + screen.getByText("'X'")
    expect(nextPlayer).toBeDefined()
  })

  it('should display a tie', () => {
    render(<State winner={false} />)

    const tie = screen.getByText('Empate')
    expect(tie).toBeDefined()
  })
})
