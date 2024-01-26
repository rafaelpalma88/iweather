import { isDayTime } from './isDayTime'

describe('isDayTime', () => {
  it('should return false if time is not a working hour', () => {
    const mockedDate = new Date('2022-01-01T00:00:00')
    jest.spyOn(global, 'Date').mockImplementation(() => mockedDate)

    const isDayTimeResponse = isDayTime()
    expect(isDayTimeResponse).toBe(false)
  })

  it('should return false if time is not a working hour', () => {
    const mockedDate = new Date('2022-01-01T10:00:00')
    jest.spyOn(global, 'Date').mockImplementation(() => mockedDate)

    const isDayTimeResponse = isDayTime()
    expect(isDayTimeResponse).toBe(true)
  })
})
