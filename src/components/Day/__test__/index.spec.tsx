import { Day } from '@components/Day'
import { render, screen } from '@testing-library/react-native'
import { Text, View } from 'react-native'

import clearDay from '@assets/clear_day.svg'

describe('Component: Day', () => {
  it('should render component Day', () => {

    const mock = {
      icon: clearDay,
      day: "sáb",
      max: "20ºc",
      min: "16ºc",
      weather: "nublado"
    }

    render(<Day data={mock} />)

    const dayOfTheWeekText = screen.getByText('sáb')
    expect(dayOfTheWeekText).toBeTruthy()

    const minimunDegreeText = screen.getByText('16ºc')
    expect(minimunDegreeText).toBeTruthy()

    const maximunDegreeText = screen.getByText('20ºc')
    expect(maximunDegreeText).toBeTruthy()

  })
})