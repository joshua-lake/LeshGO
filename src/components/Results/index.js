import React from 'react'
import styled from 'styled-components/native'

import Walk from './Walk'
import Bike from './Bike'
import Drive from './Drive'
import PublicTransport from './PublicTransport'

function Results (props) {

  const tempData = {
    walk: {
      distanceKM: 10,
      durationMIN: 50
    },
    bike: {
      distanceKM: 10,
      durationMIN: 20
    },
    drive: {
      distanceKM: 10,
      durationMIN: 15
    },
    publicTransport: {
      distanceKM: 10,
      durationMIN: 20
    }
  }

  return (
    <StyledView>
      <StyledWalk>
        <Walk data={tempData.walk}/>
      </StyledWalk>
      <StyledBike>
        <Bike data={tempData.bike}/>
      </StyledBike>
      <StyledDrive>
        <Drive vehicleType={props.vehicleType} data={tempData.drive}/>
      </StyledDrive>
      <StyledPublicTransport>
        <PublicTransport data={tempData.publicTransport}/>
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
