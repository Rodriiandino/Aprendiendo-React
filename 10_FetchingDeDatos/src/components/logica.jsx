const catFact = 'https://catfact.ninja/fact'
const jsonUser = 'https://jsonplaceholder.typicode.com/users'

export const getUsers = () => {
  return fetch(jsonUser) // Se hace fetch de la url
    .then(res => res.json()) // Se convierte a json
    .then(
      (
        user // Se obtiene el json
      ) => {
        const users = user.map(user => <li key={user.id}>{user.username}</li>) // Se mapea el json
        return users // Se retorna el json
      }
    )
}

// Usando async await
export async function getCatFact() {
  const res = await fetch(catFact)
  const data = await res.json()
  const { fact } = data // Se obtiene el dato de la propiedad fact, usando destructuracion
  return fact // Se retorna el dato
}
