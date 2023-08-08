import './App.css'
import { useState } from 'react'
import AddUser from './components/AddUser'
import Footer from './components/Footer'

function App() {
  const [showModal, setShowModal] = useState(false)
  const [users, setUsers] = useState([])

  const handleShowModal = () => {
    setShowModal(true)
  }

  const handleCloseModal = () => {
    setShowModal(false)
  }

  const handleAddUser = (id, name, email, role) => {
    const newUser = {
      id,
      name,
      email,
      role
    }

    setUsers([...users, newUser])
    setShowModal(false)
  }

  const handleDeleteUser = id => {
    const newUsers = users.filter(user => user.id !== id)
    setUsers(newUsers)
  }

  const handleEditUser = id => {
    const newUsers = users.map(user => {
      if (user.id === id) {
        return {
          ...user,
          name: 'new name',
          email: 'new email',
          role: 'new role'
        }
      }
      return user
    })
    setUsers(newUsers)
  }

  const showUsers = () => {
    return users.map(user => {
      const { id, name, email, role } = user
      return (
        <tr key={id}>
          <td>
            <span>
              <label htmlFor='select'></label>
              <input type='checkbox' id='select' />
            </span>
          </td>
          <td>{id}</td>
          <td>{name}</td>
          <td>{email}</td>
          <td>{role}</td>
          <td>
            <button onClick={() => handleEditUser(id)} className='btn__edit'>
              Edit
            </button>
            <button
              onClick={() => handleDeleteUser(id)}
              className='btn__delete'
            >
              Delete
            </button>
          </td>
        </tr>
      )
    })
  }

  return (
    <>
      <main>
        <section>
          <header className='header'>
            <h1>UserManagement</h1>
            <div className='header__actions'>
              <input type='search' placeholder='Search a User' />
              <button onClick={handleShowModal}>add new User</button>
            </div>
          </header>
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
                  showUsers()
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
                <h2>Add New User</h2>
                <button className='btn__close' onClick={handleCloseModal}>
                  X
                </button>
              </div>
              <div className='modal__body'>
                <AddUser onAddUser={handleAddUser} />
              </div>
            </div>
          </section>
        )}
      </main>
    </>
  )
}

export default App
