import React from 'react'
import styled from 'styled-components/native'
import { setTwoDecimals, timeConversion } from './helper'

function Bike (props) {
  const { distance, duration } = props.undefinedData
  const { selectedRoute, data } = props

  return (
    data.mapRouteData.bicyclingData
    ? <StyledView>
          {selectedRoute === 'bicycling'
          ? <StyledGif><Gif source={require("../../../assets/bike.gif")}/></StyledGif>
          : <StyledIcon><Icon source={require("../../../assets/bike.png")}/></StyledIcon>
        }
        <FlexText>
          <StyledText>
            <StyledTextLeft>C02: </StyledTextLeft>
            <StyledTextRight>0 kg</StyledTextRight>
          </StyledText>
          <StyledText>
            <StyledTextLeft>Time: </StyledTextLeft>
            <StyledTextRight>{ props.data.mapRouteData.bicyclingData.durationMIN > 60 ? timeConversion(props.data.mapRouteData.bicyclingData.durationMIN) : `${Math.floor(props.data.mapRouteData.bicyclingData.durationMIN)} minutes`}</StyledTextRight>
          </StyledText>
          <StyledText>
            <StyledTextLeft>Distance: </StyledTextLeft>
            <StyledTextRight>{setTwoDecimals(props.data.mapRouteData.bicyclingData.distanceKM)} km</StyledTextRight>
          </StyledText>
        </FlexText>
      </StyledView>

    : <StyledView>
        <StyledIcon>
        <Icon source={require("../../../assets/bike.png")}/>
        </StyledIcon>
        <FlexText>
          <StyledText>
            <StyledTextLeft>CO2: </StyledTextLeft>
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
justifyContent: center;
padding: 1%;
`

const StyledIcon = styled.View`
flex: 1;
height: 90%;
alignItems: center;
justifyContent: center;
padding-left: 3%;
padding-right: 2%;
`

const StyledGif = styled.View`
flex: 1;
height: 100%;
alignItems: center;
justifyContent: center;
padding-left: 3%;
padding-right: 2%;
`

const Icon = styled.Image`
height: 65%;
width: 65%;
`

const Gif = styled.Image`
height: 60%;
width: 60%;
`


export default Bike
