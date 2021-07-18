import React from 'react'
import styled from 'styled-components/native'
import Icon from 'react-native-vector-icons/FontAwesome'

function PublicTransport (props) {
  return (
    <StyledView>
     <StyledIcon>    
      <Icon name="bus" size={30} />
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

export default PublicTransport