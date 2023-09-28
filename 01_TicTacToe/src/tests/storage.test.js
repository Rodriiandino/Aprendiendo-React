import { describe, it, expect } from 'vitest'
import { JSDOM } from 'jsdom'
import { saveGame, resetGameFromStores } from '../components/storage'

const dom = new JSDOM('<!doctype html><html><body></body></html>', {
  url: 'http://localhost'
})

global.window = dom.window

describe('saveGame', () => {
  it('should save the game data to localStorage', () => {
    const squares = ['X', 'O', null, 'O', 'X', null, null, null, null]
    const turn = 'X'
    const winner = null

    saveGame({ squares, turn, winner })

    const savedSquares = JSON.parse(window.localStorage.getItem('squares'))
    const savedTurn = window.localStorage.getItem('turn')
    const savedWinner = JSON.parse(window.localStorage.getItem('winner'))

    expect(savedSquares).toEqual(squares)
    expect(savedTurn).toEqual(turn)
    expect(savedWinner).toEqual(winner)
  })
})

describe('resetGameFromStores', () => {
  it('should remove the game data from localStorage', () => {
    window.localStorage.setItem(
      'squares',
      JSON.stringify(['X', 'O', null, 'O', 'X', null, null, null, null])
    )
    window.localStorage.setItem('turn', 'X')
    window.localStorage.setItem('winner', null)

    resetGameFromStores()

    expect(window.localStorage.getItem('squares')).toBeNull()
    expect(window.localStorage.getItem('turn')).toBeNull()
    expect(window.localStorage.getItem('winner')).toBeNull()
  })
})
