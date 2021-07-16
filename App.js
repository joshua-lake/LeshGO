import { StatusBar } from 'expo-status-bar'
import React from 'react'
import styled from 'styled-components/native'

// import Maps from './src/components/Maps'
import Selectors from './src/components/Selectors'
import Results from './src/components/Results'


const App = () => {
  return (
    <StyledView>
       <Selectors/>
       {/* <Maps/> */}
      <Results/>
      <StatusBar style="auto"/> 
    </StyledView>
  )
}

const StyledView = styled.View`
  flex: 1;
  background-color: red;
  alignItems: center;
  justifyContent: center;
`

export default App
