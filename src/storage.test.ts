import { describe, it, expect, beforeEach } from 'vitest'
import { loadTasks, saveTasks } from './storage'
import type { Task } from './types'

describe('storage', () => {
  beforeEach(() => {
    localStorage.clear()
  })

  it('returns an empty array when nothing is stored', () => {
    expect(loadTasks()).toEqual([])
  })

  it('saves and loads tasks', () => {
    const tasks: Task[] = [
      {
        id: '1',
        title: 'テスト',
        completed: false,
        createdAt: '2026-01-01T00:00:00.000Z',
      },
    ]
    saveTasks(tasks)
    expect(loadTasks()).toEqual(tasks)
  })

  it('returns an empty array when stored value is invalid JSON', () => {
    localStorage.setItem('todo-app.tasks', 'not valid json')
    expect(loadTasks()).toEqual([])
  })
})
