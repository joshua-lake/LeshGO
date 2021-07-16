import React from 'react'
import styled from 'styled-components/native'
import { View } from 'react-native'

function FromLocation () {
return (
  <View>
    <StyledText>
      From Location:
    </StyledText>
  </View>
)
}

const StyledText = styled.Text`
  color: blue;
  font-size: 30px;
`

export default FromLocation