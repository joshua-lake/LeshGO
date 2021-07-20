import React from 'react'
import {Pressable} from 'react-native'
import styled from 'styled-components/native'

import Walk from './Walk'
import Bike from './Bike'
import Drive from './Drive'
import PublicTransport from './PublicTransport'

const Results = props => {
  const {setSelectedRoute} = props

  const undefinedData = {  // <=== hard coded default display data
      distance: 'please enter route',
      duration: 'please enter route'
    }
    
  return (
    <StyledView>
      <StyledContent>
        <Pressable onPress={() => setSelectedRoute('walking')}>
          <Walk data={props} undefinedData={undefinedData}/>
        </Pressable>
        </StyledContent>

      <StyledContent>
        <Pressable onPress={() => setSelectedRoute('bicycling')}>
          <Bike data={props} undefinedData={undefinedData}/>
        </Pressable>
        </StyledContent>

      <StyledContent>
        <Pressable onPress={() => setSelectedRoute('driving')}>
          <Drive data={props} undefinedData={undefinedData}/>
        </Pressable>
        </StyledContent>

      <StyledContent>
        <Pressable onPress={() => setSelectedRoute('transit')}>
          <PublicTransport data={props} undefinedData={undefinedData}/>
        </Pressable>
        </StyledContent>
    </StyledView>
  )
}

const StyledView = styled.View`
  flex: 1;
  flex-direction: column;
  alignItems: center;
  justifyContent: center;
  width: 100%;
  margin-top: 2%;
`

const StyledContent = styled.View`
flex: 1;
width: 95%;
margin-top: 1%;
margin-bottom: 1%;
margin-left: 2%;
margin-right: 2%;
border: solid;
border-radius: 50px;
`

export default Results
