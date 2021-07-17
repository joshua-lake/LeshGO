import React from 'react'
import styled from 'styled-components/native'

import Walk from './Walk'
import Bike from './Bike'
import Drive from './Drive'
import PublicTransport from './PublicTransport'

function Results () {
  return (
    <StyledView>
      <StyledWalk>
       <Walk/>
      </StyledWalk>
      <StyledBike>
       <Bike/>
      </StyledBike>
      <StyledDrive>
       <Drive/>
      </StyledDrive>
      <StyledPublicTransport>
       <PublicTransport/>
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
