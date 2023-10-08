import { beforeEach, describe, expect, it } from 'vitest'
import { render, screen, fireEvent } from '@testing-library/react'
import App from '../App'
import { ModalProvider } from '../context/modal.jsx'
import { UsersProvider } from '../context/users.jsx'
import { FilterProvider } from '../context/filter.jsx'

describe('App', () => {
  beforeEach(() => {
    render(
      <ModalProvider>
        <UsersProvider>
          <FilterProvider>
            <App />
          </FilterProvider>
        </UsersProvider>
      </ModalProvider>
    )
  })

  it('should render', () => {
    const title = screen.getByText('UserManagement')

    expect(title).toBeDefined()
  })

  it('should render a list of users', () => {
    const users = screen.getAllByRole('row')

    expect(users.length).toBe(3)

    const header = users[0]
    const row2 = users[2]

    const headerCells = header.querySelectorAll('th')

    expect(headerCells.length).toBe(6)
    expect(headerCells[0].textContent).toBe('')
    expect(headerCells[5].textContent).toBe('Actions')

    const row2Cells = row2.querySelectorAll('td')

    expect(row2Cells.length).toBe(6)
    expect(row2Cells[0].textContent).toBe('=')
    expect(row2Cells[5].textContent).toContain('Delete')
  })

  it('should render a form to add a new user', () => {
    const buttonNewUser = screen.getByText('add new User')

    fireEvent.click(buttonNewUser)

    const form = screen.getByText('Add New User')
    const buttonSubmit = screen.getByText('Add User')
    expect(form).toBeDefined()
    expect(buttonSubmit).toBeDefined()
  })

  it('should add a new user', () => {
    const buttonNewUser = screen.getByText('add new User')

    fireEvent.click(buttonNewUser)

    const nameInput = screen.getByLabelText('Name')
    const emailInput = screen.getByLabelText('Email')
    const buttonSubmit = screen.getByText('Add User')

    fireEvent.change(nameInput, { target: { value: 'Rodri' } })
    fireEvent.change(emailInput, {
      target: { value: 'andinorodrigo03@gmail.com' }
    })

    fireEvent.click(buttonSubmit)

    const users = screen.getAllByRole('row')
    const row4 = users[3]
    const row4Cells = row4.querySelectorAll('td')
    const nameCell = row4Cells[2]

    expect(users.length).toBe(4)
    expect(row4Cells.length).toBe(6)
    expect(nameCell.textContent).toBe('Rodri')
  })

  it('should delete a user', () => {
    const users = screen.getAllByRole('row')
    const row = users[1]
    const rowCells = row.querySelectorAll('td')
    const id = rowCells[1]

    expect(id.textContent).toBe('1')

    const buttonDelete = screen.getAllByText('Delete')

    fireEvent.click(buttonDelete[0])

    const usersAfterDelete = screen.getAllByRole('row')
    const rowAfterDelete = usersAfterDelete[1]
    const rowCellsAfterDelete = rowAfterDelete.querySelectorAll('td')
    const idAfterDelete = rowCellsAfterDelete[1]

    expect(idAfterDelete.textContent).toBe('2')
  })

  it('should edit a user', () => {
    const users = screen.getAllByRole('row')
    const row = users[1]
    const rowCells = row.querySelectorAll('td')
    const id = rowCells[1]

    expect(id.textContent).toBe('2')

    const buttonEdit = screen.getAllByText('Edit')

    fireEvent.click(buttonEdit[0])

    const nameInput = screen.getByLabelText('Name')
    const emailInput = screen.getByLabelText('Email')
    const buttonSubmit = screen.getByRole('button', { name: 'Edit User' })

    fireEvent.change(nameInput, { target: { value: 'Rodri' } })
    fireEvent.change(emailInput, {
      target: { value: 'andinorodrigo03@gmail.com' }
    })

    fireEvent.click(buttonSubmit)

    const usersAfterEdit = screen.getAllByRole('row')
    const rowAfterEdit = usersAfterEdit[1]
    const rowCellsAfterEdit = rowAfterEdit.querySelectorAll('td')
    const nameAfterEdit = rowCellsAfterEdit[2]
    const gmailAfterEdit = rowCellsAfterEdit[3]

    expect(nameAfterEdit.textContent).toBe('Rodri')
    expect(gmailAfterEdit.textContent).toBe('andinorodrigo03@gmail.com')
  })
})
