export const Square = ({ value, onHandleClick }) => {
  // Creo una funcion "square" donde recibira 2 parametros
  // "value" Sera el atributo que imprimira el boton
  // "onHandleClick" es una props que representa eventos
  // en este caso representa una funcial la cual cambiara el valor del atrubito "value" cuando el boton se aprete
  return (
    <button className='square' data-testid='square' onClick={onHandleClick}>
      {value}
    </button>
  )
}
