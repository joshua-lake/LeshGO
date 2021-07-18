import React from 'react'
import styled from 'styled-components/native'
import { View } from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome5'

function Walk (props) {
  const { distance, duration } = props.undefinedData.walk
  return (
    props.data.mapRouteData.walkingData
    ? 
    <View>
        <StyledText>
          <Icon name="walking" size={30} color="#900" />
          Walking:
            Distance:{props.data.mapRouteData.walkingData.distanceKM}KM
            Time:{props.data.mapRouteData.walkingData.durationMIN}Mins
        </StyledText>
      </View>

    : <View>
        <StyledText>
          <Icon name="walking" size={30} color="#900" />
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
  margin-top: 30px;
`

export default Walk