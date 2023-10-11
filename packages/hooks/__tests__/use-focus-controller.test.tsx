import { nextTick, ref } from 'vue'
import { mount } from '@vue/test-utils'
import { afterEach, describe, expect, it, vi } from 'vitest'
import { useFocusController } from '../use-focus-controller'

describe('useFocusController', () => {
  afterEach(() => {
    vi.restoreAllMocks()
  })

  it('it will trigger focus & blur without wrapperRef', async () => {
    const focusHandler = vi.fn()
    const blurHandler = vi.fn()
    const wrapper = mount({
      emits: ['focus', 'blur'],
      setup() {
        const targetRef = ref()
        const { isFocused, handleFocus, handleBlur } = useFocusController(
          targetRef,
          {
            afterFocus: focusHandler,
            afterBlur: blurHandler,
          }
        )

        return () => (
          <div>
            <input ref={targetRef} onFocus={handleFocus} onBlur={handleBlur} />
            <span>{String(isFocused.value)}</span>
          </div>
        )
      },
    })

    await nextTick()
    expect(wrapper.find('span').text()).toBe('false')
    expect(focusHandler).toHaveBeenCalledTimes(0)
    expect(blurHandler).toHaveBeenCalledTimes(0)

    await wrapper.find('input').trigger('focus')
    expect(wrapper.emitted()).toHaveProperty('focus')
    expect(wrapper.find('span').text()).toBe('true')
    expect(focusHandler).toHaveBeenCalledTimes(1)
    expect(blurHandler).toHaveBeenCalledTimes(0)

    await wrapper.find('input').trigger('blur')
    expect(wrapper.emitted()).toHaveProperty('blur')
    expect(wrapper.find('span').text()).toBe('false')
    expect(blurHandler).toHaveBeenCalledTimes(1)
  })

  it('it will trigger focus & blur with tabindex', async () => {
    const focusHandler = vi.fn()
    const blurHandler = vi.fn()
    const wrapper = mount({
      emits: ['focus', 'blur'],
      setup() {
        const targetRef = ref()
        const { isFocused, handleFocus, handleBlur } = useFocusController(
          targetRef,
          {
            afterFocus: focusHandler,
            afterBlur: blurHandler,
          }
        )

        return () => (
          <div
            ref={targetRef}
            tabindex="0"
            onFocus={handleFocus}
            onBlur={handleBlur}
          >
            <span>{String(isFocused.value)}</span>
          </div>
        )
      },
    })

    await nextTick()
    expect(wrapper.find('span').text()).toBe('false')
    expect(focusHandler).toHaveBeenCalledTimes(0)
    expect(blurHandler).toHaveBeenCalledTimes(0)

    await wrapper.find('div').trigger('focus')
    expect(wrapper.emitted()).toHaveProperty('focus')
    expect(wrapper.find('span').text()).toBe('true')
    expect(focusHandler).toHaveBeenCalledTimes(1)
    expect(blurHandler).toHaveBeenCalledTimes(0)

    await wrapper.find('div').trigger('blur')
    expect(wrapper.emitted()).toHaveProperty('blur')
    expect(wrapper.find('span').text()).toBe('false')
    expect(blurHandler).toHaveBeenCalledTimes(1)
  })

  it('it will avoid trigger unnecessary blur event', async () => {
    const focusHandler = vi.fn()
    const blurHandler = vi.fn()
    const wrapper = mount({
      emits: ['focus', 'blur'],
      setup() {
        const targetRef = ref()
        const { wrapperRef, isFocused, handleFocus, handleBlur } =
          useFocusController(targetRef, {
            afterFocus: focusHandler,
            afterBlur: blurHandler,
          })

        return () => (
          <div ref={wrapperRef}>
            <input ref={targetRef} onFocus={handleFocus} onBlur={handleBlur} />
            <span>{String(isFocused.value)}</span>
          </div>
        )
      },
    })

    await nextTick()
    expect(wrapper.find('span').text()).toBe('false')
    expect(wrapper.find('div').attributes('tabindex')).toBe('-1')
    expect(focusHandler).toHaveBeenCalledTimes(0)
    expect(blurHandler).toHaveBeenCalledTimes(0)

    await wrapper.find('input').trigger('focus')
    expect(wrapper.emitted()).toHaveProperty('focus')
    expect(wrapper.find('span').text()).toBe('true')
    expect(focusHandler).toHaveBeenCalledTimes(1)
    expect(blurHandler).toHaveBeenCalledTimes(0)

    await wrapper.find('span').trigger('click')
    expect(wrapper.emitted()).not.toHaveProperty('blur')
    expect(focusHandler).toHaveBeenCalledTimes(1)
    expect(blurHandler).toHaveBeenCalledTimes(0)

    await wrapper.find('input').trigger('blur')
    expect(wrapper.emitted()).toHaveProperty('blur')
    expect(wrapper.find('span').text()).toBe('false')
    expect(blurHandler).toHaveBeenCalledTimes(1)
  })

  it('it will avoid trigger unnecessary blur event by beforeBlur', async () => {
    const beforeBlur = vi.fn()
    const wrapper = mount({
      emits: ['focus', 'blur'],
      setup() {
        const targetRef = ref()
        const { wrapperRef, isFocused, handleFocus, handleBlur } =
          useFocusController(targetRef, {
            afterBlur: () => {
              beforeBlur()
              return true
            },
          })

        return () => (
          <>
            <div ref={wrapperRef}>
              <input
                ref={targetRef}
                onFocus={handleFocus}
                onBlur={handleBlur}
              />
            </div>
            <span>{String(isFocused.value)}</span>
          </>
        )
      },
    })

    await nextTick()
    expect(wrapper.find('span').text()).toBe('false')
    expect(beforeBlur).toHaveBeenCalledTimes(0)

    await wrapper.find('input').trigger('focus')
    expect(wrapper.emitted()).toHaveProperty('focus')
    expect(wrapper.find('span').text()).toBe('true')
    expect(beforeBlur).toHaveBeenCalledTimes(0)

    await wrapper.find('span').trigger('click')
    expect(wrapper.emitted()).not.toHaveProperty('blur')
    expect(beforeBlur).toHaveBeenCalledTimes(0)
  })
})
