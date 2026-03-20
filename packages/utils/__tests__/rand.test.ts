import { describe, expect, it } from 'vitest'
import { generateId, getRandomInt } from '..'

describe('rand', () => {
  it('generateId should work', () => {
    expect(generateId()).to.be.a('number')
  })

  it('getRandomInt should work', () => {
    expect(getRandomInt(1000)).lessThan(1000)
  })
})
