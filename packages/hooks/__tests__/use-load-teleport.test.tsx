import { ref } from 'vue'
import { beforeEach, describe, expect, it } from 'vitest'
import { useLoadTeleport } from '../use-load-teleport'

describe('useLoadTeleport', () => {
  beforeEach(() => {
    document.body.innerHTML = ''
  })

  it('should set isLoadTeleport to true if element null', () => {
    document.body.innerHTML = null as unknown as string
    const { isLoadTeleport } = useLoadTeleport('#test-element')

    expect(isLoadTeleport.value).toBe(false)
  })

  it('should set isLoadTeleport to true if element exists', () => {
    document.body.innerHTML = '<div id="test-element"></div>'

    const { isLoadTeleport } = useLoadTeleport('#test-element')

    expect(isLoadTeleport.value).toBe(true)
  })

  it('should set isLoadTeleport to false if element does not exist', () => {
    const { isLoadTeleport } = useLoadTeleport('#non-existent-element')

    expect(isLoadTeleport.value).toBe(false)
  })

  it('should handle Ref correctly', () => {
    const appendToRef = ref('#test-element')
    document.body.innerHTML = '<div id="test-element"></div>'

    const { isLoadTeleport } = useLoadTeleport(appendToRef)

    expect(isLoadTeleport.value).toBe(true)
  })
})
