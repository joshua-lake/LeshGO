import React from 'react'
import styled from 'styled-components/native'
import Icon from 'react-native-vector-icons/FontAwesome5'

function Walk (props) {
  return (
    <StyledView>
      <StyledIcon>    
       <Icon name="walking" size={30} color="#900" />
      </StyledIcon>
      <FlexText>
        <StyledText>
        Distance: {props.data.distanceKM}KM
        </StyledText>
        <StyledText>
        Time: {props.data.durationMIN} Mins
        </StyledText>
      </FlexText>
    </StyledView>
  )
}

const StyledText = styled.Text`
  flex: 1;
  color: green;
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

export default Walk