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

  let row

  const handleDragStart = e => {
    // Se guarda el elemento que se va a arrastrar
    row = e.target
    // Se guarda el contenido del elemento que se va a arrastrar
    e.dataTransfer.setData('text/html', e.target.innerHTML)

    // Tipo de efecto que se va a aplicar al arrastrar el elemento
    e.dataTransfer.effectAllowed = 'move'
  }

  const handleDragOver = e => {
    e.preventDefault()
    const children = Array.from(e.target.parentNode.parentNode.children)
    if (children.indexOf(e.target.parentNode) > children.indexOf(row)) {
      e.target.after(row)
    } else {
      e.target.parentNode.before(row)
    }
  }

  return (
    <>
      {filteredUser.length > 0 ? (
        filteredUser.map(user => {
          const { id, name, email, role } = user
          return (
            <tr
              key={id}
              draggable='true'
              onDragStart={handleDragStart}
              onDragOver={handleDragOver}
            >
              <td>=</td>
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
