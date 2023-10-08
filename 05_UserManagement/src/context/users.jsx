import { createContext, useState } from 'react'
import PropTypes from 'prop-types'

export const UsersContext = createContext()

export const UsersProvider = ({ children }) => {
  const [users, setUsers] = useState(() => {
    const users = localStorage.getItem('users')
    return users
      ? JSON.parse(users)
      : [
          {
            id: '1',
            name: 'John Doe',
            email: 'Jon@gmail.com',
            role: 'admin'
          },
          {
            id: '2',
            name: 'Jane Doe',
            email: 'Jane@gmail.com',
            role: 'user'
          }
        ]
  })

  return (
    <UsersContext.Provider value={{ users, setUsers }}>
      {children}
    </UsersContext.Provider>
  )
}

UsersProvider.propTypes = {
  children: PropTypes.node.isRequired
}
