// import { shallow } from 'enzyme'
// import { isTaskDefined } from 'expo-task-manager'
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
        vehicle: {
            Make: "Nissan",
            Model: "Maxima",
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

    const { getByTestId, getByText, queryByTestId, toJSON } = render(<Drive data={data} undefinedData={undefinedData} />)

    // const input = getByTestId('emissions')

    expect(getByText(/C02: 1.17/)).toBeTruthy()


})