import React from 'react'
import styled from 'styled-components/native'
import { setTwoDecimals, timeConversion } from './helper'

function Walk (props) {
  const { distance, duration } = props.undefinedData
  const { selectedRoute } = props

  return (
    props.data.mapRouteData.walkingData

    ? <StyledView>
        <StyledIcon>
          {selectedRoute === 'walking'
          ? <Image source={require("../../../assets/stickwalk.gif")}/>
          : <Image source={require("../../../assets/stickwalk.png")}/>
        } 
        </StyledIcon>
        <FlexText>
          <StyledText>
            <StyledTextLeft>Distance: </StyledTextLeft>
            <StyledTextRight>{setTwoDecimals(props.data.mapRouteData.walkingData.distanceKM)} km</StyledTextRight>
          </StyledText>
          <StyledText>
            <StyledTextLeft>Time: </StyledTextLeft>
            <StyledTextRight>{props.data.mapRouteData.walkingData.durationMIN > 60 ? timeConversion(props.data.mapRouteData.walkingData.durationMIN) : `${Math.floor(props.data.mapRouteData.walkingData.durationMIN)} mins`}</StyledTextRight>
          </StyledText>
        </FlexText>
      </StyledView>

    : <StyledView>
        <StyledIcon>
        <Image source={require("../../../assets/stickwalk.png")}/>
        </StyledIcon>
        <FlexText>
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
  padding: 1.5%;
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
height: 100%;
alignItems: center;
justifyContent: center;
padding-left: 3%;
padding-right: 2%;
`

const Image = styled.Image`
height: 65%;
width: 65%;
`

export default Walk
