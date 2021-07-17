import React, { useEffect, useState } from 'react'
import MapView, { PROVIDER_GOOGLE } from 'react-native-maps'
import MapViewDirections from 'react-native-maps-directions'
import { Dimensions, StyleSheet, ViewPropTypes } from 'react-native'
import { getGeoLocation } from '../../api/geolocation'
import { API_KEY } from '../../api'

const defaultOrigin = { latitude: -36.874935, longitude: 174.748596 }
const defaultDestination = { latitude: -36.9040097, longitude: 174.760000 }
// const GOOGLE_MAPS_APIKEY = 'AIzaSyCZdxO0PKO0pHQZOxD5zqAA4KcwPi1ypSQ' // bosh's api key -- actually james'...
const transportMode = 'WALKING' // DRIVING BICYCLING TRANSIT WALKING

const Maps = (props) => {
  const [geoLocation, setGeoLocation] = useState({})
  const [origin, setOrigin] = useState({})
  const [destination, setDestination] = useState({})

  const [walkingData, setWalkingData] = useState()
  const [drivingData, setDrivingData] = useState()
  const [transitData, setTransitData] = useState()
  const [bicyclingData, setBicyclingData] = useState()

  const {mapRouteData, setRouteData} = props

  


  let oMarker = null
  let dMarker = null

  if (origin.latitude) {
    oMarker = <MapView.Marker coordinate={origin}/>
  }
  if (destination.latitude) {
    dMarker = <MapView.Marker coordinate={destination}/>
  }

  useEffect(() => {
    async function fetchData () {
      setGeoLocation(await getGeoLocation())
    }

    setOrigin(props.origin)
    setDestination(props.destination)
    // console.log('origin: ', origin)
    // console.log('destination: ', origin)
    fetchData()

    async function addStates() {
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
      }
      
    )
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
    // console.log("bike data: ", data);
    const lastCoord = data.coordinates.length - 1
    setBicyclingData({
        returnedOrigin: data.coordinates[0], // lat long object
        returnedDestination: data.coordinates[lastCoord], // lat long object
        distanceKM: data.distance,
        durationMIN: data.duration
      })
  }
  // console.log("mapRouteData: ", mapRouteData)

  // console.log(mapRouteData);
  // console.log(dMarker)
  return (

    <MapView provider={PROVIDER_GOOGLE} style={styles.map} initialRegion={{ // showsTraffic="true"
      latitude: -36.872036,
      longitude: 174.763428,
      latitudeDelta: 0.0722,
      longitudeDelta: 0.0421,
    }}>
      {oMarker}
      {dMarker}
      {/* <MapView.Marker coordinate={origin}/> */}
      {/* <MapView.Marker coordinate={destination}/> */}
      <MapViewDirections onReady={result => handleWalkingData(result)}
                         origin={defaultOrigin}// {`${origin.latitude},${origin.longitude}`}
                         destination={defaultDestination}// {`${destination.latitude},${destination.longitude}`}
                         apikey={API_KEY}
                         mode="WALKING"
                         timePrecision="now"
                         showsUserLocation
                         strokeWidth={6}
                         strokeColor="green"
      /> 
      <MapViewDirections onReady={result => handleDrivingData(result)}
                        origin={defaultOrigin}// {`${origin.latitude},${origin.longitude}`}
                        destination={defaultDestination}// {`${destination.latitude},${destination.longitude}`}
                        apikey={API_KEY}
                        mode="DRIVING"
                        timePrecision="now"
                        showsUserLocation
                        strokeWidth={3}
                        strokeColor="blue"
      />
      <MapViewDirections onReady={result => handleTransitData(result)}
                        origin={defaultOrigin}// {`${origin.latitude},${origin.longitude}`}
                        destination={defaultDestination}// {`${destination.latitude},${destination.longitude}`}
                        apikey={API_KEY}
                        mode="TRANSIT"
                        timePrecision="now"
                        showsUserLocation
                        strokeWidth={3}
                        strokeColor="red"
      />
      <MapViewDirections onReady={result => handleBicyclingData(result)}
                        origin={defaultOrigin}// {`${origin.latitude},${origin.longitude}`}
                        destination={defaultDestination}// {`${destination.latitude},${destination.longitude}`}
                        apikey={API_KEY}
                        mode="BICYCLING"
                        timePrecision="now"
                        showsUserLocation
                        strokeWidth={3}
                        strokeColor="yellow"
      />
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
