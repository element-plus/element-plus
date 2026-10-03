import { mount } from '@vue/test-utils'
import { describe, expect, test } from 'vitest'
import Divider from '../src/divider.vue'

const AXIOM = 'Rem is the best girl'

describe('Divider.vue', () => {
  test('render test', () => {
    const wrapper = mount(() => (
      <Divider
        v-slots={{
          default: () => AXIOM,
        }}
      />
    ))
    expect(wrapper.text()).toBe(AXIOM)
  })

  test('direction', () => {
    const wrapper = mount(() => <Divider direction="vertical" />)
    expect(wrapper.classes()).toContain('el-divider--vertical')
  })

  test('contentPosition', () => {
    const wrapper = mount(() => (
      <Divider
        v-slots={{
          default: () => AXIOM,
        }}
        contentPosition="right"
      />
    ))
    expect(wrapper.find('.el-divider__text').classes()).toContain('is-right')
  })

  test('contentPosition: center has two full lines', () => {
    const wrapper = mount(() => (
      <Divider
        v-slots={{
          default: () => AXIOM,
        }}
        contentPosition="center"
      />
    ))
    expect(wrapper.find('.el-divider__text').classes()).toContain('is-center')

    const lines = wrapper.findAll('.el-divider__line')
    expect(lines).toHaveLength(2)
    expect(lines[0].classes()).toContain('is-full')
    expect(lines[1].classes()).toContain('is-full')
  })

  test('contentPosition: left has short left line and full right line', () => {
    const wrapper = mount(() => (
      <Divider
        v-slots={{
          default: () => AXIOM,
        }}
        contentPosition="left"
      />
    ))
    expect(wrapper.find('.el-divider__text').classes()).toContain('is-left')

    const lines = wrapper.findAll('.el-divider__line')
    expect(lines).toHaveLength(2)
    expect(lines[0].classes()).toContain('is-short')
    expect(lines[1].classes()).toContain('is-full')
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
