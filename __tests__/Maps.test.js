import { getDistance } from '../src/components/Maps/helper'
import React from 'react'
import { render } from '@testing-library/react-native'
import Info from '../src/components/Info'

it('returns the correct distance between two points', () => {
  const distance = getDistance(-36.8509, 174.7645, 37.7749, -122.4194)
  expect(distance).toBe(10507.66748764703)
})

/**
 * broken lmao
 */
test('examples of some things', async () => {
  const { getByText } = render(<Info/>)
  expect(getByText(/900/)).toBeTruthy()
})
