import { describe, expect, it } from 'vitest'
import { render, fireEvent } from '@testing-library/react'
import App from '../App'

describe('App component', () => {
  it('renders', () => {
    const { getByText } = render(<App />)

    expect(getByText('Buscador de Plantas')).toBeDefined()
  })

  it('renders the search input and buttons', () => {
    const { getByLabelText, getByText } = render(<App />)

    expect(getByLabelText('Buscar:')).toBeDefined()
    expect(getByText('Buscar')).toBeDefined()
    expect(getByText('Resetear')).toBeDefined()
  })

  it('renders an error message when the search input is empty', () => {
    const { getByText, getByLabelText } = render(<App />)

    const searchInput = getByLabelText('Buscar:')
    const searchButton = getByText('Buscar')

    fireEvent.change(searchInput, { target: { value: 'a' } })
    fireEvent.change(searchInput, { target: { value: '' } })

    expect(getByText('Debes ingresar un valor')).toBeDefined()
  })

  it('should eliminate the input of the search when the reset button is clicked', () => {
    const { getByText, getByLabelText } = render(<App />)

    const searchInput = getByLabelText('Buscar:')
    const resetButton = getByText('Resetear')

    fireEvent.change(searchInput, { target: { value: 'hey' } })
    fireEvent.click(resetButton)

    expect(searchInput.value).toBe('')
  })
})
