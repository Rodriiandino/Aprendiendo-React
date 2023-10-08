import { useContext } from 'react'
import { UsersContext } from '../context/users'
import { useFilters } from './hooks/useFilters'
import { saveUsers } from './utils/storage'
import UserRow from './UserRow'
import { DragDropContext, Droppable } from 'react-beautiful-dnd'

export default function ShowUsers() {
  const { users, setUsers } = useContext(UsersContext)
  const { filterUser } = useFilters()

  const filteredUser = filterUser(users)

  const handleDeleteUser = id => {
    const newUsers = users.filter(user => user.id !== id)
    setUsers(newUsers)
    saveUsers(newUsers)
  }

  const handleDragEnd = e => {
    if (!e.destination) return
    let tempData = Array.from(users)
    let [source_data] = tempData.splice(e.source.index, 1)
    tempData.splice(e.destination.index, 0, source_data)
    setUsers(tempData)
    saveUsers(tempData)
  }

  return (
    <>
      {filteredUser.length > 0 ? (
        <DragDropContext onDragEnd={handleDragEnd}>
          <table className='table'>
            <thead>
              <tr>
                <th></th>
                <th>Id</th>
                <th>Name</th>
                <th>Email</th>
                <th>Role</th>
                <th>Actions</th>
              </tr>
            </thead>
            <Droppable droppableId='users'>
              {provider => (
                <tbody ref={provider.innerRef} {...provider.droppableProps}>
                  {filteredUser.map((user, index) => (
                    <UserRow
                      key={user.id}
                      index={index}
                      user={user}
                      handleDeleteUser={handleDeleteUser}
                    />
                  ))}
                </tbody>
              )}
            </Droppable>
          </table>
        </DragDropContext>
      ) : (
        <p>No Users</p>
      )}
    </>
  )
}
