import React from 'react'
import styled from 'styled-components/native'
import { View } from 'react-native'

function Walk () {
  return (
    <View>
      <StyledText>
        WALKING
      </StyledText>
    </View>
  )
}

const StyledText = styled.Text`
color: black;
font-size: 25;
`

export default Walk