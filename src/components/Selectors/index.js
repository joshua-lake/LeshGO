import React from 'react'
import styled from 'styled-components/native'

import ToLocation from './ToLocation'
import FromLocation from './FromLocation'
import Vehicle from './Vehicle'
import GooglePlacesInput from './GooglePlacesInput'

function Selectors (props) {
return (
  <StyledView>

    <StyledFrom>
     <GooglePlacesInput placeHolderText={"Where are you coming from?"} updateState={props.setOrigin}/>
     <FromLocation/>
    </StyledFrom>
    <StyledTo>
     <GooglePlacesInput placeHolderText={"Where are you going?"} updateState={props.setDestination}/>
     <ToLocation/>
    </StyledTo>
    <StyledVehicle>
    <Vehicle setVehicleType={props.setVehicleType}/>
    </StyledVehicle>
  </StyledView>
)
}
const StyledView = styled.View`
flex: 1;
flex-direction: column;
background-color: #F0FFF0;
alignItems: center;
width: 100%;
justifyContent: center;
`

const StyledTo = styled.View`
flex: 1;
alignItems: center;
width: 100%;
`

const StyledFrom = styled.View`
flex: 1;
alignItems: center;
width: 100%;
`

const StyledVehicle = styled.View`
flex: 1;
backgroundColor: #F0FFF0;
padding: 5%;
width: 100%;
`

export default Selectors
