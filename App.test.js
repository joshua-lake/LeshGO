import React from 'react'
import { render } from '@testing-library/react-native'
import Info from './src/components/Info'

test('examples of some things', async () => {
  const { getByTestId, getByText, queryByTestId, toJSON } = render(<Info/>)
  expect(1).toBe(1)
})
