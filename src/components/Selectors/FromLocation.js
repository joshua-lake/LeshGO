import React from 'react'
import styled from 'styled-components/native'
import { View } from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome'


function FromLocation () {
return (
  <View>
    <StyledText>
    <Icon name="search" size={30} color="#900" />
      From Location: My House
    </StyledText>
  </View>
)
}

const StyledText = styled.Text`
  color: blue;
  font-size: 30px;
`


export default FromLocation