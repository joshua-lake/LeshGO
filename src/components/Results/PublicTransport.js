import React from 'react'
import styled from 'styled-components/native'
import { View } from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome'

function PublicTransport () {
  return (
    <View>
      <StyledText>
      <Icon name="bus" size={30} color="#900" />
        PUBLIC TRANSPORT
      </StyledText>
    </View>
  )
}

const StyledText = styled.Text`
  color: green;
  font-size: 30px;
  margin-bottom: 30px;
`

export default PublicTransport