import { mount } from '@vue/test-utils'
import Overlay from '../src/overlay'

const AXIOM = 'Rem is the best girl'

describe('Overlay.vue', () => {
  test('render test', async () => {
    const wrapper = mount(Overlay, {
      slots: {
        default: AXIOM,
      },
    })
    expect(wrapper.text()).toEqual(AXIOM)
    const testClass = 'test-class'
    await wrapper.setProps({
      overlayClass: testClass,
    })

    expect(wrapper.find(`.${testClass}`)).toBeTruthy()
  })

  test('should emit click event', async () => {
    const wrapper = mount(Overlay, {
      slots: {
        default: AXIOM,
      },
    })
    await wrapper.find('.el-overlay').trigger('click')
    expect(wrapper.emitted()).toBeTruthy()
  })

  test('no mask', async () => {
    const wrapper = mount(Overlay, {
      slots: {
        default: AXIOM,
      },
    })
    const selector = '.el-overlay'
    expect(wrapper.find(selector).exists()).toBe(true)

    await wrapper.setProps({
      mask: false,
    })
    expect(wrapper.find(selector).exists()).toBe(false)
    await wrapper.setProps({
      mask: true,
    })
    expect(wrapper.find(selector).exists()).toBe(true)
  })
})
