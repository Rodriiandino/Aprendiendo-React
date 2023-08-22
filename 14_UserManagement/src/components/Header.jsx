import Filter from './Filter'
import { useModal } from './hooks/useModal'

export default function Header() {
  const { handleShowModal } = useModal()
  return (
    <header className='header'>
      <h1>UserManagement</h1>{' '}
      <div className='header__actions'>
        <input type='search' placeholder='Search a User' />
        <button onClick={handleShowModal}>add new User</button>
        <Filter />
      </div>
    </header>
  )
}
