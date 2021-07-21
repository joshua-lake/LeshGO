import React from 'react'
import { render } from '@testing-library/react-native'
import Results from '../src/components/Results'

test('Results displays placeholder text when no route is selected', () => {
  const vehicle =   {
    "Year": 2021,
    "Make": "Acura",
    "Model": "ILX",
    "Vehicle Class": "Compact",
    "Engine Size": 2.4,
    "Cylinders": 4,
    "Transmission": "AM8",
    "Fuel": "Z",
    "Fuel Consumption": 9.9,
    "Fuel Consumption Hwy": 7,
    "Fuel Consumption Comb L": 8.6,
    "Fuel Consumption Comb MPG": 33,
    "CO2Emissions": 199,
    "CO2": 6,
    "Smog": 3
  }

  const mapRouteData = {
    walking: {},
    driving: {},
    transit: {},
    bicycling: {}
  }

  const { getAllByText } = render(<Results vehicle={vehicle} mapRouteData={mapRouteData}
                                        setSelectedRoute={null} selectedRoute={null}/>)

  expect(getAllByText(/please enter route/)).toBeTruthy()
})
