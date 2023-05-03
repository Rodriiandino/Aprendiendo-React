import { useState, useEffect, useRef } from 'react'

export function usePlants() {
  const [plants, setPlants] = useState([])
  const [error, setError] = useState(null)
  const [loading, setLoading] = useState(false)
  const [search, setSearch] = useState('')
  const [page, setPage] = useState(1)
  const [totalPages, setTotalPages] = useState(0)
  const [totalResults, setTotalResults] = useState(0)

  const firsInput = useRef(true) // useRef es un hook que permite guardar valores entre renderizados

  const KEY_PLANT = ''

  const fetchPlants = async () => {
    try {
      setLoading(true)
      const url = `https://trefle.io/api/v1/plants?token=${KEY_PLANT}&page=${page}&q=${search}`
      const response = await fetch(url)
      const data = await response.json()
      setLoading(false)

      if (data.error) {
        setError(data.error)
        return
      }
    } catch (e) {
      setError(e.message)
    } finally {
      setLoading(false)
    }

    setPlants(data.data)
    setTotalPages(data.meta.total_pages)
    setTotalResults(data.meta.total)
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
  }, [search, page])

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
