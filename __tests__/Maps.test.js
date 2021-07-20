import { getDistance } from '../src/components/Maps/helper'

it('returns the correct distance between two points', () => {
  const distance = getDistance(-36.8509, 174.7645, 37.7749,-122.4194)
  expect(distance).toBe(10507.66748764703);
})
