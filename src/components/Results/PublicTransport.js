import React from 'react'
import styled from 'styled-components/native'
import { View } from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome'

function PublicTransport (props) {
  return (
    <View>
      <StyledText>
        <Icon name="bus" size={30} color="#900"/>
        Public Transport:
        Distance:{props.data.distanceKM}KM
        Time:{props.data.durationMIN}Mins
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
