import { useContext } from 'react'
import { UsersContext } from '../context/users'
import { useModal } from './hooks/useModal'
import { useFilters } from './hooks/useFilters'

export default function ShowUsers() {
  const { users, setUsers } = useContext(UsersContext)
  const { handleStartEditUser } = useModal()
  const { filterUser } = useFilters()

  const filteredUser = filterUser(users)

  const handleDeleteUser = id => {
    const newUsers = users.filter(user => user.id !== id)
    setUsers(newUsers)
  }

  return (
    <>
      {filteredUser.length > 0 ? (
        filteredUser.map(user => {
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
                <button
                  onClick={() => handleStartEditUser(user)}
                  className='btn__edit'
                >
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
      ) : (
        <tr>
          <td colSpan='6'>No Users</td>
        </tr>
      )}
    </>
  )
}
