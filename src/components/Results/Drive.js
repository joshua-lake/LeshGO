import React from 'react'
import styled from 'styled-components/native'
import { View, Text } from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome5'

function Drive (props) {
  const { distance, duration } = props.undefinedData.drive
  
  const emmisionsCalculation = props.vehicleType.emmisions ? props.vehicleType.emmisions * props.data.mapRouteData.drivingData.distanceKM : null

  return (
    props.data.mapRouteData.drivingData
    ? <View>
        <StyledText>
          <Icon name="car" size={30} color="#900"/>
          {props.vehicleType
            ?  <Text>{props.vehicleType.name} c02: {emmisionsCalculation} KG </Text>
            : 'Please select vehicle type'}:
          Distance:{props.data.mapRouteData.drivingData.distanceKM}KM
          Time:{props.data.mapRouteData.drivingData.durationMIN}Mins
        </StyledText>
      </View>

    : <View>
        <StyledText>
          <Icon name="car" size={30} color="#900" />
          {props.vehicleType
            ?props.vehicleType.name
            : 'Please select vehicle type'}:
            Distance:{distance}
            Time:{duration}
        </StyledText>
    </View>
  )

}

const StyledText = styled.Text`
  color: green;
  font-size: 30px;
  margin-bottom: 30px;
`

export default Drive
