import Filter from './Filter'

export default function Header({ handleShowModal }) {
  return (
    <header className='header'>
      <h1>UserManagement</h1>
      <Filter handleShowModal={handleShowModal} />
    </header>
  )
}
