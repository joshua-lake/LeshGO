import { StatusBar } from 'expo-status-bar'
import styled from 'styled-components/native'
import React, { useEffect, useState } from 'react'
import { LogBox, SafeAreaView, ScrollView } from 'react-native'
import * as TaskManager from 'expo-task-manager'
import * as Location from 'expo-location'

import Maps from './src/components/Maps/'
import Selectors from './src/components/Selectors/'
import Results from './src/components/Results'

const LOCATION_TASK_NAME = 'background-location-task'

const App = () => {

  const [vehicleType, setVehicleType] = useState() // <== Value of vehicle type, coming from selectors/vehicle

  console.log('vehicleType', vehicleType)
  const requestPermissions = async () => {
    const { status } = await Location.requestForegroundPermissionsAsync()
    if (status === 'granted') {
      await Location.startLocationUpdatesAsync(LOCATION_TASK_NAME, {
        accuracy: Location.Accuracy.Balanced,
      })
    }
  }

  const [vehicleType, setVehicleType] = useState('') // <== Value of vehicle type, coming from selectors/vehicle

  const [origin, setOrigin] = useState({})
  const [destination, setDestination] = useState({})

  const [markers, setMarkers] = useState([])

  const [selectedRoute, setSelectedRoute] = useState('walking')
  const [mapRouteData, setRouteData] = useState({
    walking: {},
    driving: {},
    transit: {},
    bicycling: {}
  })

  const [stateLocation, setStateLocations] = useState({})

  /**
   * initial mount useEffect, used for requesting location permission and setting location
   */
  useEffect(() => {
    LogBox.ignoreLogs(['VirtualizedLists should never be nested'])
    requestPermissions()
      .then(() => {
        Location.getCurrentPositionAsync()
          .then((location) => {
          })
      }) // TODO: tidy this
  }, [])

  TaskManager.defineTask(LOCATION_TASK_NAME, ({ data, error }) => {
    if (error) {
      return
    }
    if (data) {
      const { locations } = data
      const { coords } = locations[0]
      const { latitude, longitude } = coords // TODO: Tidy this?

      setStateLocations({ latitude, longitude } )
    }
  })

  /**
   * listens for coord changes to set markers
   */
  useEffect(() => {
    LogBox.ignoreLogs(['VirtualizedLists should never be nested'])
    setMarkers([{ coord: origin }, { coord: destination }])
  }, [origin, destination])

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <ScrollView keyboardShouldPersistTaps="always">
        <StyledView>
          <StyledSelector>
            {stateLocation !== undefined && <Selectors currentLocation={stateLocation} setVehicleType={setVehicleType} setOrigin={setOrigin}
                       setDestination={setDestination}/> }
          </StyledSelector>
          <StyledMap>
            <Maps markers={markers} setRouteData={setRouteData} mapRouteData={mapRouteData} origin={origin}
                  destination={destination} selectedRoute={selectedRoute}/>
          </StyledMap>
          <StyledResult>
            <Results vehicleType={vehicleType} mapRouteData={mapRouteData} setSelectedRoute={setSelectedRoute}/>
          </StyledResult>
          <StatusBar style="auto"/>
        </StyledView>
      </ScrollView>
    </SafeAreaView>
  )
}

const StyledView = styled.View`
  flex: 1;
  flex-direction: column;
  background-color: pink;
  alignItems: center;
  justifyContent: center;
`

const StyledSelector = styled.View`
  flex: 2;
  alignItems: center;
  justifyContent: center;
  width: 100%;
`

const StyledMap = styled.View`
  flex: 2;
  alignItems: center;
  justifyContent: center;
  width: 100%;
`

const StyledResult = styled.View`
  flex: 4;
  alignItems: center;
  justifyContent: center;
  width: 100%;
`

export default App
