import { StatusBar } from 'expo-status-bar'
import React, { useEffect, useState } from 'react'
import { SafeAreaView, ScrollView, StyleSheet, Text, View , LogBox } from 'react-native'

import Maps from './src/components/Maps/'
import Selectors from './src/components/Selectors/'
import Results from './src/components/Results'
import GooglePlacesInput from './src/components/Selectors/GooglePlacesInput'

const App = () => {
  useEffect(() => {
    LogBox.ignoreLogs(['VirtualizedLists should never be nested']);
    console.log("origin: ", origin)
    console.log("destination: ", destination)
  }, [])

  const [origin, setOrigin] = useState({})
  const [destination, setDestination] = useState({})
 


  const [mapRouteData, setRouteData] = useState({
    walking: {},
    driving: {},
    transit: {},
    bicyclng: {}

  })

  // console.log('in app: ', mapRouteData);  

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <ScrollView keyboardShouldPersistTaps='always'>
        <View style={styles.container}>

          <GooglePlacesInput placeHolderText={'From...'} updateState={setOrigin}/>
          <GooglePlacesInput placeHolderText={'To...'} updateState={setDestination}/>

          <Text style={styles.titleText}>Demo route</Text>
          <Maps origin={origin} destination={destination} setRouteData={setRouteData} mapRouteData={mapRouteData}/>

          <Results/>

          <StatusBar style="auto"/>
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
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
