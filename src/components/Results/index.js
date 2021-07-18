import React from 'react'
import {Pressable} from 'react-native'
import styled from 'styled-components/native'

import Walk from './Walk'
import Bike from './Bike'
import Drive from './Drive'
import PublicTransport from './PublicTransport'

function Results (props) {
  const {setSelectedRoute} = props


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

      <StyledWalk>
        <Pressable onPress={() => setSelectedRoute('walking')}>
          <Walk data={props} undefinedData={undefinedData}/>
        </Pressable>
      </StyledWalk>

      <StyledBike>
        <Pressable onPress={() => setSelectedRoute('bicycling')}>
          <Bike data={props} undefinedData={undefinedData}/>
        </Pressable>
      </StyledBike>

      <StyledDrive>
        <Pressable onPress={() => setSelectedRoute('driving')}>
          <Drive data={props} undefinedData={undefinedData} vehicleType={props.vehicleType}/>
        </Pressable>
      </StyledDrive>

      <StyledPublicTransport>
        <Pressable onPress={() => setSelectedRoute('transit')}>
          <PublicTransport data={props} undefinedData={undefinedData}/>
        </Pressable>
      </StyledPublicTransport>
    </StyledView>
  )
}

const StyledView = styled.View`
  flex: 1;
  flex-direction: column;
  background-color: white;
  alignItems: center;
  justifyContent: center;
  width: 100%;
`

const StyledWalk = styled.View`
  flex: 1;
  background-color: pink;
  padding: 5%;
  width: 100%;
`

const StyledBike = styled.View`
  flex: 1;
  background-color: yellow;
  padding: 5%;
  width: 100%;
`

const StyledDrive = styled.View`
  flex: 1;
  background-color: black;
  padding: 5%;
  width: 100%;
`

const StyledPublicTransport = styled.View`
  flex: 1;
  background-color: white;
  padding: 5%;
  width: 100%;
`

export default Results
