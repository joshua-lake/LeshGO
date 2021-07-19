import React from 'react'
import styled from 'styled-components/native'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'

function Bike (props) {
  const { distance, duration } = props.undefinedData.bike
  const { setTwoDecimals } = props

  return (
    props.data.mapRouteData.bicyclingData
    
    ? <StyledView>
        <StyledIcon>
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
        <Image source={require("../../../assets/bike.gif")}/>
        </StyledIcon>
        <FlexText>
          <StyledText>
          Distance:{distance}
          </StyledText>
          <StyledText>
          Time:{duration}
          </StyledText>
        </FlexText>
      </StyledView>
  )
}

const StyledText = styled.Text`
  flex: 1;
  font-size: 20px;
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
padding-top: 4%;
padding-bottom: 1%;
justifyContent: center;
`

const StyledIcon = styled.View`
flex: 1;
height: 100%;
alignItems: center;
justifyContent: center;
`

const Image = styled.Image`
height: 95%;
width: 95%;
`


export default Bike
