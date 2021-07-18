import React from 'react'
import styled from 'styled-components/native'
import Icon from 'react-native-vector-icons/FontAwesome5'

function Drive (props) {
  console.log(props)

  return (
    <StyledView>  
      <StyledIcon>    
      <Icon name="car" size={30} color="#900" />
      </StyledIcon>
      <FlexText>
      <StyledText>
      {props.vehicleType} 
      {/* ? props.vehicleType
      : 'Please select vehicle type'}: */}
      </StyledText>
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
background-color: blue;
flex: 1
`

export default Drive