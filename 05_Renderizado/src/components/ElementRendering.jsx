import data from '../assets/data.json'

export const ElementRendering = () => {
  const numeros = [1, 2, 3, 4, 5]

  // Tengo un array y este para imprimirlo en pantalla los valores lo recorro con un "map"
  const elementArray = numeros.map((numero, indice) => (
    <li key={indice}>{numero}</li>
  ))
  // Las keys ayudan a React a identificar que elementos han cambiado, son agregados, o son eliminados.
  // Por lo que las key son algo obligatorio que se tiene que añadir cuando se quiere recorrer una lista de elementos.
  // En este caso estoy ussando el indice del array como key unica.

  const userArray = data.Usuarios.map(el => <li key={el.id}>{el.username}</li>)
  // En este caso estoy usarndo el "id" que es un valor unico, como "key"

  return (
    <div>
      <section>
        <h3>Array de numeros</h3>
        <ul>{elementArray}</ul>
      </section>

      <section>
        <h3>Array de Usuarios</h3>
        <ul>{userArray}</ul>
      </section>
    </div>
  )
}
