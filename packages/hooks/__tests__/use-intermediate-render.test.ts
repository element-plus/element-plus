import { nextTick, ref } from 'vue'
import { beforeEach, describe, expect, it, vi } from 'vitest'
import { useDelayedRender } from '../use-intermediate-render'
import type { UseDelayedRenderProps } from '../use-intermediate-render'

describe('useDelayedRender', () => {
  let props: UseDelayedRenderProps
  let indicator: any
  let intermediateIndicator: any
  let beforeShow: any
  let afterShow: any
  let beforeHide: any
  let afterHide: any

  beforeEach(() => {
    beforeShow = vi.fn()
    afterShow = vi.fn()
    beforeHide = vi.fn()
    afterHide = vi.fn()

    indicator = ref(false)
    intermediateIndicator = ref(false)

    props = {
      indicator,
      intermediateIndicator,
      shouldSetIntermediate: vi.fn().mockReturnValue(true),
      beforeShow,
      afterShow,
      beforeHide,
      afterHide,
    }
  })

  it('triggers beforeShow and afterShow hooks when indicator and intermediateIndicator changes to true', async () => {
    useDelayedRender(props)
    indicator.value = true
    intermediateIndicator.value = true

    await nextTick()

    expect(beforeShow).toHaveBeenCalled()
    expect(afterShow).toHaveBeenCalled()
  })

  it('triggers beforeHide and afterHide hooks when indicator and intermediateIndicator changes to false', async () => {
    useDelayedRender(props)
    indicator.value = true
    intermediateIndicator.value = true
    await nextTick()

    indicator.value = false
    intermediateIndicator.value = false
    await nextTick()

    expect(beforeHide).toHaveBeenCalled()
    expect(afterHide).toHaveBeenCalled()
  })

  it('does not trigger hooks when indicator and intermediateIndicator changes but remains same value', async () => {
    useDelayedRender(props)
    indicator.value = true
    intermediateIndicator.value = true
    await nextTick()

    indicator.value = true
    intermediateIndicator.value = true
    await nextTick()

    expect(beforeShow).toHaveBeenCalledTimes(1)
    expect(afterShow).toHaveBeenCalledTimes(1)
  })

  it('sets intermediateIndicator to true when shouldSetIntermediate returns true on show', async () => {
    indicator.value = false
    props.shouldSetIntermediate = vi.fn().mockReturnValue(true)
    useDelayedRender(props)
    await nextTick()

    indicator.value = true
    await nextTick()
    await nextTick()

    expect(intermediateIndicator.value).toBe(true)
  })

  it('sets intermediateIndicator to false when shouldSetIntermediate returns true on hide', async () => {
    props.shouldSetIntermediate = vi.fn().mockReturnValue(true)
    useDelayedRender(props)
    indicator.value = true
    await nextTick()

    indicator.value = false
    await nextTick()

    expect(intermediateIndicator.value).toBe(false)
  })
})
