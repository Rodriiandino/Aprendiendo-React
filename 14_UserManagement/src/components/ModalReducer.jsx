import { actionTypes } from './utils/actionsType'

// State es el estado actual del reducer
// { showModal: false, isEdit: false, userToEdit: null }

// Action es la acción que se va a ejecutar
// Action es un objeto que tiene una propiedad type, y opcionalmente puede tener una propiedad payload
// type es un string que describe la acción que se va a ejecutar
// payload es un objeto que contiene la información que se va a enviar al reducer

export function modalReducer(state, action) {
  switch (action.type) {
    case actionTypes.SHOW_MODAL:
      return { ...state, showModal: true, isEdit: false, userToEdit: null }
    case actionTypes.HIDE_MODAL:
      return { ...state, showModal: false, isEdit: false, userToEdit: null }
    case actionTypes.START_EDIT_USER:
      return {
        ...state,
        showModal: true,
        isEdit: true,
        userToEdit: action.payload
      }
    default:
      throw new Error(`Unhandled action type: ${action.type}`)
  }
}
