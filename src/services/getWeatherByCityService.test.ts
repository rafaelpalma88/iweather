// import { mockCityAPIResponse } from '@__tests__/mocks/mockCityAPIResponse'
import { mockWeatherAPIResponse } from '@__tests__/mocks/mockWeatherAPIResponse'
import { api } from './api'
import { getWeatherByCityService } from './getWeatherByCityService'

describe('API: getWeatherByCityService', () => {
  it('should return weather by city service', async () => {
    const data = jest
      .spyOn(api, 'get')
      .mockResolvedValue({ data: mockWeatherAPIResponse })

    const response = await getWeatherByCityService({
      latitude: 123,
      longitude: 456,
    })
    console.log('response - ', response)
    expect(response).toHaveProperty('today')
  })
})
