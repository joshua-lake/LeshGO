import React from 'react'
import styled from 'styled-components/native'
import { View } from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome5'

function Drive () {
  return (
    <View>
      <StyledText>
      <Icon name="car" size={30} color="#900" />
        DRIVING
      </StyledText>
    </View>
  )
}

const StyledText = styled.Text`
  color: green;
  font-size: 30px;
`

export default Drive