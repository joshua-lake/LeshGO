import React from 'react'
import { Platform, StyleSheet, View } from 'react-native'
import { fireEvent, render, waitFor } from '@testing-library/react-native'
import Drive from '../src/components/Results/Drive'
import { isTaskDefined } from 'expo-task-manager'
import Walk from '../src/components/Results/Walk'

// it(`Co2 for specific vehicle returns correct data`, () => {
//     const
// })

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
    
    const { getByTestId, getByText, queryByTestId, toJSON } = render(<Walk data={data} undefinedData={undefinedData} />)

    // const input = getByTestId('emissions')

    expect(getByText(/1 hour and 2 minutes/)).toBeTruthy()


})