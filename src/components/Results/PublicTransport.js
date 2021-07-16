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
  color: green;
`

export default PublicTransport