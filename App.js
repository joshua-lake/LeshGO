import { StatusBar } from 'expo-status-bar'
import React from 'react'
import { Image, StyleSheet, Text, View } from 'react-native'

import MapView, { PROVIDER_GOOGLE } from 'react-native-maps';


const logo = require('./assets/logo.png')

export default function App () {
  return (
    <>
      <MapView
        style={{ flex: 1 }}
        provider={PROVIDER_GOOGLE}
        showsUserLocation/>

      <View style={styles.container}>
        <Text>sheeeeeeeeesh</Text>
        <Image source={logo} style={styles.logoImage}/>
        <StatusBar style="auto"/>
      </View>
    </>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },

  logoImage: {
    width: '100%',
    height: '50%',
  },
})
