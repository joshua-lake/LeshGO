import axios from 'axios'
import { API_KEY } from '../api'
import React, { useState, useEffect }from 'react'
import MapView, { PROVIDER_GOOGLE } from 'react-native-maps'
import MapViewDirections from 'react-native-maps-directions'


const HARDorigin = { latitude: -36.874935, longitude: 174.748596 }
const incomingDestination = "10 Marlborough street, mt eden" //  "9 gardner rd epsom" 8 morgan st newmarket { latitude: -36.9040097, longitude: 174.710000 }
const GOOGLE_MAPS_APIKEY = 'AIzaSyCZdxO0PKO0pHQZOxD5zqAA4KcwPi1ypSQ' // bosh's api key -- actually james'...


// const instance = axios.create({
//   baseURL: 'https://maps.googleapis.com/maps/api/directions/json?',
//   timeout: 1000,
//   headers: { 'content-type': 'application/json' }
// })

// const transportModeList =[ "DRIVING", "BICYCLING", "TRANSIT", "WALKING"]


// async function getAllTravelData (origin, destination) {
//   try {
//     for (let i = 0; i < 4; i++) {
//         const iterationRouteData = await instance.post(`origin=${origin.latitude},${origin.longitude}
//         &destination=${destination.latitude},${destination.longitude}&mode=driving&key=${GOOGLE_MAPS_APIKEY}`)
//     }


//     return 
//   } catch (error) {
//     return {
//       error: error.message
//     }
//   }
// }

// export default getAllTravelData




function getAllTravelData ({origin, destination}) {
    const transportModeList =[ "DRIVING", "BICYCLING", "TRANSIT", "WALKING"]

    function addAllRouteData () {
        return null
    }

    const allData = {}

    for (let i = 0; i < 4; i++) {
     <>
        <MapView provider={PROVIDER_GOOGLE} initialRegion={{ // showsTraffic="true"
            latitude: -36.872036,
            longitude: 174.763428,
            latitudeDelta: 0.0722,
            longitudeDelta: 0.0421,
        }}>
            <MapViewDirections onReady={result => addAllRouteData(result, i)}
            origin={origin}
            destination={destination}
            apikey={GOOGLE_MAPS_APIKEY}
            mode={transportModeList[i]}
            
            />
          </MapView>
    </>
    }
    return data
}

export default getAllTravelData





