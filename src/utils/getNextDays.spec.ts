import { getNextDays } from './getNextDays'

describe('getNextDays', () => {
  test('should be return the next five days', () => {
    const days = getNextDays()
    expect(days.length).toBe(5)
  })
})
