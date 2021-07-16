import React from 'react'
import MapView, { PROVIDER_GOOGLE } from 'react-native-maps'
import MapViewDirections from 'react-native-maps-directions'
// import styled from 'styled-components/native'


const origin = { latitude: -36.874935, longitude: 174.748596 }
const destination = { latitude: -36.9040097, longitude: 174.760000 }
const GOOGLE_MAPS_APIKEY = 'AIzaSyCZdxO0PKO0pHQZOxD5zqAA4KcwPi1ypSQ' // bosh's api key -- actually james'...

const Maps = () => {
  return (

      <MapView provider={PROVIDER_GOOGLE} initialRegion={{
        latitude: -36.872036,
        longitude: 174.763428,
        latitudeDelta: 0.0722,
        longitudeDelta: 0.0421,
      }}>
        <MapView.Marker coordinate={origin} />
        <MapView.Marker coordinate={destination} />
        <MapViewDirections
          origin={origin}
          destination={destination}
          apikey={GOOGLE_MAPS_APIKEY}
          showsUserLocation
          strokeWidth={3}
          strokeColor="green"/>
      </MapView>

  )
}

// const StyledMap = styled.View`
// width: auto;
// height: auto;
// borderRadius: 20;
// `

export default Maps