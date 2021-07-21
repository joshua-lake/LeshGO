import React from 'react'
import { Platform, StyleSheet, View } from 'react-native'
import { fireEvent, render, waitFor } from '@testing-library/react-native'
import Drive from '../src/components/Results/Drive'
import { isTaskDefined } from 'expo-task-manager'
import PublicTransport from '../src/components/Results/PublicTransport'

// it(`Co2 for specific vehicle returns correct data`, () => {
//     const
// })

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
    
    const { getByTestId, getByText, queryByTestId, toJSON } = render(<PublicTransport data={data} undefinedData={undefinedData} />)

    // const input = getByTestId('emissions')

    expect(getByText(/7.63/)).toBeTruthy()


})