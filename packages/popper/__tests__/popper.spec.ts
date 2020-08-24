import { mount } from '@vue/test-utils'
import * as Vue from 'vue'
import * as popperExports from '@popperjs/core'
import ElPopper from '../src/index.vue'

import type { VueWrapper } from '@vue/test-utils'

type UnKnownProps = Record<string, unknown>

jest.mock('lodash')

jest.useFakeTimers()

const { h, nextTick } = Vue
const AXIOM = 'Rem is the best girl'
const selector = '[role="tooltip"]'
const TEST_TRIGGER = 'test-trigger'
const MOUSE_ENTER_EVENT = 'mouseenter'
const MOUSE_LEAVE_EVENT = 'mouseleave'
const DISPLAY_NONE = 'display: none'

const Wrapped = (props: UnKnownProps, { slots }) => h('div', h(ElPopper, props, slots))
const Transition = (_: UnKnownProps, { attrs, slots }) => h('div', attrs, slots)
Transition.displayName = 'Transition'
// eslint-disable-next-line
const _mount = (props: Record<string, unknown> = {}, slots = {}): VueWrapper<any> =>
  mount(Wrapped, {
    props,
    slots: {
      trigger: () => h('div', {
        class: TEST_TRIGGER,
      }),
      ...slots,
    },
  })


const popperMock = jest.spyOn(popperExports, 'createPopper').mockImplementation(() => ({
  update: jest.fn(),
  forceUpdate: jest.fn(),
  setOptions: jest.fn(),
  destroy: jest.fn(),
  state: null,
}))

describe('Popper.vue', () => {
  // eslint-disable-next-line
  // eslint-disable-next-line
  const oldTransition = Vue.Transition
  beforeAll(() => {
    // eslint-disable-next-line
    ;(Vue as any).Transition = Transition
  })

  afterAll(() => {
    popperMock.mockReset()
    // eslint-disable-next-line
    ;(Vue as any).Transition = oldTransition
  })

  beforeEach(() => {
    popperMock.mockClear()
  })

  test('render test', () => {
    let wrapper = _mount({
      appendToBody: false,
    }, {
      default: () => AXIOM,
    })

    expect(wrapper.text()).toEqual(AXIOM)

    wrapper = _mount({
      appendToBody: false,
      content: AXIOM,
    })

    expect(wrapper.text()).toEqual(AXIOM)
  })

  test('append to body', () => {
    let wrapper = _mount()
    const selector = '[role="tooltip"]'
    expect(wrapper.find(selector).exists()).toBe(false)
    // Due to the parent node of popper is Transition so we should match the grandparent
    expect(document.querySelector(selector).parentElement.parentElement).toBe(document.body)
    wrapper = _mount({
      appendToBody: false,
    })

    expect(wrapper.find('[role="tooltip"]').exists()).toBe(true)
  })

  test('should show popper when mouse entered and hide when popper left', async () => {
    const wrapper = _mount({
      appendToBody: false,
    })

    expect(wrapper.find(selector).attributes('style')).toContain(DISPLAY_NONE)
    await wrapper.find(selector).trigger(MOUSE_ENTER_EVENT)

    expect(wrapper.find(selector).attributes('style')).not.toContain(DISPLAY_NONE)

    await wrapper.find(selector).trigger(MOUSE_LEAVE_EVENT)

    expect(wrapper.find(selector).attributes('style')).toContain(DISPLAY_NONE)
  })

  test('should be able to manual open', async () => {
    const wrapper = _mount({
      manualMode: true,
      appendToBody: false,
      value: false,
    })
    expect(wrapper.find(selector).attributes('style')).toContain(DISPLAY_NONE)
    await wrapper.find(selector).trigger(MOUSE_ENTER_EVENT)

    expect(wrapper.find(selector).attributes('style')).toContain(DISPLAY_NONE)
    await wrapper.setProps({
      value: true,
    })

    expect(wrapper.find(selector).attributes('style')).not.toContain(DISPLAY_NONE)
  })

  test('should disable popper to popup', async () => {
    const wrapper = _mount({
      disabled: true,
      appendToBody: false,
    })

    expect(wrapper.find(selector).attributes('style')).toContain(DISPLAY_NONE)
    await wrapper.find(selector).trigger(MOUSE_ENTER_EVENT)

    expect(wrapper.find(selector).attributes('style')).toContain(DISPLAY_NONE)

    await wrapper.setProps({
      disabled: false,
    })
    await wrapper.find(selector).trigger(MOUSE_ENTER_EVENT)

    expect(wrapper.find(selector).attributes('style')).not.toContain(DISPLAY_NONE)
  })

  test('should add tab index to referrer', async () => {
    const wrapper = _mount({
      appendToBody: false,
    })
    expect(wrapper.find(`.${TEST_TRIGGER}`).attributes('tabindex')).toBe('0')
  })

  test('should initialize a new popper when component mounted', async () => {
    _mount({
      appendToBody: false,
    })

    expect(popperExports.createPopper).toHaveBeenCalledTimes(1)

  })

  test('should hide after hide after is given', async () => {

    const wrapper = _mount({
      hideAfter: 200,
      appendToBody: false,
    })
    await wrapper.find(selector).trigger(MOUSE_ENTER_EVENT)
    expect(wrapper.find(selector).attributes('style')).not.toContain(DISPLAY_NONE)
    jest.runOnlyPendingTimers()
    await nextTick()
    expect(wrapper.find(selector).attributes('style')).toContain(DISPLAY_NONE)
  })

  test('should throw error when there is no trigger', () => {
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
    expect(errorHandler).toHaveBeenCalledTimes(1)
  })
})
