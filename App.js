import { StatusBar } from 'expo-status-bar'
import styled from 'styled-components/native'
import React, { useEffect, useState } from 'react'
import { LogBox, SafeAreaView, ScrollView, Text, View } from 'react-native'

import Maps from './src/components/Maps/'
import Results from './src/components/Results'
import GooglePlacesInput from './src/components/Selectors/GooglePlacesInput'
import Selectors from './src/components/Selectors'

const App = () => {

  const [vehicleType, setVehicleType] = useState('') // <== Value of vehicle type, coming from selectors/vehicle
  console.log('app vehicle type', vehicleType)

  const [origin, setOrigin] = useState({})
  const [destination, setDestination] = useState({})

  const [markers, setMarkers] = useState([])

  const [mapRouteData, setRouteData] = useState({
    walking: {},
    driving: {},
    transit: {},
    bicycling: {}
  })

  useEffect(() => {
    LogBox.ignoreLogs(['VirtualizedLists should never be nested'])
    setMarkers([{ coord: origin }, { coord: destination }])
  }, [origin, destination])

  return (
    <SafeAreaView style={{ flex: 1 }}>
    <ScrollView keyboardShouldPersistTaps='always'>
    <StyledView>
      <StyledSelector>
        <GooglePlacesInput placeHolderText={'From...'} updateState={setOrigin}/>
        <GooglePlacesInput placeHolderText={'To...'} updateState={setDestination}/>
        {/*<Selectors setVehicleType={setVehicleType} setOrigin={setOrigin} setDestination={setDestination}/>*/}
      </StyledSelector>
      <StyledMap>
        <Maps markers={markers} setRouteData={setRouteData} mapRouteData={mapRouteData} origin={origin} destination={destination}/>
      </StyledMap>
      <StyledResult>
      <Results vehicleType={vehicleType}/>
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
