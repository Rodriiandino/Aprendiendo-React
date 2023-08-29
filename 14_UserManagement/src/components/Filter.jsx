import { useId, useContext } from 'react'
import { FilterContext } from '../context/filter'
import { rolesOptions } from './utils/roles'
import { useModal } from './hooks/useModal'

export default function Filter() {
  const { handleShowModal } = useModal()
  // useId es un custom hook que genera un id único
  const roleFilterId = useId()
  const { filter, setFilter } = useContext(FilterContext)

  const handleChangeRole = event => {
    setFilter({ ...filter, role: event.target.value })
  }

  const handleChangeSearch = event => {
    setFilter({ ...filter, search: event.target.value })
  }

  return (
    <div className='header__actions'>
      <input
        type='search'
        placeholder='Search a User'
        onChange={handleChangeSearch}
      />
      <button onClick={handleShowModal}>add new User</button>
      <label htmlFor={roleFilterId}>
        Role
        <select id={roleFilterId} onChange={handleChangeRole}>
          <option value='all'>All</option>
          {rolesOptions.map(role => (
            <option key={role.value} value={role.value}>
              {role.label}
            </option>
          ))}
        </select>
      </label>
    </div>
  )
}
