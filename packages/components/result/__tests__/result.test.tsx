// @ts-nocheck
import { nextTick, ref } from 'vue'
import { mount } from '@vue/test-utils'
import { describe, expect, test } from 'vitest'
import Result from '../src/result.vue'

const AXIOM = 'Rem is the best girl'

describe('Result.vue', () => {
  test('render test', () => {
    const wrapper = mount(() => <Result />)
    expect(wrapper.find('.el-result__icon').exists()).toBe(true)
    expect(wrapper.classes()).toContain('el-result')
  })

  test('should render title props', () => {
    const wrapper = mount(() => <Result title={AXIOM} />)
    expect(wrapper.find('.el-result__title').text()).toBe(AXIOM)
  })

  test('should render sub-title props', () => {
    const wrapper = mount(() => <Result subTitle={AXIOM} />)
    expect(wrapper.find('.el-result__subtitle').text()).toBe(AXIOM)
  })

  test('should render icon props', async () => {
    const icon = ref('success')
    const wrapper = mount(() => <Result icon={icon.value} />)
    expect(wrapper.find('.el-result__icon svg').exists()).toBe(true)
    expect(wrapper.find('.el-result__icon svg').classes()).toContain(
      'icon-success'
    )
    icon.value = 'error'
    await nextTick()
    expect(wrapper.find('.el-result__icon svg').exists()).toBe(true)
    expect(wrapper.find('.el-result__icon svg').classes()).toContain(
      'icon-error'
    )
    icon.value = 'warning'
    await nextTick()
    expect(wrapper.find('.el-result__icon svg').exists()).toBe(true)
    expect(wrapper.find('.el-result__icon svg').classes()).toContain(
      'icon-warning'
    )
    icon.value = 'info'
    await nextTick()
    expect(wrapper.find('.el-result__icon svg').exists()).toBe(true)
    expect(wrapper.find('.el-result__icon svg').classes()).toContain(
      'icon-info'
    )
  })

  test('should render icon slots', () => {
    const wrapper = mount(() => (
      <Result
        v-slots={{
          icon: () => AXIOM,
        }}
      />
    ))
    expect(wrapper.find('.el-result__icon').exists()).toBe(true)
    expect(wrapper.find('.el-result__icon').text()).toBe(AXIOM)
  })

  test('should render title slots', () => {
    const wrapper = mount(() => (
      <Result
        v-slots={{
          title: () => AXIOM,
        }}
      />
    ))
    expect(wrapper.find('.el-result__title').exists()).toBe(true)
    expect(wrapper.find('.el-result__title').text()).toBe(AXIOM)
  })

  test('should render sub-title slots', () => {
    const wrapper = mount(() => (
      <Result
        v-slots={{
          'sub-title': () => AXIOM,
        }}
      />
    ))
    expect(wrapper.find('.el-result__subtitle').exists()).toBe(true)
    expect(wrapper.find('.el-result__subtitle').text()).toBe(AXIOM)
  })

  test('should render extra slots', () => {
    const wrapper = mount(() => (
      <Result
        v-slots={{
          extra: () => AXIOM,
        }}
      />
    ))
    expect(wrapper.find('.el-result__extra').exists()).toBe(true)
    expect(wrapper.find('.el-result__extra').text()).toBe(AXIOM)
  })
})
