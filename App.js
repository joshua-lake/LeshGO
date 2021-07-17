import { StatusBar } from 'expo-status-bar'
import React, { useEffect, useState } from 'react'
import { LogBox, SafeAreaView, ScrollView, StyleSheet, Text, View } from 'react-native'

import Maps from './src/components/Maps/'
import Results from './src/components/Results'
import GooglePlacesInput from './src/components/Selectors/GooglePlacesInput'

const App = () => {

  const [origin, setOrigin] = useState({})
  const [destination, setDestination] = useState({})

  const [markers, setMarkers] = useState([])

  const [mapRouteData, setRouteData] = useState({
    walking: {},
    driving: {},
    transit: {},
    bicyclng: {}
  })

  useEffect(() => {
    LogBox.ignoreLogs(['VirtualizedLists should never be nested'])
    setMarkers([{ coord: origin }, { coord: destination }])
  }, [origin, destination])

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <ScrollView keyboardShouldPersistTaps="always">
        <View style={styles.container}>

          <GooglePlacesInput placeHolderText={'From...'} updateState={setOrigin}/>
          <GooglePlacesInput placeHolderText={'To...'} updateState={setDestination}/>

          <Text style={styles.titleText}>Demo route</Text>
          <Maps markers={markers} setRouteData={setRouteData} mapRouteData={mapRouteData} origin={origin} destination={destination}/>
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
