import React from 'react'
import { View, Text } from 'react-native'
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
    <Text>Select type of Vehicle:</Text>

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
