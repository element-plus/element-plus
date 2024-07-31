import { ref } from 'vue'
import { beforeEach, describe, expect, it } from 'vitest'
import { useLoadTeleport } from '../use-load-teleport'

describe('useLoadTeleport', () => {
  beforeEach(() => {
    document.body.innerHTML = ''
  })

  it('should set isLoad to true if element null', () => {
    document.body.innerHTML = null as unknown as string
    const { isLoad } = useLoadTeleport('#test-element')

    expect(isLoad.value).toBe(false)
  })

  it('should set isLoad to true if element exists', () => {
    document.body.innerHTML = '<div id="test-element"></div>'

    const { isLoad } = useLoadTeleport('#test-element')

    expect(isLoad.value).toBe(true)
  })

  it('should set isLoad to false if element does not exist', () => {
    const { isLoad } = useLoadTeleport('#non-existent-element')

    expect(isLoad.value).toBe(false)
  })

  it('should handle Ref correctly', () => {
    const appendToRef = ref('#test-element')
    document.body.innerHTML = '<div id="test-element"></div>'

    const { isLoad } = useLoadTeleport(appendToRef)

    expect(isLoad.value).toBe(true)
  })
})
