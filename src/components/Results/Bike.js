import React from 'react'
import styled from 'styled-components/native'
// import Icon from 'react-native-vector-icons/MaterialCommunityIcons'

function Bike (props) {
  const { distance, duration } = props.undefinedData.bike
  return (
    props.data.mapRouteData.bicyclingData
    
    ? <StyledView>
        <StyledIcon>
          {/* <Icon name="bike" size={30} /> */}
          <Image source={require("../../../assets/bike.gif")}/>
        </StyledIcon>
        <FlexText>
          <StyledText>
            Distance: {props.data.mapRouteData.bicyclingData.distanceKM}KM
          </StyledText>
          <StyledText>
            Time: {props.data.mapRouteData.bicyclingData.durationMIN} mins
          </StyledText>
        </FlexText>
      </StyledView>
    
    : <StyledView>
        <StyledIcon>
        {/* <Icon name="bike" size={30} /> */}
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
height: 60px;
width: 60px;
`


export default Bike
