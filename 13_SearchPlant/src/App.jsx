import './App.css'
import { usePlants } from './components/Hooks/usePlants'
import { useSearch } from './components/Hooks/useSearch'
import { Plants } from './components/Plants'
import Footer from './components/Footer'

function App() {
  const { search, setSearch, error, setError } = useSearch()

  const {
    plants,
    loading,
    page,
    nextPage,
    prevPage,
    totalResults,
    reset,
    fetchPlants,
    enable
  } = usePlants({ search, setError, setSearch })

  const handleSearch = event => {
    event.preventDefault()
    fetchPlants({ search })
  }

  const handleChange = event => {
    const newSearch = event.target.value
    setSearch(newSearch)
  }

  console.log('hola')

  return (
    <>
      <header>
        <h1>Buscador de Plantas</h1>
        <form className='form' onClick={handleSearch}>
          {error ? <p style={{ color: 'red' }}>{error}</p> : null}
          <input
            style={{ border: error ? '1px solid red' : 'none' }}
            type='search'
            value={search}
            onChange={handleChange}
            placeholder='sunflower, nacar...'
          />
          <button type='submit'>Buscar</button>
          <button type='button' onClick={reset}>
            {' '}
            Resetear{' '}
          </button>
        </form>
      </header>
      <main>
        <p className='results'>Resultados: {totalResults}</p>
        {loading ? <p className='results'>Cargando...</p> : null}
        <Plants plants={plants} />
        <div className='btn__container'>
          {' '}
          <button className='btn' onClick={prevPage} disabled={enable}>
            Pagina Anterior
          </button>{' '}
          <h3>{page} </h3>
          <button className='btn' onClick={nextPage} disabled={enable}>
            Siguiente Pagina
          </button>
        </div>
      </main>

      <Footer />
    </>
  )
}

export default App
