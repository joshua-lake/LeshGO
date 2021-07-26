import React from 'react'
import RNPickerSelect from 'react-native-picker-select'
import styled from 'styled-components/native'

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
    <>
    <Make>
        <RNPickerSelect
        onValueChange={(value) => props.setVehicleMake(value)}
        items={
          carMakes
        }
      />
    </Make>
    <Model>
       <RNPickerSelect
        onValueChange={(value) => props.setVehicle(value)}
        items={
          modelData
        }
      />
    </Model>
    </>
  )

}

const Make = styled.View`
width: 50%;
height: 365%;
justifyContent: center;
`

const Model = styled.View`
width: 50%;
borderLeftWidth: 1px;
height: 365%;
justifyContent: center;
padding-left: 6%;
`

export default Vehicle
