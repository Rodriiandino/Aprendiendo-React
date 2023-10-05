import { afterEach, beforeEach, describe, expect, it } from 'vitest'
import { render, fireEvent, screen } from '@testing-library/react'
import App from '../App'

describe('Tic Tac Toe Game', () => {
  beforeEach(() => {
    render(<App />)
  })

  afterEach(() => {
    localStorage.clear()
  })

  it('renders Tic Tac Toe title', () => {
    const titleElement = screen.getByText(/TIC-TAC-TOE/i)
    expect(titleElement).toBeDefined()
  })

  it('renders 9 squares', () => {
    const squares = screen.getAllByTestId('square')
    expect(squares.length).toBe(9)
  })

  it('turns in X and O', () => {
    const squares = screen.getAllByTestId('square')

    const xSquare = squares[0]
    const oSquare = squares[1]

    fireEvent.click(xSquare)

    const buttonWithX = screen.getByText('X')

    expect(buttonWithX).toBeDefined()

    fireEvent.click(oSquare)

    const buttonWithO = screen.getByText('O')

    expect(buttonWithO).toBeDefined()
  })

  it('declares a winner X', () => {
    const squares = screen.getAllByTestId('square')
    const xSquare1 = squares[0]
    const oSquare1 = squares[1]
    const xSquare2 = squares[3]
    const oSquare2 = squares[4]
    const xSquare3 = squares[6]

    fireEvent.click(xSquare1)
    fireEvent.click(oSquare1)
    fireEvent.click(xSquare2)
    fireEvent.click(oSquare2)
    fireEvent.click(xSquare3)

    const winner = screen.getByText('El ganador es') + screen.getByText("'X'")
    expect(winner).toBeDefined()
  })

  it('declares a tie', () => {
    const squares = screen.getAllByTestId('square')
    const square1 = squares[0]
    const square2 = squares[1]
    const square3 = squares[2]
    const square4 = squares[3]
    const square5 = squares[4]
    const square6 = squares[5]
    const square7 = squares[6]
    const square8 = squares[7]
    const square9 = squares[8]

    fireEvent.click(square1)
    fireEvent.click(square5)
    fireEvent.click(square9)
    fireEvent.click(square8)
    fireEvent.click(square7)
    fireEvent.click(square3)
    fireEvent.click(square6)
    fireEvent.click(square4)
    fireEvent.click(square2)

    const tie = screen.getByText('Empate')
    expect(tie).toBeDefined()
  })
})
