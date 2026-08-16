import { h, render } from 'vue'
import { config, mount } from '@vue/test-utils'
import { afterEach, beforeEach, describe, expect, it } from 'vitest'
import { ZINDEX_INJECTION_KEY, useZIndex } from '../use-z-index'

describe('no injection value', () => {
  afterEach(() => {
    document.body.innerHTML = ''
  })

  it('useZIndex', () => {
    const wrapper = mount({
      setup() {
        const { initialZIndex, currentZIndex, nextZIndex } = useZIndex()
        return { initialZIndex, currentZIndex, nextZIndex: nextZIndex() }
      },
      render: () => undefined,
    })

    expect(wrapper.vm.initialZIndex).toBe(2000)
    expect(wrapper.vm.currentZIndex).toBe(2001)
    expect(wrapper.vm.nextZIndex).toBe(2001)
  })
})

describe('with injection value', () => {
  beforeEach(() => {
    config.global.provide = {
      [ZINDEX_INJECTION_KEY as symbol]: {
        current: 10,
      },
    }
  })

  afterEach(() => {
    document.body.innerHTML = ''
    config.global.provide = {}
  })

  it('useZIndex', () => {
    const wrapper = mount({
      setup() {
        const { initialZIndex, currentZIndex, nextZIndex } = useZIndex()

        nextZIndex()
        return {
          initialZIndex,
          currentZIndex,
          nextZIndex: nextZIndex(),
        }
      },
      render: () => undefined,
    })

    expect(wrapper.vm.initialZIndex).toBe(2000)
    expect(wrapper.vm.currentZIndex).toBe(2012)
    expect(wrapper.vm.nextZIndex).toBe(2012)
  })
})

describe('with and without injection value', () => {
  beforeEach(() => {
    config.global.provide = {
      [ZINDEX_INJECTION_KEY as symbol]: {
        current: 100,
      },
    }
  })

  afterEach(() => {
    document.body.innerHTML = ''
    config.global.provide = {}
  })

  it('useZIndex', () => {
    const wrapper = mount({
      setup() {
        const { nextZIndex } = useZIndex()
        return { zIndex: nextZIndex() }
      },
      render: () => undefined,
    })

    // rendered without an app context, the way `ElMessage` is
    let zIndexWithoutInjection = 0
    render(
      h({
        setup() {
          const { nextZIndex } = useZIndex()
          zIndexWithoutInjection = nextZIndex()
          return () => undefined
        },
      }),
      document.createElement('div')
    )

    expect(wrapper.vm.zIndex).toBe(2101)
    expect(zIndexWithoutInjection).toBe(2102)
  })
})
