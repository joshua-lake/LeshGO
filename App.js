import { StatusBar } from 'expo-status-bar'
import React, { useEffect, useState } from 'react'
import { LogBox, SafeAreaView, ScrollView, StyleSheet, Text, View } from 'react-native'

import Maps from './src/components/Maps/'
import Selectors from './src/components/Selectors/'
import Results from './src/components/Results'
import GooglePlacesInput from './src/components/Selectors/GooglePlacesInput'

const App = () => {

  const [vehicleType, setVehicleType] = useState('') // <== Value of vehicle type, coming from selectors/vehicle

  const [origin, setOrigin] = useState({})
  const [destination, setDestination] = useState({})

  const [markers, setMarkers] = useState([])

  useEffect(() => {
    LogBox.ignoreLogs(['VirtualizedLists should never be nested'])
    setMarkers([{ latlng: origin}, { latlng: destination}])
  }, [origin, destination])

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <ScrollView keyboardShouldPersistTaps="always">
        <View style={styles.container}>

          {/* <Selectors setVehicleType={setVehicleType}/> */}
          <GooglePlacesInput placeHolderText={'From...'} updateState={setOrigin}/>
          <GooglePlacesInput placeHolderText={'To...'} updateState={setDestination}/>

          <Text style={styles.titleText}>Demo route</Text>
           <Maps markers={markers}/>
          <Results vehicleType={vehicleType}/>


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
