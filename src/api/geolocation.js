import axios from 'axios'
import { API_KEY } from '../api'

const instance = axios.create({
  baseURL: 'https://www.googleapis.com/geolocation/v1/geolocate',
  timeout: 1000,
  headers: { 'content-type': 'application/json' }
})

export const getGeoLocation = async () => {
  try {
    const { data: { location: { lat: latitude, lng: longitude } } } = await instance.post(`?key=${API_KEY}`)
    return { latitude, longitude }
  } catch (error) {
    return {
      error: error.message
    }
  }
}
