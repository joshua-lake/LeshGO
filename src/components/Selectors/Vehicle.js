import React from 'react'
import { View } from 'react-native'
// import styled from 'styled-components/native'

import RNPickerSelect from 'react-native-picker-select';
// import { Ionicons } from '@expo/vector-icons'

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
  <View style={{ backgroundColor: '#FAF0E6', borderRadius: 20, height: '100%', width: '104%', justifyContent: 'center' }}>
      {/* <Ionicons name="chevron-down" size={32} color="pink" /> */}
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

// const VehicleView = styled.View`
// display: flex;
// flex-direction: row;
// `

export default Vehicle
