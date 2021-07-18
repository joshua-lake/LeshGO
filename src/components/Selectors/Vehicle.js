import React from 'react'
import styled from 'styled-components/native'
import { View } from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome'

import RNPickerSelect from 'react-native-picker-select'

function Vehicle (props) {

  const vehicles = {
    petrolCar: {
      name: 'Petrol Car',
      emmisions: 0.20
    },
    dieselCar: {
      name: 'Diesel Car',
      emmisions: 0.22
    },
    petrolUte: {
      name: 'Petrol Ute',
      emmisions: 0.20
    },
    dieselUte: {
      name: 'Diesel Ute',
      emmisions: 0.20
    },
    petrolMotorbike: {
      name: 'Petrol Motorbike',
      emmisions: 0.10
    },
    dieselMotorbike: {
      name: 'Diesel Motorbike',
      emmisions: 0.12
    },
    petroltruck: {
      name: 'Petrol Truck',
      emmisions: 0.25
    },
    dieselTruck: {
      name: 'Diesel Truck',
      emmisions: 0.29
    },
    hybrid: {
      name: 'hybrid',
      emmisions: 0.05
    }
  }

  return (
    <View>
      <StyledText>
        <Icon name="search" size={30} color="#900"/>
        Select type of Vehicle:
      </StyledText>
      <RNPickerSelect
        onValueChange={(value) => props.setVehicleType(value)}
        items={[
          { label: vehicles.petrolCar.name, value: vehicles.petrolCar },
          { label: vehicles.dieselCar.name, value: vehicles.dieselCar },
          { label: vehicles.petrolUte.name, value: vehicles.petrolUte },
          { label: vehicles.dieselUte.name, value: vehicles.dieselUte },
          { label: vehicles.petrolMotorbike.name, value: vehicles.petrolMotorbike },
          { label: vehicles.dieselMotorbike.name, value: vehicles.dieselMotorbike },
          { label: vehicles.petroltruck.name, value: vehicles.petroltruck },
          { label: vehicles.dieselTruck.name, value: vehicles.dieselTruck },
          { label: vehicles.hybrid.name, value: vehicles.hybrid }
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
