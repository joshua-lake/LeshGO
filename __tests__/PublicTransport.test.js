import React from 'react'
import { render } from '@testing-library/react-native'
import PublicTransport from '../src/components/Results/PublicTransport'

test('drive emmisionsKilogram returns number to two decimals', () => {
  const data = {
    mapRouteData: {
      transitData: {
        durationMIN: 32,
        distanceKM: 7.63
      }
    }
  }

  const undefinedData = {
    distance: 'please enter route',
    duration: 'please enter route'
  }

  const { getByText } = render(<PublicTransport data={data} undefinedData={undefinedData}/>)

  expect(getByText(/7.63/)).toBeTruthy()
})
