import { ref } from 'vue'
import { mount } from '@vue/test-utils'
import { describe, expect, it } from 'vitest'
import Rate from '../src/rate.vue'

import type { RateInstance } from '../src/rate'

describe('Rate.vue', () => {
  it('create', () => {
    const wrapper = mount(Rate, {
      props: {
        max: 10,
      },
    })
    const stars = wrapper.findAll('.el-rate__item')
    expect(stars.length).toMatchInlineSnapshot('10')
  })

  it('size', async () => {
    const wrapper = mount(Rate, {
      props: {
        size: 'large',
      },
    })
    expect(wrapper.find('.el-rate--large').exists()).toBe(true)
    await wrapper.setProps({ size: '' })
    expect(wrapper.find('.el-rate').exists()).toBe(true)
  })

  it('allow half', async () => {
    const value = ref(0)
    const wrapper = mount(() => <Rate v-model={value.value} allowHalf />)
    const vm = wrapper.getComponent(Rate).vm as RateInstance

    const secondStar = wrapper.findAll('.el-rate__item')[1]
      .element as HTMLElement
    vm.setCurrentValue(1, {
      target: secondStar,
      offsetX: 0,
    } as any as MouseEvent)
    secondStar.click()
    vm.resetCurrentValue()
    expect(value.value).toEqual(0.5)
  })

  it('with texts', () => {
    const wrapper = mount(Rate, {
      props: {
        showText: true,
        modelValue: 4,
        texts: ['1', '2', '3', '4', '5'],
      },
    })
    const text = wrapper.find('.el-rate__text').element
    expect(text.textContent).toMatchInlineSnapshot('"4"')
  })

  it('value change', async () => {
    const wrapper = mount(Rate, {
      props: {
        modelValue: 0,
      },
    })
    const vm = wrapper.vm
    await wrapper.setProps({ modelValue: 3 })
    expect(vm.modelValue).toMatchInlineSnapshot('3')
  })

  it('click', () => {
    const value1 = ref(0)
    const wrapper = mount(() => <Rate v-model={value1.value} />)

    const thirdStar = wrapper.findAll('.el-rate__item')[2]
      .element as HTMLElement
    thirdStar.click()

    expect(value1.value).toEqual(3)
  })

  it('colors', () => {
    const value = ref(4)
    const wrapper = mount(() => (
      <Rate v-model={value.value} colors={['#99A9BF', '#F7BA2A', '#FF9900']} />
    ))

    const rateEl = wrapper.find('.el-rate').element as HTMLElement
    expect(rateEl.style.getPropertyValue('--el-rate-fill-color')).toBe(
      '#FF9900'
    )
  })

  it('change event', () => {
    const value = ref(4)
    const changeCount = ref(0)
    const handleChange = () => {
      changeCount.value++
    }
    const wrapper = mount(() => (
      <Rate v-model={value.value} onChange={handleChange} />
    ))

    const fourthStar = wrapper.findAll('.el-rate__item')[3]
      .element as HTMLElement
    fourthStar.click()

    expect(value.value).toEqual(4)
    expect(changeCount.value).toEqual(0)
    const fifthStar = wrapper.findAll('.el-rate__item')[4]
      .element as HTMLElement
    fifthStar.click()
    expect(value.value).toEqual(5)
    expect(changeCount.value).toEqual(1)
  })
})
