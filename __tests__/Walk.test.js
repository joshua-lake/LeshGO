import React from 'react'
import { render } from '@testing-library/react-native'
import Walk from '../src/components/Results/Walk'

test('drive emmisionsKilogram returns number to two decimals', () => {
  const data = {
    mapRouteData: {
      walkingData: {
        durationMIN: 62,
        distanceKM: 5
      }
    }
  }
  const undefinedData = {
    distance: 'please enter route',
    duration: 'please enter route'
  }

  const { getByText } = render(<Walk data={data} undefinedData={undefinedData}/>)

  expect(getByText(/1 hour and 2 minutes/)).toBeTruthy()
})
