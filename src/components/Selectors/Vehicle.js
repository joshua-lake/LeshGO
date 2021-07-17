import React from 'react'
import styled from 'styled-components/native'
import { View } from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome'

import RNPickerSelect from 'react-native-picker-select';


function Vehicle (props) {

  const vehicles = {
    car: {
      name: 'Car',
      eco: 'high'
    },
    ute: {
      name: 'Ute',
      eco: 'high'
    },
    motorbike: {
      name: 'Motorbike',
      eco: 'high'
    }
  }

return (
  <View>
    <StyledText>
    <Icon name="search" size={30} color="#900" />
      Select type of Vehicle:
    </StyledText>
    <RNPickerSelect
  onValueChange={(value) => props.setVehicleType(value)}
  items={[
    { label: vehicles.car.name, value: vehicles.car.name },
    { label: vehicles.ute.name, value: vehicles.ute.name },
    { label: vehicles.motorbike.name, value: vehicles.motorbike.name },
  ]}
/>
  </View>
)
}

const StyledText = styled.Text`
  color: blue;
  font-size: 30px;
  margin-bottom: 30px;
`

export default Vehicle
