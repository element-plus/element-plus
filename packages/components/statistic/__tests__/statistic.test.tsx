import { mount } from '@vue/test-utils'
import { describe, expect, it } from 'vitest'
import Statistic from '../src/statistic.vue'
const mountContent = (props = {}) =>
  mount(<Statistic {...props}></Statistic>, {})
describe('Statistic.vue', () => {
  it('render test', async () => {
    const wrapper = mountContent({
      title: 'test',
      value: 57454157,
    })
    await wrapper.vm.$nextTick()
    expect(wrapper.text()).toBe('test57,454,157')
  })
  it('basics test', async () => {
    const wrapper = mountContent({
      value: 268500.123456,
      title: 'test',
    })
    await wrapper.vm.$nextTick()
    expect(wrapper.text()).toBe('test268,500.123456')
  })
  it('Front and rear', async () => {
    const wrapper = mountContent({
      value: 57454157,
      prefix: 'Front',
      suffix: 'rear',
      precision: 2,
    })
    await wrapper.vm.$nextTick()
    expect(wrapper.text()).toBe('Front57,454,157.00rear')
  })
  it('Accuracy check', async () => {
    const wrapper = mountContent({
      value: 1,
      precision: 4,
    })
    await wrapper.vm.$nextTick()
    expect(wrapper.text()).toBe('1.0000')
  })
  it('rate test', async () => {
    const wrapper = mountContent({
      value: 123456789,
      groupSeparator: ' ',
      rate: 10000,
      precision: 2,
    })
    await wrapper.vm.$nextTick()
    expect(wrapper.text()).toBe('1 2345 6789.00')
  })

  // it('should work', async () =>
  //   new Promise((done) => {
  //     const wrapper = mountContent({
  //       value: Date.now() + 200,
  //       timeIndices: true,
  //       finish: () => {
  //         console.log('end')
  //       },
  //     })

  //     setTimeout(() => {
  //       expect(wrapper.emitted().finish).toBeTruthy()
  //       done()
  //     }, 300)
  //   }))
})
