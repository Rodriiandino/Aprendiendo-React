import { createContext, useReducer } from 'react'
import { modalReducer } from '../components/ModalReducer'
import PropTypes from 'prop-types'

export const ModalContext = createContext()

export const ModalProvider = ({ children }) => {
  const initialState = {
    showModal: false,
    isEdit: false,
    userToEdit: null
  }

  const [modalState, dispatch] = useReducer(modalReducer, initialState)

  return (
    <ModalContext.Provider value={{ modal: modalState, dispatch }}>
      {children}
    </ModalContext.Provider>
  )
}

ModalProvider.propTypes = {
  children: PropTypes.node.isRequired
}
