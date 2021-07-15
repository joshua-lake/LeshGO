import axios from 'axios'

const API_KEY = 'AIzaSyCZdxO0PKO0pHQZOxD5zqAA4KcwPi1ypSQ'

const instance = axios.create({
  baseURL: 'https://www.googleapis.com/geolocation/v1/geolocate',
  timeout: 1000,
  headers: { 'content-type': 'application/json' }
})

export const getGeoLocation = async () => {
  try {
    const { data } = await instance.get(`?key=${API_KEY}`)
    return data
  } catch (error) {
    return {
      error: error.message
    }
  }
}
