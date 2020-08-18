import { mount } from '@vue/test-utils'
import { h } from 'vue'
import * as Vue from 'vue'
import * as popperExports from '@popperjs/core'
import ElPopper from '../src/index.vue'

import type { VueWrapper } from '@vue/test-utils'

type UnKnownProps = Record<string, unknown>

jest.mock('lodash')

const AXIOM = 'Rem is the best girl'
const Wrapped = (props: UnKnownProps, { slots }) => h('div', h(ElPopper, props, slots))

const Transition = (_: UnKnownProps, { attrs, slots }) => h('div', attrs, slots)
Transition.displayName = 'Transition'
// eslint-disable-next-line
const _mount = (props: Record<string, unknown> = {}, slots = {}): VueWrapper<any> =>
  mount(Wrapped, {
    props,
    slots,
  })

const selector = '[role="tooltip"]'


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
    const { appendChild } = document.body
    document.body.appendChild = jest.fn((child) => {
      return appendChild.call(document.body, child)
    })

    let wrapper = _mount()
    expect(wrapper.find('[role="tooltip"]').exists()).toBe(false)
    expect(document.body.appendChild).toHaveBeenCalled()

    document.body.appendChild = appendChild
    wrapper = _mount({
      appendToBody: false,
    })

    expect(wrapper.find('[role="tooltip"]').exists()).toBe(true)
  })

  test('should show popper when mouse entered and hide when popper left', async () => {
    const referrer = document.createElement('div')
    const wrapper = _mount({
      referrer,
      appendToBody: false,
    })

    expect(wrapper.find(selector).attributes('style')).toContain('display: none')
    await wrapper.find(selector).trigger('mouseenter')

    expect(wrapper.find(selector).attributes('style')).not.toContain('display: none')

    await wrapper.find(selector).trigger('mouseleave')

    expect(wrapper.find(selector).attributes('style')).toContain('display: none')
  })

  test('should be able to manual open', async () => {
    const referrer = document.createElement('div')
    const wrapper = _mount({
      referrer,
      manualMode: true,
      appendToBody: false,
      value: false,
    })
    expect(wrapper.find(selector).attributes('style')).toContain('display: none')
    await wrapper.find(selector).trigger('mouseenter')

    expect(wrapper.find(selector).attributes('style')).toContain('display: none')
    await wrapper.setProps({
      value: true,
    })

    expect(wrapper.find(selector).attributes('style')).not.toContain('display: none')
  })

  test('should disable popper to popup', async () => {
    const referrer = document.createElement('div')
    const wrapper = _mount({
      referrer,
      disabled: true,
      appendToBody: false,
    })

    expect(wrapper.find(selector).attributes('style')).toContain('display: none')
    await wrapper.find(selector).trigger('mouseenter')

    expect(wrapper.find(selector).attributes('style')).toContain('display: none')

    await wrapper.setProps({
      disabled: false,
    })
    await wrapper.find(selector).trigger('mouseenter')

    expect(wrapper.find(selector).attributes('style')).not.toContain('display: none')
  })

  test('should add tabindex to referrer', async () => {
    const referrer = document.createElement('div')
    const wrapper = _mount({
      appendToBody: false,
    })
    expect(referrer.getAttribute('tabindex')).toBeNull()

    await wrapper.setProps({
      referrer,
    })

    expect(referrer.getAttribute('tabindex')).not.toBeNull()
  })

  test('should destroy old popper and initialize a new popper', async () => {
    const referrer = document.createElement('div')
    const wrapper = _mount({
      appendToBody: false,
    })

    await wrapper.setProps({
      referrer,
    })

    expect(popperExports.createPopper).toHaveBeenCalledTimes(1)

    await wrapper.setProps({
      referrer: document.createElement('div'),
    })

    expect(popperExports.createPopper).toHaveBeenCalledTimes(2)
  })
})
