export const setTwoDecimals = value => +parseFloat(value).toFixed(2)

export function timeConversion (num) {
  const hours = num /60
  const floorHours = Math.floor(hours)
  const minutes = (hours - floorHours) * 60
  const roundMinutes = Math.round(minutes)
  return floorHours < 2 ? floorHours + ' hour and ' + roundMinutes + ' minutes' : floorHours + ' hours and ' + roundMinutes + ' minutes'
}