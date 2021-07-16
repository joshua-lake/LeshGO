import React, { useState, useEffect }from 'react'
import MapView, { PROVIDER_GOOGLE } from 'react-native-maps'
import MapViewDirections from 'react-native-maps-directions'
import { Dimensions, StyleSheet } from 'react-native'


const origin = { latitude: -36.874935, longitude: 174.748596 }
const incomingDestination = "3 cooper st grey lynn"
// { latitude: -36.9040097, longitude: 174.710000 }
const transportMode = "WALKING" // DRIVING BICYCLING TRANSIT WALKING
const GOOGLE_MAPS_APIKEY = 'AIzaSyCZdxO0PKO0pHQZOxD5zqAA4KcwPi1ypSQ' // bosh's api key -- actually james'...



const Maps = () => {
  const [mapApiData, setMapAPIData] = useState()
  const [destination, setDestination] = useState('')

  useEffect(() => {
    setDestination(incomingDestination)
  }, [])

  


  return (

      <MapView provider={PROVIDER_GOOGLE} style={styles.map} initialRegion={{
        latitude: -36.872036,
        longitude: 174.763428,
        latitudeDelta: 0.0722,
        longitudeDelta: 0.0421,
      }}>
        <MapView.Marker coordinate={origin} />
        {/* <MapView.Marker coordinate={destination} /> */}
        <MapViewDirections
          origin={origin}
          destination={destination}
          apikey={GOOGLE_MAPS_APIKEY}
          mode={transportMode}
          // alternatives="true"
          timePrecision="now"
          showsUserLocation
          strokeWidth={3}
          strokeColor="green"/>
        
      </MapView>

  )
}

const styles = StyleSheet.create({
  map: {
    width: Dimensions.get('window').width - 20,
    height: Dimensions.get('window').height / 1.5,
    borderRadius: 20,
  },
})

export default Maps