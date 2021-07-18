import React from 'react'
import styled from 'styled-components/native'

import ToLocation from './ToLocation'
import FromLocation from './FromLocation'
import Vehicle from './Vehicle'
import GooglePlacesInput from './GooglePlacesInput'

const Selectors = ({ currentLocation, setDestination, setOrigin, setVehicleType }) => (
  <StyledView>

    <StyledFrom>
      <GooglePlacesInput currentLocation={currentLocation} placeHolderText={'Where are you coming from?'}
                         updateState={setOrigin} isOrigin={true}/>
      <FromLocation/>
    </StyledFrom>
    <StyledTo>
      <GooglePlacesInput currentLocation={currentLocation} placeHolderText={'Where are you going?'}
                         updateState={setDestination} isOrigin={false}/>
      <ToLocation/>
    </StyledTo>
    <StyledVehicle>
      <Vehicle setVehicleType={setVehicleType}/>
    </StyledVehicle>
  </StyledView>
)

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

export default Selectors
