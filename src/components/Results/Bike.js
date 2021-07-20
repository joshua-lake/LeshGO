import React from 'react'
import styled from 'styled-components/native'
import { setTwoDecimals, timeConversion } from './helper'
// import Icon from 'react-native-vector-icons/MaterialCommunityIcons'

function Bike (props) {
  const { distance, duration } = props.undefinedData
  const { selectedRoute } = props

  return (
    props.data.mapRouteData.bicyclingData
    ? <StyledView>
        <StyledIcon>
          {selectedRoute === 'bicycling'
          ? <Image source={require("../../../assets/bike.gif")}/>
          : <Image source={require("../../../assets/bike.png")}/>
        } 
        </StyledIcon>
        <FlexText>
          <StyledText>
            Distance: {setTwoDecimals(props.data.mapRouteData.bicyclingData.distanceKM)} KM
          </StyledText>
          <StyledText>
          Time: { props.data.mapRouteData.bicyclingData.durationMIN > 60 ? timeConversion(props.data.mapRouteData.bicyclingData.durationMIN) : `${Math.floor(props.data.mapRouteData.bicyclingData.durationMIN)} minutes`}
          </StyledText>
        </FlexText>
      </StyledView>

    : <StyledView>
        <StyledIcon>
        <Image source={require("../../../assets/bike.png")}/>
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
  padding: 1%;
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
padding-top: 2%;
padding-bottom: 2%;
justifyContent: center;
`

const StyledIcon = styled.View`
flex: 1;
height: 60%;
alignItems: center;
justifyContent: center;
padding-left: 5%;
padding-right: 5%;
`

const Image = styled.Image`
height: 95%;
width: 95%;
`


export default Bike
