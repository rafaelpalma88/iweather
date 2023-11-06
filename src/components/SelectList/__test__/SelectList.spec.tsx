import { fireEvent, render, screen } from '@testing-library/react-native'
import { SelectList } from '../'

describe('Component: SelectList', () => {
  it('should be return city details selected', () => {
    const data = [
      {id: '1', name: 'Campinas', latitude: 123, longitude: 456 },
      {id: '2', name: 'Campo Grande', latitude: 321, longitude: 654 },
      {id: '3', name: 'São Roque', latitude: 456, longitude: 890 }
    ]

    const onPress = jest.fn()

    render(
      <SelectList 
        data={data}
        onChange={() => {}}
        onPress={onPress}
      />
    )

    const selectedCity = screen.getByText(/campinas/i);

    fireEvent.press(selectedCity)

    expect(onPress).toHaveBeenCalledWith(data[0])

  })

  it('should be an empty returned array if cities is empty', () => {
    const onPress = jest.fn()

    render(
      <SelectList 
        data={[]}
        onChange={() => {}}
        onPress={onPress}
      />
    )

    const options = screen.getByTestId('options');

    expect(options.children).toHaveLength(0)

  })
})