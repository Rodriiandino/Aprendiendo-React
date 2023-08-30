import { useContext, useRef } from 'react'
import { UsersContext } from '../context/users'
import { useModal } from './hooks/useModal'
import { useFilters } from './hooks/useFilters'
import UserRow from './UserRow'

export default function ShowUsers() {
  const { users, setUsers } = useContext(UsersContext)
  const { handleStartEditUser } = useModal()
  const { filterUser } = useFilters()

  const draggedUserId = useRef(null)

  const filteredUser = filterUser(users)

  const handleDeleteUser = id => {
    const newUsers = users.filter(user => user.id !== id)
    setUsers(newUsers)
  }

  const handleDragStart = e => {
    draggedUserId.current = e.target
    e.dataTransfer.setData('text/html', e.target.innerHTML)
    e.dataTransfer.effectAllowed = 'move'
  }

  const handleDragOver = e => {
    e.preventDefault()

    if (e.target === draggedUserId.current) return

    const children = Array.from(e.target.parentNode.parentNode.children)
    if (
      children.indexOf(e.target.parentNode) >
        children.indexOf(draggedUserId.current) &&
      e.target.parentNode !== draggedUserId.current
    ) {
      e.target.after(draggedUserId.current)
    } else {
      e.target.parentNode.before(draggedUserId.current)
    }
  }

  return (
    <>
      {filteredUser.length > 0 ? (
        filteredUser.map(user => (
          <UserRow
            key={user.id}
            user={user}
            handleStartEditUser={handleStartEditUser}
            handleDeleteUser={handleDeleteUser}
            handleDragStart={handleDragStart}
            handleDragOver={handleDragOver}
          />
        ))
      ) : (
        <p>No Users</p>
      )}
    </>
  )
}
