import { StatusBar } from 'expo-status-bar'
import styled from 'styled-components/native'
import React, { useEffect, useState } from 'react'
import { LogBox, SafeAreaView, ScrollView } from 'react-native'
import AppLoading from 'expo-app-loading'

import Maps from './src/components/Maps/'
import Selectors from './src/components/Selectors/'
import Results from './src/components/Results'
import Info from './src/components/Info/Index'

LogBox.ignoreAllLogs(true) // TODO: Remove this


const delay = ms => new Promise(resolve => setTimeout(resolve, ms))

const busyWait = async () => {
  const result = await delay(6750)
  return Promise.all([result])
}

const App = () => {
  const [isReady, setIsReady] = useState(false)

  const [origin, setOrigin] = useState({})
  const [destination, setDestination] = useState({})
  const [stateLocation, setStateLocations] = useState({})

  const [vehicleMake, setVehicleMake] = useState('') // <== Value of vehicle type, coming from selectors/vehicle
  const [vehicle, setVehicle] = useState()

  const [infoClick, setInfoClick] = useState(false)

  const [markers, setMarkers] = useState([])
  const [selectedRoute, setSelectedRoute] = useState('')
  const [mapRouteData, setRouteData] = useState({
    walking: {},
    driving: {},
    transit: {},
    bicycling: {}
  })


  /**
   * listens for coord changes to set markers
   */
  useEffect(() => {
    LogBox.ignoreLogs(['VirtualizedLists should never be nested'])
    setMarkers([{ coord: origin }, { coord: destination }])
  }, [origin, destination])

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
      <ScrollView keyboardShouldPersistTaps="always">
        <StyledSelector>
          {stateLocation !== undefined &&
          <Selectors setVehicleMake={setVehicleMake} vehicleMake={vehicleMake} setOrigin={setOrigin}
                     setDestination={setDestination} setSelectedRoute={setSelectedRoute} setVehicle={setVehicle}
                     vehicle={vehicle}/>}
        </StyledSelector>
        <StyledMap>
          <Maps markers={markers} setRouteData={setRouteData} mapRouteData={mapRouteData} origin={origin}
                destination={destination} selectedRoute={selectedRoute}/>
        </StyledMap>
        <StyledResult>
          <Results vehicle={vehicle} mapRouteData={mapRouteData} setSelectedRoute={setSelectedRoute}
                   selectedRoute={selectedRoute}/>
        </StyledResult>
        <StatusBar style="auto"/>
        <Info setInfoClick={setInfoClick} infoClick={infoClick}/>
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
