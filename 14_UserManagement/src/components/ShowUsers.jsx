import { useFilters } from './hooks/useFilters'

export default function ShowUsers({ users, setUsers, handleStartEditUser }) {
  const { filterUser } = useFilters()
  const filteredUser = filterUser(users)

  const handleDeleteUser = id => {
    const newUsers = users.filter(user => user.id !== id)
    setUsers(newUsers)
  }

  return filteredUser.map(user => {
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
          <button onClick={() => handleDeleteUser(id)} className='btn__delete'>
            Delete
          </button>
        </td>
      </tr>
    )
  })
}
