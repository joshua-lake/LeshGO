import React from 'react'

import { View, Text } from 'react-native'

function Bike (props) {
  return (
    <View>
      <Text>
      Cycling:
        Distance:{props.data.distanceKM}KM
        Time:{props.data.durationMIN}Mins
      </Text>
    </View>
  )
}

export default Bike