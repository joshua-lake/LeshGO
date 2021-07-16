import React from 'react'

import { View, Text } from 'react-native'

function Walk (props) {
  return (
    <View>
      <Text>
        Walking:
        Distance:{props.data.distanceKM}KM
        Time:{props.data.durationMIN}Mins
      </Text>
    </View>
  )
}

export default Walk