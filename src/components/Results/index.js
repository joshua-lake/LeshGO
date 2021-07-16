import React from 'react'
import { View, Text } from 'react-native'

import Walk from './Walk'
import Bike from './Bike'
import Drive from './Drive'
import PublicTransport from './PublicTransport'

function Results (props) {
const tempData = {
  walk: {
    distanceKM: 10,
    durationMIN: 50
  },
  bike: {
    distanceKM: 10,
    durationMIN: 20
  },
  drive: {
    distanceKM: 10,
    durationMIN: 15
  },
  publicTransport: {
    distanceKM: 10,
    durationMIN: 20
  }
}

  return (
  <View>
    <Walk data={tempData.walk}/>
    <Bike data={tempData.bike}/>
    <Drive vehicleType={props.vehicleType} data={tempData.drive}/>
    <PublicTransport data={tempData.publicTransport}/>
  </View>

  )
}

export default Results
