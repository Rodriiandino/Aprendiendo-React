import PropTypes from 'prop-types'

export default function UserRow({
  user,
  handleStartEditUser,
  handleDeleteUser,
  handleDragStart,
  handleDragOver
}) {
  return (
    <tr
      key={user.id}
      draggable='true'
      onDragStart={handleDragStart}
      onDragOver={handleDragOver}
    >
      <td>=</td>
      <td>{user.id}</td>
      <td>{user.name}</td>
      <td>{user.email}</td>
      <td>{user.role}</td>
      <td>
        <button onClick={() => handleStartEditUser(user)} className='btn__edit'>
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
  )
}

UserRow.propTypes = {
  user: PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
    role: PropTypes.string.isRequired
  }).isRequired,
  handleStartEditUser: PropTypes.func.isRequired,
  handleDeleteUser: PropTypes.func.isRequired,
  handleDragStart: PropTypes.func.isRequired,
  handleDragOver: PropTypes.func.isRequired
}
