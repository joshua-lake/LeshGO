import React from 'react'
import {View} from 'react-native'

import ToLocation from './ToLocation'
import FromLocation from './FromLocation'
import Vehicle from './Vehicle'

function Selectors () {
return (
  <View>
    <ToLocation/>
    <FromLocation/>
    <Vehicle/>
  </View>
)
}

export default Selectors