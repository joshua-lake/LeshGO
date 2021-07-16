import React from 'react'

import { View, Text } from 'react-native'

function PublicTransport (props) {
  return (
    <View>
      <Text>
      Public Transport:
        Distance:{props.data.distanceKM}KM
        Time:{props.data.durationMIN}Mins
      </Text>
    </View>
  )
}

export default PublicTransport