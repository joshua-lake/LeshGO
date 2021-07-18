import React from 'react'
import {Pressable} from 'react-native'
import styled from 'styled-components/native'

import Walk from './Walk'
import Bike from './Bike'
import Drive from './Drive'
import PublicTransport from './PublicTransport'

function Results (props) {
  const {setSelectedRoute} = props

  function setTwoDecimals( value ){
    return +parseFloat(value).toFixed( 2 );
  }

  const undefinedData = {

    walk: { // <=== hard coded default display data
      distance: 'please enter',
      duration: 'please enter'
    },
    bike: {
      distance: 'please enter',
      duration: 'please enter'
    },
    drive: {
      distance: 'please enter',
      duration: 'please enter'
    },
    publicTransport: {
      distance: 'please enter',
      duration: 'please enter'
    }

  }

  return (
    <StyledView>
      <StyledContent>
        <Pressable onPress={() => setSelectedRoute('walking')}>
          <Walk data={props} undefinedData={undefinedData} setTwoDecimals={setTwoDecimals}/>
        </Pressable>
        </StyledContent>

      <StyledContent>
        <Pressable onPress={() => setSelectedRoute('bicycling')}>
          <Bike data={props} undefinedData={undefinedData} setTwoDecimals={setTwoDecimals}/>
        </Pressable>
        </StyledContent>

      <StyledContent>
        <Pressable onPress={() => setSelectedRoute('driving')}>
          <Drive data={props} undefinedData={undefinedData} vehicleType={props.vehicleType} setTwoDecimals={setTwoDecimals}/>
        </Pressable>
        </StyledContent>

      <StyledContent>
        <Pressable onPress={() => setSelectedRoute('transit')}>
          <PublicTransport data={props} undefinedData={undefinedData} setTwoDecimals={setTwoDecimals}/>
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
`

const StyledContent = styled.View`
flex: 1;
width: 100%;
background-color: white;
margin: 1%;
border-radius: 50px;
`

export default Results
