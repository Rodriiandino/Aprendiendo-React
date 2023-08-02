import './App.css'
import { useState } from 'react'
import Footer from './components/Footer'

function App() {
  const [showModal, setShowModal] = useState(false)

  const handleShowModal = () => {
    setShowModal(true)
  }

  const handleCloseModal = () => {
    setShowModal(false)
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
              <tbody></tbody>
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
                <form className='form'>
                  <div className='form__control'>
                    <label htmlFor='name'>Name</label>
                    <input type='text' id='name' />
                  </div>
                  <div className='form__control'>
                    <label htmlFor='email'>Email</label>
                    <input type='email' id='email' />
                  </div>
                  <div className='form__control'>
                    <label htmlFor='role'>Role</label>
                    <select id='role'>
                      <option value='admin'>Admin</option>
                      <option value='user'>User</option>
                    </select>
                  </div>
                  <div className='form__actions'>
                    <button className='btn__confirm'>Add User</button>
                  </div>
                </form>
              </div>
            </div>
          </section>
        )}
      </main>
    </>
  )
}

export default App
