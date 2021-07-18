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
      <StyledContent>
      <Walk data={tempData.walk}/>
      </StyledContent>
      <StyledContent>
      <Bike data={tempData.bike}/>
      </StyledContent>
      <StyledContent>
      <Drive vehicleType={props.vehicleType} data={tempData.drive}/>
      </StyledContent>
      <StyledContent>
      <PublicTransport data={tempData.publicTransport}/>
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
background-color: lightgrey;
margin: 1%;
border-radius: 50px;
`

export default Results
