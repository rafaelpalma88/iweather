import { isDayTime } from './isDayTime'

describe('isDayTime', () => {
  it('should return false if time is not a working hour', () => {
    const mockDateObject = new Date('2021-02-26T22:42:16.652Z')
    const spy = jest
      .spyOn(global, 'Date')
      .mockImplementation(() => mockDateObject)

    const isDayTimeResponse = isDayTime()
    spy.mockRestore()
    expect(isDayTimeResponse).toBe(false)
  })

  it('should return false if time is not a working hour', () => {
    const mockDateObject = new Date('2021-02-26T13:42:16.652Z')
    const spy = jest
      .spyOn(global, 'Date')
      .mockImplementation(() => mockDateObject)

    const isDayTimeResponse = isDayTime()
    spy.mockRestore()
    expect(isDayTimeResponse).toBe(true)
  })
})
