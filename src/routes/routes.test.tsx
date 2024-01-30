import { act, render, screen, waitFor } from "@__tests__/utils/customRender"
import { Routes } from "."
import { saveStorageCity } from "@libs/asyncStorage/cityStorage"
import { api } from "@services/api"
import { mockWeatherAPIResponse } from "@__tests__/mocks/api/mockWeatherAPIResponse"

describe("Routes", () => {
  it("should be render Search screen when a city is not selected", async () => {
    render(<Routes />)

    const title = await waitFor(() => screen.findByText(/^escolha um local/i))
    expect(title).toBeTruthy()

  })

  it("should be render Dashboard screen when a city is selected", async () => {

    jest.spyOn(api, "get").mockResolvedValue({ data: mockWeatherAPIResponse })

    const cityMock = { id: "3448300", latitude: -23.5292, longitude: -47.1353, name: "São Roque, BR"}

    screen.debug()

    await saveStorageCity(cityMock)

    await render(<Routes />)

    const title = screen.getByText(cityMock.name)
    expect(title).toBeTruthy()

    // terminar de arrumar isso!

  })
})