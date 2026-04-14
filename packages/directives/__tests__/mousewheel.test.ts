import { mount } from '@vue/test-utils'
import { describe, expect, it, vi } from 'vitest'
import Mousewheel, { SCOPE } from '../mousewheel/index'

describe('v-mousewheel directive', () => {
  it('should add wheel event listener on mount', () => {
    const callback = vi.fn()
    const wrapper = mount({
      template: '<div v-mousewheel="callback"></div>',
      directives: { Mousewheel },
      setup: () => ({ callback }),
    })

    expect((wrapper.element as any)[SCOPE]?.wheelHandler).toBeDefined()
  })

  it('should remove wheel event listener on unmount', () => {
    const callback = vi.fn()
    const wrapper = mount({
      template: '<div v-mousewheel="callback"></div>',
      directives: { Mousewheel },
      setup: () => ({ callback }),
    })

    const removeEventListenerSpy = vi.spyOn(
      wrapper.element,
      'removeEventListener'
    )
    wrapper.unmount()

    expect(removeEventListenerSpy).toHaveBeenCalled()
    expect((wrapper.element as any)[SCOPE]?.wheelHandler).toBeUndefined()
  })

  it('should update event listener when value changes', async () => {
    const callback1 = vi.fn()
    const callback2 = vi.fn()

    const wrapper = mount(
      {
        props: ['callback'],
        template: '<div v-mousewheel="callback"></div>',
        directives: { Mousewheel },
      },
      {
        props: { callback: callback1 },
      }
    )

    const oldHandler = (wrapper.element as any)[SCOPE]?.wheelHandler
    await wrapper.setProps({ callback: callback2 })

    expect((wrapper.element as any)[SCOPE]?.wheelHandler).not.toBe(oldHandler)
  })
})
