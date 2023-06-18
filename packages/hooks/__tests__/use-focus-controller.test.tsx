import { defineComponent, nextTick } from 'vue'
import { mount } from '@vue/test-utils'
import { afterEach, describe, expect, it, vi } from 'vitest'
import sleep from '@element-plus/test-utils/sleep'
import { useFocusController } from '../use-focus-controller'

describe('useFocusController', () => {
  afterEach(() => {
    vi.restoreAllMocks()
  })

  it('it will avoid trigger unnecessary blur event', async () => {
    const focusHandler = vi.fn()
    const blurHandler = vi.fn()
    const wrapper = mount(
      defineComponent({
        emits: ['focus', 'blur'],
        setup() {
          const {
            wrapperRef,
            targetRef,
            isFocused,
            triggerAttrs,
            handleFocus,
            handleBlur,
          } = useFocusController({
            afterFocus: focusHandler,
            afterBlur: blurHandler,
          })

          return () => (
            <div ref={wrapperRef}>
              <input
                ref={targetRef}
                onFocus={handleFocus}
                onBlur={handleBlur}
              />
              <span {...triggerAttrs}>{String(isFocused.value)}</span>
            </div>
          )
        },
      })
    )

    await nextTick()
    expect(wrapper.find('span').text()).toBe('false')
    expect(focusHandler).toHaveBeenCalledTimes(0)
    expect(blurHandler).toHaveBeenCalledTimes(0)

    await wrapper.find('input').trigger('focus')
    expect(wrapper.emitted()).toHaveProperty('focus')
    expect(wrapper.find('span').text()).toBe('true')
    expect(focusHandler).toHaveBeenCalledTimes(1)
    expect(blurHandler).toHaveBeenCalledTimes(0)

    await wrapper.find('span').trigger('click')
    await sleep(0)
    expect(wrapper.emitted()).not.toHaveProperty('blur')
    expect(focusHandler).toHaveBeenCalledTimes(1)
    expect(blurHandler).toHaveBeenCalledTimes(0)

    wrapper.find('input').trigger('blur')
    await sleep(0)
    expect(wrapper.emitted()).toHaveProperty('blur')
    expect(wrapper.find('span').text()).toBe('false')
    expect(blurHandler).toHaveBeenCalledTimes(1)
  })
})
