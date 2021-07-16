import React from 'react'
import styled from 'styled-components/native'
import { View } from 'react-native'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'

function Bike () {
  return (
    <View>
      <StyledText>
      <Icon name="bike" size={30} color="#900" />
        BIKING
      </StyledText>
    </View>
  )
}

const StyledText = styled.Text`
  color: green;
  font-size: 30px;
  margin-bottom: 30px;
`

export default Bike