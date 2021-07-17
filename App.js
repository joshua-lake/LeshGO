import { StatusBar } from 'expo-status-bar'
import React from 'react'
import styled from 'styled-components/native'

import Maps from './src/components/Maps'
import Selectors from './src/components/Selectors'
import Results from './src/components/Results'


const App = () => {
  return (
    <StyledView>
      <StyledSelector>
       <Selectors/>
      </StyledSelector>
      <StyledMap>
       <Maps/>
      </StyledMap>
      <StyledResult>
       <Results/>
      </StyledResult>
      <StatusBar style="auto"/> 
    </StyledView>
  )
}

const StyledView = styled.View`
  flex: 1;
  flex-direction: column;
  background-color: red;
  alignItems: center;
  justifyContent: center;
  padding-top: 8%;
  padding-bottom: 3%;
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
