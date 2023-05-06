import './App.css'
import { usePlants } from './components/Hooks/usePlants'
import { Plants } from './components/Plants'
import Footer from './components/Footer'

function App() {
  const {
    plants,
    error,
    loading,
    search,
    setSearch,
    page,
    nextPage,
    prevPage,
    totalResults,
    reset,
    fetchPlants
  } = usePlants()

  const handleSearch = event => {
    event.preventDefault()
    fetchPlants()
  }

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
            onChange={e => setSearch(e.target.value)}
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
          <button className='btn' onClick={prevPage}>
            Pagina Anterior
          </button>{' '}
          <h3>{page} </h3>
          <button className='btn' onClick={nextPage}>
            Siguiente Pagina
          </button>
        </div>
      </main>

      <Footer />
    </>
  )
}

export default App
