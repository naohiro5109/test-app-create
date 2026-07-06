import { describe, it, expect, beforeEach } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import App from './App'

async function addTask(user: ReturnType<typeof userEvent.setup>, title: string) {
  await user.type(screen.getByLabelText('新しいタスク'), title)
  await user.click(screen.getByRole('button', { name: '追加' }))
}

describe('App', () => {
  beforeEach(() => {
    localStorage.clear()
  })

  it('adds a task to the list', async () => {
    const user = userEvent.setup()
    render(<App />)

    await addTask(user, '牛乳を買う')

    expect(screen.getByText('牛乳を買う')).toBeInTheDocument()
  })

  it('toggles a task as completed', async () => {
    const user = userEvent.setup()
    render(<App />)
    await addTask(user, '牛乳を買う')

    const checkbox = screen.getByRole('checkbox')
    await user.click(checkbox)

    expect(checkbox).toBeChecked()
  })

  it('deletes a task from the list', async () => {
    const user = userEvent.setup()
    render(<App />)
    await addTask(user, '牛乳を買う')

    await user.click(screen.getByRole('button', { name: '削除' }))

    expect(screen.queryByText('牛乳を買う')).not.toBeInTheDocument()
  })
})
