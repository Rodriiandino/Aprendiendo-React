import { useContext } from 'react'
import { ModalContext } from '../context/modal'
import { UsersContext } from '../context/users'
import { useModal } from './hooks/useModal'
import { saveUsers } from './utils/storage'
import EditUser from './EditUser'
import AddUser from './AddUser'

export default function Modal() {
  const { modal } = useContext(ModalContext)
  const { users, setUsers } = useContext(UsersContext)

  const { showModal, isEdit, userToEdit } = modal

  const { handleCloseModal } = useModal()

  const handleAddUser = (id, name, email, role) => {
    const newUser = {
      id,
      name,
      email,
      role
    }

    setUsers([...users, newUser])
    saveUsers([...users, newUser])
    handleCloseModal()
  }

  const handleUpdateUser = (id, name, email, role) => {
    const editedUser = {
      id,
      name,
      email,
      role
    }

    const newUsers = users.map(user => (user.id === id ? editedUser : user))

    setUsers(newUsers)
    saveUsers(newUsers)
    handleCloseModal()
  }

  return (
    <>
      {showModal && (
        <section className='modal'>
          <div className='modal__content'>
            <div className='modal__header'>
              {isEdit ? <h2>Edit User</h2> : <h2>Add New User</h2>}
              <button className='btn__close' onClick={handleCloseModal}>
                X
              </button>
            </div>
            <div className='modal__body'>
              {isEdit ? (
                <EditUser
                  onEditUser={handleUpdateUser}
                  userToEdit={userToEdit}
                />
              ) : (
                <AddUser onAddUser={handleAddUser} />
              )}
            </div>
          </div>
        </section>
      )}
    </>
  )
}
