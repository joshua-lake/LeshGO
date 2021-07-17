import React from 'react'
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
    <Icon name="search" size={10} color="#900" />
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


export default Vehicle
