import React, { useEffect, useState } from 'react'
import MapView, { Marker, PROVIDER_GOOGLE } from 'react-native-maps'
import MapViewDirections from 'react-native-maps-directions'
import { Dimensions, StyleSheet } from 'react-native'
import { API_KEY } from '../../api'

const Maps = ({ destination, markers, origin, selectedRoute, setRouteData }) => {
  const [walkingData, setWalkingData] = useState()
  const [drivingData, setDrivingData] = useState()
  const [transitData, setTransitData] = useState()
  const [bicyclingData, setBicyclingData] = useState()
  const [region, setRegion] = useState({
    latitude: -36.872036,
    longitude: 174.763428,
    latitudeDelta: 0.07,
    longitudeDelta: 0.04,
  })

  const originSet = Object.prototype.hasOwnProperty.call(origin, 'latitude')
  const destinationSet = Object.prototype.hasOwnProperty.call(destination, 'latitude')
  const showRoute = originSet && destinationSet

  const getDistance = (lat1, lon1, lat2, lon2) => {
    const R = 6371
    const dLat = inRadians(lat2 - lat1)
    const dLon = inRadians(lon2 - lon1)
    const a =
      Math.sin(dLat / 2) * Math.sin(dLat / 2) +
      Math.cos(inRadians(lat1)) * Math.cos(inRadians(lat2)) *
      Math.sin(dLon / 2) * Math.sin(dLon / 2)
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a))
    return R * c
  }

  const inRadians = deg => deg * (Math.PI / 180)

  useEffect(() => {
    if (originSet && destinationSet) {
      const distance = getDistance(origin.latitude, origin.longitude, destination.latitude, destination.longitude)
      setRegion({
        latitude: (origin.latitude + destination.latitude) / 2,
        longitude: (origin.longitude + destination.longitude) / 2,
        latitudeDelta: .015 * distance,
        longitudeDelta: .015 * distance,
      })
    } else if (originSet && !destinationSet) {
      setRegion({
        latitude: origin.latitude,
        longitude: origin.longitude,
        latitudeDelta: .015,
        longitudeDelta: .015,
      })
    } else if (!originSet && destinationSet) {
      setRegion({
        latitude: destination.latitude,
        longitude: destination.longitude,
        latitudeDelta: .015,
        longitudeDelta: .015,
      })
    }
  }, [origin, destination])

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

  const handleWalkingData = data => {
    const lastCoord = data.coordinates.length - 1
    setWalkingData({
      returnedOrigin: data.coordinates[0], // lat long object
      returnedDestination: data.coordinates[lastCoord], // lat long object
      distanceKM: data.distance,
      durationMIN: data.duration
    })
  }

  const handleDrivingData = data => {
    const lastCoord = data.coordinates.length - 1
    setDrivingData({
      returnedOrigin: data.coordinates[0], // lat long object
      returnedDestination: data.coordinates[lastCoord], // lat long object
      distanceKM: data.distance,
      durationMIN: data.duration
    })
  }

  const handleTransitData = data => {
    const lastCoord = data.coordinates.length - 1
    setTransitData({
      returnedOrigin: data.coordinates[0], // lat long object
      returnedDestination: data.coordinates[lastCoord], // lat long object
      distanceKM: data.distance,
      durationMIN: data.duration
    })
  }

  const handleBicyclingData = data => {
    const lastCoord = data.coordinates.length - 1
    setBicyclingData({
      returnedOrigin: data.coordinates[0], // lat long object
      returnedDestination: data.coordinates[lastCoord], // lat long object
      distanceKM: data.distance,
      durationMIN: data.duration
    })
  }

  return (
    <MapView provider={PROVIDER_GOOGLE} style={styles.map} region={region} initialRegion={region}>
      {markers.map((marker, index) => (
        marker.coord.latitude !== undefined &&
        <Marker
          key={index}
          coordinate={marker.coord}/>
      ))}
      {showRoute && <MapViewDirections onReady={result => handleWalkingData(result)}
                                       origin={origin}
                                       destination={destination}
                                       apikey={API_KEY}
                                       mode="WALKING"
                                       timePrecision="now"
                                       showsUserLocation
                                       strokeWidth={3}
                                       strokeColor={selectedRoute === 'walking' ? 'red' : 'transparent'}/>}
      {showRoute && <MapViewDirections onReady={result => handleDrivingData(result)}
                                       origin={origin}
                                       destination={destination}
                                       apikey={API_KEY}
                                       mode="DRIVING"
                                       timePrecision="now"
                                       showsUserLocation
                                       strokeWidth={3}
                                       strokeColor={selectedRoute === 'driving' ? 'red' : 'transparent'}/>}
      {showRoute && <MapViewDirections onReady={result => handleTransitData(result)}
                                       origin={origin}
                                       destination={destination}
                                       apikey={API_KEY}
                                       mode="TRANSIT"
                                       timePrecision="now"
                                       showsUserLocation
                                       strokeWidth={3}
                                       strokeColor={selectedRoute === 'transit' ? 'red' : 'transparent'}/>}
      {showRoute && <MapViewDirections onReady={result => handleBicyclingData(result)}
                                       origin={origin}
                                       destination={destination}
                                       apikey={API_KEY}
                                       mode="BICYCLING"
                                       timePrecision="now"
                                       showsUserLocation
                                       strokeWidth={3}
                                       strokeColor={selectedRoute === 'bicycling' ? 'red' : 'transparent'}/>}
    </MapView>
  )
}

const styles = StyleSheet.create({
  map: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height / 3.55,
  },
})

export default Maps
