import { StatusBar } from 'expo-status-bar'
import styled from 'styled-components/native'
import React, { useEffect, useState } from 'react'
import { SafeAreaView, LogBox } from 'react-native'


import Maps from './src/components/Maps/'
import Selectors from './src/components/Selectors/'
import Results from './src/components/Results'

const App = () => {

const [vehicleType, setVehicleType] = useState('') // <== Value of vehicle type, coming from selectors/vehicle
console.log('app vehicle type', vehicleType)

  useEffect(() => {
    LogBox.ignoreLogs(['VirtualizedLists should never be nested']);
    console.log(origin)
    console.log(destination)
  }, [])

  const [origin, setOrigin] = useState({})
  const [destination, setDestination] = useState({})

  return (
    <SafeAreaView style={{ flex: 1, flexDirection: 'column' }}>
      <StyledSelector>
      <Selectors setVehicleType={setVehicleType} setOrigin={setOrigin} setDestination={setDestination}/>
      </StyledSelector>
      <StyledMap>
      <Maps origin={origin} destination={destination}/>
      </StyledMap>
      <StyledResult>
      <Results vehicleType={vehicleType}/>
      </StyledResult>
      <StatusBar style="auto"/>
  </SafeAreaView>
  )
}

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
flex: 3;
alignItems: center;
justifyContent: center;
width: 100%;
`

export default App
      