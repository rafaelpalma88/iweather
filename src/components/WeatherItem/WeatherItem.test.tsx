import thermometer from '@assets/thermometer.svg'
import { render, screen } from '@testing-library/react-native'
import { WeatherItem } from '@components/WeatherItem'
import '@testing-library/jest-dom';

describe('Component: WheatherItem', () => {
  it('should render WheatherItem that its is not last', () => {

    render(<WeatherItem icon={thermometer} title='Sensação térmica' value='27ºc' />)
    // terminar de fazer este teste checando se temos um css diferente do border bottom

    expect(screen.getByText('Sensação térmica')).toBeTruthy()
    expect(screen.getByText('27ºc')).toBeTruthy()
    expect(1).toBe(2)
  })

  it('should render WheatherItem that its last', () => {

    render(<WeatherItem icon={thermometer} title='Sensação térmica' value='27ºc' isLast={true} />)
    
    expect(screen.getByText('Sensação térmica')).toBeTruthy()
    expect(screen.getByText('27ºc')).toBeTruthy()
  })
})
