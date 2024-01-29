import { render, screen } from "@testing-library/react-native"
import { Loading } from "@components/Loading"

describe("Component: Loading", () => {
  it("should render loading component", () => {
    render(<Loading />)
    const activityIndicator = screen.getByTestId("loading-indicator")
    expect(activityIndicator).toBeTruthy()

  })
})