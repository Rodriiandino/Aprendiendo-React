import PropTypes from 'prop-types'
import { useState } from 'react'
import { rolesOptions } from './utils/roles'

export default function EditUser({ onEditUser, userToEdit }) {
  const [user, setUser] = useState({
    name: userToEdit.name,
    email: userToEdit.email,
    role: userToEdit.role
  })

  const handleSubmit = e => {
    e.preventDefault()
    onEditUser(userToEdit.id, user.name, user.email, user.role)
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
          {rolesOptions.map(role => (
            <option key={role.value} value={role.value}>
              {role.label}
            </option>
          ))}
        </select>
      </div>
      <div className='form__actions'>
        <button className='btn__confirm'>Edit User</button>
      </div>
    </form>
  )
}

EditUser.propTypes = {
  onEditUser: PropTypes.func.isRequired,
  userToEdit: PropTypes.object.isRequired
}
