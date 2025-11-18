import { nextTick, ref, shallowRef } from 'vue'
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
    expect(focusHandler).not.toHaveBeenCalled()
    expect(blurHandler).not.toHaveBeenCalled()

    await wrapper.find('input').trigger('focus')
    expect(wrapper.emitted()).toHaveProperty('focus')
    expect(wrapper.find('span').text()).toBe('true')
    expect(focusHandler).toHaveBeenCalled()
    expect(blurHandler).not.toHaveBeenCalled()

    await wrapper.find('input').trigger('blur')
    expect(wrapper.emitted()).toHaveProperty('blur')
    expect(wrapper.find('span').text()).toBe('false')
    expect(blurHandler).toHaveBeenCalled()
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
    expect(focusHandler).not.toHaveBeenCalled()
    expect(blurHandler).not.toHaveBeenCalled()

    await wrapper.find('div').trigger('focus')
    expect(wrapper.emitted()).toHaveProperty('focus')
    expect(wrapper.find('span').text()).toBe('true')
    expect(focusHandler).toHaveBeenCalled()
    expect(blurHandler).not.toHaveBeenCalled()

    await wrapper.find('div').trigger('blur')
    expect(wrapper.emitted()).toHaveProperty('blur')
    expect(wrapper.find('span').text()).toBe('false')
    expect(blurHandler).toHaveBeenCalled()
  })

  it('it will avoid trigger unnecessary blur event', async () => {
    const focusHandler = vi.fn()
    const blurHandler = vi.fn()
    const wrapper = mount({
      emits: ['focus', 'blur'],
      setup() {
        const targetRef = ref()
        const { wrapperRef, isFocused } = useFocusController(targetRef, {
          afterFocus: focusHandler,
          afterBlur: blurHandler,
        })

        return () => (
          <div ref={wrapperRef}>
            <input ref={targetRef} />
            <span>{String(isFocused.value)}</span>
          </div>
        )
      },
    })

    await nextTick()
    expect(wrapper.find('span').text()).toBe('false')
    expect(wrapper.find('div').attributes('tabindex')).toBe('-1')
    expect(focusHandler).not.toHaveBeenCalled()
    expect(blurHandler).not.toHaveBeenCalled()

    await wrapper.find('input').trigger('focus')
    expect(wrapper.emitted()).toHaveProperty('focus')
    expect(wrapper.find('span').text()).toBe('true')
    expect(focusHandler).toHaveBeenCalled()
    expect(blurHandler).not.toHaveBeenCalled()

    await wrapper.find('span').trigger('click')
    expect(wrapper.emitted()).not.toHaveProperty('blur')
    expect(focusHandler).toHaveBeenCalled()
    expect(blurHandler).not.toHaveBeenCalled()

    await wrapper.find('input').trigger('blur')
    expect(wrapper.emitted()).toHaveProperty('blur')
    expect(wrapper.find('span').text()).toBe('false')
    expect(blurHandler).toHaveBeenCalled()
  })

  it('it will avoid trigger unnecessary blur event by beforeBlur', async () => {
    const beforeBlur = vi.fn()
    const wrapper = mount({
      emits: ['focus', 'blur'],
      setup() {
        const targetRef = ref()
        const { wrapperRef, isFocused } = useFocusController(targetRef, {
          afterBlur: () => {
            beforeBlur()
            return true
          },
        })

        return () => (
          <>
            <div ref={wrapperRef}>
              <input ref={targetRef} />
            </div>
            <span>{String(isFocused.value)}</span>
          </>
        )
      },
    })

    await nextTick()
    expect(wrapper.find('span').text()).toBe('false')
    expect(beforeBlur).not.toHaveBeenCalled()

    await wrapper.find('input').trigger('focus')
    expect(wrapper.emitted()).toHaveProperty('focus')
    expect(wrapper.find('span').text()).toBe('true')
    expect(beforeBlur).not.toHaveBeenCalled()

    await wrapper.find('span').trigger('click')
    expect(wrapper.emitted()).not.toHaveProperty('blur')
    expect(beforeBlur).not.toHaveBeenCalled()
  })

  it('it will avoid triggering unnecessary blur events even with multiple input', async () => {
    const focusHandler = vi.fn()
    const blurHandler = vi.fn()
    const wrapper = mount({
      emits: ['focus', 'blur'],
      setup() {
        const targetRef = ref()
        const { isFocused, wrapperRef } = useFocusController(targetRef, {
          afterFocus: focusHandler,
          afterBlur: blurHandler,
        })

        return () => (
          <div ref={wrapperRef}>
            <input ref={targetRef} />
            <input class="input2" />
            <span>{String(isFocused.value)}</span>
          </div>
        )
      },
    })

    await nextTick()
    expect(wrapper.find('span').text()).toBe('false')
    expect(focusHandler).not.toHaveBeenCalled()
    expect(blurHandler).not.toHaveBeenCalled()

    await wrapper.find('input').trigger('focus')
    expect(wrapper.emitted()).toHaveProperty('focus')
    expect(wrapper.find('span').text()).toBe('true')
    expect(focusHandler).toHaveBeenCalled()
    expect(blurHandler).not.toHaveBeenCalled()

    await wrapper.find('.input2').trigger('focus')
    expect(wrapper.emitted()).toHaveProperty('focus')
    expect(wrapper.find('span').text()).toBe('true')
    expect(focusHandler).toHaveBeenCalled()
    expect(blurHandler).not.toHaveBeenCalled()

    await wrapper.find('span').trigger('click')
    expect(wrapper.emitted()).not.toHaveProperty('blur')
    expect(focusHandler).toHaveBeenCalled()
    expect(blurHandler).not.toHaveBeenCalled()

    await wrapper.find('input').trigger('blur')
    expect(wrapper.emitted()).toHaveProperty('blur')
    expect(wrapper.find('span').text()).toBe('false')
    expect(blurHandler).toHaveBeenCalled()
  })

  it('It will decide whether to trigger focus and blur based on the disabled state', async () => {
    const disabled = ref(true)
    const wrapper = mount({
      emits: ['focus', 'blur'],
      setup() {
        const targetRef = ref()
        const { isFocused, wrapperRef } = useFocusController(targetRef, {
          disabled,
        })

        return () => (
          <div ref={wrapperRef}>
            <input ref={targetRef} />
            <span>{String(isFocused.value)}</span>
          </div>
        )
      },
    })

    await wrapper.find('input').trigger('focus')
    expect(wrapper.emitted()).not.toHaveProperty('focus')
    expect(wrapper.find('span').text()).toBe('false')

    disabled.value = false
    await nextTick()
    await wrapper.find('input').trigger('focus')
    expect(wrapper.emitted()).toHaveProperty('focus')
    expect(wrapper.find('span').text()).toBe('true')
  })

  it('only focuses target when click lands inside the target rect', async () => {
    const focusSpy = vi.fn()
    const wrapper = mount({
      setup() {
        const targetRef = shallowRef<HTMLInputElement>()
        const inputEl = document.createElement('input')
        Object.defineProperty(inputEl, 'focus', {
          value: focusSpy,
          configurable: true,
        })
        Object.defineProperty(inputEl, 'getBoundingClientRect', {
          value: () => ({
            x: 100,
            y: 100,
            left: 100,
            top: 100,
            right: 200,
            bottom: 120,
            width: 100,
            height: 20,
            toJSON: () => ({}),
          }),
        })
        targetRef.value = inputEl
        const { wrapperRef } = useFocusController(targetRef)
        return () => <div ref={wrapperRef} class="focus-wrapper"></div>
      },
    })

    await nextTick()
    const wrapperEl = wrapper.find('.focus-wrapper')

    const dispatchClick = (x: number, y: number) => {
      const event = new MouseEvent('click', {
        bubbles: true,
        cancelable: true,
        clientX: x,
        clientY: y,
      })
      wrapperEl.element.dispatchEvent(event)
    }

    // inside the rect -> focus should be called
    dispatchClick(110, 110)
    await nextTick()
    expect(focusSpy).toHaveBeenCalledTimes(1)

    // outside the rect (above top edge) -> focus should not be called
    dispatchClick(110, 90)
    await nextTick()
    expect(focusSpy).toHaveBeenCalledTimes(1)
  })
})
