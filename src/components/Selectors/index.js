import React from 'react'
import styled from 'styled-components/native'

// import ToLocation from './ToLocation'
// import FromLocation from './FromLocation'
import Vehicle from './Vehicle'
import GooglePlacesInput from './GooglePlacesInput'

const Selectors = ({ currentLocation, setDestination, setOrigin, setVehicleType }) => (
  <StyledView>

    <StyledFrom>
      <GooglePlacesInput currentLocation={currentLocation} placeHolderText={'Where are you coming from?'}
                         updateState={setOrigin} isOrigin={true}/>
      {/* <FromLocation/> */}
    </StyledFrom>
    <StyledTo>
      <GooglePlacesInput currentLocation={currentLocation} placeHolderText={'Where are you going?'}
                         updateState={setDestination} isOrigin={false}/>
      {/* <ToLocation/> */}
    </StyledTo>
    <StyledVehicle>
      <Vehicle setVehicleType={setVehicleType}/>
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

const StyledFrom = styled.View`
flex: 1;
alignItems: center;
width: 100%;
paddingTop: 2%
`

const StyledTo = styled.View`
flex: 1;
alignItems: center;
width: 100%;
paddingTop: 2%
paddingBottom: 1%;
`

const StyledVehicle = styled.View`
flex: 1;
backgroundColor: #F0FFF0;
padding-top:5%;
padding-bottom: 6%;
padding-left: 4%;
padding-right: 4%;
width: 100%;
alignItems: center;
justifyContent: center;
`

export default Selectors
