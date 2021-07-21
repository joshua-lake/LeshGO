import { render, fireEvent } from '@testing-library/react-native'
import Info from '../src/components/Info'
import React from 'react'

test('Check the Info Component renders with correct text', () => {
  const { getByText, getByTestId } = render(<Info/>)

  // const button = getByTestId('infoButton')
  // fireEvent.press(button)
  expect(getByText(/emissions for car trips/)).toBeTruthy()
})
