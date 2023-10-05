import { describe, expect, it } from 'vitest'
import { render } from '@testing-library/react'
import AddTodo from '../components/AddTodo'

describe('AddTodo', () => {
  it('should render the component', () => {
    const { container } = render(<AddTodo />)

    expect(container).toBeDefined()
  })

  it('should render the component with the title', () => {
    const { getByText } = render(<AddTodo />)

    expect(getByText('Task?')).toBeDefined()
  })

  it('should render the input empty', () => {
    const { getByPlaceholderText } = render(<AddTodo />)

    const title = getByPlaceholderText('Title')
    const description = getByPlaceholderText('Ej: do a to-do')

    expect(title.value).toBe('')
    expect(description.value).toBe('')
  })

  it('should render the select with the option low', () => {
    const { getByTestId } = render(<AddTodo />)

    const level = getByTestId('select')

    expect(level.value).toBe('low')
  })

  it('should render the button with the text Add', () => {
    const { getByText } = render(<AddTodo />)

    expect(getByText('Add')).toBeDefined()
  })
})
