import { createContext, useState } from 'react'
import PropTypes from 'prop-types'

// El contexto es un componente de React que nos permite compartir información entre componentes sin necesidad de pasar props manualmente entre cada uno de ellos
// El contexto se compone de dos partes: el Provider y el Consumer

// El Provider es un componente que envuelve a todos los componentes que van a tener acceso a la información que se va a compartir
// El Consumer es un componente que se encarga de consumir la información que se comparte desde el Provider
export const FilterContext = createContext()

export const FilterProvider = ({ children }) => {
  const [filter, setFilter] = useState({
    role: 'all',
    search: ''
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
