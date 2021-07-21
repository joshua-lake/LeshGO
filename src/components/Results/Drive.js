import React from 'react'
import styled from 'styled-components/native'
import { Text } from 'react-native'

import { setTwoDecimals, timeConversion, emissionsCalculator } from './helper'

function Drive (props) {

  const {data} = props
  const { distance, duration } = props.undefinedData
  const { selectedRoute } = props

  const emmisionsCalculation = (data.vehicle && data.mapRouteData.drivingData) && emissionsCalculator(data.vehicle.CO2Emissions, data.mapRouteData.drivingData.distanceKM)

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
            {data.vehicle
                ? <Text>C02: {setTwoDecimals(emmisionsCalculation)} KGs </Text>
                : 'Please select vehicle type'}
          </StyledText>
          <StyledText>
              Distance: {setTwoDecimals(data.mapRouteData.drivingData.distanceKM)} KM
          </StyledText>
          <StyledText>
              Time: { data.mapRouteData.drivingData.durationMIN > 60 ? timeConversion(data.mapRouteData.drivingData.durationMIN) : `${Math.floor(data.mapRouteData.drivingData.durationMIN)} minutes`}
          </StyledText>
        </FlexText>
      </StyledView>

    : <StyledView>
        <StyledIcon>  
          <Image source={require("../../../assets/car.png")}/>
        </StyledIcon>
        <FlexText>
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
