import {
  getStorageCity,
  removeStorageCity,
  saveStorageCity,
} from '@libs/asyncStorage/cityStorage'
import { CityProps } from '@services/getCityByNameService'

describe('Storage: City Storage', () => {
  it('should be return null when there is not a city', async () => {
    const response = await getStorageCity()
    expect(response).toBeNull()
  })

  it('should be return city storaged', async () => {
    const newCity: CityProps = {
      id: '6322584',
      name: 'São Roque',
      longitude: -23.5401,
      latitude: -47.1128,
    }
    await saveStorageCity(newCity)

    const response = await getStorageCity()

    expect(response).toEqual(newCity)
  })

  it('should be return null after remove a city storaged', async () => {
    const newCity: CityProps = {
      id: '6322584',
      name: 'São Roque',
      longitude: -23.5401,
      latitude: -47.1128,
    }
    await saveStorageCity(newCity)

    await removeStorageCity()

    const response = await getStorageCity()

    expect(response).toBeNull()
  })
})
