import React from 'react'
import {View} from 'react-native'

import ToLocation from './ToLocation'
import FromLocation from './FromLocation'
import Vehicle from './Vehicle'
import GooglePlacesInput from './GooglePlacesInput'

function Selectors () {
return (
  <View>
    <GooglePlacesInput placeHolderText={"From..."}/>
    <GooglePlacesInput placeHolderText={"To..."}/>
    <Vehicle/>
  </View>
)
}

export default Selectors
