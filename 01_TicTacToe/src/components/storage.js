export const saveGame = ({ squares, turn, winner }) => {
  window.localStorage.setItem('squares', JSON.stringify(squares))
  window.localStorage.setItem('turn', turn)
  window.localStorage.setItem('winner', winner)
}

export const resetGameFromStores = () => {
  window.localStorage.removeItem('squares')
  window.localStorage.removeItem('turn')
  window.localStorage.removeItem('winner')
}
