import React from 'react'
import styled from 'styled-components/native'
import { Text } from 'react-native'

function Drive (props) {

  const {data} = props
  const { distance, duration } = props.undefinedData.drive
  const { setTwoDecimals, selectedRoute } = props

  // calculates emmissions based on distance and vehicle, converts to KG
  const emmisionsCalculation = (data.vehicle && data.mapRouteData.drivingData) ? data.vehicle.CO2Emissions * data.mapRouteData.drivingData.distanceKM : null
  const emmisionsKilogram = emmisionsCalculation / 1000

  // creates current vehicle make and model
  const currentVehicle = data.vehicle ? `${data.vehicle.Make} ${data.vehicle.Model}` : null

  return (
    data.mapRouteData.drivingData
    
    ? <StyledView>
        <StyledIcon>    
          {selectedRoute === 'driving'
          ? <Image source={require("../../../assets/car.gif")}/>
          : <Image source={require("../../../assets/car.png")}/>
          } 
        </StyledIcon>
        <FlexText>
          <StyledText>
              {emmisionsKilogram
                  ? <Text>{currentVehicle} C02: {setTwoDecimals(emmisionsKilogram)} KGs </Text>
                  : 'Please select vehicle type'}
          </StyledText>
          <StyledText>
                Distance:{setTwoDecimals(data.mapRouteData.drivingData.distanceKM)}KM
          </StyledText>
          <StyledText>
                Time:{setTwoDecimals(data.mapRouteData.drivingData.durationMIN)}Mins
          </StyledText>
        </FlexText>
      </StyledView>

    : <StyledView>
        <StyledIcon>  
          <Image source={require("../../../assets/car.png")}/>
        </StyledIcon>
        <FlexText>
         <StyledText>
            {currentVehicle
              ? <Text>{currentVehicle}</Text>
              : 'Please select vehicle type'}
         </StyledText>
         <StyledText>
         Distance: <GreyText>{distance}</GreyText>
          </StyledText>
          <StyledText>
          Time: <GreyText>{duration}</GreyText>
         </StyledText>
        </FlexText>
      </StyledView>
  
  )
}


const StyledText = styled.Text`
  flex: 1;
  font-size: 16px;
  justifyContent: center;
`

const GreyText = styled.Text`
  flex: 1;
  font-size: 16px;
  padding: 1%;
  color: lightgrey;
`

const StyledView = styled.View`
flex: 1;
flex-direction: row;
alignItems: center;
`

const FlexText = styled.View`
flex: 4;
flex-direction: column;
height: 100%;
padding-top: 1%;
padding-bottom: 1%;
`

const StyledIcon = styled.View`
flex: 1;
height: 100%;
alignItems: center;
justifyContent: center;
padding-left: 5%;
padding-right: 5%;
`
const Image = styled.Image`
height: 40%;
width: 45%;
`


export default Drive
