import {timeConversion} from '../src/components/Results/helper'

test('check time conversion converts minutes correctly', () => {
  const time = 150
  
  const actual = timeConversion(time)
  const expected = 2 + ' hours and ' + 30 + ' minutes'
  expect(actual).toBe(expected)
})