import { render } from '@testing-library/react-native'
import Info from '../src/components/Info'
import React from 'react'

test('Check the Info Component renders with correct text', async () => {
  const { getByText } = render(<Info/>)
  expect(getByText(/Car Emission data:/)).toBeTruthy()
})
