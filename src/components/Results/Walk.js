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
  color: green;
  font-size: 30px;
`

export default Walk