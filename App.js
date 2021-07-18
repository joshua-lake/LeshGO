import { StatusBar } from 'expo-status-bar'
import styled from 'styled-components/native'
import React, { useEffect, useState } from 'react'
import { LogBox, SafeAreaView, ScrollView } from 'react-native'

import Maps from './src/components/Maps/'
import Selectors from './src/components/Selectors/'
import Results from './src/components/Results'

const App = () => {

  const [vehicleType, setVehicleType] = useState('') // <== Value of vehicle type, coming from selectors/vehicle

  useEffect(() => {
    LogBox.ignoreLogs(['VirtualizedLists should never be nested'])
    console.log(origin)
    console.log(destination)
  }, [])

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
      <ScrollView keyboardShouldPersistTaps="always">
        <StyledView>
          <StyledSelector>
            <Selectors setVehicleType={setVehicleType} setOrigin={setOrigin} setDestination={setDestination}/>
          </StyledSelector>
          <StyledMap>
            <Maps markers={markers} setRouteData={setRouteData} mapRouteData={mapRouteData} origin={origin} destination={destination}/>
          </StyledMap>
          <StyledResult>
            <Results vehicleType={vehicleType} mapRouteData={mapRouteData}/>
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
