import React from 'react'
import {View} from 'react-native'

import ToLocation from './ToLocation'
import FromLocation from './FromLocation'
import Vehicle from './Vehicle'

function Selectors (props) {
return (
  <View>
    <ToLocation/>
    <FromLocation/>
    <Vehicle setVehicleType={props.setVehicleType}/>
  </View>
)
}

export default Selectors