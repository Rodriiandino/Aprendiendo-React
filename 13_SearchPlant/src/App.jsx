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
    reset
  } = usePlants()

  const handleClick = e => {
    e.preventDefault()
  }

  return (
    <>
      <header>
        <h1>Buscador de Plantas</h1>
        <form onClick={handleClick}>
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
        <p>Resultados: {totalResults}</p>
        {loading ? <p>Cargando...</p> : null}
        <Plants plants={plants} />
        <div>
          {' '}
          <button onClick={prevPage}>Pagina Anterior</button> {page}{' '}
          <button onClick={nextPage}>Siguiente Pagina</button>
        </div>
      </main>

      <Footer />
    </>
  )
}

export default App
