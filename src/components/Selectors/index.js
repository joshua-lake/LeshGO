import React from 'react'
import styled from 'styled-components/native'


import ToLocation from './ToLocation'
import FromLocation from './FromLocation'
import Vehicle from './Vehicle'

function Selectors () {
return (
  <StyledView>
    <StyledTo>
     <ToLocation/>
    </StyledTo>
    <StyledFrom>
     <FromLocation/>
    </StyledFrom>
    <StyledVehicle>
     <Vehicle/>
    </StyledVehicle>
  </StyledView>
)
}

export default Selectors

const StyledView = styled.View`
  flex: 1;
  flex-direction: column;
  background-color: red;
  alignItems: center;
  justifyContent: center;
  width: 100%;
`

const StyledTo = styled.View`
flex: 1;
background-color: yellow;
padding: 5%;
width: 100%;
`

const StyledFrom = styled.View`
flex: 1;
background-color: pink;
padding: 5%;
width: 100%;
`

const StyledVehicle = styled.View`
flex: 1;
background-color: green;
padding: 5%;
width: 100%;
`