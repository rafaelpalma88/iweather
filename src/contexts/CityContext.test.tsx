import { useCity } from "@hooks/useCity"
import { act, renderHook, waitFor } from "@testing-library/react-native"
import { CityProvider } from "@contexts/CityContext"

describe("Hooks: CityContext", () => {
  it("should be change change selected city", async () => {

    const { result } = renderHook(() => useCity(), { wrapper: CityProvider })

    const selectedCityMock =  { id: "3448300", latitude: -23.5292, longitude: -47.1353, name: "São Roque, BR"}
    
    await waitFor(() => act(() => result.current.handleChanceCity(selectedCityMock)))

    expect(result.current.city).toBe(selectedCityMock)

  })
})