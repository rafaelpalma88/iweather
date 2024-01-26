import { mockCityAPIResponse } from '@__tests__/mocks/mockCityAPIResponse'
import { api } from './api'
import { getCityByNameService } from './getCityByNameService'

describe('API: getCityByNameService', () => {
  it('should return city details', async () => {
    const data = jest
      .spyOn(api, 'get')
      .mockResolvedValue({ data: mockCityAPIResponse })
    const response = await getCityByNameService('São Paulo')
    console.log('RESPONSE', response)
    expect(response.length).toBeGreaterThan(0)
  })
})
