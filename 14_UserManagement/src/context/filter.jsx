import { createContext, useState } from 'react'
import PropTypes from 'prop-types'

export const FilterContext = createContext()

export const FilterProvider = ({ children }) => {
  const [filter, setFilter] = useState({
    role: 'all'
  })

  return (
    <FilterContext.Provider value={{ filter, setFilter }}>
      {children}
    </FilterContext.Provider>
  )
}

FilterProvider.propTypes = {
  children: PropTypes.node.isRequired
}
