import React from 'react'
import styled from 'styled-components/native'
import { Text } from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome5'

function Drive (props) {

  const { distance, duration } = props.undefinedData.drive
  // console.log('drive', props.vehicleType)

  console.log('drive vehicle name', props.data.vehicleType.name)


  const emmisionsCalculation = (props.vehicleType && props.data.mapRouteData.drivingData) ? props.vehicleType.emmisions * props.data.mapRouteData.drivingData.distanceKM : null

  return (    
    props.data.mapRouteData.drivingData
      ? <StyledView>
          <StyledIcon>    
            <Icon name="car" size={30} />
          </StyledIcon>
          <FlexText>
          <StyledText>
            {props.vehicleType
                ? <Text>{props.vehicleType.name} c02: {emmisionsCalculation} KG </Text>
                : 'Please select vehicle type'}
          </StyledText>
          <StyledText>
              Distance:{props.data.mapRouteData.drivingData.distanceKM}KM
          </StyledText>
          <StyledText>
              Time:{props.data.mapRouteData.drivingData.durationMIN}Mins
          </StyledText>
          </FlexText>
        </StyledView>

      :<StyledView>
          <StyledIcon>    
            <Icon name="car" size={30} />
          </StyledIcon>
        <FlexText>
         <StyledText>
            {props.vehicleType
              ? props.vehicleType.name
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

export default Drive
