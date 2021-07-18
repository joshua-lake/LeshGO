import React from 'react'
import styled from 'styled-components/native'
import { View } from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome'

function PublicTransport (props) {
  const { distance, duration } = props.undefinedData.publicTransport
  return (
    props.data.mapRouteData.transitData
    ? <View>
        <StyledText>
          <Icon name="bus" size={30} color="#900"/>
          Public Transport:
          Distance:{props.data.mapRouteData.transitData.distanceKM}KM
          Time:{props.data.mapRouteData.transitData.durationMIN}Mins
        </StyledText>
      </View>

    : <View>
        <StyledText>
          <Icon name="bus" size={30} color="#900" />
          Public Transport:
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

export default PublicTransport
