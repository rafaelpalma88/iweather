import { mockCityAPIResponse } from "@__tests__/mocks/api/mockCityAPIResponse";
import { act, fireEvent, render, screen, waitFor } from "@__tests__/utils/customRender";
import { Search } from "@screens/Search"
import { api } from "@services/api";

describe("Screen: Search", () => {
  it("should render search page", async () => {

    jest.spyOn(api, 'get').mockResolvedValue({ data: mockCityAPIResponse })

    render(<Search />)

    const searchInput = screen.getByTestId('search-input');

    fireEvent.changeText(searchInput, "São Roque");

    const option = await waitFor(() => screen.findByText(/são roque/i))

    expect(option).toBeTruthy()

  })
})