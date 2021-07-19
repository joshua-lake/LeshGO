import React from 'react'
import styled from 'styled-components/native'
import { Text } from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome5'

function Drive (props) {

  const { distance, duration } = props.undefinedData.drive
  const { setTwoDecimals } = props

  const emmisionsCalculation = (props.data.vehicleType && props.data.mapRouteData.drivingData) ? props.data.vehicleType.emmisions * props.data.mapRouteData.drivingData.distanceKM : null

  return (    
    props.data.mapRouteData.drivingData
      ? <StyledView>
          <StyledIcon>    
          <Image source={require("../../../assets/car.gif")}/>
          </StyledIcon>
          <FlexText>
          <StyledText>
            {props.data.vehicleType
                ? <Text>{props.data.vehicleType.name} c02: {setTwoDecimals(emmisionsCalculation)} KG </Text>
                : 'Please select vehicle type'}
          </StyledText>
          <StyledText>
              Distance:{setTwoDecimals(props.data.mapRouteData.drivingData.distanceKM)}KM
          </StyledText>
          <StyledText>
              Time:{setTwoDecimals(props.data.mapRouteData.drivingData.durationMIN)}Mins
          </StyledText>
          </FlexText>
        </StyledView>

      :<StyledView>
          <StyledIcon>    
            <Icon name="car" size={30} />
          </StyledIcon>
        <FlexText>
         <StyledText>
            {props.data.vehicleType
              ? props.data.vehicleType.name
              : 'Please select vehicle type'}:
         </StyledText>
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
  justifyContent: center;
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
padding-top: 1%;
padding-bottom: 1%;
`

const StyledIcon = styled.View`
flex: 1;
height: 100%;
alignItems: center;
justifyContent: center;
`
const Image = styled.Image`
height: 40%;
width: 45%;
`


export default Drive
