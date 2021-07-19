import React from 'react'
import styled from 'styled-components/native'
// import Icon from 'react-native-vector-icons/MaterialCommunityIcons'

function Bike (props) {
  const { distance, duration } = props.undefinedData.bike
  const { setTwoDecimals } = props

  return (
    props.data.mapRouteData.bicyclingData
    
    ? <StyledView>
        <StyledIcon>
          {/* <Icon name="bike" size={30} /> */}
          <Image source={require("../../../assets/bike.gif")}/>
        </StyledIcon>
        <FlexText>
          <StyledText>
            Distance: {setTwoDecimals(props.data.mapRouteData.bicyclingData.distanceKM)}KM
          </StyledText>
          <StyledText>
            Time: {setTwoDecimals(props.data.mapRouteData.bicyclingData.durationMIN)} mins
          </StyledText>
        </FlexText>
      </StyledView>
    
    : <StyledView>
        <StyledIcon>
        {/* <Icon name="bike" size={30} /> */}
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
height: 100%;
alignItems: center;
justifyContent: center;
padding-left: 5%;
padding-right: 5%;
`

const Image = styled.Image`
height: 95%;
width: 95%;
borderRadius: 50;
`


export default Bike
