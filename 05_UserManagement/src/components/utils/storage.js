export const saveUsers = users => {
  localStorage.setItem('users', JSON.stringify(users))
}

export const saveId = ({ id }) => {
  window.localStorage.setItem('id-users', JSON.stringify(id))
}
