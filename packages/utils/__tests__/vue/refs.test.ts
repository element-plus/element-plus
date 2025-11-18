import { ref } from 'vue'
import { describe, expect, it } from 'vitest'
import { composeRefs } from '../..'

describe('composeRefs', () => {
  it('should assign correctly the element to the given refs', () => {
    const element = document.createElement('div')
    const firstRef = ref<HTMLDivElement>()
    const secondRef = ref<HTMLDivElement>()
    composeRefs(firstRef, secondRef)(element)
    expect(firstRef.value).toBe(element)
    expect(secondRef.value).toBe(element)
  })
})
