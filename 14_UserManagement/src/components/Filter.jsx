import { useId, useContext } from 'react'
import { FilterContext } from '../context/filter'

export default function Filter() {
  const roleFilterId = useId()
  const { filter, setFilter } = useContext(FilterContext)

  const handleChangeRole = event => {
    setFilter({ ...filter, role: event.target.value })
  }

  return (
    <>
      <label htmlFor={roleFilterId}>Role</label>
      <select id={roleFilterId} onChange={handleChangeRole}>
        <option value='all'>All</option>
        <option value='admin'>Admin</option>
        <option value='user'>User</option>
      </select>
    </>
  )
}
