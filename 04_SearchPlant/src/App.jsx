import './App.css'
import { useCallback, useState } from 'react'
import { debounce } from 'lodash'
import { usePlants } from './components/Hooks/usePlants'
import { useSearch } from './components/Hooks/useSearch'
import { Plants } from './components/Plants'
import Footer from './components/Footer'

function App() {
  const [sort, setSort] = useState(false)
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
  } = usePlants({ search, setError, setSearch, sort })

  // useCallback: memoriza la funcion, si cambia el valor de la dependencia, se vuelve a crear la funcion
  const debouncedSearch = useCallback(debounce(fetchPlants, 500), [])

  const handleSearch = event => {
    event.preventDefault()
    fetchPlants({ search })
  }

  const handleChange = event => {
    const newSearch = event.target.value
    setSearch(newSearch)
    debouncedSearch({ search: newSearch })
  }

  const handleSort = () => {
    setSort(!sort)
  }

  return (
    <>
      <header>
        <h1>Buscador de Plantas</h1>
        <form className='form' onSubmit={handleSearch}>
          {error ? <p style={{ color: 'red' }}>{error}</p> : null}
          <label>
            Buscar:
            <input
              style={{ border: error ? '1px solid red' : 'none' }}
              type='search'
              value={search}
              onChange={handleChange}
              placeholder='sunflower, nacar...'
            />
          </label>

          <label>
            Ordenar por Año:
            <input type='checkbox' onChange={handleSort} checked={sort} />
          </label>

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
