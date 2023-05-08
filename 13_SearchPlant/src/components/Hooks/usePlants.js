import { useState, useEffect, useRef } from 'react'

export function usePlants() {
  const [plants, setPlants] = useState([])
  const [error, setError] = useState(null)
  const [loading, setLoading] = useState(false)
  const [search, setSearch] = useState('')
  const [page, setPage] = useState(1)
  const [totalPages, setTotalPages] = useState(0)
  const [totalResults, setTotalResults] = useState(0)

  // useRef es un hook que permite guardar valores entre renderizados
  const previusSearch = useRef(search)
  const previusPage = useRef(page)
  const firsInput = useRef(true)

  const fetchPlants = async () => {
    if (search === previusSearch.current && page === previusPage.current) return
    try {
      setLoading(true)
      previusSearch.current = search
      const url = `https://aprendiendo-react-production.up.railway.app/plants?page=${page}&search=${search}`

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
      setError('Debes ingresar un valor')
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    if (firsInput.current) {
      firsInput.current = search === ''
      return
    }

    if (search === '') {
      setError('Debes ingresar un valor')
      return
    }

    setError(null)
  }, [search])

  useEffect(() => {
    fetchPlants()
  }, [page])

  const nextPage = () => {
    if (page === totalPages) return
    setPage(page + 1)
  }

  const prevPage = () => {
    if (page === 1) return
    setPage(page - 1)
  }

  const reset = () => {
    setPlants([])
    setError(null)
    setLoading(false)
    setSearch('')
    setPage(1)
    setTotalPages(0)
    setTotalResults(0)
  }

  return {
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
  }
}
