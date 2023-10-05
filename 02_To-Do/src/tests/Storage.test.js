import { describe, expect, it } from 'vitest'
import { saveToDo, saveIdToDo } from '../components/Storage'

describe('Storage functions', () => {
  const toDo = [
    { id: 1, task: 'Buy groceries' },
    { id: 2, task: 'Do laundry' }
  ]
  const id = 3

  it('should save toDo to localStorage', () => {
    saveToDo({ toDo })
    expect(JSON.parse(window.localStorage.getItem('toDo'))).toEqual(toDo)
  })

  it('should delete toDo from localStorage', () => {
    saveToDo({ toDo: [] })
    expect(JSON.parse(window.localStorage.getItem('toDo'))).toEqual([])
  })

  it('should save id to localStorage', () => {
    saveIdToDo({ id })
    expect(JSON.parse(window.localStorage.getItem('id'))).toEqual(id)
  })
})
