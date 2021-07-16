import React from 'react'
import { View } from 'react-native'

import Walk from './Walk'
import Bike from './Bike'
import Drive from './Drive'
import PublicTransport from './PublicTransport'

function Results () {
  return (
  <View>
    <Walk/>
    <Bike/>
    <Drive/>
    <PublicTransport/>
  </View>

  )
}

export default Results
