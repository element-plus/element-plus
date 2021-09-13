import { mount } from '@vue/test-utils'
import Badge from '../src/badge.vue'

const AXIOM = 'Rem is the best girl'

describe('Badge', () => {
  test('has value', () => {
    const wrapper = mount(Badge, {
      props: { value: 80 },
    })
    expect(wrapper.vm.content).toEqual('80')
  })

  test('is fixed', () => {
    const wrapper = mount(Badge, {
      slots: { default: AXIOM },
    })
    expect(wrapper.find('.el-badge__content.is-fixed').exists()).toBe(true)
  })

  test('is dot', () => {
    const wrapper = mount(Badge, {
      props: { isDot: true },
      slots: { default: AXIOM },
    })
    expect(wrapper.find('.el-badge__content.is-dot').exists()).toBe(true)
    expect(
      wrapper.find('.el-badge__content.el-badge__content--danger').exists()
    ).toBe(true)
  })

  test('is dot with type', () => {
    const wrapper = mount(Badge, {
      props: { isDot: true, type: 'success' },
      slots: { default: AXIOM },
    })
    expect(wrapper.find('.el-badge__content.is-dot').exists()).toBe(true)
    expect(
      wrapper.find('.el-badge__content.el-badge__content--success').exists()
    ).toBe(true)
  })

  test('max', async () => {
    const wrapper = mount(Badge, {
      props: { max: 100, value: 200 },
    })
    expect(wrapper.vm.content).toEqual('100+')
    await wrapper.setProps({ value: 80 })
    expect(wrapper.vm.content).toEqual('80')
  })
})
