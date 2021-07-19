import React from 'react'
import styled from 'styled-components/native'

function PublicTransport (props) {
  const { distance, duration } = props.undefinedData.publicTransport
  const { setTwoDecimals } = props

  return (
    props.data.mapRouteData.transitData

    ? <StyledView>
        <StyledIcon>    
          <Image source={require("../../../assets/train.gif")} size={30}/>
        </StyledIcon>
        <FlexText>
          <StyledText>
            Distance: {setTwoDecimals(props.data.mapRouteData.transitData.distanceKM)}KM
          </StyledText>
          <StyledText>
            Time: {setTwoDecimals(props.data.mapRouteData.transitData.durationMIN)} mins
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
