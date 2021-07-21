import React from 'react'
import { render } from '@testing-library/react-native'
import Bike from '../src/components/Results/Bike'

test('drive emmisionsKilogram returns number to two decimals', () => {
  const data = {
    mapRouteData: {
      bicyclingData: {
        durationMIN: 18,
        distanceKM: 4
      }
    }
  }

  const undefinedData = {
    distance: 'please enter route',
    duration: 'please enter route'
  }

  const { getByText } = render(<Bike data={data} undefinedData={undefinedData}/>)

  expect(getByText(/18/)).toBeTruthy()
})
