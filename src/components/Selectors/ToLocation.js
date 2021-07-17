import React from 'react'
import styled from 'styled-components/native'
import { View } from 'react-native'

function ToLocation () {
return (
  <View>
    <StyledText>
      To Location
    </StyledText>
  </View>
)
}

const StyledText = styled.Text`
color: black;
font-size: 25;
`

export default ToLocation