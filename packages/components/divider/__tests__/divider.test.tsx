import { mount } from '@vue/test-utils'
import { describe, expect, test } from 'vitest'
import Divider from '../src/divider.vue'

const AXIOM = 'Rem is the best girl'

describe('Divider.vue', () => {
  test('render test', () => {
    const wrapper = mount(() => <Divider>{AXIOM}</Divider>)
    expect(wrapper.text()).toBe(AXIOM)
  })

  test('direction', () => {
    const wrapper = mount(() => <Divider direction="vertical" />)
    expect(wrapper.classes()).toContain('el-divider--vertical')
  })

  test('contentPosition', () => {
    const wrapper = mount(() => (
      <Divider contentPosition="right">{AXIOM}</Divider>
    ))
    expect(wrapper.find('.el-divider__text').classes()).toContain('is-right')
  })

  test('customClass', () => {
    const wrapper = mount(() => <Divider class="customClass" />)
    expect(wrapper.classes()).toContain('customClass')
  })

  test('line-dashed', () => {
    const wrapper = mount(() => <Divider borderStyle="dashed" />)
    expect(
      getComputedStyle(wrapper.element, null).getPropertyValue(
        '--el-border-style'
      )
    ).toBe('dashed')
  })

  test('line-solid', () => {
    const wrapper = mount(() => <Divider direction="vertical" />)
    expect(
      getComputedStyle(wrapper.element, null).getPropertyValue(
        '--el-border-style'
      )
    ).toBe('solid')
  })
})
