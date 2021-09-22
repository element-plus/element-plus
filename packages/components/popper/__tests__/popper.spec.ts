import * as Vue from 'vue'
import { mount } from '@vue/test-utils'
import * as popperExports from '@popperjs/core'
import { rAF } from '@element-plus/test-utils/tick'
import PopupManager from '@element-plus/utils/popup-manager'
import ElPopper from '../src/index.vue'

import type { VueWrapper } from '@vue/test-utils'

type UnknownProps = Record<string, unknown>

jest.useFakeTimers()

const { h, nextTick } = Vue
const AXIOM = 'Rem is the best girl'
const selector = '[role="tooltip"]'
const TEST_TRIGGER = 'test-trigger'
const MOUSE_ENTER_EVENT = 'mouseenter'
const MOUSE_LEAVE_EVENT = 'mouseleave'
const CLICK_EVENT = 'click'
const FOCUS_EVENT = 'focus'
const BLUR_EVENT = 'blur'
const DISPLAY_NONE = 'display: none'

const Wrapped = (props: UnknownProps, { slots }) => {
  return h('div', h(ElPopper, props, slots))
}

// eslint-disable-next-line
const _mount = (props: UnknownProps = {}, slots = {}): VueWrapper<any> =>
  mount(Wrapped, {
    props,
    slots: {
      trigger: () =>
        h('div', {
          class: TEST_TRIGGER,
        }),
      ...slots,
    },
    attachTo: 'body',
  })

const popperMock = jest
  .spyOn(popperExports, 'createPopper')
  .mockImplementation(() => ({
    update: jest.fn(),
    forceUpdate: jest.fn(),
    setOptions: jest.fn(),
    destroy: jest.fn(),
    state: null,
  }))

