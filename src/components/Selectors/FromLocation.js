import React from 'react'
import styled from 'styled-components/native'
import { View } from 'react-native'

function FromLocation () {
return (
  <View>
    <StyledText>
      Where are you coming from...
    </StyledText>
  </View>
)
}

const StyledText = styled.Text`
color: black;
font-size: 25;
`

export default FromLocation