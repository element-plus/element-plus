import { mount } from '@vue/test-utils'
import { describe, expect, test } from 'vitest'
import Text from '../src/text.vue'

const AXIOM = 'Rem is the best girl'

describe('Text.vue', () => {
  test('render text & class', () => {
    const wrapper = mount(() => (
      <Text
        v-slots={{
          default: () => AXIOM,
        }}
      />
    ))
    const vm = wrapper.vm

    expect(vm.$el.classList.contains('el-text')).toEqual(true)
    expect(wrapper.text()).toEqual(AXIOM)
  })

  test('type', () => {
    const wrapper = mount(() => <Text type="success" />)
    const vm = wrapper.vm
    expect(vm.$el.classList.contains('el-text--success')).toEqual(true)
  })

  test('size', () => {
    const wrapper = mount(() => <Text size="large" />)
    const vm = wrapper.vm
    expect(vm.$el.className.includes('el-text--large')).toEqual(true)
    expect(vm.$el.className.includes('el-text--default')).toEqual(false)
    expect(vm.$el.className.includes('el-text--small')).toEqual(false)
  })

  test('truncated', () => {
    const wrapper = mount(() => <Text truncated />)
    const vm = wrapper.vm
    expect(vm.$el.className.includes('is-truncated')).toEqual(true)
  })

  test('tag', () => {
    const wrapper = mount(() => <Text tag="del" />)
    const vm = wrapper.vm
    expect(vm.$el.tagName).toEqual('DEL')
  })
})
