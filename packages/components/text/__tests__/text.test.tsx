import { mount } from '@vue/test-utils'
import { describe, expect, test } from 'vitest'
import Text from '../src/text.vue'

const AXIOM = 'Rem is the best girl'

describe('Text.vue', () => {
  test('create', () => {
    const wrapper = mount(() => <Text />)

    expect(wrapper.classes()).toContain('el-text')
  })

  test('type', () => {
    const wrapper = mount(() => <Text type="success" />)

    expect(wrapper.classes()).toContain('el-text--success')
  })

  test('size', () => {
    const wrapper = mount(() => <Text size="large" />)

    expect(wrapper.classes()).toContain('el-text--large')
  })

  test('truncated', () => {
    const wrapper = mount(() => <Text truncated />)

    expect(wrapper.classes()).toContain('is-truncated')
  })

  test('line-clamp', () => {
    const wrapper = mount(() => <Text line-clamp="2" />)

    expect(wrapper.classes()).toContain('is-line-clamp')
  })

  test('tag', () => {
    const wrapper = mount(() => <Text tag="del" />)

    expect(wrapper.vm.$el.tagName).toEqual('DEL')
  })

  test('default slot', () => {
    const wrapper = mount(() => (
      <Text
        v-slots={{
          default: () => AXIOM,
        }}
      />
    ))

    expect(wrapper.text()).toEqual(AXIOM)
  })
})
