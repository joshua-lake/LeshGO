import React from 'react'
import styled from 'styled-components/native'
import { View } from 'react-native'

function PublicTransport () {
  return (
    <View>
      <StyledText>
        PUBLIC TRANSPORT
      </StyledText>
    </View>
  )
}

const StyledText = styled.Text`
color: black;
font-size: 25;
`

export default PublicTransport