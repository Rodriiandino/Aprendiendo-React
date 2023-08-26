import { useContext } from 'react'
import { FilterContext } from '../../context/filter'

export function useFilters() {
  const { filter } = useContext(FilterContext)

  const filterUser = users => {
    return users
      .filter(user => {
        if (filter.role === 'all') {
          return user
        } else {
          return user.role === filter.role
        }
      })
      .filter(user => {
        return user.name.toLowerCase().includes(filter.search.toLowerCase())
      })
  }

  return { filterUser }
}
