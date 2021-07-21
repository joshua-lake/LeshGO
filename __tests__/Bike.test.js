import React from 'react'
import { Platform, StyleSheet, View } from 'react-native'
import { fireEvent, render, waitFor } from '@testing-library/react-native'
import Drive from '../src/components/Results/Drive'
import { isTaskDefined } from 'expo-task-manager'

// it(`Co2 for specific vehicle returns correct data`, () => {
//     const
// })

test('drive emmisionsKilogram returns number to two decimals', () => {
    const data = {
      mapRouteData: {
        bicyclingData: {
          durationMIN: 18,
          distanceKM: 4
        }
      }
    }
    
    const { getByTestId, getByText, queryByTestId, toJSON } = render(<Bike data={data} undefinedData={undefinedData} />)

    // const input = getByTestId('emissions')

    expect(getByText(/18/)).toBeTruthy()


})

data.mapRouteData.bicyclingData.durationMIN