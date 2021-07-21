import React from 'react'
import { render } from '@testing-library/react-native'
import Drive from '../src/components/Results/Drive'

test('drive emmisionsKilogram returns number to two decimals', () => {
  const data = {
    vehicle: {
      Make: 'Nissan',
      Model: 'Maxima',
      CO2Emissions: 233
    },
    mapRouteData: {
      drivingData: {
        distanceKM: 5,
        durationMIN: 15
      }
    }
  }
  const undefinedData = {
    distance: 0,
    duration: 0
  }

  const { getByText } = render(<Drive data={data} undefinedData={undefinedData}/>)

  expect(getByText(/C02: 1.17/)).toBeTruthy()
})
