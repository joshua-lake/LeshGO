import { StatusBar } from 'expo-status-bar'
import styled from 'styled-components/native'
import React, { useEffect, useState } from 'react'
import { LogBox, SafeAreaView, ScrollView } from 'react-native'
import * as TaskManager from 'expo-task-manager'
import * as Location from 'expo-location'
import Icon from 'react-native-vector-icons/FontAwesome5'

// import Load from './src/components/Load'
import { Asset } from 'expo-asset';
import AppLoading from 'expo-app-loading';

import Maps from './src/components/Maps/'
import Selectors from './src/components/Selectors/'
import Results from './src/components/Results'


const LOCATION_TASK_NAME = 'background-location-task'

const delay = ms => new Promise(resolve => setTimeout(resolve, ms));
const busyWait = async () => {
  const result = await delay(5000)
  return Promise.all(result);
}

  const App = () => {
    const [isReady, setIsReady] = useState(false)


    
  const requestPermissions = async () => {
    const { status } = await Location.requestBackgroundPermissionsAsync()
    if (status === 'granted') {
      await Location.startLocationUpdatesAsync(LOCATION_TASK_NAME, {
        accuracy: Location.Accuracy.BestForNavigation,
      })
    }
  }

  const [vehicleMake, setVehicleMake] = useState('') // <== Value of vehicle type, coming from selectors/vehicle
  const [vehicle, setVehicle] = useState()
  const [origin, setOrigin] = useState({})
  const [destination, setDestination] = useState({})
  const [markers, setMarkers] = useState([])
  const [selectedRoute, setSelectedRoute] = useState('')
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
if (!isReady) {
    return (
      <AppLoading
      startAsync={busyWait}
      onFinish={() => setIsReady(!isReady)}
      onError={console.warn}
      />
      )
    }

  return (
    <SafeAreaView style={{ flex: 1, flexDirection: 'column', backgroundColor: '#FFFFFF' }}>
      <ScrollView keyboardShouldPersistTaps="always" >
          <StyledSelector>
            {stateLocation !== undefined && 
            <Selectors currentLocation={stateLocation} setVehicleMake={setVehicleMake} vehicleMake={vehicleMake} setOrigin={setOrigin}
                       setDestination={setDestination} setSelectedRoute={setSelectedRoute} setVehicle={setVehicle} vehicle={vehicle}/> }
          </StyledSelector>
          <StyledMap>
            <Maps markers={markers} setRouteData={setRouteData} mapRouteData={mapRouteData} origin={origin}
                  destination={destination} selectedRoute={selectedRoute}/>
          </StyledMap>
          <StyledResult>
            <Results vehicle={vehicle} mapRouteData={mapRouteData} setSelectedRoute={setSelectedRoute} selectedRoute={selectedRoute}/>
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

export default App
