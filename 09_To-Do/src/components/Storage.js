export const saveToDo = ({ toDo }) => {
  window.localStorage.setItem('toDo', JSON.stringify(toDo))
}

export const delteteFromStores = ({ toDo }) => {
  window.localStorage.setItem('toDo', JSON.stringify(toDo))
}

export const saveIdToDo = ({ id }) => {
  window.localStorage.setItem('id', JSON.stringify(id))
}
