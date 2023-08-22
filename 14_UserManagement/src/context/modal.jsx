import { createContext, useState } from 'react'
import PropTypes from 'prop-types'

export const ModalContext = createContext()

export const ModalProvider = ({ children }) => {
  const [modal, setModal] = useState({
    showModal: false,
    isEdit: false,
    userToEdit: null
  })

  return (
    <ModalContext.Provider value={{ modal, setModal }}>
      {children}
    </ModalContext.Provider>
  )
}

ModalProvider.propTypes = {
  children: PropTypes.node.isRequired
}
