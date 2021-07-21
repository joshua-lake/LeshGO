import React from 'react'
import styled from 'styled-components/native'
import { setTwoDecimals, timeConversion } from './helper'

function PublicTransport (props) {
  const { distance, duration } = props.undefinedData
  const { data } = props

  const busEmmissions = 0.68
  const totalEmmisionsCalculation = (props.data.mapRouteData.drivingData) ? busEmmissions * props.data.mapRouteData.drivingData.distanceKM : null
  const emmissionPerAverage = totalEmmisionsCalculation ? totalEmmisionsCalculation / 45 : null
  const { selectedRoute } = props

  return (
    data.mapRouteData.transitData
    ? <StyledView>
        <StyledIcon>
          {selectedRoute === 'transit'
          ? <Image source={require("../../../assets/train.gif")}/>
          : <Image source={require("../../../assets/train.png")}/>
          }
        </StyledIcon>
        <FlexText>
          <StyledText>
          <CO>C02: </CO>
          <CORight>{setTwoDecimals(emmissionPerAverage)} kg</CORight>
          </StyledText>
          <StyledText>
            <StyledTextLeft>Time: </StyledTextLeft>
            <StyledTextRight>{props.data.mapRouteData.transitData.durationMIN > 60 ? timeConversion(props.data.mapRouteData.transitData.durationMIN) : `${Math.floor(props.data.mapRouteData.transitData.durationMIN)} mins`}</StyledTextRight>
          </StyledText>
          <StyledText>
            <StyledTextLeft>Distance: </StyledTextLeft>
            <StyledTextRight>{setTwoDecimals(props.data.mapRouteData.transitData.distanceKM)} km</StyledTextRight>
          </StyledText>
        </FlexText>
      </StyledView>

    : <StyledView>
        <StyledIcon>
          <Image source={require("../../../assets/train.png")}/>
        </StyledIcon>
        <FlexText>
          <StyledText>
            <CO>CO2: </CO>
            <GreyText>please enter route</GreyText>
          </StyledText>
          <StyledText>
            <StyledTextLeft>Time:</StyledTextLeft>
            <GreyText>{duration}</GreyText>
          </StyledText>
          <StyledText>
            <StyledTextLeft>Distance: </StyledTextLeft>
            <GreyText>{distance}</GreyText>
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

const CO = styled.Text`
  flex: 0.7;
  font-size: 16px;
  text-align: right;
  font-weight: 900;
`

const StyledTextRight = styled.Text`
  flex: 2;
  font-size: 16px;
  padding-left: 7%;
`

const CORight = styled.Text`
  flex: 2;
  font-size: 16px;
  padding-left: 7%;
  font-weight: 900;
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
height: 130%;
alignItems: center;
justifyContent: center;
padding-left: 3%;
padding-right: 2%;
`

const Image = styled.Image`
height: 40%;
width: 40%;
`

export default PublicTransport
