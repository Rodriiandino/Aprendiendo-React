import PropTypes from 'prop-types'
import { useModal } from './hooks/useModal'
import { Draggable } from 'react-beautiful-dnd'

export default function UserRow({ user, handleDeleteUser, index }) {
  const { handleStartEditUser } = useModal()

  return (
    <Draggable key={user.id} draggableId={user.id} index={index}>
      {provider => (
        <tr {...provider.draggableProps} ref={provider.innerRef}>
          <td {...provider.dragHandleProps}>=</td>
          <td>{user.id}</td>
          <td>{user.name}</td>
          <td>{user.email}</td>
          <td>{user.role}</td>
          <td>
            <button
              onClick={() => handleStartEditUser(user)}
              className='btn__edit'
            >
              Edit
            </button>
            <button
              onClick={() => handleDeleteUser(user.id)}
              className='btn__delete'
            >
              Delete
            </button>
          </td>
        </tr>
      )}
    </Draggable>
  )
}

UserRow.propTypes = {
  user: PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
    role: PropTypes.string.isRequired
  }).isRequired,
  handleDeleteUser: PropTypes.func.isRequired,
  index: PropTypes.number.isRequired
}
