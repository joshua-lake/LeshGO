import React from 'react'

import { View, Text } from 'react-native'

function Drive (props) {
  return (
    <View>
      <Text>
      {props.vehicleType
      ? props.vehicleType
      : 'Please select vehicle type'}:
        Distance:{props.data.distanceKM}KM
        Time:{props.data.durationMIN}Mins
      </Text>
    </View>
  )


}

export default Drive
