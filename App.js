import { StatusBar } from 'expo-status-bar'
import styled from 'styled-components/native'
import React, { useEffect, useState } from 'react'
import { LogBox, SafeAreaView, ScrollView } from 'react-native'
import * as TaskManager from 'expo-task-manager'
import * as Location from 'expo-location'
import Icon from 'react-native-vector-icons/FontAwesome5'

import Maps from './src/components/Maps/'
import Selectors from './src/components/Selectors/'
import Results from './src/components/Results'

const LOCATION_TASK_NAME = 'background-location-task'

  const App = () => {

  const requestPermissions = async () => {
    const { status } = await Location.requestBackgroundPermissionsAsync()
    if (status === 'granted') {
      await Location.startLocationUpdatesAsync(LOCATION_TASK_NAME, {
        accuracy: Location.Accuracy.BestForNavigation,
      })
    }
  }

  const [vehicleType, setVehicleType] = useState('') // <== Value of vehicle type, coming from selectors/vehicle
  const [origin, setOrigin] = useState({})
  const [destination, setDestination] = useState({})
  const [markers, setMarkers] = useState([])
  const [selectedRoute, setSelectedRoute] = useState('walking')
  const [stateLocation, setStateLocations] = useState({})
  const [mapRouteData, setRouteData] = useState({
    walking: {},
    driving: {},
    transit: {},
    bicycling: {}
  })

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

  /**
   * listens for coord changes to set markers
   */
  useEffect(() => {
    LogBox.ignoreLogs(['VirtualizedLists should never be nested'])
    setMarkers([{ coord: origin }, { coord: destination }])
  }, [origin, destination])

  TaskManager.defineTask(LOCATION_TASK_NAME, ({ data, error }) => {
    if (error) {
      return
    }
    if (data) {
      const { locations } = data
      const { coords } = locations[0]
      const { latitude, longitude } = coords // TODO: Tidy this?

      setStateLocations({ latitude, longitude })
    }
  })

  return (
    <SafeAreaView style={{ flex: 1, flexDirection: 'column' }}>
      <ScrollView keyboardShouldPersistTaps="always" >
          <StyledSelector>
            {stateLocation !== undefined && <Selectors currentLocation={stateLocation} setVehicleType={setVehicleType} setOrigin={setOrigin}
                       setDestination={setDestination}/> }
          </StyledSelector>
          <StyledMap>
            <Maps markers={markers} setRouteData={setRouteData} mapRouteData={mapRouteData} origin={origin}
                  destination={destination} selectedRoute={selectedRoute}/>
                  <Icon name="location-arrow" size={20} onPress={e => console.log('button pressed!')} style={{ position: 'absolute', right: '5%', bottom: '5%' }}/>
          </StyledMap>
          <StyledResult>
            <Results vehicleType={vehicleType} mapRouteData={mapRouteData} setSelectedRoute={setSelectedRoute}/>
          </StyledResult>
          <StatusBar style="auto"/>
      </ScrollView>
    </SafeAreaView>
  )
}

const StyledSelector = styled.View`
  flex: 1.5;
  alignItems: center;
  justifyContent: center;
  width: 100%;
  borderBottomWidth: 1px;
`

const StyledMap = styled.View`
  flex: 2;
  alignItems: center;
  justifyContent: center;
  width: 100%;
`

const StyledResult = styled.View`
  flex: 3;
  alignItems: center;
  justifyContent: center;
  width: 100%;
  borderTopWidth: 1px;
`

  // background-color: #F0FFF0;

export default App
