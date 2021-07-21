import React from 'react'
import styled from 'styled-components/native'
import { setTwoDecimals, timeConversion } from './helper'
// import Icon from 'react-native-vector-icons/FontAwesome'

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
            C02: {setTwoDecimals(emmissionPerAverage)} KG
          </StyledText>
          <StyledText>
            Distance: {setTwoDecimals(data.mapRouteData.transitData.distanceKM)} KM
          </StyledText>
          <StyledText>
            Time: { data.mapRouteData.transitData.durationMIN > 60 ? timeConversion(data.mapRouteData.transitData.durationMIN) : `${Math.floor(data.mapRouteData.transitData.durationMIN)} minutes`}
          </StyledText>
        </FlexText>
      </StyledView>

    : <StyledView>
        <StyledIcon>
          <Image source={require("../../../assets/train.png")}/>
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
height: 100%;
alignItems: center;
justifyContent: center;
padding-left: 5%;
padding-right: 5%;
`

const Image = styled.Image`
height: 50%;
width: 40%;
`

export default PublicTransport
