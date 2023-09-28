import { describe, expect, it } from 'vitest'
import { calculateWinner, checkEndGame } from '../components/endGame'

describe('calculateWinner', () => {
  it('should return X if X has three in a row', () => {
    const squares = ['X', 'O', null, 'X', 'O', null, 'X', null, null]
    expect(calculateWinner(squares)).toBe('X')
  })

  it('should return O if O has three in a row', () => {
    const squares = ['X', 'O', null, 'X', 'O', null, null, 'O', 'X']
    expect(calculateWinner(squares)).toBe('O')
  })

  it('should return null if there is no winner', () => {
    const squares = ['X', 'O', null, 'X', 'O', null, null, null, null]
    expect(calculateWinner(squares)).toBe(null)
  })
})

describe('checkEndGame', () => {
  it('should return true if all squares are filled', () => {
    const squares = ['X', 'O', 'X', 'O', 'X', 'O', 'O', 'X', 'O']
    expect(checkEndGame(squares)).toBe(true)
  })

  it('should return false if there are empty squares', () => {
    const squares = ['X', 'O', null, 'X', 'O', null, null, null, null]
    expect(checkEndGame(squares)).toBe(false)
  })
})
