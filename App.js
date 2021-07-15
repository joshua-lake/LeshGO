import { StatusBar } from 'expo-status-bar'
import React from 'react'
import MapView, { PROVIDER_GOOGLE } from 'react-native-maps'
import MapViewDirections from 'react-native-maps-directions'
import { Dimensions, StyleSheet, Text, View } from 'react-native'

const origin = { latitude: -36.874935, longitude: 174.748596 }
const destination = { latitude: -36.9040097, longitude: 174.760000 }
const GOOGLE_MAPS_APIKEY = 'AIzaSyCZdxO0PKO0pHQZOxD5zqAA4KcwPi1ypSQ' // bosh's api key -- actually james'...

const App = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.titleText}>Demo route</Text>
      <MapView provider={PROVIDER_GOOGLE} style={styles.map} initialRegion={{
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
      <StatusBar style="auto"/>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },

  map: {
    width: Dimensions.get('window').width - 20,
    height: Dimensions.get('window').height / 1.5,
    borderRadius: 20,
  },

  titleText: {
    marginTop: 16,
    paddingVertical: 8,
    color: '#20232a',
    textAlign: 'center',
    fontSize: 30,
    fontWeight: 'bold'
  }
})

export default App
