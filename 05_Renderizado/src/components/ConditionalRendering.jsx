const ButtonFollow = ({ following }) => {
  let isFollowing
  following ? (isFollowing = 'Dejar de seguir') : (isFollowing = 'seguir')
  // Dependiendo el valor que se le asigne al "following"
  // El valor del isFollowing cambiara
  // Por lo que cambiara el contenido del Botón

  return <button>{isFollowing}</button>
  // El botón Imprime el contedico del "isFollowing"
}

export const ConditionalRendering = () => {
  const boolean = true
  // El valor del "follwing" dependera que booleano se le asigne a la propiedad "boolean"
  return <ButtonFollow following={boolean} />
}
