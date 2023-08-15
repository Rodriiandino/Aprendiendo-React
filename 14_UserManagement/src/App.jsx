import './App.css'
import { useState } from 'react'
import AddUser from './components/AddUser'
import EditUser from './components/EditUser'
import Header from './components/Header'
import ShowUsers from './components/ShowUsers'
import Footer from './components/Footer'

function App() {
  const [showModal, setShowModal] = useState(false)
  const [isEdit, setIsEdit] = useState(false)
  const [userToEdit, setUserToEdit] = useState(null)
  const [users, setUsers] = useState([
    {
      id: 1,
      name: 'John Doe',
      email: 'Jon@gmail.com',
      role: 'admin'
    },
    {
      id: 2,
      name: 'Jane Doe',
      email: 'Jane@gmail.com',
      role: 'user'
    }
  ])

  const handleShowModal = () => {
    setShowModal(true)
    setIsEdit(false)
    setUserToEdit(null)
  }

  const handleCloseModal = () => {
    setShowModal(false)
    setIsEdit(false)
    setUserToEdit(null)
  }

  const handleStartEditUser = user => {
    setShowModal(true)
    setIsEdit(true)
    setUserToEdit(user)
  }

  const handleAddUser = (id, name, email, role) => {
    const newUser = {
      id,
      name,
      email,
      role
    }

    setUsers([...users, newUser])
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
    handleCloseModal()
  }

  return (
    <>
      <main>
        <section>
          <Header handleShowModal={handleShowModal} />

          <article className='body'>
            <table className='table'>
              <thead>
                <tr>
                  <th>
                    <span>
                      <input type='checkbox' id='selectAll' />
                      <label htmlFor='selectAll'></label>
                    </span>
                  </th>
                  <th>Id</th>
                  <th>Name</th>
                  <th>Email</th>
                  <th>Role</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {users.length > 0 ? (
                  <ShowUsers
                    users={users}
                    setUsers={setUsers}
                    handleStartEditUser={handleStartEditUser}
                  />
                ) : (
                  <tr>
                    <td colSpan='6'>No Users</td>
                  </tr>
                )}
              </tbody>
            </table>
          </article>
          <Footer />
        </section>

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
      </main>
    </>
  )
}

export default App
