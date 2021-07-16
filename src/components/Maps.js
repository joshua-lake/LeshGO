import React, { useEffect, useState } from 'react'
import MapView, { PROVIDER_GOOGLE } from 'react-native-maps'
import MapViewDirections from 'react-native-maps-directions'
import { Dimensions, StyleSheet } from 'react-native'
import { getGeoLocation } from '../api/geolocation'
import { API_KEY } from '../api'

const defaultOrigin = { latitude: -36.874935, longitude: 174.748596 }
const defaultDestination = { latitude: -36.9040097, longitude: 174.760000 }
// const GOOGLE_MAPS_APIKEY = 'AIzaSyCZdxO0PKO0pHQZOxD5zqAA4KcwPi1ypSQ' // bosh's api key -- actually james'...

const Maps = (props) => {
  const [geoLocation, setGeoLocation] = useState({})
  const [origin, setOrigin] = useState(defaultOrigin)
  const [destination, setDestination] = useState(defaultDestination)

  useEffect(() => {
    async function fetchData () {
      setGeoLocation(await getGeoLocation())
    }

    setOrigin(props.origin)
    setDestination(props.destination)
    fetchData()
  }, [])

  return (

    <MapView provider={PROVIDER_GOOGLE} style={styles.map} initialRegion={{
      latitude: -36.872036,
      longitude: 174.763428,
      latitudeDelta: 0.0722,
      longitudeDelta: 0.0421,
    }}>
      <MapView.Marker coordinate={origin}/>
      <MapView.Marker coordinate={destination}/>
      <MapViewDirections
        origin={defaultOrigin}
        destination={defaultDestination}
        apikey={API_KEY}
        showsUserLocation
        strokeWidth={3}
        strokeColor="green"/>
    </MapView>

  )
}

const styles = StyleSheet.create({
  map: {
    width: Dimensions.get('window').width - 20,
    height: Dimensions.get('window').height / 2,
    borderRadius: 20,
  },
})

export default Maps
