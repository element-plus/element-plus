import { nextTick, ref } from 'vue'
import { mount } from '@vue/test-utils'
import { describe, expect, test } from 'vitest'
import Segmented from '../src/segmented.vue'

describe('Segmented.vue', () => {
  test('render test', async () => {
    const value = ref('Mon')
    const options = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
    const wrapper = mount(() => (
      <Segmented v-model={value.value} options={options}></Segmented>
    ))
    await nextTick()
    expect(wrapper.find('.is-selected').text()).toEqual('Mon')
  })

  test('render v-model', async () => {
    const value = ref('Mon')
    const options = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
    const wrapper = mount(() => (
      <Segmented v-model={value.value} options={options}></Segmented>
    ))
    expect(wrapper.find('.is-selected').text()).toEqual('Mon')
    value.value = 'Tue'
    await nextTick()
    expect(wrapper.find('.is-selected').text()).toEqual('Tue')
  })

  test('render options', async () => {
    const value = ref('Mon')
    const options = ref(['a', 'b'])
    const wrapper = mount(() => (
      <Segmented v-model={value.value} options={options.value}></Segmented>
    ))
    await nextTick()
    expect(wrapper.findAll('.el-segmented__item').length).toEqual(2)
    options.value.push('c')
    await nextTick()
    expect(wrapper.findAll('.el-segmented__item').length).toEqual(3)
  })

  test('render block', async () => {
    const value = ref('Mon')
    const options = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
    const wrapper = mount(() => (
      <Segmented v-model={value.value} options={options} block></Segmented>
    ))
    await nextTick()
    expect(wrapper.find('.is-block').exists()).toBe(true)
  })

  test('render size', async () => {
    const value = ref('Mon')
    const options = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
    const wrapper = mount(() => (
      <Segmented
        v-model={value.value}
        options={options}
        size={'large'}
      ></Segmented>
    ))
    await nextTick()
    expect(wrapper.find('.el-segmented--large').exists()).toBe(true)
  })

  test('render disabled', async () => {
    const value = ref('Mon')
    const options = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
    const wrapper = mount(() => (
      <Segmented v-model={value.value} options={options} disabled></Segmented>
    ))
    await nextTick()
    // 8 = options.length + .el-segmented__item-selected
    expect(wrapper.findAll('.is-disabled').length).toBe(8)
  })

  test('render option disabled', async () => {
    const value = ref('Mon')
    const options = [
      {
        label: 'Mon',
        value: 'Mon',
        disabled: true,
      },
      {
        label: 'Tue',
        value: 'Tue',
      },
      {
        label: 'Wed',
        value: 'Wed',
        disabled: true,
      },
      {
        label: 'Thu',
        value: 'Thu',
      },
      {
        label: 'Fri',
        value: 'Fri',
        disabled: true,
      },
      {
        label: 'Sat',
        value: 'Sat',
      },
      {
        label: 'Sun',
        value: 'Sun',
      },
    ]
    const wrapper = mount(() => (
      <Segmented v-model={value.value} options={options}></Segmented>
    ))
    await nextTick()
    // 4 = the disabled options + .el-segmented__item-selected
    expect(wrapper.findAll('.is-disabled').length).toBe(4)
  })

  test('render accessible attributes', async () => {
    const value = ref('Mon')
    const options = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
    const wrapper = mount(() => (
      <Segmented
        v-model={value.value}
        options={options}
        id={'id'}
        name={'name'}
        aria-label={'label'}
      ></Segmented>
    ))
    const input = wrapper.find('input')
    await nextTick()
    expect(wrapper.attributes('id')).toEqual('id')
    expect(wrapper.attributes('aria-label')).toEqual('label')
    expect(input.attributes('name')).toEqual('name')
  })

  test('async disabled', async () => {
    const value = ref('Mon')
    const options = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
    const disabled = ref(false)
    const wrapper = mount(() => (
      <Segmented
        v-model={value.value}
        options={options}
        disabled={disabled.value}
      ></Segmented>
    ))
    expect(wrapper.find('.is-selected').text()).toEqual('Mon')
    disabled.value = true
    await nextTick()
    expect(
      wrapper
        .find('.el-segmented__item-selected')
        .classes()
        .includes('is-disabled')
    ).toBeTruthy()
  })
})
