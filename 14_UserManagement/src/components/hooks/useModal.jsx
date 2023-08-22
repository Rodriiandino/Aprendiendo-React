import { useContext } from 'react'
import { ModalContext } from '../../context/modal.jsx'

export function useModal() {
  const { modal, setModal } = useContext(ModalContext)

  const handleShowModal = () => {
    setModal({ ...modal, showModal: true, isEdit: false, userToEdit: null })
  }

  const handleCloseModal = () => {
    setModal({ ...modal, showModal: false, isEdit: false, userToEdit: false })
  }

  const handleStartEditUser = user => {
    setModal({ ...modal, showModal: true, isEdit: true, userToEdit: user })
  }

  return {
    handleShowModal,
    handleCloseModal,
    handleStartEditUser
  }
}
