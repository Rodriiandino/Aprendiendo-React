import { describe, expect, it } from 'vitest'
import { render } from '@testing-library/react'
import { JSDOM } from 'jsdom'
import AddTodo from '../components/AddTodo'

describe('AddTodo', () => {
  const dom = new JSDOM('<!DOCTYPE html><html><body></body></html>')
  global.window = dom.window
  global.document = dom.window.document

  const localStorageMock = (() => {
    let store = {}
    return {
      getItem: key => store[key],
      setItem: (key, value) => {
        store[key] = value.toString()
      },
      clear: () => {
        store = {}
      }
    }
  })()

  Object.defineProperty(window, 'localStorage', {
    value: localStorageMock
  })

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
})
