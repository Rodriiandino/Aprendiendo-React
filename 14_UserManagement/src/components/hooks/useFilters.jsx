import { useContext } from 'react'
import { FilterContext } from '../../context/filter'

export function useFilters() {
  const { filter, setFilter } = useContext(FilterContext)

  const filterUser = users => {
    return users.filter(user => {
      if (filter.role === 'all') {
        return user
      } else {
        return user.role === filter.role
      }
    })
  }

  return { filter, setFilter, filterUser }
}
