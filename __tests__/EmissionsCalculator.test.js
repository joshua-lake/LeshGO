import { emissionsCalculator } from '../src/components/Results/helper'

test('checks calculations are correct', () => {
  const emissions = 230
  const distance = 16

  const actual = emissionsCalculator(emissions, distance)
  const expected = 3.68
  expect(actual).toBe(expected)
})