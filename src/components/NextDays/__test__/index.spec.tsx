import { render, screen } from "@testing-library/react-native"
import { NextDays } from "@components/NextDays"

import clearDay from '@assets/clear_day.svg'

describe("Component: NextDays", () => {

  const mock = [
    {
      day: "ter",
      icon: clearDay,
      max: "21ºc",
      min: "20ºc",
      weather: "nuvens dispersas"
    },
    {
      day: "qua",
      icon: clearDay,
      max: "22ºc",
      min: "21ºc",
      weather: "nuvens dispersas"
    },
    {
      day: "qui",
      icon: clearDay,
      max: "20ºc",
      min: "19ºc",
      weather: "chuva leve"
    },
    {
      day: "sex",
      icon: clearDay,
      max: "20ºc",
      min: "19ºc",
      weather: "chuva leve"
    },
    {
      day: "sáb",
      icon: clearDay,
      max: "20ºc",
      min: "19ºc",
      weather: "nuvens dispersas"
    }
  ]

  it("should render Next Day component", () => {
    render(<NextDays data={mock} />)
    expect(screen.getByText('qua')).toBeTruthy()
    expect(screen.getByText('ter')).toBeTruthy()
  })
})