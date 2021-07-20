import React from 'react'
import styled from 'styled-components/native'
import { Text } from 'react-native'

import { setTwoDecimals, timeConversion } from './helper'

function Drive (props) {

  const {data} = props
  const { distance, duration } = props.undefinedData
  const { selectedRoute } = props

  // calculates emmissions based on distance and vehicle, converts to KG
  const emmisionsCalculation = (data.vehicle && data.mapRouteData.drivingData) ? data.vehicle.CO2Emissions * data.mapRouteData.drivingData.distanceKM : null
  const emmisionsKilogram = emmisionsCalculation / 1000

  console.log('test', emmisionsKilogram)

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
            <StyledTextLeft>Co2: </StyledTextLeft>
              {data.vehicle
                ? <StyledTextRight>{setTwoDecimals(emmisionsKilogram)} kg</StyledTextRight>
                : <GreyText>Please select vehicle type</GreyText>}
          </StyledText>
          <StyledText>
            <StyledTextLeft>Distance: </StyledTextLeft>
            <StyledTextRight>{setTwoDecimals(data.mapRouteData.drivingData.distanceKM)} km</StyledTextRight>
          </StyledText>
          <StyledText>
            <StyledTextLeft>Time: </StyledTextLeft>
            <StyledTextRight>{data.mapRouteData.drivingData.durationMIN > 60 ? timeConversion(data.mapRouteData.drivingData.durationMIN) : `${Math.floor(data.mapRouteData.drivingData.durationMIN)} minutes`}</StyledTextRight>
          </StyledText>
        </FlexText>
      </StyledView>

    : <StyledView>
        <StyledIcon>  
          <Image source={require("../../../assets/car.png")}/>
        </StyledIcon>
        <FlexText>
        <StyledText>
            <StyledTextLeft>CO2: </StyledTextLeft>
            <GreyText>please select vehicle</GreyText>
          </StyledText>  
          <StyledText>
            <StyledTextLeft>Distance: </StyledTextLeft>
            <GreyText>{distance}</GreyText>
          </StyledText>
          <StyledText>
            <StyledTextLeft>Time:</StyledTextLeft>
            <GreyText>{duration}</GreyText>
          </StyledText>
        </FlexText>
      </StyledView>

  )
}

const StyledText = styled.View`
  flex: 1;
  flex-direction: row;
  font-size: 16px;
`

const StyledTextLeft = styled.Text`
  flex: 0.7;
  font-size: 16px;
  text-align: right;
`

const StyledTextRight = styled.Text`
  flex: 2;
  font-size: 16px;
  padding-left: 7%;
`

const GreyText = styled.Text`
  flex: 2;
  font-size: 16px;
  color: lightgrey;
  padding-left: 6%;
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
justifyContent: center;
`

const StyledIcon = styled.View`
flex: 1;
height: 100%;
alignItems: center;
justifyContent: center;
padding-left: 3%;
padding-right: 2%;
`

const Image = styled.Image`
height: 40%;
width: 40%;
`

export default Drive
