import { useState, useEffect, useRef } from 'react'

export function useSearch() {
  const [search, setSearch] = useState('')
  const [error, setError] = useState(null)
  const firsInput = useRef(true)

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

  return { search, setSearch, error, setError }
}