describe('Popper.vue', () => {
  afterAll(() => {
    popperMock.mockReset()
  })

  beforeEach(() => {
    popperMock.mockClear()
  })

  test('render test', () => {
    let wrapper = _mount(
      {
        appendToBody: false,
      },
      {
        default: () => AXIOM,
      }
    )

    expect(wrapper.text()).toEqual(AXIOM)

    wrapper = _mount({
      content: AXIOM,
      appendToBody: false,
    })

    expect(wrapper.text()).toEqual(AXIOM)
  })

  test('append to body', () => {
    let wrapper = _mount()
    expect(wrapper.find(selector).exists()).toBe(false)

    /**
     * Current layout of `ElPopper`
     *  --> Teleport
     *   --> mask
     *    --> transition
     *     --> popper
     */

    wrapper = _mount({
      appendToBody: false,
    })

    expect(wrapper.find(selector).exists()).toBe(true)
  })

  test('popper z-index should be dynamical', () => {
    const wrapper = _mount({
      appendToBody: false,
    })

    expect(
      Number.parseInt(
        window.getComputedStyle(wrapper.find('.el-popper').element).zIndex
      )
    ).toBeLessThanOrEqual(PopupManager.zIndex)
  })

  test('should show popper when mouse entered and hide when popper left', async () => {
    const wrapper = _mount({
      appendToBody: false,
    })

    const popper = wrapper.find(selector)
    expect(popper.attributes('style')).toContain(DISPLAY_NONE)

    const $trigger = wrapper.find(`.${TEST_TRIGGER}`)
    await $trigger.trigger(MOUSE_ENTER_EVENT)

    expect(popper.attributes('style')).not.toContain(DISPLAY_NONE)

    await $trigger.trigger(MOUSE_LEAVE_EVENT)
  })

  test('should be able to manual open', async () => {
    const wrapper = _mount({
      manualMode: true,
      appendToBody: false,
      visible: false,
    })
    expect(wrapper.find(selector).attributes('style')).toContain(DISPLAY_NONE)
    await wrapper.find(selector).trigger(MOUSE_ENTER_EVENT)

    expect(wrapper.find(selector).attributes('style')).toContain(DISPLAY_NONE)
    await wrapper.setProps({
      visible: true,
    })

    expect(wrapper.find(selector).attributes('style')).not.toContain(
      DISPLAY_NONE
    )
  })

  test('should not stop propagation when stop mode is disabled', async () => {
    const onMouseUp = jest.fn()
    const onMouseDown = jest.fn()
    document.addEventListener('mouseup', onMouseUp)
    document.addEventListener('mousedown', onMouseDown)

    const wrapper = _mount({
      appendToBody: false,
      stopPopperMouseEvent: false,
      visible: true,
    })
    await nextTick()

    await wrapper.find('.el-popper').trigger('mousedown')
    expect(onMouseDown).toHaveBeenCalled()
    await wrapper.find('.el-popper').trigger('mouseup')
    expect(onMouseUp).toHaveBeenCalled()

    await wrapper.setProps({
      stopPopperMouseEvent: true,
    })
    await nextTick()

    await wrapper.find('.el-popper').trigger('mousedown')
    expect(onMouseDown).toHaveBeenCalledTimes(1)
    await wrapper.find('.el-popper').trigger('mouseup')
    expect(onMouseUp).toHaveBeenCalledTimes(1)
    document.removeEventListener('mouseup', onMouseUp)
    document.removeEventListener('mousedown', onMouseDown)
  })

  test('should disable popper to popup', async () => {
    const wrapper = _mount({
      disabled: true,
      appendToBody: false,
    })

    const $trigger = wrapper.find(`.${TEST_TRIGGER}`)
    expect(wrapper.find(selector).attributes('style')).toContain(DISPLAY_NONE)
    await $trigger.trigger(MOUSE_ENTER_EVENT)

    expect(wrapper.find(selector).attributes('style')).toContain(DISPLAY_NONE)

    await wrapper.setProps({
      disabled: false,
    })

    await $trigger.trigger(MOUSE_ENTER_EVENT)

    expect(wrapper.find(selector).attributes('style')).not.toContain(
      DISPLAY_NONE
    )
  })

  test('should initialize a new popper when component mounted', async () => {
    _mount({
      appendToBody: false,
      visible: true,
    })

    // expect(popperExports.createPopper).toHaveBeenCalledTimes(1)
  })

  test('should hide after hide after is given', async () => {
    const wrapper = _mount({
      hideAfter: 200,
      appendToBody: false,
    })
    const $trigger = wrapper.find(`.${TEST_TRIGGER}`)
    await $trigger.trigger(MOUSE_ENTER_EVENT)
    await rAF()
    await nextTick()
    expect(wrapper.find(selector).attributes('style')).not.toContain(
      DISPLAY_NONE
    )

    await $trigger.trigger(MOUSE_LEAVE_EVENT)
    jest.runOnlyPendingTimers()
    await rAF()
    await nextTick()
    expect(wrapper.find(selector).attributes('style')).toContain(DISPLAY_NONE)
  })

  test('should throw error when there is no trigger', async () => {
    const errorHandler = jest.fn()
    mount(Wrapped, {
      slots: {
        trigger: undefined,
      },
      global: {
        config: {
          errorHandler(err: Error) {
            errorHandler(err)
          },
          warnHandler() {
            // suppress warning
          },
        },
      },
    })
    // due to vue catches the error during rendering, and throws it asynchronously
    // the only way to test this is by providing an error handler to catch it
    // first time get caught when calling setup function
    // second time get caught when calling render function
    expect(errorHandler).toHaveBeenCalledTimes(2)
  })
  describe('trigger', () => {
    test('should work with click trigger', async () => {
      const wrapper = _mount({
        trigger: [CLICK_EVENT],
        appendToBody: false,
        hideAfter: 0,
      })
      await nextTick()

      const trigger = wrapper.find(`.${TEST_TRIGGER}`)
      const popper = wrapper.findComponent(ElPopper)

      expect(popper.vm.visibility).toBe(false)
      // for now triggering event on element via DOMWrapper is not available so we need to apply
      // old way
      await trigger.trigger(CLICK_EVENT)

      expect(popper.vm.visibility).toBe(true)

      await trigger.trigger(MOUSE_LEAVE_EVENT)
      expect(popper.vm.visibility).toBe(true)

      await wrapper.find('.el-popper').trigger(MOUSE_LEAVE_EVENT)
      expect(popper.vm.visibility).toBe(true)
      await trigger.trigger(BLUR_EVENT)
      expect(popper.vm.visibility).toBe(true)
      await trigger.trigger(CLICK_EVENT)
      expect(popper.vm.visibility).toBe(false)
    })

    test('should work with string trigger', async () => {
      const wrapper = _mount({
        trigger: CLICK_EVENT,
        appendToBody: false,
        hideAfter: 0,
      })
      await nextTick()

      const trigger = wrapper.find(`.${TEST_TRIGGER}`)
      const popper = wrapper.findComponent(ElPopper)

      await trigger.trigger(CLICK_EVENT)
      expect(popper.vm.visibility).toBe(true)

      await wrapper.find('.el-popper').trigger(MOUSE_LEAVE_EVENT)
      expect(popper.vm.visibility).toBe(true)

      await trigger.trigger(CLICK_EVENT)
      expect(popper.vm.visibility).toBe(false)
    })

    test('should work with hover trigger', async () => {
      const wrapper = _mount({
        trigger: ['hover'],
        appendToBody: false,
        hideAfter: 0,
      })
      await nextTick()

      const trigger = wrapper.find(`.${TEST_TRIGGER}`)
      const popper = wrapper.findComponent(ElPopper)
      expect(popper.vm.visibility).toBe(false)
      // for now triggering event on element via DOMWrapper is not available so we need to apply
      // old way
      await trigger.trigger(MOUSE_ENTER_EVENT)

      expect(popper.vm.visibility).toBe(true)

      await trigger.trigger(BLUR_EVENT)
      expect(popper.vm.visibility).toBe(true)

      await trigger.trigger(MOUSE_LEAVE_EVENT)
      expect(popper.vm.visibility).toBe(false)

      await trigger.trigger(FOCUS_EVENT)
      expect(popper.vm.visibility).toBe(false)

      await trigger.trigger(CLICK_EVENT)
      expect(popper.vm.visibility).toBe(false)
    })

    test('should work with focus trigger', async () => {
      const wrapper = _mount({
        trigger: [FOCUS_EVENT],
        appendToBody: false,
        hideAfter: 0,
      })
      await nextTick()

      const trigger = wrapper.find(`.${TEST_TRIGGER}`)
      const popper = wrapper.findComponent(ElPopper)
      expect(popper.vm.visibility).toBe(false)
      // for now triggering event on element via DOMWrapper is not available so we need to apply
      // old way
      await trigger.trigger(FOCUS_EVENT)
      expect(popper.vm.visibility).toBe(true)

      await trigger.trigger(MOUSE_LEAVE_EVENT)
      expect(popper.vm.visibility).toBe(true)

      await trigger.trigger(CLICK_EVENT)
      expect(popper.vm.visibility).toBe(true)

      await trigger.trigger(BLUR_EVENT)
      expect(popper.vm.visibility).toBe(false)

      await trigger.trigger(MOUSE_ENTER_EVENT)
      expect(popper.vm.visibility).toBe(false)

      await trigger.trigger(CLICK_EVENT)
      expect(popper.vm.visibility).toBe(false)

      // testing
      await trigger.trigger(FOCUS_EVENT)
      expect(popper.vm.visibility).toBe(true)

      await popper.trigger(MOUSE_LEAVE_EVENT)
      expect(popper.vm.visibility).toBe(true)
    })

    test('combined trigger', async () => {
      const wrapper = _mount({
        trigger: [FOCUS_EVENT, CLICK_EVENT, 'hover'],
        appendToBody: false,
        hideAfter: 0,
      })
      await nextTick()

      const trigger = wrapper.find(`.${TEST_TRIGGER}`)
      const popper = wrapper.findComponent(ElPopper)
      expect(popper.vm.visibility).toBe(false)
      // for now triggering event on element via DOMWrapper is not available so we need to apply
      // old way
      await trigger.trigger(CLICK_EVENT)

      expect(popper.vm.visibility).toBe(true)

      await trigger.trigger(BLUR_EVENT)
      expect(popper.vm.visibility).toBe(false)

      await trigger.trigger(MOUSE_ENTER_EVENT)
      expect(popper.vm.visibility).toBe(true)

      await trigger.trigger(CLICK_EVENT)
      expect(popper.vm.visibility).toBe(false)

      await trigger.trigger(FOCUS_EVENT)
      expect(popper.vm.visibility).toBe(true)

      await trigger.trigger(CLICK_EVENT)
      expect(popper.vm.visibility).toBe(true)

      await trigger.trigger(CLICK_EVENT)
      expect(popper.vm.visibility).toBe(false)
    })

    test('should pass style and class to trigger', async () => {
      const CLASS = 'fake'
      const STYLE = 'width: 100px'
      const wrapper = _mount({
        appendToBody: false,
        class: CLASS,
        style: STYLE,
      })

      const trigger = wrapper.find(`.${TEST_TRIGGER}`)
      expect(trigger.classes(CLASS)).toBe(true)
      expect((trigger.element as HTMLDivElement).style.width).toBe('100px')
    })
  })
})
