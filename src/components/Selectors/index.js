import React from 'react'
import styled from 'styled-components/native'

// import ToLocation from './ToLocation'
// import FromLocation from './FromLocation'
import Vehicle from './Vehicle'
import GooglePlacesInput from './GooglePlacesInput'

const Selectors = ({ currentLocation, setDestination, setOrigin, setSelectedRoute, setVehicleMake, vehicleMake, setVehicle, vehicle }) => (
  <StyledView>
    <StyledFrom>
      <GooglePlacesInput currentLocation={currentLocation} placeHolderText={'Where are you coming from?'}
                         updateState={setOrigin} isOrigin={true} setSelectedRoute={setSelectedRoute}/>
    </StyledFrom>
    <StyledTo>
      <GooglePlacesInput currentLocation={currentLocation} placeHolderText={'Where are you going?'}
                         updateState={setDestination} isOrigin={false} setSelectedRoute={setSelectedRoute}/>
    </StyledTo>
    <StyledVehicle>
      <Vehicle setVehicleMake={setVehicleMake} vehicleMake={vehicleMake} setVehicle={setVehicle} vehicle={vehicle}/>
    </StyledVehicle>
  </StyledView>
)

const StyledView = styled.View`
flex: 1;
flex-direction: column;
alignItems: center;
width: 100%;
justifyContent: center;
`

const StyledFrom = styled.View`
flex: 1;
alignItems: center;
width: 100%;
paddingTop: 2%
borderTopWidth: 1px;
`

const StyledTo = styled.View`
flex: 1;
alignItems: center;
width: 100%;
paddingTop: 2%
paddingBottom: 1%;
borderTopWidth: 1px;
`

const StyledVehicle = styled.View`
flex: 1;
flex-direction: row;
padding-top: 5.5%;
padding-bottom: 5.5%;
padding-left: 6%;
padding-right: 4%;
width: 100%;
alignItems: center;
justifyContent: center;
borderTopWidth: 1px;
`

export default Selectors
