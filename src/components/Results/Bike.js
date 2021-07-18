import React from 'react'
import styled from 'styled-components/native'
import { View } from 'react-native'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'

function Bike (props) {
  const { distance, duration } = props.undefinedData.bike
  return (
    props.data.mapRouteData.bicyclingData
    
    ? <View>
        <StyledText>
          <Icon name="bike" size={30} color="#900"/>
          Cycling:
          Distance:{props.data.mapRouteData.bicyclingData.distanceKM}KM
          Time:{props.data.mapRouteData.bicyclingData.durationMIN}Mins
        </StyledText>
      </View>
    
    : <View>
    <StyledText>
      <Icon name="bike" size={30} color="#900" />
      Walking:
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

export default Bike
