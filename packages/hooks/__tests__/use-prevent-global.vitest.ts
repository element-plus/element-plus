import { ref } from 'vue'
import {
  describe,
  it,
  expect,
  beforeAll,
  beforeEach,
  afterAll,
  fn,
} from 'vitest'
import triggerEvent from '@element-plus/test-utils/trigger-event'
import { usePreventGlobal } from '../use-prevent-global'

describe('usePreventGlobal', () => {
  const evtName = 'keydown'
  const evtHandler = fn()
  beforeAll(() => {
    document.body.addEventListener(evtName, evtHandler)
  })

  beforeEach(() => {
    evtHandler.mockClear()
  })

  afterAll(() => {
    document.body.removeEventListener(evtName, evtHandler)
  })

  it('should prevent global event from happening', () => {
    const visible = ref(true)
    const evt2Trigger = fn().mockReturnValue(true)
    usePreventGlobal(visible, evtName, evt2Trigger)

    triggerEvent(document.body, evtName)

    expect(evtHandler).not.toBeCalled()
    expect(evt2Trigger).toHaveBeenCalled()
    visible.value = false
  })

  it('should not prevent global event from happening', () => {
    const visible = ref(true)
    const evt2Trigger = fn().mockReturnValue(false)
    usePreventGlobal(visible, evtName, evt2Trigger)

    triggerEvent(document.body, evtName)

    expect(evtHandler).toHaveBeenCalled()
    expect(evt2Trigger).toHaveBeenCalled()

    visible.value = false
  })
})
