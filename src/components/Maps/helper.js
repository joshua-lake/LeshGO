export const getDistance = (lat1, lon1, lat2, lon2) => {
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
