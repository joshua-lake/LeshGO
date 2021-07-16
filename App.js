import { StatusBar } from 'expo-status-bar'
import React from 'react'
import { Dimensions, StyleSheet, Text, View } from 'react-native'

import Maps from './src/components/Maps/'
import Selectors from './src/components/Selectors/'
import Results from './src/components/Results'


const App = () => {
  return (
    <View style={styles.container}>
      <Selectors/>

      <Text style={styles.titleText}>Demo route</Text>
      <Maps/>

      <Results/>


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
