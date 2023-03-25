export const saveToDo = ({ toDo }) => {
  window.localStorage.setItem('toDo', JSON.stringify(toDo))
}

export const resetGameFromStores = () => {
  window.localStorage.removeItem('squares')
}
