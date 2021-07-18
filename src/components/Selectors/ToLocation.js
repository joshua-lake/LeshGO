import React from 'react'
import styled from 'styled-components/native'
import { View } from 'react-native'

function ToLocation () {
  return (
    <View>
      <StyledText>
        {/* <Icon name="search" size={30} color="#900" /> */}
        {/* To Location: Your House */}
      </StyledText>
    </View>
  )
}

const StyledText = styled.Text`
  color: blue;
  font-size: 30px;
`

export default ToLocation
