import { describe, expect, it } from 'vitest'
import { render, fireEvent } from '@testing-library/react'
import App from '../App'

describe('App', () => {
  it('should render the component', () => {
    const { container } = render(<App />)

    expect(container).toBeDefined()
  })

  it('should add a new to-do', () => {
    const { getByPlaceholderText, getByTestId, getByText } = render(<App />)

    const titleInput = getByPlaceholderText('Title')
    const descriptionInput = getByPlaceholderText('Ej: do a to-do')
    const levelSelect = getByTestId('select')

    fireEvent.change(titleInput, { target: { value: 'New to-do' } })
    fireEvent.change(descriptionInput, { target: { value: 'Do something' } })
    fireEvent.change(levelSelect, { target: { value: 'high' } })

    const addButton = getByText('Add')
    fireEvent.click(addButton)

    expect(getByText('New to-do')).toBeDefined()
    expect(getByText('Do something')).toBeDefined()
    expect(getByText('high')).toBeDefined()
  })

  it('should complete a to-do', () => {
    const { getByText } = render(<App />)

    const completeButton = getByText('Complete')
    fireEvent.click(completeButton)

    expect(getByText('Completed')).toBeDefined()
  })

  it('should delete a to-do', () => {
    const { getByText, queryByText } = render(<App />)

    const deleteButton = getByText('Delete')
    fireEvent.click(deleteButton)

    expect(queryByText('New to-do')).toBeNull()
  })
})
