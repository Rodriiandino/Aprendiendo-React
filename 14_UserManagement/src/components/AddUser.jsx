import { useState, useId } from 'react'
import PropTypes from 'prop-types'

export default function AddUser({ onAddUser }) {
  const id = useId()
  const [user, setUser] = useState({
    id,
    name: '',
    email: '',
    role: 'admin'
  })

  const handleSubmit = e => {
    e.preventDefault()

    onAddUser(id, user.name, user.email, user.role)

    setUser({
      name: '',
      email: '',
      role: 'admin'
    })
  }

  return (
    <form className='form' onSubmit={handleSubmit}>
      <div className='form__control'>
        <label htmlFor='name'>Name</label>
        <input
          type='text'
          id='name'
          required
          value={user.name}
          onChange={e => setUser({ ...user, name: e.target.value })}
        />
      </div>
      <div className='form__control'>
        <label htmlFor='email'>Email</label>
        <input
          type='email'
          id='email'
          required
          value={user.email}
          onChange={e => setUser({ ...user, email: e.target.value })}
        />
      </div>
      <div className='form__control'>
        <label htmlFor='role'>Role</label>
        <select
          id='role'
          value={user.role}
          onChange={e => setUser({ ...user, role: e.target.value })}
        >
          <option value='admin'>admin</option>
          <option value='user'>user</option>
        </select>
      </div>
      <div className='form__actions'>
        <button className='btn__confirm'>Add User</button>
      </div>
    </form>
  )
}

AddUser.propTypes = {
  onAddUser: PropTypes.func.isRequired
}
