import { ref } from 'vue'
import { afterAll, beforeAll, describe, expect, it, vi } from 'vitest'
import triggerEvent from '@element-plus/test-utils/trigger-event'
import { usePreventGlobal } from '../use-prevent-global'

describe('usePreventGlobal', () => {
  const evtName = 'keydown'
  const evtHandler = vi.fn()
  beforeAll(() => {
    document.body.addEventListener(evtName, evtHandler)
  })

  afterAll(() => {
    document.body.removeEventListener(evtName, evtHandler)
  })

  it('should prevent global event from happening', () => {
    const visible = ref(true)
    const evt2Trigger = vi.fn().mockReturnValue(true)
    usePreventGlobal(visible, evtName, evt2Trigger)

    triggerEvent(document.body, evtName)

    expect(evtHandler).not.toBeCalled()
    expect(evt2Trigger).toHaveBeenCalled()
    visible.value = false
  })

  it('should not prevent global event from happening', () => {
    const visible = ref(true)
    const evt2Trigger = vi.fn().mockReturnValue(false)
    usePreventGlobal(visible, evtName, evt2Trigger)

    triggerEvent(document.body, evtName)

    expect(evtHandler).toHaveBeenCalled()
    expect(evt2Trigger).toHaveBeenCalled()

    visible.value = false
  })
})
