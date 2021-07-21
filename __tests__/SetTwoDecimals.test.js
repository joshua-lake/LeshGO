import {setTwoDecimals} from '../src/components/Results/helper'

test('tests that the function reduces decimals to two points', () => {
  const number = 4.2435346
  const actual = setTwoDecimals(number)
  const expected = 4.24
  expect(actual).toBe(expected)
})
