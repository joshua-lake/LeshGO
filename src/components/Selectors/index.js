import React from 'react'
import styled from 'styled-components/native'

// import ToLocation from './ToLocation'
// import FromLocation from './FromLocation'
import Vehicle from './Vehicle'
import GooglePlacesInput from './GooglePlacesInput'

const Selectors = ({ currentLocation, setDestination, setOrigin, setVehicleMake, vehicleMake, setVehicle, vehicle }) => (
  <StyledView>

    <StyledFrom>
      <GooglePlacesInput currentLocation={currentLocation} placeHolderText={'Where are you coming from?'}
                         updateState={setOrigin} isOrigin={true}/>
    </StyledFrom>
    <StyledTo>
      <GooglePlacesInput currentLocation={currentLocation} placeHolderText={'Where are you going?'}
                         updateState={setDestination} isOrigin={false}/>
    </StyledTo>
    <StyledVehicle>
      <Vehicle setVehicleMake={setVehicleMake} vehicleMake={vehicleMake} setVehicle={setVehicle} vehicle={vehicle}/>
    </StyledVehicle>
  </StyledView>
)
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
paddingTop: 2%
`

const StyledFrom = styled.View`
flex: 1;
alignItems: center;
width: 100%;
paddingTop: 2%
`

const StyledVehicle = styled.View`
flex: 1;
backgroundColor: #F0FFF0;
padding-top: 2%;
padding-bottom: 6%;
padding-left: 4%;
padding-right: 4%;
width: 100%;
alignItems: center;
justifyContent: center;
`

export default Selectors
