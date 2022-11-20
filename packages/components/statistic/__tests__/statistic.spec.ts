import { mount } from '@vue/test-utils'
import { describe, expect, it } from 'vitest'
import Statistic from '../src/index.vue'
describe('Statistic.vue', () => {
  it('render test', async () => {
    const wrapper = mount(Statistic, {
      propsData: {
        value: 57454157,
        title: 'test',
      },
    })
    await wrapper.vm.$nextTick()
    expect(wrapper.text()).toBe('test57,454,157.00')
  })
  it('basics test', async () => {
    const wrapper = mount(Statistic, {
      propsData: {
        value: 268500.123456,
        title: 'test',
      },
    })
    await wrapper.vm.$nextTick()
    expect(wrapper.text()).toBe('268,500.123456')
  })
  it('Front and rear', async () => {
    const wrapper = mount(Statistic, {
      propsData: {
        value: 57454157,
        prefix: 'Front',
        suffix: 'rear',
      },
    })
    await wrapper.vm.$nextTick()
    expect(wrapper.text()).toBe('Front57,454,157.00rear')
  })
  it('Accuracy check', async () => {
    const wrapper = mount(Statistic, {
      propsData: {
        value: 1,
        precision: 4,
      },
    })
    await wrapper.vm.$nextTick()
    expect(wrapper.text()).toBe('1.0000')
  })

  it('should work', async () =>
    new Promise((done) => {
      const wrapper = mount(Statistic, {
        propsData: {
          value: Date.now() + 200,
          timeIndices: true,
          finish: () => {
            console.log('end')
          },
        },
      })
      setTimeout(() => {
        expect(wrapper.emitted().finish).toBeTruthy()
        done()
      }, 300)
    }))
})
