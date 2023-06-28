import { useState, useEffect, useRef, useCallback, useMemo } from 'react'

export function usePlants({ setError, search, setSearch, sort }) {
  const [plants, setPlants] = useState([])
  const [loading, setLoading] = useState(false)
  const [page, setPage] = useState(1)
  const [totalPages, setTotalPages] = useState(0)
  const [totalResults, setTotalResults] = useState(0)
  const [enable, setEnable] = useState(true)

  // useRef es un hook que permite guardar valores entre renderizados
  const previusSearch = useRef(search)
  const previusPage = useRef(page)

  // useCallback es un hook que permite memorizar una función y evitar que se cree en cada renderizado
  const fetchPlants = useCallback(
    async ({ search }) => {
      if (search === previusSearch.current && page === previusPage.current)
        return
      try {
        setLoading(true)
        setEnable(false)
        previusSearch.current = search

        let url = ''
        if (window.location.hostname === 'localhost') {
          url = `http://localhost:3000/plants?page=${page}&search=${search}`
        } else {
          url = `https://search-plants.onrender.com/plants?page=${page}&search=${search}`
        }
        const response = await fetch(url)

        // Verificar si la respuesta es JSON
        const contentType = response.headers.get('content-type')
        if (!contentType || !contentType.includes('application/json')) {
          throw new Error('No se recibió una respuesta JSON válida')
        }

        const data = await response.json()
        setLoading(false)

        setPlants(data.data)
        previusPage.current = page
        setTotalPages(data.meta.total_pages)
        setTotalResults(data.meta.total)
      } catch (e) {
        setEnable(true)
        setError('Debes ingresar un valor')
      } finally {
        setLoading(false)
      }
    },
    [page]
  )

  useEffect(() => {
    fetchPlants({ search })
  }, [page])

  const nextPage = () => {
    if (page === totalPages) return
    setPage(page + 1)
  }

  const prevPage = () => {
    if (page === 1) return
    setPage(page - 1)
  }

  // useMemo es un hook que permite memorizar un valor y evitar que se calcule en cada renderizado
  const sortPlants = useMemo(() => {
    return sort ? [...plants].sort((a, b) => a.year - b.year) : plants
  }, [plants, sort])

  const reset = () => {
    setEnable(true)
    setPlants([])
    setError(null)
    setLoading(false)
    setSearch('')
    setPage(1)
    setTotalPages(0)
    setTotalResults(0)
  }

  return {
    plants: sortPlants,
    loading,
    page,
    nextPage,
    prevPage,
    totalResults,
    reset,
    fetchPlants,
    enable
  }
}
