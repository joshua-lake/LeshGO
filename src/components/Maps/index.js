import React, { useEffect, useState } from 'react'
import MapView, { Marker, PROVIDER_GOOGLE } from 'react-native-maps'
import MapViewDirections from 'react-native-maps-directions'
import { Dimensions, StyleSheet } from 'react-native'
import { API_KEY } from '../../api'

const Maps = (props) => {
  const [walkingData, setWalkingData] = useState()
  const [drivingData, setDrivingData] = useState()
  const [transitData, setTransitData] = useState()
  const [bicyclingData, setBicyclingData] = useState()

  const { mapRouteData, setRouteData } = props

  const showRoute = Object.prototype.hasOwnProperty.call(props.origin, 'latitude') &&
    Object.prototype.hasOwnProperty.call(props.destination, 'latitude')

  useEffect(() => {
    async function addStates () {
      setRouteData({
        walkingData,
        drivingData,
        transitData,
        bicyclingData
      })
    }

    addStates()
  }, [bicyclingData, drivingData, transitData, walkingData])

  function handleWalkingData (data) {
    const lastCoord = data.coordinates.length - 1
    setWalkingData({
      returnedOrigin: data.coordinates[0], // lat long object
      returnedDestination: data.coordinates[lastCoord], // lat long object
      distanceKM: data.distance,
      durationMIN: data.duration
    })
  }

  function handleDrivingData (data) {
    const lastCoord = data.coordinates.length - 1
    setDrivingData({
      returnedOrigin: data.coordinates[0], // lat long object
      returnedDestination: data.coordinates[lastCoord], // lat long object
      distanceKM: data.distance,
      durationMIN: data.duration
    })
  }

  function handleTransitData (data) {
    const lastCoord = data.coordinates.length - 1
    setTransitData({
      returnedOrigin: data.coordinates[0], // lat long object
      returnedDestination: data.coordinates[lastCoord], // lat long object
      distanceKM: data.distance,
      durationMIN: data.duration
    })
  }

  function handleBicyclingData (data) {
    const lastCoord = data.coordinates.length - 1
    setBicyclingData({
      returnedOrigin: data.coordinates[0], // lat long object
      returnedDestination: data.coordinates[lastCoord], // lat long object
      distanceKM: data.distance,
      durationMIN: data.duration
    })
  }

  return (
    <MapView provider={PROVIDER_GOOGLE} style={styles.map} initialRegion={{ // showsTraffic="true"
      latitude: -36.872036,
      longitude: 174.763428,
      latitudeDelta: 0.0722,
      longitudeDelta: 0.0421,
    }}>
      {props.markers.map((marker, index) => (
        marker.coord.latitude !== undefined &&
        <Marker
          key={index}
          coordinate={marker.coord}/>
      ))}
      {showRoute && <MapViewDirections onReady={result => handleWalkingData(result)}
                                       origin={props.origin}
                                       destination={props.destination}
                                       apikey={API_KEY}
                                       mode="WALKING"
                                       timePrecision="now"
                                       showsUserLocation
                                       strokeWidth={6}
                                       strokeColor="green"/>}
      {showRoute && <MapViewDirections onReady={result => handleDrivingData(result)}
                                       origin={props.origin}
                                       destination={props.destination}
                                       apikey={API_KEY}
                                       mode="DRIVING"
                                       timePrecision="now"
                                       showsUserLocation
                                       strokeWidth={3}
                                       strokeColor="blue"/>}
      {showRoute && <MapViewDirections onReady={result => handleTransitData(result)}
                                       origin={props.origin}
                                       destination={props.destination}
                                       apikey={API_KEY}
                                       mode="TRANSIT"
                                       timePrecision="now"
                                       showsUserLocation
                                       strokeWidth={3}
                                       strokeColor="red"/>}
      {showRoute && <MapViewDirections onReady={result => handleBicyclingData(result)}
                                       origin={props.origin}
                                       destination={props.destination}
                                       apikey={API_KEY}
                                       mode="BICYCLING"
                                       timePrecision="now"
                                       showsUserLocation
                                       strokeWidth={3}
                                       strokeColor="yellow"/>}
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
