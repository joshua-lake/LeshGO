import React from 'react'
import styled from 'styled-components/native'
// import Icon from 'react-native-vector-icons/FontAwesome5'

function Walk (props) {
  const { distance, duration } = props.undefinedData.walk
  return (
    props.data.mapRouteData.walkingData

    ? <StyledView>
        <StyledIcon>    
          {/* <Icon name="walking" size={30} /> */}
          <Image source={require("../../../assets/stickwalk.gif")}/>
        </StyledIcon>
        <FlexText>
          <StyledText>
              Distance: {props.data.mapRouteData.walkingData.distanceKM}KM
          </StyledText>
          <StyledText>
              Time: {props.data.mapRouteData.walkingData.durationMIN} mins
          </StyledText>
        </FlexText>
      </StyledView>

    : <StyledView>
        <StyledIcon>
        {/* <Icon name="walking" size={30} />     */}
        <Image source={require("../../../assets/stickwalk.gif")}/>
        </StyledIcon>s
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
height: 40px;
width: 40px;
`


export default Walk