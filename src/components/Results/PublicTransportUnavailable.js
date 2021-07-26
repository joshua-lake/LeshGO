import React from 'react'
import styled from 'styled-components/native'

function PublicTransportUnavailable (props) {

  // const { selectedRoute } = props

  return (
  <StyledView>
      <StyledIcon>    
         <Image source={require("../../../assets/train.png")}/>
      </StyledIcon>
    <FlexText>
      <StyledText></StyledText>
      <StyledText>
        <GreyText>Transport not available</GreyText>
      </StyledText>
      <StyledText></StyledText>
    </FlexText>
  </StyledView>
  )
}

export default PublicTransportUnavailable



const StyledText = styled.Text`
  flex: 1;
  font-size: 16px;
  padding: 1%;
`

const GreyText = styled.Text`
  flex: 1;
  font-size: 16px;
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
justifyContent: center;
`

const StyledIcon = styled.View`
flex: 1;
height: 100%;
alignItems: center;
justifyContent: center;
padding-left: 3%;
`

const Image = styled.Image`
height: 50%;
width: 40%;
`