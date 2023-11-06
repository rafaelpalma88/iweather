import { Input } from '../'
import { render, screen } from '@testing-library/react-native'

describe('Component: Input', () => {
  it('should render component Input', () => {
    render(<Input />)
    const activityIndicator = screen.queryByTestId('activity-indicator')
    expect(activityIndicator).toBeNull()

  })
  it('should render component Input with isLoading true', () => {
    render(<Input isLoading />)
    const activityIndicator = screen.queryByTestId('activity-indicator')
    expect(activityIndicator).toBeTruthy()

  })

  
})