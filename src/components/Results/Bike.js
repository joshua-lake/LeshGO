import React from 'react'
import styled from 'styled-components/native'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'

function Bike (props) {
  return (
    <StyledView>
      <StyledIcon>
      <Icon name="bike" size={30} color="#900" />
      </StyledIcon>
      <FlexText>
      <StyledText>
        Distance: {props.data.distanceKM}KM
      </StyledText>
      <StyledText>
        Time: {props.data.durationMIN}Mins
      </StyledText>
      </FlexText>
    </StyledView>
  )
}

const StyledText = styled.Text`
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
`

const StyledIcon = styled.View`
flex: 1
`

export default Bike