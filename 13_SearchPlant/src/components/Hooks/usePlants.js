import { useState, useEffect, useRef, useCallback } from 'react'

export function usePlants({ setError, search, setSearch }) {
  const [plants, setPlants] = useState([])
  const [loading, setLoading] = useState(false)
  const [page, setPage] = useState(1)
  const [totalPages, setTotalPages] = useState(0)
  const [totalResults, setTotalResults] = useState(0)
  const [enable, setEnable] = useState(true)

  // useRef es un hook que permite guardar valores entre renderizados
  const previusSearch = useRef(search)
  const previusPage = useRef(page)

  const fetchPlants = useCallback(
    async ({ search }) => {
      if (search === previusSearch.current && page === previusPage.current)
        return
      try {
        setLoading(true)
        setEnable(false)
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