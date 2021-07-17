import React from 'react'
import styled from 'styled-components/native'
import { View } from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome5'

function Walk () {
  return (
    <View>
      <StyledText>
      <Icon name="walking" size={30} color="#900" />
        WALKING
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