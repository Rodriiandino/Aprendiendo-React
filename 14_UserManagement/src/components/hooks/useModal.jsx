import { useContext } from 'react'
import { ModalContext } from '../../context/modal.jsx'
import { actionTypes } from '../utils/actionsType.js'

export function useModal() {
  // dispatch es una función que permite ejecutar las acciones que definimos en el reducer
  // dispatch recibe como parámetro un objeto que tiene una propiedad type, y opcionalmente puede tener una propiedad payload
  const { dispatch } = useContext(ModalContext)

  const handleShowModal = () => {
    dispatch({ type: actionTypes.SHOW_MODAL })
  }

  const handleCloseModal = () => {
    dispatch({ type: actionTypes.HIDE_MODAL })
  }

  const handleStartEditUser = user => {
    dispatch({ type: actionTypes.START_EDIT_USER, payload: user })
  }

  return {
    handleShowModal,
    handleCloseModal,
    handleStartEditUser
  }
}
