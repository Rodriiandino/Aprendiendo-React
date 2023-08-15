import { useId, useContext } from 'react'
import { FilterContext } from '../context/filter'

export default function Filter({ handleShowModal }) {
  const roleFilterId = useId()
  const { filter, setFilter } = useContext(FilterContext)

  const handleChangeRole = event => {
    setFilter({ ...filter, role: event.target.value })
  }

  return (
    <div className='header__actions'>
      <input type='search' placeholder='Search a User' />
      <button onClick={handleShowModal}>add new User</button>
      <label htmlFor={roleFilterId}>Role</label>
      <select id={roleFilterId} onChange={handleChangeRole}>
        <option value='all'>All</option>
        <option value='admin'>Admin</option>
        <option value='user'>User</option>
      </select>
    </div>
  )
}
