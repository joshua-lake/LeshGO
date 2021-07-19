import React from 'react'
import { View } from 'react-native'
import RNPickerSelect from 'react-native-picker-select'
// import styled from 'styled-components/native'

const data = require('../../data/emmisions.json')

function Vehicle (props) {
  
  // retrieve individual car makes
  const allMakes = data.map(car => {
    return car.Make
  })
  const singleMakes = allMakes.reduce((unique, make) => {
    return unique.includes(make) ? unique : [...unique, make]
  }, [])
  
  const carMakes = singleMakes.map(make => {
    return { label: make, value: make}
  })
  
  // retrieve car data depending on selected make
  const selectedModels = data.filter(car => {
    return car.Make === props.vehicleMake ? car : null
  })
  const modelData = selectedModels.map(car => {
    return {label: car.Model, value: car}
  })

  return (
    <View style={{ backgroundColor: '#FFFFFF', borderRadius: 20, height: '250%', width: '103%', justifyContent: 'center' }}>
        {/* <Ionicons name="chevron-down" size={32} color="pink" /> */}
        <RNPickerSelect
        onValueChange={(value) => props.setVehicleMake(value)}
        items={
          carMakes
        }
      />
       <RNPickerSelect
        onValueChange={(value) => props.setVehicle(value)}
        items={
          modelData
        }
      />
      
    </View>
  )

}



// const VehicleView = styled.View`
// display: flex;
// flex-direction: row;
// `

export default Vehicle
