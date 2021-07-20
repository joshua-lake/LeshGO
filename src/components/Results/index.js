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

  function timeConversion (num) {
    const time = num
    const hours = time /60
    const floorHours = Math.floor(hours)
    const minutes = (hours - floorHours) * 60
    const roundMinutes = Math.round(minutes)
    return floorHours < 2 ? floorHours + ' hour and ' + roundMinutes + ' minutes' : floorHours + ' hours and ' + roundMinutes + ' minutes'
  }

  const undefinedData = {

    walk: { // <=== hard coded default display data
      distance: 'please enter route',
      duration: 'please enter route'
    },
    bike: {
      distance: 'please enter route',
      duration: 'please enter route'
    },
    drive: {
      distance: 'please enter route',
      duration: 'please enter route'
    },
    publicTransport: {
      distance: 'please enter route',
      duration: 'please enter route'
    }

  }

  return (
    <StyledView>
      <StyledContent>
        <Pressable onPress={() => setSelectedRoute('walking')}>
          <Walk data={props} undefinedData={undefinedData} setTwoDecimals={setTwoDecimals} />
        </Pressable>
        </StyledContent>

      <StyledContent>
        <Pressable onPress={() => setSelectedRoute('bicycling')}>
          <Bike data={props} undefinedData={undefinedData} setTwoDecimals={setTwoDecimals} timeConversion={timeConversion}/>
        </Pressable>
        </StyledContent>

      <StyledContent>
        <Pressable onPress={() => setSelectedRoute('driving')}>
          <Drive data={props} undefinedData={undefinedData} setTwoDecimals={setTwoDecimals} timeConversion={timeConversion}/>
        </Pressable>
        </StyledContent>

      <StyledContent>
        <Pressable onPress={() => setSelectedRoute('transit')}>
          <PublicTransport data={props} undefinedData={undefinedData} setTwoDecimals={setTwoDecimals} timeConversion={timeConversion}/>
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
